"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

import { bookingFlows, getBookingFlow } from "../../lib/bookingFlows";
import { whatsappSendUrl } from "../../lib/site";

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

/** Range fields start on a sensible bracket, pills on their default answer. */
const createInitialDetails = (flow) =>
  (flow?.fields ?? []).reduce((details, field) => {
    if (field.type === "range") {
      details[field.name] = field.defaultIndex ?? 0;
    } else {
      details[field.name] = field.defaultValue ?? "";
    }

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
    const option =
      field.options[value] ?? field.options[field.defaultIndex ?? 0];
    return `${option.label} (${option.detail})`;
  }

  if (!value) return "";

  if (field.otherOption && value === field.otherOption) {
    return form.customs[field.name]?.trim() || value;
  }

  return value;
};

const fieldComplete = (field, form) => {
  // A slider always carries a value, and optional questions never block.
  if (field.type === "range" || !field.required) return true;

  const value = form.details[field.name];
  if (!value) return false;

  return field.otherOption && value === field.otherOption
    ? Boolean(form.customs[field.name]?.trim())
    : true;
};

const BookingOption = ({ active, children, className = "", onClick, role }) => (
  <button
    type="button"
    role={role}
    aria-checked={role ? active : undefined}
    aria-pressed={role ? undefined : active}
    onClick={onClick}
    className={`group flex min-h-12 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 sm:px-5 ${
      active
        ? "border-accent bg-accent/12 text-fg shadow-[0_8px_28px_-18px_rgba(212,179,154,0.9)]"
        : "text-fg/70 hover:border-accent/40 hover:text-fg border-white/8 bg-white/[0.025] hover:bg-white/[0.05]"
    } ${className}`}
  >
    <span className="min-w-0">{children}</span>
    <FiCheck
      className={`text-accent shrink-0 text-base transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    />
  </button>
);

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

const FieldLabel = ({ children }) => (
  <p className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
    {children}
  </p>
);

const ChoiceField = ({ field, form, updateCustom, updateDetail }) => {
  const value = form.details[field.name];

  return (
    <div>
      {field.label && <FieldLabel>{field.label}</FieldLabel>}

      <div
        className={`grid grid-cols-2 gap-2 sm:grid-cols-4 ${
          field.label ? "mt-4" : ""
        }`}
        role="radiogroup"
        aria-label={field.ariaLabel}
      >
        {field.options.map((option) => (
          <BookingOption
            key={option}
            active={value === option}
            onClick={() => updateDetail(field.name, option)}
            role="radio"
            className="justify-center text-center"
          >
            <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase">
              {option}
            </span>
          </BookingOption>
        ))}
      </div>

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
    {field.label && <FieldLabel>{field.label}</FieldLabel>}

    <div
      className={`flex flex-wrap gap-2 ${field.label ? "mt-4" : ""}`}
      role="radiogroup"
      aria-label={field.ariaLabel}
    >
      {field.options.map((option) => (
        <BookingOption
          key={option}
          active={form.details[field.name] === option}
          onClick={() => updateDetail(field.name, option)}
          role="radio"
          className="min-h-11 rounded-full px-4 sm:px-5"
        >
          <span className="text-xs font-semibold">{option}</span>
        </BookingOption>
      ))}
    </div>
  </div>
);

const RangeField = ({ field, form, updateDetail }) => {
  const index = form.details[field.name] ?? field.defaultIndex ?? 0;
  const option = field.options[index];
  const progress = (index / (field.options.length - 1)) * 100;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <FieldLabel>{field.label}</FieldLabel>
        <div className="text-right">
          <p className="text-accent text-xs font-semibold">{option.label}</p>
          <p className="text-muted mt-0.5 text-[0.65rem]">{option.detail}</p>
        </div>
      </div>

      <div className="booking-range-shell mt-5 px-1">
        <div className="booking-range-track">
          <div className="booking-range-markers" aria-hidden="true">
            {field.options.map((item, i) => (
              <span
                key={item.label}
                className={`booking-range-marker ${
                  i === index
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
            onChange={(event) =>
              updateDetail(field.name, Number(event.target.value))
            }
            aria-label={field.ariaLabel}
            className="booking-range"
            style={{ "--range-progress": `${progress}%` }}
          />
        </div>
        <div className="text-muted mt-3 flex justify-between gap-2 text-[0.6rem] sm:text-[0.65rem]">
          {field.options.map((item, i) => (
            <span
              key={item.label}
              className={`text-center transition-colors duration-200 ${
                i === index ? "text-accent font-semibold" : ""
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

    <div
      className="grid gap-2 sm:grid-cols-2"
      role="radiogroup"
      aria-label="Serviciu"
    >
      {bookingFlows.map((flow) => (
        <BookingOption
          key={flow.key}
          active={form.service === flow.key}
          onClick={() => chooseService(flow.key)}
          role="radio"
        >
          <span className="block text-sm font-semibold">{flow.label}</span>
          <span className="text-muted mt-1 block text-xs">
            {flow.pickerDetail}
          </span>
        </BookingOption>
      ))}
    </div>
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
      <div
        className="grid gap-2 sm:grid-cols-2"
        role="radiogroup"
        aria-label="Disponibilitate"
      >
        {AVAILABILITY_OPTIONS.map((option) => (
          <BookingOption
            key={option.value}
            active={form.availability === option.value}
            onClick={() => updateForm("availability", option.value)}
            role="radio"
          >
            <span className="block text-sm font-semibold">{option.value}</span>
            <span className="text-muted mt-1 block text-xs">
              {option.detail}
            </span>
          </BookingOption>
        ))}
      </div>
    </div>

    <div>
      <FieldLabel>
        Preferință orară <span className="text-muted">(opțional)</span>
      </FieldLabel>
      <div
        className="mt-4 flex flex-wrap gap-2"
        role="radiogroup"
        aria-label="Preferință orară"
      >
        {TIME_OPTIONS.map((time) => (
          <BookingOption
            key={time}
            active={form.time === time}
            onClick={() => updateForm("time", time)}
            role="radio"
            className="min-h-11 rounded-full px-4 sm:px-5"
          >
            <span className="text-xs font-semibold">{time}</span>
          </BookingOption>
        ))}
      </div>
    </div>
  </div>
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
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2" role="radiogroup">
          {[
            { value: "Da", label: flow.reference.yes },
            { value: "Nu", label: flow.reference.no },
          ].map((option) => (
            <BookingOption
              key={option.value}
              active={form.reference === option.value}
              onClick={() => updateForm("reference", option.value)}
              role="radio"
            >
              <span className="text-sm font-semibold">{option.label}</span>
            </BookingOption>
          ))}
        </div>
      </fieldset>
    )}
  </div>
);

const BookingModal = ({
  canContinue,
  canSubmit,
  chooseService,
  closeBooking,
  flow,
  form,
  goBack,
  goNext,
  handleSubmit,
  open,
  step,
  steps,
  updateCustom,
  updateDetail,
  updateForm,
}) => {
  const total = steps.length;
  const kicker = `Pasul ${step + 1} din ${total}`;
  const current = steps[step];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeBooking();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="card bg-surface/95 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden border-white/10 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.95)] sm:max-h-[calc(100dvh-3rem)]"
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
                    Să începem.
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
            </header>

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

              <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-white/8 px-5 py-4 sm:px-8">
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

                {step < total - 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!canContinue}
                    className="btn btn-primary btn-sm min-w-40 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:transform-none"
                  >
                    Continuă
                    <FiArrowRight className="text-base" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="btn btn-primary btn-sm min-w-48 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:transform-none"
                  >
                    <RiWhatsappLine className="text-lg" aria-hidden="true" />
                    Trimite cererea
                  </button>
                )}
              </footer>
            </form>
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

  const openBooking = useCallback((service) => {
    const flow = getBookingFlow(service);

    setForm(createInitialForm(flow));
    setNeedsPicker(!flow);
    setStep(0);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    setStep(0);
    setNeedsPicker(true);
    setForm(createInitialForm());
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeBooking();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeBooking, open]);

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

  const canContinue = (() => {
    if (current === "service") return Boolean(flow);
    if (current === "details")
      return Boolean(flow) && flow.fields.every((f) => fieldComplete(f, form));
    if (current === "availability") return Boolean(form.availability);

    return true;
  })();

  const canSubmit = Boolean(
    flow &&
    form.name.trim() &&
    (!flow.idea.required || form.idea.trim()) &&
    (!flow.reference || form.reference),
  );

  const goNext = () => {
    if (!canContinue) return;
    setStep((value) => Math.min(value + 1, steps.length - 1));
  };

  const goBack = () => setStep((value) => Math.max(value - 1, 0));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;

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
      ...(flow.reference
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
    window.open(target.toString(), "_blank", "noopener,noreferrer");
    closeBooking();
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal
        canContinue={canContinue}
        canSubmit={canSubmit}
        chooseService={chooseService}
        closeBooking={closeBooking}
        flow={flow}
        form={form}
        goBack={goBack}
        goNext={goNext}
        handleSubmit={handleSubmit}
        open={open}
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
