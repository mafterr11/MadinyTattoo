export function constructMetadata({
  title = "MadinyTattoo - Salon de tatuaje",
  description =
  "Bine ai venit la Madiny Tattoo, unde arta se întâlnește cu pielea. Descoperă designuri unice de tatuaje și lucrări excepționale realizate de artiștii noștri talentați. Explorează o lume a creativității și a expresiei personale cu portofoliul nostru diversificat.",
  keywords =
  "artist tatuaj romania, tatuator talentat, studio tatuaje personalizate, arta profesionala de tatuaj, tatuaje detaliat executate, calitate premium tatuaje, micropigmentare profesionala, tehnici avansate micropigmentare, proceduri estetice micropigmentare, tehnologii laser tatuaje, eliminare eficienta tatuaje, tatuaje bucuresti, tatuaje pipera, salon tatuaj bucuresti, salon tatuaj",
  image = "/opengraph-image.png",
  icons = "/favicon.ico",
} = {}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      keywords,
      images: [image],
      creator: "@madinytattoo",
    },
    icons,
    metadataBase: new URL("https://www.madinytattoo.ro"),
  };
}
