import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { MessageSquare } from "lucide-react"; // Added import for MessageSquare icon


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                    <div className="flex space-x-4"> {/* Added div for better layout */}
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

            {/* Contact Form */}
            <div className="bg-zwolinski-navy bg-opacity-5 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8 text-zwolinski-navy">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-zwolinski-burgundy focus:border-zwolinski-burgundy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-zwolinski-burgundy focus:border-zwolinski-burgundy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-zwolinski-burgundy focus:border-zwolinski-burgundy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-zwolinski-burgundy focus:border-zwolinski-burgundy"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">
                      Residential Construction
                    </option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-zwolinski-burgundy focus:border-zwolinski-burgundy"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-zwolinski-burgundy text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;