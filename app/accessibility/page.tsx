import EmailLink from "@/components/EmailLink";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Accessibility Statement | Zwolinski Quality Construction",
  description:
    "Zwolinski Quality Construction is committed to digital accessibility for all users. Learn about our efforts and how to contact us with accessibility concerns.",
  canonical: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="container-wide max-w-3xl mx-auto">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
          Our Commitment
        </p>
        <h1 className="heading-xl text-white mb-10">
          Accessibility Statement
        </h1>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            Zwolinski Quality Construction is committed to ensuring that our
            website is accessible to all visitors, including those with
            disabilities. We strive to provide an inclusive digital experience
            that meets or exceeds the requirements of the Web Content
            Accessibility Guidelines (WCAG) 2.1 Level AA.
          </p>

          <h2 className="heading-md text-white pt-4">
            Our Ongoing Efforts
          </h2>
          <p>
            We continually work to improve the accessibility of our website by
            conducting regular audits, training our team on accessibility best
            practices, and incorporating feedback from users. Our efforts
            include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>
              Providing meaningful alternative text for all images and
              non-text content
            </li>
            <li>
              Ensuring sufficient color contrast throughout the site for
              readability
            </li>
            <li>
              Implementing proper heading structure and semantic HTML for
              screen reader navigation
            </li>
            <li>
              Making all interactive elements accessible via keyboard
              navigation
            </li>
            <li>
              Using ARIA labels and roles where appropriate to enhance
              assistive technology support
            </li>
          </ul>

          <h2 className="heading-md text-white pt-4">
            Assistive Technology Support
          </h2>
          <p>
            Our website is designed to be compatible with a variety of
            assistive technologies, including screen readers, screen
            magnifiers, and speech recognition software. We test our site with
            popular assistive tools to ensure a consistent and usable
            experience.
          </p>

          <h2 className="heading-md text-white pt-4">
            Known Limitations
          </h2>
          <p>
            While we strive for full compliance, some content on our site may
            not yet fully meet all WCAG 2.1 AA criteria. We are actively
            working to identify and resolve these issues. If you encounter any
            barriers, please let us know so we can address them promptly.
          </p>

          <h2 className="heading-md text-white pt-4">
            Contact Us
          </h2>
          <p>
            If you experience any difficulty accessing content on our website,
            or if you have suggestions for improving accessibility, please
            contact us. We take all feedback seriously and will make every
            effort to accommodate your needs.
          </p>

          <div className="card-luxury p-6 mt-4">
            <p className="text-white font-serif text-lg mb-4">
              Accessibility Contact Information
            </p>
            <p className="text-zinc-400">
              <span className="text-zinc-300">Email:</span>{" "}
              <EmailLink
                user="arnoldzwolinski"
                domain="verizon.net"
                className="text-primary hover:underline"
              />
            </p>
            <p className="text-zinc-400 mt-2">
              <span className="text-zinc-300">Phone:</span>{" "}
              <a
                href="tel:+12674716120"
                className="text-primary hover:underline"
              >
                (267) 471-6120
              </a>
            </p>
          </div>

          <p className="text-zinc-500 text-sm pt-4">
            This accessibility statement was last updated on March 25, 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
