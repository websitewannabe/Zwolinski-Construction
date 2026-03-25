import { generateOgImage } from "@/lib/og/og-template";
import { ogConfig } from "@/lib/og/og-config";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return generateOgImage({
    title: ogConfig.default.title,
    meta: ogConfig.default.meta,
    background: ogConfig.default.background,
  });
}
