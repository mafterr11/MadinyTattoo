"use client";

import { useEffect, useState } from "react";

// Each source ships with a poster cut from its own first frame, so the fade-in
// has nothing to jump to.
const SOURCES = {
  desktop: { src: "/intro.mp4", poster: "/hero-poster.webp" },
  mobile: { src: "/intro-mobile.mp4", poster: "/hero-poster-mobile.webp" },
};

/**
 * The poster paints immediately and the video only starts downloading after
 * mount, so the hero is never blocked on the clip. The source is chosen once
 * per breakpoint crossing — the previous version re-assigned `src` on every
 * resize event, which restarted the download each time.
 */
const VideoBackground = () => {
  const [variant, setVariant] = useState(null);
  // Tracking which source is ready — rather than a bare boolean — means the
  // fade resets by itself when the source swaps, with no extra effect.
  const [readySrc, setReadySrc] = useState(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const pick = () => setVariant(query.matches ? "mobile" : "desktop");

    pick();
    query.addEventListener("change", pick);
    return () => query.removeEventListener("change", pick);
  }, []);

  const active = variant ? SOURCES[variant] : null;

  return (
    <div className="bg-ink absolute inset-0 -z-10 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SOURCES.desktop.poster}
        srcSet={`${SOURCES.mobile.poster} 900w, ${SOURCES.desktop.poster} 1600w`}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {active && (
        <video
          key={active.src}
          src={active.src}
          poster={active.poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReadySrc(active.src)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            readySrc === active.src ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Legibility scrim: darkest at the bottom where the copy sits. */}
      <div
        aria-hidden="true"
        className="from-ink/95 via-ink/55 to-ink/75 absolute inset-0 bg-gradient-to-b"
      />
      <div
        aria-hidden="true"
        className="from-ink absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent"
      />
    </div>
  );
};

export default VideoBackground;
