"use client"
import React, { useRef, useEffect, useState } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const [videoSource, setVideoSource] = useState('/intro.mp4'); // Default video source

  useEffect(() => {
    // Function to determine the video source based on window size
    const determineVideoSource = () => {
      return window.innerWidth < 768 ? '/intro-mobile.mp4' : '/intro.mp4';
    };

    // Set the video source when the component mounts
    setVideoSource(determineVideoSource());

    // Optional: Adjust video source on window resize
    const handleResize = () => {
      setVideoSource(determineVideoSource());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        poster="/backgrounds/bgMada2.webp"
        playsInline // Helps with autoplay on mobile browsers
        className="min-w-full min-h-full absolute object-cover"
        src={videoSource} // Use the state variable for the source
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
