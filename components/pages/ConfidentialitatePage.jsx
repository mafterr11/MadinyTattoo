import Link from "next/link";

import LegalPage from "./LegalPage";
import { anspdcp, entity } from "../../lib/legal";
import { business, mailtoUrl, telUrl } from "../../lib/site";

/** The operator's identification, skipping rows that have not been filled in. */
const OperatorDetails = () => (
  <dl>
    <dt>Denumire</dt>
    <dd>{entity.companyName ?? business.name}</dd>

    {entity.cui && (
      <>
        <dt>CUI</dt>
        <dd>{entity.cui}</dd>
      </>
    )}

    {entity.regCom && (
      <>
        <dt>Reg. Com.</dt>
        <dd>{entity.regCom}</dd>
      </>
    )}

    <dt>Adresă</dt>
    <dd>{business.addressFull}</dd>

    <dt>Email</dt>
    <dd>
      <a href={mailtoUrl}>{business.email}</a>
    </dd>

    <dt>Telefon</dt>
    <dd>
      <a href={telUrl}>{business.phoneDisplay}</a>
    </dd>
  </dl>
);

const sections = [
  {
    title: "Cine prelucrează datele tale",
    body: (
      <>
        <p>
          Acest site este administrat de {entity.companyName ?? business.name}
          {entity.companyName ? ` (${business.name})` : ""}, care decide de ce
          și cum sunt prelucrate datele tale personale. În limbajul
          Regulamentului (UE) 2016/679 (GDPR), suntem{" "}
          <strong>operator de date</strong>.
        </p>
        <OperatorDetails />
        <p>
          Pentru orice întrebare legată de datele tale, scrie-ne la{" "}
          <a href={`mailto:${entity.dpoEmail ?? business.email}`}>
            {entity.dpoEmail ?? business.email}
          </a>
          . Îți răspundem în cel mult 30 de zile.
        </p>
      </>
    ),
  },
  {
    title: "Ce date colectăm și de unde",
    body: (
      <>
        <p>
          Site-ul nu îți cere să îți faci cont și nu are formulare care să ne
          trimită date direct. Colectăm doar ce ne transmiți tu, atunci când
          alegi să ne contactezi:
        </p>
        <ul>
          <li>
            <strong>Prin formularul de programare.</strong> Formularul de pe
            site nu trimite nimic către noi de unul singur: el compune un mesaj
            din răspunsurile tale — serviciul dorit, zona, dimensiunea estimată,
            disponibilitatea, numele tău și descrierea ideii — și îl deschide în
            WhatsApp. Mesajul ajunge la noi doar dacă îl trimiți tu din
            WhatsApp. Până atunci, răspunsurile rămân în browserul tău.
          </li>
          <li>
            <strong>Prin WhatsApp, telefon sau email.</strong> Numărul tău de
            telefon sau adresa de email, numele și conținutul conversației.
          </li>
          <li>
            <strong>În salon, înainte de procedură.</strong> Pentru tatuaje,
            micropigmentare, laser și piercing avem nevoie de informații despre
            starea ta de sănătate — alergii, afecțiuni ale pielii, tratamente în
            curs — pentru că fără ele procedura nu poate fi făcută în siguranță.
            Acestea sunt <strong>date privind sănătatea</strong> și primesc o
            protecție specială (art. 9 GDPR). Le colectăm pe hârtie sau verbal,
            nu prin acest site.
          </li>
          <li>
            <strong>Fotografii ale lucrărilor.</strong> Le publicăm în
            portofoliu sau pe rețelele sociale doar cu acordul tău explicit,
            cerut separat. Îți poți retrage acordul oricând.
          </li>
        </ul>
        <p>
          Site-ul nu folosește instrumente de analiză a traficului și nu creează
          profiluri de vizitatori. Nu luăm decizii automate cu efect juridic
          asupra ta.
        </p>
      </>
    ),
  },
  {
    title: "De ce le folosim și în ce temei",
    body: (
      <>
        <ul>
          <li>
            <strong>
              Ca să răspundem cererii tale și să stabilim programarea
            </strong>{" "}
            — temeiul este executarea contractului sau demersurile făcute la
            cererea ta înainte de încheierea lui (art. 6 alin. 1 lit. b GDPR).
          </li>
          <li>
            <strong>Ca să efectuăm procedura în siguranță</strong> — pentru
            datele despre sănătate, temeiul este consimțământul tău explicit
            (art. 9 alin. 2 lit. a GDPR), dat înainte de procedură. Fără el nu
            putem lucra.
          </li>
          <li>
            <strong>Ca să ne îndeplinim obligațiile legale</strong> — evidențe
            fiscale, contabile și sanitare (art. 6 alin. 1 lit. c GDPR).
          </li>
          <li>
            <strong>Ca să publicăm fotografii ale lucrărilor</strong> — temeiul
            este consimțământul tău (art. 6 alin. 1 lit. a GDPR).
          </li>
          <li>
            <strong>Ca să ne apărăm un drept în justiție</strong>, dacă vreodată
            e nevoie — interesul nostru legitim (art. 6 alin. 1 lit. f GDPR).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Cui ajung datele tale",
    body: (
      <>
        <p>
          Nu vindem datele nimănui și nu le folosim pentru publicitate. Ajung
          doar la cei fără de care serviciul nu ar funcționa:
        </p>
        <ul>
          <li>
            <strong>WhatsApp (Meta Platforms Ireland Ltd.)</strong> — dacă alegi
            să ne scrii pe WhatsApp, conversația trece prin serviciile Meta și
            se supune{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy-eea"
              target="_blank"
              rel="noopener noreferrer"
            >
              politicii lor de confidențialitate
            </a>
            . Poți evita asta scriindu-ne pe email sau sunându-ne.
          </li>
          <li>
            <strong>Google Ireland Ltd.</strong> — doar dacă apeși butonul de
            încărcare a hărții pe pagina de contact. Detalii pe pagina despre{" "}
            <Link href="/cookies">cookie-uri</Link>.
          </li>
          <li>
            <strong>Furnizorul de găzduire al site-ului</strong>, care
            procesează cererile către server strict tehnic.
          </li>
          <li>
            <strong>Contabilitate și autorități</strong>, atunci când legea ne
            obligă.
          </li>
        </ul>
        <p>
          Unii dintre acești furnizori pot prelucra date în afara Spațiului
          Economic European. În aceste cazuri transferul se face în baza
          clauzelor contractuale standard aprobate de Comisia Europeană sau a
          unei decizii de adecvare.
        </p>
      </>
    ),
  },
  {
    title: "Cât timp le păstrăm",
    body: (
      <ul>
        <li>
          <strong>Conversațiile despre o programare</strong> — pe durata
          discuției și până la 12 luni după, ca să putem relua firul dacă revii.
        </li>
        <li>
          <strong>Fișele de consimțământ și datele despre sănătate</strong> — pe
          durata impusă de reglementările sanitare aplicabile, apoi le
          distrugem.
        </li>
        <li>
          <strong>Documentele fiscale</strong> — 10 ani, cât cere legislația
          contabilă.
        </li>
        <li>
          <strong>Fotografiile publicate cu acordul tău</strong> — până îți
          retragi acordul.
        </li>
      </ul>
    ),
  },
  {
    title: "Drepturile tale",
    body: (
      <>
        <p>GDPR îți dă, față de noi, următoarele drepturi:</p>
        <ul>
          <li>
            <strong>Acces</strong> — să afli ce date avem despre tine și să
            primești o copie.
          </li>
          <li>
            <strong>Rectificare</strong> — să corectăm ce e greșit sau
            incomplet.
          </li>
          <li>
            <strong>Ștergere</strong> — să le ștergem, când nu mai avem un motiv
            legal să le păstrăm.
          </li>
          <li>
            <strong>Restricționare</strong> — să le păstrăm, dar să nu le mai
            folosim, cât timp se lămurește o contestație.
          </li>
          <li>
            <strong>Portabilitate</strong> — să le primești într-un format pe
            care îl poți duce în altă parte.
          </li>
          <li>
            <strong>Opoziție</strong> — să te opui prelucrărilor bazate pe
            interesul nostru legitim.
          </li>
          <li>
            <strong>Retragerea consimțământului</strong>, oricând, fără să
            afecteze ce am făcut legal înainte de retragere.
          </li>
        </ul>
        <p>
          Îți exerciți oricare dintre ele scriindu-ne la{" "}
          <a href={`mailto:${entity.dpoEmail ?? business.email}`}>
            {entity.dpoEmail ?? business.email}
          </a>
          . Nu te costă nimic.
        </p>
        <p>
          Dacă îți răspundem nesatisfăcător, te poți adresa autorității de
          supraveghere:
        </p>
        <dl>
          <dt>Autoritate</dt>
          <dd>{anspdcp.name}</dd>
          <dt>Adresă</dt>
          <dd>{anspdcp.address}</dd>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${anspdcp.email}`}>{anspdcp.email}</a>
          </dd>
          <dt>Web</dt>
          <dd>
            <a href={anspdcp.url} target="_blank" rel="noopener noreferrer">
              {anspdcp.url.replace("https://", "")}
            </a>
          </dd>
        </dl>
      </>
    ),
  },
  {
    title: "Securitate și modificări",
    body: (
      <>
        <p>
          Site-ul este servit exclusiv prin HTTPS. Documentele pe hârtie se
          păstrează încuiate în salon, iar accesul la ele îl au doar persoanele
          care au nevoie de el pentru a-și face treaba.
        </p>
        <p>
          Dacă modificăm această politică, actualizăm data de la începutul
          paginii. Schimbările importante le anunțăm și pe pagina principală.
        </p>
      </>
    ),
  },
];

const ConfidentialitatePage = () => (
  <LegalPage
    eyebrow="Date personale"
    title={
      <>
        Politica de <span className="text-accent">confidențialitate.</span>
      </>
    }
    intro="Ce date îți cerem, de ce, cui ajung și cum le scoți înapoi. Fără formulări de umplutură — dacă ceva nu e clar, întreabă-ne."
    breadcrumbs={[
      { name: "Acasă", path: "/" },
      { name: "Confidențialitate", path: "/confidentialitate" },
    ]}
    sections={sections}
  />
);

export default ConfidentialitatePage;
