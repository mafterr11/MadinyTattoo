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
  image = "/opengraph-image.jpg",
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
    // Second route for Search Console ownership, alongside the HTML file in
    // public/. Set GOOGLE_SITE_VERIFICATION in the hosting environment and the
    // meta tag appears — no code change needed if the file method is dropped.
    ...(process.env.GOOGLE_SITE_VERIFICATION && {
      verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
    }),
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "ro_RO",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
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
    // No `icons` key on purpose: setting it here would override Next's file
    // conventions, and app/icon.svg + app/favicon.ico + app/apple-icon.png
    // already emit the full set of links.
    metadataBase: new URL(SITE_URL),
  };
}
