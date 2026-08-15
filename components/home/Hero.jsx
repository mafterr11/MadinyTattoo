import Link from "next/link";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

import VideoBackground from "../VideoBackground";
import Reveal from "../Reveal";
import { business } from "../../lib/site";

const Hero = () => (
  <section
    aria-label="Prezentare Madiny Tattoo"
    className="relative flex min-h-[100svh] items-center overflow-hidden"
  >
    <VideoBackground />

    <div className="container relative z-10 pt-28 pb-24 lg:pt-32">
      <div className="max-w-3xl">
        <Reveal>
          <span className="eyebrow">
            {business.locality} · {business.street}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          {/* The first line carries the words people actually search — the
              homepage is the page competing for "tatuaje București". The second
              keeps the studio's own line, which said nothing to a crawler on
              its own. Sized down a step: two lines at display size overflow
              the hero on short viewports. */}
          {/* Two tiers inside one heading: the searched phrase carries the
              display size, the studio's own line supports it a step down.
              Both at display size wrapped to four lines and swamped the hero. */}
          <h1 className="mt-6">
            <span className="block text-[length:var(--text-display)] text-balance">
              <span className="text-gradient-accent">Tatuaje</span> în București
            </span>
            <span className="text-fg/70 mt-3 block text-[length:var(--text-h3)] font-normal">
              Transformăm ideile în realitate.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="lead mt-7 max-w-xl">
            În spațiul nostru creativ, transformăm fiecare concept într-o
            realitate vibrantă și autentică. Fiecare design captează unicitatea
            ta, conturând și detaliind povestea personală.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/contact" className="btn btn-primary btn-block">
              Programează-te
            </Link>
            <Link href="/proiecte" className="btn btn-ghost btn-block">
              Vezi lucrările
              <FiArrowUpRight className="text-base" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>

    <div
      aria-hidden="true"
      className="text-fg/35 absolute inset-x-0 bottom-8 hidden justify-center lg:flex"
    >
      <FiArrowDown className="animate-bounce text-xl" />
    </div>
  </section>
);

export default Hero;
