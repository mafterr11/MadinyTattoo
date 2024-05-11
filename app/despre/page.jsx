import DesprePage from "../../components/pages/DesprePage";
import { constructMetadata } from "../../lib/utils";

export const metadata = constructMetadata({
  title: "Despre - MadinyTattoo",
  description:
    "Explorează povestea și pasiunea din spatele tatuatoarei Madiny la Madiny Tattoo. Descoperă angajamentul și talentul ei în arta tatuajului și relația autentică cu clienții săi.",

  keywords:
    "tatuatoare Madiny, pasiune tatuaj, artist tatuaj, experiență tatuaj, poveste tatuator, dedicare artist, relație clienți, tatuaj creativ, profil tatuatoare, pasiune artistică",
});

const Despre = () => {
  return <DesprePage />;
};

export default Despre;
