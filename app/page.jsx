"use client";
// COMPONENTS
import ProjectsBtn from "./components/ProjectsBtn";
import ParticleContainer from "./components/ParticlesContainer";
import Avatar from "./components/Avatar";

// FRAMER MOTION
import { motion } from "framer-motion";

// VARIANTS
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className='bg-primary/70 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r'>
        <div className='text-center flex flex-col justify-center pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Transformăm Ideile <br /> In{" "}
            <span className='text-accent '>Realitate</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-p xl:text-lg'
          >
            În spațiul nostru creativ, transformăm fiecare concept într-o realitate vibrantă și autentică. Fiecare design captează unicitatea ta, conturând și detaliind povestea personală.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative mb-16'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
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
        {/* DELETE */}
        {/* <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-overlay opacity-20 translate-z-0'></div> */}
        {/* DELETE */}
        
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
