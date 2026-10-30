import PiercingPage from "../../../components/pages/PiercingPage";
import JsonLd from "../../../components/JsonLd";
import { constructMetadata } from "../../../lib/utils";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../../../lib/schema";
import { piercingFaq } from "../../../lib/serviceFaq";

const description =
  "Piercing profesional la Madiny Tattoo București: echipament steril, bijuterii din titan pur și consiliere personalizată. Costul unui piercing este de 200 lei și include bijuteria sterilă și sfaturile de îngrijire post-procedură.";

export const metadata = constructMetadata({
  title: "Piercing Profesional București, Titan Pur | Madiny",
  description,
  path: "/servicii/piercing",
});

const Piercing = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Servicii", path: "/servicii" },
          { name: "Piercing", path: "/servicii/piercing" },
        ]),
        serviceSchema({
          name: "Piercing",
          description,
          path: "/servicii/piercing",
          offers: [{ name: "Piercing cu bijuterie din titan pur", price: 200 }],
        }),
        faqSchema(piercingFaq),
      ]}
    />
    <PiercingPage />
  </>
);

export default Piercing;
