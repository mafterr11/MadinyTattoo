import PageHero from "../PageHero";
import Safety from "../Safety";
import ServicesExplorer from "../servicii/ServicesExplorer";
import ContactCta from "../home/ContactCta";
import { blurProps } from "../../lib/blur";
import { serviceDetails } from "../../lib/servicesDetail";

/**
 * blurProps stays on the server side of the client boundary: resolving the
 * placeholders here ships four strings to the browser instead of the whole
 * blur map.
 */
const services = serviceDetails.map((service) => ({
  ...service,
  imageProps: blurProps(service.image),
}));

const ServiciiPage = () => (
  <>
    <PageHero
      eyebrow="Ce facem"
      title={
        <>
          <span className="text-accent">Serviciile</span> Noastre.
        </>
      }
      lead="Într-un spațiu creativ pentru artă și frumusețe, oferim servicii profesionale de tatuaje, micropigmentare și eliminare cu laser, completate de expertiză și atenție meticuloasă la detalii. Alege un serviciu și vezi tot ce presupune — descriere, ce include și tarife."
      leadClassName="hidden md:block"
      image="/backgrounds/servicii.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
      ]}
    />

    <section aria-label="Detalii servicii" className="pb-20 lg:pb-28">
      <div className="container">
        <ServicesExplorer services={services} />
      </div>
    </section>

    <Safety />

    <ContactCta />
  </>
);

export default ServiciiPage;
