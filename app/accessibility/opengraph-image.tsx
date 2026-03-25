import { generateOgImage } from "@/lib/og/og-template";
import { getPageOgConfig } from "@/lib/og/og-config";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const config = getPageOgConfig("accessibility");
  return generateOgImage({ title: config.title, meta: config.meta, background: config.background });
}
