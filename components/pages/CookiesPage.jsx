import Link from "next/link";

import LegalPage from "./LegalPage";
import { business, mailtoUrl } from "../../lib/site";

const sections = [
  {
    title: "Pe scurt",
    body: (
      <>
        <p>
          <strong>Acest site nu îți pune niciun cookie.</strong> Nu avem Google
          Analytics, nu avem pixel de Facebook, nu urmărim ce pagini citești și
          nu construim profiluri de vizitatori. Nu ai de bifat nimic ca să
          folosești site-ul.
        </p>
        <p>
          Singurul element extern care poate scrie ceva în browserul tău este
          harta Google de pe pagina de contact — și aceea se încarcă doar dacă
          apeși tu butonul.
        </p>
      </>
    ),
  },
  {
    title: "Ce este, de fapt, un cookie",
    body: (
      <p>
        Un cookie este un fișier mic pe care un site îl lasă în browserul tău ca
        să te recunoască la următoarea vizită. Sunt utile pentru lucruri precum
        păstrarea unui coș de cumpărături sau a unei sesiuni de autentificare.
        Acest site nu are nevoie de niciuna dintre ele: nu are conturi, nu are
        coș și nu ține minte nimic despre tine între vizite.
      </p>
    ),
  },
  {
    title: "Harta Google de pe pagina de contact",
    body: (
      <>
        <p>
          Harta încorporată vine de la Google. În momentul în care se încarcă,
          browserul tău face o cerere către serverele Google, care pot seta
          cookie-uri și pot înregistra adresa ta IP — chiar dacă tu nu apeși
          nimic pe hartă.
        </p>
        <p>
          De aceea nu o încărcăm din start. Pe{" "}
          <Link href="/contact">pagina de contact</Link> vezi mai întâi adresa
          și un buton; harta apare doar după ce apeși tu. Dacă preferi să nu o
          încarci deloc, lângă buton găsești un link direct către Google Maps,
          care te duce pe site-ul lor — acolo se aplică{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politica de confidențialitate Google
          </a>
          .
        </p>
        <p>
          Alegerea ta nu este memorată, tocmai pentru că memorarea ei ar cere un
          cookie. Harta rămâne ascunsă la fiecare vizită nouă, până o ceri din
          nou.
        </p>
      </>
    ),
  },
  {
    title: "Linkurile către WhatsApp, Instagram și TikTok",
    body: (
      <p>
        Butoanele de contact și pictogramele de social media sunt linkuri
        obișnuite: nu încarcă nimic în pagină și nu setează nimic în browserul
        tău cât timp ești pe acest site. Din momentul în care le apeși, ai ajuns
        pe site-ul respectiv, iar de acolo se aplică regulile lui. Ce înseamnă
        asta pentru datele tale găsești în{" "}
        <Link href="/confidentialitate">politica de confidențialitate</Link>.
      </p>
    ),
  },
  {
    title: "Cum controlezi cookie-urile în browser",
    body: (
      <>
        <p>
          Chiar dacă acest site nu îți pune niciunul, poți oricând să vezi și să
          ștergi cookie-urile lăsate de alte site-uri. Setarea se află, în
          general, sub „Confidențialitate și securitate” în meniul browserului:
        </p>
        <ul>
          <li>
            <strong>Chrome</strong> — Setări → Confidențialitate și securitate →
            Cookie-uri și alte date ale site-urilor.
          </li>
          <li>
            <strong>Safari</strong> — Setări → Safari → Blochează toate
            cookie-urile, sau Șterge istoricul și datele site-urilor.
          </li>
          <li>
            <strong>Firefox</strong> — Setări → Confidențialitate și securitate
            → Cookie-uri și date despre site-uri.
          </li>
          <li>
            <strong>Edge</strong> — Setări → Cookie-uri și permisiuni site.
          </li>
        </ul>
        <p>
          Blocarea completă a cookie-urilor nu afectează în niciun fel acest
          site.
        </p>
      </>
    ),
  },
  {
    title: "Întrebări",
    body: (
      <p>
        Dacă vrei o lămurire sau ai observat ceva care contrazice cele de mai
        sus, scrie-ne la <a href={mailtoUrl}>{business.email}</a>. Actualizăm
        pagina ori de câte ori se schimbă ceva în felul în care funcționează
        site-ul.
      </p>
    ),
  },
];

const CookiesPage = () => (
  <LegalPage
    eyebrow="Cookie-uri"
    title={
      <>
        Politica de <span className="text-accent">cookie-uri.</span>
      </>
    }
    intro="Varianta scurtă: site-ul nu îți pune niciun cookie. Pagina asta explică ce înseamnă asta și ce se întâmplă cu singurul element extern din site."
    breadcrumbs={[
      { name: "Acasă", path: "/" },
      { name: "Cookie-uri", path: "/cookies" },
    ]}
    sections={sections}
  />
);

export default CookiesPage;
