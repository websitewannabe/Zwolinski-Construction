import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Bath, Utensils, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "../components/OptimizedImage";

import { ClipboardCheck, Users, MessageSquare, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Basement Remodeling",
      description:
        "Convert your unused basement into a beautiful living space, entertainment area, or home office.",
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
      description:
        "Transform your bathroom into a luxurious spa-like retreat with our expert remodeling services.",
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
      description:
        "Create your dream kitchen with custom cabinets, modern appliances, and elegant finishes.",
      features: [
        "Cabinet Installation",
        "Countertop Installation",
        "Appliance Integration",
        "Custom Storage Solutions",
        "Lighting Design",
      ],
    },
  ];

  const serviceAreas = [
    {
      county: "Bucks County",
      description:
        "Serving Perkasie, Doylestown, Quakertown, and surrounding areas",
    },
    {
      county: "Montgomery County",
      description:
        "Serving Lansdale, Collegeville, Blue Bell, and surrounding areas",
    },
    {
      county: "Lehigh County",
      description: "Serving Allentown, Emmaus, Macungie, and surrounding areas",
    },
  ];

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zwolinskiconstr.com/services" />
        <title>Remodeling Services | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Explore Zwolinski Quality Construction's remodeling services including kitchens, bathrooms, and basements across Bucks, Montgomery, and Lehigh Counties."
        />
        <meta
          name="keywords"
          content="remodeling services, kitchen renovation, bathroom remodeling, basement finishing, Bucks County contractor, Montgomery County builder, Lehigh County home renovation, home improvement"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Zwolinski Quality Construction",
            url: "https://zwolinskiconstr.com/services",
            image: "https://zwolinskiconstr.com/images/logo.png",
            logo: "https://zwolinskiconstr.com/images/logo.png",
            description:
              "Zwolinski Quality Construction offers premium remodeling services across Southeastern Pennsylvania, including kitchen, bathroom, and basement renovations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "166 E Walnut St",
              addressLocality: "Perkasie",
              addressRegion: "PA",
              postalCode: "18944",
              addressCountry: "US",
            },
            telephone: "+1-267-471-6120",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Home Remodeling Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Kitchen Remodeling",
                    description:
                      "Custom cabinetry, countertops, appliance integration, and lighting.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Bathroom Remodeling",
                    description:
                      "Custom showers, tile work, vanities, plumbing, and lighting.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Basement Remodeling",
                    description:
                      "Full basement renovations for living space, entertainment, or office.",
                  },
                },
              ],
            },
            areaServed: {
              "@type": "Place",
              name: [
                "Perkasie",
                "Doylestown",
                "Quakertown",
                "Lansdale",
                "Collegeville",
                "Blue Bell",
                "Allentown",
                "Emmaus",
                "Macungie",
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px]">
        <OptimizedImage
          src="/images/projects/servicesHero.jpg"
          alt="Services Hero"
          width={1920}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-silver">Services</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Comprehensive construction and remodeling services delivered with
              expertise and dedication to quality.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#1369A0] transition-colors font-semibold border border-gray-600"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#C0C0C0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const serviceLinks = {
                "Basement Remodeling": "/services/basement-remodeling",
                "Bathroom Remodeling": "/services/bathroom-remodeling", 
                "Kitchen Remodeling": "/services/kitchen-remodeling"
              };
              
              return (
              <Link
                key={index}
                to={serviceLinks[service.title as keyof typeof serviceLinks]}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600 flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <service.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="h-1.5 w-1.5 bg-white rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center px-4 py-2 bg-[#157FBB] text-white rounded group-hover:bg-[#4BA5CF] transition-colors border border-gray-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* Fast Completion */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fast Project Completion</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              At Zwolinski Quality Construction, we understand that time is
              valuable. Our experienced team works efficiently to complete your
              projects quickly without compromising on quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600 text-center">
              <ClipboardCheck className="h-12 w-12 text-[#157FBB] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Efficient Planning</h3>
              <p className="text-gray-300">
                Detailed project planning and preparation ensures smooth
                execution and minimal delays.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600 text-center">
              <Users className="h-12 w-12 text-[#157FBB] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Skilled Team</h3>
              <p className="text-gray-300">
                Our experienced professionals work together seamlessly to
                complete projects on schedule.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600 text-center">
              <MessageSquare className="h-12 w-12 text-[#157FBB] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Clear Communication</h3>
              <p className="text-gray-300">
                Regular updates and transparent communication keep your project
                moving forward efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[#C0C0C0] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Service Areas
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600 text-center"
                >
                  <MapPin className="h-8 w-8 text-[#157FBB] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {area.county}
                  </h3>
                  <p className="text-gray-300">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 border-t border-gray-300">
        <OptimizedImage
          src="/images/projects/constructionHero.jpg"
          alt="Construction Hero"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#C0C0C0]/90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-silver">
            Looking For Inspiration?
          </h2>
          <p className="text-xl mb-8">Check out our past projects.</p>
          <a
            href="/gallery"
            className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#4BA5CF] transition-colors font-semibold border border-gray-600"
          >
            Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;