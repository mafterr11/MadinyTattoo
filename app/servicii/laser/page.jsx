import ServiciiLaser from "../../../components/pages/ServiciiLaser";
import { constructMetadata } from "../../../lib/utils";

export const metadata = constructMetadata({
  title: "Laser removal - MadinyTattoo",
  description:
    "Experimentează soluțiile noastre eficiente pentru eliminarea tatuajelor cu laser la Madiny Tattoo. Oferim tratamente profesionale și tehnologii moderne pentru a transforma sau elimina tatuajele dorite.",

  keywords:
    "eliminare tatuaje cu laser, laser removal, proceduri eliminare tatuaje, tratamente laser tatuaje, îndepărtare tatuaje cu laser, eliminare tatuaje nevoie de corectare, laser tatuaje profesionale, terapie laser tatuaje",
});

const LaserRemoval = () => {
  return <ServiciiLaser />;
};

export default LaserRemoval;
