"use client";
import Link from "next/link";
// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Icons
import { RxCrop, RxArrowTopRight } from "react-icons/rx";
import { GiSinusoidalBeam, GiBleedingEye } from "react-icons/gi";
import { PiNeedle } from "react-icons/pi";
// Required Modules
import { Navigation, Pagination } from "swiper/modules";

// Data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Tatuaje",
    path: "/servicii/tatuaje",
    description:
      "Intră în lumea noastră cu designuri expresive și personalizate pentru a-ți îndeplini visul de a avea un tatuaj memorabil.",
  },
  {
    icon: <GiBleedingEye />,
    title: "Micropigmentare",
    path: "/servicii/micropigmentare",
    description:
      "Descoperă magia micropigmentării pentru trăsături perfecte și naturale, conturând frumusețea ta într-un mod subtil și rafinat.",
  },
  {
    icon: <GiSinusoidalBeam />,
    title: "Laser",
    path: "/servicii/laser",
    description:
      "Transformă trecutul într-o poveste uitată. Cu laserul nostru avansat, eliminăm tatuajele fără regrete, oferindu-ți un nou început.",
  },
  {
    icon: <PiNeedle />,
    title: "Piercing",
    path: "/servicii/piercing",
    description:
      "Adaugă un plus de stil și expresivitate cu un piercing realizat profesional. Evidențiază-ți unicitatea în siguranță și confort.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        navigation={{
          nextEl: ".swiper-navigation-next",
          prevEl: ".swiper-navigation-prev"
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='h-[300px] w-[280px] xs:w-[310px] md:w-[650px] md:h-[370px] lg:w-[900px] xl:w-[1200px] xl:h-[370px]'
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={item.path}>
                <div className='bg-[#0f0f11] bg-opacity-[0.45] h-max rounded-lg px-6 py-8 flex sm:flex-col  sm:gap-x-0 group cursor-pointer hover:bg-[#000000]/70 transition-all duration-300'>
                  {/* Icon */}
                  <div>
                    <div className='flex items-center justify-start gap-x-4 xs:gap-x-6'>
                      <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                      {/* Title & Descr*/}
                      <div className='mb-2 text-base xs:text-lg'>{item.title}</div>
                    </div>
                    <div className='mb-8'>
                      <p className='max-w-[350px] text-sm xs:text-base md:text-lg lg:text-base leading-normal max-md:text-center text-balance'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className='text-3xl'>
                    <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex lg:hidden text-5xl cursor-pointer">
        <SlArrowLeft className="swiper-navigation-prev absolute left-1 xs:left-[2%] md:left-0 top-[34%] text-accent" />
        <SlArrowRight type="button" className="swiper-navigation-next absolute right-1 xs:right-[2%] md:right-0 top-[34%] text-accent" />
      </div>
    </div>
  );
};

export default ServiceSlider;
