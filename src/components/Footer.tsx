import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zwolinski-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-zwolinski-burgundy">ZWOLINSKI</span>
              <span className="block text-sm">Quality Construction</span>
            </h3>
            <p className="text-gray-300">
              Quality construction services in Perkasie and surrounding areas.
            </p>
          </div>
          <div>
            <h3 className="text-xl  font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-zwolinski-burgundy transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-zwolinski-burgundy transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-zwolinski-burgundy transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-zwolinski-burgundy transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-zwolinski-burgundy transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <a
                href="tel:+12155551234"
                className="flex items-center space-x-2 text-gray-300 hover:text-zwolinski-burgundy"
              >
                <Phone className="h-4 w-4" />
                <span>(267) 471-6120</span>
              </a>
              <a
                href="mailto:info@zwolinskiconstruction.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-zwolinski-burgundy"
              >
                <Mail className="h-4 w-4" />
                <span>arnoldzwolinski@verizon.net</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Perkasie, PA</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Zwolinski-Quality-Construction-Co/61559520404180/"
                className="text-gray-300 hover:text-zwolinski-burgundy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@zwolinskiquality"
                className="text-gray-300 hover:text-zwolinski-burgundy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-zwolinski-burgundy"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <div className="mb-4">
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-zwolinski-burgundy mx-2"
            >
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link
              to="/accessibility"
              className="text-gray-300 hover:text-zwolinski-burgundy mx-2"
            >
              Accessibility
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Zwolinski Quality Construction.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
