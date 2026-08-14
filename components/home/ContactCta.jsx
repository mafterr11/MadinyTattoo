import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

import Reveal from "../Reveal";
import {
  business,
  mailtoUrl,
  telUrl,
  whatsappUrl,
} from "../../lib/site";

const details = [
  {
    icon: FiMapPin,
    label: "Adresă",
    value: business.addressFull,
    href: business.mapsUrl,
    external: true,
  },
  {
    icon: FiPhone,
    label: "Telefon",
    value: business.phoneDisplay,
    href: telUrl,
  },
  {
    icon: FiMail,
    label: "Email",
    value: business.email,
    href: mailtoUrl,
  },
];

const ContactCta = () => (
  <section
    id="contact"
    className="section bg-surface/40 border-t border-white/8"
  >
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">Programări</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5">
              Să ne <span className="text-accent">conectăm.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="lead mt-5 max-w-lg">
              Programări, asistență, tatuaje unice, întrebări sau estimare de
              preț — scrie-ne și îți răspundem cât putem de repede.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                <RiWhatsappLine className="text-lg" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-block"
              >
                <FiMapPin className="text-base" aria-hidden="true" />
                Vezi harta
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="card p-7 sm:p-9">
            <ul className="space-y-6">
              {details.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="border-accent/25 bg-accent/8 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <Icon aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
                      {label}
                    </p>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-fg hover:text-accent mt-1 block break-words transition-colors duration-300"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/8 pt-6">
              <p className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
                Program
              </p>
              <ul className="mt-3 space-y-1.5">
                {business.hours.map((entry) => (
                  <li key={entry.label} className="flex justify-between gap-4 text-sm">
                    <span className="text-accent">{entry.label}:</span>
                    <span className="text-muted">{entry.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ContactCta;
