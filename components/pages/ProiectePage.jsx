// "use client";
import WorkSlider from "../WorkSlider";
import NewGallery from "./NewGallery";

const ProiectePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-x-8 gap-y-14 xl:gap-y-32 py-36 xl:h-full xl:py-60">
      {/* Text */}
      <div className="mb-4 flex flex-col text-center xl:mb-0 xl:w-[50vw]">
        <h1 className="xl:mt-8">
          <span className="text-accent">Lucrările</span> mele.
        </h1>
        <p className="mb-4 lg:mx-0">
          Prin arta mea, transform viziunile în realitate, aducând emoție și
          semnificație fiecărui tatuaj. Explorează portofoliul meu și lasă-te
          captivat de poveștile vizuale pe care le-am imprimat pe piele.
        </p>
      </div>
      {/* Slider */}
       
        {/* <WorkSlider /> */}
        <NewGallery />
      
    </div>
  );
};

export default ProiectePage;
