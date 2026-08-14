import SectionHeading from "../SectionHeading";
import ServicesGrid from "../ServicesGrid";

const ServicesSection = () => (
  <section id="servicii" className="section">
    <div className="container">
      <SectionHeading
        eyebrow="Ce facem"
        title={
          <>
            <span className="text-accent">Serviciile</span> Noastre.
          </>
        }
        lead="Într-un spațiu creativ pentru artă și frumusețe, oferim servicii profesionale de tatuaje, micropigmentare și eliminare cu laser, completate de expertiză și atenție meticuloasă la detalii."
      />

      <div className="mt-14">
        <ServicesGrid />
      </div>
    </div>
  </section>
);

export default ServicesSection;
