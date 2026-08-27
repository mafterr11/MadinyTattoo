import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import GalleryPreviewGrid from "./GalleryPreviewGrid";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { artistCounts, previewImages } from "../../lib/gallery";

/**
 * A taste of the portfolio, not the whole of it: the newest few from each
 * artist, filterable by who made them. The rest lives behind "Vezi tot
 * portofoliul", which is the link this section exists to earn.
 *
 * The counts come from the full portfolio rather than from this teaser — see
 * lib/gallery.js — so a tab never advertises eight pieces when there are
 * thirty-six behind the link.
 */
const GalleryPreview = () => (
  <section
    id="lucrari"
    className="section bg-surface/40 border-y border-white/8"
  >
    <div className="container">
      <SectionHeading
        eyebrow="Portofoliu"
        title={
          <>
            <span className="text-accent">Lucrările</span> noastre.
          </>
        }
        lead="Transformăm viziunile în realitate, cu emoție și semnificație în fiecare tatuaj. Vezi-le pe toate la un loc sau filtrează după artistă."
      />

      <Reveal className="mt-14">
        <GalleryPreviewGrid images={previewImages} counts={artistCounts} />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex justify-center">
          <Link href="/proiecte" className="btn btn-ghost">
            Vezi tot portofoliul
            <FiArrowUpRight className="text-base" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default GalleryPreview;
