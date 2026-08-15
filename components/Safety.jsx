import Reveal from "./Reveal";

/**
 * The first real question anyone asks before a needle touches their skin is
 * about hygiene — so this band answers it right under the hero, where the
 * vanity counters used to sit.
 *
 * The numerals run 02 · 03 · 01 on purpose: the row reads as a set of marks,
 * not as a checklist to work through in order.
 */
const pillars = [
  {
    number: "02",
    title: "Pregătire",
    accent: "de la zero",
    body: "Mănuși schimbate pe parcurs și masa de lucru dezinfectată complet înainte de fiecare persoană.",
  },
  {
    number: "03",
    title: "Spațiu",
    accent: "autorizat sanitar",
    body: "Un cabinet amenajat pentru proceduri pe piele, unde regulile de igienă nu se negociază.",
  },
  {
    number: "01",
    title: "Nimic",
    accent: "refolosit",
    body: "Acele, cartușele și bijuteriile vin în ambalaj sigilat, se desfac în fața ta și se aruncă la final.",
  },
];

const Safety = () => (
  <section
    aria-label="Siguranță și igienă la Madiny Tattoo"
    className="bg-surface/30 relative overflow-hidden border-y border-white/8"
  >
    {/* Warmth behind the wordmark, so the band doesn't read as flat black. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_130%_at_50%_50%,rgba(212,179,154,0.07),transparent_70%)]"
    />

    {/* Sized to sit inside the viewport whole — a half-cut word reads as a
        rendering accident rather than as a watermark. Dropped on phones, where
        the columns stack and it would only land behind the middle one. */}
    <span
      aria-hidden="true"
      className="font-display text-fg/5 pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[14vw] leading-none tracking-[0.04em] whitespace-nowrap select-none sm:block"
    >
      SIGURANȚĂ
    </span>

    <div className="container relative grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {pillars.map((pillar, i) => (
        <Reveal
          key={pillar.number}
          delay={i * 0.12}
          className="px-1 py-11 sm:px-7 lg:px-9 lg:py-16"
        >
          <div className="flex items-center gap-4">
            <p className="font-display text-gradient-accent text-4xl leading-none font-semibold lg:text-5xl">
              {pillar.number}
            </p>
            <span
              aria-hidden="true"
              className="from-accent/45 h-px flex-1 bg-gradient-to-r to-transparent"
            />
          </div>

          <h2 className="font-poppins mt-7 text-[0.9rem] leading-7 font-semibold tracking-[0.16em] uppercase">
            <span className="text-fg block">{pillar.title}</span>
            <span className="text-accent block">{pillar.accent}</span>
          </h2>

          <p className="text-muted mt-4 max-w-xs text-sm leading-relaxed">
            {pillar.body}
          </p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Safety;
