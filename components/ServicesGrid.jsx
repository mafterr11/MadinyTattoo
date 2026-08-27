import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Reveal from "./Reveal";
import { blurProps } from "../lib/blur";
import { services } from "../lib/site";
import { serviceDetails } from "../lib/servicesDetail";

/**
 * Homepage services block.
 *
 * Deliberately shaped differently from the tabbed explorer on /servicii: the
 * grid is asymmetric so tattoos read as the core service, and every card
 * carries its entry price — the one thing people want before they click.
 *
 * Cards link straight to the dedicated service pages rather than to /servicii.
 * Those four pages are the commercial keyword targets, and routing the
 * homepage through the hub would bury them a click deeper.
 *
 * Entry prices come from serviceDetails so they can never contradict the
 * tariff tables; the short descriptions stay in site.js.
 */
const priceByPath = Object.fromEntries(
  serviceDetails.map((service) => [service.path, service.priceFrom]),
);

const withPrice = services.map((service) => ({
  ...service,
  priceFrom: priceByPath[service.path],
  imageProps: blurProps(service.image),
}));

const [featured, ...rest] = withPrice;

/**
 * A price never wraps mid-figure, so this tag's width is the floor the whole
 * card is measured against. It steps down under 400px, where "de la 800 RON"
 * at full tracking is wider than the column a 320px phone leaves for it.
 */
const PriceTag = ({ children }) => (
  <span className="border-accent/25 bg-accent/8 text-accent xs:px-3 xs:text-[0.65rem] xs:tracking-[0.12em] shrink-0 rounded-full border px-2.5 py-1 text-[0.6rem] font-medium tracking-[0.08em] whitespace-nowrap uppercase">
    {children}
  </span>
);

/**
 * `min-w-0` on both columns: a grid item defaults to `min-width: auto`, which
 * is its content's minimum — so the widest price tag in the list was setting
 * the column width and pushing the whole grid 56px past a 320px screen. The
 * cards already clip their own overflow; the column should never widen for it.
 */
const ServicesGrid = () => (
  <div className="grid gap-5 lg:grid-cols-2">
    {/* Featured */}
    <Reveal className="h-full min-w-0">
      <Link
        href={featured.path}
        className="card card-hover group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden lg:min-h-[32rem]"
      >
        <Image
          src={featured.image}
          alt={`Serviciu ${featured.title} la Madiny Tattoo București`}
          fill
          sizes="(max-width: 1024px) 100vw, 620px"
          {...featured.imageProps}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="from-ink via-ink/70 absolute inset-0 bg-gradient-to-t to-transparent"
        />

        <div className="relative p-7 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="group-hover:text-accent text-2xl transition-colors duration-300 sm:text-3xl">
              {featured.title}
            </h3>
            <PriceTag>{featured.priceFrom}</PriceTag>
          </div>

          <p className="text-muted mt-3 max-w-md text-sm leading-relaxed">
            {featured.description}
          </p>

          <span className="text-accent mt-5 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.18em] uppercase">
            Vezi tarifele
            <FiArrowUpRight
              aria-hidden="true"
              className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </Reveal>

    {/* The rest, as compact rows */}
    <ul className="flex min-w-0 flex-col gap-5">
      {rest.map((service, i) => (
        <Reveal
          as="li"
          key={service.path}
          delay={(i + 1) * 0.08}
          className="flex-1"
        >
          <Link
            href={service.path}
            className="card card-hover group xs:gap-4 flex h-full items-stretch gap-3 overflow-hidden p-3 sm:gap-5"
          >
            <div className="xs:w-24 relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl sm:w-32">
              <Image
                src={service.image}
                alt={`Serviciu ${service.title} la Madiny Tattoo București`}
                fill
                sizes="128px"
                {...service.imageProps}
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-2 sm:pr-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3 className="group-hover:text-accent xs:text-lg text-base transition-colors duration-300">
                  {service.title}
                </h3>
                <PriceTag>{service.priceFrom}</PriceTag>
              </div>

              <p className="text-muted mt-1.5 line-clamp-2 text-sm leading-relaxed sm:line-clamp-3">
                {service.description}
              </p>
            </div>

            <FiArrowUpRight
              aria-hidden="true"
              className="text-accent mt-1 mr-1 shrink-0 self-start text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      ))}
    </ul>
  </div>
);

export default ServicesGrid;
