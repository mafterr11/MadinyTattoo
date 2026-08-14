import { FiPlus } from "react-icons/fi";

import Reveal from "./Reveal";
import { laserFaq } from "../lib/pricing";

/**
 * Native <details> accordion — zero JavaScript, keyboard-accessible for free,
 * and the answers stay in the DOM so Google can lift them into a rich result.
 */
const FAQSection = () => (
  <section aria-labelledby="faq-laser" className="section border-t border-white/8">
    <div className="container max-w-4xl">
      <Reveal>
        <span className="eyebrow">Răspunsuri</span>
        <h2 id="faq-laser" className="mt-5">
          Întrebări frecvente
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {laserFaq.map((item, i) => (
          <Reveal key={item.question} delay={Math.min(i, 5) * 0.05}>
            <details className="card group overflow-hidden">
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
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
