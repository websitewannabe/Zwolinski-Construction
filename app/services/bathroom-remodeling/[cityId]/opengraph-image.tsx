import { generateOgImage } from "@/lib/og/og-template";
import citiesData from "@/data/cities.json";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return citiesData.cities.map((city) => ({ cityId: city.id }));
}

type Props = { params: Promise<{ cityId: string }> };

export default async function OpenGraphImage({ params }: Props) {
  const { cityId } = await params;
  const city = citiesData.cities.find((c) => c.id === cityId);
  const cityName = city ? city.name : cityId;
  return generateOgImage({
    title: `Bathroom Remodeling in ${cityName}, PA`,
    meta: city?.county || "Bucks County, PA",
    background: "/images/gallery/bathrooms/newBathroom2.jpg",
  });
}
