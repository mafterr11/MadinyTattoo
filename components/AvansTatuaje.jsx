import { FiAlertTriangle } from "react-icons/fi";

import Reveal from "./Reveal";
import { deposit } from "../lib/deposit";

const AvansTatuaje = () => (
  <section
    aria-labelledby="politica-avans"
    className="section bg-surface/40 border-y border-white/8"
  >
    <div className="container max-w-4xl">
      <Reveal>
        <span className="eyebrow">Programări</span>
        <h2 id={deposit.anchor} className="mt-5">
          Politica de avans pentru programări
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="lead mt-6">
          Pentru a confirma o programare la salonul nostru de tatuaj, este
          necesar un avans cuprins între{" "}
          <strong className="text-fg font-semibold">
            {deposit.min} și {deposit.max} lei
          </strong>, în
          funcție de costul total al tatuajului.
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="card mt-8 border-red-400/25 bg-red-500/6 p-6 sm:p-8">
          <h3 className="flex items-start gap-3 text-lg text-red-300">
            <FiAlertTriangle className="mt-1 shrink-0" aria-hidden="true" />
            <span>
              Avansul este <span className="underline">nereturnabil</span> în
              următoarele situații:
            </span>
          </h3>

          <ul className="text-muted mt-5 space-y-3 text-sm sm:text-[0.95rem]">
            <li className="before:bg-accent relative pl-5 before:absolute before:top-2.5 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full">
              Clientul nu se prezintă la programare.
            </li>
            <li className="before:bg-accent relative pl-5 before:absolute before:top-2.5 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full">
              Clientul nu anunță în timp util dorința de a reprograma (cu cel
              puțin{" "}
              <strong className="text-fg font-semibold">
                {deposit.noticeHours} de ore
              </strong>{" "}
              înainte de ora stabilită).
            </li>
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <p className="text-muted mt-8 leading-relaxed">
          Această politică ne ajută să respectăm timpul fiecărui client și să
          menținem un program eficient. Dacă ne anunțați cu cel puțin{" "}
          <strong className="text-fg font-semibold">
            {deposit.noticeHours} de ore
          </strong>{" "}
          înainte,
          vom face tot posibilul să găsim o nouă dată convenabilă pentru
          reprogramare, fără a pierde avansul achitat.
        </p>
      </Reveal>

      <Reveal delay={0.32}>
        <p className="font-display text-accent mt-10 text-center text-xl">
          Vă mulțumim pentru înțelegere și pentru încrederea acordată!
        </p>
      </Reveal>
    </div>
  </section>
);

export default AvansTatuaje;
