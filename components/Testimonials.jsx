import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

import Reveal from "./Reveal";
import { testimonials } from "../lib/testimonials";

/**
 * A grid rather than a carousel — with three entries a slider hides two thirds
 * of the social proof behind an interaction, and hides it from crawlers too.
 */
const Testimonials = () => (
  <ul className="grid gap-5 md:grid-cols-3">
    {testimonials.map((person, i) => (
      <Reveal as="li" key={person.name} delay={i * 0.1} className="h-full">
        <figure className="card flex h-full flex-col p-7">
          <FaQuoteLeft className="text-accent/40 text-3xl" aria-hidden="true" />

          <blockquote className="text-fg/85 mt-5 flex-1 text-[0.95rem] leading-relaxed">
            {person.message}
          </blockquote>

          <figcaption className="mt-7 flex items-center gap-3 border-t border-white/8 pt-5">
            <Image
              src={person.image}
              width={48}
              height={48}
              alt={`${person.name}, client Madiny Tattoo`}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-fg text-sm font-medium">{person.name}</p>
              <p className="text-accent text-[0.7rem] tracking-[0.16em] uppercase">
                {person.position}
              </p>
            </div>
          </figcaption>
        </figure>
      </Reveal>
    ))}
  </ul>
);

export default Testimonials;
