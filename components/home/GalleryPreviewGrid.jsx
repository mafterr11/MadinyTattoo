"use client";

import { useState } from "react";
import Link from "next/link";

import ArtistFilter from "../ArtistFilter";
import BlurImage from "../BlurImage";
import GalleryPager from "../GalleryPager";

const PANEL_ID = "lucrari-preview";

/**
 * The homepage teaser's cells, on the shared pager, behind the artist filter.
 *
 * A thin client component of its own so GalleryPreview can stay on the server:
 * the pager draws each cell through a render function, and a function cannot
 * cross the server boundary — and the filter needs state.
 *
 * Server-rendered unfiltered, which is what puts every teaser image in the
 * HTML a crawler reads. Filtering is a slice of a list the page already holds,
 * so switching artists costs no request.
 */
const GalleryPreviewGrid = ({ images, counts }) => {
  const [artist, setArtist] = useState("all");

  const visible =
    artist === "all"
      ? images
      : images.filter((image) => image.artist === artist);

  // Carries the choice through to the portfolio, so a visitor who was looking
  // at one artist's work does not land back on the unfiltered grid.
  const href = artist === "all" ? "/proiecte" : `/proiecte?artist=${artist}`;

  return (
    <div>
      <ArtistFilter
        value={artist}
        onChange={setArtist}
        counts={counts}
        idPrefix="preview"
        layoutId="preview-artist-tab"
        panelId={PANEL_ID}
      />

      <div
        id={PANEL_ID}
        role="tabpanel"
        aria-labelledby={`preview-tab-${artist}`}
        className="mt-10"
      >
        <GalleryPager
          images={visible}
          layout="preview"
          label="Lucrări"
          resetOn={artist}
        >
          {(image) => (
            <Link
              href={href}
              aria-label="Vezi portofoliul complet de tatuaje"
              className="group border-fg/8 hover:border-accent/50 relative block aspect-4/5 overflow-hidden rounded-xl border transition-colors duration-500"
            >
              <BlurImage
                src={image.src}
                alt={image.alt}
                blurDataURL={image.blurDataURL}
                sizes="(max-width: 768px) 48vw, 300px"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </Link>
          )}
        </GalleryPager>
      </div>
    </div>
  );
};

export default GalleryPreviewGrid;
