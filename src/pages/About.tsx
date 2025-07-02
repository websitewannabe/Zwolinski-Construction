import React from "react";
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "../components/OptimizedImage";

const About = () => {
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

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zwolinskiconstr.com/about" />
        <title>
          About Zwolinski Quality Construction | Home Remodeling Experts
        </title>
        <meta
          name="description"
          content="Learn about Zwolinski Quality Construction—trusted for expert remodeling, renovations, and home improvements in Bucks, Montgomery, and Lehigh Counties."
        />
        <meta
          name="keywords"
          content="about Zwolinski Construction, remodeling company PA, trusted contractor, residential construction, home improvement, renovation experts, Bucks County, Montgomery County, Lehigh County"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Zwolinski Quality Construction",
            url: "https://zwolinskiconstr.com/about",
            image: "https://zwolinskiconstr.com/images/zwol25.png",
            logo: "https://zwolinskiconstr.com/images/zwol25.png",
            description:
              "Zwolinski Construction is a trusted remodeling company offering full-service renovations including kitchens, bathrooms, basements, and home additions across Southeastern Pennsylvania.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Construction Ln",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            telephone: "+1-215-555-1234",
            openingHours: "Mo-Fr 08:00-17:00",
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "Quakertown",
                "Norristown",
                "Allentown",
                "Lansdale",
                "Blue Bell",
                "Phoenixville",
                "King of Prussia",
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px]">
        <OptimizedImage
          src="/images/projects/aboutLivingRoom.jpg"
          alt="About Us Hero"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Building trust through quality craftsmanship and exceptional
              service.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#157FBB] text-white rounded-md hover:bg-[#1369A0] transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#C0C0C0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zwolinski-navy">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Arnold Zwolinski and Zwolinski Quality Construction provide a
                complete solution for all your home improvement, remodeling, and
                renovation needs. We work with you personally from first design
                through finished project and we care about the details. Because
                we understand how important your home is for you and your
                family, and we take pride in every job we do.
              </p>
              <p className="text-gray-600 mb-4">
                Your greatest investment is also our greatest invention: whether
                it's time to remodel your kitchen or bathroom, or expand your
                living space by remodeling your basement, Zwolinski Quality
                Construction will turn dreams into affordable realities.
              </p>
              <p className="text-gray-600 mb-4">
                Whether it's decks, garages, windows, siding, hardwood floors,
                tiles, or any other home improvement project, our wide range of
                professional experience guarantees that your project will be
                completed with the utmost efficiency and top-quality
                workmanship.
              </p>
              <p className="text-gray-600">
                We take pride in our many satisfied customers, and we look
                forward to making you one of them. So for all your remodeling
                needs look to Zwolinski for the best in quality, reliability,
                and service!
              </p>
            </div>
            <div className="w-full">
              <OptimizedImage
                src="/images/zwol25.png"
                alt="Logo"
                width={800}
                height={700}
                quality={90}
                className="rounded-lg shadow-xl w-full max-h-[700px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl border border-gray-600"
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            See Our Reviews
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            <a
              href="https://www.google.com/search?q=zwolinski+quality+construction&oq=zwolinski+qu&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYOTIKCAMQABiABBiiBDIKCAQQABiABBiiBDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDI3NTNqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x89c6a05cc01b6e05:0x4f72758643065789,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-md bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8 border border-gray-600 flex flex-col items-center justify-center text-center"
            >
              <img
                src="/images/google-logo.png"
                alt="Google Reviews"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                Google Reviews
              </h3>
              <p className="text-gray-600 mb-4">
                See what our clients are saying about us on Google
              </p>
              <span className="text-zwolinski-burgundy font-semibold">
                Read Reviews →
              </span>
            </a>

            <a
              href="https://www.homeadvisor.com/rated.ZWOLINSKIQuality.8386546.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-md bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8 border border-gray-600 flex flex-col items-center justify-center text-center"
            >
              <img
                src="/images/homeadvisor-logo.png"
                alt="HomeAdvisor Reviews"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                HomeAdvisor Reviews
              </h3>
              <p className="text-gray-600 mb-4">
                Check out our reviews on HomeAdvisor
              </p>
              <span className="text-zwolinski-burgundy font-semibold">
                Read Reviews →
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-16">
        <OptimizedImage
          src="/images/projects/constructionHero.jpg"
          alt="Construction Hero"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#C0C0C0]/90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Curious About What We Offer?
          </h2>
          <p className="text-xl mb-8 text-gray-800">Check out our services.</p>
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#4BA5CF] transition-colors font-semibold border border-gray-600"
          >
            Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;