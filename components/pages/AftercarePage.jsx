import PageHero from "../PageHero";
import TattooCare from "../TattooCare";
import ContactCta from "../home/ContactCta";

const AftercarePage = () => (
  <>
    <PageHero
      eyebrow="Îngrijire"
      title={
        <>
          <span className="text-accent">Aftercare-ul</span> tatuajelor
        </>
      }
      image="/backgrounds/despre.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Aftercare", path: "/aftercare" },
      ]}
    />

    <section className="pb-20 lg:pb-28">
      <div className="container max-w-4xl">
        <TattooCare />
      </div>
    </section>

    <ContactCta />
  </>
);

export default AftercarePage;
