// Framer
import { motion } from "framer-motion";

// Variants
const transitionVariants = {
  initial: {
    opacity: 0,
    transform: "translateX(100%)",
  },
  animate: {
    opacity: 1,
    transform: "translateX(0%)",
  },
  exit: {
    opacity: 0,
    transform: "translateX(100%)",
  },
};

// const transitionVariants = {
//   initial: {
//     x: "100%",
//     width: "100%",
//   },
//   animate: {
//     x: "0%",
//     width: "0%",
//   },
//   exit: {
//     x: ["0%", "100%"],
//     width: ["0%", "100%"],
//   },
// };

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.1, duration: 1.6, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-black/60'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 1.6, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black/80'
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.3, duration: 1.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
