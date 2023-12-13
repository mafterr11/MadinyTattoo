"use client";
// Components
import ProjectsBtn from "../ProjectsBtn";
import VideoBackground from "../VideoBackground";

const HomePage = () => {
  return (
    <div className='h-screen relative'>
      <VideoBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-1" />
      {/* Text */}
      <div className='w-full h-screen py-12 xs:py-0 relative z-2'>
        <div className='container mx-auto flex flex-col justify-center text-center xl:text-left xl:pt-40 h-screen xl:h-full '>
          {/* Title */}
          <h1 className='h1'>
            Transformăm Ideile <br /> In{" "}
            <span className='text-accent '>Realitate</span>
          </h1>
          {/* Subtitle */}
          <p className='max-w-sm md:max-w-2xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            În spațiul nostru creativ, transformăm fiecare concept într-o
            realitate vibrantă și autentică. Fiecare design captează unicitatea
            ta, conturând și detaliind povestea personală.
          </p>
          {/* Btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <div className='hidden xl:flex'>
            <ProjectsBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
