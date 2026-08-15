/**
 * Portfolio images, in display order.
 *
 * Written as CommonJS on purpose: next.config.js needs the same list to build
 * the redirects from the old tattoo1..tattoo24 filenames, and `require` there
 * is the only way to keep one source of truth for both.
 *
 * `file` doubles as an SEO signal — Google Images reads the filename — so each
 * one describes the piece rather than its position. `alt` describes the same
 * thing for a screen reader, and is what Google reads for image context.
 *
 * The order matches the historic tattoo1..tattoo24 numbering, which is what
 * the redirect map depends on: index 0 was tattoo1.webp. Append new work at
 * the end; do not reorder.
 */
module.exports = [
  {
    file: "tatuaj-insecte-fluture-libelula-color.webp",
    alt: "Tatuaj color pe antebraț cu insecte — fluture monarh, libelulă, albină și gândac",
  },
  {
    file: "tatuaj-personaj-albastru-desene-animate-color.webp",
    alt: "Tatuaj color pe braț cu un personaj albastru din desene animate",
  },
  {
    file: "tatuaj-fineline-scena-suprarealista-craniu.webp",
    alt: "Tatuaj fine line pe antebraț cu o scenă suprarealistă și un craniu roșu",
  },
  {
    file: "tatuaj-creatura-fantastica-color.webp",
    alt: "Tatuaj color pe antebraț cu o creatură fantastică",
  },
  {
    file: "tatuaj-floarea-soarelui-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu floarea-soarelui",
  },
  {
    file: "tatuaj-fineline-scena-abstracta.webp",
    alt: "Tatuaj fine line pe braț cu o scenă abstractă",
  },
  {
    file: "tatuaj-craniu-animal-geometric-blackwork.webp",
    alt: "Tatuaj blackwork pe antebraț cu un craniu de animal într-o compoziție geometrică",
  },
  {
    file: "tatuaj-colaj-micro-tatuaje-alb-negru.webp",
    alt: "Colaj de micro-tatuaje alb-negru pe antebraț",
  },
  {
    file: "tatuaj-panda-costum-pilot-curse-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu un panda în costum de pilot de curse",
  },
  {
    file: "tatuaj-cowboy-fineline-cu-text.webp",
    alt: "Tatuaj fine line pe braț cu o siluetă de cowboy și text",
  },
  {
    file: "tatuaj-personaj-verde-science-fiction-color.webp",
    alt: "Tatuaj color pe braț cu un personaj verde din science fiction",
  },
  {
    file: "tatuaj-masca-demon-oni-color.webp",
    alt: "Tatuaj color pe antebraț cu o mască de demon oni",
  },
  {
    file: "tatuaje-fineline-simboluri-magie.webp",
    alt: "Tatuaje fine line pe braț cu simboluri magice și urme de lăbuțe",
  },
  {
    file: "tatuaj-silueta-feminina-linii-rosii.webp",
    alt: "Tatuaj cu linii roșii pe coaste, siluetă feminină",
  },
  {
    file: "tatuaj-portret-caine-realist-alb-negru.webp",
    alt: "Tatuaj realist alb-negru pe antebraț cu portretul unui câine",
  },
  {
    file: "tatuaj-personaj-anime-palarie-de-paie-color.webp",
    alt: "Tatuaj color pe mână cu un personaj anime cu pălărie de paie",
  },
  {
    file: "tatuaj-albina-realista-color.webp",
    alt: "Tatuaj color realist pe antebraț cu o albină",
  },
  {
    file: "tatuaj-fineline-portret-suprarealist-cu-text.webp",
    alt: "Tatuaj fine line pe umăr cu un portret suprarealist și text",
  },
  {
    file: "tatuaj-pisica-cu-semiluna-color.webp",
    alt: "Tatuaj color pe braț cu o pisică ce atinge o semilună",
  },
  {
    file: "tatuaj-aripi-si-medalion-alb-negru.webp",
    alt: "Tatuaj alb-negru pe antebraț cu aripi, medalion și text",
  },
  {
    file: "tatuaj-gandac-stilizat-color.webp",
    alt: "Tatuaj color pe braț cu un gândac stilizat",
  },
  {
    file: "tatuaje-pereche-munte-si-val-calm-chaos.webp",
    alt: "Tatuaje pereche pe antebrațe — munte cu textul CALM și val cu textul chaos",
  },
  {
    file: "tatuaj-inger-inaripat-cu-busola-fineline.webp",
    alt: "Tatuaj fine line pe antebraț cu un înger înaripat, busolă și text",
  },
  {
    file: "tatuaj-silueta-in-cadru-alb-negru.webp",
    alt: "Tatuaj alb-negru pe coaste cu o siluetă într-un cadru",
  },
];
