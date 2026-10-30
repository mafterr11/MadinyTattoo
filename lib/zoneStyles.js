import galleryManifest from "./galleryManifest";

const selections = [
  {
    name: "Fine line",
    file: "tatuaj-floarea-soarelui-fineline.webp",
    text: "Linii fine și motive florale. Discutăm dimensiunea și detaliile potrivite pentru desenul tău.",
  },
  {
    name: "Color",
    file: "tatuaj-piersica-taiata-realist-color.webp",
    text: "Culoare, contraste și idei personale, de la motive mici la compoziții mai ample.",
  },
  {
    name: "Realism alb-negru",
    file: "tatuaj-pisica-realista-alb-negru.webp",
    text: "Volum, umbre și detalii inspirate din fotografii. Alegem împreună referința și zona tatuajului.",
  },
];

export const zoneStyles = selections.map((style) => ({
  ...style,
  ...galleryManifest.find((image) => image.file === style.file),
}));
