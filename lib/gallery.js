import blurData from "./blurData";

/**
 * Portfolio images. Alt text is descriptive and unique per image — the old
 * markup repeated "Poza tatuaje" 24 times, which Google reads as duplicate
 * boilerplate and which tells a screen-reader user nothing.
 *
 * Each entry carries its own blurDataURL so the grid fades up from a colour
 * impression of the photo instead of snapping in from an empty box. The
 * placeholders are baked by scripts/generate-blur.mjs; because this module is
 * only imported from server components, the client receives just these 24
 * strings rather than the full map.
 */
export const galleryImages = Array.from({ length: 24 }, (_, i) => {
  const n = i + 1;
  const src = `/gallery/tattoo${n}.webp`;
  return {
    src,
    alt: `Tatuaj realizat la Madiny Tattoo București — lucrare din portofoliu nr. ${n}`,
    blurDataURL: blurData[src],
  };
});
