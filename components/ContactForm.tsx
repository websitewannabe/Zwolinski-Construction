"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const params = new URLSearchParams({
        "form-name": "contact",
        ...formData,
      });

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setError(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-zinc-900/50 backdrop-blur-sm p-10 rounded-lg border border-zinc-800 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
          <span className="text-primary text-2xl">&#10003;</span>
        </div>
        <h3 className="heading-md text-white mb-3">Thank You</h3>
        <p className="text-zinc-400 mb-6">
          Your message has been sent successfully. We&apos;ll get back to you
          soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-primary hover:text-primary-light transition-colors text-sm uppercase tracking-wide"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-zinc-800">
      <h2 className="heading-md text-white mb-8">Send Us a Message</h2>

      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-wider text-zinc-400 mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wider text-zinc-400 mb-2"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              placeholder="(267) 471-6120"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider text-zinc-400 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="block text-xs uppercase tracking-wider text-zinc-400 mb-2"
            >
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            >
              <option value="">Select a project type</option>
              <option value="bathroom">Bathroom</option>
              <option value="basement">Basement</option>
              <option value="kitchen">Kitchen</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider text-zinc-400 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-vertical"
            placeholder="Tell us about your project..."
          />
        </div>

        {error && (
          <div className="mb-5 p-4 bg-red-950/30 border border-red-900/50 rounded text-red-400 text-sm">
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
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black/20 border-t-black mr-2" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
