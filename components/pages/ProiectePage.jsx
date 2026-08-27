import PageHero from "../PageHero";
import Gallery from "../Gallery";
import ContactCta from "../home/ContactCta";
import { artistCounts, galleryImages } from "../../lib/gallery";

const ProiectePage = () => (
  <>
    <PageHero
      eyebrow="Portofoliu"
      title={
        <>
          <span className="text-accent">Lucrările</span> noastre.
        </>
      }
      lead="Transformăm viziunile în realitate, cu emoție și semnificație în fiecare tatuaj. Explorează portofoliul întreg sau filtrează după artistă, ca să vezi stilul fiecăreia separat."
      // Off phones, where five lines of it sat between the title and the
      // filter and pushed the first row of work off the screen. The crawler
      // still reads it — `hidden` is a class, not a condition on the render.
      leadClassName="hidden md:block"
      image="/backgrounds/bgMada.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Proiecte", path: "/proiecte" },
      ]}
    />

    <section className="pb-20 lg:pb-28">
      <div className="container">
        <Gallery images={galleryImages} counts={artistCounts} />
      </div>
    </section>

    <ContactCta />
  </>
);

export default ProiectePage;
