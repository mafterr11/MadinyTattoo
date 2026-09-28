import ContactPage from "../../components/pages/ContactPage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";
import { SITE_URL } from "../../lib/site";

export const metadata = constructMetadata({
  title: "Contact salon tatuaje Pipera, București | Madiny Tattoo",
  description:
    "Programează-te la Madiny Tattoo, pe Șos. Pipera 61, București. Găsești adresa, harta, programul, telefonul și WhatsApp pentru întrebări despre tatuaje și servicii.",
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
