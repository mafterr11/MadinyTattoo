import CookiesPage from "../../components/pages/CookiesPage";
import JsonLd from "../../components/JsonLd";
import { constructMetadata } from "../../lib/utils";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata = constructMetadata({
  title: "Politica de cookie-uri | Madiny Tattoo",
  description:
    "Site-ul Madiny Tattoo nu folosește cookie-uri de urmărire și nu are instrumente de analiză. Singurul element extern, harta Google, se încarcă doar la cererea ta.",
  keywords: "politica cookie-uri, cookies, madiny tattoo, confidentialitate",
  path: "/cookies",
});

const Cookies = () => (
  <>
    <JsonLd
      schema={[
        breadcrumbSchema([
          { name: "Acasă", path: "/" },
          { name: "Cookie-uri", path: "/cookies" },
        ]),
      ]}
    />
    <CookiesPage />
  </>
);

export default Cookies;
