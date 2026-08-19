import PageHero from "../PageHero";
import Reveal from "../Reveal";
import { updatedLabel } from "../../lib/legal";

/**
 * Shared shell for the three legal pages.
 *
 * They are read, not browsed: one column, generous measure, headings the eye
 * can find. `sections` is `{ title, body }` where body is whatever markup the
 * clause needs — the styling lives here so the three pages cannot drift apart.
 */
const LegalPage = ({ eyebrow, title, intro, sections, breadcrumbs }) => (
  <>
    <PageHero
      eyebrow={eyebrow}
      title={title}
      lead={intro}
      breadcrumbs={breadcrumbs}
    />

    <section className="pb-20 lg:pb-28">
      <div className="legal-prose container max-w-3xl">
        <Reveal>
          <p className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
            Ultima actualizare: {updatedLabel}
          </p>
          <div className="hairline mt-6" />
        </Reveal>

        {sections.map((section, i) => (
          <Reveal key={section.title} delay={Math.min(i, 4) * 0.06}>
            <div className="mt-12 first:mt-10">
              <h2 className="text-xl sm:text-2xl">
                <span className="text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}.
                </span>{" "}
                {section.title}
              </h2>
              <div className="mt-5">{section.body}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default LegalPage;
