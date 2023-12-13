"use client"
import React, { useState, useEffect, useRef } from 'react';

const VideoBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Example breakpoint for mobile
    };

    // Check on mount (initial load)
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const videoSrc = isMobile ? '/mobile-intro.mp4' : '/intro.mp4'; // Different video for mobile

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="min-w-full min-h-full absolute object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
