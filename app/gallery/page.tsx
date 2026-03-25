import GalleryContent from "./GalleryContent";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Remodeling Project Gallery — Kitchen, Bathroom & Basement Photos",
  description:
    "Browse real photos from completed kitchen, bathroom, and basement remodels across Bucks and Montgomery County. See our craftsmanship firsthand.",
  keywords: [
    "remodeling photos Bucks County",
    "kitchen remodel gallery",
    "bathroom renovation photos",
    "basement finishing before after",
    "home remodeling portfolio PA",
  ],
  canonical: "/gallery",
});

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        name: "Zwolinski Quality Construction Project Gallery",
        description:
          "Browse our portfolio of bathroom, kitchen, and basement remodeling projects by Zwolinski Quality Construction.",
        url: "https://zwolinskiconstr.com/gallery",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://zwolinskiconstr.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gallery",
            item: "https://zwolinskiconstr.com/gallery",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryContent />
    </>
  );
}
