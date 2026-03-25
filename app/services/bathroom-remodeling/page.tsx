import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { generatePageMetadata } from "@/lib/metadata";
import citiesData from "@/data/cities.json";

export const metadata = generatePageMetadata({
  title: "Bathroom Remodeling in Bucks County — Showers, Tile & Complete Renovations",
  description:
    "Turn your outdated bathroom into a spa-like retreat. Custom showers, vanities, and tile work — fully managed by our own crew. Free estimates.",
  keywords: [
    "bathroom remodeling Bucks County",
    "bathroom renovation PA",
    "custom shower installation",
    "bathroom contractor Montgomery County",
    "vanity installation",
    "tile work Bucks County",
  ],
  canonical: "/services/bathroom-remodeling",
});

const features = [
  "Custom Shower Design",
  "Vanity Installation",
  "Tile Installation",
  "Plumbing Fixtures",
  "Lighting Solutions",
  "Flooring Installation",
  "Mirror & Glass Work",
  "Ventilation Systems",
  "Accessibility Features",
  "Storage Solutions",
];

const benefits = [
  "Increase home value",
  "Improved functionality",
  "Enhanced comfort",
  "Better water efficiency",
  "Modern aesthetics",
];

const galleryImages = [
  {
    src: "/images/gallery/bathrooms/newBathroom1.jpg",
    alt: "Bathroom remodeling project by Zwolinski Quality Construction",
  },
  {
    src: "/images/gallery/bathrooms/newBathroom4.jpg",
    alt: "Custom bathroom renovation with modern fixtures",
  },
  {
    src: "/images/gallery/bathrooms/newBathroom3.jpg",
    alt: "Completed bathroom remodel with elegant tile work",
  },
];

export default function BathroomRemodelingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Remodeling",
    "description": "Professional bathroom remodeling services including custom showers, vanities, tile work, and modern fixtures. Transform your bathroom into a luxurious spa-like retreat.",
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
    "serviceType": "Bathroom Remodeling"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zwolinskiconstruction.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.zwolinskiconstruction.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Bathroom Remodeling", "item": "https://www.zwolinskiconstruction.com/services/bathroom-remodeling" }
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
        image="/images/gallery/bathrooms/IMG_6024.jpg"
        imageAlt="Bathroom remodeling by Zwolinski Quality Construction"
        title="Bathroom"
        titleAccent="Remodeling"
        subtitle="Transform your bathroom into a luxurious spa-like retreat with custom tile work, modern fixtures, and expert craftsmanship."
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
              Bathroom Remodeling Services
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
                Benefits of a Bathroom Remodel
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
                Ready to Transform Your Bathroom?
              </h3>
              <p className="text-zinc-400 mb-8">
                Contact us today for a free consultation and let&apos;s design
                your perfect bathroom.
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
            <h2 className="heading-lg text-white">Bathroom Projects</h2>
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

      {/* Service Areas */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Service Areas
            </p>
            <h2 className="heading-lg text-white">
              Bathroom Remodeling Near You
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {citiesData.cities.map((city) => (
              <Link
                key={city.id}
                href={`/services/bathroom-remodeling/${city.id}`}
                className="card-luxury px-4 py-3 flex items-center gap-2 hover:border-primary/30 transition-all group"
              >
                <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery/bathrooms/IMG_6024.jpg"
          alt="Bathroom remodeling by Zwolinski Quality Construction"
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
            Let&apos;s Build Your Dream Bathroom
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
