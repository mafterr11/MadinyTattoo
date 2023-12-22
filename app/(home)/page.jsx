import HomePage from "../../components/pages/HomePage";
import Head from "next/head";

export const metadata = {
  title: "Madiny Tattoo",
  description:
    "Bine ai venit la Madiny Tattoo, unde arta se întâlnește cu pielea. Descoperă designuri unice de tatuaje și lucrări excepționale realizate de artiștii noștri talentați. Explorează o lume a creativității și a expresiei personale cu portofoliul nostru diversificat.",

  keywords:
    "artist tatuaj romania, tatuator talentat, studio tatuaje personalizate, arta profesionala de tatuaj, tatuaje detaliat executate, calitate premium tatuaje, micropigmentare profesionala, tehnici avansate micropigmentare, proceduri estetice micropigmentare, tehnologii laser tatuaje, eliminare eficienta tatuaje",
};

const Acasa = () => {
  return (
    <>
      <Head>
        <meta
          property='og:image'
          content='https://madinytattoo.ro/opengraph-image.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <HomePage />
    </>
  );
};

export default Acasa;
