"use client";
// Component
import ServiceSlider from "../ServiceSlider";

const Services = () => {
  return (
    <div className='md:h-screen py-36 flex items-center xl:pr-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center flex xl:w-[25vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h1 className='h1 xl:mt-8 flex gap-x-4 items-center justify-center'>
              <span className='text-accent'>Serviciile</span> Noastre.
            </h1>
            <p className='mb-4 xl:max-w-[600px] text-center xl:text-left mx-auto lg:mx-0 text-balance'>
              Într-un spațiu creativ pentru artă și frumusețe, oferim servicii
              profesionale de tatuaje, micropigmentare și eliminare cu laser,
              completate de expertiză și atenție meticuloasă la detalii.
            </p>
          </div>
          {/* Slider */}
          <div className='w-full xl:max-w-[55%]'>
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
