const FAQSection = () => {
  return (
    <section className='bg-transparent'>
      <div className='py-8 px-4 mx-auto max-w-[1500px] sm:py-16 lg:px-6'>
        <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-white'>
          Întrebări frecvente
        </h2>
        <div className='grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-3 '>
          {/* Prima col */}
          <div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Ce presupune exact eliminarea tatuajelor cu laser?
              </h3>
              <p className='text-white'>
                Procedura utilizează impulsuri de lumină concentrată pentru a
                fragmenta particulele de cerneală din piele.
              </p>
            </div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Care sunt culorile de tatuaj cel mai ușor de eliminat cu
                laserul?
              </h3>
              <p className='text-white'>
                Tatuajele cu cerneală neagră sau închisă sunt cele mai receptive
                la tratamentul cu laser.
              </p>
            </div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Există un număr fix de ședințe pentru eliminarea unui tatuaj?
              </h3>
              <p className='text-white'>
                Numărul de ședințe variază în funcție de dimensiunea, culoarea
                și vechimea tatuajului.
              </p>
            </div>
          </div>
          {/* A doua col */}
          <div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Cât timp trebuie să aștept între ședințele de eliminare cu
                laser?
              </h3>
              <p className='text-white'>
                De obicei, ședințele sunt programate la intervale de câteva
                săptămâni pentru o vindecare eficientă a pielii.
              </p>
            </div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Există vreo restricție privind activitățile după procedură?
              </h3>
              <p className='text-white'>
                Se recomandă evitarea activităților care ar putea irita zona
                tratată pentru câteva zile.
              </p>
            </div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Care este cel mai important lucru în îngrijirea post-tratament?
              </h3>
              <p className='text-white'>
                Protejarea zonei tratate de expunerea excesivă la soare și
                respectarea instrucțiunilor medicului.
              </p>
            </div>
          </div>
          {/* A treia col */}
          <div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Care sunt efectele secundare obișnuite ale procedurii?
              </h3>
              <p className='text-white'>
                Roșeață, umflare și senzație de arsură temporară sunt comune,
                dar trec în câteva zile.
              </p>
            </div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Există riscuri pe termen lung asociate cu eliminarea tatuajelor
                cu laser?
              </h3>
              <p className='text-white'>
                Riscurile pe termen lung sunt rare, dar pot include modificări
                temporare ale pigmentației pielii sau cicatrici temporare.
              </p>
            </div>
            <div className='mb-10'>
              <h3 className='flex items-center mb-4 text-lg font-bold text-accent'>
                <svg
                  className='flex-shrink-0 mr-2 w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Există anumite zone ale corpului mai dificil de tratat pentru
                eliminarea tatuajelor cu laser?
              </h3>
              <p className='text-white'>
                Unele zone, precum zonele cu piele subțire sau cu circulație
                redusă, pot fi mai dificile de tratat și pot necesita mai multe
                sesiuni pentru rezultate optime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
