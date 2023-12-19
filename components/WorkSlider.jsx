// Data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo1.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo2.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo3.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo4.webp",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo5.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo6.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo7.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo8.webp",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo9.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo10.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo11.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo12.webp",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo13.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo14.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo15.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo16.webp",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo17.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo18.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo19.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo20.webp",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo21.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo22.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo23.webp",
        },
        {
          title: "title",
          path: "/gallery/tattoo24.webp",
        },
      ],
    },
  ],
};

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WorkSlider = () => {
  const [lightbox, setLightbox] = useState({ open: false, image: null });

  const handleImageClick = (image) => {
    setLightbox({ open: true, image });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, image: null });
  };

  return (
    <div className='relative'>
      {/* Swiper Component */}
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-navigation-next",
          prevEl: ".swiper-navigation-prev",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='h-[400px] w-[280px] xs:h-[450px] xs:w-[300px] md:h-[800px] md:w-[600px] lg:w-[700px] lg:h-[920px] xl:h-[720px] xl:w-[530px]'
      >
        {workSlides.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 lg:gap-4 cursor-pointer relative'>
              {slide.images.map((image, idx) => (
                <div
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  key={idx}
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                    className='object-cover'
                    loading="lazy"
                  />
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#d4b39a4b] to-[#d4b39a34] opacity-0 group-hover:opacity-80 transition-all duration-300'></div>
                  {/* title
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            LIVE PROJECT
                          </div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>
                            <BsArrowRight />
                          </div>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Lightbox Component */}
      {lightbox.open && (
        <div
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
          onClick={closeLightbox}
        >
          <div className='max-w-2xl max-h-full p-4'>
            <Image
              src={lightbox.image.path}
              alt={lightbox.image.title}
              width={800} // Adjust as needed
              height={600} // Adjust as needed
              className='object-contain'
            />
          </div>
        </div>
      )}
      {/* Navigation Arrows */}
      <div className='flex items-center justify-between w-full absolute inset-y-0 text-4xl xs:text-4xl md:text-7xl cursor-pointer'>
        <SlArrowLeft className='swiper-navigation-prev absolute -left-[1%] md:left-0 xl:-left-[16%] top-[40%] xs:top-[37%] md:top-[43%] xl:top-[41%] text-accent' />
        <SlArrowRight className='swiper-navigation-next absolute -right-[1%] md:right-0 xl:-right-[16%] top-[40%] xs:top-[37%] md:top-[43%] xl:top-[41%] text-accent' />
      </div>
    </div>
  );
};

export default WorkSlider;