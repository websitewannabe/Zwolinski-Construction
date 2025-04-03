import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Hammer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  const testimonialsPerPage = 3;

  const testimonials = [
    {
      name: "Joseph R.",
      text: "Arnold is the best contractor that I have ever engaged for home remodeling or repairs over 45 years. I am very, very satisfied with his performance in remodeling three bathrooms. Arnold certainly aimed to please me with the selection of appliances and tile. The workmanship was exacting in every detail. The best was the fact that Arnold's crew provided all the remodeling services without my worrying about engaging other contractors to perform separate phases of the project. Arnold is a very capable and reliable contractor and I would certainly recommend him to any homeowner seeking perfection in job performance.",
      location: "Ambler, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: null,
      text: "Arnold was extremely polite, fair and true to his word on everything he promised. I would recommend him to anybody looking to make any home repairs. As far as price, I was completely shocked when he gave me his estimate as it was half of the quote I had received from the two previous contractors. With the lower quote I had half expected to get less quality but that wasn't the case at all. He and his team did an outstanding job. I am completely satisfied.",
      location: "Audubon, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: "James K.",
      text: "Zwolinski Quality Construction was excellent. They did exactly what we agreed upon in renovating our two bathrooms. The work crews showed up every day on time and worked all day. The work was completed in the predicted time span. They did excellent work. They were willing to make changes from our original contract when we indicated we changed our ideas about what we wanted. These changes did not affect our agreed upon cost for the project. We will definitely hire Zwolinski Construction in the future for our home renovation projects.",
      location: "Blue Bell, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: "Patrick M.",
      text: "Great we are using Zwolinski construction for the second bathroom and replacing exterior door. Will use again for other projects.",
      location: "Collegeville, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: "Chris B.",
      text: "Arnold and his crew are highly recommended. We initially contracted for two bathrooms to be remodeled. Both small, and had not been worked on since 1980. We had a limited budget and low expectations. Arnold's guidance and initial quote both met our budget and exceeded our expectation. While working there were very difficult obstacles - extremely poor existing construction, very old and bad dry wall, several changes and modifications. ZQC not only handled them all brilliantly, they came in UNDER BUDGET and OVER DELIVERED! Beautiful job. Would hire again and recommend enthusiastically and often. Clean, prompt, reliable, excellent.",
      location: "Collegeville, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: null,
      text: "Mr. Zwolinski and his team were outstanding! Easy to work with, quality work, done on time and within budget. The team is clean and friendly. From start to finish they completely finished my basement including a full kitchen, full bath and laundry room in three weeks. Approximately 1800 sq feet. My home is what I would call upscale, and now I have a lower level to match! Fantastic! Strongly recommend.",
      location: "Collegeville, PA",
      projectType: "Basement - Remodel",
    },
    {
      name: null,
      text: "Very professional, very high quality, quick but great work! We would use Arnold and his team anytime.",
      location: "Collegeville, PA",
      projectType: "Basement - Remodel",
    },
    {
      name: "Saman H.",
      text: "Arnold and crew were very professional. Arnold took time to meet with us numerous times to understand the scope of our project. Arnold and team were experienced group of professionals that got the job done quickly and with minimum supervision. We can say that Zwolinski Quality Construction not only delivered quality product and service, but also exceeded our expectation.",
      location: "Collegeville, PA",
      projectType: "Basement - Remodel",
    },
    {
      name: null,
      text: "Arnold and his team finished our 1200 square foot basement in just two weeks. They were here for at least 11 hours each day. They stayed later on occasion to get the job done. They were very easy to work with and very friendly. We requested last minute changes. They granted every request. The basement is beautiful! We have already recommended Zwolinski Quality construction to friends and family. Everyone who sees the basement is extremely impressed with the quality of the work and the timely fashion in which it was done.",
      location: "Downingtown, PA",
      projectType: "Basement - Remodel",
    },
    {
      name: "Dianna B.",
      text: "Did quality work for a reasonable price. He and his crew always put in a full day's work. Within a week of our initial meeting, I had a detailed outline and cost for the project. He was the first of the four pros to get back to me. If I had to say anything negative...at the end he was behind his timeline and rushed the cleanup. We didn't have time to walk through the finished project. To his credit, he said if ANYTHING was not to my liking he would come back to correct it. I definitely would have him do my next project.",
      location: "Doylestown, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: null,
      text: "We did a complete remodel of two bathrooms (master bath and second full bath). This included complete gutting, moving plumbing and electric, enclosing a toilet, building walls, and fully tiling floors and walls. The work was completed in two weeks, Arnold Zwolinski and his team did a spectacular job and I couldn't recommend them higher. Beautiful workmanship done with amazing speed. Will absolutely use them again and have already recommended them to friends for any remodeling jobs. The team was determined to meet all our needs and beyond, and worked with us as we made adjustments each day to the design. A rating of 'Excellent' would be more appropriate.",
      location: "Doylestown, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: "Ken C.",
      text: "We are extremely pleased with the finished basement with bathroom and powder room remodel that Zwolinski Quality Construction completed in our house. Arnold and his crew are very hard workers. They have great ideas, always came to work on time and were very polite. The project was completed above our expectations as well as on time and within our budget. We already recommended Zwolinski Quality Construction to a friend neighbor and plan on calling them again for future projects that we want done.",
      location: "Gilbertsville, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: "John P.",
      text: "Excellent old world European quality and expert craftsmanship at very affordable prices. Arnold Zwolinski and his team did an outstanding job remodeling our master bathroom. The attention to detail and workmanship was second to none. The crew was professional, courteous, and always cleaned up at the end of the day. The project was completed on time and exceeded our expectations. I highly recommend Zwolinski Quality Construction to anyone looking for top-notch remodeling services.",
      location: "Harleysville, PA",
      projectType: "Bathroom - Remodel",
    },
    {
      name: "Mary L.",
      text: "Arnold and his team transformed our outdated kitchen into a stunning modern space. Their expertise, attention to detail, and commitment to excellence were evident throughout the entire process. They worked efficiently, met the project deadline, and ensured everything was done to perfection. I would not hesitate to hire them again for future renovations.",
      location: "King of Prussia, PA",
      projectType: "Kitchen - Remodel",
    },
    {
      name: "David S.",
      text: "Our experience with Zwolinski Quality Construction was absolutely fantastic. Arnold and his crew built a beautiful deck for us, and the quality of their work is incredible. They took the time to understand our vision and executed it flawlessly. The craftsmanship and materials used were top-notch. We now have the perfect outdoor space for our family to enjoy. Highly recommended!",
      location: "Lansdale, PA",
      projectType: "Deck - Construction",
    },
    {
      name: "Emily R.",
      text: "We had our entire first floor renovated by Zwolinski Quality Construction, and the results were beyond our expectations. Arnold and his team were professional, hardworking, and meticulous in their work. They stayed within our budget and completed the project on time. I am beyond thrilled with the transformation of our home. Thank you!",
      location: "Norristown, PA",
      projectType: "Whole Home - Remodel",
    },
    {
      name: "Michael T.",
      text: "Arnold and his team did a fantastic job finishing our basement. The work was completed ahead of schedule, and the quality was excellent. They handled every aspect of the job with professionalism and care. The finished basement has added so much value and livable space to our home. I will definitely be hiring them again for future projects!",
      location: "Phoenixville, PA",
      projectType: "Basement - Remodel",
    },
    {
      name: "Sarah K.",
      text: "Zwolinski Quality Construction replaced our old, worn-out siding with beautiful, high-quality materials. The transformation was amazing! The team was reliable, punctual, and dedicated to delivering great results. We are extremely happy with the outcome and would absolutely hire them again for future home improvements.",
      location: "Pottstown, PA",
      projectType: "Exterior - Siding Replacement",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  );

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/projects/constructionHero.jpg')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-silver">Building Dreams,</span>
              <br />
              Delivering Excellence
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Zwolinski Quality Construction brings over 20 years of experience
              in residential and commercial construction to Bucks County and
              surrounding areas.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-silver rounded-md hover:bg-gray-700 transition-colors border border-gray-600"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-zwolinski-navy">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bathrooms",
                description:
                  "Transform your bathroom into a luxurious spa-like retreat with our expert remodeling services.",
                image: "/images/gallery/bathrooms/IMG_6024.jpg",
              },
              {
                title: "Kitchens",
                description:
                  "Create your dream kitchen with custom cabinets, modern appliances, and elegant finishes.",
                image: "/images/gallery/kitchens/IMG_0113.JPG",
              },
              {
                title: "Basements",
                description:
                  "Convert your unused basement into a beautiful living space, entertainment area, or home office.",
                image: "/images/gallery/basements/IMG_0231.JPG",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6 border-t-4 border-gray-700 bg-black text-gray-300">
                  <h3 className="text-2xl font-bold mb-3 text-silver">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={`/services#${service.title.toLowerCase()}`}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-silver rounded hover:bg-gray-700 transition-colors border border-gray-600"
                  >
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HomeAdvisor Reviews Banner */}
      <section className="bg-black py-12 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Top-Rated on HomeAdvisor
          </h2>
          <p className="text-2xl text-white">
            Over 150 Five-Star Reviews and Counting!
          </p>
          <div className="flex justify-center mt-4">
            {"★★★★★".split("").map((star, index) => (
              <span key={index} className="text-4xl text-white">
                {star}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* In-House Work */}
      <section className="py-16 bg-zwolinski-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              100% In-House Craftsmanship
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Unlike many contractors, we never subcontract our work. Every
              project is completed by our own skilled team, ensuring consistent
              quality and reliability on every job.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Direct Oversight</h3>
              <p>
                With our in-house team handling every aspect of your project, we
                maintain complete quality control and direct supervision
                throughout the entire process.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Consistent Quality</h3>
              <p>
                Our dedicated team members are trained to our exacting
                standards, ensuring the same high level of craftsmanship across
                all projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-zwolinski-navy">
            What Our Clients Say
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-out transform">
                {currentTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-lg text-gray-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center text-zwolinski-burgundy">
                        <MapPin className="h-5 w-5" />
                        <span className="ml-1 text-sm">
                          {testimonial.location}
                        </span>
                      </div>
                      <div className="flex items-center text-zwolinski-burgundy">
                        <Hammer className="h-5 w-5" />
                        <span className="ml-1 text-sm">
                          {testimonial.projectType}
                        </span>
                      </div>
                    </div>
                    <div>
                      {testimonial.text.length > 100 ? (
                        <>
                          <p className="text-gray-600 mb-2">
                            "{testimonial.text.slice(0, 100)}
                            <span
                              className={`${expandedReviews.includes(index) ? "" : "hidden"}`}
                            >
                              {testimonial.text.slice(100)}
                            </span>
                            {!expandedReviews.includes(index) && "..."}"
                          </p>
                          <button
                            onClick={() => toggleReview(index)}
                            className="text-zwolinski-burgundy hover:text-opacity-80 text-sm mb-2"
                          >
                            {expandedReviews.includes(index)
                              ? "Read Less"
                              : "Read More"}
                          </button>
                        </>
                      ) : (
                        <p className="text-gray-600 mb-4">
                          "{testimonial.text}"
                        </p>
                      )}
                      {testimonial.name && (
                        <p className="font-semibold text-zwolinski-navy">
                          {testimonial.name}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -left-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6 text-zwolinski-burgundy" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 -right-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
            >
              <ChevronRight className="h-6 w-6 text-zwolinski-burgundy" />
            </button>

            {/* Page Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "bg-zwolinski-burgundy w-4"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-gray-300 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-silver">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-800 text-silver rounded-md hover:bg-gray-700 transition-colors font-semibold border border-gray-600"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
