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
        <link rel="canonical" href="https://zwolinskiconstr.com/privacy" />
        <title>Privacy Policy | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Read Zwolinski Quality Construction’s Privacy Policy to learn how we collect, use, and protect your personal information online."
        />
        <meta
          name="keywords"
          content="privacy policy, data privacy, personal information, data protection, online privacy, Zwolinski Construction, Termageddon"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://zwolinskiconstr.com/privacy",
            description:
              "This privacy policy explains how Zwolinski Quality Construction collects, uses, and protects your personal information.",
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
