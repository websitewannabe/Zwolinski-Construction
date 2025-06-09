
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllCities } from '../utils/cityUtils';
import { MapPin } from 'lucide-react';

const CitiesIndex = () => {
  const cities = getAllCities();

  return (
    <>
      <Helmet>
        <title>Service Areas | Zwolinski Quality Construction</title>
        <meta name="description" content="Zwolinski Quality Construction serves multiple cities across Pennsylvania. Find your local area for construction and remodeling services." />
        <link rel="canonical" href="https://zwolinskiconstr.com/cities" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-zwolinski-navy">
            Our Service Areas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zwolinski Quality Construction proudly serves communities throughout Pennsylvania. 
            Click on your city to learn more about our local services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              to={`/cities/${city.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border"
            >
              <div className="flex items-center mb-4">
                <MapPin className="text-silver mr-3" size={24} />
                <div>
                  <h2 className="text-xl font-semibold text-zwolinski-navy">
                    {city.name}, {city.state}
                  </h2>
                  <p className="text-gray-600">{city.county}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {city.description}
              </p>
              <div className="text-sm text-silver font-medium">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CitiesIndex;
