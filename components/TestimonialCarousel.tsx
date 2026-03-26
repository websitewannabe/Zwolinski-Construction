"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import {
  testimonials as staticTestimonials,
  GOOGLE_REVIEW_URL,
  type Testimonial,
} from "@/data/testimonials";

interface GoogleReview {
  name: string | null;
  text: string;
  rating: number;
  source: "google";
  timeDescription: string;
}

type Review = Testimonial | GoogleReview;

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  const [reviews, setReviews] = useState<Review[]>(staticTestimonials);
  const [googleReviewCount, setGoogleReviewCount] = useState(0);

  // Fetch live Google reviews, merge with static fallback
  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews/sync");
        if (!res.ok) return;
        const data = await res.json();

        if (data.reviews?.length > 0) {
          // Deduplicate: skip Google reviews whose name already exists in static
          const staticNames = new Set(
            staticTestimonials.map((t) => t.name?.toLowerCase())
          );
          const newReviews = data.reviews.filter(
            (r: GoogleReview) =>
              !staticNames.has(r.name?.toLowerCase() ?? "")
          );
          // Merge: static first, then fresh Google reviews
          setReviews([...staticTestimonials, ...newReviews]);
        }

        if (data.reviewCount > 0) {
          setGoogleReviewCount(data.reviewCount);
        }
      } catch {
        // Silently fall back to static reviews
      }
    }
    fetchReviews();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / perPage);

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const currentTestimonials = reviews.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div className="relative">
      <div className={`grid grid-cols-1 ${perPage === 3 ? "md:grid-cols-3" : ""} gap-6`}>
        {currentTestimonials.map((review, index) => {
          const globalIndex = currentPage * perPage + index;
          const isExpanded = expandedReviews.includes(globalIndex);
          const isLong = review.text.length > 150;
          const isGoogleReview = "source" in review && review.source === "google";

          return (
            <div
              key={globalIndex}
              className="card-luxury p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <div className="flex-1 mb-4">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  &ldquo;
                  {isLong && !isExpanded
                    ? review.text.slice(0, 150) + "..."
                    : review.text}
                  &rdquo;
                </p>
                {isLong && (
                  <button
                    onClick={() => toggleReview(globalIndex)}
                    className="text-primary text-xs mt-2 hover:text-primary-light transition-colors uppercase tracking-wide cursor-pointer"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-zinc-800/50">
                {review.name && (
                  <p className="text-white font-medium text-sm mb-1">
                    {review.name}
                  </p>
                )}
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  {isGoogleReview ? (
                    <>
                      <GoogleIcon className="h-3.5 w-3.5" />
                      <span>Google Review</span>
                      {"timeDescription" in review && review.timeDescription && (
                        <>
                          <span className="text-zinc-600">|</span>
                          <span>{review.timeDescription}</span>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <MapPin className="h-3 w-3" />
                      {"location" in review && review.location}
                      <span className="text-zinc-600">|</span>
                      {"projectType" in review && review.projectType}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={() =>
            setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
          }
          className="w-10 h-10 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentPage
                  ? "bg-primary w-6"
                  : "bg-zinc-700 w-1.5 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => (prev + 1) % totalPages)
          }
          className="w-10 h-10 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary/30 transition-all cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Google Reviews Link */}
      {googleReviewCount > 0 && (
        <div className="mt-6 text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-primary"
          >
            <GoogleIcon className="h-4 w-4" />
            See all {googleReviewCount}+ reviews on Google
          </a>
        </div>
      )}
    </div>
  );
}
