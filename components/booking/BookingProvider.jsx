"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiX,
} from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

import { bookingFlows, getBookingFlow } from "../../lib/bookingFlows";
import { whatsappSendUrl } from "../../lib/site";
import useFocusTrap from "../../lib/useFocusTrap";

const BookingContext = createContext(null);

const AVAILABILITY_OPTIONS = [
  { value: "Cât mai curând", detail: "Cât mai repede" },
  { value: "Săptămâna viitoare", detail: "Planificat" },
  { value: "Luna aceasta", detail: "Relaxat" },
  { value: "Oricând", detail: "Sunt flexibil(ă)" },
];

const TIME_OPTIONS = ["Dimineață", "După-amiază", "Oricând"];

const WHATSAPP_EMOJI = {
  wave: "\u{1f44b}\u{1f3fb}",
  availability: "\u{1f4c5}",
  time: "\u{1f551}",
  name: "\u{1f575}\u{1f3fb}\u{200d}\u{2642}\u{fe0f}",
  idea: "\u{1f4ad}",
  reference: "\u{1f4f7}",
};

/**
 * Every field starts unanswered — `null` for a slider, "" for the rest. A
 * slider that opened on a plausible-looking bracket used to sail past anyone
 * who did not read it closely, and sent that guess as if it were their answer.
 */
const createInitialDetails = (flow) =>
  (flow?.fields ?? []).reduce((details, field) => {
    details[field.name] = field.type === "range" ? null : "";

    return details;
  }, {});

const createInitialForm = (flow) => ({
  service: flow?.key ?? "",
  details: createInitialDetails(flow),
  customs: {},
  availability: "",
  time: "",
  name: "",
  idea: "",
  reference: "",
});

/** The answer as it should read on WhatsApp — "" when nothing was picked. */
const fieldAnswer = (field, form) => {
  const value = form.details[field.name];

  if (field.type === "range") {
    const option = field.options[value];
    return option ? `${option.label} (${option.detail})` : "";
  }

  if (!value) return "";

  if (field.otherOption && value === field.otherOption) {
    return form.customs[field.name]?.trim() || value;
  }

  return value;
};

const fieldComplete = (field, form) => {
  if (!field.required) return true;

  const value = form.details[field.name];
  if (field.type === "range") return value !== null;
  if (!value) return false;

  return field.otherOption && value === field.otherOption
    ? Boolean(form.customs[field.name]?.trim())
    : true;
};

/**
 * What is still holding this step up, in the reader's own words — or null when
 * nothing is.
 *
 * The forward button used to dim to 35% opacity and say nothing else. On the
 * details step, where some questions are required and some are marked
 * optional, that left people rereading four answers to find the one they had
 * missed. This is also the single source for whether the step can advance, so
 * the button state and the explanation can never disagree.
 */
const missingOn = (current, flow, form) => {
  if (!flow) return "Alege un serviciu.";

  if (current === "service") return null;

  const list = (parts, join) =>
    parts.length ? `Mai lipsește: ${parts.join(join)}.` : null;

  if (current === "details")
    return list(
      flow.fields
        .filter((field) => !fieldComplete(field, form))
        .map((field) => (field.label ?? field.summaryLabel).toLowerCase()),
      ", ",
    );

  if (current === "availability")
    return form.availability ? null : "Alege o perioadă.";

  return list(
    [
      form.name.trim() ? null : "numele tău",
      !flow.idea.required || form.idea.trim()
        ? null
        : flow.idea.label.toLowerCase(),
    ].filter(Boolean),
    " și ",
  );
};

/**
 * Three shapes of the same answer button:
 *
 * - `card` — two lines of text, read left to right, tick on the right.
 * - `tile` — a single label in a fixed-width grid cell.
 * - `pill` — a single label, width follows the text.
 *
 * The last two centre their label, so their tick sits outside the flow and the
 * padding leaves room for it. Reserving that room in the flow instead would
 * eat enough width to wrap two-word labels onto a second line.
 */
const VARIANTS = {
  card: "min-h-12 justify-between rounded-xl px-4 py-3 text-left sm:px-5",
  tile: "min-h-12 justify-center rounded-xl px-3 py-3 text-center sm:px-4",
  pill: "min-h-11 justify-center rounded-full px-8 py-3 text-center",
};

const BookingOption = ({
  active,
  children,
  onClick,
  ref,
  tabIndex,
  variant = "card",
}) => (
  <button
    ref={ref}
    type="button"
    role="radio"
    aria-checked={active}
    tabIndex={tabIndex}
    onClick={onClick}
    className={`group relative flex items-center gap-3 border transition-all duration-300 ${
      VARIANTS[variant]
    } ${
      active
        ? "border-accent bg-accent/12 text-fg shadow-[0_8px_28px_-18px_rgba(212,179,154,0.9)]"
        : "text-fg/70 hover:border-accent/40 hover:text-fg border-white/8 bg-white/[0.025] hover:bg-white/[0.05]"
    }`}
  >
    <span className="min-w-0">{children}</span>
    <FiCheck
      className={`text-accent shrink-0 text-base transition-opacity duration-300 ${
        variant === "card" ? "" : "absolute right-2.5 sm:right-3"
      } ${active ? "opacity-100" : "opacity-0"}`}
      aria-hidden="true"
    />
  </button>
);

/**
 * A group of answer buttons that behaves the way a set of radios is supposed
 * to: one Tab stop for the whole group, arrows to move between the options.
 *
 * Every group in the wizard already declared `role="radiogroup"`, which
 * promises exactly that — but each option was its own Tab stop and the arrow
 * keys did nothing, so a keyboard user tabbed through eight buttons to answer
 * one question, and a screen-reader user was told to press arrows that had no
 * effect. The services tabs on /servicii got this right; this brings the
 * wizard in line with them.
 *
 * `options` is `{ value, content }` — the label markup differs per group, the
 * keyboard behaviour does not.
 */
const RadioGroup = ({
  ariaLabel,
  className,
  onChange,
  options,
  value,
  variant,
}) => {
  const refs = useRef({});

  // The roving Tab stop. Before anything is picked there is no selection to
  // rove from, so the first option holds it — that is what the pattern asks
  // for, and it means Tab always lands somewhere useful.
  const stop = options.some((option) => option.value === value)
    ? value
    : options[0]?.value;

  const focusValue = (next) => {
    onChange(next);
    refs.current[next]?.focus();
  };

  // Both axes: these groups are a grid on some steps and a row on others, and
  // the reader should not have to work out which before pressing a key.
  const onKeyDown = (event) => {
    const jump = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    }[event.key];

    if (jump) {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === stop);
      focusValue(
        options[(index + jump + options.length) % options.length].value,
      );
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      focusValue(options[event.key === "Home" ? 0 : options.length - 1].value);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={className}
      onKeyDown={onKeyDown}
    >
      {options.map((option) => (
        <BookingOption
          key={option.value}
          ref={(node) => {
            refs.current[option.value] = node;
          }}
          active={value === option.value}
          onClick={() => onChange(option.value)}
          tabIndex={option.value === stop ? 0 : -1}
          variant={variant}
        >
          {option.content}
        </BookingOption>
      ))}
    </div>
  );
};

const StepHeading = ({ kicker, title, description }) => (
  <div>
    <p className="text-accent text-[0.65rem] font-semibold tracking-[0.24em] uppercase">
      {kicker}
    </p>
    <h3 className="font-display mt-3 text-2xl sm:text-3xl">{title}</h3>
    <p className="text-muted mt-3 max-w-xl text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const FieldLabel = ({ children, optional }) => (
  <p className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
    {children}
    {optional && <span className="text-muted"> (opțional)</span>}
  </p>
);

const ChoiceField = ({ field, form, updateCustom, updateDetail }) => {
  const value = form.details[field.name];

  return (
    <div>
      {field.label && (
        <FieldLabel optional={!field.required}>{field.label}</FieldLabel>
      )}

      <RadioGroup
        ariaLabel={field.ariaLabel}
        className={`grid grid-cols-2 gap-2 sm:grid-cols-4 ${
          field.label ? "mt-4" : ""
        }`}
        onChange={(option) => updateDetail(field.name, option)}
        options={field.options.map((option) => ({
          value: option,
          content: (
            <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase">
              {option}
            </span>
          ),
        }))}
        value={value}
        variant="tile"
      />

      {field.otherOption && value === field.otherOption && (
        <input
          type="text"
          value={form.customs[field.name] ?? ""}
          onChange={(event) => updateCustom(field.name, event.target.value)}
          placeholder={field.otherPlaceholder}
          aria-label={field.otherAriaLabel}
          className="booking-input mt-3"
        />
      )}
    </div>
  );
};

const PillsField = ({ field, form, updateDetail }) => (
  <div>
    {field.label && (
      <FieldLabel optional={!field.required}>{field.label}</FieldLabel>
    )}

    <RadioGroup
      ariaLabel={field.ariaLabel}
      className={`flex flex-wrap gap-2 ${field.label ? "mt-4" : ""}`}
      onChange={(option) => updateDetail(field.name, option)}
      options={field.options.map((option) => ({
        value: option,
        content: <span className="text-xs font-semibold">{option}</span>,
      }))}
      value={form.details[field.name]}
      variant="pill"
    />
  </div>
);

/**
 * Until the visitor moves it, the slider shows no answer at all: empty track,
 * plain markers, a prompt instead of a bracket. The native handle is invisible
 * anyway — what looks like the handle is the active marker — so an untouched
 * slider reads as a row of dots waiting to be chosen from.
 */
const RangeField = ({ field, form, updateDetail }) => {
  const chosen = form.details[field.name];
  const picked = chosen !== null;
  const index = picked ? chosen : (field.startIndex ?? 0);
  const option = field.options[index];

  // Dragging the handle back where it started fires no change event, so
  // releasing the pointer counts as choosing whatever sits under it.
  const commit = (event) =>
    updateDetail(field.name, Number(event.target.value));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <FieldLabel>{field.label}</FieldLabel>
        <div className="text-right">
          {picked ? (
            <>
              <p className="text-accent text-xs font-semibold">
                {option.label}
              </p>
              <p className="text-muted mt-0.5 text-[0.65rem]">
                {option.detail}
              </p>
            </>
          ) : (
            <p className="text-muted text-xs font-semibold">
              {field.placeholder}
            </p>
          )}
        </div>
      </div>

      <div className="booking-range-shell mt-5 px-1">
        <div className="booking-range-track">
          <div className="booking-range-markers" aria-hidden="true">
            {field.options.map((item, i) => (
              <span
                key={item.label}
                className={`booking-range-marker ${
                  !picked
                    ? ""
                    : i === index
                      ? "booking-range-marker-active"
                      : i < index
                        ? "booking-range-marker-past"
                        : ""
                }`}
              />
            ))}
          </div>
          <input
            type="range"
            min="0"
            max={field.options.length - 1}
            step="1"
            value={index}
            onChange={commit}
            onPointerUp={commit}
            aria-label={field.ariaLabel}
            aria-valuetext={
              picked ? `${option.label}, ${option.detail}` : field.placeholder
            }
            className="booking-range"
            style={{
              "--range-progress": picked
                ? `${(index / (field.options.length - 1)) * 100}%`
                : "0%",
            }}
          />
        </div>
        <div className="text-muted mt-3 flex justify-between gap-2 text-[0.6rem] sm:text-[0.65rem]">
          {field.options.map((item, i) => (
            <span
              key={item.label}
              className={`text-center transition-colors duration-200 ${
                picked && i === index ? "text-accent font-semibold" : ""
              }`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FIELD_COMPONENTS = {
  choice: ChoiceField,
  pills: PillsField,
  range: RangeField,
};

const ServiceStep = ({ chooseService, form, kicker }) => (
  <div className="space-y-8">
    <StepHeading
      kicker={kicker}
      title="Ce serviciu te interesează?"
      description="Alege serviciul și continuăm cu întrebările potrivite pentru el."
    />

    <RadioGroup
      ariaLabel="Serviciu"
      className="grid gap-2 sm:grid-cols-2"
      onChange={chooseService}
      options={bookingFlows.map((flow) => ({
        value: flow.key,
        content: (
          <>
            <span className="block text-sm font-semibold">{flow.label}</span>
            <span className="text-muted mt-1 block text-xs">
              {flow.pickerDetail}
            </span>
          </>
        ),
      }))}
      value={form.service}
    />
  </div>
);

const DetailsStep = ({ flow, form, kicker, updateCustom, updateDetail }) => (
  <div className="space-y-8">
    <StepHeading
      kicker={kicker}
      title={flow.detailsTitle}
      description={flow.detailsDescription}
    />

    {flow.fields.map((field) => {
      const Field = FIELD_COMPONENTS[field.type];

      return (
        <Field
          key={field.name}
          field={field}
          form={form}
          updateCustom={updateCustom}
          updateDetail={updateDetail}
        />
      );
    })}
  </div>
);

const AvailabilityStep = ({ form, kicker, updateForm }) => (
  <div className="space-y-8">
    <StepHeading
      kicker={kicker}
      title="Când ești disponibil?"
      description="Alege perioada care ți se potrivește. Revenim pe WhatsApp pentru o zi și o oră exacte."
    />

    <div className="-mt-1">
      <RadioGroup
        ariaLabel="Disponibilitate"
        className="grid gap-2 sm:grid-cols-2"
        onChange={(option) => updateForm("availability", option)}
        options={AVAILABILITY_OPTIONS.map((option) => ({
          value: option.value,
          content: (
            <>
              <span className="block text-sm font-semibold">
                {option.value}
              </span>
              <span className="text-muted mt-1 block text-xs">
                {option.detail}
              </span>
            </>
          ),
        }))}
        value={form.availability}
      />
    </div>

    <div>
      <FieldLabel optional>Preferință orară</FieldLabel>
      <RadioGroup
        ariaLabel="Preferință orară"
        className="mt-4 flex flex-wrap gap-2"
        onChange={(time) => updateForm("time", time)}
        options={TIME_OPTIONS.map((time) => ({
          value: time,
          content: <span className="text-xs font-semibold">{time}</span>,
        }))}
        value={form.time}
        variant="pill"
      />
    </div>
  </div>
);

/**
 * The wizard collects a name and a free-text description and hands them to
 * WhatsApp, so the visitor has to be told that before they press send — not
 * after, on a page they would have to go looking for. Opened in a new tab on
 * purpose: following the link in place would throw away a half-filled form.
 */
const PrivacyNote = () => (
  <p className="text-muted border-t border-white/8 pt-5 text-xs leading-relaxed">
    Apăsând „Trimite cererea” deschizi WhatsApp cu mesajul de mai sus, iar
    conversația se poartă prin Meta. Folosim datele doar ca să îți răspundem și
    să stabilim programarea. Detalii în{" "}
    <a
      href="/confidentialitate"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent-bright underline underline-offset-2 transition-colors duration-300"
    >
      politica de confidențialitate
    </a>
    .
  </p>
);

const ContactStep = ({ flow, form, kicker, updateForm }) => (
  <div className="space-y-7">
    <StepHeading
      kicker={kicker}
      title="Spune-ne ce ai în minte."
      description="Lasă-ne câteva detalii și trimite cererea direct pe WhatsApp. Nu încărcăm nicio poză aici."
    />

    <label className="block">
      <span className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
        Numele tău
      </span>
      <input
        type="text"
        value={form.name}
        onChange={(event) => updateForm("name", event.target.value)}
        placeholder="Cum te putem striga?"
        autoComplete="name"
        required
        className="booking-input mt-3"
      />
    </label>

    <label className="block">
      <span className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
        {flow.idea.label} <span className="text-muted">{flow.idea.hint}</span>
      </span>
      <textarea
        value={form.idea}
        onChange={(event) => updateForm("idea", event.target.value)}
        placeholder={flow.idea.placeholder}
        rows="4"
        required={flow.idea.required}
        className="booking-input booking-textarea mt-3 resize-y"
      />
    </label>

    {flow.reference && (
      <fieldset>
        <legend className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
          {flow.reference.question}
          <span className="text-muted"> (opțional)</span>
        </legend>
        <RadioGroup
          ariaLabel={flow.reference.question}
          className="mt-3 grid gap-2 sm:grid-cols-2"
          onChange={(option) => updateForm("reference", option)}
          options={[
            { value: "Da", label: flow.reference.yes },
            { value: "Nu", label: flow.reference.no },
          ].map((option) => ({
            value: option.value,
            content: (
              <span className="text-sm font-semibold">{option.label}</span>
            ),
          }))}
          value={form.reference}
        />
      </fieldset>
    )}

    <PrivacyNote />
  </div>
);

/**
 * What the wizard shows once the request has been handed off.
 *
 * Submitting used to open a WhatsApp tab and close the wizard in the same
 * breath. When the browser blocked that tab — which it does often enough on
 * phones — the form simply vanished, and the visitor had every reason to
 * believe a request had been sent that never was. So the wizard stays open and
 * says which of the two happened, and either way the message is still here:
 * a link that opens WhatsApp on a real click, and the text itself to copy.
 */
const SentStep = ({ closeBooking, sent }) => {
  const [copied, setCopied] = useState(false);
  const primaryRef = useRef(null);

  // The control that had focus was the submit button, and it has just
  // unmounted — without this, focus falls back to the body.
  useEffect(() => {
    primaryRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(sent.message);
      setCopied(true);
    } catch {
      // No clipboard permission, or an insecure origin. The message is on
      // screen below either way, so there is still a way through.
      setCopied(false);
    }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-md text-center">
          <span
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border ${
              sent.opened
                ? "border-accent/30 bg-accent/10 text-accent"
                : "border-fg/15 bg-fg/5 text-fg"
            }`}
          >
            {sent.opened ? (
              <FiCheck className="text-3xl" aria-hidden="true" />
            ) : (
              <FiAlertCircle className="text-3xl" aria-hidden="true" />
            )}
          </span>

          <h3 className="font-display mt-6 text-2xl sm:text-3xl">
            {sent.opened
              ? "Gata. Ne vedem pe WhatsApp."
              : "A mai rămas un pas."}
          </h3>

          <p className="text-muted mt-3 text-sm leading-relaxed">
            {sent.opened
              ? "Ți-am deschis WhatsApp cu mesajul deja scris. Apasă trimite acolo și îți răspundem cât putem de repede."
              : "Browserul a blocat fereastra WhatsApp, așa că cererea nu a plecat încă. Deschide-o de aici — mesajul este pregătit."}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              ref={sent.opened ? undefined : primaryRef}
              href={sent.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${sent.opened ? "btn-ghost" : "btn-primary"}`}
            >
              <RiWhatsappLine className="text-lg" aria-hidden="true" />
              {sent.opened ? "Deschide WhatsApp din nou" : "Deschide WhatsApp"}
            </a>

            <button
              type="button"
              onClick={copy}
              className="btn btn-ghost btn-sm"
            >
              <FiCopy className="text-base" aria-hidden="true" />
              {copied ? "Mesaj copiat" : "Copiază mesajul"}
            </button>
          </div>

          {/* Announced rather than only shown: the button label changes, and a
              screen reader has no other way to learn that the copy worked. */}
          <p role="status" aria-live="polite" className="sr-only">
            {copied ? "Mesajul a fost copiat." : ""}
          </p>

          <details className="mt-8 text-left">
            <summary className="text-muted hover:text-fg cursor-pointer text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-300">
              Vezi mesajul
            </summary>
            <pre className="text-muted mt-3 rounded-xl border border-white/8 bg-white/[0.025] p-4 text-xs leading-relaxed whitespace-pre-wrap">
              {sent.message}
            </pre>
          </details>
        </div>
      </div>

      <footer className="flex shrink-0 items-center justify-end border-t border-white/8 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 md:pb-4">
        <button
          ref={sent.opened ? primaryRef : undefined}
          type="button"
          onClick={closeBooking}
          className={`btn btn-sm ${sent.opened ? "btn-primary" : "btn-ghost"}`}
        >
          Închide
        </button>
      </footer>
    </div>
  );
};

const BookingModal = ({
  chooseService,
  closeBooking,
  flow,
  form,
  goBack,
  goNext,
  handleSubmit,
  missing,
  open,
  sent,
  step,
  steps,
  updateCustom,
  updateDetail,
  updateForm,
}) => {
  const total = steps.length;
  const kicker = `Pasul ${step + 1} din ${total}`;
  const current = steps[step];
  const dialogRef = useFocusTrap(open, closeBooking);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          /* The scrim only has a job from md up, where the panel floats: dim
             the page enough to push it back without erasing it. Below md the
             panel covers the screen and the scrim is just what the fade
             happens against. */
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/70 backdrop-blur-[2px] md:bg-black/85 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeBooking();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            // Focus lands here when the panel has no control to take it yet,
            // and on nothing else — the trap keeps it out of the Tab order.
            tabIndex={-1}
            /* A phone gives the wizard the whole screen — four steps of
               questions have no room to spare inside a floating card, and a
               full-height sheet is what every other app the reader uses does.
               From md up it goes back to a centred dialog. */
            className="card bg-surface flex h-dvh w-full flex-col overflow-hidden rounded-none border-0 border-white/10 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.95)] md:h-auto md:max-h-[calc(100dvh-3rem)] md:max-w-3xl md:rounded-2xl md:border"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="shrink-0 border-b border-white/8 px-5 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-accent text-[0.65rem] font-semibold tracking-[0.28em] uppercase">
                    {flow ? `Programare ${flow.label}` : "Make it real"}
                  </p>
                  <h2
                    id="booking-title"
                    className="font-display mt-1 text-2xl sm:text-3xl"
                  >
                    {sent ? "Cererea ta." : "Să începem."}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeBooking}
                  aria-label="Închide formularul de programare"
                  className="border-fg/15 bg-fg/5 text-fg hover:border-accent hover:text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
                >
                  <FiX className="text-xl" aria-hidden="true" />
                </button>
              </div>

              {!sent && (
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex flex-1 gap-2" aria-label={kicker}>
                    {steps.map((item, i) => (
                      <span
                        key={item}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          i <= step ? "bg-accent" : "bg-white/12"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-muted text-[0.65rem] font-semibold tracking-[0.14em]">
                    {step + 1} / {total}
                  </span>
                </div>
              )}
            </header>

            {sent ? (
              <SentStep closeBooking={closeBooking} sent={sent} />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex min-h-0 flex-1 flex-col"
              >
                <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                    >
                      {current === "service" && (
                        <ServiceStep
                          chooseService={chooseService}
                          form={form}
                          kicker={kicker}
                        />
                      )}
                      {current === "details" && flow && (
                        <DetailsStep
                          flow={flow}
                          form={form}
                          kicker={kicker}
                          updateCustom={updateCustom}
                          updateDetail={updateDetail}
                        />
                      )}
                      {current === "availability" && (
                        <AvailabilityStep
                          form={form}
                          kicker={kicker}
                          updateForm={updateForm}
                        />
                      )}
                      {current === "contact" && flow && (
                        <ContactStep
                          flow={flow}
                          form={form}
                          kicker={kicker}
                          updateForm={updateForm}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <footer className="shrink-0 border-t border-white/8 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 md:pb-4">
                  {/* Live, because it changes as answers land while focus stays
                    on whichever option was just pressed. */}
                  <p
                    id="booking-missing"
                    role="status"
                    aria-live="polite"
                    className={`text-muted text-xs leading-snug transition-opacity duration-200 ${
                      missing ? "mb-3 opacity-100" : "sr-only opacity-0"
                    }`}
                  >
                    {missing}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    {step === 0 ? (
                      <button
                        type="button"
                        onClick={closeBooking}
                        className="text-muted hover:text-fg px-1 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-300"
                      >
                        Închide
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={goBack}
                        className="btn btn-ghost btn-sm"
                      >
                        <FiArrowLeft className="text-base" aria-hidden="true" />
                        Înapoi
                      </button>
                    )}

                    {/* aria-disabled rather than disabled: a disabled button
                      cannot be focused, so the reader who most needs the
                      explanation is the one who could never reach it. The
                      handlers already refuse to act on an incomplete step. */}
                    {step < total - 1 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        aria-disabled={Boolean(missing)}
                        aria-describedby={
                          missing ? "booking-missing" : undefined
                        }
                        className={`btn btn-primary btn-sm min-w-40 ${
                          missing
                            ? "cursor-not-allowed opacity-35 hover:transform-none"
                            : ""
                        }`}
                      >
                        Continuă
                        <FiArrowRight
                          className="text-base"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        aria-disabled={Boolean(missing)}
                        aria-describedby={
                          missing ? "booking-missing" : undefined
                        }
                        className={`btn btn-primary btn-sm min-w-48 ${
                          missing
                            ? "cursor-not-allowed opacity-35 hover:transform-none"
                            : ""
                        }`}
                      >
                        <RiWhatsappLine
                          className="text-lg"
                          aria-hidden="true"
                        />
                        Trimite cererea
                      </button>
                    )}
                  </div>
                </footer>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }

  return context;
};

/**
 * Opens the wizard, optionally pinned to one service. A trigger that names its
 * service (a tab panel, a service page) skips the chooser and goes straight to
 * that service's questions; the global ones — header, footer, hero — ask first.
 */
export const BookingTrigger = ({
  children,
  className = "",
  onClick,
  service,
  ...props
}) => {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        openBooking(service);
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

const BookingProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [needsPicker, setNeedsPicker] = useState(true);
  const [form, setForm] = useState(() => createInitialForm());
  // `{ url, message, opened }` once the request has been handed to WhatsApp —
  // null while the wizard is still being filled in.
  const [sent, setSent] = useState(null);

  const openBooking = useCallback((service) => {
    const flow = getBookingFlow(service);

    setForm(createInitialForm(flow));
    setNeedsPicker(!flow);
    setStep(0);
    setSent(null);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    setStep(0);
    setNeedsPicker(true);
    setForm(createInitialForm());
    setSent(null);
  }, []);

  // Escape is handled by the modal's focus trap, which is also what knows
  // where focus has to go back to afterwards.
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const flow = getBookingFlow(form.service);

  const steps = useMemo(
    () =>
      needsPicker
        ? ["service", "details", "availability", "contact"]
        : ["details", "availability", "contact"],
    [needsPicker],
  );

  const updateForm = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const updateDetail = (name, value) => {
    setForm((current) => ({
      ...current,
      details: { ...current.details, [name]: value },
    }));
  };

  const updateCustom = (name, value) => {
    setForm((current) => ({
      ...current,
      customs: { ...current.customs, [name]: value },
    }));
  };

  // Switching service mid-flow throws away answers that belonged to the old
  // one — a body area means nothing once you are booking a piercing.
  const chooseService = (key) => {
    setForm((current) => ({
      ...createInitialForm(getBookingFlow(key)),
      availability: current.availability,
      time: current.time,
      name: current.name,
    }));
  };

  const current = steps[step];

  const missing = missingOn(current, flow, form);

  const goNext = () => {
    if (missing) return;
    setStep((value) => Math.min(value + 1, steps.length - 1));
  };

  const goBack = () => setStep((value) => Math.max(value - 1, 0));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (missing) return;

    const answers = flow.fields
      .map((field) => {
        const answer = fieldAnswer(field, form);
        return answer ? `${field.emoji} ${field.summaryLabel}: ${answer}` : "";
      })
      .filter(Boolean);

    const idea = form.idea.trim();

    const message = [
      `Bună! ${WHATSAPP_EMOJI.wave} Vreau să fac o programare pentru ${flow.intent}.`,
      "",
      ...answers,
      "",
      `${WHATSAPP_EMOJI.availability} Disponibilitate: ${form.availability}`,
      `${WHATSAPP_EMOJI.time} Preferință: ${form.time || "Oricând"}`,
      "",
      `${WHATSAPP_EMOJI.name} Nume: ${form.name.trim()}`,
      ...(idea
        ? ["", `${WHATSAPP_EMOJI.idea} ${flow.idea.summaryLabel}`, idea]
        : []),
      // Left out entirely when the question was skipped — an unanswered
      // question must not turn into a claim either way.
      ...(flow.reference && form.reference
        ? [
            "",
            `${WHATSAPP_EMOJI.reference} ${
              form.reference === "Da"
                ? flow.reference.yesSummary
                : flow.reference.noSummary
            }`,
          ]
        : []),
    ].join("\n");

    const target = new URL(whatsappSendUrl);
    target.searchParams.set("text", message);
    const url = target.toString();

    // Opened without the "noopener" feature on purpose: with it, Chrome
    // returns null whether the tab opened or was blocked, and null is the only
    // signal there is. Clearing `opener` by hand buys the same protection and
    // leaves the blocked case distinguishable.
    const popup = window.open(url, "_blank");
    if (popup) popup.opener = null;

    setSent({ url, message, opened: Boolean(popup) });
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal
        chooseService={chooseService}
        closeBooking={closeBooking}
        flow={flow}
        form={form}
        goBack={goBack}
        goNext={goNext}
        handleSubmit={handleSubmit}
        missing={missing}
        open={open}
        sent={sent}
        step={step}
        steps={steps}
        updateCustom={updateCustom}
        updateDetail={updateDetail}
        updateForm={updateForm}
      />
    </BookingContext.Provider>
  );
};

export default BookingProvider;
