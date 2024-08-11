// Counter
import DespreCounters from "./DespreCounters";

const DesprePage = () => {
  return (
    <div className='h-full xs:h-screen py-40 text-center xl:text-left'>
      <div className='container mx-auto h-full xl:h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex flex-col justify-center md:mt-20 xl:mt-0'>
          <h1>
            Poveștile <span className='text-accent'>Captivante</span> Dau
            Naștere Designurilor Unice.
          </h1>
          <p className='lg:max-w-4xl mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xs:px-0 xl:px-0 text-balance'>
            Încă de când am început activitatea ca artisti tatuatori
            independenți, am creat designuri inedite și memorabile, aducând la
            viață ideile clienților nostrii. Le mulțumim pentru susținere și
            încrederea acordată!
          </p>
          <div className='flex max-w-xl xl:max-w-2xl mx-auto xl:mx-0 mb-8'>
           <DespreCounters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesprePage;
