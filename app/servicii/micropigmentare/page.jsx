import ServiciiMicropigmentare from "../../../components/pages/ServiciiMicropigmentare";
import JsonLd from "../../../components/JsonLd";
import { constructMetadata } from "../../../lib/utils";
import { breadcrumbSchema, serviceSchema } from "../../../lib/schema";
import { micropigmentarePricing } from "../../../lib/pricing";

const description =
  "Experimentează micropigmentarea la Madiny Tattoo, unde talentul nostru se întâlnește cu perfecțiunea tehnicilor moderne. De la conturarea naturală a sprâncenelor până la micropigmentarea estetică, oferim servicii personalizate pentru a sublinia frumusețea ta naturală.";

export const metadata = constructMetadata({
  title: "Micropigmentare - MadinyTattoo",
  description,
  keywords:
    "micropigmentare, micropigmentare sprâncene, micropigmentare buze, micropigmentare ochi, tehnici micropigmentare, micropigmentare profesională, micropigmentare realism, pigmentare semipermanentă, proceduri micropigmentare",
  path: "/servicii/micropigmentare",
});

const offers = micropigmentarePricing.map((item) => ({
  name: `Micropigmentare ${item.title}`,
  price: item.tiers[0].min,
}));

const Micropigmentare = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Servicii", path: "/servicii" },
          { name: "Micropigmentare", path: "/servicii/micropigmentare" },
        ]),
        serviceSchema({
          name: "Micropigmentare",
          description,
          path: "/servicii/micropigmentare",
          offers,
        }),
      ]}
    />
    <ServiciiMicropigmentare />
  </>
);

export default Micropigmentare;
