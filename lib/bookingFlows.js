/**
 * What the booking wizard asks, per service.
 *
 * The last two steps — availability and contact details — are the same no
 * matter what you are booking, so only the first step and the wording of the
 * WhatsApp message change from one service to the next. That is all this file
 * describes. Keys match lib/servicesDetail.js, which is what the /servicii
 * tabs hand to the trigger.
 */

/** Escaped so the emoji survive any editor or transfer that mangles them. */
const EMOJI = {
  area: "\u{1f4cd}",
  size: "\u{1f4cf}",
  piercing: "\u{1f48e}",
  count: "\u{1f522}",
  ink: "\u{1f3a8}",
  procedure: "\u{2728}",
  history: "\u{1f501}",
};

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

const TATTOO_SIZES = [
  { label: "Mic", detail: "până la 5 cm" },
  { label: "Mediu", detail: "5–10 cm" },
  { label: "Mare", detail: "10–15 cm" },
  { label: "Extra mare", detail: "peste 15 cm" },
];

/** Collapsed from the fifteen brackets in lib/pricing.js — nobody knows the
 *  surface of their own tattoo in cm², and the exact figure is measured in
 *  studio anyway. */
const LASER_SIZES = [
  { label: "Mic", detail: "până la 10 cm²" },
  { label: "Mediu", detail: "10–40 cm²" },
  { label: "Mare", detail: "40–100 cm²" },
  { label: "Foarte mare", detail: "peste 100 cm²" },
];

/** The body-area question is identical for a tattoo and for erasing one. */
const areaField = (summaryLabel) => ({
  name: "area",
  type: "choice",
  options: BODY_AREAS,
  otherOption: "Altă zonă",
  otherPlaceholder: "Scrie zona",
  otherAriaLabel: "Altă zonă a corpului",
  ariaLabel: "Zona corpului",
  required: true,
  summaryLabel,
  emoji: EMOJI.area,
});

export const bookingFlows = [
  {
    key: "tatuaje",
    label: "Tatuaj",
    pickerDetail: "Design personalizat",
    intent: "un tatuaj",
    detailsTitle: "Unde va fi tatuajul?",
    detailsDescription:
      "Alege zona și estimează dimensiunea. Nu trebuie să fie exact — stabilim detaliile împreună.",
    fields: [
      areaField("Zona corpului"),
      {
        name: "size",
        type: "range",
        label: "Detalii & mărime",
        options: TATTOO_SIZES,
        defaultIndex: 2,
        ariaLabel: "Dimensiunea estimată a tatuajului",
        summaryLabel: "Mărime",
        emoji: EMOJI.size,
      },
    ],
    idea: {
      label: "Ideea ta",
      hint: "(pe scurt)",
      placeholder: "Ce ai vrea să tatuăm? Stil, simbol, poveste...",
      required: true,
      summaryLabel: "Ideea mea:",
    },
    reference: {
      question: "Ai o poză de referință?",
      // The only one that blocks the send: the reference is part of the brief
      // for a custom design, not a nice-to-have.
      required: true,
      yes: "Am o poză de referință",
      no: "Nu am o poză de referință",
      yesSummary: "Am o poză de referință.",
      noSummary: "Nu am o poză de referință.",
    },
  },
  {
    key: "micropigmentare",
    label: "Micropigmentare",
    pickerDetail: "Sprâncene și buze",
    intent: "o ședință de micropigmentare",
    detailsTitle: "Ce procedură te interesează?",
    detailsDescription:
      "Alege zona. Forma și nuanța le stabilim împreună înainte de prima trecere.",
    fields: [
      {
        name: "procedure",
        type: "choice",
        options: ["Sprâncene", "Buze", "Retuș", "Nu știu"],
        ariaLabel: "Procedura de micropigmentare",
        required: true,
        summaryLabel: "Procedură",
        emoji: EMOJI.procedure,
      },
      {
        name: "history",
        type: "pills",
        label: "Ai mai făcut micropigmentare?",
        options: ["Da", "Nu"],
        ariaLabel: "Experiență anterioară",
        required: false,
        summaryLabel: "A mai făcut micropigmentare",
        emoji: EMOJI.history,
      },
    ],
    idea: {
      label: "Ce îți dorești",
      hint: "(opțional)",
      placeholder: "Formă, nuanță, orice detaliu care ne ajută.",
      required: false,
      summaryLabel: "Ce îmi doresc:",
    },
    reference: {
      question: "Ai o poză de inspirație?",
      required: false,
      yes: "Am o poză de inspirație",
      no: "Nu am o poză de inspirație",
      yesSummary: "Am o poză de inspirație.",
      noSummary: "Nu am o poză de inspirație.",
    },
  },
  {
    key: "laser",
    label: "Laser",
    pickerDetail: "Ștergerea tatuajelor",
    intent: "o ședință de laser",
    detailsTitle: "Ce vrei să ștergem?",
    detailsDescription:
      "Spune-ne unde e tatuajul și cât de mare este. Câte ședințe sunt realiste îți spunem la prima vizită.",
    fields: [
      areaField("Zona tatuajului"),
      {
        name: "ink",
        type: "pills",
        label: "Cerneala tatuajului",
        options: ["Alb/negru", "Color", "Micropigmentare"],
        ariaLabel: "Tipul cernelii",
        required: true,
        summaryLabel: "Cerneală",
        emoji: EMOJI.ink,
      },
      {
        name: "size",
        type: "range",
        label: "Dimensiune",
        options: LASER_SIZES,
        defaultIndex: 1,
        ariaLabel: "Dimensiunea estimată a tatuajului de șters",
        summaryLabel: "Mărime",
        emoji: EMOJI.size,
      },
    ],
    idea: {
      label: "Detalii despre tatuaj",
      hint: "(opțional)",
      placeholder: "De când îl ai? Ai mai făcut ședințe de laser?",
      required: false,
      summaryLabel: "Detalii:",
    },
    reference: {
      question: "Ai o poză cu tatuajul?",
      required: false,
      yes: "Am o poză cu tatuajul",
      no: "Nu am o poză cu tatuajul",
      yesSummary: "Am o poză cu tatuajul.",
      noSummary: "Nu am o poză cu tatuajul.",
    },
  },
  {
    key: "piercing",
    label: "Piercing",
    pickerDetail: "Titan pur, inclus în preț",
    intent: "un piercing",
    detailsTitle: "Ce piercing vrei?",
    detailsDescription:
      "Alege tipul de piercing. Dacă nu ești sigur(ă), spune-ne — te ajutăm să alegi ce ți se potrivește.",
    fields: [
      {
        name: "type",
        type: "choice",
        options: [
          "Lob",
          "Helix",
          "Tragus",
          "Conch",
          "Daith",
          "Nas",
          "Sept",
          "Sprânceană",
          "Buză",
          "Ombilic",
          "Nu știu",
          "Altul",
        ],
        otherOption: "Altul",
        otherPlaceholder: "Scrie ce piercing vrei",
        otherAriaLabel: "Alt tip de piercing",
        ariaLabel: "Tipul de piercing",
        required: true,
        summaryLabel: "Piercing",
        emoji: EMOJI.piercing,
      },
      {
        name: "count",
        type: "pills",
        label: "Câte piercinguri?",
        options: ["1", "2", "3 sau mai multe"],
        defaultValue: "1",
        ariaLabel: "Numărul de piercinguri",
        required: true,
        summaryLabel: "Număr",
        emoji: EMOJI.count,
      },
    ],
    idea: {
      label: "Detalii",
      hint: "(opțional)",
      placeholder: "Alergii, piercinguri anterioare în zonă, orice ne ajută.",
      required: false,
      summaryLabel: "Detalii:",
    },
    // A piercing is chosen from a list, not designed — there is nothing to
    // send a reference photo of, so the question is dropped for this flow.
    reference: null,
  },
];

/** Lookup by key; returns undefined for anything unknown, which the wizard
 *  treats as "no service picked yet" and answers with the chooser step. */
export const getBookingFlow = (key) =>
  bookingFlows.find((flow) => flow.key === key);

export default bookingFlows;
