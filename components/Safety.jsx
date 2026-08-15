import Reveal from "./Reveal";

/**
 * The first real question anyone asks before a needle touches their skin is
 * about hygiene — so this band answers it right under the hero, where the
 * vanity counters used to sit.
 */
const pillars = [
  {
    number: "01",
    title: "Echipament",
    accent: "100% steril",
    body: "Fără compromisuri. Folosim doar ace, cartușe și bijuterii sigilate, de unică folosință.",
  },
  {
    number: "02",
    title: "Standarde",
    accent: "stricte",
    body: "Suprafețe dezinfectate între clienți și mănuși schimbate la fiecare etapă a procedurii.",
  },
  {
    number: "03",
    title: "Mediu",
    accent: "avizat",
    body: "Studio autorizat sanitar, în care fiecare ședință respectă protocoalele de igienă.",
  },
];

const Safety = () => (
  <section
    aria-label="Siguranță și igienă la Madiny Tattoo"
    className="bg-surface/30 relative overflow-hidden border-y border-white/8"
  >
    {/* Oversized wordmark — texture behind the copy, not a thing to read. */}
    <span
      aria-hidden="true"
      className="font-display text-fg/4 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] leading-none tracking-[0.06em] whitespace-nowrap select-none"
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
          <p className="font-display text-gradient-accent text-4xl leading-none font-semibold lg:text-5xl">
            {pillar.number}
          </p>

          <h2 className="font-poppins mt-6 text-sm leading-6 font-semibold tracking-[0.18em] uppercase">
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
