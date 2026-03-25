import { generateOgImage } from "@/lib/og/og-template";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return generateOgImage({
    title: "Frequently Asked Questions",
    meta: "Answers About Our Remodeling Services",
    background: "/images/projects/constructionHero.jpg",
  });
}
