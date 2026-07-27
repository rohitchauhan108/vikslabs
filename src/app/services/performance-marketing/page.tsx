"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  CheckCircle2,
  Zap,
  Target,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  BarChart3,
  DollarSign,
  Send,
  PieChart,
  MousePointerClick,
  Crosshair
} from "lucide-react";

// Performance Marketing Process steps
const processSteps = [
  {
    step: "01",
    title: "Tracking & Conversion Setup",
    description: "Configuring Meta Pixel, Google Tag Manager, GA4, and Server-Side CAPI to ensure 100% accurate conversion attribution."
  },
  {
    step: "02",
    title: "Audience & Keyword Intelligence",
    description: "In-depth competitor analysis, intent-based keyword research, and custom lookalike audience segment building."
  },
  {
    step: "03",
    title: "Creative Testing & Scaling",
    description: "Rapidly deploying multi-variation ad creatives, hooks, and copy to isolate top-performing assets and double down on budget."
  },
  {
    step: "04",
    title: "Bid Optimization & ROAS Scaling",
    description: "Daily bid management, negative keyword pruning, and funnel tweaks to lower Customer Acquisition Cost (CAC) and grow profit."
  }
];

// Deliverables list
const deliverables = [
  "Google Search, Shopping & Display Ad Management",
  "Meta Ads (Instagram & Facebook Lead/Sales Funnels)",
  "Full Conversion Rate Optimization (CRO) Audits",
  "Server-Side Tracking & Attribution (GTM / GA4)",
  "A/B Landing Page & Ad Creative Testing",
  "Live Transparent ROAS & CPA Performance Dashboards"
];

// FAQ list
const faqs = [
  {
    question: "What is Performance Marketing and how does it differ from traditional SMM?",
    answer: "Performance marketing is strictly results-based advertising where every dollar spent is tracked directly against key performance indicators like leads, sales, Customer Acquisition Cost (CAC), and Return on Ad Spend (ROAS)."
  },
  {
    question: "Which ad channels do you specialize in?",
    answer: "We run high-converting paid campaigns across Google Ads (Search, Shopping, Performance Max), Meta Ads (Instagram & Facebook), LinkedIn Ads for B2B, and YouTube Video Ads."
  },
  {
    question: "How much ad budget do I need to start?",
    answer: "While budget depends on your industry competitiveness and goals, we generally recommend starting with a minimum testing budget of $1,000–$2,000/month to gather statistically significant data quickly."
  },
  {
    question: "How do you ensure our ad spend isn't wasted?",
    answer: "We set up ironclad conversion tracking, use negative keyword lists, run aggressive A/B audience testing, and monitor campaign metrics daily to reallocate budget exclusively to profitable channels."
  }
];

export default function PerformanceMarketingServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    monthlyBudget: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your performance marketing strategy session request has been received.");
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      
      {/* ---------------- 1. SEO-STYLE HERO SECTION (UNIQUE AMBER/VIOLET THEME) ---------------- */}
      <section className="bg-slate-950 text-white pt-28 pb-20 relative overflow-hidden">
        {/* Glow Effects - Amber / Violet Theme */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>High-ROAS Paid Ads & Paid Media</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Maximize ROI with <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-violet-400 bg-clip-text text-transparent">Precision Performance</span> Marketing
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                We design, launch, and scale hyper-targeted paid ad campaigns on Google, Meta, and LinkedIn that lower your CAC and turn ad spend into repeatable revenue.
              </p>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Google Search, Shopping & PMax Ads</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Meta Ads with High-Converting Funnels</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Server-Side Tracking & GA4 Attribution</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Daily Campaign & Bid Optimization</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a 
                  href="tel:+919389958986" 
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-amber-950/40"
                >
                  <Phone size={15} />
                  <span>Call +91-9389958986</span>
                </a>
                <Link 
                  href="/contact" 
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs transition-all flex items-center gap-2"
                >
                  <span>Request Free Paid Ads Audit</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Get Free Paid Ads Audit</h3>
                  <p className="text-xs text-slate-400">Discover missed keyword opportunities and campaign fixes.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. David Miller" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="david@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Estimated Monthly Ad Spend *</label>
                    <select 
                      required
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="" disabled>Select ad budget range</option>
                      <option value="Under $1,000">Under $1,000 / month</option>
                      <option value="$1,000 - $5,000">$1,000 – $5,000 / month</option>
                      <option value="$5,000 - $15,000">$5,000 – $15,000 / month</option>
                      <option value="$15,000+">$15,000+ / month</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/30 mt-2"
                  >
                    <Send size={14} />
                    <span>Get Free PPC Audit</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center mt-3">
                    🔒 Zero commitment. 100% confidential analysis.
                  </p>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 2. OVERVIEW & VALUE PROPOSITION ---------------- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                alt="Performance Marketing Analytics" 
                width={800} 
                height={600} 
                className="object-cover w-full h-[420px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Data-Driven Growth</span>
                  <p className="text-lg font-bold">Scale campaign revenue without wasting ad spend.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase block mb-2">Scientific Paid Media</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Turn Clicks into Predictable Customer Acquisition
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We treat paid media as a science. By constantly tweaking landing page conversion rates, testing dynamic ad creative, and optimizing real-time bids, we ensure every advertising dollar generates scalable top-line revenue.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <MousePointerClick className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Intent-Based PPC</h4>
                  <p className="text-xs text-gray-500 mt-1">Capture high-intent buyers searching directly for your solutions on Google.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <Crosshair className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Retargeting Automation</h4>
                  <p className="text-xs text-gray-500 mt-1">Re-engage warm visitors across Meta and Display networks to close sales.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 3. PROCESS STEP-BY-STEP ---------------- */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-2">Our Scaling Engine</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">4-Step Performance Lifecycle</h2>
            <p className="text-gray-400 text-sm mt-3">From technical pixel setup to high-volume campaign scaling.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-400 transition-all group">
                <div>
                  <span className="text-4xl font-extrabold text-amber-400 block mb-4 group-hover:scale-110 transition-transform origin-left">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 4. WHAT YOU GET (DELIVERABLES) ---------------- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/40 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block mb-2">Scope & Management</span>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Complete Performance Marketing Suite</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                End-to-end management, ad creative design, conversion tracking architecture, and transparent ROI reporting.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 5. FREQUENTLY ASKED QUESTIONS ---------------- */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-600 tracking-wider uppercase block mb-2">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-amber-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- 6. BOTTOM CTA BAR ---------------- */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Ready to Scale Your Returns on Ad Spend?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our paid media strategist to audit your current campaigns and map out high-ROAS growth targets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919389958986" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone size={14} />
              <span>Call +91-9389958986</span>
            </a>

            <Link 
              href="/contact" 
              className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center border border-slate-700"
            >
              <Mail size={14} />
              <span>Book Growth Consultation</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}