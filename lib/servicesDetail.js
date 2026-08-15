import {
  laserSizePricing,
  micropigmentarePricing,
  tattooPricing,
} from "./pricing";

/**
 * Everything the /servicii explorer shows for one service, in one place.
 *
 * Figures are derived from lib/pricing.js rather than retyped, so a tab panel
 * can never quote a price the dedicated service page contradicts. Each entry
 * still links to its own page — the panel is the summary, the page is the
 * full story.
 */
export const serviceDetails = [
  {
    key: "tatuaje",
    title: "Tatuaje",
    path: "/servicii/tatuaje",
    tagline: "Design personalizat, desenat de la zero",
    image: "/backgrounds/tatuaje.webp",
    imageAlt:
      "Tatuator Madiny Tattoo lucrând un tatuaj în studioul din București",
    intro:
      "Pornim de la ideea ta și o transformăm într-un desen făcut special pentru tine — nu alegem dintr-un catalog. Discutăm stilul, dimensiunea și zona, iar ședința începe abia după ce schița îți place cu adevărat.",
    highlights: [
      "Consultație și schiță înainte de programare",
      "Alb/negru, color, contur fin sau brodat",
      "Ace și cartușe sterile, de unică folosință",
      "Ghid de îngrijire primit la finalul ședinței",
    ],
    priceFrom: "de la 300 RON",
    priceGroups: tattooPricing.map((item) => ({
      title: item.title,
      tiers: item.tiers,
    })),
    priceNote:
      "Prețul final depinde de dimensiune, complexitate și zona aleasă. Programarea se confirmă cu un avans între 100 și 400 lei, în funcție de costul total al tatuajului.",
    ctaLabel: "Toate tarifele pentru tatuaje",
  },
  {
    key: "micropigmentare",
    title: "Micropigmentare",
    path: "/servicii/micropigmentare",
    tagline: "Trăsături conturate natural, fir cu fir",
    image: "/backgrounds/micropigmentare.webp",
    imageAlt:
      "Ședință de micropigmentare a sprâncenelor la Madiny Tattoo București",
    // The subject sits right of centre in this frame, so the crop is nudged
    // across instead of cutting the artist in half.
    imagePosition: "object-[62%_center]",
    intro:
      "Sprâncene și buze desenate cu răbdare, în tonuri care se potrivesc cu trăsăturile tale. Forma o stabilim împreună înainte de prima trecere, iar rezultatul rămâne subtil — se vede grija, nu procedura.",
    highlights: [
      "Sprâncene și buze, conturate natural",
      "Forma desenată și aprobată înainte de procedură",
      "Nuanța pigmentului aleasă după tonul tău",
      "Retuș disponibil pentru intensitatea culorii",
    ],
    // The 200 RON retouch is an add-on, not an entry price — quoting it here
    // would undersell the procedure itself.
    priceFrom: "de la 800 RON",
    priceGroups: [
      {
        title: "Proceduri",
        tiers: micropigmentarePricing.map((item) => ({
          label: item.title,
          price: item.tiers[0].price,
        })),
      },
    ],
    priceNote:
      "Retușul menține conturul și intensitatea culorii după vindecare. Scrie-ne pentru o recomandare potrivită trăsăturilor tale.",
    ctaLabel: "Detalii micropigmentare",
  },
  {
    key: "laser",
    title: "Laser",
    path: "/servicii/laser",
    tagline: "Eliminarea tatuajelor, ședință cu ședință",
    image: "/backgrounds/laser.webp",
    imageAlt:
      "Ședință de eliminare a tatuajelor cu laser la Madiny Tattoo București",
    intro:
      "Impulsuri de lumină concentrată fragmentează particulele de cerneală, iar corpul le elimină treptat. Nu promitem un rezultat instant: îți spunem sincer câte ședințe sunt realiste pentru tatuajul tău.",
    highlights: [
      "Estimarea numărului de ședințe la prima vizită",
      "Ședințe programate la câteva săptămâni distanță",
      "Cerneala neagră și tonurile închise răspund cel mai bine",
      "Funcționează și pentru corectarea micropigmentării",
    ],
    priceFrom: "de la 200 RON",
    priceGroups: [
      {
        title: "Ședință sprâncene",
        tiers: [{ label: "Micropigmentare sprâncene", price: "300 RON" }],
      },
      {
        title: "În funcție de dimensiune",
        tiers: laserSizePricing,
        wide: true,
      },
    ],
    priceNote:
      "Prețul este pe ședință. Numărul de ședințe diferă în funcție de dimensiunea, culoarea și vechimea tatuajului.",
    ctaLabel: "Tarife laser și întrebări frecvente",
  },
  {
    key: "piercing",
    title: "Piercing",
    path: "/servicii/piercing",
    tagline: "Titan pur, de la prima zi",
    image: "/backgrounds/piercing.webp",
    imageAlt: "Studioul Madiny Tattoo din București, cu firma de neon pe perete",
    intro:
      "Un piercing făcut corect doare mai puțin și se vindecă mai repede. Te ajutăm să alegi tipul potrivit, lucrăm cu instrumente sigilate și pornim exclusiv cu bijuterii din titan pur, hipoalergenic.",
    highlights: [
      "Bijuterie sterilă din titan pur, inclusă în preț",
      "Instrumente sigilate, de unică folosință",
      "Titan recomandat 2-3 luni, până la vindecare",
      "Consiliere pentru piercingul care ți se potrivește",
    ],
    priceFrom: "200 RON",
    priceGroups: [
      {
        title: "Orice piercing",
        tiers: [
          { label: "Preț per piercing", price: "200 RON" },
          { label: "Bijuterie din titan", price: "Inclusă" },
          { label: "Sfaturi de îngrijire", price: "Incluse" },
        ],
      },
    ],
    priceNote:
      "După vindecare poți trece la alte materiale sigure — te ghidăm noi în alegere.",
    ctaLabel: "Tot despre piercing",
  },
];

export default serviceDetails;
