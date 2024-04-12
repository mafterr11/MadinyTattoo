"use client";
// Image
import Image from "next/image";
import laserRemoval from "../../public/gallery/laserService/laserRemoval.webp";
// Component
import FAQSection from "../FAQLaser";

const ServiciiMicropigmentare = () => {
  return (
    <div className='flex justify-center flex-col items-center h-full md:h-full'>
      <div className='flex flex-col justify-center items-center md:mt-40 mt-32'>
        <h1 className='h1'>
          <span className='text-accent'>Laser Removal</span>
        </h1>
        <p className='max-w-sm md:max-w-xl xl:max-w-3xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-xl text-center text-p xs:text-xl font-bold'>
          <span className='text-accent'>Redescoperă</span> libertatea pielii
          tale: <span className='text-accent'>consultă</span> tarifele noastre
          competitive pentru eliminarea tatuajelor cu laser și{" "}
          <span className='text-accent'>transformă-ți</span> aspectul cu
          încredere.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-center max-w-7xl  w-[90%] m-4'>
        <div className='relative flex flex-col w-[90%] md:w-[80%] lg:w-[35%] h-96 m-2'>
          <Image
            src={laserRemoval}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Background Pretui Laser Removal'
          />
          <div className='absolute inset-0 bg-black/50 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[5%]'>
                <h1 className='underline decoration-[3px] underline-offset-4 mb-4'>
                  Ședința
                </h1>
              </div>
              <div className='m-2 text-lg'>
                <div className='my-4'>
                  <p>
                    <span className='text-accent font-bold'>Sprâncene:</span>{" "}
                    300 RON
                  </p>
                </div>
                <div className='my-4'>
                  <p className="text-accent font-bold">
                      Laser în funcție de dimensiune:
                  </p>
                  <div className="grid grid-cols-2 gap-x-2">
                    <p>1-5 cm²: 150 RON</p> 
                    <p>51-65 cm²: 450 RON</p>
                    <p>5-10 cm²: 200 RON</p> 
                    <p>66-80 cm²: 500 RON</p>
                    <p>11-20 cm²: 250 RON</p> 
                    <p>81-95 cm²: 550 RON</p>
                    <p>21-30 cm²: 300 RON</p> 
                    <p>96-110 cm²: 600 RON</p>
                    <p>31-40 cm²: 350 RON</p>
                    <p>111-125 cm²: 650 RON</p>
                    <p>41-50 cm²: 400 RON</p>
                    <p>126-140 cm²: 700 RON</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ */}
      </div>
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default ServiciiMicropigmentare;
