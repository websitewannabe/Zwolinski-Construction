import type { Metadata } from "next";

export const siteConfig = {
  name: "Zwolinski Quality Construction",
  url: "https://zwolinskiconstr.com",
  description:
    "Trusted luxury home remodeling contractor serving Bucks, Montgomery, and Lehigh Counties for over 25 years. Expert kitchen, bathroom, and basement remodeling with quality craftsmanship.",
  keywords: [
    "home remodeling",
    "kitchen remodeling",
    "bathroom remodeling",
    "basement remodeling",
    "home renovation",
    "luxury remodeling",
    "Bucks County contractor",
    "Montgomery County contractor",
    "Lehigh County contractor",
    "Pennsylvania home improvement",
    "Zwolinski Construction",
    "quality craftsmanship",
  ],
  authors: [{ name: "Zwolinski Quality Construction" }] as { name: string }[],
  creator: "Zwolinski Quality Construction",
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    url: "https://zwolinskiconstr.com",
    siteName: "Zwolinski Quality Construction",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

/**
 * Generate consistent metadata for any page, following the B&H pattern:
 * - Full standalone titles (no template suffix)
 * - 155-165 char descriptions with trust signals and CTAs
 * - Merged site-wide + page-specific keywords
 * - Explicit canonical URLs
 * - OG images handled separately via opengraph-image.tsx files
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  noIndex = false,
  canonical,
  openGraph,
}: {
  title: string;
  description: string;
  keywords?: string[];
  noIndex?: boolean;
  canonical?: string;
  openGraph?: Partial<Metadata["openGraph"]>;
}): Metadata {
  const fullKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title,
    description,
    keywords: fullKeywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    robots: noIndex ? { index: false, follow: false } : siteConfig.robots,
    openGraph: {
      ...siteConfig.openGraph,
      title,
      description,
      // images intentionally omitted — opengraph-image.tsx handles this
      ...openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      title,
      description,
    },
    ...(canonical && {
      alternates: {
        canonical,
      },
    }),
  };
}
