import SectionHeading from "../SectionHeading";
import Testimonials from "../Testimonials";

const TestimonialsSection = () => (
  <section id="testimoniale" className="section">
    <div className="container">
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
    </div>
  </section>
);

export default TestimonialsSection;
