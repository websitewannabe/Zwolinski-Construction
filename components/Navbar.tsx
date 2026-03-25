"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const serviceItems = [
  { name: "Basement Remodeling", path: "/services/basement-remodeling" },
  { name: "Bathroom Remodeling", path: "/services/bathroom-remodeling" },
  { name: "Kitchen Remodeling", path: "/services/kitchen-remodeling" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-800/50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/projects/newLogo.webp"
              alt="Zwolinski Quality Construction"
              width={250}
              height={80}
              className="h-auto w-auto max-w-[250px] max-h-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-zinc-300 hover:text-primary nav-underline transition-colors text-sm tracking-wide uppercase"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 text-zinc-300 hover:text-primary nav-underline transition-colors text-sm tracking-wide uppercase"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 px-4 py-2 text-zinc-300 hover:text-primary nav-underline transition-colors text-sm tracking-wide uppercase"
              >
                Services
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 pt-2">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl shadow-black/50 overflow-hidden">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        href={service.path}
                        className="block px-5 py-3.5 text-zinc-300 hover:text-primary hover:bg-zinc-800/50 transition-all text-sm border-b border-zinc-800/50 last:border-0"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="px-4 py-2 text-zinc-300 hover:text-primary nav-underline transition-colors text-sm tracking-wide uppercase"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 text-zinc-300 hover:text-primary nav-underline transition-colors text-sm tracking-wide uppercase"
            >
              Contact
            </Link>

            <a
              href="tel:+12674716120"
              className="ml-4 flex items-center gap-2 px-5 py-2.5 text-white border border-transparent rounded transition-all text-sm tracking-wide nav-call-btn hover:bg-transparent hover:text-accent hover:border-accent/30"
            >
              <Phone className="h-4 w-4" />
              (267) 471-6120
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-zinc-800/50">
            <div className="pt-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block px-4 py-3 text-zinc-300 hover:text-white rounded transition-all text-sm tracking-wide uppercase hover-gradient"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2 pb-1">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-zinc-300 hover:text-white rounded transition-all text-sm tracking-wide uppercase hover-gradient"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileServicesOpen && serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    href={service.path}
                    className="block px-4 py-3 pl-8 text-zinc-300 hover:text-white rounded transition-all text-sm hover-gradient"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <a
                href="tel:+12674716120"
                className="flex items-center gap-2 mx-4 mt-4 px-5 py-3 text-white border border-transparent rounded transition-all text-sm justify-center nav-call-btn hover:bg-transparent hover:text-accent hover:border-accent/30"
              >
                <Phone className="h-4 w-4" />
                (267) 471-6120
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
