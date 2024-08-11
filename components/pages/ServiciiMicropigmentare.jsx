// "use client";
// Image
import Image from "next/image";
import buze from "../../public/gallery/micropigmentareService/micropigmentareBuze.webp";
import sprancene from "../../public/gallery/micropigmentareService/micropigmentareSprancene.webp";
import retus from "../../public/gallery/micropigmentareService/micropigmentareRetus.webp";
import BackButton from "../BackButton";

const ServiciiMicropigmentare = () => {
  return (
    <div className='flex justify-center flex-col items-center h-full lg:h-screen'>
      <div className='relative flex flex-col justify-center items-center md:mt-40 mt-32'>
      <div className="absolute bottom-0 xl:-right-56">
        <BackButton />
        </div>
        <h1>
          <span className='text-accent'>Micropigmentare</span>
        </h1>
        <p className='max-w-sm md:max-w-2xl xl:max-w-3xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-xl text-center text-p xs:text-xl font-bold'>
          <span className='text-accent'>Definește-ți</span> stilul cu precizie:{" "}
          <span className='text-accent'>vezi</span> tarifele noastre pentru
          micropigmentare și <span className='text-accent'>experimentează</span>{" "}
          transformarea delicată a trăsăturilor.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row items-center max-w-7xl  w-[90%] m-4'>
        {/* First */}
        <div className='relative flex flex-col w-[90%] lg:w-[40%] h-96 m-2'>
          <Image
            src={buze}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Background Preturi Micropigmetare Buze'
          />
          <div className='absolute inset-0 bg-black/50 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[35%]'>
                <h1 className='underline decoration-[3px] underline-offset-4'>
                  Buze
                </h1>
              </div>
              <div className='m-2 text-xl'>
                <div className='my-4'>
                  <p>
                    <span className='text-accent font-bold'>Preț:</span> 800 RON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second*/}
        <div className='relative flex flex-col w-[90%] lg:w-[40%] h-96 m-2'>
          <Image
            src={sprancene}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Background Preturi Micropigmetare Sprancene'
          />
          <div className='absolute inset-0 bg-black/50 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[35%]'>
                <h1 className='underline decoration-[3px] underline-offset-4'>
                  Sprâncene
                </h1>
              </div>
              <div className='m-2 text-xl'>
                <div className='my-4'>
                  <p>
                    <span className='text-accent font-bold'>Preț:</span> 800 RON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className='relative flex flex-col w-[90%] lg:w-[40%] h-96 m-2'>
          <Image
            src={retus}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Background Preturi Micropigmetare Retus'
          />
          <div className='absolute inset-0 bg-black/50 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[35%]'>
                <h1 className='underline decoration-[3px] underline-offset-4'>
                  Retuș
                </h1>
              </div>
              <div className='m-2 text-xl'>
                <div className='my-4'>
                  <p>
                    <span className='text-accent font-bold'>Preț:</span> 200 RON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciiMicropigmentare;
