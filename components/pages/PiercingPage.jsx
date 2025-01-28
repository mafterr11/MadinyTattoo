import React from "react";
import BackButton from "../BackButton";
import Link from "next/link";

const PiercingPage = () => {
  return (
    <div className="mx-auto rounded-xl p-6 xl:container max-md:text-center">
      {/* Titlu */}
      <div className="relative my-32 max-md:mb-12 flex flex-col items-center justify-center md:mt-40">
        <div className="absolute -bottom-2">
          <BackButton />
        </div>
        <h1>
          <span className="text-accent">Piercing</span>
        </h1>
        <p className="text-p xs:text-xl mx-auto mb-10 max-w-sm text-center font-bold md:max-w-2xl xl:mx-0 xl:mb-16 xl:max-w-3xl xl:text-xl">
          Realizate cu <span className="text-accent">profesionalism</span> și{" "}
          <span className="text-accent">atenție</span> la detalii, pentru a vă
          asigura o experiență sigură și confortabilă.
        </p>
      </div>

      <h2 className="decoration-accent mt-6 text-xl font-semibold underline">
        De ce să alegi salonul nostru?
      </h2>
      <ul className="mt-2 list-inside list-disc text-lg">
        <li>
          <strong className="text-accent">Echipament steril:</strong> Folosim
          doar instrumente și bijuterii sterile de înaltă calitate.
        </li>
        <li>
          <strong className="text-accent">Profesioniști cu experiență:</strong>{" "}
          Personalul nostru este instruit să efectueze piercinguri corect, rapid
          și fără dureri inutile.
        </li>
        <li>
          <strong className="text-accent">Igienă impecabilă:</strong> Respectăm
          cele mai înalte standarde de igienă pentru siguranța ta.
        </li>
        <li>
          <strong className="text-accent">Consiliere personalizată:</strong> Te
          ajutăm să alegi tipul de piercing care ți se potrivește cel mai bine.
        </li>
      </ul>

      <p className="mt-6 text-lg">
        <strong className="decoration-accent text-xl font-semibold underline">
          Costul unui piercing
        </strong>{" "}
        este de{" "}
        <span className="text-accent text-xl font-semibold underline">
          200 lei
        </span>
        , iar prețul include:
      </p>
      <ul className="mt-2 list-inside list-disc text-lg">
        <li>Realizarea piercingului.</li>
        <li>O bijuterie sterilă de calitate superioară.</li>
        <li>Sfaturi pentru îngrijire corectă post-procedură.</li>
      </ul>

      <h2 className="decoration-accent mt-6 text-xl font-semibold underline">
        De ce folosim doar titan pur?
      </h2>
      <p className="text-lg">
        Pentru primele luni după efectuarea unui piercing, folosim{" "}
        <strong className="text-accent">
          exclusiv bijuterii din titan pur
        </strong>
        , deoarece este o necesitate, nu doar o recomandare.
      </p>
      <ul className="mt-2 list-inside list-disc text-lg">
        <li>
          <strong className="text-accent">Hipoalergenic:</strong> Titanul pur
          este complet lipsit de nichel, reducând riscul de iritații sau
          complicații.
        </li>
        <li>
          <strong className="text-accent">Vindecare mai rapidă:</strong>{" "}
          Biocompatibil și acceptat ușor de organism, titanul ajută la o
          vindecare mai confortabilă.
        </li>
        <li>
          <strong className="text-accent">Rezistență la coroziune:</strong> Nu
          ruginește și nu corodează, asigurând igienă optimă.
        </li>
        <li>
          <strong className="text-accent">Ușor și confortabil:</strong> Este
          extrem de ușor, ideal pentru zonele sensibile.
        </li>
      </ul>

      <h2 className="decoration-accent mt-6 text-xl font-semibold underline">
        Cât timp trebuie purtat titanul?
      </h2>
      <p className="text-lg">
        Recomendăm purtarea bijuteriei din titan pentru cel puțin{" "}
        <strong className="text-accent">2-3 luni</strong>, până la finalizarea
        procesului de vindecare.
      </p>
      <p className="mt-2 text-lg">
        După această perioadă, poți opta pentru alte materiale sigure, iar
        echipa noastră te poate ghida în alegerea potrivită.
      </p>

      <div className="mt-12 mb-32 text-center">
        <Link
          href="/contact"
          className="bg-accent rounded-lg px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Programează-te acum!
        </Link>
      </div>
    </div>
  );
};

export default PiercingPage;
