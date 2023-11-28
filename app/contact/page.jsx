"use client";
// Components
import Circles from "../components/Circles";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Framer
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className=' h-max'>
      <div className='container mx-auto  py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text n form */}
        <div className=' flex flex-col w-full h-full xl:pt-[5rem] '>
          {/* text */}
          <motion.h2
            variants={fadeIn("right", 0, 2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.div
            variants={fadeIn("left", 0, 4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='container flex justify-center items-center flex-wrap-reverse sm:flex-nowrap lg:p-8 lg:pt-[7rem] '>
            {/* map */}
            <div className='w-full lg:w-full mt-12 lg:mt-0 rounted-lg map-responsive'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1196.8146252130132!2d26.10955270913075!3d44.483991660275706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1701113350695!5m2!1sro!2sro'
                width='100%'
                height='100%'
                allowFullScreen=''
                title="google map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className='text-center flex flex-col w-3/4 text-xl gap-6 md:text-2xl'>
              <h1 className='text-3xl underline underline-offset-8'>
                Contact Us
              </h1>
              <p>
                <strong className='font-bold text-accent text-2xl'>
                  Email:
                </strong>{" "}
                contact@madinytattoo.ro
              </p>
              <p>
                <strong className='font-bold text-accent text-2xl'>
                  Tel:
                </strong>{" "}
                +04.741.620.774
              </p>
              <p>
                <strong className='font-bold text-accent text-2xl'>
                  Adresa:
                </strong>{" "}
                Cloud 9, Pipera
              </p>
              <div>
                <p>
                  <strong className='font-bold text-accent text-2xl'>
                    Program:
                  </strong>{" "}
                  10:00 am - 20:00 pm{" "}
                </p>
              </div>
            </div>
          </motion.div>
          {/* <motion.form
            variants={fadeIn("up", 0, 4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' />
              <input type='text' placeholder='email' className='input' />
            </div>
            <input type='text' placeholder='subject' className='input' />
            <textarea placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
