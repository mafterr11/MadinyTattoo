import HomePage from "../components/pages/HomePage";
import JsonLd from "../components/JsonLd";
import { constructMetadata } from "../lib/utils";
import { breadcrumbSchema } from "../lib/schema";

export const metadata = constructMetadata({
  title: "Salon de tatuaje București, Pipera | Madiny Tattoo",
  path: "/",
});

const Acasa = () => (
  <>
    <JsonLd schema={breadcrumbSchema([{ name: "Acasă", path: "/" }])} />
    <HomePage />
  </>
);

export default Acasa;
