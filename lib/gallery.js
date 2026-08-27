import { artists } from "./artists";
import blurData from "./blurData";
import manifest from "./galleryManifest";

/**
 * Portfolio images, in the order visitors see them.
 *
 * Filenames and alt text both describe the actual piece — Google Images reads
 * the filename, and the alt text is what gives a screen-reader user and the
 * crawler the same information. The list previously generated
 * `tattoo1..tattoo24` with one repeated alt string, which told neither of them
 * anything.
 *
 * Sorted by `order` rather than by position in the manifest: the manifest is
 * append-only because next.config.js maps the legacy tattoo1..tattoo24 URLs by
 * index, so rearranging the page has to be a separate lever. Ties keep their
 * manifest order — Array#sort is stable.
 *
 * Each entry carries its own blurDataURL so the grid fades up from a colour
 * impression of the photo instead of snapping in from an empty box. The
 * placeholders are baked by scripts/generate-blur.mjs; because this module is
 * only imported from server components, the client receives just these
 * strings rather than the full map.
 */
export const galleryImages = [...manifest]
  .sort((a, b) => a.order - b.order)
  .map(({ file, alt, artist }) => {
    const src = `/gallery/${file}`;
    return { src, alt, artist, blurDataURL: blurData[src] };
  });

/** Everything by one artist, still in page order. */
export const imagesByArtist = (key) =>
  galleryImages.filter((image) => image.artist === key);

/**
 * How many pieces each tab holds, including the unfiltered one.
 *
 * Counted here rather than in the filter itself because the homepage teaser
 * only ever receives a handful of images — counting what it was handed would
 * tell a visitor Mădălina has eight tattoos to her name.
 */
export const artistCounts = {
  all: galleryImages.length,
  ...Object.fromEntries(
    artists.map(({ key }) => [key, imagesByArtist(key).length]),
  ),
};

/** One desktop row of the teaser grid, per artist. */
const PREVIEW_PER_ARTIST = 8;

/**
 * The homepage teaser's pool: the newest few from each artist, back in page
 * order so the unfiltered tab still alternates between them.
 *
 * Taken per artist rather than as one `slice` off the front so that switching
 * to Alexandra never lands on a near-empty grid — whoever opens the portfolio
 * happens to be leading it. The rest lives behind "Vezi tot portofoliul",
 * which is the link the section exists to earn.
 */
export const previewImages = artists
  .flatMap(({ key }) => imagesByArtist(key).slice(0, PREVIEW_PER_ARTIST))
  .sort((a, b) => galleryImages.indexOf(a) - galleryImages.indexOf(b));
