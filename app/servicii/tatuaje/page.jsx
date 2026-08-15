import ServiciiTatuaje from "../../../components/pages/ServiciiTatuaje";
import JsonLd from "../../../components/JsonLd";
import { constructMetadata } from "../../../lib/utils";
import { breadcrumbSchema, serviceSchema } from "../../../lib/schema";
import { tattooPricing } from "../../../lib/pricing";

const description =
  "Descoperă gama noastră variată de servicii tatuaje la Madiny Tattoo. De la tatuaje artistice și personalizate până la designuri realiste sau abstracte, suntem aici pentru a transforma ideile tale în artă permanentă. Alege dintr-o varietate de stiluri și lasă-ne să creăm ceva unic pentru tine.";

export const metadata = constructMetadata({
  title: "Tatuaje - MadinyTattoo",
  description,
  keywords:
    "madiny tattoo, tatuaje artistice, modele tatuaje, tatuaje personalizate, arta tatuaj, designuri tatuaje, artist tatuaj, tatuaje unice, tatuaje realiste, tatuaje abstracte, tatuaje stilizate, tatuaje colorate, tatuaje blackwork",
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
      ]}
    />
    <ServiciiTatuaje />
  </>
);

export default Tatuaje;
