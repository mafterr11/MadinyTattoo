import Link from "next/link";
import { RiInstagramLine, RiTiktokLine, RiWhatsappLine } from "react-icons/ri";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import {
  business,
  mailtoUrl,
  navLinks,
  socials,
  telUrl,
  whatsappUrl,
} from "../../lib/site";
import { BookingTrigger } from "../booking/BookingProvider";

const socialIcons = {
  instagram: RiInstagramLine,
  tiktok: RiTiktokLine,
};

const Footer = () => (
  <footer className="bg-ink/60 relative z-10 border-t border-white/8 backdrop-blur-sm">
    <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {/* Brand */}
      <div className="lg:col-span-1">
        <p className="neon font-display text-2xl tracking-tight">
          MADINY<span className="neon-dot">.</span>TATTOO
        </p>
        <p className="text-muted mt-4 max-w-xs text-sm leading-relaxed">
          {business.tagline}
        </p>
        <div className="mt-6 flex items-center gap-4 text-2xl">
          {socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-fg/60 hover:text-accent transition-colors duration-300"
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-fg/60 hover:text-accent transition-colors duration-300"
          >
            <RiWhatsappLine aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav aria-label="Navigare footer">
        <h2 className="text-fg text-xs font-semibold tracking-[0.22em] uppercase">
          Navigare
        </h2>
        <ul className="mt-5 space-y-2.5">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="text-muted hover:text-accent text-sm transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact */}
      <div>
        <h2 className="text-fg text-xs font-semibold tracking-[0.22em] uppercase">
          Contact
        </h2>
        <ul className="mt-5 space-y-3.5 text-sm">
          <li>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent group flex items-start gap-2.5 transition-colors duration-300"
            >
              <FiMapPin
                className="text-accent mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span>{business.addressFull}</span>
            </a>
          </li>
          <li>
            <a
              href={telUrl}
              className="text-muted hover:text-accent flex items-center gap-2.5 transition-colors duration-300"
            >
              <FiPhone className="text-accent shrink-0" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              href={mailtoUrl}
              className="text-muted hover:text-accent flex items-center gap-2.5 break-all transition-colors duration-300"
            >
              <FiMail className="text-accent shrink-0" aria-hidden="true" />
              {business.email}
            </a>
          </li>
        </ul>
      </div>

      {/* Opening hours */}
      <div>
        <h2 className="text-fg text-xs font-semibold tracking-[0.22em] uppercase">
          Program
        </h2>
        <ul className="mt-5 space-y-3 text-sm">
          {business.hours.map((entry) => (
            <li key={entry.label} className="flex flex-col">
              <span className="text-accent font-medium">{entry.label}:</span>
              <span className="text-muted">{entry.value}</span>
            </li>
          ))}
        </ul>
        <BookingTrigger className="btn btn-ghost btn-sm mt-6">
          Programează-te
        </BookingTrigger>
      </div>
    </div>

    <div className="border-t border-white/8">
      <div className="text-muted container flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
        <p>Madiny Tattoo © All Rights Reserved</p>
        <p>
          Creat de{" "}
          <Link
            href="https://myriad-tech.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-bright transition-colors duration-300"
          >
            Myriad Tech
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
