import { constructMetadata } from "./utils";
import { breadcrumbSchema, faqSchema, serviceSchema } from "./schema";
import { SITE_URL } from "./site";

export const getZoneTrail = (zone) => [
  { name: "Acasă", path: "/" },
  { name: "Zone", path: "/zone" },
  { name: zone.name, path: `/zone/${zone.slug}` },
];

export function zoneMetadata(zone) {
  const metadata = constructMetadata({
    title: zone.title,
    description: zone.description,
    path: `/zone/${zone.slug}`,
    image: `/og/zone/${zone.slug}.png`,
  });
  metadata.openGraph.images[0].alt = `Tatuaje pentru ${zone.name} — Madiny Tattoo, studio în Pipera`;
  return metadata;
}

export function zoneSchemas(zone) {
  const url = `${SITE_URL}/zone/${zone.slug}`;
  const service = {
    ...serviceSchema({
      name: `Tatuaje personalizate pentru clienți din ${zone.name}`,
      description: zone.description,
      path: `/zone/${zone.slug}`,
    }),
    "@id": `${url}#service`,
    serviceType: [
      "Tatuaje personalizate",
      "Tatuaje fine line",
      "Tatuaje color",
      "Tatuaje realism",
    ],
    areaServed: { "@type": "Place", name: `${zone.name}, București` },
  };
  return [
    breadcrumbSchema(getZoneTrail(zone)),
    service,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: zone.title,
      description: zone.description,
      inLanguage: "ro-RO",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": service["@id"] },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og/zone/${zone.slug}.png`,
        width: 1200,
        height: 630,
      },
    },
    faqSchema(zone.faq),
  ];
}
