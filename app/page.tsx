import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Shield, Bath, Utensils, Lightbulb } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import QuoteButton from "@/components/QuoteButton";
import { testimonials } from "@/data/testimonials";

const services = [
  {
    title: "Basements",
    description:
      "Convert your unused basement into a beautiful living space, entertainment area, or home office.",
    image: "/images/gallery/basements/IMG_0227.JPG",
    link: "/services/basement-remodeling",
    icon: Lightbulb,
  },
  {
    title: "Bathrooms",
    description:
      "Transform your bathroom into a luxurious spa-like retreat with our expert remodeling services.",
    image: "/images/gallery/bathrooms/IMG_6024.jpg",
    link: "/services/bathroom-remodeling",
    icon: Bath,
  },
  {
    title: "Kitchens",
    description:
      "Create your dream kitchen with custom cabinets, modern appliances, and elegant finishes.",
    image: "/images/gallery/kitchens/IMG_6094.jpg",
    link: "/services/kitchen-remodeling",
    icon: Utensils,
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://zwolinskiconstr.com/#localbusiness",
                name: "Zwolinski Quality Construction",
                url: "https://zwolinskiconstr.com",
                telephone: "+1-267-471-6120",
                email: "arnoldzwolinski@verizon.net",
                image: "https://zwolinskiconstr.com/images/projects/constructionHero.jpg",
                priceRange: "$$$$",
                description:
                  "Over 25 years of experience in luxury residential remodeling across Bucks, Montgomery, and Lehigh Counties. 100% in-house craftsmanship.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Perkasie",
                  addressRegion: "PA",
                  postalCode: "18944",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 40.3715,
                  longitude: -75.2927,
                },
                areaServed: [
                  {
                    "@type": "County",
                    name: "Bucks County",
                    containedInPlace: {
                      "@type": "State",
                      name: "Pennsylvania",
                    },
                  },
                  {
                    "@type": "County",
                    name: "Montgomery County",
                    containedInPlace: {
                      "@type": "State",
                      name: "Pennsylvania",
                    },
                  },
                  {
                    "@type": "County",
                    name: "Lehigh County",
                    containedInPlace: {
                      "@type": "State",
                      name: "Pennsylvania",
                    },
                  },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Remodeling Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Bathroom Remodeling",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Kitchen Remodeling",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Basement Finishing",
                      },
                    },
                  ],
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1",
                  ratingCount: "150",
                },
                review: testimonials
                  .filter((t) => t.name)
                  .slice(0, 5)
                  .map((t) => ({
                    "@type": "Review",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                    },
                    author: {
                      "@type": "Person",
                      name: t.name,
                    },
                    reviewBody: t.text,
                  })),
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "07:00",
                    closes: "18:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "08:00",
                    closes: "14:00",
                  },
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://zwolinskiconstr.com/#website",
                url: "https://zwolinskiconstr.com",
                name: "Zwolinski Quality Construction",
                publisher: {
                  "@id": "https://zwolinskiconstr.com/#organization",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://zwolinskiconstr.com/contact?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://zwolinskiconstr.com/#organization",
                name: "Zwolinski Quality Construction",
                url: "https://zwolinskiconstr.com",
                logo: "https://zwolinskiconstr.com/images/projects/constructionHero.jpg",
                telephone: "+1-267-471-6120",
                email: "arnoldzwolinski@verizon.net",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Perkasie",
                  addressRegion: "PA",
                  postalCode: "18944",
                  addressCountry: "US",
                },
                sameAs: [
                  "https://www.facebook.com/people/Zwolinski-Quality-Construction-Co/61559520404180/",
                  "https://www.tiktok.com/@zwolinskiquality",
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[340px] md:h-[490px] overflow-hidden">
        <Image
          src="/images/projects/constructionHero.jpg"
          alt="Professional construction and home remodeling by Zwolinski Quality Construction"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative container-wide h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-medium">
              Bucks County&apos;s Premier Contractor
            </p>
            <h1 className="heading-xl text-white mb-6">
              Building Dreams,
              <br />
              <span className="text-accent">Delivering Excellence</span>
            </h1>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-lg">
              Over 25 years of experience in luxury residential remodeling
              across Bucks, Montgomery, and Lehigh Counties.
            </p>
            <div className="flex flex-wrap gap-4">
              <QuoteButton />
              <Link href="/gallery" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              What We Do
            </p>
            <h2 className="heading-lg text-white">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <service.icon className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm uppercase tracking-wide group-hover:gap-3 gap-2 transition-all">
                    View Projects <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-16 bg-black border-y border-zinc-800/50">
        <div className="container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Trusted by Homeowners
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Over 150 Five-Star Reviews
          </h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent text-3xl">
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* In-House Craftsmanship */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Our Promise
            </p>
            <h2 className="heading-lg text-white mb-6">
              100% In-House Craftsmanship
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Unlike many contractors, we never subcontract our work. Every
              project is completed by our own skilled team, ensuring consistent
              quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-luxury p-8">
              <Users className="h-10 w-10 text-accent mb-5" />
              <h3 className="font-serif text-xl text-white mb-3">
                Direct Oversight
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                With our in-house team handling every aspect of your project, we
                maintain complete quality control and direct supervision
                throughout the entire process.
              </p>
            </div>
            <div className="card-luxury p-8">
              <Shield className="h-10 w-10 text-accent mb-5" />
              <h3 className="font-serif text-xl text-white mb-3">
                Consistent Quality
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our dedicated team members are trained to our exacting
                standards, ensuring the same high level of craftsmanship across
                all projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Testimonials
            </p>
            <h2 className="heading-lg text-white">What Our Clients Say</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/projects/constructionHero.jpg"
          alt="Construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Get Started
          </p>
          <h2 className="heading-lg text-white mb-6">
            Ready to Meet the Team?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Learn more about Zwolinski Quality Construction and how we can
            transform your home.
          </p>
          <Link href="/about" className="btn-primary">
            About Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
