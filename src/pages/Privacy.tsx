import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termageddon.com/js/termageddon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <Helmet>
        <title>Privacy Policy | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Read the privacy policy for Zwolinski Quality Construction. Learn how we collect, use, and protect your personal information on our website."
        />
        <meta
          name="keywords"
          content="privacy policy, data collection, personal information, user privacy, Zwolinski Construction, website privacy, data protection"
        />
        <link rel="canonical" href="https://zwolinskiconstr.com/privacy" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://zwolinskiconstr.com/privacy",
            "description": "Privacy practices and policies of Zwolinski Quality Construction including how user data is collected, used, and protected.",
            "publisher": {
              "@type": "Organization",
              "name": "Zwolinski Quality Construction",
              "url": "https://zwolinskiconstr.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://zwolinskiconstr.com/images/zwol25.png"
              }
            }
          }
        `}</script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-zwolinski-navy">
        Privacy Policy
      </h1>
      <div
        id="policy"
        className="w-full min-h-[480px]"
        data-policy-key="YTA5UFJuZGlaWEJNVDIxeFVVRTlQUT09"
      >
        Please wait while the policy is loaded. If it does not load, please{" "}
        <a
          rel="nofollow"
          href="https://app.termageddon.com/api/policy/YTA5UFJuZGlaWEJNVDIxeFVVRTlQUT09?"
          target="_blank"
          className="text-zwolinski-burgundy hover:underline"
          aria-label="View Policy"
        >
          click here to view the policy
        </a>
        .
      </div>
    </div>
  );
};

export default Privacy;
