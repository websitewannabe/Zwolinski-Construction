import Image from "next/image";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Frequently Asked Questions About Our Remodeling Services",
  description:
    "Get answers about remodeling timelines, costs, permits, and our process. Common questions from Bucks County homeowners answered.",
  keywords: [
    "remodeling FAQ",
    "kitchen remodel cost Bucks County",
    "bathroom renovation timeline",
    "remodeling permits PA",
    "home renovation questions",
    "contractor FAQ",
  ],
  canonical: "/faq",
});

const faqSections = [
  {
    label: "General",
    faqs: [
      {
        question:
          "How long has Zwolinski Quality Construction been in business?",
        answer:
          "Zwolinski Quality Construction has been proudly serving homeowners for over 25 years. We have built a strong reputation for quality craftsmanship and reliable service throughout Bucks County, Montgomery County, and Lehigh County in Pennsylvania.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve Bucks County, Montgomery County, and Lehigh County in Pennsylvania. Whether you're in Doylestown, Lansdale, Allentown, or the surrounding communities, we're ready to help with your next home improvement project.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, Zwolinski Quality Construction is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage to protect both our team and your property throughout every project.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Absolutely. We offer free consultations and detailed estimates for all our remodeling and home improvement services. Contact us to schedule a visit where we'll discuss your vision, assess the scope of work, and provide a transparent, no-obligation estimate.",
      },
    ],
  },
  {
    label: "Services",
    faqs: [
      {
        question: "What types of remodeling do you offer?",
        answer:
          "We offer a comprehensive range of remodeling and home improvement services, including kitchen remodeling, bathroom remodeling, basement finishing, decks, garages, window and door installation, siding, hardwood floor installation, tile work, and much more. No project is too big or too small.",
      },
      {
        question: "Do you handle all the work in-house?",
        answer:
          "Yes. We are proud to offer 100% in-house craftsmanship with no subcontractors. This means every aspect of your project is handled by our own skilled team, ensuring consistent quality, clear communication, and accountability from start to finish.",
      },
      {
        question:
          "Can you work with my existing design or do I need to start from scratch?",
        answer:
          "We're happy to do either. If you already have a design or vision in mind, we'll work closely with you to bring it to life exactly as you imagine it. If you're starting from scratch, our team will guide you through the design process to create a plan that fits your style, needs, and budget.",
      },
    ],
  },
  {
    label: "Process & Timeline",
    faqs: [
      {
        question: "How long does a typical bathroom remodel take?",
        answer:
          "Most bathroom remodels are completed in 2 to 3 weeks, depending on the scope of the project. Factors like custom tile work, fixture changes, and layout modifications can influence the timeline. We'll provide a detailed schedule during your consultation.",
      },
      {
        question: "How long does a kitchen remodel take?",
        answer:
          "A typical kitchen remodel takes 4 to 6 weeks depending on the scope of work. Larger projects involving layout changes, custom cabinetry, or structural modifications may take additional time. We keep you informed throughout every step of the process.",
      },
      {
        question: "How long does a basement finishing take?",
        answer:
          "A standard basement finishing project usually takes 2 to 4 weeks. The timeline depends on the size of the space, the complexity of the design, and any plumbing or electrical work required. We'll outline a clear schedule before work begins.",
      },
      {
        question: "What is the remodeling process like?",
        answer:
          "Our process is designed to be straightforward and stress-free. It begins with an initial consultation where we discuss your goals and assess your space. Next comes the design phase where we finalize plans and materials. We then provide a detailed estimate for your approval. Once approved, our team handles all construction work with care and precision. The project wraps up with a final walkthrough to ensure everything meets your expectations.",
      },
    ],
  },
  {
    label: "Cost & Payment",
    faqs: [
      {
        question: "How much does a bathroom remodel cost?",
        answer:
          "The cost of a bathroom remodel varies depending on the size of the space, materials selected, and the scope of work involved. We provide detailed, transparent estimates after an in-home consultation so you know exactly what to expect — no hidden fees or surprises.",
      },
      {
        question: "How much does a kitchen remodel cost?",
        answer:
          "Kitchen remodel costs depend on factors such as the size of the kitchen, choice of materials, cabinetry, countertops, and appliances. We offer free estimates tailored to your specific project, ensuring you receive an accurate and honest quote.",
      },
      {
        question: "Do you offer financing?",
        answer:
          "We understand that a remodeling project is a significant investment. Please contact us to discuss payment options that work for your budget. We're committed to making your home improvement goals achievable.",
      },
    ],
  },
];

const allFaqs = faqSections.flatMap((section) => section.faqs);

export default function FAQPage() {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://zwolinskiconstr.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://zwolinskiconstr.com/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection
        image="/images/projects/constructionHero.jpg"
        imageAlt="FAQ"
        title="Frequently"
        titleAccent="Asked Questions"
        subtitle="Find answers to common questions about our remodeling services."
        ctaText="Get a Free Quote"
      />

      {/* FAQ Sections */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide max-w-4xl">
          {faqSections.map((section) => (
            <div key={section.label} className="mb-16 last:mb-0">
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
                {section.label}
              </p>
              <h2 className="heading-lg text-white mb-8">{section.label}</h2>
              <div className="space-y-4">
                {section.faqs.map((faq) => (
                  <div key={faq.question} className="card-luxury p-0">
                    <div className="flex items-start gap-4 p-6">
                      <ChevronDown className="h-5 w-5 text-accent mt-1 shrink-0" />
                      <div>
                        <h3 className="font-serif text-lg text-white mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/projects/constructionHero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Still Have Questions?
          </p>
          <h2 className="heading-lg text-white mb-6">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation. We&apos;re happy to answer
            any questions and help you get started on your next remodeling
            project.
          </p>
          <QuoteButton text="Get a Free Quote" />
        </div>
      </section>
    </>
  );
}
