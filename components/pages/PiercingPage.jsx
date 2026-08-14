import Link from "next/link";
import { FiCheck } from "react-icons/fi";

import PageHero from "../PageHero";
import Reveal from "../Reveal";
import ContactCta from "../home/ContactCta";

const reasons = [
  {
    title: "Echipament steril",
    body: "Folosim doar instrumente și bijuterii sterile de înaltă calitate.",
  },
  {
    title: "Profesioniști cu experiență",
    body: "Personalul nostru este instruit să efectueze piercinguri corect, rapid și fără dureri inutile.",
  },
  {
    title: "Igienă impecabilă",
    body: "Respectăm cele mai înalte standarde de igienă pentru siguranța ta.",
  },
  {
    title: "Consiliere personalizată",
    body: "Te ajutăm să alegi tipul de piercing care ți se potrivește cel mai bine.",
  },
];

const included = [
  "Realizarea piercingului.",
  "O bijuterie sterilă de calitate superioară.",
  "Sfaturi pentru îngrijire corectă post-procedură.",
];

const titaniumBenefits = [
  {
    title: "Hipoalergenic",
    body: "Titanul pur este complet lipsit de nichel, reducând riscul de iritații sau complicații.",
  },
  {
    title: "Vindecare mai rapidă",
    body: "Biocompatibil și acceptat ușor de organism, titanul ajută la o vindecare mai confortabilă.",
  },
  {
    title: "Rezistență la coroziune",
    body: "Nu ruginește și nu corodează, asigurând igienă optimă.",
  },
  {
    title: "Ușor și confortabil",
    body: "Este extrem de ușor, ideal pentru zonele sensibile.",
  },
];

const FeatureList = ({ items }) => (
  <ul className="grid gap-4 sm:grid-cols-2">
    {items.map((item, i) => (
      <Reveal as="li" key={item.title} delay={i * 0.06} className="h-full">
        <div className="card card-hover h-full p-6">
          <h3 className="text-accent text-base">{item.title}</h3>
          <p className="text-muted mt-2 text-sm leading-relaxed">{item.body}</p>
        </div>
      </Reveal>
    ))}
  </ul>
);

const PiercingPage = () => (
  <>
    <PageHero
      eyebrow="Serviciu"
      title={<span className="text-accent">Piercing</span>}
      lead={
        <>
          Realizate cu <span className="text-accent">profesionalism</span> și{" "}
          <span className="text-accent">atenție</span> la detalii, pentru a vă
          asigura o experiență sigură și confortabilă.
        </>
      }
      image="/backgrounds/piercing.jpg"
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
        { name: "Piercing", path: "/servicii/piercing" },
      ]}
    />

    <section className="pb-16">
      <div className="container max-w-5xl space-y-16">
        {/* Why us */}
        <div>
          <Reveal>
            <h2>De ce să alegi salonul nostru?</h2>
            <div className="hairline mt-4" />
          </Reveal>
          <div className="mt-8">
            <FeatureList items={reasons} />
          </div>
        </div>

        {/* Price */}
        <Reveal>
          <div className="card border-accent/25 bg-accent/6 p-7 sm:p-9">
            <p className="text-lead">
              <strong className="font-display text-accent text-2xl">
                Costul unui piercing
              </strong>
            </p>
            <p className="text-muted mt-2">
              este de{" "}
              <span className="text-accent text-xl font-semibold">200 lei</span>
              , iar prețul include:
            </p>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheck
                    className="text-accent mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-muted text-sm sm:text-[0.95rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Titanium */}
        <div>
          <Reveal>
            <h2>De ce folosim doar titan pur?</h2>
            <div className="hairline mt-4" />
            <p className="text-muted mt-6">
              Pentru primele luni după efectuarea unui piercing, folosim{" "}
              <strong className="text-fg font-semibold">
                exclusiv bijuterii din titan pur
              </strong>
              , deoarece este o necesitate, nu doar o recomandare.
            </p>
          </Reveal>
          <div className="mt-8">
            <FeatureList items={titaniumBenefits} />
          </div>
        </div>

        {/* Duration */}
        <div>
          <Reveal>
            <h2>Cât timp trebuie purtat titanul?</h2>
            <div className="hairline mt-4" />
            <p className="text-muted mt-6">
              Recomandăm purtarea bijuteriei din titan pentru cel puțin{" "}
              <strong className="text-fg font-semibold">2-3 luni</strong>, până
              la finalizarea procesului de vindecare.
            </p>
            <p className="text-muted mt-3">
              După această perioadă, poți opta pentru alte materiale sigure, iar
              echipa noastră te poate ghida în alegerea potrivită.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex justify-center">
            <Link href="/contact" className="btn btn-primary">
              Programează-te acum!
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    <ContactCta />
  </>
);

export default PiercingPage;
