import Hero from "../home/Hero";
import Safety from "../Safety";
import ArtistsSection from "../home/ArtistsSection";
import ServicesSection from "../home/ServicesSection";
import GalleryPreview from "../home/GalleryPreview";
import TestimonialsSection from "../home/TestimonialsSection";
import ContactCta from "../home/ContactCta";

/**
 * The artists sit between the hygiene band and the price list on purpose: the
 * two questions a stranger has before reading a tariff are whether the place
 * is clean and whose hands they would be in.
 */
const HomePage = () => (
  <>
    <Hero />
    <Safety />
    <ArtistsSection />
    <ServicesSection />
    <GalleryPreview />
    <TestimonialsSection />
    <ContactCta />
  </>
);

export default HomePage;
