import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";

import MapEmbed from "../MapEmbed";
import PageHero from "../PageHero";
import Reveal from "../Reveal";
import { business, mailtoUrl, telUrl, whatsappUrl } from "../../lib/site";

const highlights = [
  "Programări",
  "Asistență",
  "Tatuaje unice",
  "Întrebări",
  "Estimare de preț",
];

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title={
        <>
          Să ne <span className="text-accent">conectăm.</span>
        </>
      }
      breadcrumbs={[
        { name: "Acasă", path: "/" },
        { name: "Contact", path: "/contact" },
      ]}
    />

    {/* On a phone these five pills push the actual contact details below the
        fold while only restating what the page is for. */}
    <div className="container hidden md:block">
      <Reveal>
        <ul className="flex flex-wrap gap-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="border-accent/25 bg-accent/8 text-accent rounded-full border px-4 py-1.5 text-[0.7rem] tracking-[0.16em] uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>

    <section className="pt-14 pb-20 lg:pt-16 lg:pb-28">
      <div className="container grid gap-6 lg:grid-cols-5">
        {/* Details */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Reveal>
            <div className="card p-7">
              <h2 className="text-xl">Date de contact</h2>

              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="border-accent/25 bg-accent/8 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <FiMapPin aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
                      Adresă
                    </p>
                    <a
                      href={business.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg hover:text-accent mt-1 block transition-colors duration-300"
                    >
                      {business.addressFull}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="border-accent/25 bg-accent/8 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <FiPhone aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
                      Telefon
                    </p>
                    <a
                      href={telUrl}
                      className="text-fg hover:text-accent mt-1 block transition-colors duration-300"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="border-accent/25 bg-accent/8 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <FiMail aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted text-[0.7rem] tracking-[0.2em] uppercase">
                      Email
                    </p>
                    <a
                      href={mailtoUrl}
                      className="text-fg hover:text-accent mt-1 block break-all transition-colors duration-300"
                    >
                      {business.email}
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-8 w-full"
              >
                <RiWhatsappLine className="text-lg" aria-hidden="true" />
                Scrie-ne pe WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-7">
              <div className="flex items-center gap-3">
                <FiClock className="text-accent text-lg" aria-hidden="true" />
                <h2 className="text-xl">Program</h2>
              </div>

              <ul className="mt-5 space-y-3">
                {business.hours.map((entry) => (
                  <li
                    key={entry.label}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/6 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-accent text-sm font-medium">
                      {entry.label}:
                    </span>
                    <span className="text-muted text-sm">{entry.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.15} className="lg:col-span-3">
          <div className="card iframe-container h-[420px] overflow-hidden p-0 sm:h-[520px] lg:h-full lg:min-h-[560px]">
            <MapEmbed />
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ContactPage;
