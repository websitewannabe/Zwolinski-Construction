import React, { useState, useEffect } from "react";
import { ArrowRight, Lightbulb, Utensils, Bath } from "lucide-react";
import { galleryData } from "../types/gallery";
import { Helmet } from "react-helmet-async";
import OptimizedImage from "../components/OptimizedImage";

const Gallery = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const initialSection = searchParams.get("section");
  const [selectedSection, setSelectedSection] = useState<string | null>(
    initialSection,
  );
  const [filteredSections, setFilteredSections] = useState(
    galleryData.map((section) => ({ ...section, showAll: false })),
  );

  // Icon mapping
  const sectionIcons = {
    basements: Lightbulb,
    bathrooms: Bath,
    kitchens: Utensils,
  };

  useEffect(() => {
    const sectionId = selectedSection?.toLowerCase();
    const filtered = sectionId
      ? galleryData.filter((section) => section.id.includes(sectionId))
      : galleryData;
    setFilteredSections(
      filtered
        .map((section) => ({ ...section, showAll: false }))
        .sort((a, b) => a.title.localeCompare(b.title)),
    );
  }, [selectedSection]);

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zwolinskiconstr.com/gallery" />
        <title>Project Gallery | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="View completed remodeling projects by Zwolinski Quality Construction including kitchen, bathroom, and basement renovations in Southeastern PA."
        />
        <meta
          name="keywords"
          content="remodeling gallery, construction portfolio, home renovation photos, kitchen remodel examples, bathroom renovation ideas, basement remodeling inspiration, Zwolinski Construction projects"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Zwolinski Construction Project Gallery",
            url: "https://zwolinskiconstr.com/gallery",
            description:
              "Browse Zwolinski Quality Construction's completed projects including kitchens, bathrooms, and basements throughout Bucks, Montgomery, and Lehigh Counties.",
            publisher: {
              "@type": "Organization",
              name: "Zwolinski Quality Construction",
              url: "https://zwolinskiconstr.com",
              logo: {
                "@type": "ImageObject",
                url: "https://zwolinskiconstr.com/images/logo.png",
              },
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Kitchen Remodeling Projects",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Bathroom Remodeling Projects",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Basement Remodeling Projects",
                },
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[500px]">
        <OptimizedImage
          src="/images/gallery/bathrooms/IMG_6024.jpg"
          alt="Gallery Hero"
          width={1920}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Project <span className="text-silver">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Browse through our collection of completed projects and see the
              quality of our work firsthand.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#157FBB] text-white rounded-md hover:bg-[#1369A0] transition-colors border border-gray-600"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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
                  ? "bg-[#63C5EF] text-white border border-gray-600"
                  : "bg-black text-white hover:bg-[#63C5EF] border border-gray-600"
              }`}
            >
              All Projects
            </button>
            {galleryData
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                    selectedSection === section.id
                      ? "bg-[#157FBB] text-white border border-gray-600"
                      : "bg-[#157FBB] text-white hover:bg-[#4BA5CF] border border-gray-600"
                  }`}
                >
                  {sectionIcons[section.id as keyof typeof sectionIcons] &&
                    React.createElement(
                      sectionIcons[section.id as keyof typeof sectionIcons],
                      {
                        className: "h-4 w-4",
                      },
                    )}
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
              <div className="flex items-center gap-3 mb-4">
                {sectionIcons[section.id as keyof typeof sectionIcons] &&
                  React.createElement(
                    sectionIcons[section.id as keyof typeof sectionIcons],
                    {
                      className: "h-8 w-8 text-white",
                    },
                  )}
                <h2 className="text-3xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              {section.description && (
                <p className="text-gray-600 mb-8">{section.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.images.length > 0 ? (
                  <>
                    {section.images
                      .slice(0, section.showAll ? undefined : 3)
                      .map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative group overflow-hidden rounded-lg h-[300px]"
                        >
                          <OptimizedImage
                            src={image.url}
                            alt={image.title}
                            width={400}
                            height={300}
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
                            const sectionIndex = updatedSections.findIndex(
                              (s) => s.id === section.id,
                            );
                            if (sectionIndex !== -1) {
                              updatedSections[sectionIndex] = {
                                ...updatedSections[sectionIndex],
                                showAll: true,
                              };
                              setFilteredSections(updatedSections);
                            }
                          }}
                          className="bg-[#157FBB] text-white px-6 py-2 rounded-md hover:bg-[#4BA5CF] transition-colors border border-gray-600"
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
      <section className="relative py-16 border-t border-gray-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/.netlify/images?url=${encodeURIComponent('/images/projects/constructionHero.jpg')}&w=1920&q=85&f=webp')`,
          }}
        />
        <div className="absolute inset-0 bg-[#C0C0C0]/90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-silver">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#157FBB] text-white rounded-md hover:bg-[#4BA5CF] transition-colors font-semibold border border-gray-600"
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