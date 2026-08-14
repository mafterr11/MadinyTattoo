"use client";

import { useEffect, useRef, useState } from "react";

import { stats } from "../../lib/site";

const DURATION = 2000;
// easeOutExpo — fast start, long settle, which reads as more deliberate than
// a linear count.
const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts up once, when the row first scrolls into view. Replaces react-countup:
 * its `enableScrollSpy` mode logged "target is null or undefined" on every
 * mount under React 19.
 */
const Counter = ({ value }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Users who asked for reduced motion get the final figure at once.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(value);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / DURATION, 1);
          setDisplay(Math.round(ease(progress) * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("ro-RO")}
    </span>
  );
};

const Stats = () => (
  <section aria-label="Madiny Tattoo în cifre" className="border-y border-white/8">
    <div className="container grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-1 px-6 py-10 text-center"
        >
          <p className="font-display text-accent text-4xl lg:text-5xl">
            <Counter value={stat.value} />
            <span aria-hidden="true">+</span>
          </p>
          <p className="text-muted text-xs tracking-[0.18em] uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
