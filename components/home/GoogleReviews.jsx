import { FiArrowUpRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";

import Reveal from "../Reveal";
import StarRating from "../StarRating";
import {
  googleProfileUrl,
  googleRating,
  sortedReviews,
} from "../../lib/reviews";

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
  <figure className="card card-hover flex h-full flex-col p-6 sm:p-7">
    <div className="flex items-start justify-between gap-4">
      <StarRating
        value={review.rating}
        size="text-base"
        label={`${review.rating} din 5 stele`}
      />
      <FaQuoteLeft className="text-accent/25 text-xl" aria-hidden="true" />
    </div>

    {/* pre-line keeps the paragraph breaks people actually wrote on Google. */}
    <blockquote className="text-fg/85 mt-4 flex-1 text-[0.95rem] leading-relaxed whitespace-pre-line">
      {review.text}
    </blockquote>

    <figcaption className="mt-6 flex items-baseline justify-between gap-3 border-t border-white/8 pt-4">
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
 * reviews themselves run down the right, highest rating first.
 *
 * Renders nothing unless real reviews exist — see lib/reviews.js.
 */
const GoogleReviews = () => {
  const items = sortedReviews();
  if (items.length === 0) return null;

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

              {googleRating ? (
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-accent text-3xl leading-none tabular-nums">
                      {googleRating.score.toLocaleString("ro-RO", {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1,
                      })}
                    </span>
                    <StarRating
                      value={googleRating.score}
                      size="text-lg"
                      label={`${googleRating.score} din 5 stele pe Google`}
                    />
                  </div>
                  <p className="text-muted mt-1.5 text-xs tracking-[0.12em] uppercase">
                    {googleRating.count} recenzii pe Google
                  </p>
                </div>
              ) : (
                /* No headline score confirmed yet — say where the reviews come
                   from without implying an average we have not verified. */
                <p className="text-muted text-xs tracking-[0.14em] uppercase">
                  Recenzii de pe
                  <span className="text-fg block text-sm tracking-[0.1em]">
                    Google
                  </span>
                </p>
              )}
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

      {/* Reviews */}
      <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
        {items.map((review, i) => (
          <Reveal
            as="li"
            key={`${review.author}-${i}`}
            delay={Math.min(i, 4) * 0.08}
            className="h-full"
          >
            <ReviewCard review={review} />
          </Reveal>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
