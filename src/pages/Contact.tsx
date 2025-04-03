import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
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
              Contact <span className="text-silver">Us</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Let's discuss your project and bring your vision to life.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-semibold border border-gray-600"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-zwolinski-navy">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all border border-gray-700">
                  <Phone className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      Phone
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="tel:+12674716120"
                        className="flex items-center space-x-2 text-gray-400 hover:text-silver"
                      >
                        <Phone className="h-5 w-5 text-white" />
                        <span>(267) 471-6120</span>
                      </a>
                      <a
                        href="sms:+12674716120"
                        className="flex items-center space-x-2 text-gray-400 hover:text-silver"
                      >
                        <MessageSquare className="h-5 w-5 text-white" />
                        <span>Text Us</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all border border-gray-700">
                  <Mail className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      Email
                    </h3>
                    <p className="text-gray-400">arnoldzwolinski@verizon.net</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all border border-gray-700">
                  <MapPin className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      Location
                    </h3>
                    <p className="text-gray-400">
                      166 E Walnut St, Perkasie, PA 18944
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-all border border-gray-700">
                  <Clock className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      Business Hours
                    </h3>
                    <p className="text-gray-400">
                      Monday-Sunday: 9:00AM - 6:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Form */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-8 text-white">
                Send Us a Message
              </h2>
              <div className="w-full h-[600px]">
                {/* Replace the src URL below with your Google Form embed URL  */}
                <iframe
                  src="https://forms.gle/kb6gKFHfhN4Pfn8PA"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
