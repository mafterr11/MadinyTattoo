import TestimonialePage from "../../components/pages/TestimonialePage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";
import { testimonials } from "../../lib/testimonials";
import { SITE_URL, business } from "../../lib/site";

export const metadata = constructMetadata({
  title: "Testimoniale - MadinyTattoo",
  description:
    "Descoperă păreri autentice și testimoniale ale clienților satisfăcuți la Madiny Tattoo. Vezi experiențele reale ale celor care au ales să își îndeplinească dorințele artistice și estetice la salonul nostru.",
  keywords:
    "testimoniale, păreri clienți, experiențe client, recenzii autentice, feedback client, impresii salon tatuaje, opiniile clienților, povestiri client, testimoniale madiny tattoo",
  path: "/testimoniale",
});

/**
 * Reviews without a star rating: we only have the written testimonials, and
 * inventing `reviewRating` values would be exactly the kind of fabricated
 * markup Google issues manual actions for.
 */
const reviewsSchema = testimonials.map((person) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": `${SITE_URL}/#business` },
  author: { "@type": "Person", name: person.name },
  reviewBody: person.message,
  publisher: { "@type": "Organization", name: business.name },
}));

const Testimoniale = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Testimoniale", path: "/testimoniale" },
        ]),
        ...reviewsSchema,
      ]}
    />
    <TestimonialePage />
  </>
);

export default Testimoniale;
