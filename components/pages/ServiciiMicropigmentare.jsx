import Link from "next/link";

import PageHero from "../PageHero";
import PriceCard from "../PriceCard";
import ServiceIntro from "../ServiceIntro";
import ProcessSteps from "../ProcessSteps";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ContactCta from "../home/ContactCta";
import { micropigmentarePricing } from "../../lib/pricing";
import { getService } from "../../lib/servicesDetail";
import { serviceProcess } from "../../lib/serviceProcess";

const service = getService("micropigmentare");

const ServiciiMicropigmentare = () => (
  <>
    <PageHero
      eyebrow="Serviciu"
      title={
        <>
          <span className="text-accent">Micropigmentare</span> în București
        </>
      }
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

    <ServiceIntro intro={service.intro} highlights={service.highlights} />

    <section aria-label="Tarife micropigmentare" className="pb-20 lg:pb-28">
      <div className="container">
        <SectionHeading
          eyebrow="Tarife"
          title="Prețuri micropigmentare"
          align="left"
          as="h2"
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        <Reveal delay={0.1}>
          <p className="text-muted mt-8 max-w-2xl text-sm leading-relaxed">
            {service.priceNote}
          </p>
        </Reveal>
      </div>
    </section>

    <ProcessSteps {...serviceProcess.micropigmentare} />

    <section aria-label="Îngrijire după procedură" className="section">
      <div className="container">
        <Reveal>
          <div className="card flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl">Îngrijirea după procedură</h2>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                Instrucțiunile pentru zilele de după le primești la finalul
                ședinței, adaptate zonei lucrate. Dacă vrei să vezi din timp cum
                arată o rutină de îngrijire la noi, ghidul pentru tatuaje îți dă
                o idee bună despre atenția pe care o cerem.
              </p>
            </div>
            <Link href="/aftercare" className="btn btn-ghost btn-block shrink-0">
              Vezi ghidul de îngrijire
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    <ContactCta />
  </>
);

export default ServiciiMicropigmentare;
