export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,  //Din 80 in 30 aici
      opacity: 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,  //Din 80 in 30 aici
      transition: {
        type: 'tween',
        duration: 0.8, // Reduced duration for faster animation 1.6
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
        duration: 0.7, // Reduced duration for faster animation 1.4
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
