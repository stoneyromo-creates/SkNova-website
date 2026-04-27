"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { BUSINESS } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "Custom Website Design",
  "Landing Page",
  "Website Redesign",
  "SEO & Content",
  "Monthly Maintenance",
  "Other",
];

export default function ContactForm() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 text-brand-text placeholder-brand-muted text-sm focus:outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(201,162,74,0.12)] transition-all duration-200";

  return (
    <section id="contact" className="bg-brand-bg border-y border-brand-border/40 py-24 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p
              className={`text-brand-gold text-sm font-black uppercase tracking-widest mb-3 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0ms" }}
            >
              Get in Touch
            </p>
            <h2
              className={`font-syne font-black text-4xl md:text-5xl text-brand-text leading-tight mb-6 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "80ms" }}
            >
              Let&apos;s Get You More{" "}
              <span className="text-gold-gradient">Customers.</span>
            </h2>
            <p
              className={`text-brand-muted leading-relaxed mb-10 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "160ms" }}
            >
              Fill out the form and we&apos;ll get back to you within 24 hours. No pressure, no spam —
              just a real conversation about your project.
            </p>

            <div
              className={`space-y-5 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "240ms" }}
            >
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted group-hover:border-brand-gold/30 group-hover:text-brand-gold transition-all duration-200 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-brand-text font-bold">{BUSINESS.phone}</p>
                </div>
              </a>

              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted group-hover:border-brand-gold/30 group-hover:text-brand-gold transition-all duration-200 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-brand-text font-bold">{BUSINESS.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`bg-brand-card border border-brand-border rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "200ms" }}
          >
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/25 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-syne font-black text-brand-text text-xl mb-2">Message Sent!</h3>
                <p className="text-brand-muted text-sm">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-brand-gold hover:text-brand-gold-light font-semibold text-sm transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-muted text-xs font-bold mb-1.5 uppercase tracking-wider">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-brand-muted text-xs font-bold mb-1.5 uppercase tracking-wider">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-muted text-xs font-bold mb-1.5 uppercase tracking-wider">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-brand-muted text-xs font-bold mb-1.5 uppercase tracking-wider">Service</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-brand-section">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-brand-section">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-brand-muted text-xs font-bold mb-1.5 uppercase tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-brand-red text-sm bg-brand-red/10 border border-brand-red/20 rounded-lg px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed font-black py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 flex items-center justify-center gap-2 text-base"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
