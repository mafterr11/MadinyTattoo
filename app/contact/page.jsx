import ContactPage from "../../components/pages/ContactPage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";
import { SITE_URL } from "../../lib/site";

export const metadata = constructMetadata({
  title: "Contact - MadinyTattoo",
  description:
    "Contactează-ne pentru programări și informații suplimentare la Madiny Tattoo, situat la Șoseaua Pipera 61, Complexul Cloud 9, București, 077190. Te așteptăm în apropierea sediului Direcției Regim Permise de Conducere și Înmatriculare a Vehiculelor.",
  keywords:
    "contact Madiny Tattoo, programări tatuaj, informații contact tatuaj, adresă tatuaj, locație salon tatuaj, Șoseaua Pipera 61, Complexul Cloud 9, București, 077190, Direcția Regim Permise de Conducere și Înmatriculare a Vehiculelor",
  path: "/contact",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: { "@id": `${SITE_URL}/#business` },
};

const Contact = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
        contactSchema,
      ]}
    />
    <ContactPage />
  </>
);

export default Contact;
