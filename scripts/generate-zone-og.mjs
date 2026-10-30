import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { zones } from "../lib/zones.js";

// Share cards use real studio photography and editable, exact typography.
const output = fileURLToPath(new URL("../public/og/zone/", import.meta.url));
const photo = await sharp(
  fileURLToPath(
    new URL("../public/backgrounds/piercing.webp", import.meta.url),
  ),
)
  .resize(450, 630, { fit: "cover" })
  .png()
  .toBuffer();
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
await mkdir(output, { recursive: true });
for (const zone of zones) {
  const type =
    Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="750" height="630" fill="#08080a"/>
    <rect x="750" width="2" height="630" fill="#d4b39a"/>
    <g font-family="Arial, sans-serif">
      <text x="54" y="78" font-size="28" letter-spacing="4" fill="#f6f4f2">MADINY.TATTOO</text>
      <rect x="54" y="132" width="40" height="2" fill="#d4b39a"/>
      <text x="54" y="224" font-size="48" fill="#f6f4f2">Tatuaje pentru</text>
      <text x="50" y="310" font-size="76" fill="#d4b39a">${escape(zone.name)}</text>
      <text x="54" y="386" font-size="25" fill="#d2cdca">Fine line · Color · Realism</text>
      <rect x="54" y="477" width="640" height="1" fill="#353137"/>
      <text x="54" y="527" font-size="23" fill="#f6f4f2">Studio în Pipera · Șos. Pipera 61</text>
      <text x="54" y="568" font-size="20" fill="#a9a4a0">www.madinytattoo.ro</text>
    </g>
  </svg>`);
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: "#08080a" },
  })
    .composite([
      { input: photo, left: 750, top: 0 },
      { input: type, left: 0, top: 0 },
    ])
    .png()
    .toFile(`${output}/${zone.slug}.png`);
  console.log(`Generated /og/zone/${zone.slug}.png (1200×630)`);
}
