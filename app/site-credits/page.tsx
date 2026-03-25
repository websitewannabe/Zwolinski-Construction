import type { Metadata } from "next";
import { ArrowRight, Code, Palette, Rocket, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Site Credits",
  description:
    "This website was designed and built by Website Wannabe, powered by AI Wannabe.",
  alternates: { canonical: "/site-credits" },
};

export default function SiteCreditsPage() {
  return (
    <>
      {/* About AI Wannabe */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Built By
            </p>
            <h2 className="heading-lg text-white mb-8">
              Website <span className="text-accent">Wannabe</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              This website was designed and built by{" "}
              <a
                href="https://websitewannabe.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors underline underline-offset-4"
              >
                Website Wannabe
              </a>{" "}
              — a modern web design and development agency specializing in
              high-performance websites for businesses that want to stand out
              online.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Powered by{" "}
              <a
                href="https://aiwannabe.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors underline underline-offset-4"
              >
                AI Wannabe
              </a>
              , this site leverages cutting-edge AI technology to deliver a
              fast, modern, and intelligent web experience.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              From custom design and development to SEO optimization and
              ongoing support, Website Wannabe delivers websites that look
              stunning and perform even better.
            </p>
          </div>
        </div>
      </section>

      {/* What AI Wannabe Does */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Services
            </p>
            <h2 className="heading-lg text-white">
              What Website Wannabe Offers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: "Custom Design",
                description:
                  "Unique, brand-aligned designs tailored to your business and audience.",
              },
              {
                icon: Code,
                title: "Web Development",
                description:
                  "Modern, fast, and responsive websites built with cutting-edge technology.",
              },
              {
                icon: Rocket,
                title: "SEO & Performance",
                description:
                  "Optimized for search engines and blazing-fast load times out of the box.",
              },
              {
                icon: Globe,
                title: "Ongoing Support",
                description:
                  "Continuous maintenance, updates, and support to keep your site running smoothly.",
              },
            ].map((item) => (
              <div key={item.title} className="card-luxury p-8 text-center">
                <item.icon className="h-10 w-10 text-accent mx-auto mb-5" />
                <h3 className="font-serif text-lg text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want a Website Like This? */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Need a Website?
          </p>
          <h2 className="heading-lg text-white mb-6">
            Want a Website Like This?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Website Wannabe builds high-performance, beautifully designed
            websites for businesses of all sizes. Get in touch today.
          </p>
          <a
            href="https://websitewannabe.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Website Wannabe
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
