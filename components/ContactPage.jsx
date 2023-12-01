"use client";
// Components
import Circles from "./Circles";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Framer
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

const ContactPage = () => {
  return (
    <section class=" body-font relative h-full pt-44">
      <motion.h2
        variants={fadeIn("right", 0, 2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h2 text-center mb-12"
      >
        Să ne <span className="text-accent">conectăm.</span>
      </motion.h2>
      <motion.div
        variants={fadeIn("left", 0, 4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap h-[800px]"
      >
        <div class="lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11385.737698530624!2d26.1075064!3d44.4857646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203567ff26e41%3A0x3c22c06af60c1061!2sMadiny%20Tattoo!5e0!3m2!1sen!2sro!4v1701444628772!5m2!1sen!2sro"
            style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
          ></iframe>

          <div class="bg-white relative flex flex-wrap py-4 rounded shadow-md items-start justify-end">
            <div class="lg:w-1/2 px-4">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-sm">
                ADDRESS
              </h2>
              <p class="mt-1 text-accent font-bold leading-relaxed">
                Șos. Pipera 61, București 077190
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-sm">
                EMAIL
              </h2>
              <a
                href="mailto: contact@madinytattoo.ro"
                className="text-accent hover:underline hover:underline-offset-8 transition-all duration-300 leading-relaxed font-bold"
              >
                contact@madinytattoo.ro
              </a>
              <h2 class="font-semibold text-gray-900 tracking-widest mt-4 text-sm">
                PHONE
              </h2>
              <a
                href="tel:+40741620774"
                target="blank"
                className="text-accent hover:underline hover:underline-offset-8 transition-all duration-300  leading-relaxed font-bold"
              >
                +04.741.620.774
              </a>
            </div>
          </div>
          {/* form */}
          <div class="lg:w-1/3 md:w-1/2 bg-white z-10 flex flex-col md:ml-auto w-full md:p-6 mt-8 md:mt-0 mr-4">
            <h2 class="font-semibold text-gray-900 tracking-widest mb-1">
              Program:
            </h2>

            <div class="relative mb-4">
              <p
                for="name"
                class="leading-relaxed text-gray-900 font-semibold "
              >
                Luni-Sambata: 11:00 am - 22:00 pm
              </p>
            </div>
            <div class="relative">
              <p for="name" class="leading-relaxed text-gray-900 font-semibold">
                Duminica: Inchis
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <div class="lg:w-1/3 md:w-1/2 bg-white z-10 flex flex-col md:ml-auto w-full md:p-6 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div> */}
    </section>
  );
};

export default ContactPage;

//  <div className=' h-max'>
//       <div className='container mx-auto  py-32 text-center xl:text-left flex items-center justify-center h-full'>
//         <div className=' flex flex-col w-full h-full xl:pt-[5rem] '>
//           <motion.h2
//             variants={fadeIn("right", 0, 2)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='h2 text-center mb-12'
//           >
//             Să ne <span className='text-accent'>conectăm.</span>
//           </motion.h2>
//           <motion.div
//             variants={fadeIn("left", 0, 4)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='container flex justify-center items-center flex-wrap-reverse sm:flex-nowrap lg:p-8 lg:pt-[7rem] gap-x-8'
//           >
//             <div className='w-full lg:w-full mt-12 lg:mt-0 rounted-lg map-responsive'>
//               <iframe
//                 src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1196.8146252130132!2d26.10955270913075!3d44.483991660275706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1701113350695!5m2!1sro!2sro'
//                 width='100%'
//                 height='100%'
//                 allowFullScreen=''
//                 title='google map'
//                 referrerPolicy='no-referrer-when-downgrade'
//               ></iframe>
//             </div>
//             <div className='text-center flex flex-col w-3/4 text-xl gap-6'>
//               <h1 className='text-3xl underline underline-offset-8 mb-6 sm:mb-0'>
//               Detalii de contact <span className="text-accent">:</span>
//               </h1>
//               <p className='flex xl:flex-row flex-col items-center justify-center gap-x-4'>
//                 <strong className='font-bold text-accent text-2xl'>
//                   Email:
//                 </strong>{" "}
//                 <a
//                   href='mailto: contact@madinytattoo.ro'
//                   className='hover:text-accent hover:underline hover:underline-offset-8 transition-all duration-300'
//                 >
//                   contact@madinytattoo.ro
//                 </a>
//               </p>
//               <p className='flex xl:flex-row flex-col items-center justify-center gap-x-4'>
//                 <strong className='font-bold text-accent text-2xl'>Tel:</strong>{" "}
//                 <a
//                   href='tel:+40741620774'
//                   target='blank'
//                   className='hover:text-accent hover:underline hover:underline-offset-8 transition-all duration-300'
//                 >
//                   +04.741.620.774
//                 </a>
//               </p>
//               <p className='flex xl:flex-row flex-col items-center justify-center gap-x-4'>
//                 <strong className='font-bold text-accent text-2xl'>
//                   Adresa:
//                 </strong>{" "}
//                 Șos. Pipera 61, București 077190
//               </p>
//               <div>
//                 <p className='flex xl:flex-row flex-col items-center justify-center gap-x-4'>
//                   <strong className='font-bold text-accent text-2xl'>
//                     Program:
//                   </strong>{" "}
//                   11:00 am - 18:00 pm{" "}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
