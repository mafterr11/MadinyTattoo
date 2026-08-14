import Image from "next/image";

import PageHero from "../PageHero";
import Reveal from "../Reveal";
import FAQSection from "../FAQLaser";
import ContactCta from "../home/ContactCta";
import { laserSizePricing } from "../../lib/pricing";

const ServiciiLaser = () => (
  <>
    <PageHero
      eyebrow="Tarife"
      title={<span className="text-accent">Laser Removal</span>}
      lead={
        <>
          <span className="text-accent">Redescoperă</span> libertatea pielii
          tale: <span className="text-accent">consultă</span> tarifele noastre
          competitive pentru eliminarea tatuajelor cu laser și{" "}
          <span className="text-accent">transformă-ți</span> aspectul cu
          încredere.
        </>
      }
      image="/backgrounds/laser.webp"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
        { name: "Laser", path: "/servicii/laser" },
      ]}
    />

    <section className="pb-20 lg:pb-24">
      <div className="container grid gap-6 lg:grid-cols-5">
        {/* Visual + headline price */}
        <Reveal className="lg:col-span-2">
          <div className="card relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden">
            <Image
              src="/gallery/laserService/laserRemoval.webp"
              alt="Ședință de eliminare a tatuajelor cu laser la Madiny Tattoo București"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="from-ink via-ink/80 absolute inset-0 bg-gradient-to-t to-transparent"
            />
            <div className="relative p-7">
              <h2 className="text-accent text-2xl">Ședința</h2>
              <div className="hairline mt-3" />
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <span className="text-muted text-sm">Sprâncene:</span>
                <span className="text-fg font-medium tabular-nums">300 RON</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Size-based pricing table */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="card h-full p-7 sm:p-8">
            <h2 className="text-accent text-xl">
              Laser în funcție de dimensiune
            </h2>
            <div className="hairline mt-3" />

            <dl className="mt-6 grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {laserSizePricing.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-3 border-b border-white/6 py-2.5"
                >
                  <dt className="text-muted text-sm">{row.label}</dt>
                  <dd className="text-fg text-sm font-medium tabular-nums">
                    {row.price}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>

    <FAQSection />

    <ContactCta />
  </>
);

export default ServiciiLaser;
