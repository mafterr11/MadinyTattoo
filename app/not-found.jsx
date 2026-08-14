import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { navLinks } from "../lib/site";

export const metadata = {
  title: "Pagină negăsită - MadinyTattoo",
  // A 404 must never be indexed, or it competes with the real pages.
  robots: { index: false, follow: true },
};

const NotFound = () => (
  <section className="flex min-h-[80svh] items-center pt-28 pb-20">
    <div className="container text-center">
      <span className="eyebrow eyebrow-center">Eroare 404</span>

      <p className="font-display text-accent/20 mt-6 text-[clamp(5rem,20vw,12rem)] leading-none">
        404
      </p>

      <h1 className="mt-2">Pagina nu a fost găsită.</h1>

      <p className="lead mx-auto mt-5 max-w-md">
        Linkul pe care l-ai accesat nu mai există sau a fost mutat. Hai să te
        ducem înapoi la treabă.
      </p>

      <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
        <Link href="/" className="btn btn-primary btn-block">
          Înapoi acasă
        </Link>
        <Link href="/proiecte" className="btn btn-ghost btn-block">
          Vezi lucrările
          <FiArrowUpRight className="text-base" aria-hidden="true" />
        </Link>
      </div>

      <nav aria-label="Pagini disponibile" className="mt-14">
        <p className="text-muted text-[0.7rem] tracking-[0.22em] uppercase">
          Sau alege o pagină
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="link-underline text-muted hover:text-accent text-sm tracking-[0.1em] uppercase transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </section>
);

export default NotFound;
