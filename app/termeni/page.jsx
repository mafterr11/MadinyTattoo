import TermeniPage from "../../components/pages/TermeniPage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = constructMetadata({
  title: "Termeni și condiții | Madiny Tattoo",
  description:
    "Cum funcționează programările la Madiny Tattoo, politica de avans, ce înseamnă prețurile afișate, condițiile pentru efectuarea procedurilor și unde te adresezi în caz de reclamație.",
  keywords:
    "termeni si conditii, politica avans tatuaj, programari, madiny tattoo, anpc",
  path: "/termeni",
});

const Termeni = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Termeni și condiții", path: "/termeni" },
        ]),
      ]}
    />
    <TermeniPage />
  </>
);

export default Termeni;
