import Link from "next/link";

import PageHero from "../PageHero";
import PriceCard from "../PriceCard";
import AvansTatuaje from "../AvansTatuaje";
import ContactCta from "../home/ContactCta";
import { tattooPricing } from "../../lib/pricing";

const ServiciiTatuaje = () => (
  <>
    <PageHero
      eyebrow="Tarife"
      title={<span className="text-accent">Tatuaje</span>}
      lead={
        <>
          <span className="text-accent">Detalii</span> suplimentare și tarife
          precise disponibile direct de la tatuator.{" "}
          <Link href="/contact" className="text-accent link-underline">
            Contactează-ne
          </Link>{" "}
          pentru informații complete!
        </>
      }
      image="/backgrounds/tatuaje.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
        { name: "Tatuaje", path: "/servicii/tatuaje" },
      ]}
    />

    <section className="pb-16 lg:pb-20">
      <div className="container">
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tattooPricing.map((item, i) => (
            <PriceCard
              key={item.title}
              title={item.title}
              image={item.image}
              tiers={item.tiers}
              delay={i * 0.08}
              alt={`Tatuaj ${item.title.toLowerCase()} realizat la Madiny Tattoo București`}
            />
          ))}
        </ul>
      </div>
    </section>

    <AvansTatuaje />

    <ContactCta />
  </>
);

export default ServiciiTatuaje;
