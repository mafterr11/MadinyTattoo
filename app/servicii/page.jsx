import ServiciiPage from "../../components/pages/ServiciiPage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = constructMetadata({
  title: "Servicii Tatuaje și Micropigmentare | Madiny Tattoo",
  description:
    "Madiny Tattoo, un spațiu artistic dedicat expresiei personale prin arta tatuajelor și micropigmentării. Oferim designuri unice de tatuaje și proceduri de micropigmentare atent executate pentru a sublinia frumusețea naturală. De asemenea, oferim servicii de eliminare laser a tatuajelor, transformând trecutul într-o nouă pagină în povestea ta. Descoperă arta autentică și profesionalismul nostru în transformarea viselor în realitate.",
  path: "/servicii",
});

const Services = () => (
  <>
    <JsonLd
      schema={breadcrumbSchema([
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
      ])}
    />
    <ServiciiPage />
  </>
);

export default Services;
