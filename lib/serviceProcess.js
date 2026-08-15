/**
 * "Cum decurge" walkthroughs for the dedicated service pages.
 *
 * Every step restates something the site already commits to elsewhere — the
 * highlights in servicesDetail.js, the deposit policy on the tattoo page, the
 * laser FAQ — rather than introducing new promises. Two steps describe how the
 * skin behaves afterwards (micropigmentare 04, laser 03); those are general to
 * the procedure, not studio-specific claims.
 */

export const serviceProcess = {
  micropigmentare: {
    title: "Cum decurge o ședință",
    lead: "De la prima discuție până la retuș, ca să știi exact la ce să te aștepți.",
    steps: [
      {
        title: "Consultație și formă",
        body: "Discutăm ce îți dorești, iar forma o desenăm și o aprobi înainte să începem. Nu trecem mai departe până nu ești mulțumită de contur.",
      },
      {
        title: "Alegerea nuanței",
        body: "Pigmentul îl alegem după tonul pielii tale și după culoarea naturală a firului, ca rezultatul să se vadă discret.",
      },
      {
        title: "Procedura",
        body: "Lucrăm fir cu fir, cu răbdare, urmărind exact forma stabilită împreună.",
      },
      {
        title: "Vindecarea",
        body: "În primele zile culoarea pare mai intensă, apoi se așază pe măsură ce pielea se reface.",
      },
      {
        title: "Retușul",
        body: "După vindecare reglăm intensitatea și completăm zonele unde pigmentul a prins mai puțin.",
      },
    ],
  },

  tatuaje: {
    title: "Cum decurge o ședință",
    lead: "De la ideea din cap până la ghidul de îngrijire primit la final.",
    steps: [
      {
        title: "Ideea",
        body: "Ne spui ce vrei, pe ce zonă și cât de mare. Discutăm stilul și ce se poate face realist pe zona aleasă.",
      },
      {
        title: "Schița",
        body: "Desenăm special pentru tine, nu alegem dintr-un catalog. Ședința începe abia după ce schița îți place cu adevărat.",
      },
      {
        title: "Programarea",
        body: "Rezervăm data cu un avans între 100 și 400 lei, în funcție de costul total al tatuajului.",
      },
      {
        title: "Ședința",
        body: "Lucrăm cu ace și cartușe sterile, de unică folosință, desfăcute în fața ta.",
      },
      {
        title: "Îngrijirea",
        body: "Primești ghidul de îngrijire la finalul ședinței, ca vindecarea să decurgă fără surprize.",
      },
    ],
  },

  laser: {
    title: "Cum decurge tratamentul",
    lead: "Eliminarea unui tatuaj este un proces în etape, nu o singură ședință.",
    steps: [
      {
        title: "Evaluarea",
        body: "La prima vizită estimăm câte ședințe sunt realiste pentru tatuajul tău și îți spunem sincer la ce rezultat să te aștepți.",
      },
      {
        title: "Ședința",
        body: "Impulsuri de lumină concentrată fragmentează particulele de cerneală din piele.",
      },
      {
        title: "Pauza dintre ședințe",
        body: "Ședințele se programează la câteva săptămâni distanță, ca pielea să aibă timp să se refacă.",
      },
      {
        title: "Repetarea",
        body: "Numărul total de ședințe diferă în funcție de dimensiunea, culoarea și vechimea tatuajului.",
      },
    ],
  },
};
