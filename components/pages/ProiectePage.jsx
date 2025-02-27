// "use client";
import WorkSlider from "../WorkSlider";

const ProiectePage = () => {
  return (
    <div className='flex items-center'>
      <div className='xl:container mx-auto h-full py-36 xl:py-60'>
        <div className='flex xl:h-full flex-col xl:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0'>
            <h1 className='xl:mt-8'>
              <span className='text-accent'>Lucrările</span> mele.
            </h1>
            <p className='mb-4 xl:max-w-[500px] mx-auto lg:mx-0'>
              Prin arta mea, transform viziunile în realitate, aducând emoție și
              semnificație fiecărui tatuaj. Explorează portofoliul meu și
              lasă-te captivat de poveștile vizuale pe care le-am imprimat pe
              piele.
            </p>
          </div>
          {/* Slider */}
          <div className='w-full xl:max-w-[45%]'>
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProiectePage;
