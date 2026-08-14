import HomePage from "../components/pages/HomePage";
import JsonLd from "../components/JsonLd";
import { constructMetadata } from "../lib/utils";
import { breadcrumbSchema } from "../lib/schema";

export const metadata = constructMetadata({
  title: "Madiny Tattoo — Salon de tatuaje în București | Tatuaje, Micropigmentare, Laser",
  path: "/",
});

const Acasa = () => (
  <>
    <JsonLd schema={breadcrumbSchema([{ name: "Acasă", path: "/" }])} />
    <HomePage />
  </>
);

export default Acasa;
