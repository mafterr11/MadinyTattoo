import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import BlurImage from "../BlurImage";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { galleryImages } from "../../lib/gallery";

const preview = galleryImages.slice(0, 8);

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
        lead="Prin arta mea, transform viziunile în realitate, aducând emoție și semnificație fiecărui tatuaj. Explorează portofoliul meu și lasă-te captivat de poveștile vizuale pe care le-am imprimat pe piele."
      />

      <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {preview.map((image, i) => (
          <Reveal as="li" key={image.src} delay={i * 0.05}>
            <Link
              href="/proiecte"
              aria-label="Vezi portofoliul complet de tatuaje"
              className="group border-fg/8 hover:border-accent/50 relative block aspect-4/5 overflow-hidden rounded-xl border transition-colors duration-500"
            >
              <BlurImage
                src={image.src}
                alt={image.alt}
                blurDataURL={image.blurDataURL}
                sizes="(max-width: 768px) 48vw, 300px"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <div className="mt-12 flex justify-center">
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
