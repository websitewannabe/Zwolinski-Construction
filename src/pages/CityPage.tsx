
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getCityById } from '../utils/cityUtils';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const CityPage = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityId ? getCityById(cityId) : null;

  if (!city) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
        <p>The city page you're looking for doesn't exist.</p>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Zwolinski Quality Construction - ${city.name}, ${city.state}`,
    "description": city.description,
    "url": `https://zwolinskiconstr.com/cities/${city.id}`,
    "telephone": "(267) 471-6120",
    "email": "info@zwolinskiconstr.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": `${city.name}, ${city.state}`
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "addressLocality": city.name,
        "addressRegion": city.state
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Construction Services in ${city.name} | Zwolinski Quality Construction`}</title>
        <meta name="description" content={city.description} />
        <meta name="keywords" content={`construction ${city.name}, remodeling ${city.name}, contractor, ${city.services.join(', ')} ${city.name}`} />
        <link rel="canonical" href={`https://zwolinskiconstr.com/cities/${city.id}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zwolinski-navy to-zwolinski-navy/90 text-white py-20">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/projects/constructionHero.jpg"
            alt={`Construction services in ${city.name}, ${city.state}`}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-black">
            Construction Services in {city.name}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-black">
            {city.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(267) 471-6120"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Call (267) 471-6120
            </a>
            <a
              href="/contact"
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-zwolinski-navy">
            Our Services in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {city.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="text-silver mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Professional {service.toLowerCase()} services in {city.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-zwolinski-navy">
            Why Choose Us in {city.name}?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="text-silver mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Licensed and insured contractor</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-silver mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Familiar with local {city.name} building codes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-silver mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Free estimates for all {city.name} residents</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-silver mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Quality craftsmanship guaranteed</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-silver mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Over 10 years of experience</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-zwolinski-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project in {city.name}?
          </h2>
          <p className="text-xl mb-8">
            Contact Zwolinski Quality Construction today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center">
              <Phone className="mr-3" size={24} />
              <span className="text-lg">(267) 471-6120</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3" size={24} />
              <span className="text-lg">info@zwolinskiconstr.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPage;
