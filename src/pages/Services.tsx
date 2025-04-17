import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Bath, Utensils, ArrowRight } from "lucide-react";

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
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/projects/servicesHero.jpg")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-silver">Services</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
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
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/gallery?section=${service.title.split(" ")[0].toLowerCase()}`}
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
                    View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/projects/constructionHero.jpg')",
          }}
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
