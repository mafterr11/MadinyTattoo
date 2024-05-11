import ServiciiTatuaje from "../../../components/pages/ServiciiTatuaje";
import { constructMetadata } from "../../../lib/utils";

export const metadata = constructMetadata({
  title: "Tatuaje - MadinyTattoo",
  description:
    "Descoperă gama noastră variată de servicii tatuaje la Madiny Tattoo. De la tatuaje artistice și personalizate până la designuri realiste sau abstracte, suntem aici pentru a transforma ideile tale în artă permanentă. Alege dintr-o varietate de stiluri și lasă-ne să creăm ceva unic pentru tine.",

  keywords:
    "madiny tattoo, tatuaje artistice, modele tatuaje, tatuaje personalizate, arta tatuaj, designuri tatuaje, artist tatuaj, tatuaje unice, tatuaje realiste, tatuaje abstracte, tatuaje stilizate, tatuaje colorate, tatuaje blackwork",
})

const Tatuaje = () => {
  return <ServiciiTatuaje />;
};

export default Tatuaje;
