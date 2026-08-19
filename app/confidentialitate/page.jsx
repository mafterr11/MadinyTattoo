import ConfidentialitatePage from "../../components/pages/ConfidentialitatePage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = constructMetadata({
  title: "Politica de confidențialitate | Madiny Tattoo",
  description:
    "Ce date personale colectează Madiny Tattoo, în ce scop, cui ajung și cum îți exerciți drepturile GDPR. Site-ul nu urmărește vizitatorii și nu creează profiluri.",
  keywords:
    "politica de confidentialitate, gdpr, date personale, madiny tattoo, protectia datelor",
  path: "/confidentialitate",
});

const Confidentialitate = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Confidențialitate", path: "/confidentialitate" },
        ]),
      ]}
    />
    <ConfidentialitatePage />
  </>
);

export default Confidentialitate;
