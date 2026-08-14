"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

/**
 * Portfolio grid with a real lightbox: arrow keys, Escape, swipe, focus
 * restore and a live counter. The previous gallery was a scroll container
 * nested inside the page scroll, with no way to enlarge an image.
 */
const Gallery = ({ images, priorityCount = 6 }) => {
  const [index, setIndex] = useState(null);
  const openerRef = useRef(null);
  const touchStartX = useRef(null);

  const isOpen = index !== null;
  const close = useCallback(() => setIndex(null), []);

  const step = useCallback(
    (delta) =>
      setIndex((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  const open = (i, event) => {
    openerRef.current = event.currentTarget;
    setIndex(i);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  // Return focus to the thumbnail that opened the lightbox.
  useEffect(() => {
    if (!isOpen && openerRef.current) {
      openerRef.current.focus();
      openerRef.current = null;
    }
  }, [isOpen]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={(event) => open(i, event)}
              aria-label={`Mărește imaginea: ${image.alt}`}
              className="group border-fg/8 hover:border-accent/50 relative block aspect-4/5 w-full overflow-hidden rounded-xl border transition-colors duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                priority={i < priorityCount}
                loading={i < priorityCount ? undefined : "lazy"}
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="from-ink/70 absolute inset-0 flex items-end justify-end bg-gradient-to-t via-transparent to-transparent p-3 opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <HiOutlineMagnifyingGlassPlus className="text-accent text-xl" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[index].alt}
          onClick={close}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
          className="bg-ink/95 fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-xl sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Închide"
            className="border-fg/20 text-fg hover:border-accent hover:text-accent absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 sm:top-6 sm:right-6"
          >
            <FiX className="text-xl" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Imaginea anterioară"
            className="border-fg/20 text-fg hover:border-accent hover:text-accent absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 sm:left-6"
          >
            <FiChevronLeft className="text-xl" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Imaginea următoare"
            className="border-fg/20 text-fg hover:border-accent hover:text-accent absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 sm:right-6"
          >
            <FiChevronRight className="text-xl" aria-hidden="true" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full max-h-[82vh] w-full max-w-4xl flex-col items-center justify-center"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={1200}
              height={1500}
              sizes="(max-width: 1024px) 92vw, 900px"
              className="h-auto max-h-[82vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="text-muted mt-4 text-xs tracking-[0.18em] uppercase">
              {index + 1} / {images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export default Gallery;
