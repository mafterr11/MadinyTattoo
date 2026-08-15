import ServiciiLaser from "../../../components/pages/ServiciiLaser";
import JsonLd from "../../../components/JsonLd";
import { constructMetadata } from "../../../lib/utils";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../../../lib/schema";
import { laserFaq, laserSizePricing } from "../../../lib/pricing";

const description =
  "Experimentează soluțiile noastre eficiente pentru eliminarea tatuajelor cu laser la Madiny Tattoo. Oferim tratamente profesionale și tehnologii moderne pentru a transforma sau elimina tatuajele dorite.";

export const metadata = constructMetadata({
  title: "Laser removal - MadinyTattoo",
  description,
  keywords:
    "eliminare tatuaje cu laser, laser removal, proceduri eliminare tatuaje, tratamente laser tatuaje, îndepărtare tatuaje cu laser, eliminare tatuaje nevoie de corectare, laser tatuaje profesionale, terapie laser tatuaje",
  path: "/servicii/laser",
});

const LaserRemoval = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Servicii", path: "/servicii" },
          { name: "Laser", path: "/servicii/laser" },
        ]),
        serviceSchema({
          name: "Eliminare tatuaje cu laser",
          description,
          path: "/servicii/laser",
          offers: [
            { name: "Ședință laser sprâncene", price: 300 },
            {
              name: "Ședință laser în funcție de dimensiune",
              // Derived from the table so the range can never fall behind it.
              minPrice: Math.min(...laserSizePricing.map((r) => r.value)),
              maxPrice: Math.max(...laserSizePricing.map((r) => r.value)),
            },
          ],
        }),
        faqSchema(laserFaq),
      ]}
    />
    <ServiciiLaser />
  </>
);

export default LaserRemoval;
