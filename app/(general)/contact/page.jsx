import ContactPage from "../../../components/pages/ContactPage";
import { constructMetadata } from "../../../lib/utils";

export const metadata = constructMetadata({
  title: "Contact - MadinyTattoo",
  description:
    "Contactează-ne pentru programări și informații suplimentare la Madiny Tattoo, situat la Șoseaua Pipera 61, Complexul Cloud 9, București, 077190. Te așteptăm în apropierea sediului Direcției Regim Permise de Conducere și Înmatriculare a Vehiculelor.",
  keywords:
    "contact Madiny Tattoo, programări tatuaj, informații contact tatuaj, adresă tatuaj, locație salon tatuaj, Șoseaua Pipera 61, Complexul Cloud 9, București, 077190, Direcția Regim Permise de Conducere și Înmatriculare a Vehiculelor",
});

const Contact = () => {
  return <ContactPage />;
};

export default Contact;