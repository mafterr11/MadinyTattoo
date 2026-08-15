import { FiArrowUpRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

import Reveal from "../Reveal";
import {
  googleProfileUrl,
  googleRating,
  sortedReviews,
} from "../../lib/reviews";

/** Seconds each review spends on screen; total loop scales with the count. */
const SECONDS_PER_REVIEW = 9;

/** Google's own mark, so the badge reads as a Google score, not ours. */
const GoogleG = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
    />
    <path
      fill="#EA4335"
      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    />
  </svg>
);

const ReviewCard = ({ review }) => (
  <figure className="card flex flex-col p-6 sm:p-7">
    <FaQuoteLeft className="text-accent/30 text-xl" aria-hidden="true" />

    {/* pre-line keeps the paragraph breaks people actually wrote on Google. */}
    <blockquote className="text-fg/85 mt-4 text-[0.95rem] leading-relaxed whitespace-pre-line">
      {review.text}
    </blockquote>

    <figcaption className="mt-5 flex items-baseline justify-between gap-3 border-t border-white/8 pt-4">
      <span className="font-display text-base">{review.author}</span>
      {review.date && (
        <span className="text-muted text-[0.7rem] tracking-[0.12em] uppercase">
          {review.date}
        </span>
      )}
    </figcaption>
  </figure>
);

/**
 * Google reviews block: the score badge anchors the left column while the
 * reviews scroll past on the right, one per row, highest rating first.
 *
 * The list is rendered twice — the second copy is hidden from assistive tech
 * and exists only so the loop can restart without a visible seam.
 *
 * Renders nothing unless real reviews exist. See lib/reviews.js.
 */
const GoogleReviews = () => {
  const items = sortedReviews();
  if (items.length === 0) return null;

  const duration = `${items.length * SECONDS_PER_REVIEW}s`;

  const column = (hidden) => (
    <ul aria-hidden={hidden || undefined}>
      {items.map((review, i) => (
        <li key={`${review.author}-${i}`} className="mb-5">
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Score */}
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <span className="eyebrow">Recenzii</span>
            <h2 className="mt-5">
              Părerea <span className="text-accent">clienților.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card mt-8 inline-flex items-center gap-4 p-5">
              <GoogleG className="h-8 w-8 shrink-0" />

              <div className="flex items-center gap-2">
                <span className="font-display text-accent text-3xl leading-none tabular-nums">
                  {googleRating.score}
                </span>
                <FaStar
                  className="neon-icon text-accent text-xl"
                  aria-hidden="true"
                />
                <span className="sr-only">
                  {googleRating.score} din 5 stele pe Google
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-7">
              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-block"
              >
                Vezi toate pe Google
                <FiArrowUpRight className="text-base" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scrolling wall */}
      <Reveal delay={0.12} className="lg:col-span-8">
        <div className="review-marquee h-[30rem] lg:h-[38rem]">
          <div
            className="review-marquee-track"
            style={{ "--marquee-duration": duration }}
          >
            {column(false)}
            {column(true)}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default GoogleReviews;
