"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ALL_ARTISTS, artists } from "../lib/artists";

const OPTIONS = [ALL_ARTISTS, ...artists];

/** Big enough to read a face, small enough to sit inside a pill. */
const AVATAR = 28;

const avatarClass = "ring-ink/70 h-7 w-7 rounded-full object-cover ring-2";

/**
 * The unfiltered tab wears both faces, overlapped. A generic icon would say
 * "filter"; two portraits say "both of them", which is what the tab does.
 */
const AvatarStack = () => (
  <span className="flex shrink-0 items-center -space-x-3">
    {artists.map((artist) => (
      <Image
        key={artist.key}
        src={artist.avatar}
        alt=""
        aria-hidden="true"
        width={AVATAR}
        height={AVATAR}
        className={avatarClass}
      />
    ))}
  </span>
);

/**
 * Picks whose work the grid below shows.
 *
 * Two shapes, because three names with a face on each will not fit one row on
 * a phone: below 640px it is a full-width control of three equal columns with
 * the face stacked over the name, and from there up it is the row of pills the
 * design wants. The earlier single row scrolled sideways instead, which cut
 * "Alexandra" in half at the screen edge with nothing to say it could move.
 *
 * A tablist rather than a row of toggles: the options are mutually exclusive
 * and each one swaps the same panel, so arrow keys walk between them and only
 * the selected tab is a tab stop. Same keyboard contract as the services
 * explorer, so the two controls behave alike.
 *
 * The selected pill is one shared element moved by `layoutId`, which is what
 * makes the highlight slide between tabs instead of blinking out and in. Each
 * mount needs its own `layoutId` — two filters sharing one would animate
 * across the page to each other.
 */
const ArtistFilter = ({
  value,
  onChange,
  counts,
  idPrefix,
  layoutId,
  label = "Filtrează lucrările după artist",
  panelId,
}) => {
  const tabRefs = useRef({});

  const select = (key) => {
    onChange(key);
    tabRefs.current[key]?.focus();
  };

  const onKeyDown = (event) => {
    const jump = { ArrowRight: 1, ArrowLeft: -1 }[event.key];

    if (jump) {
      event.preventDefault();
      const index = OPTIONS.findIndex((option) => option.key === value);
      select(OPTIONS[(index + jump + OPTIONS.length) % OPTIONS.length].key);
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      select(OPTIONS[event.key === "Home" ? 0 : OPTIONS.length - 1].key);
    }
  };

  return (
    <div className="flex justify-center">
      <div
        role="tablist"
        aria-label={label}
        className="bg-surface/60 grid w-full grid-cols-3 gap-1 rounded-2xl border border-white/10 p-1.5 backdrop-blur-md sm:flex sm:w-auto sm:gap-1.5 sm:rounded-full"
      >
        {OPTIONS.map((option) => {
          const isActive = option.key === value;
          const count = counts?.[option.key];

          return (
            <button
              key={option.key}
              ref={(node) => {
                tabRefs.current[option.key] = node;
              }}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${option.key}`}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(option.key)}
              onKeyDown={onKeyDown}
              className={`relative flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl px-1.5 py-2.5 transition-colors duration-300 sm:flex-row sm:gap-2.5 sm:rounded-full sm:py-1.5 sm:pr-5 sm:pl-2 ${
                isActive ? "" : "hover:bg-fg/5"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={layoutId}
                  aria-hidden="true"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  className="bg-accent/12 ring-accent/35 absolute inset-0 rounded-xl ring-1 sm:rounded-full"
                />
              )}

              {/* Dimmed rather than greyed out: a face at 28px loses too much
                  to a filter, and the contrast with the selected tab is the
                  point, not the effect. */}
              <span
                className={`relative transition-opacity duration-400 ${
                  isActive ? "" : "opacity-60"
                }`}
              >
                {option.avatar ? (
                  <Image
                    src={option.avatar}
                    alt=""
                    aria-hidden="true"
                    width={AVATAR}
                    height={AVATAR}
                    className={avatarClass}
                  />
                ) : (
                  <AvatarStack />
                )}
              </span>

              <span className="relative flex items-baseline gap-1.5">
                <span
                  className={`text-[0.62rem] font-medium tracking-[0.06em] whitespace-nowrap uppercase transition-colors duration-300 sm:text-[0.75rem] sm:tracking-[0.12em] ${
                    isActive ? "text-fg" : "text-muted"
                  }`}
                >
                  {option.name}
                </span>

                {/* Dropped only on the narrowest phones, where three names
                    already use every pixel the row has. */}
                {count !== undefined && (
                  <span
                    className={`hidden text-[0.6rem] tabular-nums transition-colors duration-300 min-[360px]:inline ${
                      isActive ? "text-accent" : "text-fg/30"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistFilter;
