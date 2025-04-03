import React from "react";
import {
  Home,
  Building2,
  Hammer,
  PaintBucket,
  Wrench,
  Lightbulb,
  DoorOpen as Door,
  AppWindow as Window,
  Warehouse,
  Waves,
  Grid,
  Droplet,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
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
      icon: Home,
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
    {
      icon: Home,
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
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/projects/servicesHero.jpg")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white bg-black/30 backdrop-blur-md p-8 rounded-lg max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-zwolinski-burgundy">Services</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Comprehensive construction and remodeling services delivered with
              expertise and dedication to quality.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-zwolinski-burgundy text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-zwolinski-burgundy"
              >
                <service.icon className="h-12 w-12 text-zwolinski-burgundy mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-zwolinski-navy">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-zwolinski-burgundy rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Completion */}
      <section className="py-16 bg-zwolinski-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fast Project Completion</h2>
            <p className="text-xl max-w-3xl mx-auto">
              At Zwolinski Quality Construction, we understand that time is valuable. 
              Our experienced team works efficiently to complete your projects quickly 
              without compromising on quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">Efficient Planning</h3>
              <p>
                Detailed project planning and preparation ensures smooth execution
                and minimal delays.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">Skilled Team</h3>
              <p>
                Our experienced professionals work together seamlessly to complete
                projects on schedule.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">Clear Communication</h3>
              <p>
                Regular updates and transparent communication keep your project
                moving forward efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-zwolinski-navy">
            Service Areas
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-zwolinski-burgundy"
                >
                  <h3 className="text-xl font-semibold text-zwolinski-navy mb-2">
                    {area.county}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zwolinski-burgundy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-zwolinski-navy text-white rounded-md hover:bg-opacity-90 transition-colors font-semibold"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
