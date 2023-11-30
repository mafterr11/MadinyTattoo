import "./globals.css";
// COMPONENTS
import Layout from "./components/Layout";

export const metadata = {
  title: "Madiny Tattoo",
  description:
    "Bine ai venit la Madiny Tattoo, unde arta se întâlnește cu pielea. Descoperă designuri unice de tatuaje și lucrări excepționale realizate de artiștii noștri talentați. Explorează o lume a creativității și a expresiei personale cu portofoliul nostru diversificat.",
  keywords:
    "Artist Tatuaj România, Designuri Unice de Tatuaje, Tatuator Talentat, Artă Tatuaj Creativă, Tatuaje Personalizate, Studio Tatuaje Personalizate, Măiestrie Excepțională în Tatuaj, Diverse Stiluri de Tatuaje, Servicii Tatuaje București, Artă Profesională de Tatuaj, Artă Corporală Unică, Tendințe în Tatuaje, Estetică Tatuaj Originală, Tatuaje Fine-Art, Inspirație Tatuaj Personalizat, Designuri Personalizate, Tatuaje Realiste, Tatuaje Detaliat Executate, Imagini Durabile Tatuaj, Calitate Premium Tatuaje, Tatuaje Unisex  ",
};

export default function RootLayout({ children }) {
  return <Layout>{children}</Layout>;
}
