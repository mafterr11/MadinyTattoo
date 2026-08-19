import { business } from "../lib/site";

/**
 * The Google Maps embed on /contact.
 *
 * Loaded with the page rather than behind a click: finding the studio is the
 * reason most people open /contact at all, and a map you have to ask for is a
 * map most visitors never see.
 *
 * That is a deliberate trade. The iframe reaches Google as soon as it renders,
 * so Google receives the visitor's IP and may set cookies without being asked
 * first — /cookies and /confidentialitate say exactly that, and must keep
 * saying it for as long as this loads on its own.
 *
 * `loading="lazy"` still holds the request back until the map is near the
 * viewport, so nothing is fetched for someone who never scrolls to it.
 */
const MapEmbed = () => (
  <iframe
    title={`Harta către ${business.name}, ${business.addressFull}`}
    src={business.mapsEmbed}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="responsive-iframe"
    style={{ filter: "grayscale(0.5) contrast(1.05) brightness(0.85)" }}
  />
);

export default MapEmbed;
