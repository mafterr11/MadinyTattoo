export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,  // De la 80 la 30 
      opacity: 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,  // De la 80 la 30
      transition: {
        type: 'tween',
        duration: 0.8, // Reduced duration for faster animation
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.7, // Reduced duration for faster animation
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
