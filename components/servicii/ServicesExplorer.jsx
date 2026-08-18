"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiArrowUpRight } from "react-icons/fi";
import { BookingTrigger } from "../booking/BookingProvider";

const EASE = [0.22, 1, 0.36, 1];

// The panel comes in as one cascade instead of four separate fades, so
// switching tabs reads as a single movement.
const panelVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const PriceGroup = ({ group, alone }) => {
  // A single group has the row to itself; the laser size table is long enough
  // that it also needs its rows in two columns.
  const wide = group.wide || alone;
  const split = group.tiers.length > 6;

  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <p className="neon text-xs font-semibold tracking-[0.18em] uppercase">
        {group.title}
      </p>
      <dl
        className={`mt-3 ${split ? "sm:grid sm:grid-cols-2 sm:gap-x-10" : ""}`}
      >
        {group.tiers.map((tier) => (
          <div
            key={tier.label}
            className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-white/6 py-2.5"
          >
            <dt className="text-muted text-sm">{tier.label}</dt>
            <dd className="text-fg text-sm font-medium tabular-nums">
              {tier.price}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

const ServicePanel = ({ service }) => (
  <motion.div
    variants={panelVariants}
    initial="hidden"
    animate="show"
    className="grid gap-8 lg:grid-cols-12 lg:gap-10"
  >
    {/* Visual */}
    <motion.figure variants={itemVariants} className="lg:col-span-5">
      {/* Sticky on wide screens: the price tables make the right column much
          taller than the photo, and a frozen image beats an empty gutter. */}
      <div className="card relative aspect-4/3 overflow-hidden lg:sticky lg:top-28 lg:aspect-4/5">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          {...service.imageProps}
          className={`object-cover ${service.imagePosition ?? "object-center"}`}
        />
        <div
          aria-hidden="true"
          className="from-ink/90 via-ink/20 absolute inset-0 bg-gradient-to-t to-transparent"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-6">
          <span className="text-accent text-[0.65rem] tracking-[0.16em] uppercase sm:text-[0.7rem] sm:tracking-[0.22em]">
            {service.tagline}
          </span>
        </figcaption>
      </div>
    </motion.figure>

    {/* Detail */}
    <div className="flex flex-col gap-7 lg:col-span-7">
      <motion.div variants={itemVariants}>
        <h2>{service.title}</h2>
        <div className="hairline mt-4" />
        <p className="text-muted mt-5 leading-relaxed">{service.intro}</p>
      </motion.div>

      {/* The bullet list of highlights lives only on the dedicated page now —
          the panel is the summary, not a second copy of it. */}

      <motion.div variants={itemVariants} className="card p-6 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-accent text-xl">Tarife</h3>
          <span className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
            {service.priceFrom}
          </span>
        </div>
        <div className="hairline mt-3" />

        <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {service.priceGroups.map((group) => (
            <PriceGroup
              key={group.title}
              group={group}
              alone={service.priceGroups.length === 1}
            />
          ))}
        </div>

        {service.priceNote && (
          <p className="text-muted mt-6 text-xs leading-relaxed">
            {service.priceNote}
          </p>
        )}
      </motion.div>

      {/* Conditions attached to the figures above, so they sit right below
          them rather than waiting on the dedicated page. */}
      {service.notice && (
        <motion.aside
          variants={itemVariants}
          className="card border-accent/25 bg-accent/6 p-6 sm:p-7"
        >
          <h3 className="flex items-center gap-2.5 text-base">
            <FiAlertTriangle
              className="neon-icon text-accent shrink-0"
              aria-hidden="true"
            />
            {service.notice.title}
          </h3>

          <p className="text-muted mt-3 text-sm leading-relaxed">
            {service.notice.body}
          </p>

          <ul className="mt-4 space-y-2">
            {service.notice.items.map((item) => (
              <li
                key={item}
                className="text-muted before:bg-accent relative pl-5 text-sm leading-relaxed before:absolute before:top-2.5 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>

          <Link
            href={service.notice.linkHref}
            className="text-accent link-underline mt-5 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.16em] uppercase"
          >
            {service.notice.linkLabel}
            <FiArrowUpRight className="text-sm" aria-hidden="true" />
          </Link>
        </motion.aside>
      )}

      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        {/* On a phone the fixed bar carries booking on every screen, so the
            panel would be repeating a button the reader already has. */}
        <BookingTrigger
          service={service.key}
          className="btn btn-primary btn-block hidden md:inline-flex"
        >
          Programează-te
        </BookingTrigger>
        <Link href={service.path} className="btn btn-ghost btn-block">
          {service.ctaLabel}
          <FiArrowUpRight className="text-base" aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

/**
 * Tabbed reader for the whole services offer, so /servicii answers the
 * question on the spot instead of sending everyone to four separate pages.
 *
 * Every panel stays in the DOM — inactive ones only carry the `hidden`
 * attribute — so the prices and the links to the dedicated pages are all in
 * the server-rendered HTML. Re-keying the active panel remounts it, which is
 * what replays the entrance cascade on each switch.
 */
const ServicesExplorer = ({ services }) => {
  const [active, setActive] = useState(services[0].key);
  const tabRefs = useRef({});

  const move = (offset) => {
    const index = services.findIndex((service) => service.key === active);
    const next =
      services[(index + offset + services.length) % services.length].key;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event) => {
    const jump = { ArrowRight: 1, ArrowLeft: -1 }[event.key];

    if (jump) {
      event.preventDefault();
      move(jump);
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const key = services[event.key === "Home" ? 0 : services.length - 1].key;
      setActive(key);
      tabRefs.current[key]?.focus();
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Serviciile Madiny Tattoo"
        className="grid grid-cols-2 gap-2.5 lg:grid-cols-4"
      >
        {services.map((service, i) => {
          const isActive = service.key === active;

          return (
            <button
              key={service.key}
              ref={(node) => {
                tabRefs.current[service.key] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${service.key}`}
              aria-selected={isActive}
              aria-controls={`panel-${service.key}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(service.key)}
              onKeyDown={onKeyDown}
              // Stacked on phones: "Micropigmentare" needs the full width of a
              // half-screen tab, so the numeral moves above the label.
              className={`relative flex cursor-pointer flex-col items-start gap-1 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-300 sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-4 ${
                isActive
                  ? "border-accent/45"
                  : "border-white/8 hover:border-white/25"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="service-tab"
                  aria-hidden="true"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  className="bg-accent/8 absolute inset-0 rounded-2xl"
                />
              )}

              <span
                aria-hidden="true"
                className={`font-display relative text-base leading-none tabular-nums transition-colors duration-300 sm:text-lg ${
                  isActive ? "text-accent" : "text-fg/25"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`relative text-[0.72rem] font-medium tracking-[0.07em] uppercase transition-colors duration-300 sm:text-[0.8125rem] sm:tracking-[0.1em] ${
                  isActive ? "text-fg" : "text-muted"
                }`}
              >
                {service.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 lg:mt-14">
        {services.map((service) => {
          const isActive = service.key === active;

          return (
            <div
              key={service.key}
              id={`panel-${service.key}`}
              role="tabpanel"
              aria-labelledby={`tab-${service.key}`}
              hidden={!isActive}
            >
              <ServicePanel key={isActive ? "on" : "off"} service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesExplorer;
