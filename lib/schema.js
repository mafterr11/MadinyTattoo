import { artists } from "./artists";
import { SITE_URL, business, socials } from "./site";

const ORG_ID = `${SITE_URL}/#business`;

/**
 * TattooParlor is a recognised schema.org type and the most specific match for
 * this business — it inherits from LocalBusiness, so Google reads it for the
 * local pack, opening hours, phone and map placement.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TattooParlor", "HealthAndBeautyBusiness"],
  "@id": ORG_ID,
  name: business.name,
  legalName: business.legalName,
  description: business.tagline,
  url: SITE_URL,
  telephone: business.phone,
  email: business.email,
  image: `${SITE_URL}/opengraph-image.jpg`,
  logo: `${SITE_URL}/opengraph-image.jpg`,
  priceRange: business.priceRange,
  currenciesAccepted: "RON",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  hasMap: business.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:00",
      closes: "19:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "București",
  },
  sameAs: socials.map((s) => s.href),
  // The homepage names and pictures both artists, so declaring them is a
  // description of what the page already shows rather than a claim on top of
  // it. Google reads `employee` for the knowledge panel's people.
  employee: artists.map((artist) => ({
    "@type": "Person",
    name: artist.name,
    jobTitle: artist.role,
    image: `${SITE_URL}${artist.photo}`,
    worksFor: { "@id": ORG_ID },
  })),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Tatuaje personalizate",
        serviceType: "Tatuaj",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Micropigmentare sprâncene și buze",
        serviceType: "Micropigmentare",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Eliminare tatuaje cu laser",
        serviceType: "Laser removal",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Piercing profesional",
        serviceType: "Piercing",
      },
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: business.name,
  inLanguage: "ro-RO",
  publisher: { "@id": ORG_ID },
};

/** Breadcrumbs help Google render the path under the result title. */
export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

/** Priced service pages become rich results when the offers are declared. */
export function serviceSchema({ name, description, path, offers = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: new URL(path, SITE_URL).toString(),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "București" },
    ...(offers.length && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name,
        itemListElement: offers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          priceCurrency: "RON",
          ...(offer.price
            ? { price: String(offer.price) }
            : {
                priceSpecification: {
                  "@type": "PriceSpecification",
                  minPrice: offer.minPrice,
                  maxPrice: offer.maxPrice,
                  priceCurrency: "RON",
                },
              }),
        })),
      },
    }),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function howToSchema({ name, description, steps }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  };
}
