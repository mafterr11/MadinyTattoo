import Link from "next/link";

import LegalPage from "./LegalPage";
import { anpc, entity } from "../../lib/legal";
import { deposit } from "../../lib/deposit";
import { business, mailtoUrl, telUrl } from "../../lib/site";

const sections = [
  {
    title: "Cine suntem",
    body: (
      <>
        <p>
          Site-ul madinytattoo.ro este operat de{" "}
          {entity.companyName ?? business.name}, salon de tatuaje,
          micropigmentare, îndepărtare cu laser și piercing din București.
        </p>
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
        <p>
          Folosind site-ul, ești de acord cu termenii de mai jos. Dacă nu ești,
          te rugăm să nu îl folosești.
        </p>
      </>
    ),
  },
  {
    title: "Ce este și ce nu este acest site",
    body: (
      <>
        <p>
          Site-ul prezintă serviciile salonului și portofoliul de lucrări. Nu
          este un magazin online: nu poți cumpăra nimic de aici și nu se
          încasează plăți prin site.
        </p>
        <p>
          Formularul de programare nu rezervă nicio dată și nicio oră. El
          pregătește un mesaj pe care îl trimiți către noi pe WhatsApp, iar de
          acolo începe discuția. O programare este confirmată doar după ce
          stabilim împreună data și ora și după achitarea avansului, acolo unde
          se aplică.
        </p>
      </>
    ),
  },
  {
    title: "Prețurile afișate",
    body: (
      <>
        <p>
          Tarifele publicate pe <Link href="/servicii">pagina de servicii</Link>{" "}
          sunt <strong>prețuri de pornire și estimări</strong>, exprimate în lei
          și incluzând TVA acolo unde se aplică. Prețul final al unei lucrări
          depinde de dimensiune, complexitate, zonă, numărul de ședințe și
          timpul efectiv de lucru, și se stabilește la consultație, înainte de
          începerea lucrării.
        </p>
        <p>
          Ne rezervăm dreptul de a actualiza tarifele. Prețul convenit la
          consultație rămâne valabil pentru lucrarea respectivă.
        </p>
      </>
    ),
  },
  {
    title: "Programări și avans",
    body: (
      <>
        <p>
          Pentru confirmarea unei programări la tatuaj se percepe un avans între{" "}
          <strong>
            {deposit.min} și {deposit.max} lei
          </strong>
          , în funcție de costul total al lucrării. Avansul se scade din prețul
          final.
        </p>
        <p>Avansul nu se restituie dacă:</p>
        <ul>
          <li>nu te prezinți la programare;</li>
          <li>
            anunți dorința de reprogramare cu mai puțin de{" "}
            <strong>{deposit.noticeHours} de ore</strong> înainte de ora
            stabilită.
          </li>
        </ul>
        <p>
          Dacă ne anunți cu cel puțin {deposit.noticeHours} de ore înainte,
          căutăm împreună o dată nouă și avansul rămâne valabil. Condițiile
          complete sunt pe{" "}
          <Link href={`/servicii/tatuaje#${deposit.anchor}`}>
            pagina dedicată tatuajelor
          </Link>
          .
        </p>
        <p>
          Dacă anulăm noi o programare, îți restituim integral avansul sau îl
          reportăm pe o dată nouă, cum preferi.
        </p>
      </>
    ),
  },
  {
    title: "Condiții pentru efectuarea procedurilor",
    body: (
      <>
        <p>
          Tatuajul, micropigmentarea, piercingul și îndepărtarea cu laser sunt
          proceduri efectuate pe piele. Ca să le putem face în siguranță:
        </p>
        <ul>
          <li>
            trebuie să ai <strong>minimum 18 ani</strong> și să prezinți un act
            de identitate valabil;
          </li>
          <li>
            nu putem lucra dacă ești sub influența alcoolului sau a
            substanțelor;
          </li>
          <li>
            trebuie să ne informezi despre alergii, afecțiuni ale pielii,
            tratamente în curs, sarcină sau alăptare și orice altă condiție
            medicală relevantă;
          </li>
          <li>
            semnezi un consimțământ informat înainte de procedură, după ce ți se
            explică ce presupune și ce riscuri are.
          </li>
        </ul>
        <p>
          Ne rezervăm dreptul de a refuza sau întrerupe o procedură dacă aceste
          condiții nu sunt îndeplinite sau dacă apreciem că lucrarea nu poate fi
          făcută în siguranță. Într-un asemenea caz avansul se restituie, cu
          excepția situației în care informațiile ne-au fost ascunse.
        </p>
      </>
    ),
  },
  {
    title: "Rezultatul și îngrijirea ulterioară",
    body: (
      <>
        <p>
          Fiecare lucrare este realizată manual, pe un corp viu. Vindecarea și
          aspectul final depind în bună măsură de pielea ta și de felul în care
          respecți indicațiile de îngrijire. Numărul de ședințe necesare pentru
          îndepărtarea cu laser și gradul de estompare depind de cerneală, de
          vechimea tatuajului și de reacția organismului și nu pot fi garantate
          în avans.
        </p>
        <p>
          Instrucțiunile de îngrijire ți le dăm la finalul ședinței și le
          regăsești pe <Link href="/aftercare">pagina de aftercare</Link>. Nu
          răspundem pentru problemele apărute din nerespectarea lor sau din
          intervenția altcuiva asupra lucrării.
        </p>
        <p>
          Dacă ceva nu arată cum trebuie, contactează-ne. Retușurile se discută
          de la caz la caz.
        </p>
      </>
    ),
  },
  {
    title: "Fotografiile și conținutul site-ului",
    body: (
      <>
        <p>
          Fotografiile lucrărilor, textele și elementele grafice de pe site ne
          aparțin sau le folosim cu acordul autorilor. Nu le poți reproduce sau
          republica în scop comercial fără acordul nostru scris.
        </p>
        <p>
          Fotografiem lucrările pentru portofoliu. Publicarea unei fotografii în
          care apari se face doar cu acordul tău, cerut separat și pe care îl
          poți retrage oricând, așa cum scrie în{" "}
          <Link href="/confidentialitate">politica de confidențialitate</Link>.
        </p>
      </>
    ),
  },
  {
    title: "Reclamații și soluționarea disputelor",
    body: (
      <>
        <p>
          Dacă ai o nemulțumire, scrie-ne întâi nouă la{" "}
          <a href={mailtoUrl}>{business.email}</a> — în majoritatea cazurilor se
          rezolvă direct și repede.
        </p>
        <p>
          Dacă nu ajungem la o soluție, te poți adresa{" "}
          <a href={anpc.url} target="_blank" rel="noopener noreferrer">
            {anpc.name} ({anpc.short})
          </a>
          . Ai la dispoziție și{" "}
          <a href={anpc.salUrl} target="_blank" rel="noopener noreferrer">
            soluționarea alternativă a litigiilor (SAL)
          </a>{" "}
          și{" "}
          <a href={anpc.solUrl} target="_blank" rel="noopener noreferrer">
            platforma europeană SOL
          </a>
          .
        </p>
        <p>
          Acestor termeni li se aplică legea română, iar litigiile se
          soluționează de instanțele competente din București.
        </p>
      </>
    ),
  },
  {
    title: "Modificări",
    body: (
      <p>
        Putem actualiza acești termeni. Versiunea aplicabilă este cea publicată
        pe site la data la care ne contactezi, iar data ultimei modificări este
        afișată la începutul paginii.
      </p>
    ),
  },
];

const TermeniPage = () => (
  <LegalPage
    eyebrow="Termeni"
    title={
      <>
        Termeni și <span className="text-accent">condiții.</span>
      </>
    }
    intro="Cum funcționează programările, ce înseamnă prețurile afișate, ce ne trebuie de la tine înainte de o procedură și unde te adresezi dacă ceva nu merge."
    breadcrumbs={[
      { name: "Acasă", path: "/" },
      { name: "Termeni și condiții", path: "/termeni" },
    ]}
    sections={sections}
  />
);

export default TermeniPage;
