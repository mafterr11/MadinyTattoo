import Image from "next/image";

import Reveal from "./Reveal";

/**
 * Pricing tile. The image is a backdrop with a real gradient scrim rather than
 * a flat black overlay, so the artwork still reads while the figures stay
 * legible at every size.
 */
const PriceCard = ({ title, image, tiers, delay = 0, alt }) => (
  <Reveal as="li" delay={delay} className="h-full">
    <article className="card card-hover relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden">
      <Image
        src={image}
        alt={alt ?? `${title} — Madiny Tattoo București`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="from-ink via-ink/85 absolute inset-0 bg-gradient-to-t to-transparent"
      />

      <div className="relative p-6">
        <h3 className="text-accent text-xl">{title}</h3>
        <div className="hairline mt-3" />

        <dl className="mt-4 space-y-2.5">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5"
            >
              <dt className="text-muted text-sm">{tier.label}:</dt>
              <dd className="text-fg text-sm font-medium tabular-nums">
                {tier.price}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  </Reveal>
);

export default PriceCard;
