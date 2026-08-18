"use client";

import { FiPhone } from "react-icons/fi";

import { business, telUrl } from "../lib/site";
import { BookingTrigger } from "./booking/BookingProvider";

/**
 * The two things a phone visitor ever wants — call now, or book — parked on a
 * fixed bar at the bottom of the screen. Phones only: on wider screens the
 * header already carries a booking button in permanent view, and the floating
 * contact buttons cover the call.
 *
 * The bar is visible from the first frame rather than appearing on scroll; it
 * is the page's primary conversion path, and `body` reserves its height so it
 * never sits on top of the footer.
 *
 * `translateZ(0)` promotes the bar to its own compositing layer. Without it,
 * iOS Safari resamples the backdrop-blur every time anything repaints above
 * it — the gallery's swipe animation is exactly that — and the bar visibly
 * flashes as if it reloaded. Isolating it stops that resampling.
 */
const MobileActionBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 [transform:translateZ(0)] md:hidden">
    <div className="bg-ink/92 border-t border-white/8 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <a
          href={telUrl}
          aria-label={`Sună la ${business.phoneDisplay}`}
          className="border-fg/15 bg-surface-2 text-fg active:border-accent flex h-13 w-13 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
        >
          <FiPhone className="text-xl" aria-hidden="true" />
        </a>

        <BookingTrigger className="btn-neon neon flex-1">
          Programează-te
        </BookingTrigger>
      </div>
    </div>
  </div>
);

export default MobileActionBar;
