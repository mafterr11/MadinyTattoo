import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import BlurImage from "../BlurImage";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { artists } from "../../lib/artists";
// Server-only, like every other read of this map: importing it from a client
// component would ship every placeholder on the site to the browser.
import blurData from "../../lib/blurData";

/**
 * One artist, as a compact profile card: portrait beside the name, her own
 * words underneath.
 *
 * The same shape at every width. An earlier version gave the photograph the
 * full width of the card from 768px up, which made two portraits the tallest
 * thing on the homepage and, at a 552px column, asked a 692px file to fill
 * 1100 device pixels — visibly soft on any retina screen. At this size both
 * files have pixels to spare.
 *
 * The two files do not share a ratio — one is 5:7, the other square — so one
 * of them has to give. Fitting each one whole inside the frame left a mat down
 * the sides of one card and across the top of the other, which read as two
 * photographs that had not been prepared rather than as a deliberate border.
 * Filling the frame crops instead, and two identical rectangles is the tidier
 * of the two wrongs.
 */
const ArtistCard = ({ artist, index }) => (
  <Reveal delay={index * 0.1} className="h-full">
    <article className="card card-hover group flex h-full flex-col overflow-hidden p-5 sm:p-6">
      <div className="flex items-center gap-4 sm:gap-5">
        {/* One frame for both, which is what keeps the two cards the same
            height — sizing each frame to its own photograph made one row 64px
            taller than the other and left a hole above the shorter card's
            link. */}
        <div className="xs:w-32 relative aspect-5/6 w-28 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/8 md:w-36 lg:w-40">
          <BlurImage
            src={artist.photo}
            alt={artist.photoAlt}
            blurDataURL={blurData[artist.photo]}
            sizes="(max-width: 400px) 7rem, (max-width: 768px) 8rem, (max-width: 1024px) 9rem, 10rem"
            loading="lazy"
            // Only one axis is ever cropped, and a different one per photo:
            // the portrait overflows vertically, the square horizontally. So
            // the horizontal half stays centred for the square, and the
            // vertical half sits high enough to keep the top of Mădălina's
            // hair inside the frame.
            className="object-cover object-[50%_20%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </div>

        <div className="min-w-0">
          {/* Numeral and rule, the same pair the hygiene band above uses. */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="font-display text-gradient-accent text-base leading-none font-semibold tabular-nums sm:text-lg"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden="true"
              className="from-accent/45 h-px flex-1 bg-gradient-to-r to-transparent"
            />
          </div>

          {/* Set in the neon of the studio's own sign — the same treatment the
              wordmark and the booking button already use. */}
          <h3 className="neon mt-3 text-xl sm:text-2xl lg:text-3xl">
            {artist.name}
          </h3>

          {/* Small enough that "Fondatoare & tattoo artist" keeps to one line
              beside the portrait on a phone. */}
          <p className="text-accent mt-2 text-[0.56rem] tracking-[0.16em] uppercase sm:text-[0.62rem] sm:tracking-[0.2em]">
            {artist.role}
          </p>
          <p className="text-fg/40 mt-1 text-[0.56rem] tracking-[0.12em] uppercase sm:text-[0.6rem] sm:tracking-[0.14em]">
            {artist.tagline}
          </p>
        </div>
      </div>

      {/* flex-1 with the link on mt-auto: the two cards stretch to the same
          height, and their calls to action line up rather than floating at
          whatever height the longer paragraph happened to end. */}
      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-muted text-sm leading-relaxed">{artist.bio}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {artist.styles.map((style) => (
            <li
              key={style}
              className="border-fg/12 text-muted group-hover:border-accent/25 rounded-full border px-2.5 py-1 text-[0.6rem] tracking-[0.08em] uppercase transition-colors duration-500 sm:px-3"
            >
              {style}
            </li>
          ))}
        </ul>

        {/* Lands on the portfolio with her tab already selected — see Gallery. */}
        <Link
          href={`/proiecte?artist=${artist.key}`}
          className="text-accent link-underline mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[0.66rem] tracking-[0.14em] uppercase sm:text-[0.7rem] sm:tracking-[0.16em]"
        >
          Vezi lucrările {artist.possessive}
          <FiArrowUpRight className="shrink-0 text-sm" aria-hidden="true" />
        </Link>
      </div>
    </article>
  </Reveal>
);

/**
 * Who the visitor is actually booking with.
 *
 * Sits directly under the hygiene band, because the two answer the same
 * question in sequence — is this place safe, and whose hands am I in — and
 * both have to be answered before anyone reads a price list.
 */
const ArtistsSection = () => (
  <section
    id="artiste"
    aria-label="Artistele Madiny Tattoo"
    className="section relative scroll-mt-20 overflow-hidden"
  >
    {/* Keeps the band off flat black without repeating the bordered surface
        of the hygiene strip immediately above it. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(212,179,154,0.06),transparent_65%)]"
    />

    <div className="relative container">
      <SectionHeading
        eyebrow="Echipa"
        title={
          <>
            <span className="text-accent">Artistele</span> din spatele acului.
          </>
        }
        lead="Un salon mic, două perechi de mâini. Vezi stilul fiecăreia înainte să alegi cu cine te programezi."
      />

      <div className="relative mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:gap-x-14 xl:gap-x-20">
        {/* Reads "Mădălina & Alexandra" across the gutter. Only from lg, and
            sized under the gap: a glyph wider than the gutter gets sliced by
            the cards on either side, which reads as a rendering fault rather
            than as a mark. */}
        <span
          aria-hidden="true"
          className="font-display text-fg/12 pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[3.5rem] leading-none select-none lg:block xl:text-[4.5rem]"
        >
          &amp;
        </span>

        {artists.map((artist, i) => (
          <ArtistCard key={artist.key} artist={artist} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ArtistsSection;
