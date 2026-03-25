import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hammer, MapPin, Star, Bath, Utensils, Lightbulb, Phone } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import citiesData from "@/data/cities.json";
import { testimonials } from "@/data/testimonials";

interface City {
  id: string;
  name: string;
  state: string;
  county: string;
  description: string;
  services: string[];
  landmarks: string[];
  neighborhoods: string[];
}

interface CityPageProps {
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
}: CityPageProps): Promise<Metadata> {
  const { cityId } = await params;
  const city = getCity(cityId);

  if (!city) {
    return { title: "City Not Found" };
  }

  return {
    title: `Remodeling in ${city.name}, ${city.state}`,
    description: `Professional home remodeling and construction services in ${city.name}, ${city.state}. Kitchen, bathroom, and basement remodeling by Zwolinski Quality Construction.`,
    alternates: { canonical: `/cities/${city.id}` },
  };
}

const serviceShowcase = [
  {
    title: "Basement Remodeling",
    description:
      "Convert your unused basement into a beautiful living space, entertainment area, or home office.",
    image: "/images/gallery/basements/IMG_0227.JPG",
    link: "/services/basement-remodeling",
    icon: Lightbulb,
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Transform your bathroom into a luxurious spa-like retreat with expert craftsmanship.",
    image: "/images/gallery/bathrooms/IMG_6024.jpg",
    link: "/services/bathroom-remodeling",
    icon: Bath,
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Create your dream kitchen with custom cabinets, modern appliances, and elegant finishes.",
    image: "/images/gallery/kitchens/IMG_6094.jpg",
    link: "/services/kitchen-remodeling",
    icon: Utensils,
  },
];

const galleryImages = [
  { src: "/images/gallery/bathrooms/newBathroom2.jpg", alt: "Bathroom remodel" },
  { src: "/images/gallery/kitchens/IMG_6051.jpg", alt: "Kitchen remodel" },
  { src: "/images/gallery/basements/IMG_0170.jpg", alt: "Basement finishing" },
  { src: "/images/gallery/bathrooms/IMG_6024.jpg", alt: "Modern bathroom" },
  { src: "/images/gallery/kitchens/IMG_3810.jpg", alt: "Kitchen renovation" },
  { src: "/images/gallery/basements/IMG_0221.jpg", alt: "Finished basement" },
];

export default async function CityPage({ params }: CityPageProps) {
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
          <Link href="/cities" className="btn-primary mt-8 inline-flex">
            View All Service Areas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  // Pick 3 reviews to display, seeded by city name for consistency
  const seed = city.name.charCodeAt(0) + city.name.charCodeAt(city.name.length - 1);
  const cityReviews = testimonials
    .filter((t) => t.name)
    .slice(seed % 5, (seed % 5) + 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Zwolinski Quality Construction",
        description: `Professional home remodeling and construction services in ${city.name}, ${city.state}. Kitchen, bathroom, and basement remodeling by Zwolinski Quality Construction.`,
        url: `https://zwolinskiconstr.com/cities/${city.id}`,
        telephone: "+1-267-471-6120",
        areaServed: {
          "@type": "City",
          name: city.name,
          addressRegion: city.state,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(testimonials.length),
        },
        review: cityReviews.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
          },
          reviewBody: t.text,
        })),
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
            name: "Service Areas",
            item: "https://zwolinskiconstr.com/cities",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.name,
            item: `https://zwolinskiconstr.com/cities/${city.id}`,
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
        image="/images/projects/constructionHero.jpg"
        imageAlt={`Professional remodeling in ${city.name}, ${city.state}`}
        title={`Remodeling in`}
        titleAccent={`${city.name}, ${city.state}`}
        subtitle={`Trusted home improvement and construction services for ${city.name} homeowners in ${city.county}.`}
        ctaText="Get a Free Quote"
      />

      {/* About the City */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
                {city.county}
              </p>
              <h2 className="heading-lg text-white mb-8">
                Quality Construction in{" "}
                <span className="text-accent">{city.name}</span>
              </h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed">
                <p>{city.description}</p>
                <p>
                  For over 25 years, Zwolinski Quality Construction has been the
                  trusted choice for homeowners in {city.name} and throughout{" "}
                  {city.county}. Our team provides complete remodeling solutions
                  — from initial design through finished project — with personal
                  attention to every detail.
                </p>
                <p>
                  Whether you&apos;re planning a kitchen renovation, bathroom
                  remodel, or basement finishing, our experienced crew delivers
                  top-quality workmanship on time and within budget.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/gallery/bathrooms/newBathroom2.jpg"
                    alt={`Bathroom remodel in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/gallery/kitchens/IMG_6051.jpg"
                    alt={`Kitchen remodel in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/gallery/basements/IMG_0227.JPG"
                    alt={`Basement remodel in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/gallery/bathrooms/IMG_6024.jpg"
                    alt={`Bathroom renovation in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              What We Offer
            </p>
            <h2 className="heading-lg text-white">
              Our Services in <span className="text-accent">{city.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceShowcase.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group card-luxury overflow-hidden"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-white mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary text-sm uppercase tracking-wide inline-flex items-center gap-1 group-hover:text-accent transition-colors">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional services list */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {city.services
              .filter(
                (s) =>
                  !["Kitchen Remodeling", "Bathroom Renovation", "Basement Finishing"].includes(s)
              )
              .map((service) => (
                <div
                  key={service}
                  className="card-luxury px-6 py-3 flex items-center gap-3"
                >
                  <Hammer className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-zinc-300 text-sm">{service}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative section-padding overflow-hidden">
        <Image
          src="/images/gallery/bathrooms/newBathroom1.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/90" />
        <div className="container-wide relative">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Portfolio
            </p>
            <h2 className="heading-lg text-white">
              Recent Work Near <span className="text-accent">{city.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Landmarks & Neighborhoods */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
                Local Knowledge
              </p>
              <h2 className="heading-lg text-white mb-8">
                We Know <span className="text-accent">{city.name}</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Our team works throughout {city.name} and the surrounding{" "}
                {city.county} area. We&apos;re familiar with local building codes,
                architectural styles, and the unique character of each
                neighborhood.
              </p>

              <div className="mb-8">
                <h3 className="font-serif text-lg text-white mb-4">
                  Neighborhoods We Serve
                </h3>
                <div className="flex flex-wrap gap-3">
                  {city.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded text-zinc-300 text-sm"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg text-white mb-6 lg:mt-16">
                Notable Landmarks
              </h3>
              <div className="space-y-4">
                {city.landmarks.map((landmark) => (
                  <div
                    key={landmark}
                    className="card-luxury p-5 flex items-center gap-4"
                  >
                    <MapPin className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-zinc-300">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Testimonials
            </p>
            <h2 className="heading-lg text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cityReviews.map((review, i) => (
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
          src="/images/projects/constructionHero.jpg"
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
            Ready to Transform Your{" "}
            <span className="text-accent">{city.name}</span> Home?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact Zwolinski Quality Construction today for a free estimate
            on your next remodeling project in {city.name}, {city.state}.
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
