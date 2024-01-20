"use client";
// Counter
import CountUp from "react-countup";

const DesprePage = () => {
  return (
    <div className='h-full xs:h-screen py-40 text-center xl:text-left'>
      <div className='container mx-auto h-full xl:h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex flex-col justify-center md:mt-20 xl:mt-0'>
          <h1 className='h1'>
            Poveștile <span className='text-accent'>Captivante</span> Dau
            Naștere Designurilor Unice.
          </h1>
          <p className='lg:max-w-4xl mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xs:px-0 xl:px-0'>
            Încă de când am început activitatea ca artisti tatuatori
            independenți, am creat designuri inedite și memorabile, aducând la
            viață ideile clienților nostrii. Le mulțumim pentru susținere și
            încrederea acordată!
          </p>
          <div className='flex max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 gap-x-6 md:gap-x-20 xl:gap-x-6'>
              {/* Clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:-right-3 xl:after:right-10'>
                <div className='text-2xl lg:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={878} duration={5} /> +
                </div>
                <div className='text-xs lg:text-base xl:text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px] lg:max-w-[150px] xl:max-w-[100px] '>
                  Clienți satisfăcuți
                </div>
              </div>
              {/* Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:-right-3 xl:after:right-10'>
                <div className='text-2xl lg:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={652} duration={5} /> +
                </div>
                <div className='text-xs lg:text-base xl:text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px] lg:max-w-[150px] xl:max-w-[100px] '>
                  Clienți recurenți
                </div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/20 after:absolute after:top-0 after:-right-3 xl:after:right-10'>
                <div className='text-2xl lg:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2725} duration={5} /> +
                </div>
                <div className='text-xs lg:text-base xl:text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px] lg:max-w-[150px] xl:max-w-[100px] '>
                  Proiecte finalizate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesprePage;
