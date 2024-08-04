"use client";
// Components
import ProjectsBtn from "../ProjectsBtn";
import VideoBackground from "../VideoBackground";

const HomePage = () => {
  return (
    <div className='h-screen'>
      <VideoBackground />
      <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-[2]'></div>
      {/* Text */}
      <div className='w-full h-screen py-12 xs:py-0 relative z-[3]'>
        <div className='container mx-auto flex flex-col justify-center text-center xl:text-left xl:pt-36 h-screen xl:h-full '>
          {/* Title */}
          <h1>
            Transformăm Ideile <br /> In{" "}
            <span className='text-accent '>Realitate</span>
          </h1>
          {/* Subtitle */}
          <p className='max-w-sm md:max-w-2xl mx-auto xl:mx-0 mb-10 xl:mb-8 text-balance'>
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
      <div className="absolute bottom-2 right-4 flex items-center justify-center max-md:flex-col z-50">
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
            <img
              style={{ width: "250px" }}
              src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
              alt="Solutionarea Alternativa a Litigiilor"
            />
          </a>
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="nofollow"
          >
            <img
              style={{ width: "250px" }}
              src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
              alt="Solutionarea Online a Litigiilor"
            />
          </a>
        </div>
    </div>
  );
};

export default HomePage;
