"use client";
// Testimonial Data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Ana Maria",
    position: "Tattoo Customer",
    message:
      "Sincer, nu o să mai merg în altă parte VREODATĂ să mă tatuez. Sunt atât de superbe și a fost atât de faină atmosfera la tine, încât aș simți că te-aș trăda dacă aș merge în altă parte. Abia aștept să revin!",
  },
  {
    image: "/t-avt-2.png",
    name: "Ioana",
    position: "Tattoo Customer",
    message:
      "Tatuajul este absolut divin. Îți mulțumesc din suflet, ești cea mai profesionistă și pricepută de pe piață. Nu aș fi avut încredere în altcineva pentru primul tatuaj!",
  },
  {
    image: "/t-avt-3.png",
    name: "Andreea",
    position: "Tattoo Customer",
    message:
      "Nu pot să nu admir cât de incredibil este tatuajul meu! Mulțumesc din inimă, ești pur și simplu remarcabilă în ceea ce faci!",
  },
];

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import { FaQuoteLeft } from "react-icons/fa";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";


// Required Modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: ".swiper-navigation-next",
          prevEl: ".swiper-navigation-prev"
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='h-[500px]'
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    <div className='mb-2 mx-auto'>
                      <Image
                        src={person.image}
                        width={100}
                        height={100}
                        alt='testimonial image'
                      />
                    </div>
                    <div className='text-lg'>{person.name}</div>
                    <div className='text-[12px] uppercase text-p tracking-widest'>
                      {person.position}
                    </div>
                  </div>
                </div>
                <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                  </div>
                  <div className='xl:text-lg text-center md:text-left'>
                    {person.message}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
        <div className="flex text-5xl cursor-pointer">
          <SlArrowLeft className="swiper-navigation-prev absolute -left-[6%] top-[61%] md:top-[34%] text-accent" />
          <SlArrowRight type="button" className="swiper-navigation-next absolute -right-[6%] top-[61%] md:top-[34%] text-accent" />
        </div>
    </div>
  );
};

export default TestimonialSlider;
