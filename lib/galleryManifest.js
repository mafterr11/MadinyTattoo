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
    file: "tatuaj-femeie-cu-masca-oni-si-bujori-rosu-negru.webp",
    alt: "Tatuaj neo-tradițional pe antebraț cu o femeie, o mască oni și bujori în roșu și negru",
    artist: "alexandra",
    order: 15,
  },
  {
    file: "tatuaje-colaj-spate-coloana-randunica-si-flori.webp",
    alt: "Colaj de tatuaje pe spate cu o coloană antică, o rândunică, flori și raze de soare",
    artist: "alexandra",
    order: 25,
  },
  {
    file: "tatuaj-doua-pisici-intr-o-cutie-roz-color.webp",
    alt: "Tatuaj realist color pe braț cu două pisici într-o cutie de carton roz",
    artist: "alexandra",
    order: 35,
  },
  {
    file: "tatuaj-sirena-cu-trident-si-rechin-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu o sirenă cu trident și un rechin",
    artist: "alexandra",
    order: 45,
  },
  {
    file: "tatuaj-silueta-cu-cap-de-floare-color.webp",
    alt: "Tatuaj pe antebraț cu o siluetă așezată, cap de floare roz și un mugur în palmă",
    artist: "alexandra",
    order: 55,
  },
  {
    file: "tatuaj-randunica-in-zbor-pe-umar-fineline.webp",
    alt: "Tatuaj fine line pe umăr cu o rândunică în zbor",
    artist: "alexandra",
    order: 65,
  },
  {
    file: "tatuaj-scaun-si-lampa-por-que-no-color.webp",
    alt: "Tatuaj color pe braț cu un scaun sub o lampă și textul ¿por qué no?",
    artist: "alexandra",
    order: 75,
  },
  {
    file: "tatuaj-zeita-inaripata-cu-semiluna-sketch.webp",
    alt: "Tatuaj în stil schiță pe braț cu o zeiță înaripată, semilună și accente roșii",
    artist: "alexandra",
    order: 85,
  },
  {
    file: "tatuaj-ursulet-cu-sac-de-bani-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu un ursuleț, un sac de bani și o sticlă de șampanie",
    artist: "alexandra",
    order: 95,
  },
  {
    file: "tatuaje-pereche-ursuleti-jeleu-color.webp",
    alt: "Tatuaje pereche pe antebrațe cu ursuleți de jeleu roz cu inimioară albastră",
    artist: "alexandra",
    order: 105,
  },
  {
    file: "tatuaj-margareta-mica-fineline.webp",
    alt: "Tatuaj fine line pe coaste cu o margaretă mică",
    artist: "alexandra",
    order: 115,
  },
];
