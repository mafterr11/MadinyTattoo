import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import GalleryPreviewGrid from "./GalleryPreviewGrid";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { galleryImages } from "../../lib/gallery";

/**
 * A taste of the portfolio, not the whole of it: four pages of the newest work
 * on a phone, two on anything wider. The rest lives behind "Vezi tot
 * portofoliul", which is the link this section exists to earn.
 */
const preview = galleryImages.slice(0, 16);

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
            <span className="text-accent">Lucrările</span> mele.
          </>
        }
        lead="Prin arta mea, transform viziunile în realitate, aducând emoție și semnificație fiecărui tatuaj."
      />

      <Reveal className="mt-14">
        <GalleryPreviewGrid images={preview} />
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
