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
 * ## Position in the array is history; `order` is what visitors see
 *
 * The first 24 entries sit in their historic tattoo1..tattoo24 positions, and
 * the redirect map in next.config.js reads them by index — so **never reorder
 * this array, and always append**. To move a piece around the page, change its
 * `order` instead: lib/gallery.js sorts on it, lowest first.
 *
 * Numbers go up in tens, which leaves room to drop a piece between two others
 * without renumbering the rest. 10-120 is deliberately free for new work that
 * should open the portfolio.
 *
 * ## Adding a photo
 *
 *   1. Save it to public/gallery/ under a name that describes the work.
 *   2. Append an entry here with an `alt` that describes it too, and an
 *      `order` — low to put it near the front.
 *   3. `npm run images` — re-encodes it to a sane weight and bakes the blur
 *      placeholder the grid fades up from. Both steps skip work already done,
 *      so re-running over the whole folder is safe.
 */
module.exports = [
  {
    file: "tatuaj-insecte-fluture-libelula-color.webp",
    alt: "Tatuaj color pe antebraț cu insecte — fluture monarh, libelulă, albină și gândac",
    order: 130,
  },
  {
    file: "tatuaj-personaj-albastru-desene-animate-color.webp",
    alt: "Tatuaj color pe braț cu un personaj albastru din desene animate",
    order: 140,
  },
  {
    file: "tatuaj-fineline-scena-suprarealista-craniu.webp",
    alt: "Tatuaj fine line pe antebraț cu o scenă suprarealistă și un craniu roșu",
    order: 150,
  },
  {
    file: "tatuaj-creatura-fantastica-color.webp",
    alt: "Tatuaj color pe antebraț cu o creatură fantastică",
    order: 160,
  },
  {
    file: "tatuaj-floarea-soarelui-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu floarea-soarelui",
    order: 170,
  },
  {
    file: "tatuaj-fineline-scena-abstracta.webp",
    alt: "Tatuaj fine line pe braț cu o scenă abstractă",
    order: 180,
  },
  {
    file: "tatuaj-craniu-animal-geometric-blackwork.webp",
    alt: "Tatuaj blackwork pe antebraț cu un craniu de animal într-o compoziție geometrică",
    order: 190,
  },
  {
    file: "tatuaj-colaj-micro-tatuaje-alb-negru.webp",
    alt: "Colaj de micro-tatuaje alb-negru pe antebraț",
    order: 200,
  },
  {
    file: "tatuaj-panda-costum-pilot-curse-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu un panda în costum de pilot de curse",
    order: 210,
  },
  {
    file: "tatuaj-cowboy-fineline-cu-text.webp",
    alt: "Tatuaj fine line pe braț cu o siluetă de cowboy și text",
    order: 220,
  },
  {
    file: "tatuaj-personaj-verde-science-fiction-color.webp",
    alt: "Tatuaj color pe braț cu un personaj verde din science fiction",
    order: 230,
  },
  {
    file: "tatuaj-masca-demon-oni-color.webp",
    alt: "Tatuaj color pe antebraț cu o mască de demon oni",
    order: 240,
  },
  {
    file: "tatuaje-fineline-simboluri-magie.webp",
    alt: "Tatuaje fine line pe braț cu simboluri magice și urme de lăbuțe",
    order: 250,
  },
  {
    file: "tatuaj-silueta-feminina-linii-rosii.webp",
    alt: "Tatuaj cu linii roșii pe coaste, siluetă feminină",
    order: 260,
  },
  {
    file: "tatuaj-portret-caine-realist-alb-negru.webp",
    alt: "Tatuaj realist alb-negru pe antebraț cu portretul unui câine",
    order: 270,
  },
  {
    file: "tatuaj-personaj-anime-palarie-de-paie-color.webp",
    alt: "Tatuaj color pe mână cu un personaj anime cu pălărie de paie",
    order: 280,
  },
  {
    file: "tatuaj-albina-realista-color.webp",
    alt: "Tatuaj color realist pe antebraț cu o albină",
    order: 290,
  },
  {
    file: "tatuaj-fineline-portret-suprarealist-cu-text.webp",
    alt: "Tatuaj fine line pe umăr cu un portret suprarealist și text",
    order: 300,
  },
  {
    file: "tatuaj-pisica-cu-semiluna-color.webp",
    alt: "Tatuaj color pe braț cu o pisică ce atinge o semilună",
    order: 310,
  },
  {
    file: "tatuaj-aripi-si-medalion-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu aripi, medalion și text",
    order: 320,
  },
  {
    file: "tatuaj-gandac-stilizat-color.webp",
    alt: "Tatuaj color pe braț cu un gândac stilizat",
    order: 330,
  },
  {
    file: "tatuaje-pereche-munte-si-val-calm-chaos.webp",
    alt: "Tatuaje pereche pe antebrațe — munte cu textul CALM și val cu textul chaos",
    order: 340,
  },
  {
    file: "tatuaj-inger-inaripat-cu-busola-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu un înger înaripat, busolă și text",
    order: 350,
  },
  {
    file: "tatuaj-silueta-in-cadru-alb-negru.webp",
    alt: "Tatuaj alb-negru pe coaste cu o siluetă într-un cadru",
    order: 360,
  },
];
