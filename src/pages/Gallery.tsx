import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { galleryData } from '../types/gallery';

const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [filteredSections, setFilteredSections] = useState(
    galleryData.map(section => ({ ...section, showAll: false }))
  );

  useEffect(() => {
    setFilteredSections(
      selectedSection
        ? galleryData.filter(section => section.id === selectedSection).map(section => ({ ...section, showAll: false }))
        : galleryData.map(section => ({ ...section, showAll: false }))
    );
  }, [selectedSection]);

  return (
    <div>
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/projects/servicesHero.jpg")',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-5xl font-bold mb-4">
              Project <span className="text-silver">Gallery</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Browse through our collection of completed projects and see the quality of our work firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-[#C0C0C0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedSection(null)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !selectedSection 
                  ? 'bg-[#63C5EF] text-white border border-gray-600' 
                  : 'bg-black text-white hover:bg-[#63C5EF] border border-gray-600'
              }`}
            >
              All Projects
            </button>
            {galleryData.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedSection === section.id
                    ? 'bg-[#63C5EF] text-white border border-gray-600'
                    : 'bg-[#63C5EF] text-white hover:bg-[#4BA5CF] border border-gray-600'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          {filteredSections.map((section) => (
            <div key={section.id} className="mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">{section.title}</h2>
              {section.description && (
                <p className="text-gray-600 mb-8">{section.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.images.length > 0 ? (
                  <>
                    {section.images.slice(0, section.showAll ? undefined : 3).map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative group overflow-hidden rounded-lg h-[300px]"
                      >
                        <img
                          src={image.url}
                          alt={image.description || image.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h3 className="text-white text-xl font-semibold mb-2">
                            {image.title}
                          </h3>
                          {image.description && (
                            <p className="text-white text-sm">
                              {image.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                    {section.images.length > 3 && !section.showAll && (
                      <div className="col-span-full text-center mt-4">
                        <button
                          onClick={() => {
                            const updatedSections = [...filteredSections];
                            const sectionIndex = updatedSections.findIndex(s => s.id === section.id);
                            if (sectionIndex !== -1) {
                              updatedSections[sectionIndex] = {
                                ...updatedSections[sectionIndex],
                                showAll: true
                              };
                              setFilteredSections(updatedSections);
                            }
                          }}
                          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors border border-gray-600"
                        >
                          Show More
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Coming soon...</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#C0C0C0] text-gray-800 py-16 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-silver">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-semibold border border-gray-600"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;