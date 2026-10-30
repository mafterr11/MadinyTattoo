import { tattooPricing } from "./pricing";
import { getService } from "./servicesDetail";
import { serviceProcess } from "./serviceProcess";

const tattoo = getService("tatuaje");
const piercing = getService("piercing");
const lowestTattooPrice = Math.min(
  ...tattooPricing.flatMap((category) =>
    category.tiers.map((tier) => tier.min).filter(Number.isFinite),
  ),
);

export const tattooFaq = [
  {
    question: "Ce informații să trimit pentru o estimare de preț?",
    answer: `${serviceProcess.tatuaje.steps[0].body} ${tattoo.priceNote} Tarifele afișate pornesc de la ${lowestTattooPrice} RON.`,
  },
  {
    question: "Pot trimite o imagine de referință pentru tatuaj?",
    answer:
      "Da. Trimite imaginile care te inspiră și spune-ne ce elemente sau stil ai vrea să păstrăm. Le folosim ca punct de pornire pentru un design personalizat, nu alegem un model dintr-un catalog.",
  },
  {
    question: "Aprob schița înainte să înceapă procedura?",
    answer: serviceProcess.tatuaje.steps[1].body,
  },
  {
    question: "Cum mă pregătesc pentru ședința de tatuaj?",
    answer:
      "Pentru recomandările de pregătire valabile înaintea programării tale, contactează studioul. Îți putem oferi îndrumarea potrivită după ce știm detaliile ședinței.",
    linkHref: "/contact",
    linkLabel: "Contactează studioul",
  },
  {
    question: "Unde găsesc instrucțiunile de îngrijire după tatuaj?",
    answer: serviceProcess.tatuaje.steps[4].body,
    linkHref: "/aftercare",
    linkLabel: "Citește ghidul de aftercare",
  },
];

export const piercingFaq = [
  {
    question: "Cât costă un piercing și ce include prețul?",
    answer: `Un piercing costă ${piercing.priceFrom}. Prețul include realizarea piercingului, o bijuterie sterilă din titan pur și sfaturi pentru îngrijire post-procedură.`,
  },
  {
    question: "Cum aleg tipul de piercing potrivit pentru mine?",
    answer:
      "Discutăm împreună ce tip de piercing îți dorești și ce opțiuni sunt disponibile pentru zona aleasă, ca să poți decide informat.",
  },
  {
    question: "Cum fac o programare pentru piercing?",
    answer:
      "Folosește butonul de programare de pe pagină pentru a începe rezervarea. Dacă vrei să întrebi ceva înainte, ne poți scrie prin pagina de contact.",
    linkHref: "/contact",
    linkLabel: "Contactează studioul",
  },
  {
    question: "Pe cine contactez dacă am întrebări despre îngrijire?",
    answer:
      "Sfaturile de îngrijire sunt incluse în preț. Dacă ai o întrebare despre piercingul tău după vizită, contactează studioul pentru îndrumare.",
    linkHref: "/contact",
    linkLabel: "Scrie-ne prin pagina de contact",
  },
];
