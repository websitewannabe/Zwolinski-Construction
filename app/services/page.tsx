import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Bath,
  Utensils,
  ArrowRight,
  ClipboardCheck,
  Users,
  MessageSquare,
  MapPin,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Remodeling Services | What We Do & How We Do It Differently",
  description:
    "Kitchens, bathrooms, basements, and more, all done by our own crew, never subcontractors. See what 25+ years of Bucks County craftsmanship looks like.",
  keywords: [
    "remodeling services Bucks County",
    "kitchen remodeling PA",
    "bathroom renovation Bucks County",
    "basement finishing Montgomery County",
    "home remodeling services",
  ],
  canonical: "/services",
});

const services = [
  {
    icon: Lightbulb,
    title: "Basement Remodeling",
    href: "/services/basement-remodeling",
    description:
      "Transform your unused basement into a stunning living space, entertainment area, or home office with expert craftsmanship.",
    features: [
      "Space Planning",
      "Waterproofing",
      "Flooring Installation",
      "Lighting Design",
      "Custom Built-ins",
    ],
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    href: "/services/bathroom-remodeling",
    description:
      "Create a luxurious spa-like retreat with custom tile work, modern fixtures, and elegant finishes.",
    features: [
      "Custom Shower Design",
      "Vanity Installation",
      "Tile Installation",
      "Plumbing Fixtures",
      "Lighting Solutions",
    ],
  },
  {
    icon: Utensils,
    title: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    description:
      "Design your dream kitchen with custom cabinetry, premium countertops, and seamless appliance integration.",
    features: [
      "Cabinet Installation",
      "Countertop Installation",
      "Appliance Integration",
      "Custom Storage Solutions",
      "Lighting Design",
    ],
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Efficient Planning",
    description:
      "We start with a thorough consultation and detailed project plan to ensure every aspect is accounted for before work begins.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    description:
      "Our experienced craftsmen bring decades of expertise to every project, delivering precision and quality you can trust.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We keep you informed at every stage with regular updates, so you always know the status of your project.",
  },
];

const serviceAreas = [
  {
    name: "Bucks County",
    description:
      "Serving Doylestown, Newtown, Langhorne, Yardley, and surrounding communities with expert remodeling services.",
  },
  {
    name: "Montgomery County",
    description:
      "Quality construction and remodeling for homeowners in Lansdale, Blue Bell, Ambler, Horsham, and beyond.",
  },
  {
    name: "Lehigh County",
    description:
      "Professional home improvement services available throughout Allentown, Bethlehem, Emmaus, and nearby areas.",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Remodeling Services",
    "description": "Zwolinski Quality Construction offers expert kitchen, bathroom, and basement remodeling services in Bucks, Montgomery, and Lehigh Counties. Quality craftsmanship guaranteed.",
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
    "serviceType": "Home Remodeling",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Remodeling Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Remodeling" } }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zwolinskiconstruction.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.zwolinskiconstruction.com/services" }
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
        image="/images/projects/servicesHero.jpg"
        imageAlt="Zwolinski Quality Construction remodeling services"
        title="Our"
        titleAccent="Services"
        subtitle="Comprehensive construction and remodeling solutions tailored to your vision. From concept to completion, we deliver exceptional results."
        ctaText="Get a Free Quote"
      />

      {/* Services Grid */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              What We Do
            </p>
            <h2 className="heading-lg text-white">
              Expert Remodeling Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-luxury p-8 group hover:border-primary/30 transition-all"
              >
                <service.icon className="h-10 w-10 text-accent mb-5" />
                <h3 className="font-serif text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-zinc-500 text-sm flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-primary text-sm uppercase tracking-wide group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Project Completion */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Our Process
            </p>
            <h2 className="heading-lg text-white">Fast Project Completion</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="card-luxury p-8 text-center">
                <step.icon className="h-10 w-10 text-accent mx-auto mb-5" />
                <h3 className="font-serif text-lg text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Where We Work
            </p>
            <h2 className="heading-lg text-white">Our Service Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div key={area.name} className="card-luxury p-8 text-center">
                <MapPin className="h-10 w-10 text-accent mx-auto mb-5" />
                <h3 className="font-serif text-lg text-white mb-3">
                  {area.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/projects/constructionHero.jpg"
          alt="Zwolinski Quality Construction project"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Our Work
          </p>
          <h2 className="heading-lg text-white mb-6">
            See Our Completed Projects
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Browse our gallery for inspiration and see the quality of our
            craftsmanship firsthand.
          </p>
          <Link href="/gallery" className="btn-primary">
            View Gallery
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
