"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

/**
 * A `fill` next/image that cross-fades up from its blur placeholder.
 *
 * next/image's own `placeholder="blur"` paints the preview as a background on
 * the <img> itself, so it can only swap instantly — and it cannot be faded,
 * because fading the image would fade the placeholder with it. Here the blur
 * is a separate layer underneath, which lets the real photo dissolve over it.
 *
 * The fade lives on a wrapper rather than on the image, so callers keep the
 * image's own `transition-transform` for hover effects; two `transition-*`
 * utilities on one element would clobber each other.
 *
 * Expects a positioned parent (the grid cells are `relative`), and falls back
 * to a plain image when no placeholder was generated for the src.
 */
const BlurImage = ({ blurDataURL, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  // An image served from cache can finish decoding before React attaches
  // onLoad, which would strand it at opacity 0. The ref catches that case.
  const ref = useCallback((node) => {
    if (node?.complete) setLoaded(true);
  }, []);

  return (
    <>
      {blurDataURL && !loaded && (
        <span
          aria-hidden="true"
          style={{ backgroundImage: `url(${blurDataURL})` }}
          className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
        />
      )}
      <span
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          ref={ref}
          alt={alt}
          onLoad={() => setLoaded(true)}
          fill
          className={className}
          {...props}
        />
      </span>
    </>
  );
};

export default BlurImage;
