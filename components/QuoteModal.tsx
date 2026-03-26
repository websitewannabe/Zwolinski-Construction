"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { X, Send, Phone, CheckCircle } from "lucide-react";

// Context for opening the modal from anywhere
const QuoteModalContext = createContext<{
  openQuoteModal: () => void;
}>({ openQuoteModal: () => {} });

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}
      {isOpen && <QuoteModalContent onClose={closeQuoteModal} />}
    </QuoteModalContext.Provider>
  );
}

function QuoteModalContent({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap: keep focus inside modal
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };

    modal.addEventListener("keydown", handleTab);
    return () => modal.removeEventListener("keydown", handleTab);
  }, [onClose]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const params = new URLSearchParams({
        "form-name": "quote",
        ...formData,
      });

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Request a free quote"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-black/50 animate-slideUp"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close quote form"
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {isSubmitted ? (
          <div className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h3 className="font-serif text-3xl text-white mb-3">Quote Request Received!</h3>
            <p className="text-zinc-400 mb-2 max-w-md mx-auto">
              Thank you for your interest. We&apos;ll review your project details and get back to you within 24 hours with a personalized quote.
            </p>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm mt-6">
              <Phone className="h-4 w-4" />
              Need immediate assistance? Call{" "}
              <a href="tel:+12674716120" className="text-accent hover:text-accent-light transition-colors">
                (267) 471-6120
              </a>
            </div>
            <button
              onClick={onClose}
              className="mt-8 btn-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-8 pb-0">
              <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">
                Free Estimate
              </p>
              <h2 className="font-serif text-3xl text-white mb-2">
                Get Your Custom Quote
              </h2>
              <p className="text-zinc-400 text-sm">
                Tell us about your project and we&apos;ll provide a detailed, no-obligation estimate.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <input type="hidden" name="form-name" value="quote" />
              <input type="hidden" name="bot-field" />

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="quote-name" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Row 2: Email & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="quote-email" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="quote-address" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Project Address
                  </label>
                  <input
                    type="text"
                    id="quote-address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="123 Main St, Perkasie, PA"
                  />
                </div>
              </div>

              {/* Row 3: Project Type & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="quote-projectType" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Project Type *
                  </label>
                  <select
                    id="quote-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  >
                    <option value="">Select type</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="kitchen">Kitchen Remodel</option>
                    <option value="multiple">Multiple Rooms</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-timeline" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Timeline
                  </label>
                  <select
                    id="quote-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  >
                    <option value="">When to start?</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3months">1–3 months</option>
                    <option value="3-6months">3–6 months</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-budget" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                    Budget Range
                  </label>
                  <select
                    id="quote-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label htmlFor="quote-description" className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                  Project Details *
                </label>
                <textarea
                  id="quote-description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-vertical"
                  placeholder="Describe your project: size of the space, what you'd like done, any specific materials or styles you have in mind..."
                />
              </div>

              {error && (
                <div role="alert" className="mb-5 p-4 bg-red-950/30 border border-red-900/50 rounded text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Request My Free Quote
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-zinc-400 text-xs text-center mt-4">
                No obligation. We typically respond within 24 hours.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
