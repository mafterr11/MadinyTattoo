"use client";
// Components
import TestimonialSlider from "../components/TestimonialSlider";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className='h-full xs:h-screen py-24 xs:py-0 text-center'>
      <div className='container mx-auto h-screen flex flex-col justify-center'>
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0, 2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0'
        >
          What clients <span className='text-accent'>say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0, 4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
