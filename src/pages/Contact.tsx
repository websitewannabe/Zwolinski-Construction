import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import OptimizedImage from "../components/OptimizedImage";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zwolinskiconstr.com/contact" />
        <title>Contact Zwolinski Quality Construction | Get a Free Quote</title>
        <meta
          name="description"
          content="Contact Zwolinski Quality Construction to discuss your next remodeling project. Call, text, email, or visit our office in Perkasie, PA."
        />
        <meta
          name="keywords"
          content="contact Zwolinski Construction, remodeling consultation, construction estimate, home improvement quote, contractor phone number, Perkasie contractor, Bucks County builder"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Zwolinski Quality Construction",
            email: "arnoldzwolinski@verizon.net",
            address: {
              "@type": "PostalAddress",
              streetAddress: "166 E Walnut St",
              addressLocality: "Perkasie",
              addressRegion: "PA",
              postalCode: "18944",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "09:00",
                closes: "17:00",
                description: "By appointment only",
              },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-267-471-6120",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Helmet>

      <section
        className="relative h-[300px] md:h-[500px] bg-cover bg-center"
      >
        <OptimizedImage
          src="/images/gallery/bathrooms/newBathroom3.jpg"
          alt="Contact Us"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-gray-300 bg-black/80 backdrop-blur-md p-8 rounded-lg max-w-2xl border border-gray-700">
            <h1 className="text-5xl font-bold mb-4">
              Contact <span className="text-silver">Us</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Let's discuss your project and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-8 text-zwolinski-navy">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <Phone className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Call Us
                    </h3>
                    <a
                      href="tel:+12674716120"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
                    >
                      <span className="text-gray-600">(267) 471-6120</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <MessageSquare className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Text Us
                    </h3>
                    <a
                      href="sms:+12674716120"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
                    >
                      <span className="text-gray-600">(267) 471-6120</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <Mail className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Email
                    </h3>
                    <a
                      href="mailto:arnoldzwolinski@verizon.net"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      arnoldzwolinski@verizon.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <MapPin className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Location
                    </h3>
                    <a
                      href="https://www.google.com/maps/place/Zwolinski+Quality+Construction/@40.3507719,-75.2785989,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6a05cc01b6e05:0x4f72758643065789!8m2!3d40.3507719!4d-75.276024!16s%2Fg%2F11clvrzxh5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      166 E Walnut St, Perkasie, PA 18944
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-300">
                  <Clock className="h-6 w-6 text-[#157FBB] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday-Friday: 9:00AM - 5:00PM
                      <br />
                      Saturday-Sunday: Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 md:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-zwolinski-navy">
            Service Areas
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We proudly serve these communities throughout Pennsylvania:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="/cities/doylestown" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Doylestown
            </a>
            <a href="/cities/quakertown" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Quakertown
            </a>
            <a href="/cities/allentown" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Allentown
            </a>
            <a href="/cities/perkasie" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Perkasie
            </a>
            <a href="/cities/silverdale" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Silverdale
            </a>
            <a href="/cities/buckingham" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Buckingham
            </a>
            <a href="/cities/carversville" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Carversville
            </a>
            <a href="/cities/chalfont" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Chalfont
            </a>
            <a href="/cities/dublin" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Dublin
            </a>
            <a href="/cities/fountainville" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Fountainville
            </a>
            <a href="/cities/furlong" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Furlong
            </a>
            <a href="/cities/holland" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Holland
            </a>
            <a href="/cities/ivyland" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Ivyland
            </a>
            <a href="/cities/jamison" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Jamison
            </a>
            <a href="/cities/lahaska" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Lahaska
            </a>
            <a href="/cities/morrisville" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Morrisville
            </a>
            <a href="/cities/newhope" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              New Hope
            </a>
            <a href="/cities/newtown" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Newtown
            </a>
            <a href="/cities/ottsville" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Ottsville
            </a>
            <a href="/cities/pipersville" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Pipersville
            </a>
            <a href="/cities/pointpleasant" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Point Pleasant
            </a>
            <a href="/cities/richboro" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Richboro
            </a>
            <a href="/cities/southampton" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Southampton
            </a>
            <a href="/cities/trevose" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Trevose
            </a>
            <a href="/cities/warminster" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Warminster
            </a>
            <a href="/cities/warrington" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Warrington
            </a>
            <a href="/cities/washingtoncrossing" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Washington Crossing
            </a>
            <a href="/cities/yardley" className="text-zwolinski-navy hover:text-[#157FBB] transition-colors">
              Yardley
            </a>
          </div>
          <div className="text-center mt-8">
            <a 
              href="/cities" 
              className="inline-flex items-center px-6 py-3 border border-zwolinski-navy text-zwolinski-navy hover:bg-zwolinski-navy hover:text-white rounded-lg transition-colors"
            >
              View All Service Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;