"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / perPage);

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const currentTestimonials = testimonials.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div className="relative">
      <div className={`grid grid-cols-1 ${perPage === 3 ? "md:grid-cols-3" : ""} gap-6`}>
        {currentTestimonials.map((testimonial, index) => {
          const globalIndex = currentPage * perPage + index;
          const isExpanded = expandedReviews.includes(globalIndex);
          const isLong = testimonial.text.length > 150;

          return (
            <div
              key={globalIndex}
              className="card-luxury p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
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
                    ? testimonial.text.slice(0, 150) + "..."
                    : testimonial.text}
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
                {testimonial.name && (
                  <p className="text-white font-medium text-sm mb-1">
                    {testimonial.name}
                  </p>
                )}
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <MapPin className="h-3 w-3" />
                  {testimonial.location}
                  <span className="text-zinc-600">|</span>
                  {testimonial.projectType}
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
    </div>
  );
}
