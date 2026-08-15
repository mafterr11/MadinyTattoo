import Link from "next/link";

import PageHero from "../PageHero";
import PriceCard from "../PriceCard";
import ServiceIntro from "../ServiceIntro";
import ProcessSteps from "../ProcessSteps";
import SectionHeading from "../SectionHeading";
import AvansTatuaje from "../AvansTatuaje";
import ContactCta from "../home/ContactCta";
import { tattooPricing } from "../../lib/pricing";
import { getService } from "../../lib/servicesDetail";
import { serviceProcess } from "../../lib/serviceProcess";

const service = getService("tatuaje");

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

    <ServiceIntro intro={service.intro} highlights={service.highlights} />

    <section aria-label="Tarife tatuaje" className="pb-16 lg:pb-20">
      <div className="container">
        <SectionHeading
          eyebrow="Tarife"
          title="Prețuri pe stil și dimensiune"
          align="left"
          as="h2"
          className="mb-10"
        />

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

    <ProcessSteps {...serviceProcess.tatuaje} />

    <AvansTatuaje />

    <ContactCta />
  </>
);

export default ServiciiTatuaje;
