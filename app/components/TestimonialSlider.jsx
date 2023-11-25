"use client"
// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

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

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[340px]'
    >
      {testimonialData.map((person, index) => {
        return <SwiperSlide key={index}>
          <div>
            {/* avatar, name position  */}
            <div>
              <div>
                {/* avatar */}
                <div>avatar image</div>
                {/* name */}
                <div>name</div>
                {/* position */}
                <div>position</div>
              </div>
            </div>
            {/* quote and message */}
            <div>quote and message</div>
          </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
