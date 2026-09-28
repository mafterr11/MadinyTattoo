import Link from "next/link";

import PageHero from "../PageHero";
import PriceCard from "../PriceCard";
import ServiceIntro from "../ServiceIntro";
import ProcessSteps from "../ProcessSteps";
import SectionHeading from "../SectionHeading";
import AvansTatuaje from "../AvansTatuaje";
import ServiceBookingCta from "../booking/ServiceBookingCta";
import ContactCta from "../home/ContactCta";
import { tattooPricing } from "../../lib/pricing";
import { getService } from "../../lib/servicesDetail";
import { serviceProcess } from "../../lib/serviceProcess";
import { business } from "../../lib/site";

const service = getService("tatuaje");

const ServiciiTatuaje = () => (
  <>
    <PageHero
      eyebrow="Tarife"
      title={
        <>
          <span className="text-accent">Tatuaje</span> în București, Pipera
        </>
      }
      lead={
        <>
          Tatuaje personalizate, de la contur fin și alb-negru la lucrări color.
          Vezi mai jos stilurile și prețurile orientative; pentru o estimare
          potrivită ideii tale,{" "}
          <Link href="/contact" className="text-accent link-underline">
            contactează-ne
          </Link>
          .
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

    <section className="pb-16 lg:pb-20" aria-labelledby="studio-pipera">
      <div className="container">
        <div className="card max-w-4xl p-7 sm:p-9">
          <h2 id="studio-pipera" className="text-2xl">
            Studio de tatuaje în zona Pipera
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            Ne găsești la {business.addressFull}. Discutăm desenul, dimensiunea
            și amplasarea înainte de ședință, apoi pregătim o schiță pentru
            tine. Poți vedea exemple reale în{" "}
            <Link href="/proiecte" className="text-accent link-underline">
              portofoliul nostru
            </Link>{" "}
            și poți verifica traseul și programul pe{" "}
            <Link href="/contact" className="text-accent link-underline">
              pagina de contact
            </Link>
            .
          </p>
        </div>
      </div>
    </section>

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

    {/* Deposit policy sits directly under the prices: it is the condition
        attached to the figures above, so it belongs next to them. */}
    <AvansTatuaje />

    <ProcessSteps {...serviceProcess.tatuaje} />

    <ServiceBookingCta service="tatuaje" />

    <ContactCta />
  </>
);

export default ServiciiTatuaje;
