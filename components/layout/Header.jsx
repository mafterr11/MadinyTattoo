"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars2, HiXMark } from "react-icons/hi2";
import { RiInstagramLine, RiTiktokLine, RiWhatsappLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

import { navLinks, socials, business, telUrl, whatsappUrl } from "../../lib/site";

const socialIcons = {
  instagram: RiInstagramLine,
  tiktok: RiTiktokLine,
};

const Logo = ({ onClick }) => {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const handleClick = (event) => {
    // Already home: scroll back to the top instead of a no-op navigation.
    if (onHome) {
      event.preventDefault();
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    }
    onClick?.();
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label={
        onHome
          ? `${business.name} — înapoi sus`
          : `${business.name} — pagina principală`
      }
      className="neon font-display text-xl tracking-tight whitespace-nowrap sm:text-2xl"
    >
      MADINY<span className="neon-dot">.</span>TATTOO
    </Link>
  );
};

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <a
        href="#continut"
        className="btn btn-primary btn-sm sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        Sari la conținut
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/8 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Navigare principală" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={`link-underline text-[0.8125rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-accent"
                        : "text-fg/70 hover:text-fg"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-4 text-xl xl:flex">
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
            </div>

            <Link href="/contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Programează-te
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Deschide meniul"
              aria-expanded={open}
              aria-controls="meniu-mobil"
              className="border-fg/20 text-fg hover:border-accent hover:text-accent flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden"
            >
              <HiBars2 className="text-xl" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="meniu-mobil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-ink/97 fixed inset-0 z-60 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex h-16 items-center justify-between">
              <Logo onClick={() => setOpen(false)} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Închide meniul"
                className="border-fg/20 text-fg hover:border-accent hover:text-accent flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300"
              >
                <HiXMark className="text-xl" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Navigare mobilă"
              className="container flex h-[calc(100dvh-4rem)] flex-col justify-center"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.35 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.path) ? "page" : undefined}
                      className={`font-display block border-b border-white/6 py-4 text-3xl transition-colors duration-300 ${
                        isActive(link.path) ? "text-accent" : "text-fg"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <RiWhatsappLine className="text-lg" aria-hidden="true" />
                  Scrie-ne pe WhatsApp
                </a>
                <a href={telUrl} className="btn btn-ghost">
                  <FiPhone className="text-base" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-2xl">
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
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
