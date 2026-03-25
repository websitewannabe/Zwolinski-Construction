import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Basement Remodeling",
  description:
    "Professional basement remodeling services by Zwolinski Quality Construction. Space planning, waterproofing, custom built-ins, and more in Bucks, Montgomery, and Lehigh Counties.",
  alternates: { canonical: "/services/basement-remodeling" },
};

const features = [
  "Space Planning & Design",
  "Waterproofing Solutions",
  "Flooring Installation",
  "Electrical & Lighting",
  "Insulation & Drywall",
  "Custom Built-ins",
  "Bathroom Addition",
  "Entertainment Areas",
  "Home Office Conversion",
  "Storage Solutions",
];

const benefits = [
  "Increase home value",
  "Additional living space",
  "Improved energy efficiency",
  "Enhanced storage capacity",
  "Custom entertainment area",
];

const galleryImages = [
  {
    src: "/images/gallery/basements/3A5F4CCD-CF1F-45C5-B866-276093168604.jpg",
    alt: "Basement remodeling project by Zwolinski Quality Construction",
  },
  {
    src: "/images/gallery/basements/6C563CBA-812C-4666-8ED7-6D05BAB1F7C1.jpg",
    alt: "Custom basement renovation with modern finishes",
  },
  {
    src: "/images/gallery/basements/IMG_0231.JPG",
    alt: "Completed basement remodel with elegant design",
  },
];

export default function BasementRemodelingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basement Remodeling & Finishing",
    "description": "Professional basement remodeling and finishing services including waterproofing, space planning, custom built-ins, and premium finishes. Convert your unused basement into beautiful living space.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Zwolinski Quality Construction",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perkasie",
        "addressRegion": "PA",
        "addressCountry": "US"
      },
      "url": "https://www.zwolinskiconstruction.com"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Bucks County, PA" },
      { "@type": "AdministrativeArea", "name": "Montgomery County, PA" },
      { "@type": "AdministrativeArea", "name": "Lehigh County, PA" }
    ],
    "serviceType": "Basement Remodeling"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zwolinskiconstruction.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.zwolinskiconstruction.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Basement Remodeling", "item": "https://www.zwolinskiconstruction.com/services/basement-remodeling" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection
        image="/images/gallery/basements/IMG_0227.JPG"
        imageAlt="Basement remodeling by Zwolinski Quality Construction"
        title="Basement"
        titleAccent="Remodeling"
        subtitle="Convert your unused basement into a beautiful living space, entertainment area, or home office with expert waterproofing and premium finishes."
        ctaText="Get a Free Quote"
      />

      {/* Features Grid */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              What We Offer
            </p>
            <h2 className="heading-lg text-white">
              Basement Remodeling Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="card-luxury p-6 flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-zinc-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
                Why Remodel
              </p>
              <h2 className="heading-lg text-white mb-8">
                Benefits of a Basement Remodel
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-zinc-400 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-10 text-center">
              <h3 className="font-serif text-2xl text-white mb-4">
                Ready to Transform Your Basement?
              </h3>
              <p className="text-zinc-400 mb-8">
                Contact us today for a free consultation and let&apos;s unlock
                the full potential of your basement.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Our Work
            </p>
            <h2 className="heading-lg text-white">Basement Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery/basements/IMG_0227.JPG"
          alt="Basement remodeling by Zwolinski Quality Construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Start Your Project
          </p>
          <h2 className="heading-lg text-white mb-6">
            Let&apos;s Transform Your Basement
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Contact us today for a free consultation and detailed estimate.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
