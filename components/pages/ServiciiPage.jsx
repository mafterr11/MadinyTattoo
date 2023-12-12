"use client";
import ServiceSlider from "../ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className='md:h-screen py-36 flex items-center xl:pr-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[25vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1 xl:mt-8 flex gap-x-4 items-center justify-center'
            >
              <span className='text-accent'>Serviciile</span> Noastre.
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 xl:max-w-[600px] text-center xl:text-left mx-auto lg:mx-0'
            >
              Într-un spațiu creativ pentru artă și frumusețe, oferim servicii
              profesionale de tatuaje, micropigmentare și eliminare cu laser,
              completate de expertiză și atenție meticuloasă la detalii.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[55%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
