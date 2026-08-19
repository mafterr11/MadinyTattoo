"use client";

import { useEffect, useRef } from "react";

/**
 * Everything the browser will hand focus to, minus the things that only look
 * focusable. `[tabindex="-1"]` is excluded on purpose: it marks a node that
 * can take focus programmatically but must stay out of the Tab order.
 */
const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/** Focusable *and* actually on screen — a hidden panel's controls are neither. */
const focusableWithin = (root) =>
  Array.from(root.querySelectorAll(FOCUSABLE)).filter(
    (node) => node.offsetWidth > 0 || node.offsetHeight > 0,
  );

/**
 * Keeps Tab inside an open overlay, and gives the page back what it lent.
 *
 * Both overlays on this site — the booking wizard and the mobile menu — cover
 * the page and dim it, but neither of them held focus: Tab walked straight out
 * of the dialog and carried on through the links underneath, which a keyboard
 * or screen-reader user cannot see and cannot get back from. `aria-modal`
 * tells assistive tech the rest of the page is inert; this makes that true.
 *
 * Returns a ref to attach to the overlay element.
 *
 * @param {boolean} active whether the overlay is open
 * @param {() => void} [onEscape] called on Escape, if the caller wants it here
 */
export default function useFocusTrap(active, onEscape) {
  const containerRef = useRef(null);

  // Held in a ref so an inline `() => setOpen(false)` does not tear the trap
  // down and rebuild it on every render of the component that owns it.
  const escapeRef = useRef(onEscape);
  useEffect(() => {
    escapeRef.current = onEscape;
  });

  useEffect(() => {
    if (!active) return undefined;

    const container = containerRef.current;
    if (!container) return undefined;

    // Whatever opened the overlay is what closing it should return to.
    const opener =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    // The panel animates in, so its controls are not measurable on this tick.
    const frame = requestAnimationFrame(() => {
      const [first] = focusableWithin(container);
      (first ?? container).focus({ preventScroll: true });
    });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        escapeRef.current?.();
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusableWithin(container);
      if (items.length === 0) {
        // Nothing to land on — keep focus on the panel rather than letting it
        // escape to the page behind.
        event.preventDefault();
        container.focus({ preventScroll: true });
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const focused = document.activeElement;

      // Wrap at both ends, and pull focus back in if it already got out —
      // clicking the scrim leaves `body` focused, and Tab from there would
      // otherwise resume at the top of the page.
      if (!container.contains(focused)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && focused === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && focused === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      // Only take focus back if the overlay still has it. A trigger elsewhere
      // may have moved focus deliberately as it closed this one.
      if (opener?.isConnected && container.contains(document.activeElement)) {
        opener.focus({ preventScroll: true });
      }
    };
  }, [active]);

  return containerRef;
}
