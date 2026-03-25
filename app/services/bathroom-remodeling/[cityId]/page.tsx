import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, Phone } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import citiesData from "@/data/cities.json";
import { testimonials } from "@/data/testimonials";
import { generatePageMetadata } from "@/lib/metadata";

interface City {
  id: string;
  name: string;
  state: string;
  county: string;
  zipCodes: string[];
  description: string;
  services: string[];
  landmarks: string[];
  neighborhoods: string[];
}

interface PageProps {
  params: Promise<{ cityId: string }>;
}

function getCity(cityId: string): City | undefined {
  return (citiesData.cities as City[]).find((city) => city.id === cityId);
}

export async function generateStaticParams() {
  return citiesData.cities.map((city) => ({ cityId: city.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { cityId } = await params;
  const city = getCity(cityId);

  if (!city) {
    return { title: "City Not Found" };
  }

  return generatePageMetadata({
    title: `${city.name} Bathroom Remodeling — Showers, Vanities & Tile Upgrades`,
    description: `${city.name} homeowners deserve a better bathroom. Custom showers, vanities, and tile work — done right by a crew with 25+ years in ${city.county}.`,
    keywords: [
      `${city.name} bathroom remodel`,
      `bathroom remodeling ${city.name} PA`,
      `bathroom renovation ${city.county}`,
      `${city.county} bathroom contractor`,
      `custom shower ${city.name}`,
    ],
    canonical: `/services/bathroom-remodeling/${city.id}`,
  });
}

const galleryImages = [
  {
    src: "/images/gallery/bathrooms/newBathroom1.jpg",
    alt: "Modern bathroom remodel with custom tile work",
  },
  {
    src: "/images/gallery/bathrooms/newBathroom4.jpg",
    alt: "Luxury bathroom renovation with elegant fixtures",
  },
];

const whyChooseUs = [
  "Over 25 years of bathroom remodeling experience across Bucks, Montgomery, and Lehigh Counties",
  "Complete project management from design through final walkthrough — no subcontractor hassle",
  "On-time, on-budget delivery with transparent pricing and no hidden fees",
  "Expert tile, plumbing, and fixture installation by our full-time crew",
];

export default async function BathroomRemodelingCityPage({
  params,
}: PageProps) {
  const { cityId } = await params;
  const city = getCity(cityId);

  if (!city) {
    return (
      <section className="section-padding bg-zinc-950">
        <div className="container-wide text-center">
          <h1 className="heading-xl text-white">City Not Found</h1>
          <p className="text-zinc-400 mt-4">
            The city you are looking for does not exist.
          </p>
          <Link
            href="/services/bathroom-remodeling"
            className="btn-primary mt-8 inline-flex"
          >
            View Bathroom Remodeling
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  // Get bathroom-specific reviews, fall back to any reviews
  const bathroomReviews = testimonials.filter(
    (t) => t.projectType === "Bathroom Remodel" && t.name
  );
  const reviewPool = bathroomReviews.length >= 2 ? bathroomReviews : testimonials.filter((t) => t.name);
  const seed = city.name.charCodeAt(0) + city.name.charCodeAt(city.name.length - 1);
  const displayReviews = reviewPool.slice(seed % Math.max(1, reviewPool.length - 1), (seed % Math.max(1, reviewPool.length - 1)) + 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Bathroom Remodeling",
        provider: {
          "@type": "LocalBusiness",
          name: "Zwolinski Quality Construction",
          telephone: "+1-267-471-6120",
          url: "https://zwolinskiconstr.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Perkasie",
            addressRegion: "PA",
            postalCode: "18944",
            addressCountry: "US",
          },
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${city.name}, ${city.state}`,
        },
        description: `Professional bathroom remodeling services in ${city.name}, ${city.state}. Custom showers, vanities, tile work, and modern fixtures.`,
        url: `https://zwolinskiconstr.com/services/bathroom-remodeling/${city.id}`,
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
            name: "Bathroom Remodeling",
            item: "https://zwolinskiconstr.com/services/bathroom-remodeling",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${city.name}, ${city.state}`,
            item: `https://zwolinskiconstr.com/services/bathroom-remodeling/${city.id}`,
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

      {/* Hero */}
      <HeroSection
        image="/images/gallery/bathrooms/newBathroom2.jpg"
        imageAlt={`Bathroom remodeling in ${city.name}, ${city.state}`}
        title="Bathroom Remodeling in"
        titleAccent={`${city.name}, ${city.state}`}
        subtitle={`Expert bathroom renovations for ${city.name} homeowners. Custom showers, vanities, tile, and fixtures — completed on time and on budget.`}
        ctaText="Get a Free Quote"
      />

      {/* Content Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
                {city.county}
              </p>
              <h2 className="heading-lg text-white mb-8">
                Expert Bathroom Remodeling in{" "}
                <span className="text-accent">{city.name}</span>
              </h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed">
                <p>
                  Looking for professional bathroom remodeling in {city.name},{" "}
                  {city.state}? Zwolinski Quality Construction has been
                  transforming bathrooms across {city.county} for over 25 years.
                  From complete gut renovations to targeted upgrades, our
                  experienced crew handles every aspect of your bathroom project.
                </p>
                <p>
                  We specialize in custom shower installations, vanity design,
                  premium tile work, and modern fixture upgrades for homeowners
                  in {city.name} and the surrounding {city.county} area. Every
                  project is managed start-to-finish by our own team — no
                  subcontractors, no delays.
                </p>
                <p>
                  Whether you live near {city.landmarks[0] || city.name} or
                  anywhere in the {city.neighborhoods[0] || city.name} area, we
                  deliver beautiful results that increase your home&apos;s value
                  and comfort.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Link
                  href="/services/bathroom-remodeling"
                  className="text-primary text-sm uppercase tracking-wide inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  All Bathroom Services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={`/cities/${city.id}`}
                  className="text-primary text-sm uppercase tracking-wide inline-flex items-center gap-1 hover:text-accent transition-colors"
                >
                  All Services in {city.name}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={`${img.alt} in ${city.name}, ${city.state}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              The Zwolinski Difference
            </p>
            <h2 className="heading-lg text-white">
              Why {city.name} Homeowners Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((point, i) => (
              <div key={i} className="card-luxury p-6 flex gap-4 items-start">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Testimonials
            </p>
            <h2 className="heading-lg text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {displayReviews.map((review, i) => (
              <div key={i} className="card-luxury p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-zinc-800 pt-4">
                  <p className="text-white font-medium text-sm">
                    {review.name}
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    {review.location} &middot; {review.projectType}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery/bathrooms/newBathroom2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Get Started
          </p>
          <h2 className="heading-lg text-white mb-6">
            Ready to Remodel Your{" "}
            <span className="text-accent">{city.name}</span> Bathroom?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact Zwolinski Quality Construction today for a free estimate on
            your bathroom remodeling project in {city.name}, {city.state}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <QuoteButton />
            <a href="tel:+12674716120" className="btn-outline">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
