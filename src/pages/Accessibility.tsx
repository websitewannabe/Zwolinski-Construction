import React from "react";

const Accessibility = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-zwolinski-navy">
        Accessibility Statement
      </h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Introduction
          </h2>
          <p className="mb-4">
            The Internet constitutes the largest resource supporting freedom of information today for the user community in general and for users with disabilities in particular. For that reason we place emphasis on granting equal service to people with disabilities who use information displayed on the website, and on improving their browsing experience. We seek to ensure that our digital services will be accessible to people with disabilities, and accordingly, we have invested in the website's ease of use for people with disabilities, and continue to improve our web pages as needed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Accessibility Features
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Option for keyboard-based navigation</li>
            <li>Adaptation of the website for NVDA assistive technology</li>
            <li>Enlargement of the font on the website to 4 levels of magnification</li>
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
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Measures to Support Accessibility
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Include accessibility as a requirement for all web content. Content must meet WCAG 2.1 AA, and should meet AAA as feasible.</li>
            <li>Assign clear accessibility goals and responsibilities.</li>
            <li>Ensure content authors have access to accessibility knowledge and skills.</li>
            <li>Include accessibility as part of our technology mission.</li>
            <li>Include accessibility throughout our website-related internal policies.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Conformance Status
          </h2>
          <p className="mb-4">
            The Web Content Accessibility Guidelines (WCAG) standard defines requirements to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. "Fully conforms" means that the content meets all of the WCAG requirements at the specified Level without exceptions. We strive to be/remain fully compliant with an annual review of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Compatibility with Browsers and Assistive Technology
          </h2>
          <p className="mb-4">
            Our website is designed to be compatible with assistive technologies and the last two versions of major browsers. In Internet Explorer 10, 11, and older browsers, some aspects of the website may not display optimally. The website is not designed for Internet Explorer 9 and earlier versions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Feedback
          </h2>
          <p className="mb-4">
            We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers. You can contact us at:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email: <a href="mailto:arnoldzwolinski@verizon.net" className="text-zwolinski-burgundy hover:underline">arnoldzwolinski@verizon.net</a></li>
            <li>Phone: <a href="tel:2153409652" className="text-zwolinski-burgundy hover:underline">(215) 340-9652</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Accessibility;