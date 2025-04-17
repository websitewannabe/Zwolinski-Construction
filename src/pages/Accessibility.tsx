import React from "react";

const Accessibility = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-zwolinski-navy">
        Accessibility Statement
      </h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="mb-4">
            Zwolinski Quality Construction is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We aim to comply with all applicable standards, including WCAG 2.1 accessibility standards up to level AA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Our Commitment
          </h2>
          <p className="mb-4">
            We are committed to ensuring digital accessibility for people with disabilities. We strive to improve the user experience for everyone and apply the relevant accessibility standards to achieve this.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Standards We Follow
          </h2>
          <p className="mb-4">
            Our website strives to conform to level AA compliance for the Web Content Accessibility Guidelines (WCAG) 2.1. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Accessibility Features
          </h2>
          <p className="mb-4">
            Our website incorporates the following accessibility features:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Alternative text for images</li>
            <li>Proper heading structure</li>
            <li>Descriptive link text</li>
            <li>Consistent navigation</li>
            <li>Color contrast compliance</li>
            <li>Resizable text without loss of functionality</li>
            <li>Keyboard accessibility</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Compatibility with Browsers and Assistive Technology
          </h2>
          <p className="mb-4">
            Our website is designed to be compatible with the following:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Latest versions of major browsers</li>
            <li>Screen readers and text-to-speech software</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Known Issues
          </h2>
          <p className="mb-4">
            While we strive to ensure accessibility, our website is under constant development, and some content may not yet have all accessibility features. We are working to address these issues and improve the accessibility of our content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Feedback
          </h2>
          <p className="mb-4">
            We welcome feedback on the accessibility of our website. If you experience any accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email: <a href="mailto:arnoldzwolinski@verizon.net" className="text-zwolinski-burgundy hover:underline">arnoldzwolinski@verizon.net</a></li>
            <li>Phone: <a href="tel:2153409652" className="text-zwolinski-burgundy hover:underline">(215) 340-9652</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zwolinski-navy">
            Continuous Improvement
          </h2>
          <p className="mb-4">
            We are committed to continually improving the accessibility of our website to ensure we provide equal access to all users. As technologies emerge and accessibility standards advance, we will review and update our website accordingly.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Accessibility;