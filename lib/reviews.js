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
 * The headline score as Google shows it on the profile.
 *
 * `count` is optional and deliberately unset: the profile total has not been
 * confirmed, so the structured data falls back to the number of reviews this
 * page actually displays rather than claiming a figure nobody checked. Add
 * `count: <total>` once it is known.
 *
 * @type {{ score: number, count?: number } | null}
 */
export const googleRating = { score: 5 };

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

/**
 * "Vezi toate pe Google" — the place page opened straight on its reviews tab
 * (that is what the `!9m1!1b1` segment does), rather than the plain map pin
 * used elsewhere on the site.
 */
export const googleProfileUrl =
  "https://www.google.ro/maps/place/Madiny+Tattoo/@44.4857646,26.1075064,15z/data=!4m18!1m9!3m8!1s0x40b203567ff26e41:0x3c22c06af60c1061!2sMadiny+Tattoo!8m2!3d44.4857935!4d26.1073631!9m1!1b1!16s%2Fg%2F11vjb442cp!3m7!1s0x40b203567ff26e41:0x3c22c06af60c1061!8m2!3d44.4857935!4d26.1073631!9m1!1b1!16s%2Fg%2F11vjb442cp";

/** Highest rating first; original order preserved within the same rating. */
export const sortedReviews = () =>
  [...reviews].sort((a, b) => b.rating - a.rating);

export const hasGoogleReviews = () => reviews.length > 0;
