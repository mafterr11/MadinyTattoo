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
          <h1 className="mt-6 text-[length:var(--text-display)]">
            Transformăm Ideile
            <br />
            In <span className="text-gradient-accent">Realitate</span>
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
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Programează-te
            </Link>
            <Link href="/proiecte" className="btn btn-ghost">
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
