import ServiciiPage from "../../../components/pages/ServiciiPage";
import { constructMetadata } from "../../../lib/utils";

export const metadata = constructMetadata({
  title: "Servicii - MadinyTattoo",
  description:
    "Madiny Tattoo, un spațiu artistic dedicat expresiei personale prin arta tatuajelor și micropigmentării. Oferim designuri unice de tatuaje și proceduri de micropigmentare atent executate pentru a sublinia frumusețea naturală. De asemenea, oferim servicii de eliminare laser a tatuajelor, transformând trecutul într-o nouă pagină în povestea ta. Descoperă arta autentică și profesionalismul nostru în transformarea viselor în realitate.",

  keywords:
    "designuri unice de tatuaje, arta tatuaj creativa, tatuaje personalizate, diverse stiluri de tatuaje, servicii tatuaje bucuresti, estetica tatuaj originala, imagini durabile tatuaj, tatuaje unisex, laser removal tatuaje, indepartare tatuaje, eliminare tatuaje, micropigmentare, pigmentare permanenta, servicii micropigmentare, micropigmentare bucuresti, tehnici micropigmentare, proceduri micropigmentare, tratament indepartare tatuaje, pigmentare semi-permanenta, servicii pigmentare, eliminare corecta tatuaje",
});



const Services = () => {
  return <ServiciiPage />;
};

export default Services;
