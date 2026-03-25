import Image from "next/image";
import Link from "next/link";
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About Zwolinski Quality Construction — 25+ Years of Expert Remodeling",
  description:
    "Family-owned remodeling contractor trusted by Bucks and Montgomery County homeowners for 25+ years. Quality craftsmanship and transparent pricing.",
  keywords: [
    "about Zwolinski Construction",
    "family owned contractor PA",
    "trusted remodeling contractor Bucks County",
    "25 years experience home renovation",
  ],
  canonical: "/about",
});

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We take pride in delivering exceptional workmanship on every project.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your satisfaction is our top priority. We listen, communicate, and deliver.",
  },
  {
    icon: Clock,
    title: "Timely Completion",
    description: "We respect deadlines and complete projects on schedule.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest pricing, transparent communication, and reliable service.",
  },
];

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Zwolinski Quality Construction",
    description:
      "Learn about Zwolinski Quality Construction — trusted for expert remodeling, renovations, and home improvements in Bucks, Montgomery, and Lehigh Counties.",
    url: "https://zwolinskiconstr.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Zwolinski Quality Construction",
      url: "https://zwolinskiconstr.com",
      description:
        "Expert remodeling, renovations, and home improvements in Bucks, Montgomery, and Lehigh Counties for over 25 years.",
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
        name: "About",
        item: "https://zwolinskiconstr.com/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection
        image="/images/gallery/basements/F063D0DB-6CC7-455E-87FA-335C2820C7EF.jpg"
        imageAlt="About Zwolinski Quality Construction"
        title="About"
        titleAccent="Our Company"
        subtitle="Building trust through quality craftsmanship and exceptional service for over 25 years."
        ctaText="Get Started Today"
      />

      {/* Our Story */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
                Our Story
              </p>
              <h2 className="heading-lg text-white mb-8">
                Crafting Exceptional Spaces
              </h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed">
                <p>
                  Arnold Zwolinski and Zwolinski Quality Construction provide a
                  complete solution for all your home improvement, remodeling,
                  and renovation needs. We work with you personally from first
                  design through finished project and we care about the details.
                </p>
                <p>
                  Your greatest investment is also our greatest invention:
                  whether it&apos;s time to remodel your kitchen or bathroom, or
                  expand your living space by remodeling your basement, Zwolinski
                  Quality Construction will turn dreams into affordable
                  realities.
                </p>
                <p>
                  Whether it&apos;s decks, garages, windows, siding, hardwood
                  floors, tiles, or any other home improvement project, our wide
                  range of professional experience guarantees that your project
                  will be completed with the utmost efficiency and top-quality
                  workmanship.
                </p>
                <p>
                  We take pride in our many satisfied customers, and we look
                  forward to making you one of them. For all your remodeling
                  needs, look to Zwolinski for the best in quality, reliability,
                  and service.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/zwol25.png"
                alt="Zwolinski Quality Construction - 25 Years"
                width={800}
                height={700}
                className="rounded-lg w-full max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              What Drives Us
            </p>
            <h2 className="heading-lg text-white">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-luxury p-8 text-center">
                <value.icon className="h-10 w-10 text-accent mx-auto mb-5" />
                <h3 className="font-serif text-lg text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Links */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Social Proof
            </p>
            <h2 className="heading-lg text-white">See Our Reviews</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center max-w-3xl mx-auto">
            <a
              href="https://www.google.com/search?q=zwolinski+quality+construction#lrd=0x89c6a05cc01b6e05:0x4f72758643065789,1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 card-luxury p-8 text-center hover:border-primary/30 transition-all"
            >
              <Image
                src="/images/google-logo.png"
                alt="Google Reviews"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-serif text-xl text-white mb-2">
                Google Reviews
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                See what clients say on Google
              </p>
              <span className="text-primary text-sm uppercase tracking-wide">
                Read Reviews &rarr;
              </span>
            </a>

            <a
              href="https://www.homeadvisor.com/rated.ZWOLINSKIQuality.8386546.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 card-luxury p-8 text-center hover:border-primary/30 transition-all"
            >
              <Image
                src="/images/homeadvisor-logo.png"
                alt="HomeAdvisor Reviews"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="font-serif text-xl text-white mb-2">
                HomeAdvisor Reviews
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                Check out our HomeAdvisor reviews
              </p>
              <span className="text-primary text-sm uppercase tracking-wide">
                Read Reviews &rarr;
              </span>
            </a>
          </div>
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
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Explore
          </p>
          <h2 className="heading-lg text-white mb-6">
            Curious About What We Offer?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Check out our services.
          </p>
          <Link href="/services" className="btn-primary">
            Our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
