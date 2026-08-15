/**
 * Star row that also handles fractional scores (4.7 fills the fifth star 70%).
 *
 * Two stacked rows clipped by width rather than five separate partial icons —
 * one clip is cheaper than per-star maths and never rounds inconsistently.
 */
const Star = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
    <path d="M10 1.6l2.47 5.2 5.53.77-4.03 3.83.99 5.6L10 14.34 5.04 17l.99-5.6L2 7.57l5.53-.77L10 1.6z" />
  </svg>
);

const StarRating = ({ value, size = "text-sm", label }) => {
  const clamped = Math.max(0, Math.min(5, value));
  const percent = (clamped / 5) * 100;

  return (
    <span
      role="img"
      aria-label={label ?? `${clamped} din 5 stele`}
      className={`relative inline-flex ${size}`}
    >
      {/* Empty track */}
      <span aria-hidden="true" className="text-fg/15 flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="h-[1em] w-[1em]" />
        ))}
      </span>

      {/* Filled overlay, clipped to the score */}
      <span
        aria-hidden="true"
        style={{ width: `${percent}%` }}
        className="text-accent absolute inset-y-0 left-0 flex gap-0.5 overflow-hidden"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="h-[1em] w-[1em] shrink-0" />
        ))}
      </span>
    </span>
  );
};

export default StarRating;
