// "use client";
// Component
import ServiceSlider from "../ServiceSlider";

const Services = () => {
  return (
    <div className="flex items-center py-36 md:h-screen xl:pr-24">
      <div className="xl:container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* Text */}
          <div className="mb-4 flex flex-col items-center justify-center text-center xl:mb-0">
            <h1 className="flex items-center justify-center gap-x-4 xl:mt-8 mb-16">
              <span className="text-accent">Serviciile</span> Noastre.
            </h1>
            <p className="mx-auto mb-4 text-balance xl:max-w-5xl">
              Într-un spațiu creativ pentru artă și frumusețe, oferim servicii
              profesionale de tatuaje, micropigmentare și eliminare cu laser,
              completate de expertiză și atenție meticuloasă la detalii.
            </p>
          </div>
          {/* Slider */}
          <div>
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
