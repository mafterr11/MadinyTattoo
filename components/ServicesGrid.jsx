import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Reveal from "./Reveal";
import { services } from "../lib/site";

/**
 * Replaces the old Swiper carousel: every service is in the DOM at once, so
 * it's crawlable, keyboard-reachable and needs no JavaScript to read.
 */
const ServicesGrid = () => (
  <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((service, i) => (
      <Reveal as="li" key={service.path} delay={i * 0.08} className="h-full">
        <Link
          href={service.path}
          className="card card-hover group flex h-full flex-col overflow-hidden focus-visible:outline-offset-4"
        >
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={service.image}
              alt={`Serviciu ${service.title} la Madiny Tattoo București`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="from-surface absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90"
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="group-hover:text-accent text-xl transition-colors duration-300">
                {service.title}
              </h3>
              <FiArrowUpRight
                aria-hidden="true"
                className="text-accent mt-1 shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            <p className="text-muted mt-3 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </Link>
      </Reveal>
    ))}
  </ul>
);

export default ServicesGrid;
