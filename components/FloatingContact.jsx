"use client";

import { useEffect, useState } from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

import { business, telUrl, whatsappUrl } from "../lib/site";

/**
 * Always-reachable contact affordance. Appears after the first scroll so it
 * never competes with the hero, and stays clear of the mobile safe area.
 *
 * It also steps aside at the very bottom of the page, where it used to sit on
 * top of the footer's credit line. Measuring the distance to the bottom rather
 * than watching the footer keeps this independent of the footer's markup, and
 * the buttons are redundant down there anyway — the footer carries the same
 * phone number and a booking button of its own.
 */
const BOTTOM_CLEARANCE = 140;

const FloatingContact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const fromBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);

      setVisible(window.scrollY > 300 && fromBottom > BOTTOM_CLEARANCE);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    // The page can get shorter or taller without a scroll — an image settling
    // in, or the window being resized — which moves where the bottom is.
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`fixed right-6 bottom-6 z-40 hidden flex-col gap-3 transition-all duration-500 md:flex ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={telUrl}
        aria-label={`Sună la ${business.phoneDisplay}`}
        className="border-fg/15 bg-surface/90 text-fg hover:border-accent hover:text-accent flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        <FiPhone className="text-lg" aria-hidden="true" />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrie-ne pe WhatsApp"
        className="bg-accent text-ink hover:bg-accent-bright flex h-14 w-14 items-center justify-center rounded-full shadow-[0_10px_30px_-8px_rgba(212,179,154,0.6)] transition-all duration-300 hover:scale-105"
      >
        <RiWhatsappLine className="text-2xl" aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingContact;
