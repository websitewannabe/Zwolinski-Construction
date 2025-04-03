
import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-zwolinski-navy">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          At Zwolinski Quality Construction, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-zwolinski-navy">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (name, email, phone number)</li>
          <li>Project details and requirements</li>
          <li>Communication records</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-zwolinski-navy">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and improve our services</li>
          <li>To communicate about your projects</li>
          <li>To send important updates and notifications</li>
        </ul>
        <p className="mb-4">
          We do not sell or share your personal information with third parties for marketing purposes.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
