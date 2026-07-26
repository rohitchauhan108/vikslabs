"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FaPhone, 
  FaEnvelope, 
  FaLocationDot, 
  FaClock, 
  FaPaperPlane 
} from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "seo",
    budget: "$1,000 - $5,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006b5b] bg-teal-100/60 px-4 py-1.5 rounded-full inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#004e6e] tracking-tight leading-tight mb-4">
            Let’s Scale Your Brand to New Heights
          </h1>
          <p className="text-lg text-slate-600">
            Have a project in mind, need an AI & Performance Marketing audit, or just want to say hello? Fill out the form and our experts will get back to you within 24 hours.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dark Brand Info Banner */}
            <div className="bg-gradient-to-br from-[#004e6e] to-[#006b5b] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Ready for Domination?
                </h3>
                <p className="text-teal-100 text-sm leading-relaxed mb-6">
                  We create tailored strategies that maximize organic visibility, acquire hyper-targeted traffic, and drive sustainable business results.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a3e635] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></span>
                  Accepting New Projects for 2026
                </div>
              </div>

              {/* Accent Decor */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#a3e635] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            {/* Direct Contact Methods */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                Contact Information
              </h4>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#006b5b] flex items-center justify-center shrink-0">
                  <FaPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Call Us Direct
                  </p>
                  <a
                    href="tel:+18005550199"
                    className="text-base font-bold text-slate-800 hover:text-[#004e6e] transition-colors"
                  >
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#006b5b] flex items-center justify-center shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Send an Email
                  </p>
                  <a
                    href="mailto:hello@thevikslabs.com"
                    className="text-base font-bold text-slate-800 hover:text-[#004e6e] transition-colors"
                  >
                    hello@thevikslabs.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#006b5b] flex items-center justify-center shrink-0">
                  <FaLocationDot size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Main Headquarters
                  </p>
                  <p className="text-base font-semibold text-slate-700 leading-snug">
                    100 Innovation Way, Suite 400<br />
                    Tech District, CA 94103
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#006b5b] flex items-center justify-center shrink-0">
                  <FaClock size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Working Hours
                  </p>
                  <p className="text-base font-semibold text-slate-700">
                    Mon - Fri: 9:00 AM – 6:00 PM EST
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#a3e635]/20 text-[#006b5b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPaperPlane size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  We've received your message. One of our digital strategists will analyze your request and reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      service: "seo",
                      budget: "$1,000 - $5,000",
                      message: "",
                    });
                  }}
                  className="mt-4 bg-[#004e6e] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#003850] transition-colors inline-block"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Request a Free Strategy Session
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Fill out the details below and we’ll prepare a custom report card for your website.
                </p>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase text-slate-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#004e6e] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-600 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#004e6e] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase text-slate-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#004e6e] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase text-slate-600 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#004e6e] focus:bg-white transition-colors text-slate-700"
                    >
                      <option value="seo">Search Engine Optimization (SEO)</option>
                      <option value="smm">Social Media Marketing</option>
                      <option value="web-dev">Web Development</option>
                      <option value="performance">Performance Marketing</option>
                      <option value="full-stack">Full Scale Domination</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-xs font-bold uppercase text-slate-600 mb-2">
                    Monthly Marketing Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#004e6e] focus:bg-white transition-colors text-slate-700"
                  >
                    <option value="< $1,000">Under $1,000 / month</option>
                    <option value="$1,000 - $5,000">$1,000 – $5,000 / month</option>
                    <option value="$5,000 - $15,000">$5,000 – $15,000 / month</option>
                    <option value="$15,000+">$15,000+ / month</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-600 mb-2">
                    Project Details & Goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your company, website goals, or current marketing roadblocks..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#004e6e] focus:bg-white transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-4 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <FaPaperPlane size={14} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  We respect your privacy. Zero spam guarantee. Read our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-slate-600">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}