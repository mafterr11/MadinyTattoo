// Components
import ProjectsBtn from "../ProjectsBtn";

// Framer

const HomePage = () => {
  return (
    <div className='h-screen'>
      {/* text */}
      <div className='w-full h-screen py-12 xs:py-0'>
        <div className='container mx-auto flex flex-col justify-center text-center xl:text-left xl:pt-40 h-screen xl:h-full '>
          {/* title */}
          <h1

            className='h1'
          >
            Transformăm Ideile <br /> In{" "}
            <span className='text-accent '>Realitate</span>
          </h1>
          {/* subtitle */}
          <p

            className='max-w-sm md:max-w-2xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            În spațiul nostru creativ, transformăm fiecare concept într-o
            realitate vibrantă și autentică. Fiecare design captează unicitatea
            ta, conturând și detaliind povestea personală.
          </p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <div

            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
