/**
 * Portfolio images. Alt text is descriptive and unique per image — the old
 * markup repeated "Poza tatuaje" 24 times, which Google reads as duplicate
 * boilerplate and which tells a screen-reader user nothing.
 */
export const galleryImages = Array.from({ length: 24 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/gallery/tattoo${n}.webp`,
    alt: `Tatuaj realizat la Madiny Tattoo București — lucrare din portofoliu nr. ${n}`,
  };
});
