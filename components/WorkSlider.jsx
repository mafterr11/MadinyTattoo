// Data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo1.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo2.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo3.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo4.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo5.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo6.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo7.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo8.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/tattoo9.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo10.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo11.png",
        },
        {
          title: "title",
          path: "/gallery/tattoo12.png",
        },
      ],
    },
  ],
};

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";


// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
// import { BsArrowRight } from "react-icons/bs";

// Required Modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-navigation-next",
          prevEl: ".swiper-navigation-prev"
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='h-[400px] w-[280px] xs:h-[450px] xs:w-[300px] md:h-[800px] md:w-[600px] lg:w-[700px] lg:h-[920px] xl:h-[720px] xl:w-[530px]'
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-2 lg:gap-4 cursor-pointer relative'>
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
                          priority={true}
                          alt='my work images'
                          className="object-cover"
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
      <div className="flex items-center justify-between w-full absolute inset-y-0 text-4xl xs:text-4xl md:text-7xl cursor-pointer">
        <SlArrowLeft className="swiper-navigation-prev absolute -left-[1%] md:left-0 xl:-left-[16%] top-[40%] xs:top-[37%] md:top-[43%] xl:top-[41%] text-accent" />
        <SlArrowRight type="button" className="swiper-navigation-next absolute -right-[1%] md:right-0 xl:-right-[16%] top-[40%] xs:top-[37%] md:top-[43%] xl:top-[41%] text-accent"/>
      </div>
    </div>
  );
};

export default WorkSlider;
