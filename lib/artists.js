/**
 * The two people who actually hold the machine.
 *
 * `key` is the join to lib/galleryManifest.js — every portfolio entry carries
 * the key of whoever tattooed it, which is what the portfolio filter reads and
 * what `?artist=` in a /proiecte link selects. Renaming a key here without
 * renaming it there empties that artist's tab, so the keys are treated as
 * data, not as labels.
 *
 * Plain strings on purpose: this module is imported from client components
 * (the portfolio filter), so it must not reach for the blur placeholder map —
 * that would pull every placeholder on the site into the browser bundle. The
 * server components that render the portraits look their placeholder up
 * themselves, through lib/blur.js.
 *
 * Mădălina is first everywhere she appears — she owns the studio, and the
 * order is the only thing on the page that says so.
 */
export const artists = [
  {
    key: "madalina",
    name: "Mădălina",
    /** Genitive, for "Vezi lucrările ___" — Romanian will not take the name raw. */
    possessive: "Mădălinei",
    role: "Fondatoare & tattoo artist",
    /** For the booking wizard's cards, where a column is ~200px wide. */
    shortRole: "Fondatoare",
    /** The studio's own line for her, kept as she wrote it. */
    tagline: "Your ink master",
    photo: "/artists/madalina.webp",
    /** Head crop — the portraits are full-length and unreadable at 28px. */
    avatar: "/artists/madalina-avatar.webp",
    photoAlt: "Mădălina, fondatoarea Madiny Tattoo",
    bio: "Am înlocuit zgomotul de fond al unui salon clasic cu un spațiu cald, cozy ca o cafea între prieteni. Promisiunea mea e simplă: îți ofer tot timpul necesar pentru ca rezultatul final să fie exact așa cum l-ai visat.",
    styles: ["Color", "Realism", "Black & grey", "Fine line"],
  },
  {
    key: "alexandra",
    name: "Alexandra",
    possessive: "Alexandrei",
    role: "Tattoo artist",
    shortRole: "Tattoo artist",
    tagline: "Your creative soul",
    photo: "/artists/alexandra.webp",
    avatar: "/artists/alexandra-avatar.webp",
    photoAlt: "Alexandra, tattoo artist la Madiny Tattoo",
    bio: "Pasiunea mea este să transform ideile în artă purtabilă — tatuaje care spun o poveste și care rezistă testului timpului. Stilul meu e despre finețe și expresivitate, într-o atmosferă relaxată în care tu ești pe primul loc.",
    styles: ["Fine line", "Neo-tradițional", "Micro-realism", "Blackwork"],
  },
];

/** Keyed lookup, for the places that have an `artist` string and need the rest. */
export const artistsByKey = Object.fromEntries(
  artists.map((artist) => [artist.key, artist]),
);

/**
 * The unfiltered tab. Not an artist, but it sits in the same control and the
 * filter is simpler when every option has a key and a name.
 */
export const ALL_ARTISTS = { key: "all", name: "Toate" };

/**
 * The booking wizard's third answer. Plenty of people want a tattoo rather
 * than a particular tattooist, and a required question with only two names
 * makes them guess — which is worse for the studio than being told outright
 * that either of them is fine.
 */
export const ANY_ARTIST = {
  name: "Oricare",
  shortRole: "Alegeți voi",
};

/** Only these values ever select a tab — anything else falls back to "Toate". */
export const isArtistKey = (value) =>
  artists.some((artist) => artist.key === value);
