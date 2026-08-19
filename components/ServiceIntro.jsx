import { FiCheck } from "react-icons/fi";

import Reveal from "./Reveal";

/**
 * The "what this actually is" block for a dedicated service page.
 *
 * Copy comes from servicesDetail.js — the same source the /servicii explorer
 * reads — so the hub and the page can never describe a service differently.
 *
 * Hidden below md. On a phone this block is a screenful of prose standing
 * between the hero and the prices, which is what people came for; the same
 * copy is a tap away on /servicii, where each tab summarises its service.
 */
const ServiceIntro = ({ intro, highlights }) => (
  <section
    aria-label="Despre acest serviciu"
    className="hidden pb-16 md:block lg:pb-20"
  >
    <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className="lg:col-span-5">
        <span className="eyebrow">Ce presupune</span>
        <p className="lead mt-5">{intro}</p>
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-7">
        <ul className="grid gap-3 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="group border-white/6 bg-surface/50 hover:border-accent/30 flex items-start gap-3 rounded-xl border p-4 transition-colors duration-300"
            >
              <FiCheck
                className="neon-icon text-accent mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span className="text-muted text-sm leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default ServiceIntro;
