import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-zwolinski-navy">
            Contact <span className="text-zwolinski-burgundy">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-zwolinski-navy">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-zwolinski-burgundy bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all">
                  <Phone className="h-6 w-6 text-zwolinski-burgundy mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-zwolinski-navy">
                      Phone
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="tel:+12674716120"
                        className="flex items-center space-x-2 text-gray-700 hover:text-zwolinski-burgundy"
                      >
                        <Phone className="h-5 w-5" />
                        <span>(267) 471-6120</span>
                      </a>
                      <a
                        href="sms:+12674716120"
                        className="flex items-center space-x-2 text-gray-700 hover:text-zwolinski-burgundy"
                      >
                        <MessageSquare className="h-5 w-5" />
                        <span>Text Us</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-zwolinski-burgundy bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all">
                  <Mail className="h-6 w-6 text-zwolinski-burgundy mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-zwolinski-navy">
                      Email
                    </h3>
                    <p className="text-gray-600">arnoldzwolinski@verizon.net</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-zwolinski-burgundy mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-zwolinski-navy">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      166 E Walnut St, Perkasie, PA 18944
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-zwolinski-burgundy mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-zwolinski-navy">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday-Sunday: 9:00AM - 6:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Form */}
            <div className="bg-zwolinski-navy bg-opacity-5 p-8 rounded-lg ">
              <h2 className="text-3xl font-bold mb-8 text-zwolinski-navy">
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
