import HomePage from "../components/pages/HomePage";
import JsonLd from "../components/JsonLd";
import { constructMetadata } from "../lib/utils";
import { breadcrumbSchema } from "../lib/schema";
import { SITE_URL, business } from "../lib/site";
import { googleRating, reviews } from "../lib/reviews";

export const metadata = constructMetadata({
  title: "Madiny Tattoo — Salon de tatuaje în București | Tatuaje, Micropigmentare, Laser",
  path: "/",
});

/**
 * Rating markup is emitted only when the homepage actually displays the score
 * and the reviews it is based on. Marking up a rating the page does not show —
 * or one that was never collected — is what Google issues manual actions for.
 */
const reviewSchema = reviews.map((review) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": `${SITE_URL}/#business` },
  author: { "@type": "Person", name: review.author },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating,
    bestRating: 5,
    worstRating: 1,
  },
  reviewBody: review.text,
  publisher: { "@type": "Organization", name: business.name },
}));

// The headline average is separate: it is only claimed once the real score
// and count from the Google profile are known.
const aggregateSchema = googleRating
  ? [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: googleRating.score,
          reviewCount: googleRating.count,
          bestRating: 5,
          worstRating: 1,
        },
      },
    ]
  : [];

const Acasa = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([{ name: "Acasă", path: "/" }]),
        ...aggregateSchema,
        ...reviewSchema,
      ]}
    />
    <HomePage />
  </>
);

export default Acasa;
