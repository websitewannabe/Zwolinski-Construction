import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our portfolio of bathroom, kitchen, and basement remodeling projects.",
  alternates: { canonical: "/gallery" },
};

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
