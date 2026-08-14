import PageHero from "../PageHero";
import Gallery from "../Gallery";
import ContactCta from "../home/ContactCta";
import { galleryImages } from "../../lib/gallery";

const ProiectePage = () => (
  <>
    <PageHero
      eyebrow="Portofoliu"
      title={
        <>
          <span className="text-accent">Lucrările</span> mele.
        </>
      }
      lead="Prin arta mea, transform viziunile în realitate, aducând emoție și semnificație fiecărui tatuaj. Explorează portofoliul meu și lasă-te captivat de poveștile vizuale pe care le-am imprimat pe piele."
      image="/backgrounds/bgMada.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Proiecte", path: "/proiecte" },
      ]}
    />

    <section className="pb-20 lg:pb-28">
      <div className="container">
        <Gallery images={galleryImages} />
      </div>
    </section>

    <ContactCta />
  </>
);

export default ProiectePage;
