
import React, { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.termageddon.com/js/termageddon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-zwolinski-navy">Privacy Policy</h1>
      <div 
        id="policy" 
        style={{ width: "640px", height: "480px" }}
        data-policy-key="YTA5UFJuZGlaWEJNVDIxeFVVRTlQUT09"
      >
        Please wait while the policy is loaded. If it does not load, please{" "}
        <a
          rel="nofollow"
          href="https://app.termageddon.com/api/policy/YTA5UFJuZGlaWEJNVDIxeFVVRTlQUT09?"
          target="_blank"
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
