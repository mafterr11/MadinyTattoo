import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiClock, FiMapPin } from "react-icons/fi";
import JsonLd from "../JsonLd";
import FAQSection from "../FAQSection";
import MapEmbed from "../MapEmbed";
import SectionHeading from "../SectionHeading";
import AviatieiCarousel from "../AviatieiCarousel";
import { BookingTrigger } from "../booking/BookingProvider";
import { zoneStyles } from "../../lib/zoneStyles";
import { getZoneTrail, zoneSchemas } from "../../lib/zoneSeo";
import { getZone } from "../../lib/zones";
import { zoneOrigins } from "../../lib/zoneOrigins";
import { blurProps } from "../../lib/blur";
import { artistsByKey } from "../../lib/artists";
import { business, whatsappUrl } from "../../lib/site";
// Maps asks for the visitor's starting point; no fixed travel time is implied.
const directions = (mode, origin) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.street + ", București")}&travelmode=${mode}${origin ? `&origin=${encodeURIComponent(origin)}` : ""}`;

export default function ZonePage({ zone }) {
  const trail = getZoneTrail(zone);
  return (
    <>
      <JsonLd schema={zoneSchemas(zone)} />
      <section className="pt-24 pb-10 lg:pt-28 lg:pb-12">
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            className="text-muted flex flex-wrap gap-2 text-xs"
          >
            {trail.map((crumb, index) => (
              <span key={crumb.path} className="inline-flex gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {index === trail.length - 1 ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <Link className="hover:text-accent" href={crumb.path}>
                    {crumb.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>
          <div className="mt-6 grid items-center gap-7 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <span className="eyebrow">{zone.name} → Pipera</span>
              <h1 className="mt-4 text-[clamp(2.25rem,4.2vw,3.75rem)]">
                Din <span className="text-accent">{zone.name},</span>
                <br />
                la Madiny Tattoo.
              </h1>
              <p className="lead mx-auto mt-5 max-w-lg lg:mx-0">{zone.intro}</p>
              <p className="text-muted mx-auto mt-3 max-w-lg text-sm leading-relaxed sm:text-base lg:mx-0">
                Vii cu o idee, noi te ajutăm să-i dai formă. Descoperă lucrările
                Mădălinei și Alexandrei, apoi povestim despre tatuajul tău.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
                <BookingTrigger
                  service="tatuaje"
                  className="btn btn-primary w-full min-w-0 !px-2 text-center !whitespace-normal sm:w-auto sm:!px-7 sm:!whitespace-nowrap"
                >
                  Discută ideea ta
                </BookingTrigger>
                <a
                  href="#acces"
                  className="btn btn-ghost w-full min-w-0 !px-2 text-center !whitespace-normal sm:w-auto sm:!px-7 sm:!whitespace-nowrap"
                >
                  Cum ajungi <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 lg:aspect-[6/5]">
              <Image
                src="/backgrounds/piercing.webp"
                alt="Interiorul salonului Madiny Tattoo din Pipera, cu firma luminoasă și spațiul de lucru"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                {...blurProps("/backgrounds/piercing.webp")}
                className="object-cover object-[center_40%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pt-12 pb-5">
                <p className="text-xs tracking-[0.18em] text-white/80 uppercase">
                  Spațiul nostru din Pipera
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Un loc pentru ideea ta.
                </p>
              </div>
            </div>
          </div>
          <div className="text-muted mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/8 pt-5 text-sm">
            <span className="inline-flex items-center gap-3">
              <FiMapPin className="text-accent" aria-hidden="true" />
              {business.street}, București
            </span>
            <span className="inline-flex items-center gap-3">
              <FiClock className="text-accent" aria-hidden="true" />
              {business.hours[0].label} · {business.hours[0].value}
            </span>
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/8 py-10 lg:py-14"
        aria-labelledby="stiluri-tatuaje"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Lucrări realizate la Madiny"
            title={
              <span id="stiluri-tatuaje">Ce stil de tatuaj îți place?</span>
            }
            lead="De la un motiv fin la un tatuaj plin de culoare, alegerea începe cu lucrări pe care le poți vedea de aproape."
            align="left"
          />
          <AviatieiCarousel>
            {zoneStyles.map((style) => (
              <article key={style.file} className="card overflow-hidden">
                <Link
                  href={`/proiecte?artist=${style.artist}`}
                  className="group relative block aspect-[4/5] overflow-hidden sm:aspect-square"
                  aria-label={`Vezi mai multe lucrări ${style.name} de ${artistsByKey[style.artist].name}`}
                >
                  <Image
                    src={`/gallery/${style.file}`}
                    alt={style.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    {...blurProps(`/gallery/${style.file}`)}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5">
                  <p className="eyebrow">{artistsByKey[style.artist].name}</p>
                  <h3 className="mt-3">{style.name}</h3>
                  <p className="text-muted mt-3 text-sm">{style.text}</p>
                  <Link
                    href={`/proiecte?artist=${style.artist}`}
                    className="text-accent mt-5 inline-flex items-center gap-2 text-sm"
                  >
                    Vezi lucrările <FiArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </AviatieiCarousel>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Link
              className="btn btn-ghost w-full min-w-0 !px-2 text-center !whitespace-normal sm:w-auto sm:!px-7 sm:!whitespace-nowrap"
              href="/servicii/tatuaje#tarife"
            >
              Vezi tarifele
            </Link>
            <Link
              className="btn btn-ghost w-full min-w-0 !px-2 text-center !whitespace-normal sm:w-auto sm:!px-7 sm:!whitespace-nowrap"
              href="/proiecte"
            >
              Tot portofoliul
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/8 pt-5 text-sm">
            <span className="text-muted">Tot la noi în studio:</span>
            {[
              { name: "Piercing", path: "piercing" },
              { name: "Micropigmentare", path: "micropigmentare" },
              { name: "Eliminare cu laser", path: "laser" },
            ].map((service) => (
              <Link
                key={service.path}
                href={`/servicii/${service.path}`}
                className="text-accent hover:text-accent-bright inline-flex items-center gap-2"
              >
                {service.name}
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/8 py-10 lg:py-14"
        aria-labelledby="despre-zona"
      >
        <div className="container">
          <h2 id="despre-zona" className="text-2xl sm:text-3xl">
            {zone.contextTitle}
          </h2>
          <div className="text-muted mt-5 grid gap-5 text-sm leading-relaxed sm:text-base md:grid-cols-2">
            {zone.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="acces"
        className="scroll-mt-24 border-t border-white/8 py-10 lg:py-14"
        aria-labelledby="acces-title"
      >
        <div className="container">
          <SectionHeading
            eyebrow={`Din ${zone.name} la studio`}
            title={<span id="acces-title">Ne găsești în Pipera.</span>}
            lead={zone.accessLead}
            align="left"
          />
          <div className="mt-7 grid gap-5 lg:grid-cols-5">
            <div className="card iframe-container relative min-h-72 overflow-hidden lg:col-span-3 lg:min-h-[380px]">
              <MapEmbed />
            </div>
            <div className="card p-6 sm:p-7 lg:col-span-2">
              <FiMapPin className="text-accent text-2xl" aria-hidden="true" />
              <h3 className="mt-4">{business.street}</h3>
              <p className="text-muted mt-2">
                București · studio Madiny Tattoo
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  className="btn btn-ghost"
                  href={directions("transit")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transport public <FiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="btn btn-ghost"
                  href={directions("driving")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cu mașina <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <p className="text-muted mt-6 text-sm">{zone.accessNote}</p>
              <div className="mt-5 border-t border-white/8 pt-4">
                <p className="text-muted text-xs">
                  Pleci din apropierea unuia dintre aceste repere?
                </p>
                <ul className="mt-3 space-y-3">
                  {zoneOrigins[zone.slug].map((origin) => (
                    <li key={origin}>
                      <a
                        className="text-accent inline-flex items-center gap-2 text-sm"
                        href={directions("transit", origin)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {origin.replace(", București", "")}
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-muted mt-3 text-xs">
                  Poți modifica punctul de plecare în Google Maps.
                </p>
              </div>
              <p className="text-muted mt-3 text-sm">
                Confirmăm împreună programarea înainte de vizită. Dacă ai nevoie
                de un reper pentru intrare, scrie-ne.
              </p>
              <Link
                className="text-accent link-underline mt-5 inline-block text-sm"
                href="/contact"
              >
                Program și date de contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        id={`faq-${zone.slug}`}
        items={zone.faq}
        eyebrow="Înainte să vii"
        className="py-10 lg:py-14"
        animated
      />
      <nav
        aria-label="Alte zone din București și Ilfov"
        className="container flex flex-wrap items-center gap-4 pb-6 text-sm"
      >
        <span className="text-muted">Vii din altă zonă?</span>
        {zone.relatedSlugs.map((slug) => {
          const related = getZone(slug);
          return (
            <Link
              key={slug}
              href={`/zone/${slug}`}
              className="text-accent link-underline"
            >
              {related.name}
            </Link>
          );
        })}
        <Link
          href="/zone"
          className="text-accent inline-flex items-center gap-2"
        >
          Toate zonele <FiArrowUpRight aria-hidden="true" />
        </Link>
      </nav>
      <section className="border-t border-white/8 py-10 lg:py-14">
        <div className="container">
          <div className="card border-accent/20 bg-accent/5 grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div>
              <span className="eyebrow">Hai să ne cunoaștem</span>
              <h2 className="mt-3 text-2xl sm:text-3xl">
                Tu aduci ideea.
                <br />
                <span className="text-accent">Noi îi dăm formă.</span>
              </h2>
              <p className="text-muted mt-4 max-w-lg text-sm">
                Trimite-ne câteva imagini de referință și povestește-ne ce îți
                dorești. Stabilim împreună următorul pas.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary justify-self-start"
            >
              Scrie-ne pe WhatsApp <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
