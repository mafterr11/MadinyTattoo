import ProiectePage from "../../components/pages/ProiectePage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";
import { galleryImages } from "../../lib/gallery";
import { SITE_URL } from "../../lib/site";

export const metadata = constructMetadata({
  title: "Proiecte finalizate - MadinyTattoo",
  description:
    "Exploră galeria noastră variată de tatuaje finalizate la Madiny Tattoo. Descoperă arta transformând ideile în realitate și vezi designurile finalizate ce reflectă stiluri diverse și creație autentică.",
  keywords:
    "tatuaje finalizate, galerie tatuaje, designuri tatuaje realizate, imagini tatuaje, modele tatuaje finisate, realizări artistice, creații tatuaj, portofoliu tatuaje, tatuaje executate, tatuaje perfecte",
  path: "/proiecte",
});

/** An ImageGallery collection page is eligible for Google Images rich results. */
const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Portofoliu tatuaje — Madiny Tattoo",
  url: `${SITE_URL}/proiecte`,
  image: galleryImages.map((image) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${image.src}`,
    caption: image.alt,
  })),
};

const Proiecte = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Proiecte", path: "/proiecte" },
        ]),
        gallerySchema,
      ]}
    />
    <ProiectePage />
  </>
);

export default Proiecte;
