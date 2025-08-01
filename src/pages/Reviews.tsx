import React from "react";
import { MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Reviews = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://zwolinskiconstr.com/reviews" />
        <title>Leave a Review | Zwolinski Quality Construction</title>
        <meta
          name="description"
          content="Share your experience with Zwolinski Quality Construction. Leave a review on Google or HomeAdvisor to help other homeowners find quality remodeling services."
        />
        <meta
          name="keywords"
          content="Zwolinski Construction reviews, customer testimonials, Google reviews, HomeAdvisor reviews, remodeling contractor reviews, Bucks County contractor ratings"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Customer Reviews",
            url: "https://zwolinskiconstr.com/reviews",
            description: "Share your experience with Zwolinski Quality Construction by leaving a review on Google or HomeAdvisor.",
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
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-zwolinski-navy text-center">
            Leave Us a <span className="text-zwolinski-burgundy">Review</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
            <a
              href="https://www.google.com/search?q=zwolinski+quality+construction&oq=zwolinski+qu&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYOTIKCAMQABiABBiiBDIKCAQQABiABBiiBDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDI3NTNqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x89c6a05cc01b6e05:0x4f72758643065789,1,,,,"
              target="_blank"
              rel=" noopener noreferrer"
              className="flex-1 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-zwolinski-burgundy flex flex-col items-center justify-center text-center"
            >
              <img
                src="/images/google-logo.png"
                alt="Google Reviews"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-bold text-zwolinski-navy mb-2">
                Review on Google
              </h3>
              <p className="text-gray-600 mb-4">
                Share your experience with us on Google
              </p>
              <MessageSquare className="h-8 w-8 text-zwolinski-burgundy" />
            </a>

            <a
              href="https://www.homeadvisor.com/rated.ZWOLINSKIQuality.8386546.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-zwolinski-burgundy flex flex-col items-center justify-center text-center"
            >
              <img
                src="/images/homeadvisor-logo.png"
                alt="HomeAdvisor Reviews"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-2xl font-bold text-zwolinski-navy mb-2">
                Review on HomeAdvisor
              </h3>
              <p className="text-gray-600 mb-4">
                Share your feedback on HomeAdvisor
              </p>
              <MessageSquare className="h-8 w-8 text-zwolinski-burgundy" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
