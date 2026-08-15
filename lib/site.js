/**
 * Single source of truth for business data.
 * Used by the UI (header, footer, contact) and by the JSON-LD structured data,
 * so the two can never drift apart — which is what Google penalises.
 */

export const SITE_URL = "https://www.madinytattoo.ro";

export const business = {
  name: "Madiny Tattoo",
  legalName: "Madiny Tattoo",
  tagline: "Salon de tatuaje, micropigmentare, laser removal și piercing în București",
  phone: "+40741620774",
  phoneDisplay: "+40.741.620.774",
  email: "madinytattoo@gmail.com",
  street: "Șos. Pipera 61",
  locality: "București",
  region: "București",
  postalCode: "077190",
  country: "RO",
  addressFull: "Șos. Pipera 61, București 077190",
  mapsUrl: "https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11385.737698530624!2d26.1075064!3d44.4857646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203567ff26e41%3A0x3c22c06af60c1061!2sMadiny%20Tattoo!5e0!3m2!1sen!2sro!4v1701444628772!5m2!1sen!2sro",
  geo: { lat: 44.4857646, lng: 26.1075064 },
  priceRange: "200 - 2000 RON",
  hours: [
    { label: "Luni-Sâmbătă", value: "11:00 - 19:00" },
    { label: "Duminică", value: "Închis" },
  ],
};

export const whatsappUrl = `https://wa.me/${business.phone.replace("+", "")}`;
export const telUrl = `tel:${business.phone}`;
export const mailtoUrl = `mailto:${business.email}`;

export const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/madinytattoo/",
    icon: "instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@madinytattoo",
    icon: "tiktok",
  },
];

export const navLinks = [
  { name: "Acasă", path: "/" },
  { name: "Servicii", path: "/servicii" },
  { name: "Proiecte", path: "/proiecte" },
  { name: "Aftercare", path: "/aftercare" },
  { name: "Contact", path: "/contact" },
];
// The dedicated /testimoniale page is parked in app/_testimoniale — Next skips
// underscore-prefixed folders when building routes. Restore it by renaming the
// folder back and adding { name: "Testimoniale", path: "/testimoniale" } above.

export const services = [
  {
    title: "Tatuaje",
    path: "/servicii/tatuaje",
    description:
      "Intră în lumea noastră cu designuri expresive și personalizate pentru a-ți îndeplini visul de a avea un tatuaj memorabil.",
    image: "/gallery/tattooService/albNegruTattoo.webp",
  },
  {
    title: "Micropigmentare",
    path: "/servicii/micropigmentare",
    description:
      "Descoperă magia micropigmentării pentru trăsături perfecte și naturale, conturând frumusețea ta într-un mod subtil și rafinat.",
    image: "/gallery/micropigmentareService/micropigmentareSprancene.webp",
  },
  {
    title: "Laser",
    path: "/servicii/laser",
    description:
      "Transformă trecutul într-o poveste uitată. Cu laserul nostru avansat, eliminăm tatuajele fără regrete, oferindu-ți un nou început.",
    image: "/gallery/laserService/laserRemoval.webp",
  },
  {
    title: "Piercing",
    path: "/servicii/piercing",
    description:
      "Adaugă un plus de stil și expresivitate cu un piercing realizat profesional. Evidențiază-ți unicitatea în siguranță și confort.",
    image: "/backgrounds/piercing.webp",
  },
];
