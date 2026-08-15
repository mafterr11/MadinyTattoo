import { business } from "./site";

/**
 * Reviews from the studio's Google profile, transcribed verbatim.
 *
 * Nothing here is written by us: the text, the names and the ratings are
 * exactly as they appear publicly on Google. Photos attached to the reviews
 * are not reproduced.
 *
 * TO ADD A REVIEW
 *   { author, rating (1-5), text, date }
 * Order does not matter — the section sorts by rating, highest first. Use
 * "\n\n" for paragraph breaks inside `text`.
 */

/**
 * The headline score and review count, exactly as Google shows them on the
 * profile. Left null until those two figures are confirmed: an invented
 * aggregate is precisely the kind of markup Google issues manual actions for.
 * Fill as: { score: 4.9, count: 87 }
 *
 * @type {{ score: number, count: number } | null}
 */
export const googleRating = null;

/** @type {Array<{ author: string, rating: number, text: string, date?: string }>} */
export const reviews = [
  {
    author: "Diu Diana",
    rating: 5,
    date: "acum 6 luni",
    text: "Recomand cu toata inima! Madalina este extrem de atenta la detalii, m-a ajutat enorm cu realizarea tatuajului si are si o mana super usoara. Am doar cuvinte de lauda pentru ea. Cu siguranta ma voi intoarce! Multumesc pentru minunatul tatuaj ❤️",
  },
  {
    author: "Simona Drăghici",
    rating: 5,
    date: "acum 6 luni",
    text: "Mi-am facut la Madiny 5 tatuaje deja si tot la ea o sa revin mereu. Piersica mi-a intrecut orice asteptare, e cel mai frumos si cel mai complimentat tatuaj pe care il am.\n\nMadalina e un artist desăvârșit, foarte prietenoasa si pasionata de ceea ce face. Iar colega ei, Alexandra, de asemenea.\n\nRecomand!!",
  },
  {
    author: "Anastasia Pavaloiu",
    rating: 5,
    date: "acum 6 luni",
    text: "Atmosferă relaxată, igienă de nota 10 și artiști extrem de talentați care acordă o atenție deosebită detaliilor. Rezultatul final a depășit așteptările. Recomand cu toată încrederea pentru oricine caută calitate și profesionalism!",
  },
  {
    author: "Florian Manole",
    rating: 5,
    date: "acum 6 luni",
    text: "Madalina e profesionista de fiecare data, atenta la ce imi doresc de la tatuaje, atenta la detalii. Merg cu incredere la ea mereu. 🙏",
  },
  {
    author: "Nataša K.",
    rating: 5,
    date: "acum 2 ani",
    // Shown on Google as translated from English.
    text: "Îmi plac tatuajele mele. Cea mai bună artistă din lume. A avut atâta răbdare în tot acest proces, pentru că am încercat un milion de locuri și poziții. Mi-a fost și foarte frică, iar ea m-a calmat cu aura ei pozitivă. Recomand 10/10.",
  },
  {
    author: "Jeni Beni",
    rating: 5,
    date: "acum 2 ani",
    text: "Super persoana, super salon si profesionalitatea de care a dat dovada. Igiena pentru mine a fost pe primul loc si n-a dezamagit.\n\nProbabil ma uraste acum ca nu i-am trimis poza dupa 2 saptamani, dar tot 5 stele merită!\n\nPana la urmatorul!\nStay tuned!",
  },
  {
    author: "Alexia M",
    rating: 5,
    date: "acum 2 ani",
    text: "Am văzut postările, mi-au plăcut enorm și mi-am dorit să realizeze primul meu tatuaj. Este cu mult peste așteptările mele 🥰 I-am dat câteva detalii despre ce aș vrea, dar nici eu nu aveam o imagine clară în minte. Ajunsă la fața locului, avea câteva modele pregătite și am fost atât de plăcut surprinsă când am realizat că erau exact ce îmi doream, a fost chiar dificil să aleg dintre ele 😄 Pe scurt, absolut totul a fost excepțional, recomand cu drag 😍",
  },
  {
    author: "Teodora Vasiloiu",
    rating: 5,
    date: "acum 2 ani",
    // Shown on Google as translated from English.
    text: "Cea mai bună artistă tatuatoare pe care am întâlnit-o vreodată, DE DEPARTE. Dacă ești din București sau vizitezi Bucureștiul și vrei să-ți faci un tatuaj, ea este cu siguranță cea mai bună alegere. Te pot asigura personal că nu vei regreta alegerea ta. 1000/10",
  },
];

/** Where "Vezi toate pe Google" points. */
export const googleProfileUrl = business.mapsUrl;

/** Highest rating first; original order preserved within the same rating. */
export const sortedReviews = () =>
  [...reviews].sort((a, b) => b.rating - a.rating);

export const hasGoogleReviews = () => reviews.length > 0;
