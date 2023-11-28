"use client";
// COMPONENTS
import ParticleContainer from "./components/ParticlesContainer";
import ProjectsBtn from "./components/ProjectsBtn";
import Avatar from "./components/Avatar";

// FRAMER MOTION
import { motion } from "framer-motion";

// VARIANTS
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className='h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r py-12'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-screen xl:h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 xs:text-4xl'
          >
            Transformăm Ideile <br /> In{" "}
            <span className='text-accent '>Realitate</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-2xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-lg text-p xs:text-xl'
          >
            În spațiul nostru creativ, transformăm fiecare concept într-o realitate vibrantă și autentică. Fiecare design captează unicitatea ta, conturând și detaliind povestea personală.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      {/* <div className='w-[1200px] h-full absolute right-0 bottom-0'> */}
        {/* bg image */}
        {/* <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div> */}
        {/* particles */}
        {/* <ParticleContainer />  */}
        {/* avatar */}
        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: "easeInOut" }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
          <Avatar />
        </motion.div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
