import Link from "next/link";
import { Phone, MessageSquare, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contact Zwolinski Quality Construction — Free Remodeling Estimates",
  description:
    "Ready to start your remodeling project? Contact Zwolinski Quality Construction for a free estimate. Call, text, or fill out our form — we respond within 24 hours.",
  keywords: [
    "free remodeling estimate",
    "contact contractor Bucks County",
    "remodeling consultation PA",
    "home renovation quote",
  ],
  canonical: "/contact",
});

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(267) 471-6120",
    href: "tel:+12674716120",
  },
  {
    icon: MessageSquare,
    label: "Text Us",
    value: "(267) 471-6120",
    href: "sms:+12674716120",
  },
  {
    icon: Mail,
    label: "Email",
    value: "arnoldzwolinski@verizon.net",
    href: "mailto:arnoldzwolinski@verizon.net",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "166 E Walnut St, Perkasie, PA 18944",
    href: "https://www.google.com/maps/search/?api=1&query=166+E+Walnut+St+Perkasie+PA+18944",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 9:00AM - 5:00PM",
    extra: "Sat-Sun: Appointment Only",
    href: null,
  },
];

const serviceAreaCities = [
  { name: "Doylestown", id: "doylestown" },
  { name: "Quakertown", id: "quakertown" },
  { name: "Allentown", id: "allentown" },
  { name: "Perkasie", id: "perkasie" },
  { name: "Silverdale", id: "silverdale" },
  { name: "Buckingham", id: "buckingham" },
  { name: "Carversville", id: "carversville" },
  { name: "Chalfont", id: "chalfont" },
  { name: "Dublin", id: "dublin" },
  { name: "Fountainville", id: "fountainville" },
  { name: "Furlong", id: "furlong" },
  { name: "Holland", id: "holland" },
  { name: "Ivyland", id: "ivyland" },
  { name: "Jamison", id: "jamison" },
  { name: "Lahaska", id: "lahaska" },
  { name: "Morrisville", id: "morrisville" },
  { name: "New Hope", id: "newhope" },
  { name: "Newtown", id: "newtown" },
  { name: "Ottsville", id: "ottsville" },
  { name: "Pipersville", id: "pipersville" },
  { name: "Point Pleasant", id: "pointpleasant" },
  { name: "Richboro", id: "richboro" },
  { name: "Southampton", id: "southampton" },
  { name: "Trevose", id: "trevose" },
  { name: "Warminster", id: "warminster" },
  { name: "Warrington", id: "warrington" },
  { name: "Washington Crossing", id: "washingtoncrossing" },
  { name: "Yardley", id: "yardley" },
];

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Zwolinski Quality Construction",
    description:
      "Get in touch with Zwolinski Quality Construction to discuss your remodeling project. Call, text, or email us today.",
    url: "https://zwolinskiconstr.com/contact",
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
        name: "Contact",
        item: "https://zwolinskiconstr.com/contact",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zwolinski Quality Construction",
    url: "https://zwolinskiconstr.com",
    telephone: "+1-267-471-6120",
    email: "arnoldzwolinski@verizon.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "166 E Walnut St",
      addressLocality: "Perkasie",
      addressRegion: "PA",
      postalCode: "18944",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection
        image="/images/gallery/bathrooms/newBathroom3.jpg"
        imageAlt="Contact Zwolinski Quality Construction"
        title="Contact"
        titleAccent="Us"
        inlineAccent
        subtitle="Let's discuss your project and bring your vision to life."
        ctaText="Call Now"
        ctaHref="tel:+12674716120"
        useQuoteModal={false}
      />

      {/* Main Content */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
                Reach Out
              </p>
              <h2 className="heading-lg text-white mb-8">Get In Touch</h2>

              <div className="space-y-4">
                {contactCards.map((card) => {
                  const inner = (
                    <div className="card-luxury p-5 flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
                        <card.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                          {card.label}
                        </p>
                        <p className="text-white text-sm">{card.value}</p>
                        {"extra" in card && card.extra && (
                          <p className="text-zinc-400 text-sm">{card.extra}</p>
                        )}
                      </div>
                    </div>
                  );

                  if (card.href) {
                    return (
                      <a
                        key={card.label}
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          card.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block hover:border-primary/30 transition-all"
                      >
                        {inner}
                      </a>
                    );
                  }

                  return (
                    <div key={card.label}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
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
            <h2 className="heading-lg text-white mb-4">Service Areas</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Proudly serving Bucks County, Montgomery County, and Lehigh County
              with expert remodeling services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {serviceAreaCities.map((city) => (
              <Link
                key={city.id}
                href={`/cities/${city.id}`}
                className="card-luxury px-4 py-3 text-center text-sm text-zinc-400 hover:text-white hover:border-transparent transition-all duration-300 hover-gradient"
              >
                {city.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/cities" className="btn-outline">
              View All Service Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
