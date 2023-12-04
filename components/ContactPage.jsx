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
    <section className='h-full lg:pt-44 py-32'>
      <motion.h2
        variants={fadeIn("right", 0, 2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 text-center lg:mb-12'
      >
        Să ne <span className='text-accent'>conectăm.</span>
      </motion.h2>
      <motion.div
        variants={fadeIn("left", 0, 4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='container px-5 py-12 lg:py-24 mx-auto flex h-[800px]'
      >
        <div className='lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-10 flex flex-col lg:flex-row lg:items-end lg:justify-start justify-end relative'>
          <iframe
            width='100%'
            height='100%'
            className='absolute inset-0'
            frameBorder='0'
            title='map'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11385.737698530624!2d26.1075064!3d44.4857646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203567ff26e41%3A0x3c22c06af60c1061!2sMadiny%20Tattoo!5e0!3m2!1sen!2sro!4v1701444628772!5m2!1sen!2sro'
            style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
          ></iframe>

          <div className='bg-white/90 lg:bg-white relative flex flex-wrap py-4 mb-4 rounded shadow-md items-center justify-center'>
            <div className='lg:w-1/2 px-8'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                ADDRESS
              </h2>
              <p className='mt-1 text-accent font-bold leading-relaxed'>
                Șos. Pipera 61, București 077190
              </p>
            </div>
            <div className='lg:w-1/2 px-4 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-sm'>
                EMAIL
              </h2>
              <a
                href='mailto: contact@madinytattoo.ro'
                className='text-accent hover:underline hover:underline-offset-8 hover:decoration-2 transition-all duration-300 leading-relaxed font-bold'
              >
                Madinytattoo@gmail.com
              </a>
              <h2 className='font-semibold text-gray-900 tracking-widest mt-4 text-sm'>
                PHONE
              </h2>
              <a
                href='tel:+40741620774'
                target='blank'
                className='text-accent hover:underline hover:underline-offset-8 hover:decoration-2 transition-all duration-300  leading-relaxed font-bold'
              >
                +04.741.620.774
              </a>
            </div>
          </div>
          <div className='lg:w-1/3 md:w-1/2 bg-white/90 lg:bg-white z-10 flex flex-col md:ml-auto w-full p-4 mt-8 md:mt-0 mr-4 lg:mb-[22rem] rounded shadow-md'>
            <h2 className='font-semibold text-gray-900 tracking-widest mb-1'>
              Program:
            </h2>

            <div className='relative mb-4'>
              <p
                for='name'
                className='leading-relaxed text-gray-900 font-semibold flex flex-col lg:flex-row gap-x-1'
              >
                <span className='text-accent'>Luni-Sambata:</span> 11:00 am -
                22:00 pm
              </p>
            </div>
            <div className='relative'>
              <p for='name' className='leading-relaxed text-gray-900 font-semibold'>
                <span className='text-accent'>Duminica:</span> Inchis
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <div className="lg:w-1/3 md:w-1/2 bg-white z-10 flex flex-col md:ml-auto w-full md:p-6 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div> */}
    </section>
  );
};

export default ContactPage; 