import SectionHeading from "../SectionHeading";
import Testimonials from "../Testimonials";
import GoogleReviews from "./GoogleReviews";
import { hasGoogleReviews } from "../../lib/reviews";

/**
 * One social-proof section, two possible sources.
 *
 * Once real Google reviews are added to lib/reviews.js this switches to them
 * automatically — score badge, stars and all. Until then it keeps the written
 * testimonials, so the homepage is never left without social proof and never
 * shows invented stars.
 */
const TestimonialsSection = () => (
  <section id="testimoniale" className="section">
    <div className="container">
      {hasGoogleReviews() ? (
        <GoogleReviews />
      ) : (
        <>
          <SectionHeading
            eyebrow="Recenzii"
            title={
              <>
                Părerea <span className="text-accent">clienților.</span>
              </>
            }
          />

          <div className="mt-14">
            <Testimonials />
          </div>
        </>
      )}
    </div>
  </section>
);

export default TestimonialsSection;
