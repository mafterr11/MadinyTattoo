import Link from "next/link";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

import VideoBackground from "../VideoBackground";
import Reveal from "../Reveal";
import { BookingTrigger } from "../booking/BookingProvider";
import { business } from "../../lib/site";

const Hero = () => (
  <section
    aria-label="Prezentare Madiny Tattoo"
    className="relative flex min-h-[100svh] items-center overflow-hidden"
  >
    <VideoBackground />

    <div className="relative z-10 container pt-28 pb-24 lg:pt-32">
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
          {/* Both lines live inside the one heading, so the searched phrase
              counts for the crawler whichever of the two is set larger — type
              size is a visual decision here, not an SEO one. The studio's own
              line leads; the descriptor carries "salon de tatuaje" and the
              city underneath it. */}
          <h1 className="mt-6">
            <span className="block text-[length:var(--text-display)]">
              Transformăm ideile
              <br />
              în <span className="neon">Realitate</span>
            </span>
            <span className="text-accent/85 mt-4 block text-[length:var(--text-h3)] font-normal">
              Salon de tatuaje în București
            </span>
          </h1>
        </Reveal>

        {/* Kept off phones, where it pushed both calls to action toward the
            fold, and where the headline and the descriptor above already say
            what it says. */}
        <Reveal delay={0.2} className="hidden md:block">
          <p className="lead mt-7 max-w-xl">
            În spațiul nostru creativ, transformăm fiecare concept într-o
            realitate vibrantă și autentică. Fiecare design captează unicitatea
            ta, conturând și detaliind povestea personală.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Booking already sits in the fixed bar at the bottom of every
                phone screen, so the hero spends its primary slot on the one
                thing the bar cannot offer — what the studio actually does. */}
            <Link
              href="/servicii"
              className="btn btn-primary btn-block md:hidden"
            >
              Ce oferim
              <FiArrowUpRight className="text-base" aria-hidden="true" />
            </Link>
            <BookingTrigger className="btn btn-primary btn-block hidden md:inline-flex">
              Programează-te
            </BookingTrigger>
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
