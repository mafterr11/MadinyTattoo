import { SITE_URL, business } from "./site";

/**
 * Builds a complete Next.js metadata object for a route.
 * `path` drives the canonical URL — without it Google can treat query-string
 * and trailing-slash variants of the same page as duplicates.
 */
export function constructMetadata({
  title = "MadinyTattoo - Salon de tatuaje",
  description = "Bine ai venit la Madiny Tattoo, unde arta se întâlnește cu pielea. Descoperă designuri unice de tatuaje și lucrări excepționale realizate de artiștii noștri talentați. Explorează o lume a creativității și a expresiei personale cu portofoliul nostru diversificat.",
  keywords = "artist tatuaj romania, tatuator talentat, studio tatuaje personalizate, arta profesionala de tatuaj, tatuaje detaliat executate, calitate premium tatuaje, micropigmentare profesionala, tehnici avansate micropigmentare, proceduri estetice micropigmentare, tehnologii laser tatuaje, eliminare eficienta tatuaje, tatuaje bucuresti, tatuaje pipera, salon tatuaj bucuresti, salon tatuaj",
  image = "/opengraph-image.png",
  icons = "/favicon.ico",
  path = "/",
} = {}) {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    keywords,
    applicationName: business.name,
    authors: [{ name: business.name, url: SITE_URL }],
    creator: business.name,
    publisher: business.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "ro_RO",
      type: "website",
      images: [
        {
          // Matches the real dimensions of public/opengraph-image.png.
          // Replacing it with a 1200x630 asset would give a larger card.
          url: image,
          width: 751,
          height: 500,
          alt: `${business.name} — ${business.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@madinytattoo",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons,
    metadataBase: new URL(SITE_URL),
  };
}
