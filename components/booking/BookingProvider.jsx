"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

import { whatsappUrl } from "../../lib/site";

const BookingContext = createContext(null);

const BODY_AREAS = [
  "Braț",
  "Picior",
  "Spate",
  "Piept",
  "Coaste",
  "Mână",
  "Gât",
  "Altă zonă",
];

const SIZE_OPTIONS = [
  { label: "Mic", detail: "până la 5 cm" },
  { label: "Mediu", detail: "5–10 cm" },
  { label: "Mare", detail: "10–15 cm" },
  { label: "Extra mare", detail: "peste 15 cm" },
];

const AVAILABILITY_OPTIONS = [
  { value: "Cât mai curând", detail: "Cât mai repede" },
  { value: "Săptămâna viitoare", detail: "Planificat" },
  { value: "Luna aceasta", detail: "Relaxat" },
  { value: "Oricând", detail: "Sunt flexibil(ă)" },
];

const TIME_OPTIONS = ["Dimineață", "După-amiază", "Oricând"];

const REFERENCE_OPTIONS = [
  { value: "Da", label: "Am o poză de referință" },
  { value: "Nu", label: "Nu am o poză de referință" },
];

const WHATSAPP_EMOJI = {
  wave: "\u{1f44b}\u{1f3fb}",
  bodyArea: "\u{1f4cd}",
  size: "\u{1f4cf}",
  availability: "\u{1f4c5}",
  time: "\u{1f551}",
  name: "\u{1f575}\u{1f3fb}\u{200d}\u{2642}\u{fe0f}",
  idea: "\u{1f4ad}",
  reference: "\u{1f4f7}",
};

const createInitialForm = () => ({
  area: "",
  customArea: "",
  sizeIndex: 2,
  availability: "",
  time: "",
  name: "",
  idea: "",
  reference: "",
});

const getAreaLabel = (form) =>
  form.area === "Altă zonă" && form.customArea.trim()
    ? form.customArea.trim()
    : form.area;

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

const StepOne = ({ form, updateForm }) => {
  const size = SIZE_OPTIONS[form.sizeIndex];
  const progress = (form.sizeIndex / (SIZE_OPTIONS.length - 1)) * 100;

  return (
    <div className="space-y-8">
      <StepHeading
        kicker="Pasul 1 din 3"
        title="Unde va fi tatuajul?"
        description="Alege zona și estimează dimensiunea. Nu trebuie să fie exact — stabilim detaliile împreună."
      />

      <div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {BODY_AREAS.map((area) => (
            <BookingOption
              key={area}
              active={form.area === area}
              onClick={() => updateForm("area", area)}
              className="justify-center text-center"
            >
              <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase">
                {area}
              </span>
            </BookingOption>
          ))}
        </div>

        {form.area === "Altă zonă" && (
          <input
            type="text"
            value={form.customArea}
            onChange={(event) => updateForm("customArea", event.target.value)}
            placeholder="Scrie zona"
            aria-label="Altă zonă a corpului"
            className="booking-input mt-3"
          />
        )}
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
            Detalii &amp; mărime
          </p>
          <div className="text-right">
            <p className="text-accent text-xs font-semibold">{size.label}</p>
            <p className="text-muted mt-0.5 text-[0.65rem]">{size.detail}</p>
          </div>
        </div>

        <div className="booking-range-shell mt-5 px-1">
          <div className="booking-range-track">
            <div className="booking-range-markers" aria-hidden="true">
              {SIZE_OPTIONS.map((option, index) => (
                <span
                  key={option.label}
                  className={`booking-range-marker ${
                    index === form.sizeIndex
                      ? "booking-range-marker-active"
                      : index < form.sizeIndex
                        ? "booking-range-marker-past"
                        : ""
                  }`}
                />
              ))}
            </div>
            <input
              type="range"
              min="0"
              max={SIZE_OPTIONS.length - 1}
              step="1"
              value={form.sizeIndex}
              onChange={(event) =>
                updateForm("sizeIndex", Number(event.target.value))
              }
              aria-label="Dimensiunea estimată a tatuajului"
              className="booking-range"
              style={{ "--range-progress": `${progress}%` }}
            />
          </div>
          <div className="text-muted mt-3 flex justify-between gap-2 text-[0.6rem] sm:text-[0.65rem]">
            {SIZE_OPTIONS.map((option, index) => (
              <span
                key={option.label}
                className={`text-center transition-colors duration-200 ${
                  index === form.sizeIndex ? "text-accent font-semibold" : ""
                }`}
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StepTwo = ({ form, updateForm }) => (
  <div className="space-y-8">
    <StepHeading
      kicker="Pasul 2 din 3"
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
      <p className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
        Preferință orară <span className="text-muted">(opțional)</span>
      </p>
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

const StepThree = ({ form, updateForm }) => (
  <div className="space-y-7">
    <StepHeading
      kicker="Pasul 3 din 3"
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
        Ideea ta <span className="text-muted">(pe scurt)</span>
      </span>
      <textarea
        value={form.idea}
        onChange={(event) => updateForm("idea", event.target.value)}
        placeholder="Ce ai vrea să tatuăm? Stil, simbol, poveste..."
        rows="4"
        required
        className="booking-input booking-textarea mt-3 resize-y"
      />
    </label>

    <fieldset>
      <legend className="text-fg text-xs font-semibold tracking-[0.16em] uppercase">
        Ai o poză de referință?
      </legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2" role="radiogroup">
        {REFERENCE_OPTIONS.map((option) => (
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
  </div>
);

const BookingModal = ({
  closeBooking,
  form,
  handleSubmit,
  open,
  step,
  updateForm,
  goBack,
  goNext,
  canContinue,
  canSubmit,
}) => (
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
                  Make it real
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
              <div
                className="flex flex-1 gap-2"
                aria-label={`Pasul ${step + 1} din 3`}
              >
                {[0, 1, 2].map((item) => (
                  <span
                    key={item}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      item <= step ? "bg-accent" : "bg-white/12"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted text-[0.65rem] font-semibold tracking-[0.14em]">
                {step + 1} / 3
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
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                >
                  {step === 0 && (
                    <StepOne form={form} updateForm={updateForm} />
                  )}
                  {step === 1 && (
                    <StepTwo form={form} updateForm={updateForm} />
                  )}
                  {step === 2 && (
                    <StepThree form={form} updateForm={updateForm} />
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

              {step < 2 ? (
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

export const useBooking = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }

  return context;
};

export const BookingTrigger = ({ children, className = "", ...props }) => {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={openBooking}
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
  const [form, setForm] = useState(createInitialForm);

  const openBooking = useCallback(() => {
    setForm(createInitialForm());
    setStep(0);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    setStep(0);
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

  const updateForm = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const areaComplete =
    form.area && (form.area !== "Altă zonă" || form.customArea.trim());
  const canContinue = step === 0 ? areaComplete : Boolean(form.availability);
  const canSubmit = Boolean(
    form.name.trim() && form.idea.trim() && form.reference,
  );

  const goNext = () => {
    if (!canContinue) return;
    setStep((current) => Math.min(current + 1, 2));
  };

  const goBack = () => setStep((current) => Math.max(current - 1, 0));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;

    const size = SIZE_OPTIONS[form.sizeIndex];
    const message = [
      `Bună! ${WHATSAPP_EMOJI.wave} Vreau să fac o programare pentru un tatuaj.`,
      "",
      `${WHATSAPP_EMOJI.bodyArea} Zona corpului: ${getAreaLabel(form)}`,
      `${WHATSAPP_EMOJI.size} Mărime: ${size.label} (${size.detail})`,
      "",
      `${WHATSAPP_EMOJI.availability} Disponibilitate: ${form.availability}`,
      `${WHATSAPP_EMOJI.time} Preferință: ${form.time || "Oricând"}`,
      "",
      `${WHATSAPP_EMOJI.name} Nume: ${form.name.trim()}`,
      "",
      `${WHATSAPP_EMOJI.idea} Ideea mea:`,
      form.idea.trim(),
      "",
      `${WHATSAPP_EMOJI.reference} ${form.reference === "Da" ? "Am" : "Nu am"} o poză de referință.`,
    ].join("\n");

    const target = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(target, "_blank", "noopener,noreferrer");
    closeBooking();
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal
        closeBooking={closeBooking}
        form={form}
        handleSubmit={handleSubmit}
        open={open}
        step={step}
        updateForm={updateForm}
        goBack={goBack}
        goNext={goNext}
        canContinue={canContinue}
        canSubmit={canSubmit}
      />
    </BookingContext.Provider>
  );
};

export default BookingProvider;
