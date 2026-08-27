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
 * One artist, as a single card rather than a photo with loose text under it.
 *
 * The header changes shape instead of the photo changing size: below 768px the
 * portrait is a thumbnail with the name beside it, and from there up — where
 * the cards sit two to a row — it is the full width of the card with the name
 * underneath. A narrow plate over full-width paragraphs, which is what a capped
 * photo above loose text gives you, reads as a broken column.
 *
 * Both switches happen on the same breakpoint on purpose. Turning the photo
 * full-width while the cards were still stacked one per row made a 700px-wide
 * viewport 2774px of section: two portraits nearly as wide as the screen, one
 * after the other.
 *
 * Nothing is written over the photograph. The name used to sit on it behind a
 * scrim, which fogged the top of a portrait shot against light grey paper and
 * bought nothing the card frame does not already give.
 */
const ArtistCard = ({ artist, index }) => (
  <Reveal delay={index * 0.1} className="h-full">
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-5 p-5 md:flex-col md:items-stretch md:gap-0 md:p-0">
        {/* 3:2 once the photo has the card's full width. At 4:5 a 550px
            column gave a 688px-tall photograph, which pushed the words that
            sell the artist below the fold and made the section the tallest
            thing on the homepage. The portraits are shot with headroom, so a
            landscape crop loses background, not people. */}
        <div className="xs:w-32 relative aspect-4/5 w-28 shrink-0 overflow-hidden rounded-xl sm:w-40 md:aspect-3/2 md:w-full md:rounded-none">
          <BlurImage
            src={artist.photo}
            alt={artist.photoAlt}
            blurDataURL={blurData[artist.photo]}
            // The container caps at 80rem, so past 1280px the column stops
            // growing at 552px. Asking for 40vw of a 1920px screen fetched a
            // crop nearly twice the size of the slot it lands in.
            sizes="(max-width: 767px) 10rem, (max-width: 1279px) 45vw, 552px"
            loading="lazy"
            // Two crops of the same file. On the thumbnail it is pulled in
            // and anchored to the top: one portrait is shot head-and-shoulders
            // and the other full length, and at 112px the full-length one
            // turns its subject into a speck beside the other card. On the
            // wide crop the window sits 8% down — high enough to keep both
            // faces off the bottom edge, low enough that Alexandra's hair
            // does not leave the top of the frame at any column width the
            // grid produces.
            className="origin-top scale-[1.3] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:origin-center md:scale-100 md:object-[50%_8%] md:group-hover:scale-[1.04]"
          />

          {/* Melts the photograph into the card it sits in, so the two do not
              meet at a hard horizontal edge. Only where the photo is full
              width — on the thumbnail it would just dim a corner. */}
          <span
            aria-hidden="true"
            className="from-surface absolute inset-x-0 bottom-0 hidden h-1/5 bg-gradient-to-t to-transparent md:block"
          />
        </div>

        <div className="min-w-0 md:px-6 md:pt-5 lg:px-7">
          {/* Numeral and rule, the same pair the hygiene band above uses. */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="font-display text-gradient-accent text-lg leading-none font-semibold tabular-nums"
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
          <h3 className="neon mt-3 text-2xl sm:text-3xl">{artist.name}</h3>

          {/* Small enough that "Fondatoare & tattoo artist" keeps to one line
              beside the thumbnail — two lines there and the two cards stop
              agreeing on where the tagline sits. */}
          <p className="text-accent mt-2 text-[0.56rem] tracking-[0.16em] uppercase md:text-[0.66rem] md:tracking-[0.2em]">
            {artist.role}
          </p>
          <p className="text-fg/40 mt-1 text-[0.56rem] tracking-[0.12em] uppercase md:text-[0.6rem] md:tracking-[0.14em]">
            {artist.tagline}
          </p>
        </div>
      </div>

      {/* flex-1 with the link on mt-auto: the two cards stretch to the same
          height, and their calls to action line up rather than floating at
          whatever height the longer paragraph happened to end. */}
      <div className="flex flex-1 flex-col p-5 pt-4 md:px-6 md:pt-6 md:pb-7 lg:px-7">
        <p className="text-muted text-sm leading-relaxed md:text-[0.95rem]">
          {artist.bio}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5 md:gap-2">
          {artist.styles.map((style) => (
            <li
              key={style}
              className="border-fg/12 text-muted group-hover:border-accent/25 rounded-full border px-2.5 py-1 text-[0.6rem] tracking-[0.08em] uppercase transition-colors duration-500 md:px-3 md:text-[0.65rem]"
            >
              {style}
            </li>
          ))}
        </ul>

        {/* Lands on the portfolio with her tab already selected — see Gallery. */}
        <Link
          href={`/proiecte?artist=${artist.key}`}
          className="text-accent link-underline mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[0.66rem] tracking-[0.14em] uppercase md:text-[0.7rem] md:tracking-[0.16em]"
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

      <div className="relative mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:gap-x-16 xl:gap-x-20">
        {/* Reads "Mădălina & Alexandra" across the gutter. Only from lg, and
            sized under the gap: a glyph wider than the gutter gets sliced by
            the cards on either side, which reads as a rendering fault rather
            than as a mark. */}
        <span
          aria-hidden="true"
          className="font-display text-fg/12 pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[4.5rem] leading-none select-none lg:block xl:text-[5.5rem]"
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
