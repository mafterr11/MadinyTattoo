import Link from "next/link";
import { FiPlus } from "react-icons/fi";

import Reveal from "./Reveal";

/** Native <details> accordion, matching the laser FAQ without client JS. */
const FAQSection = ({
  id,
  items,
  title = "Întrebări frecvente",
  eyebrow = "Răspunsuri",
  lead,
  className = "section",
  animated = false,
}) => (
  <section
    aria-labelledby={id}
    className={`${className} border-t border-white/8`}
  >
    <div className="container max-w-4xl">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id} className="mt-5">
          {title}
        </h2>
        {lead && <p className="text-muted mt-4 max-w-2xl">{lead}</p>}
      </Reveal>

      <div className="mt-10 space-y-3">
        {items.map((item, i) => (
          <Reveal key={item.question} delay={Math.min(i, 5) * 0.05}>
            <details
              className={`card group overflow-hidden ${animated ? "faq-animated" : ""}`}
            >
              <summary className="hover:text-accent flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-left font-medium transition-colors duration-300 sm:p-6 [&::-webkit-details-marker]:hidden">
                <span className="text-[0.95rem] sm:text-base">
                  {item.question}
                </span>
                <FiPlus
                  aria-hidden="true"
                  className="text-accent mt-0.5 shrink-0 text-lg transition-transform duration-300 group-open:rotate-45"
                />
              </summary>

              <p className="text-muted px-5 pb-5 text-sm leading-relaxed sm:px-6 sm:pb-6">
                {item.answer}{" "}
                {item.linkHref && item.linkLabel && (
                  <Link
                    href={item.linkHref}
                    className="text-accent link-underline"
                  >
                    {item.linkLabel}
                  </Link>
                )}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
