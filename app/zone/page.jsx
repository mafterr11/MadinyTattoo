import Image from "next/image";
import { zones } from "../../lib/zones";
import { SITE_URL } from "../../lib/site";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "../../components/PageHero";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = constructMetadata({
  title: "Zone și acces către studioul din Pipera | Madiny Tattoo",
  description:
    "Tatuaje pentru Aviației, Floreasca, Băneasa, Dorobanți și Tei. Vezi lucrările Madiny și accesul către studioul din Pipera, pe Șos. Pipera 61.",
  path: "/zone",
});

const trail = [
  { name: "Acasă", path: "/" },
  { name: "Zone", path: "/zone" },
];

export default function ZonesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema(trail),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/zone#webpage`,
            url: `${SITE_URL}/zone`,
            name: "Zone din București — Madiny Tattoo",
            inLanguage: "ro-RO",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: zones.map((zone, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: `Tatuaje pentru ${zone.name}`,
                url: `${SITE_URL}/zone/${zone.slug}`,
              })),
            },
          },
        ]}
      />
      <PageHero
        eyebrow="București → Pipera"
        title={
          <>
            Din zona ta, <span className="text-accent">la Madiny.</span>
          </>
        }
        lead="Studioul nostru este pe Șos. Pipera 61. Alege zona din care vii și descoperă lucrările, serviciile și accesul către noi."
        breadcrumbs={trail}
      />
      <section className="pb-20 lg:pb-28" aria-label="Zone din București">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {zones.map((zone, index) => (
              <Link
                key={zone.slug}
                href={`/zone/${zone.slug}`}
                className="card card-hover group overflow-hidden"
              >
                <div className="relative aspect-[1200/630] overflow-hidden border-b border-white/8">
                  <Image
                    src={`/og/zone/${zone.slug}.png`}
                    alt={`Tatuaje pentru ${zone.name} — Madiny Tattoo, studio în Pipera`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <span className="eyebrow">0{index + 1} / București</span>
                  <h2 className="mt-3 text-2xl">Vii din {zone.name}?</h2>
                  <p className="text-muted mt-4 text-sm leading-relaxed">
                    {zone.intro}
                  </p>
                  <span className="text-accent mt-5 inline-flex items-center gap-2 text-sm">
                    Descoperă pagina pentru {zone.name}
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-muted mt-8 text-sm">
            Pentru adresa completă, program și date de contact, intră pe{" "}
            <Link href="/contact" className="text-accent link-underline">
              pagina de contact
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
