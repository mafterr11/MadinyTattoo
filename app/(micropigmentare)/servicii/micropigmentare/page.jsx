import ServiciiMicropigmentare from "../../../../components/pages/ServiciiMicropigmentare";
import { constructMetadata } from "../../../../lib/utils";

export const metadata = constructMetadata({
  title: "Micropigmentare - MadinyTattoo",
  description:
    "Experimentează micropigmentarea la Madiny Tattoo, unde talentul nostru se întâlnește cu perfecțiunea tehnicilor moderne. De la conturarea naturală a sprâncenelor până la micropigmentarea estetică, oferim servicii personalizate pentru a sublinia frumusețea ta naturală.",

  keywords:
    "micropigmentare, micropigmentare sprâncene, micropigmentare buze, micropigmentare ochi, tehnici micropigmentare, micropigmentare profesională, micropigmentare realism, pigmentare semipermanentă, proceduri micropigmentare",
});

const Micropigmentare = () => {
  return <ServiciiMicropigmentare />;
}

export default Micropigmentare
