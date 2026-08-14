import PageHero from "../PageHero";
import PriceCard from "../PriceCard";
import ContactCta from "../home/ContactCta";
import { micropigmentarePricing } from "../../lib/pricing";

const ServiciiMicropigmentare = () => (
  <>
    <PageHero
      eyebrow="Tarife"
      title={<span className="text-accent">Micropigmentare</span>}
      lead={
        <>
          <span className="text-accent">Definește-ți</span> stilul cu precizie:{" "}
          <span className="text-accent">vezi</span> tarifele noastre pentru
          micropigmentare și{" "}
          <span className="text-accent">experimentează</span> transformarea
          delicată a trăsăturilor.
        </>
      }
      image="/backgrounds/micropigmentare.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
        { name: "Micropigmentare", path: "/servicii/micropigmentare" },
      ]}
    />

    <section className="pb-20 lg:pb-28">
      <div className="container">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {micropigmentarePricing.map((item, i) => (
            <PriceCard
              key={item.title}
              title={item.title}
              image={item.image}
              tiers={item.tiers}
              delay={i * 0.08}
              alt={`Micropigmentare ${item.title.toLowerCase()} la Madiny Tattoo București`}
            />
          ))}
        </ul>
      </div>
    </section>

    <ContactCta />
  </>
);

export default ServiciiMicropigmentare;
