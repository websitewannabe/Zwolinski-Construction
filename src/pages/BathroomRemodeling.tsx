
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Bath } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";

const BathroomRemodeling = () => {
  const features = [
    "Custom Shower Design",
    "Vanity Installation",
    "Tile Installation",
    "Plumbing Fixtures",
    "Lighting Solutions",
    "Flooring Installation",
    "Mirror & Glass Work",
    "Ventilation Systems",
    "Accessibility Features",
    "Storage Solutions"
  ];

  const benefits = [
    "Increase home value",
    "Improved functionality",
    "Enhanced comfort",
    "Better water efficiency",
    "Modern aesthetics"
  ];

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zwolinskiconstr.com/services/bathroom-remodeling" />
        <title>Bathroom Remodeling | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Transform your bathroom into a luxurious spa-like retreat with Zwolinski Quality Construction. Professional bathroom remodeling services in Bucks, Montgomery, and Lehigh Counties."
        />
        <meta
          name="keywords"
          content="bathroom remodeling, bathroom renovation, bathroom contractor, custom shower, vanity installation, Bucks County contractor, Montgomery County builder, Lehigh County bathroom contractor"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px]">
        <OptimizedImage
          src="/images/gallery/bathrooms/IMG_6024.jpg"
          alt="Bathroom Remodeling"
          width={1920}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <Bath className="h-12 w-12 text-white mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Bathroom <span className="text-silver">Remodeling</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Transform your bathroom into a luxurious spa-like retreat with our expert remodeling services and attention to detail.
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
            Our Bathroom Remodeling Services
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
            Benefits of Bathroom Remodeling
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
            Recent Bathroom Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <OptimizedImage
              src="/images/gallery/bathrooms/newBathroom1.jpg"
              alt="Bathroom Project 1"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <OptimizedImage
              src="/images/gallery/bathrooms/newBathroom2.jpg"
              alt="Bathroom Project 2"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <OptimizedImage
              src="/images/gallery/bathrooms/newBathroom3.jpg"
              alt="Bathroom Project 3"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <a
              href="/gallery?section=bathroom"
              className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#4BA5CF] transition-colors font-semibold border border-gray-600"
            >
              View All Bathroom Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate for your bathroom remodeling project.
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

export default BathroomRemodeling;
