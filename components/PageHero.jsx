import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import Reveal from "./Reveal";

/**
 * Shared masthead for inner pages. The themed background image now lives in
 * this band instead of being fixed behind the whole page, so long pages stay
 * readable and the image is served through next/image.
 */
const PageHero = ({ eyebrow, title, lead, image, breadcrumbs = [] }) => (
  <section className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20">
    {image && (
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-ink via-ink/85 to-ink/70 absolute inset-0 bg-gradient-to-b" />
        <div className="from-ink absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
      </div>
    )}

    <div className="container">
      {breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb">
          <ol className="text-muted flex flex-wrap items-center gap-1.5 text-[0.7rem] tracking-[0.12em] uppercase">
            {breadcrumbs.map((crumb, i) => {
              const last = i === breadcrumbs.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-1.5">
                  {last ? (
                    <span className="text-accent" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={crumb.path}
                        className="hover:text-fg transition-colors duration-300"
                      >
                        {crumb.name}
                      </Link>
                      <FiChevronRight className="opacity-50" aria-hidden="true" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <div className="mt-6 max-w-3xl">
        {eyebrow && (
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}

        <Reveal delay={0.08}>
          <h1 className="mt-5">{title}</h1>
        </Reveal>

        {lead && (
          <Reveal delay={0.16}>
            <p className="lead mt-6">{lead}</p>
          </Reveal>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
