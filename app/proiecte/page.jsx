import ProiectePage from "../../components/pages/ProiectePage";
import { constructMetadata } from "../../lib/utils";

export const metadata = constructMetadata({
  title: "Proiecte Finalizate - MadinyTattoo",
  description:
    "Exploră galeria noastră variată de tatuaje finalizate la Madiny Tattoo. Descoperă arta transformând ideile în realitate și vezi designurile finalizate ce reflectă stiluri diverse și creație autentică.",

  keywords:
    "tatuaje finalizate, galerie tatuaje, designuri tatuaje realizate, imagini tatuaje, modele tatuaje finisate, realizări artistice, creații tatuaj, portofoliu tatuaje, tatuaje executate, tatuaje perfecte",
});

const Proiecte = () => {
  return <ProiectePage />;
};

export default Proiecte;
