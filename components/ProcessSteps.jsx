import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Column count matches the number of steps, so a four-step walkthrough fills
 * the row evenly instead of leaving a fifth column empty on the right.
 * Written out in full because Tailwind scans for literal class names.
 */
const COLUMNS = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

/**
 * Numbered walkthrough of a service.
 *
 * On wide screens the steps sit on a single horizontal rule so the row reads
 * as a timeline; stacked on phones, the rule becomes a vertical spine instead.
 */
const ProcessSteps = ({ title, lead, steps }) => (
  <section
    aria-label={title}
    className="section bg-surface/40 border-y border-white/8"
  >
    <div className="container">
      <SectionHeading eyebrow="Pas cu pas" title={title} lead={lead} />

      <ol
        className={`mt-14 grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-6 ${
          COLUMNS[steps.length] ?? "lg:grid-cols-4"
        }`}
      >
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
            <div className="flex items-center gap-3">
              <span className="font-display text-gradient-accent text-3xl leading-none tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden="true"
                className="from-accent/40 h-px flex-1 bg-gradient-to-r to-transparent"
              />
            </div>

            <h3 className="font-poppins mt-5 text-[0.85rem] leading-6 font-semibold tracking-[0.14em] uppercase">
              {step.title}
            </h3>

            <p className="text-muted mt-3 text-sm leading-relaxed">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSteps;
