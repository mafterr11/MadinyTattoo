"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_SRC = "/intro.mp4";
const MOBILE_SRC = "/intro-mobile.mp4";
const POSTER = "/backgrounds/bgMada2.webp";

/**
 * The poster paints immediately and the video only starts downloading after
 * mount, so the hero is never blocked on a multi-megabyte file. The source is
 * chosen once per breakpoint crossing — the previous version re-assigned `src`
 * on every resize event, which restarted the download each time.
 */
const VideoBackground = () => {
  const videoRef = useRef(null);
  const [src, setSrc] = useState(null);
  // Storing which source is ready — rather than a bare boolean — means the
  // fade resets by itself when the source swaps, with no extra effect.
  const [readySrc, setReadySrc] = useState(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const pick = () => setSrc(query.matches ? MOBILE_SRC : DESKTOP_SRC);

    pick();
    query.addEventListener("change", pick);
    return () => query.removeEventListener("change", pick);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={POSTER}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {src && (
        <video
          ref={videoRef}
          key={src}
          src={src}
          poster={POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReadySrc(src)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            readySrc === src ? "opacity-100" : "opacity-0"
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
