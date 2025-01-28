// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <div className='lg:pt-44 py-32'>
      <div className='lg:mb-24 mb-0 text-center'>
        <h1 className='mb-2'>
          Să ne <span className='text-accent'>conectăm.</span>
        </h1>
        <h2 className="px-5 uppercase">
          <span className="text-accent">Programări</span>  ▸  Asistență  ▸  <span className="text-accent">Tatuaje unice</span>  ▸  Întrebări  ▸
          <span className="text-accent"> Estimatimare de Preț</span>
        </h2>
      </div>
      <div className='xl:container px-5 py-12 md:py-24 mx-auto flex flex-col-reverse h-[900px] gap-y-10'>
        <div className='w-full h-full bg-gray-300 rounded-lg overflow-hidden p-10 flex flex-col md:flex-row md:items-end md:justify-start justify-end relative iframe-container'>
          <iframe
            width='100%'
            height='100%'
            className='responsive-iframe'
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11385.737698530624!2d26.1075064!3d44.4857646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203567ff26e41%3A0x3c22c06af60c1061!2sMadiny%20Tattoo!5e0!3m2!1sen!2sro!4v1701444628772!5m2!1sen!2sro'
            style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
          ></iframe>
          {/* Detalii */}
          <div className='bg-white/90  relative hidden md:flex flex-wrap py-4 mb-4 rounded-sm shadow-md items-center justify-start'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                ADDRESS
              </h2>
              <a
                href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
                target='_blank'
                className='mt-1 text-accent font-bold hover hover:underline-offset-4 hover:decoration-2'
              >
                Șos. Pipera 61, București 077190
              </a>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                EMAIL
              </h2>
              <a
                href='mailto: madinytattoo@gmail.com'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center'
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4 text-black" />Madinytattoo@gmail.com
              </a>
              <h2 className='font-semibold text-gray-900 tracking-widest mt-4 text-sm'>
                PHONE
              </h2>
              <a
                href='tel:+40741620774'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center'
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4 text-black" />+04.741.620.774
              </a>
            </div>
          </div>
          {/* Program */}
          <div className='xl:w-1/3 md:w-1/2 bg-white/90 z-7 hidden md:flex flex-col md:ml-auto w-full p-4 mt-8 md:mt-0 mr-4 md:mb-[30rem] lg:mb-[31rem] rounded-sm shadow-md'>
            <h2 className='font-semibold text-gray-900 tracking-widest mb-1'>
              Program:
            </h2>

            <div className='relative mb-4'>
              <p className='leading-relaxed text-gray-900 font-semibold flex flex-col lg:flex-row gap-x-1 text-base'>
                <span className='text-accent'>Luni-Sambata:</span> 11:00 am -
                19:00 pm
              </p>
            </div>
            <div className='relative'>
              <p className='leading-relaxed text-gray-900 font-semibold text-base'>
                <span className='text-accent'>Duminica:</span> Inchis
              </p>
            </div>
          </div>
        </div>
        {/* Mobile Panel */}
        <div className="flex md:hidden flex-col gap-y-6">
          {/* Program */}
          <div className='lg:w-1/3 md:w-1/2 bg-white/90 z-7 flex flex-col md:ml-auto w-full p-4 mt-8 md:mt-0 mr-4 lg:mb-[24rem] rounded-sm shadow-md'>
            <h2 className='font-semibold text-gray-900 tracking-widest mb-1'>
              Program:
            </h2>
            <div className='relative mb-4'>
              <p className='leading-relaxed text-gray-900 font-semibold flex flex-col lg:flex-row gap-x-1'>
                <span className='text-accent'>Luni-Sambata:</span> 11:00 am -
                19:00 pm
              </p>
            </div>
            <div className='relative'>
              <p className='leading-relaxed text-gray-900 font-semibold'>
                <span className='text-accent'>Duminica:</span> Inchis
              </p>
            </div>
          </div>
          {/* Detalii */}
          <div className='bg-white/90 relative flex flex-wrap py-4 mb-4 rounded-sm shadow-md items-center justify-start'>
            <div className='lg:w-1/2 px-6 mb-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                EMAIL
              </h2>
              <a
                href='mailto: madinytattoo@gmail.com'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold items-center flex'
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4 text-black" />Madinytattoo@gmail.com
              </a>
              <h2 className='font-semibold text-gray-900 tracking-widest mt-4 text-sm'>
                PHONE
              </h2>
              <a
                href='tel:+40741620774'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-bold flex items-center'
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4 text-black" />+04.741.620.774
              </a>
            </div>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                ADDRESS
              </h2>
              <a
                href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
                target='_blank'
                className='mt-1 text-accent font-bold hover hover:underline-offset-4 hover:decoration-2'
              >
                Șos. Pipera 61, București 077190
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
