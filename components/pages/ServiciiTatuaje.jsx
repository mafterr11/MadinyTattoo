"use client";
// Image
import Link from "next/link";
import Image from "next/image";
import albNegruTattoo from "../../public/gallery/tattooService/albNegruTattoo.png";
import colorTattoo from "../../public/gallery/tattooService/colorTattoo.jpg";
import conturTattoo from "../../public/gallery/tattooService/conturTattoo.jpg";
import embroderyTattoo from "../../public/gallery/tattooService/embroderyTattoo.jpg";
// Component
import TattooCare from "../TattooCare";

const ServiciiTatuaje = () => {
  return (
    <div className='flex justify-center flex-col items-center h-full'>
      <div className='flex flex-col justify-center items-center md:mt-40 mt-32'>
        <h1 className='h1'>
          <span className='text-accent'>Tatuaje</span>
        </h1>
        <p className='max-w-sm md:max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-xl text-center text-p xs:text-xl font-bold'>
          <span className='text-accent'>Detalii</span> suplimentare și tarife
          precise disponibile direct de la tatuator.{" "}
          <Link className='text-accent underline' href={"/contact"}>
            Contactează-ne
          </Link>{" "}
          pentru informații complete!
        </p>
      </div>
      <div className='flex flex-col xl:flex-row items-center max-w-7xl w-[90%] m-4'>
        {/* First */}
        <div className='relative flex flex-col w-[90%] lg:w-[70%] xl:w-[40%] h-96 xl:h-96 md:h-[30rem] m-2'>
          <Image
            src={albNegruTattoo}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/60 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1 className='underline decoration-[3px] underline-offset-4'>
                  Alb/Negru
                </h1>
              </div>
              <div className='m-2'>
                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Mic(1-5)cm:</span>{" "}
                    400 RON
                  </p>
                </div>
                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Mediu(6-9)cm:</span>{" "}
                    500-800 RON
                  </p>
                </div>
                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>
                      Mare(10-15)cm:
                    </span>{" "}
                    900-1400 RON
                  </p>
                </div>
                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Full day:</span>{" "}
                    2000 RON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second*/}
        <div className='relative flex flex-col w-[90%] lg:w-[70%] xl:w-[40%] h-96 xl:h-96 md:h-[30rem] m-2'>
          <Image
            src={colorTattoo}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/60 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1 className='underline decoration-[3px] underline-offset-4'>
                  Color
                </h1>
              </div>
              <div className='m-2'>
                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Mic(1-4)cm:</span>{" "}
                    500 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Mediu(5-9)cm:</span>{" "}
                    600-1000 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>
                      Mare(10-15)cm:
                    </span>{" "}
                    1100-1600 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Full day:</span>{" "}
                    2300 RON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className='relative flex flex-col w-[90%] lg:w-[70%] xl:w-[40%] h-96 xl:h-96 md:h-[30rem] m-2'>
          <Image
            src={conturTattoo}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/60 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1 className='underline decoration-[3px] underline-offset-4'>
                  Contur
                </h1>
              </div>
              <div className='m-2'>
                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Mic(1-4)cm:</span>{" "}
                    300 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Mediu(4-9)cm:</span>{" "}
                    400-600 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>
                      Mare(10-15)cm:
                    </span>{" "}
                    700-900 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Full day:</span>{" "}
                    1800 RON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className='relative flex flex-col w-[90%] lg:w-[70%] xl:w-[40%] h-96 xl:h-96 md:h-[30rem] m-2 '>
          <Image
            src={embroderyTattoo}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/60 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1 className='underline decoration-[3px] underline-offset-4'>
                  Brodat
                </h1>
              </div>
              <div className='m-2'>
                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>Mic(5-8)cm:</span>{" "}
                    700-1150 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>
                      Mediu(9-12)cm:
                    </span>{" "}
                    1300-1700 RON
                  </p>
                </div>

                <div className='my-6'>
                  <p className="xs:text-lg md:text-xl xl:text-base">
                    <span className='text-accent font-bold'>
                      Mare(13-15)cm:
                    </span>{" "}
                    1800-2000 RON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TattooCare />
    </div>
  );
};

export default ServiciiTatuaje;
