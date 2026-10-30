import ServiciiTatuaje from "../../../components/pages/ServiciiTatuaje";
import JsonLd from "../../../components/JsonLd";
import { constructMetadata } from "../../../lib/utils";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../../../lib/schema";
import { tattooPricing } from "../../../lib/pricing";
import { tattooFaq } from "../../../lib/serviceFaq";

const description =
  "Tatuaje personalizate în București, zona Pipera: alb-negru, color, contur fin și brodat. Vezi prețurile și lucrările Madiny Tattoo și discută ideea ta cu un artist.";

export const metadata = constructMetadata({
  title: "Tatuaje București, Pipera: stiluri și prețuri | Madiny Tattoo",
  description,
  path: "/servicii/tatuaje",
});

// "La cerere" tiers carry no figure — quoting them would emit an empty
// priceSpecification, which Google flags as invalid.
const offers = tattooPricing.flatMap((category) =>
  category.tiers
    .filter((tier) => tier.min != null)
    .map((tier) => ({
      name: `Tatuaj ${category.title} — ${tier.label}`,
      minPrice: tier.min,
      maxPrice: tier.max,
    })),
);

const Tatuaje = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Servicii", path: "/servicii" },
          { name: "Tatuaje", path: "/servicii/tatuaje" },
        ]),
        serviceSchema({
          name: "Tatuaje",
          description,
          path: "/servicii/tatuaje",
          offers,
        }),
        faqSchema(tattooFaq),
      ]}
    />
    <ServiciiTatuaje />
  </>
);

export default Tatuaje;
