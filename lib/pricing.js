/**
 * Every published figure lives here, so a tab panel, a service page and the
 * JSON-LD offers can never quote three different numbers.
 *
 * Tiers without a figure use `price: "La cerere"` and carry no min/max — the
 * schema builders skip those rather than emit an empty priceSpecification.
 */

const ON_REQUEST = { label: "Masterpiece (>15cm)", price: "La cerere" };

export const tattooPricing = [
  {
    title: "Alb/Negru",
    image: "/gallery/tattooService/albNegruTattoo.webp",
    tiers: [
      { label: "Mic (5cm)", price: "400 RON", min: 400, max: 400 },
      { label: "Mediu (5-10cm)", price: "500-800 RON", min: 500, max: 800 },
      { label: "Mare (10-15cm)", price: "900-1400 RON", min: 900, max: 1400 },
      ON_REQUEST,
    ],
  },
  {
    title: "Color",
    image: "/gallery/tattooService/colorTattoo.webp",
    tiers: [
      { label: "Mic (5cm)", price: "500 RON", min: 500, max: 500 },
      { label: "Mediu (5-10cm)", price: "600-1000 RON", min: 600, max: 1000 },
      { label: "Mare (10-15cm)", price: "1100-1600 RON", min: 1100, max: 1600 },
      ON_REQUEST,
    ],
  },
  {
    title: "Contur",
    image: "/gallery/tattooService/conturTattoo.webp",
    tiers: [
      { label: "Mic (5cm)", price: "300 RON", min: 300, max: 300 },
      { label: "Mediu (5-10cm)", price: "400-600 RON", min: 400, max: 600 },
      { label: "Mare (10-15cm)", price: "700-900 RON", min: 700, max: 900 },
      ON_REQUEST,
    ],
  },
  {
    title: "Brodat",
    image: "/gallery/tattooService/embroderyTattoo.webp",
    // Quoted per centimetre elsewhere (700 lei at 5cm rising to 2000 at 15cm);
    // collapsed into the same three brackets as the other styles so the card
    // stays readable instead of listing eleven rows.
    tiers: [
      { label: "Mic (5-8cm)", price: "700-1150 RON", min: 700, max: 1150 },
      { label: "Mediu (9-12cm)", price: "1300-1700 RON", min: 1300, max: 1700 },
      { label: "Mare (13-15cm)", price: "1800-2000 RON", min: 1800, max: 2000 },
      ON_REQUEST,
    ],
  },
];

export const micropigmentarePricing = [
  {
    title: "Buze",
    image: "/gallery/micropigmentareService/micropigmentareBuze.webp",
    tiers: [{ label: "Preț", price: "800 RON", min: 800, max: 800 }],
  },
  {
    title: "Sprâncene",
    image: "/gallery/micropigmentareService/micropigmentareSprancene.webp",
    tiers: [{ label: "Preț", price: "800 RON", min: 800, max: 800 }],
  },
  {
    title: "Retuș",
    image: "/gallery/micropigmentareService/micropigmentareRetus.webp",
    tiers: [{ label: "Preț", price: "200 RON", min: 200, max: 200 }],
  },
];

export const laserSizePricing = [
  { label: "1-5 cm²", price: "200 RON", value: 200 },
  { label: "5-10 cm²", price: "250 RON", value: 250 },
  { label: "11-20 cm²", price: "300 RON", value: 300 },
  { label: "21-30 cm²", price: "350 RON", value: 350 },
  { label: "31-40 cm²", price: "400 RON", value: 400 },
  { label: "41-50 cm²", price: "450 RON", value: 450 },
  { label: "51-65 cm²", price: "500 RON", value: 500 },
  { label: "66-80 cm²", price: "550 RON", value: 550 },
  { label: "81-95 cm²", price: "600 RON", value: 600 },
  { label: "96-110 cm²", price: "650 RON", value: 650 },
  { label: "111-125 cm²", price: "700 RON", value: 700 },
  { label: "126-140 cm²", price: "750 RON", value: 750 },
  { label: "140-160 cm²", price: "800 RON", value: 800 },
  { label: "160-180 cm²", price: "900 RON", value: 900 },
  { label: "180-200 cm²", price: "1000 RON", value: 1000 },
];

export const laserFaq = [
  {
    question: "Ce presupune exact eliminarea tatuajelor cu laser?",
    answer:
      "Procedura utilizează impulsuri de lumină concentrată pentru a fragmenta particulele de cerneală din piele.",
  },
  {
    question: "Care sunt culorile de tatuaj cel mai ușor de eliminat cu laserul?",
    answer:
      "Tatuajele cu cerneală neagră sau închisă sunt cele mai receptive la tratamentul cu laser.",
  },
  {
    question: "Există un număr fix de ședințe pentru eliminarea unui tatuaj?",
    answer:
      "Numărul de ședințe variază în funcție de dimensiunea, culoarea și vechimea tatuajului.",
  },
  {
    question: "Cât timp trebuie să aștept între ședințele de eliminare cu laser?",
    answer:
      "De obicei, ședințele sunt programate la intervale de câteva săptămâni pentru o vindecare eficientă a pielii.",
  },
  {
    question: "Există vreo restricție privind activitățile după procedură?",
    answer:
      "Se recomandă evitarea activităților care ar putea irita zona tratată pentru câteva zile.",
  },
  {
    question: "Care este cel mai important lucru în îngrijirea post-tratament?",
    answer:
      "Protejarea zonei tratate de expunerea excesivă la soare și respectarea instrucțiunilor medicului.",
  },
  {
    question: "Care sunt efectele secundare obișnuite ale procedurii?",
    answer:
      "Roșeață, umflare și senzație de arsură temporară sunt comune, dar trec în câteva zile.",
  },
  {
    question:
      "Există riscuri pe termen lung asociate cu eliminarea tatuajelor cu laser?",
    answer:
      "Riscurile pe termen lung sunt rare, dar pot include modificări temporare ale pigmentației pielii sau cicatrici temporare.",
  },
  {
    question:
      "Există anumite zone ale corpului mai dificil de tratat pentru eliminarea tatuajelor cu laser?",
    answer:
      "Unele zone, precum zonele cu piele subțire sau cu circulație redusă, pot fi mai dificile de tratat și pot necesita mai multe sesiuni pentru rezultate optime.",
  },
];
