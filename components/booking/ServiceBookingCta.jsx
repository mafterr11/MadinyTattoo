import Reveal from "../Reveal";
import { BookingTrigger } from "./BookingProvider";

/**
 * The closing offer on a service page: book *this* service. Naming the service
 * lets the wizard skip its chooser and open straight on the questions that
 * matter for it.
 */
const ServiceBookingCta = ({ service, label = "Programează-te acum!" }) => (
  <section className="py-16 lg:py-20">
    <div className="container">
      <Reveal>
        <div className="flex justify-center">
          <BookingTrigger service={service} className="btn btn-primary">
            {label}
          </BookingTrigger>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ServiceBookingCta;
