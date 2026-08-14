import PageHero from "../PageHero";
import ServicesGrid from "../ServicesGrid";
import ContactCta from "../home/ContactCta";

const ServiciiPage = () => (
  <>
    <PageHero
      eyebrow="Ce facem"
      title={
        <>
          <span className="text-accent">Serviciile</span> Noastre.
        </>
      }
      lead="Într-un spațiu creativ pentru artă și frumusețe, oferim servicii profesionale de tatuaje, micropigmentare și eliminare cu laser, completate de expertiză și atenție meticuloasă la detalii."
      image="/backgrounds/servicii.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
      ]}
    />

    <section className="pb-20 lg:pb-28">
      <div className="container">
        <ServicesGrid />
      </div>
    </section>

    <ContactCta />
  </>
);

export default ServiciiPage;
