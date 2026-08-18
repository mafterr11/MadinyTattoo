import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ServicesGrid from "../ServicesGrid";

const ServicesSection = () => (
  <section id="servicii" className="section">
    <div className="container">
      <SectionHeading
        eyebrow="Ce facem"
        title={
          <>
            <span className="text-accent">Serviciile</span> Noastre.
          </>
        }
        lead="Într-un spațiu creativ pentru artă și frumusețe, oferim servicii profesionale de tatuaje, micropigmentare și eliminare cu laser, completate de expertiză și atenție meticuloasă la detalii."
        leadClassName="hidden md:block"
      />

      <div className="mt-14">
        <ServicesGrid />
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex justify-center">
          <Link href="/servicii" className="btn btn-ghost">
            Vezi toate detaliile
            <FiArrowUpRight className="text-base" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ServicesSection;
