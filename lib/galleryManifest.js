/**
 * Every portfolio image.
 *
 * Written as CommonJS on purpose: next.config.js needs the same list to build
 * the redirects from the old tattoo1..tattoo24 filenames, and `require` there
 * is the only way to keep one source of truth for both.
 *
 * `file` doubles as an SEO signal — Google Images reads the filename — so each
 * one describes the piece rather than its position. `alt` describes the same
 * thing for a screen reader, and is what Google reads for image context.
 *
 * `artist` is the key of whoever tattooed the piece, from lib/artists.js. It
 * is what the "Toate / Mădălina / Alexandra" filter on the portfolio reads, so
 * an entry without one would silently drop out of both artist tabs.
 *
 * ## Position in the array is history; `order` is what visitors see
 *
 * The first 24 entries sit in their historic tattoo1..tattoo24 positions, and
 * the redirect map in next.config.js reads them by index — so **never reorder
 * this array, and always append**. To move a piece around the page, change its
 * `order` instead: lib/gallery.js sorts on it, lowest first.
 *
 * Numbers go up in tens, which leaves room to drop a piece between two others
 * without renumbering the rest. Alexandra's work sits on the fives between
 * them — 15, 25, 35 — which is what makes the unfiltered portfolio alternate
 * between the two artists instead of showing all of one and then all of the
 * other.
 *
 * ## Adding a photo
 *
 *   1. Save it to public/gallery/ under a name that describes the work.
 *   2. Append an entry here with an `alt` that describes it too, the
 *      `artist` who made it, and an `order` — low to put it near the front.
 *   3. `npm run images` — re-encodes it to a sane weight and bakes the blur
 *      placeholder the grid fades up from. Both steps skip work already done,
 *      so re-running over the whole folder is safe.
 */
module.exports = [
  {
    file: "tatuaj-insecte-fluture-libelula-color.webp",
    alt: "Tatuaj color pe antebraț cu insecte — fluture monarh, libelulă, albină și gândac",
    artist: "madalina",
    order: 130,
  },
  {
    file: "tatuaj-personaj-albastru-desene-animate-color.webp",
    alt: "Tatuaj color pe braț cu un personaj albastru din desene animate",
    artist: "madalina",
    order: 140,
  },
  {
    file: "tatuaj-fineline-scena-suprarealista-craniu.webp",
    alt: "Tatuaj fine line pe antebraț cu o scenă suprarealistă și un craniu roșu",
    artist: "madalina",
    order: 150,
  },
  {
    file: "tatuaj-creatura-fantastica-color.webp",
    alt: "Tatuaj color pe antebraț cu o creatură fantastică",
    artist: "madalina",
    order: 160,
  },
  {
    file: "tatuaj-floarea-soarelui-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu floarea-soarelui",
    artist: "madalina",
    order: 170,
  },
  {
    file: "tatuaj-fineline-scena-abstracta.webp",
    alt: "Tatuaj fine line pe braț cu o scenă abstractă",
    artist: "madalina",
    order: 180,
  },
  {
    file: "tatuaj-craniu-animal-geometric-blackwork.webp",
    alt: "Tatuaj blackwork pe antebraț cu un craniu de animal într-o compoziție geometrică",
    artist: "madalina",
    order: 190,
  },
  {
    file: "tatuaj-colaj-micro-tatuaje-alb-negru.webp",
    alt: "Colaj de micro-tatuaje alb-negru pe antebraț",
    artist: "madalina",
    order: 200,
  },
  {
    file: "tatuaj-panda-costum-pilot-curse-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu un panda în costum de pilot de curse",
    artist: "madalina",
    order: 210,
  },
  {
    file: "tatuaj-cowboy-fineline-cu-text.webp",
    alt: "Tatuaj fine line pe braț cu o siluetă de cowboy și text",
    artist: "madalina",
    order: 220,
  },
  {
    file: "tatuaj-personaj-verde-science-fiction-color.webp",
    alt: "Tatuaj color pe braț cu un personaj verde din science fiction",
    artist: "madalina",
    order: 230,
  },
  {
    file: "tatuaj-masca-demon-oni-color.webp",
    alt: "Tatuaj color pe antebraț cu o mască de demon oni",
    artist: "madalina",
    order: 240,
  },
  {
    file: "tatuaje-fineline-simboluri-magie.webp",
    alt: "Tatuaje fine line pe braț cu simboluri magice și urme de lăbuțe",
    artist: "madalina",
    order: 250,
  },
  {
    file: "tatuaj-silueta-feminina-linii-rosii.webp",
    alt: "Tatuaj cu linii roșii pe coaste, siluetă feminină",
    artist: "madalina",
    order: 260,
  },
  {
    file: "tatuaj-portret-caine-realist-alb-negru.webp",
    alt: "Tatuaj realist alb-negru pe antebraț cu portretul unui câine",
    artist: "madalina",
    order: 270,
  },
  {
    file: "tatuaj-personaj-anime-palarie-de-paie-color.webp",
    alt: "Tatuaj color pe mână cu un personaj anime cu pălărie de paie",
    artist: "madalina",
    order: 280,
  },
  {
    file: "tatuaj-albina-realista-color.webp",
    alt: "Tatuaj color realist pe antebraț cu o albină",
    artist: "madalina",
    order: 290,
  },
  {
    file: "tatuaj-fineline-portret-suprarealist-cu-text.webp",
    alt: "Tatuaj fine line pe umăr cu un portret suprarealist și text",
    artist: "madalina",
    order: 300,
  },
  {
    file: "tatuaj-pisica-cu-semiluna-color.webp",
    alt: "Tatuaj color pe braț cu o pisică ce atinge o semilună",
    artist: "madalina",
    order: 310,
  },
  {
    file: "tatuaj-aripi-si-medalion-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu aripi, medalion și text",
    artist: "madalina",
    order: 320,
  },
  {
    file: "tatuaj-gandac-stilizat-color.webp",
    alt: "Tatuaj color pe braț cu un gândac stilizat",
    artist: "madalina",
    order: 330,
  },
  {
    file: "tatuaje-pereche-munte-si-val-calm-chaos.webp",
    alt: "Tatuaje pereche pe antebrațe — munte cu textul CALM și val cu textul chaos",
    artist: "madalina",
    order: 340,
  },
  {
    file: "tatuaj-inger-inaripat-cu-busola-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu un înger înaripat, busolă și text",
    artist: "madalina",
    order: 350,
  },
  {
    file: "tatuaj-silueta-in-cadru-alb-negru.webp",
    alt: "Tatuaj alb-negru pe coaste cu o siluetă într-un cadru",
    artist: "madalina",
    order: 360,
  },
  // Appended below the historic 24 — order is what puts these first on the
  // page, not their position here.
  {
    file: "tatuaj-femeie-nori-stropi-apa-color.webp",
    alt: "Tatuaj color pe braț cu o femeie cu părul din nori și un val de apă",
    artist: "madalina",
    order: 10,
  },
  {
    file: "tatuaj-om-vitruvian-inaripat-astronomie-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu omul vitruvian înaripat și un glob astronomic",
    artist: "madalina",
    order: 20,
  },
  {
    file: "tatuaj-colaj-suprarealist-ceas-topit-color.webp",
    alt: "Tatuaj color pe braț cu un colaj suprarealist — portret rupt, ceas topit și o fată cu patru ochi",
    artist: "madalina",
    order: 30,
  },
  {
    file: "tatuaj-catelus-bernez-in-galeata-color.webp",
    alt: "Tatuaj color pe braț cu un cățeluș bernez într-o găleată și o fundă",
    artist: "madalina",
    order: 40,
  },
  {
    file: "tatuaj-inghetata-broasca-testoasa-color.webp",
    alt: "Tatuaj color pe gambă cu o înghețată cu broască țestoasă și palmieri",
    artist: "madalina",
    order: 50,
  },
  {
    file: "tatuaj-groot-never-give-up-color.webp",
    alt: "Tatuaj color pe braț cu Baby Groot și textul Never give up",
    artist: "madalina",
    order: 60,
  },
  {
    file: "tatuaj-pisica-realista-alb-negru.webp",
    alt: "Tatuaj realist alb-negru pe braț cu capul unei pisici",
    artist: "madalina",
    order: 70,
  },
  {
    file: "tatuaj-maini-pe-fata-pastile-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu mâini acoperind fața și o pastilă",
    artist: "madalina",
    order: 80,
  },
  {
    file: "tatuaj-zana-pe-carte-color.webp",
    alt: "Tatuaj color pe antebraț cu o zână așezată pe o carte deschisă",
    artist: "madalina",
    order: 90,
  },
  {
    file: "tatuaj-laba-caine-in-interior-alb-negru.webp",
    alt: "Tatuaj alb-negru pe braț cu o labă de câine cu chipul cățelului în interior",
    artist: "madalina",
    order: 100,
  },
  {
    file: "tatuaj-inger-fazele-lunii-randunele-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu un înger fără chip, fazele lunii și rândunele",
    artist: "madalina",
    order: 110,
  },
  {
    file: "tatuaj-maneca-florala-sarpe-pasare-umar.webp",
    alt: "Tatuaj mânecă florală pe umăr și braț cu un șarpe și o rândunică",
    artist: "madalina",
    order: 120,
  },
  // Alexandra's work. Appended like everything else — `order` is what threads
  // it through Mădălina's pieces on the page.
  {
    file: "tatuaj-doua-pisici-cutie-bonete-color.webp",
    alt: "Tatuaj color pe braț cu două pisici într-o cutie de carton, purtând bonete de dantelă",
    artist: "alexandra",
    order: 15,
  },
  {
    file: "tatuaj-hublou-avion-apus-nori-color.webp",
    alt: "Tatuaj color pe braț cu un hublou de avion și un apus înflăcărat printre nori",
    artist: "alexandra",
    order: 25,
  },
  {
    file: "tatuaj-floare-clopotel-albastru-fineline.webp",
    alt: "Tatuaj fine line pe braț cu o floare de clopoțel albastru",
    artist: "alexandra",
    order: 35,
  },
  {
    file: "tatuaje-pereche-ursuleti-jeleu-roz-antebrate.webp",
    alt: "Tatuaje pereche pe antebrațe cu ursuleți de jeleu roz cu inimioară albastră",
    artist: "alexandra",
    order: 45,
  },
  {
    file: "tatuaj-capsuna-ciocolata-alba-funda-gamba-color.webp",
    alt: "Tatuaj color pe gambă cu o căpșună înmuiată în ciocolată albă și o fundă roz",
    artist: "alexandra",
    order: 55,
  },
  {
    file: "tatuaj-creveta-realist-color.webp",
    alt: "Tatuaj color realist pe picior cu o crevetă",
    artist: "alexandra",
    order: 65,
  },
  {
    file: "tatuaj-mac-si-mana-kintsugi-fineline-color.webp",
    alt: "Tatuaj pe umăr și braț cu o floare de mac și o mână crăpată aurită în stil kintsugi",
    artist: "alexandra",
    order: 75,
  },
  {
    file: "tatuaj-insecta-craniu-blackwork.webp",
    alt: "Tatuaj blackwork pe braț cu o insectă cu cap de craniu",
    artist: "alexandra",
    order: 85,
  },
  {
    file: "tatuaj-silueta-cap-fluture-mugur-fineline-color.webp",
    alt: "Tatuaj fine line pe antebraț cu o siluetă fără cap, cu cap de fluture roz, ținând un mugur verde",
    artist: "alexandra",
    order: 95,
  },
  {
    file: "tatuaj-silueta-cap-floare-albastra-scaun-fineline.webp",
    alt: "Tatuaj fine line pe braț cu o siluetă așezată pe un scaun înalt, cu cap de floare albastră",
    artist: "alexandra",
    order: 105,
  },
  {
    file: "tatuaj-sirena-trident-rechin-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu o sirenă cu trident, luptând cu un rechin",
    artist: "alexandra",
    order: 115,
  },
  {
    file: "tatuaj-coloana-randunica-spate-alb-negru.webp",
    alt: "Tatuaj alb-negru pe spate cu o coloană antică și o rândunică în zbor",
    artist: "alexandra",
    order: 125,
  },
  {
    file: "tatuaj-serpi-bujori-semiluna-spate-alb-negru.webp",
    alt: "Tatuaj alb-negru pe spate cu doi șerpi printre bujori și o semilună la ceafă",
    artist: "alexandra",
    order: 135,
  },
  {
    file: "tatuaj-silueta-cap-floare-roz-nor-ploaie-fineline.webp",
    alt: "Tatuaj fine line pe braț cu o siluetă fără cap, cu cap de floare roz, sub un nor de ploaie",
    artist: "alexandra",
    order: 145,
  },
  {
    file: "tatuaj-scaun-geaca-inima-lampa-text-color.webp",
    alt: "Tatuaj color pe braț cu un scaun, o geacă cu inimă decupată sub o lampă și textul ¿por qué no?",
    artist: "alexandra",
    order: 155,
  },
  {
    file: "tatuaj-lebada-sketch-alb-negru.webp",
    alt: "Tatuaj în stil schiță pe antebraț cu o lebădă",
    artist: "alexandra",
    order: 165,
  },
  {
    file: "tatuaj-lamai-frunze-realist-color.webp",
    alt: "Tatuaj color realist pe braț cu două lămâi și frunze verzi",
    artist: "alexandra",
    order: 175,
  },
  {
    file: "tatuaj-craniu-pensule-pictor-color.webp",
    alt: "Tatuaj color pe braț cu un craniu din care ies pensule de pictor",
    artist: "alexandra",
    order: 185,
  },
  {
    file: "tatuaj-cirese-funda-text-zana-color.webp",
    alt: "Tatuaj color pe antebraț cu cireșe legate cu o fundă roșie și textul zână",
    artist: "alexandra",
    order: 195,
  },
  {
    file: "tatuaj-portret-barbat-crap-pescar-color.webp",
    alt: "Tatuaj color realist pe braț cu un pescar ținând un crap mare",
    artist: "alexandra",
    order: 205,
  },
  {
    file: "tatuaj-capsuna-inima-ciocolata-neagra-brat-color.webp",
    alt: "Tatuaj color pe braț cu o căpșună în formă de inimă, înmuiată în ciocolată neagră",
    artist: "alexandra",
    order: 215,
  },
  {
    file: "tatuaj-flori-bumbac-fineline-color.webp",
    alt: "Tatuaj fine line pe braț cu o creangă cu flori de bumbac",
    artist: "alexandra",
    order: 225,
  },
  {
    file: "tatuaj-batman-oras-gotham-maneca-alb-negru.webp",
    alt: "Tatuaj mânecă alb-negru cu Batman, zgârie-nori și un ziar cu titlul Gotham Times",
    artist: "alexandra",
    order: 235,
  },
  {
    file: "tatuaj-magnolie-roz-coaste-color.webp",
    alt: "Tatuaj color pe coaste cu o magnolie roz",
    artist: "alexandra",
    order: 245,
  },
  {
    file: "tatuaj-capsuna-taiata-inima-fir-rosu-color.webp",
    alt: "Tatuaj color pe braț cu o căpșună tăiată cu o inimă în interior, unită printr-un fir roșu de un simbol de carte de joc",
    artist: "alexandra",
    order: 255,
  },
  {
    file: "tatuaj-capsuna-ciocolata-neagra-sold-color.webp",
    alt: "Tatuaj color pe șold cu o căpșună înmuiată în ciocolată neagră",
    artist: "alexandra",
    order: 265,
  },
  {
    file: "tatuaj-piersica-taiata-realist-color.webp",
    alt: "Tatuaj color realist pe braț cu o piersică tăiată în jumătate",
    artist: "alexandra",
    order: 275,
  },
  {
    file: "tatuaj-capsuna-taiata-inima-mica-brat-color.webp",
    alt: "Tatuaj color pe braț cu o căpșună tăiată, cu o inimă mică în interior",
    artist: "alexandra",
    order: 285,
  },
  {
    file: "tatuaj-margareta-mica-coaste-fineline.webp",
    alt: "Tatuaj fine line pe coaste cu o margaretă mică",
    artist: "alexandra",
    order: 295,
  },
];
