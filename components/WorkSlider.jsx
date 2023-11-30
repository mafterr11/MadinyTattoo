// Data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/tattoo1.png",
        },
        {
          title: "title",
          path: "/tattoo2.png",
        },
        {
          title: "title",
          path: "/tattoo3.png",
        },
        {
          title: "title",
          path: "/tattoo4.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/tattoo5.png",
        },
        {
          title: "title",
          path: "/tattoo6.png",
        },
        {
          title: "title",
          path: "/tattoo7.png",
        },
        {
          title: "title",
          path: "/tattoo8.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/tattoo9.png",
        },
        {
          title: "title",
          path: "/tattoo10.png",
        },
        {
          title: "title",
          path: "/tattoo11.png",
        },
        {
          title: "title",
          path: "/tattoo12.png",
        },
      ],
    },
  ],
};

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Required Modules
import { Pagination } from "swiper";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[500px] lg:h-[700px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt='my work images'
                      />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#d4b39a4b] to-[#d4b39a34] opacity-0 group-hover:opacity-80 transition-all duration-300'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title  */}
                          {/* <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            LIVE PROJECT
                          </div> */}
                          {/* icon*/}
                          {/* <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>
                            <BsArrowRight />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
