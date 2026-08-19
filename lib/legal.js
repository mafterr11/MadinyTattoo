/**
 * The legal pages' one editable file.
 *
 * The prose on /confidentialitate, /cookies and /termeni is written against
 * what the site actually does — it collects a name and a description in the
 * booking wizard, hands them to WhatsApp, sets no cookies of its own, and
 * loads the Google Maps embed only when asked. Change any of that and the
 * pages have to change with it; the values below are the parts that depend on
 * the business rather than on the code.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * TO FILL IN
 *
 * `entity` carries the registration details a Romanian commercial site is
 * expected to publish. Every field is optional as far as the code is
 * concerned — a null row is left out rather than printed empty — but the
 * pages are only complete once they are filled.
 *
 * `updated` is the date shown at the top of each page. Move it whenever the
 * text changes, so a reader can tell which version they agreed to.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const entity = {
  /** Registered name, e.g. "MADINY TATTOO S.R.L." — omit to fall back to the trading name. */
  companyName: null,
  /** CUI / CIF, e.g. "RO12345678". */
  cui: null,
  /** Trade register number, e.g. "J40/1234/2020". */
  regCom: null,
  /**
   * Only if a data protection officer was appointed. A studio this size
   * almost certainly does not need one — leave it null and the contact
   * address is used instead.
   */
  dpoEmail: null,
};

/** ISO date, shown as "Ultima actualizare". */
export const updated = "2026-08-19";

/** Formatted for display, in Romanian. */
export const updatedLabel = new Date(updated).toLocaleDateString("ro-RO", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/**
 * The supervisory authority a complaint goes to. Public contact details,
 * repeated here so the privacy page can name them without a lookup.
 */
export const anspdcp = {
  name: "Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal",
  short: "ANSPDCP",
  address: "B-dul General Gheorghe Magheru 28-30, Sector 1, București",
  email: "anspdcp@dataprotection.ro",
  url: "https://www.dataprotection.ro",
};

/** Consumer protection bodies a Romanian commercial site links to. */
export const anpc = {
  name: "Autoritatea Națională pentru Protecția Consumatorilor",
  short: "ANPC",
  url: "https://anpc.ro",
  /** Alternative dispute resolution — the SAL entry point. */
  salUrl: "https://anpc.ro/ce-este-sal/",
  /** The European Commission's online dispute resolution platform. */
  solUrl: "https://ec.europa.eu/consumers/odr",
};

/** Legal pages, in the order the footer lists them. */
export const legalLinks = [
  { name: "Termeni și condiții", path: "/termeni" },
  { name: "Confidențialitate", path: "/confidentialitate" },
  { name: "Cookie-uri", path: "/cookies" },
];
