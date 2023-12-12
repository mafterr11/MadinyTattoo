// Framer
import { motion } from "framer-motion";
// Variants
const transitionVariants = {
  initial: {
    opacity: 1,
    transform: "translateX(100%)", // Start off-screen to the right
  },
  animate: {
    opacity: 1,
    transform: "translateX(0%)", // Slide in to fill the screen
  },
  exit: {
    opacity: 1,
    transform: "translateX(-100%)", // Slide out to the left
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-black/60'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black/80'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
