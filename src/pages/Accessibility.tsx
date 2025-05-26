import React from "react";
import { Helmet } from "react-helmet-async";

const Accessibility = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Helmet>
        <link
          rel="canonical"
          href="https://zwolinskiconstr.com/accessibility"
        />
        <title>Accessibility Statement | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Zwolinski Quality Construction is committed to digital accessibility. Learn about our accessibility tools, standards, and efforts to ensure an inclusive online experience."
        />
        <meta
          name="keywords"
          content="accessibility, ADA compliance, WCAG 2.1, accessible construction site, inclusive design, EqualWeb, digital accessibility, website accessibility statement"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Accessibility Statement",
            url: "https://zwolinskiconstr.com/accessibility",
            description:
              "Learn about Zwolinski Quality Construction's commitment to accessibility. This page outlines our use of accessibility tools, guidelines, and ongoing efforts to ensure an inclusive web experience.",
            publisher: {
              "@type": "Organization",
              name: "Zwolinski Quality Construction",
              url: "https://zwolinskiconstr.com",
              logo: {
                "@type": "ImageObject",
                url: "https://zwolinskiconstr.com/images/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-zwolinski-navy">
        Declaration of Accessibility Introduction
      </h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          The Internet constitutes the largest resource supporting freedom of
          information today for the user community in general and for users with
          disabilities in particular. For that reason we place emphasis on
          granting equal service to people with disabilities who use information
          displayed on the website, and on improving their browsing experience.
          We seek to ensure that our digital services will be accessible to
          people with disabilities, and accordingly, we have invested in the
          website's ease of use for people with disabilities, and continue to
          improve our web pages as needed.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Using the EqualWeb website accessibility tool
          </h2>
          <p className="mb-4">
            This website employs the Nagich By Click accessibility software and
            is connected through a special accessibility server. The software
            complies with Israeli standard SI 5568 at AA level. The software is
            subject to the manufacturer's Terms of Use. The website owners
            and/or agents bear the responsibility for the usage and
            implementation on the website, including the content displayed on
            the website under the Terms of Use of the Software.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            How does the site's accessibility work?
          </h2>
          <p className="mb-4">
            The website features an accessibility menu. A click on the menu
            makes accessibility buttons available. After selecting a menu item,
            the user should wait for the page to be loaded.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            What are the mean items?
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Option for keyboard-based navigation</li>
            <li>Adaptation of the website for NVDA assistive technology</li>
            <li>
              Enlargement of the font on the website to 4 levels of
              magnification
            </li>
            <li>Immobilization of moving elements, and stoppage of blinking</li>
            <li>Altered color contrast against dark background</li>
            <li>Altered color contrast against light background</li>
            <li>Adaptation for color-blind users</li>
            <li>Change of font for better readability</li>
            <li>Enlarged cursor, and change of color to black or white</li>
            <li>Enlargement of display to ~200%</li>
            <li>Emphasizing links on the website</li>
            <li>Emphasizing headings on the website</li>
            <li>Presentation of alt text to graphics</li>
            <li>Declaration of accessibility</li>
            <li>Sending of accessibility feedback</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Clarification
          </h2>
          <p className="mb-4">
            Despite our efforts to apply accessibility to browsing on every
            webpage, it may be discovered that some of webpages have not yet
            received accessibility or are not suitable for any available
            accessibility solution.
          </p>
          <p className="mb-4">
            We are continuing the effort to improve the website's accessibility
            to the full extent possible, guided by our belief, and by our moral
            commitment, that the website should be usable by the entire
            population, including people with disabilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Measures to support accessibility
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Include accessibility as a requirement for all web content.
              Content must meet WCAG 2.1 AA, and should meet AAA as feasible.
            </li>
            <li>Assign clear accessibility goals and responsibilities.</li>
            <li>
              Ensure content authors have access to accessibility knowledge and
              skills.
            </li>
            <li>Include accessibility as part of our technology mission.</li>
            <li>
              Include accessibility throughout our website-related internal
              policies.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Conformance status
          </h2>
          <p className="mb-4">
            The Web Content Accessibility Guidelines (WCAG) standard defines
            requirements to improve accessibility for people with disabilities.
            It defines three levels of conformance: Level A, Level AA, and Level
            AAA. "Fully conforms" means that the content meets all of the WCAG
            requirements at the specified Level without exceptions. We strive to
            be/remain fully compliant with an annual review of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Feedback
          </h2>
          <p className="mb-4">
            We welcome your feedback on the accessibility of our website. Please
            let us know if you encounter accessibility barriers.
          </p>
          <p className="mb-4">
            E-mail: support@websitewannabe.com
            <br />
            We usually respond to accessibility feedback from e-mail within 3-5
            business days. If you do not receive a reply to your e-mail within
            10 business days, you can contact Website Wannabe at 267-500-2928.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Compatibility with browsers and assistive technology
          </h2>
          <p className="mb-4">
            Our website is designed to be compatible with assistive technologies
            and the last two versions of major browsers.
          </p>
          <p className="mb-4">
            In Internet Explorer 10, 11, and older browsers, some aspects of the
            website may not display optimally. The website is not designed for
            Internet Explorer 9 and earlier versions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Technical specifications
          </h2>
          <p className="mb-4">
            Our website relies upon the following technologies for conformance
            with WCAG 2.1:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>SVG</li>
          </ul>
          <p className="mb-4">
            The following technologies are used to improve accessibility and the
            user experience for everyone:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Limitations and alternatives
          </h2>
          <p className="mb-4">
            Several videos on our website use YouTube. As an alternative, the
            videos are provided as MP4 files on our server.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Assessment approach
          </h2>
          <p className="mb-4">
            Areté Inc assesses the accessibility of our website by
            self-evaluation and annual review.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Formal approval of this accessibility statement
          </h2>
          <p className="mb-4">
            This Accessibility Statement is approved by Chris Tierney, Website
            Wannabe Technology Support.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Accessibility;
