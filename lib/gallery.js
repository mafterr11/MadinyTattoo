import blurData from "./blurData";
import manifest from "./galleryManifest";

/**
 * Portfolio images.
 *
 * Filenames and alt text both describe the actual piece — Google Images reads
 * the filename, and the alt text is what gives a screen-reader user and the
 * crawler the same information. The list previously generated
 * `tattoo1..tattoo24` with one repeated alt string, which told neither of them
 * anything.
 *
 * Each entry carries its own blurDataURL so the grid fades up from a colour
 * impression of the photo instead of snapping in from an empty box. The
 * placeholders are baked by scripts/generate-blur.mjs; because this module is
 * only imported from server components, the client receives just these
 * strings rather than the full map.
 */
export const galleryImages = manifest.map(({ file, alt }) => {
  const src = `/gallery/${file}`;
  return { src, alt, blurDataURL: blurData[src] };
});
