import type { Metadata } from "next";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Leave a Review",
  description:
    "Leave a review for Zwolinski Quality Construction on Google or HomeAdvisor. Your feedback helps us serve our community better.",
  alternates: { canonical: "/reviews" },
};

const reviewPlatforms = [
  {
    name: "Google Reviews",
    logo: "/images/google-logo.png",
    alt: "Google Reviews",
    description: "Share your experience on Google to help other homeowners find quality construction services.",
    href: "https://www.google.com/search?q=zwolinski+quality+construction#lrd=0x89c6a05cc01b6e05:0x4f72758643065789,1",
  },
  {
    name: "HomeAdvisor Reviews",
    logo: "/images/homeadvisor-logo.png",
    alt: "HomeAdvisor Reviews",
    description: "Rate your project on HomeAdvisor and let others know about our craftsmanship and service.",
    href: "https://www.homeadvisor.com/rated.ZWOLINSKIQuality.8386546.html",
  },
];

export default function ReviewsPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zwolinski Quality Construction",
    url: "https://zwolinskiconstr.com",
    telephone: "+1-267-471-6120",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perkasie",
      addressRegion: "PA",
      postalCode: "18944",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "150",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Reviews",
        item: "https://zwolinskiconstr.com/reviews",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="section-padding bg-zinc-950">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Your Feedback Matters
          </p>
          <h1 className="heading-xl text-white">
            Leave Us a <span className="text-primary">Review</span>
          </h1>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
            We appreciate your business and would love to hear about your
            experience working with us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-3xl mx-auto">
          {reviewPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 card-luxury p-8 text-center hover:border-primary/30 transition-all group"
            >
              <Image
                src={platform.logo}
                alt={platform.alt}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="font-serif text-xl text-white mb-2">
                {platform.name}
              </h2>
              <p className="text-zinc-500 text-sm mb-6">
                {platform.description}
              </p>
              <MessageSquare className="h-5 w-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-primary text-sm uppercase tracking-wide">
                Write a Review &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
