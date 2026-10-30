"use client";

import { Children, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AviatieiCarousel({ children }) {
  const cards = Children.toArray(children);
  const [index, setIndex] = useState(1);
  const [jump, setJump] = useState(false);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);
  const section = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobile || !visible || paused || reducedMotion || jump) return;
    const timer = setInterval(() => setIndex((current) => current + 1), 2500);
    return () => clearInterval(timer);
  }, [mobile, visible, paused, reducedMotion, jump]);

  const move = (next) => {
    setJump(false);
    setIndex(next);
  };
  const active = (index - 1 + cards.length) % cards.length;
  const slides = [cards[cards.length - 1], ...cards, cards[0]];

  return (
    <div ref={section} className="mt-7">
      <div className="hidden gap-5 md:grid md:grid-cols-3">{cards}</div>
      <div
        className="md:hidden"
        role="region"
        aria-roledescription="carusel"
        aria-label="Stiluri de tatuaje"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setPaused(false);
        }}
      >
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              setPaused(false);
              if (Math.abs(info.offset.x) > 45)
                move(index + (info.offset.x < 0 ? 1 : -1));
            }}
            animate={{ x: `-${index * 100}%` }}
            transition={{
              duration: jump || reducedMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={() => {
              if (index === 0 || index === cards.length + 1) {
                setJump(true);
                setIndex(index === 0 ? cards.length : 1);
              } else if (jump) setJump(false);
            }}
          >
            {slides.map((card, i) => (
              <div
                key={i}
                className="w-full shrink-0"
                aria-hidden={i !== index}
                inert={i !== index}
              >
                {card}
              </div>
            ))}
          </motion.div>
        </div>
        <div
          className="mt-5 flex justify-center gap-2"
          aria-label="Alege stilul"
        >
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Arată stilul ${i + 1} din ${cards.length}`}
              aria-current={active === i ? "true" : undefined}
              onClick={() => move(i + 1)}
              className={`h-2.5 rounded-full transition-all duration-300 ${active === i ? "bg-accent w-7" : "w-2.5 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
