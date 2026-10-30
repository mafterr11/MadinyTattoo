# Hasha Tattoo vs. Madiny Tattoo — investigație SEO

Data verificării: 30 octombrie 2026. Domenii: `www.hasha-tattoo.ro` și `www.madinytattoo.ro`.

## Concluzie

Diferența observabilă cea mai mare este acoperirea căutărilor: Hasha publică pagini pentru servicii specifice, stiluri, întrebări și zone. Madiny concentrează aceste subiecte într-un număr mic de pagini generale. Aceasta este o explicație plauzibilă pentru vizibilitate mai largă, nu dovada cauzei unei anumite poziții Google.

La Madiny există și o neconcordanță tehnică verificată între redirecționări și URL-urile canonical. Merită corectată înaintea extinderii conținutului.

## Ce am verificat

- Sitemapurile și robots.txt pentru ambele domenii.
- HTML-ul inițial al paginilor principale; titluri, H1, canonical, robots, linkuri și tipurile JSON-LD.
- Hasha: pagina centrală de zone, sectoarele 1, 2 și 4, paginile de realism și piercing ureche.
- Madiny: homepage, tatuaje și portofoliu; configurația SEO din repository.
- Exemple de mențiuni publice și documentația oficială Google relevantă.

Nu am avut date Search Console sau un raport de poziții localizat. Rapoartele Semrush nu au fost disponibile din cauza lipsei unităților API. Nu am măsurat Core Web Vitals și nu am făcut un inventar complet al backlinkurilor.

## 1. Acoperire mult mai largă

| Element | Hasha | Madiny |
| --- | ---: | ---: |
| URL-uri în sitemap | 67 | 12 |
| Pagini individuale `/zone/…` | 14 | 0 |
| Articole individuale `/ghiduri/…` | 23 | 0 |
| Pagini individuale `/stiluri/…` | 3 | 0 |

Madiny are o pagină generală de aftercare. Cifra zero pentru ghiduri indică absența seriei de articole, nu absența oricărui conținut informativ.

Hasha are în plus 11 pagini specializate pentru servicii și stiluri: realism, black and grey, cover-up, corectări și șapte categorii de piercing. Paginile de realism și piercing ureche au răspuns HTTP 200, titluri și canonical proprii, conținut specific și linkuri către servicii înrudite.

Surse: [sitemap Hasha](https://www.hasha-tattoo.ro/sitemap.xml), [sitemap Madiny](https://www.madinytattoo.ro/sitemap.xml), [realism](https://www.hasha-tattoo.ro/tatuaje-realism-bucuresti), [piercing ureche](https://www.hasha-tattoo.ro/piercing-ureche-bucuresti).

Aceste cifre descriu URL-uri declarate în sitemap. Nu sunt numere de pagini indexate, poziții sau trafic. Google precizează că [un sitemap nu garantează indexarea](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview).

## 2. Cum funcționează paginile de zone

Paginile nu sunt în meniul principal. HTML-ul homepage-ului include în footer linkul „Zone și cartiere”, în grupul suplimentar al navigării. Pagina `/zone` trimite către cele 14 zone; paginile individuale au și linkuri între ele și spre servicii. Toate sunt declarate în sitemap.

Pentru `/zone/sector-2` am confirmat:

- HTTP 200 și canonical către propria adresă.
- Titlu și H1 care vizează tatuajele și piercingul pentru Sectorul 2.
- Descriere dedicată, cu referire la Colentina și Pantelimon.
- Conținut HTML disponibil fără executarea JavaScript: acces, servicii, prețuri, întrebări și programare.
- Adresa reală din Sectorul 4 este explicată în text. Pagina nu prezintă un al doilea sediu fizic în Sectorul 2.

Surse: [zone](https://www.hasha-tattoo.ro/zone), [Sector 2](https://www.hasha-tattoo.ro/zone/sector-2), [Sector 1](https://www.hasha-tattoo.ro/zone/sector-1), [Sector 4](https://www.hasha-tattoo.ro/zone/sector-4).

Interpretare: fiecare pagină oferă o destinație pentru o căutare geografică mai specifică. Absența din meniul principal nu împiedică descoperirea prin linkuri interne sau sitemap.

Limita strategiei: paginile pentru sectoarele 1 și 2 folosesc aceeași structură și mult conținut comun; diferențele sunt în introducere, referințele geografice și rute. Existența lor nu dovedește că fiecare este indexată sau aduce clienți. Pagini geografice repetate, create doar pentru a trimite utilizatorul la aceeași destinație, pot intra în categoria [doorway abuse](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse). Nu există aici dovezi despre o penalizare a Hasha.

## 3. Problemă tehnică verificată la Madiny

| URL solicitat | Răspuns observat |
| --- | --- |
| `http://madinytattoo.ro/` | 308 către HTTPS fără www |
| `https://madinytattoo.ro/` | 308 către `https://www.madinytattoo.ro/` |
| `https://www.madinytattoo.ro/` | 200, canonical către `https://madinytattoo.ro` |
| `https://madinytattoo.ro/servicii/tatuaje` | 308 către aceeași cale pe www |

Pagina de tatuaje publicată pe www declară și ea canonical fără www. Sitemapul și robots.txt indică adrese fără www. Astfel, redirecționarea recomandă www, iar canonical și sitemapul recomandă varianta care redirecționează.

În repository, `lib/siteUrl.js` definește varianta fără www și conține un comentariu despre direcția redirecționării care contrazice comportamentul public observat. Fișierul este folosit de metadate, JSON-LD și configurația sitemapului.

Recomandare: alinierea tuturor semnalelor la www, dacă aceasta rămâne configurația hostingului, apoi verificare în Search Console. Google tratează [redirecturile și canonical drept semnale de canonicalizare](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). Neconcordanța nu dovedește o penalizare sau cauza întregului decalaj.

Madiny are deja titluri, descrieri, H1 relevant pe pagina de tatuaje, HTML cu conținut, sitemap, robots permisiv și date structurate. Aceste verificări nu indică o blocare generală a crawlării.

## 4. Reputație și consistența datelor locale

Hasha este menționat într-un [articol DivaHair datat 23 martie 2014](https://www.divahair.ro/timp_liber/cat_costa_un_tatuaj_si_unde_poti_sa_ti-l_faci_in_bucuresti). Acesta confirmă o prezență publică veche a brandului, nu vechimea exactă a domeniului și nici un avantaj măsurat al backlinkurilor.

La Madiny am observat date publice nealiniate:

- Site-ul afișează telefonul 0741 620 774 și închiderea la 19:00.
- [Cylex](https://bucuresti.cylex.ro/firma/madiny%2Btattoo-1395434.html) afișează același telefon, dar închiderea la 18:00.
- [TOP 100 of Romania](https://www.top100ofromania.eu/company/6141660/madiny-tattoo) afișează telefonul 0738 621 354 și închiderea la 18:00.

Acestea sunt diferențe între surse, nu dovada că programul site-ului este cel corect. Datele operaționale trebuie confirmate înainte de actualizarea listărilor.

Pentru rezultatele Maps, Google descrie [relevanța, distanța și notorietatea](https://support.google.com/business/answer/7091?hl=en) ca factori principali. Pagini pentru alte sectoare nu mută sediul fizic și nu garantează prezența în Maps în acele zone.

## Priorități recomandate

1. Alinierea canonical, sitemap și redirecturi la același domeniu; verificarea URL-urilor principale în Search Console.
2. Consolidarea căutărilor din Pipera și alegerea unui număr mic de zone apropiate, pe baza accesului real și a cererii. Fiecare pagină trebuie să ofere informații locale utile și să precizeze adresa reală.
3. Pagini distincte pentru stilurile cu portofoliu real: fine line, color, realism, brodat. Selecția se validează cu artiștii și datele de căutare; nu este necesară copierea întregii structuri Hasha.
4. Ghiduri pentru întrebări care preced programarea: cost, primul tatuaj, vindecare, pregătire. Conținutul despre sănătate și îngrijire necesită verificare competentă înaintea publicării.
5. Alinierea datelor de contact și programului în profilul Google și listările relevante; urmărirea recenziilor autentice și a programărilor rezultate din căutare.

Validarea impactului: Search Console pe pagină și căutare, comparații pe perioade comparabile, țara România și separarea căutărilor de brand. Pentru Maps este necesară monitorizare din locații fixe. Datele `lastmod` din sitemapul Hasha, 16 și 28 octombrie 2026, nu stabilesc când au fost create paginile sau dacă ele explică poziții observate anterior.
