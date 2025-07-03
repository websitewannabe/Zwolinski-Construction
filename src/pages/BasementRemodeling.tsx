
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Lightbulb } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

const BasementRemodeling = () => {
  const features = [
    "Space Planning & Design",
    "Waterproofing Solutions",
    "Flooring Installation",
    "Electrical & Lighting",
    "Insulation & Drywall",
    "Custom Built-ins",
    "Bathroom Addition",
    "Entertainment Areas",
    "Home Office Conversion",
    "Storage Solutions"
  ];

  const benefits = [
    "Increase home value",
    "Additional living space",
    "Improved energy efficiency",
    "Enhanced storage capacity",
    "Custom entertainment area"
  ];

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zwolinskiconstr.com/services/basement-remodeling" />
        <title>Basement Remodeling | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Transform your basement into a beautiful living space with Zwolinski Quality Construction. Professional basement remodeling services in Bucks, Montgomery, and Lehigh Counties."
        />
        <meta
          name="keywords"
          content="basement remodeling, basement finishing, basement renovation, home renovation, Bucks County contractor, Montgomery County builder, Lehigh County basement contractor"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px]">
        <OptimizedImage
          src="/images/gallery/basements/IMG_0113.jpg"
          alt="Basement Remodeling"
          width={1920}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <Lightbulb className="h-12 w-12 text-white mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Basement <span className="text-silver">Remodeling</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Convert your unused basement into a beautiful living space, entertainment area, or home office with our expert remodeling services.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#1369A0] transition-colors font-semibold border border-gray-600"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#C0C0C0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Our Basement Remodeling Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600 flex items-center">
                <CheckCircle className="h-6 w-6 text-[#157FBB] mr-4 flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Basement Remodeling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600 text-center">
                <CheckCircle className="h-12 w-12 text-[#157FBB] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-[#C0C0C0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Recent Basement Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <OptimizedImage
              src="/images/gallery/basements/IMG_0108.jpg"
              alt="Basement Project 1"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <OptimizedImage
              src="/images/gallery/basements/IMG_0109.jpg"
              alt="Basement Project 2"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <OptimizedImage
              src="/images/gallery/basements/IMG_0110.jpg"
              alt="Basement Project 3"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <a
              href="/gallery?section=basement"
              className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#4BA5CF] transition-colors font-semibold border border-gray-600"
            >
              View All Basement Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Basement?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate for your basement remodeling project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#1369A0] transition-colors font-semibold border border-gray-600"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default BasementRemodeling;
