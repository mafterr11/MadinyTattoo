import PageHero from "../PageHero";
import Testimonials from "../Testimonials";
import ContactCta from "../home/ContactCta";

const TestimonialePage = () => (
  <>
    <PageHero
      eyebrow="Recenzii"
      title={
        <>
          Părerea <span className="text-accent">clienților.</span>
        </>
      }
      image="/backgrounds/bgMada2.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Testimoniale", path: "/testimoniale" },
      ]}
    />

    <section className="pb-20 lg:pb-28">
      <div className="container">
        <Testimonials />
      </div>
    </section>

    <ContactCta />
  </>
);

export default TestimonialePage;
