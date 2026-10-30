import { notFound } from "next/navigation";
import ZonePage from "../../../components/pages/ZonePage";
import { getZone, zones } from "../../../lib/zones";
import { zoneMetadata } from "../../../lib/zoneSeo";

export const dynamicParams = false;

export function generateStaticParams() {
  return zones.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const zone = getZone((await params).slug);
  if (!zone) notFound();
  return zoneMetadata(zone);
}

export default async function Page({ params }) {
  const zone = getZone((await params).slug);
  if (!zone) notFound();
  return <ZonePage zone={zone} />;
}
