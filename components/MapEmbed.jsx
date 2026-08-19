"use client";

import { useState } from "react";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import { business } from "../lib/site";

/**
 * The Google Maps embed, behind a click.
 *
 * Loading the iframe on page load hands Google a request — and cookies — from
 * every visitor who opens /contact, before anyone has been told or asked. The
 * placeholder says who the map comes from and loads it only once the visitor
 * decides they want it, which is the whole of what the consent has to cover:
 * nothing third-party runs until the button is pressed.
 *
 * The direct Maps link underneath is the escape hatch for anyone who would
 * rather not load the embed at all — following a link is their own navigation,
 * not something the page did to them.
 */
const MapEmbed = () => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={`Harta către ${business.name}, ${business.addressFull}`}
        src={business.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="responsive-iframe"
        style={{ filter: "grayscale(0.5) contrast(1.05) brightness(0.85)" }}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
      {/* A hint of the map's own geometry, so the placeholder reads as a map
          that has not loaded rather than as an empty panel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--color-fg)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-fg)_1px,transparent_1px)] [background-size:44px_44px] opacity-[0.07]"
      />

      <span className="border-accent/25 bg-accent/8 text-accent relative flex h-14 w-14 items-center justify-center rounded-full border">
        <FiMapPin className="text-2xl" aria-hidden="true" />
      </span>

      <div className="relative">
        <p className="text-fg font-medium">{business.addressFull}</p>
        <p className="text-muted mx-auto mt-2 max-w-sm text-sm leading-relaxed">
          Harta este încărcată de la Google, care poate seta cookie-uri pe
          dispozitivul tău. O afișăm doar dacă o ceri.
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="btn btn-primary btn-sm"
        >
          Încarcă harta
        </button>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm"
        >
          Deschide în Google Maps
          <FiArrowUpRight className="text-base" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default MapEmbed;
