import Reveal from "./Reveal";
import { aftercareSteps } from "../lib/aftercare";

const TattooCare = () => (
  <ol className="relative space-y-4">
    {aftercareSteps.map((step, i) => (
      <Reveal as="li" key={step.title} delay={i * 0.07}>
        <div className="card card-hover flex gap-5 p-6 sm:gap-7 sm:p-8">
          <span
            aria-hidden="true"
            className="font-display text-accent/35 text-3xl leading-none tabular-nums sm:text-4xl"
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <div>
            <h3 className="text-lg sm:text-xl">{step.title}</h3>
            <p className="text-muted mt-2 text-sm leading-relaxed sm:text-[0.95rem]">
              {step.description}
            </p>
          </div>
        </div>
      </Reveal>
    ))}
  </ol>
);

export default TattooCare;
