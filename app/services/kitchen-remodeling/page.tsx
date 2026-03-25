import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { generatePageMetadata } from "@/lib/metadata";
import citiesData from "@/data/cities.json";

export const metadata = generatePageMetadata({
  title: "Trusted Kitchen Remodeler in Bucks County — 25+ Years of Excellence",
  description:
    "Your kitchen should work as hard as you do. Custom cabinets, countertops, and modern layouts in Bucks and Montgomery County. Free estimates.",
  keywords: [
    "kitchen remodeling Bucks County",
    "kitchen renovation PA",
    "custom cabinets installation",
    "kitchen contractor Montgomery County",
    "countertop installation",
    "kitchen design Bucks County",
  ],
  canonical: "/services/kitchen-remodeling",
});

const features = [
  "Cabinet Installation",
  "Countertop Installation",
  "Appliance Integration",
  "Custom Storage Solutions",
  "Lighting Design",
  "Backsplash Installation",
  "Plumbing & Electrical",
  "Flooring Installation",
  "Island Design",
  "Pantry Solutions",
];

const benefits = [
  "Increase home value",
  "Improved functionality",
  "Enhanced cooking experience",
  "Better organization",
  "Modern aesthetics",
];

const galleryImages = [
  {
    src: "/images/gallery/kitchens/IMG_6048.jpg",
    alt: "Kitchen remodeling project by Zwolinski Quality Construction",
  },
  {
    src: "/images/gallery/kitchens/IMG_6049.jpg",
    alt: "Custom kitchen renovation with modern finishes",
  },
  {
    src: "/images/gallery/kitchens/IMG_6051.jpg",
    alt: "Completed kitchen remodel with elegant design",
  },
];

export default function KitchenRemodelingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Remodeling",
    "description": "Expert kitchen remodeling services including custom cabinetry, premium countertops, appliance integration, and modern design. Create the kitchen of your dreams.",
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
    "serviceType": "Kitchen Remodeling"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zwolinskiconstruction.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.zwolinskiconstruction.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Kitchen Remodeling", "item": "https://www.zwolinskiconstruction.com/services/kitchen-remodeling" }
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
        image="/images/gallery/kitchens/IMG_6047.jpg"
        imageAlt="Kitchen remodeling by Zwolinski Quality Construction"
        title="Kitchen"
        titleAccent="Remodeling"
        subtitle="Create your dream kitchen with custom cabinetry, premium countertops, and expert craftsmanship that transforms how you cook and entertain."
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
              Kitchen Remodeling Services
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
                Benefits of a Kitchen Remodel
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
                Ready to Transform Your Kitchen?
              </h3>
              <p className="text-zinc-400 mb-8">
                Contact us today for a free consultation and let&apos;s discuss
                your dream kitchen.
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
            <h2 className="heading-lg text-white">Kitchen Projects</h2>
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
              Kitchen Remodeling Near You
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {citiesData.cities.map((city) => (
              <Link
                key={city.id}
                href={`/services/kitchen-remodeling/${city.id}`}
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
          src="/images/gallery/kitchens/IMG_6047.jpg"
          alt="Kitchen remodeling by Zwolinski Quality Construction"
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
            Let&apos;s Build Your Dream Kitchen
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
