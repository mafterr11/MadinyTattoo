"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Long enough to read a pillar without being made to hurry. */
const ADVANCE_MS = 6000;

/**
 * The hygiene pillars, one at a time, for phones. Three stacked blocks put the
 * services most of a screen further down; swiping keeps the band to the height
 * of a single card.
 *
 * The track is a real scroll container with scroll snapping rather than a
 * transformed strip: swiping keeps the platform's own momentum and rubber-band,
 * every pillar stays in the document for a screen reader to walk through, and
 * auto-advance is nothing more than a scripted scroll.
 */
const SafetyCarousel = ({ pillars }) => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  // A reader who swipes has taken over; nothing should move under them again.
  const [taken, setTaken] = useState(false);

  const goTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  }, []);

  // Which pillar is on screen, read back from the scroll position so a swipe
  // and a scripted advance are the same event as far as the dots know.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIndex(Math.round(track.scrollLeft / track.clientWidth));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Only rotate while the band is actually on screen.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (taken || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      goTo((index + 1) % pillars.length);
    }, ADVANCE_MS);

    return () => clearInterval(id);
  }, [taken, visible, index, pillars.length, goTo]);

  return (
    <div
      role="group"
      aria-roledescription="carusel"
      aria-label="Siguranță și igienă"
      className="sm:hidden"
    >
      <div
        ref={trackRef}
        onPointerDown={() => setTaken(true)}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
      >
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            role="group"
            aria-roledescription="element"
            aria-label={`${i + 1} din ${pillars.length}`}
            className="w-full shrink-0 snap-center px-1 py-9"
          >
            <div className="flex items-center gap-4">
              <p className="font-display text-gradient-accent text-4xl leading-none font-semibold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <span
                aria-hidden="true"
                className="from-accent/45 h-px flex-1 bg-gradient-to-r to-transparent"
              />
            </div>

            <h2 className="font-poppins mt-6 text-[0.9rem] leading-7 font-semibold tracking-[0.16em] uppercase">
              <span className="text-fg block">{pillar.title}</span>
              <span className="text-accent block">{pillar.accent}</span>
            </h2>

            <p className="text-muted mt-3 text-sm leading-relaxed">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 pb-9">
        {pillars.map((pillar, i) => (
          <button
            key={pillar.title}
            type="button"
            aria-label={`Vezi ${pillar.title.toLowerCase()}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => {
              setTaken(true);
              goTo(i);
            }}
            className="h-8 px-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-400 ${
                i === index ? "bg-accent w-6" : "bg-fg/25 w-1.5"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SafetyCarousel;
