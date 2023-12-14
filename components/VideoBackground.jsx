"use client";
import React, { useRef, useEffect } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);

  const getVideoSource = () => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? '/intro-mobile.mp4' : '/intro.mp4';
    }
    return '/intro.mp4'; // Default for SSR
  };

  useEffect(() => {
    // Update the video source when the component mounts
    if (videoRef.current) {
      videoRef.current.src = getVideoSource();
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        poster="/bgMada2.jpg"
        playsInline // Helps with autoplay on mobile browsers
        className="min-w-full min-h-full absolute object-cover"
      >
        <source src={getVideoSource()} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
