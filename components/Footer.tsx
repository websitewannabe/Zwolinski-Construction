"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Accessibility } from "lucide-react";
import EmailLink from "@/components/EmailLink";

declare global {
  interface Window {
    interdeal: Record<string, unknown>;
  }
}

function loadEqualWebScript() {
  if (typeof window === "undefined") return;
  if (document.querySelector('script[src*="accessibility.js"]')) return;

  window.interdeal = {
    sitekey: "0b5ee2eb111e583d15929d50a9707d6b",
    Position: "left",
    domains: {
      js: "https://cdn.equalweb.com/",
      acc: "https://access.equalweb.com/",
    },
    Menulang: "EN",
    btnStyle: {
      vPosition: ["80%", "20%"],
      scale: ["0.5", "0.5"],
      color: { main: "#147FBB", second: "#000000" },
      icon: { outline: false, type: 7, shape: "semicircle" },
    },
  };

  const coreCall = document.createElement("script");
  coreCall.src =
    "https://cdn.equalweb.com/core/5.1.13/accessibility.js";
  coreCall.defer = true;
  coreCall.integrity =
    "sha512-70/AbMe6C9H3r5hjsQleJEY4y5l9ykt4WYSgyZj/WjpY/ord/26LWfva163b9W+GwWkfwbP0iLT+h6KRl+LoXA==";
  coreCall.crossOrigin = "anonymous";
  document.body.appendChild(coreCall);
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/projects/stackedLogo.webp"
              alt="Zwolinski Quality Construction"
              width={200}
              height={120}
              className="h-28 w-auto mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Expert bathroom, basement, and kitchen remodels throughout Bucks
              County. Quality craftsmanship with personalized design to bring
              your renovation vision to life.
            </p>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/people/Zwolinski-Quality-Construction-Co/61559520404180/"
                className="w-9 h-9 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white hover:border-transparent hover-gradient transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@zwolinskiquality"
                className="w-9 h-9 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-white hover:border-transparent hover-gradient transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
            <button
              onClick={loadEqualWebScript}
              className="flex items-center gap-2 text-white/70 hover:text-primary-light transition-colors text-sm"
            >
              <Accessibility className="h-4 w-4" />
              Accessibility Tools
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-[69px]">
            <h3 className="font-serif text-lg text-white mb-6 footer-heading-underline inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Reviews", href: "/reviews" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:pt-[69px]">
            <h3 className="font-serif text-lg text-white mb-6 footer-heading-underline inline-block">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Basement Remodeling", href: "/services/basement-remodeling" },
                { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
                { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:pt-[69px]">
            <h3 className="font-serif text-lg text-white mb-6 footer-heading-underline inline-block">Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:+12674716120"
                className="flex items-center gap-3 text-zinc-400 hover:text-primary-light transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-accent/60" />
                (267) 471-6120
              </a>
              <span className="flex items-center gap-3 text-zinc-400 hover:text-primary-light transition-colors text-sm">
                <Mail className="h-4 w-4 text-accent/60" />
                <EmailLink
                  user="arnoldzwolinski"
                  domain="verizon.net"
                  className="text-zinc-400 hover:text-primary-light transition-colors"
                />
              </span>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <MapPin className="h-4 w-4 text-accent/60" />
                Perkasie, PA 18944
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-xs">
            &copy; {new Date().getFullYear()} Zwolinski Quality Construction.
            All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs">
            <Link
              href="/privacy"
              className="text-zinc-600 hover:text-primary-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-zinc-600 hover:text-primary-light transition-colors"
            >
              Accessibility
            </Link>
            <a
              href="/sitemap.xml"
              className="text-zinc-600 hover:text-primary-light transition-colors"
            >
              Sitemap
            </a>
            <Link
              href="/site-credits"
              className="text-zinc-600 hover:text-primary-light transition-colors"
            >
              Site Credits
            </Link>
            <span className="text-zinc-600">
              Powered by AI Wannabe
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
