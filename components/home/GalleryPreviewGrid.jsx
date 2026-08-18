"use client";

import Link from "next/link";

import BlurImage from "../BlurImage";
import GalleryPager from "../GalleryPager";

/**
 * The homepage teaser's cells, on the shared pager.
 *
 * A thin client component of its own so GalleryPreview can stay on the server:
 * the pager draws each cell through a render function, and a function cannot
 * cross the server boundary.
 */
const GalleryPreviewGrid = ({ images }) => (
  <GalleryPager images={images} layout="preview" label="Lucrări">
    {(image) => (
      <Link
        href="/proiecte"
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
);

export default GalleryPreviewGrid;
