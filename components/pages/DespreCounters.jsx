"use client"
import CountUp from "react-countup";

const DespreCounters = () => {
  return (
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
  );
};

export default DespreCounters;
