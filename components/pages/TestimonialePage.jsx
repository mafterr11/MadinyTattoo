"use client";
import TestimonialSlider from "../TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const TestimonialePage = () => {
  return (
    <div className='h-full py-24 xs:py-0 text-center'>
      <div className='container mx-auto h-screen flex flex-col justify-center lg:gap-y-48'>
        {/* title */}
        <motion.h1
          variants={fadeIn("up", 0, 2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1 mb-8 xl:mb-0'
        >
          Părerea <span className='text-accent'>clienților.</span>
        </motion.h1>
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

export default TestimonialePage;
