"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/**
 * How many images fit one screenful, per layout.
 *
 * `steps` is read largest-first and describes the page size at each breakpoint,
 * matching the column count in `grid` times the number of rows we want.
 *
 * `reveal` covers the render before the browser has told us anything about the
 * viewport. It hands every image a class that makes the *first* page look right
 * at every width at once, so the server sends the whole portfolio — Google sees
 * all of it — while a visitor only ever sees page one. Once mounted we slice
 * the list for real, and because page one already matches, nothing moves.
 *
 * The classes have to be written out in full: Tailwind reads them from this
 * source, so a class assembled at runtime would never be generated.
 */
const LAYOUTS = {
  // /proiecte — three rows: 2x3 on phones, 3x3 on tablets, 4x3 on desktop.
  portfolio: {
    grid: "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4",
    steps: [
      { min: 1280, size: 12 },
      { min: 768, size: 9 },
      { min: 0, size: 6 },
    ],
    reveal: (i) =>
      i < 6
        ? ""
        : i < 9
          ? "hidden md:block"
          : i < 12
            ? "hidden xl:block"
            : "hidden",
  },
  // Homepage teaser — two rows: 2x2 on phones, 4x2 from tablets up.
  preview: {
    grid: "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
    steps: [
      { min: 768, size: 8 },
      { min: 0, size: 4 },
    ],
    reveal: (i) => (i < 4 ? "" : i < 8 ? "hidden md:block" : "hidden"),
  },
};

const SWIPE_THRESHOLD = 50;

const NavButton = ({ children, disabled, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className="border-fg/15 text-fg hover:border-accent hover:text-accent flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-inherit"
  >
    {children}
  </button>
);

/**
 * Pages a list of images and lets you swipe between them.
 *
 * Renders nothing itself — `children(image, index)` draws each cell, so the
 * portfolio can open a lightbox and the homepage can link away, off the same
 * paging. The index passed back is the position in the full list, not in the
 * page, which is what a lightbox needs to keep browsing past the page edge.
 *
 * `resetOn` is whatever the caller filtered by — the artist tab, today. A new
 * value puts the reader back on the first page and cross-fades the grid,
 * because a filtered list is a different list rather than a scroll position
 * inside the old one.
 */
const GalleryPager = ({
  images,
  layout,
  children,
  label = "Lucrări",
  resetOn,
}) => {
  const { grid, steps, reveal } = LAYOUTS[layout];
  const reduceMotion = useReducedMotion();

  // null until the browser has been measured — see `reveal` above.
  const [pageSize, setPageSize] = useState(null);

  /**
   * The open page, stamped with the filter it was chosen under.
   *
   * Storing the two together is what lets a new filter fall back to page one
   * during the same render. Resetting it afterwards from an effect would first
   * paint the old page number against the new list — and, on a filter with
   * fewer pages than the one before it, paint an empty grid.
   */
  const [chosen, setChosen] = useState({ key: resetOn, page: 0, direction: 0 });
  const stale = chosen.key !== resetOn;
  const page = stale ? 0 : chosen.page;
  const direction = stale ? 0 : chosen.direction;

  const touchStartX = useRef(null);

  useEffect(() => {
    const queries = steps.map(({ min, size }) => ({
      size,
      list: window.matchMedia(`(min-width: ${min}px)`),
    }));

    const measure = () => {
      const next = queries.find(({ list }) => list.matches)?.size;

      setPageSize((current) => {
        if (!next || next === current) return current;

        // Keep the image you were looking at on screen when the layout
        // changes under you — rotating a phone should not jump to page one.
        setChosen((state) => ({
          ...state,
          page: Math.floor((state.page * (current ?? next)) / next),
        }));

        return next;
      });
    };

    measure();
    queries.forEach(({ list }) => list.addEventListener("change", measure));

    return () =>
      queries.forEach(({ list }) =>
        list.removeEventListener("change", measure),
      );
  }, [steps]);

  const pages = pageSize ? Math.ceil(images.length / pageSize) : 1;
  const current = Math.min(page, pages - 1);

  const visible = pageSize
    ? images.slice(current * pageSize, (current + 1) * pageSize)
    : images;

  const goTo = (next) => {
    if (next < 0 || next >= pages || next === current) return;
    setChosen({
      key: resetOn,
      page: next,
      direction: next > current ? 1 : -1,
    });
  };

  const slide = reduceMotion ? 0 : 40;

  return (
    <div>
      {/* touch-pan-y: tells the browser this region owns horizontal gestures
          and only native-scrolls vertically. Without it, a swipe that drifts
          even slightly off-axis (any real thumb) reads as an ambiguous
          scroll attempt — which on a phone can collapse/expand the address
          bar mid-gesture. That resize repaints the fixed bottom bar visibly,
          which is what looked like the bar "reloading". */}
      <div
        className="touch-pan-y"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const delta = event.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > SWIPE_THRESHOLD)
            goTo(current + (delta < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.ul
            // Keyed on the filter as well as the page, so switching artists
            // cross-fades instead of swapping the photos underneath in place.
            key={`${resetOn ?? ""}:${current}`}
            className={grid}
            initial={{ opacity: 0, x: direction * slide }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -slide }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {visible.map((image, i) => {
              const index = pageSize ? current * pageSize + i : i;

              return (
                <li
                  key={image.src}
                  className={pageSize ? undefined : reveal(i)}
                >
                  {children(image, index)}
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>

      {/* Reserved before the controls know how many pages there are, so they
          appear without pushing the rest of the page down. */}
      <div className="mt-10 flex h-11 items-center justify-center gap-5">
        {pageSize && pages > 1 && (
          <>
            <NavButton
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              label="Lucrările anterioare"
            >
              <FiChevronLeft className="text-xl" aria-hidden="true" />
            </NavButton>

            <div
              role="tablist"
              aria-label={`${label} — pagini`}
              className="flex items-center gap-2"
            >
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Pagina ${i + 1} din ${pages}`}
                  onClick={() => goTo(i)}
                  className="group flex h-8 w-4 items-center justify-center"
                >
                  <span
                    // Same dot as SafetyCarousel, so the two carousels on the
                    // site read as one control rather than two designs.
                    className={`block h-1.5 rounded-full transition-all duration-400 ${
                      i === current
                        ? "bg-accent w-6"
                        : "group-hover:bg-fg/45 bg-fg/25 w-1.5"
                    }`}
                  />
                </button>
              ))}
            </div>

            <NavButton
              onClick={() => goTo(current + 1)}
              disabled={current === pages - 1}
              label="Lucrările următoare"
            >
              <FiChevronRight className="text-xl" aria-hidden="true" />
            </NavButton>
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryPager;
