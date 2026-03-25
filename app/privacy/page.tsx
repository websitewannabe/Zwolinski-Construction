import EmailLink from "@/components/EmailLink";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Privacy Policy — Zwolinski Quality Construction",
  description:
    "Read our privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or request a quote.",
  canonical: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="container-wide max-w-3xl mx-auto">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
          Legal
        </p>
        <h1 className="heading-xl text-white mb-10">Privacy Policy</h1>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            Zwolinski Quality Construction (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) respects your privacy and is committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard information when you visit our
            website at zwolinskiconstr.com.
          </p>

          <h2 className="heading-md text-white pt-4">
            Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>
              <span className="text-zinc-300">Personal Information:</span>{" "}
              When you submit a contact form, we collect your name, email
              address, phone number, and any additional details you provide
              about your project.
            </li>
            <li>
              <span className="text-zinc-300">Usage Data:</span> We
              automatically collect information about how you interact with
              our website, including pages visited, time spent, browser type,
              device information, and referring URLs.
            </li>
            <li>
              <span className="text-zinc-300">Cookies and Tracking:</span> We
              use cookies and similar technologies to analyze website traffic
              and improve your browsing experience.
            </li>
          </ul>

          <h2 className="heading-md text-white pt-4">
            How We Use Information
          </h2>
          <p>The information we collect is used to:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>
              Respond to your inquiries and provide information about our
              construction and remodeling services
            </li>
            <li>
              Improve our website performance, content, and user experience
            </li>
            <li>
              Analyze website traffic patterns and usage through aggregated,
              anonymized data
            </li>
            <li>
              Communicate with you about project estimates, scheduling, and
              service updates
            </li>
            <li>
              Comply with applicable legal obligations
            </li>
          </ul>

          <h2 className="heading-md text-white pt-4">Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience. Cookies are
            small text files placed on your device that help us understand how
            visitors use our site. You can control cookie preferences through
            your browser settings. Disabling cookies may limit certain
            features of the website.
          </p>

          <h2 className="heading-md text-white pt-4">
            Third-Party Services
          </h2>
          <p>We use the following third-party services on our website:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>
              <span className="text-zinc-300">Google Analytics:</span> We use
              Google Analytics to collect anonymized data about website
              traffic and user behavior. Google Analytics may set cookies on
              your browser. For more information, visit{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <span className="text-zinc-300">Netlify Forms:</span> Our
              contact forms are processed through Netlify. Submitted
              information is stored securely on Netlify&apos;s servers. For
              more information, visit{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Netlify&apos;s Privacy Policy
              </a>
              .
            </li>
          </ul>

          <h2 className="heading-md text-white pt-4">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
            However, no method of electronic transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="heading-md text-white pt-4">Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or
            deletion of your personal information that we have collected. To
            exercise these rights, please contact us using the information
            below.
          </p>

          <h2 className="heading-md text-white pt-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our
            data practices, please contact us:
          </p>

          <div className="card-luxury p-6 mt-4">
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
            This Privacy Policy was last updated on March 25, 2026. We
            reserve the right to update this policy at any time. Changes will
            be posted on this page.
          </p>
        </div>
      </div>
    </section>
  );
}
