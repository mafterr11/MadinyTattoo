// "use client";
// Component
import TestimonialSlider from "../TestimonialSlider";

const TestimonialePage = () => {
  return (
    <div className='h-full py-24 xs:py-0 text-center'>
      <div className='container mx-auto h-screen flex flex-col justify-center xl:gap-y-48'>
        {/* Title */}
        <h1 className='mb-8 xl:mb-0'>
          Părerea <span className='text-accent'>clienților.</span>
        </h1>
        {/* Slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default TestimonialePage;
