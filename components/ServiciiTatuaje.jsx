import Image from "next/image";
import albNegruTattoo from "../public/gallery/tattoo9.png";
import colorTattoo from "../public/gallery/tattoo8.jpg";
import conturTattoo from "../public/gallery/tattoo14.jpg";
import embroderyTattoo from "../public/gallery/tattoo13.jpg";

const ServiciiTatuaje = () => {
  return (
    <div className='flex justify-center h-full md:h-screen'>
      <div className='flex flex-col lg:flex-row items-center max-w-7xl  w-[90%] m-4'>
        <div className='relative flex flex-col w-[90%] lg:w-[40%] h-96 m-2'>
          <Image
            src={albNegruTattoo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/70 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
              <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1>Alb/Negru</h1>
              </div>
              <div className='m-2 text-md'>
                <div className="my-4">
                <p><span className="text-accent font-bold">Mic(1-5)cm:</span> 400 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mediu(6-9)cm:</span> 500-800 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mare(10-15)cm:</span> 900-1400 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Toata ziua:</span> 1800 RON</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second*/}
        <div className='relative flex flex-col w-[90%] lg:w-[40%] h-96 m-2'>
          <Image
            src={colorTattoo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/70 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
            <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1>Color</h1>
              </div>
              <div className='m-2 text-md'>
                <div className="my-4">
                <p><span className="text-accent font-bold">Mic(1-4)cm:</span> 500 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mediu(5-9)cm:</span> 600-1000 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mare(10-15)cm:</span> 1100-1600 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Toata ziua:</span> 2000 RON</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className='relative flex flex-col w-[90%] lg:w-[40%] h-96 m-2'>
          <Image
            src={conturTattoo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/70 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
            <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1>Contur</h1>
              </div>
              <div className='m-2 text-md'>
                <div className="my-4">
                <p><span className="text-accent font-bold">Mic(1-4)cm:</span> 300 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mediu(4-9)cm:</span> 400-600 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mare(10-15)cm:</span> 700-900 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Toata ziua:</span> 1800 RON</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className='relative flex flex-col w-[90%] lg:w-[40%] h-96 m-2 '>
          <Image
            src={embroderyTattoo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            priority={true}
            style={{ objectFit: "cover" }}
            className='brightness-110 hover:brightness-90 rounded-lg'
            alt='Description of your image'
          />
          <div className='absolute inset-0 bg-black/70 rounded-lg'>
            <div className='flex flex-col items-center justify-center p-2 text-gray-300'>
            <div className='font-bold text-2xl m-2 mt-[20%]'>
                <h1>Brodat</h1>
              </div>
              <div className='m-2 text-md'>
                <div className="my-4">
                <p><span className="text-accent font-bold">Mic(5-8)cm:</span> 700-1150 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mediu(9-12)cm:</span> 1300-1700 RON</p>
                </div>

                <div className="my-4">
                <p><span className="text-accent font-bold">Mare(13-15)cm:</span> 1800-2000 RON</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciiTatuaje;
