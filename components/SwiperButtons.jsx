"use client"
import { useSwiper } from "swiper/react";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='swiper-nav-btns'>
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};

export default SwiperButtons;
