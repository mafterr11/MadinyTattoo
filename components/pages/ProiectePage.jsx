"use client";
import WorkSlider from "../WorkSlider";
// Framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ProiectePage = () => {
  return (
    <div className='flex items-center'>
      <div className='container mx-auto h-full py-36 xl:py-60'>
        <div className='flex xl:h-full flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              <span className='text-accent'>Lucrările</span> mele.
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[500px] mx-auto lg:mx-0 text-p text-lg'
            >
              Prin arta mea, transform viziunile în realitate, aducând emoție și
              semnificație fiecărui tatuaj. Explorează portofoliul meu și
              lasă-te captivat de poveștile vizuale pe care le-am imprimat pe
              piele.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[45%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProiectePage;
