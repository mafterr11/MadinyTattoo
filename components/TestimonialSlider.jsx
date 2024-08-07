"use client";
// Testimonial Data
const testimonialData = [
  {
    image: "/customer.webp",
    name: "Tudor",
    position: "Client Tatuaj",
    message:
      "Sincer, nu o să mai merg în altă parte VREODATĂ să mă tatuez. Sunt atât de superbe și a fost atât de faină atmosfera la tine, încât aș simți că te-aș trăda dacă aș merge în altă parte. Abia aștept să revin!",
  },
  {
    image: "/customer2.webp",
    name: "Ioana",
    position: "Client Tatuaj",
    message:
      "Tatuajul este absolut divin. Îți mulțumesc din suflet, ești cea mai profesionistă și pricepută de pe piață. Nu aș fi avut încredere în altcineva pentru primul tatuaj!",
  },
  {
    image: "/customer3.webp",
    name: "Andreea",
    position: "Client Tatuaj",
    message:
      "Nu pot să nu admir cât de incredibil este tatuajul meu! Mulțumesc din inimă, ești pur și simplu remarcabilă în ceea ce faci!",
  },
];
// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Icons
import { FaQuoteLeft } from "react-icons/fa";
// Required Modules
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[500px] lg:h-[300px]'
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
                      className=" rounded-[50%]"
                      alt='Imagine Testimoniale Clienti'
                    />
                  </div>
                  <div className='text-lg'>{person.name}</div>
                  <div className='text-[14px] uppercase text-accent font-semibold tracking-widest'>
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
  );
};

export default TestimonialSlider;
