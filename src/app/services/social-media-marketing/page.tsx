"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Share2,
  CheckCircle2,
  Zap,
  TrendingUp,
  Target,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  BarChart3,
  Users,
  Send,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

// Social Media Marketing Process steps
const processSteps = [
  {
    step: "01",
    title: "Audience & Competitor Audit",
    description: "We analyze your target demographics, competitor positioning, and high-converting industry trends to establish a winning baseline."
  },
  {
    step: "02",
    title: "Content Strategy & Calendar",
    description: "Designing high-engagement Reels, carousels, and copies mapped to a monthly content calendar aligned with your growth goals."
  },
  {
    step: "03",
    title: "Campaign Execution & Ads",
    description: "Launching organic distribution across platforms alongside highly targeted Meta (Instagram/Facebook) & LinkedIn ad campaigns."
  },
  {
    step: "04",
    title: "Community Management & ROI Analytics",
    description: "Active comment moderation, lead nurture, and transparent monthly performance reporting tracking reach, CTR, and conversions."
  }
];

// Deliverables list
const deliverables = [
  "Custom Monthly Content Calendar & Copywriting",
  "High-Engagement Video Reels & Carousel Graphic Design",
  "Targeted Meta (Instagram & Facebook) Ad Campaigns",
  "LinkedIn Business Page Growth & Thought Leadership",
  "Active Community Engagement & Direct Response",
  "Monthly ROI, ROAS & Conversion Performance Audits"
];

// FAQ list
const faqs = [
  {
    question: "Which social media platforms do you manage?",
    answer: "We specialize in growth across Instagram, LinkedIn, Facebook, YouTube, and X (Twitter). Our team crafts platform-specific content strategies tailored to where your ideal audience spends their time."
  },
  {
    question: "Do your services include both organic content and paid ads?",
    answer: "Yes! We offer hybrid strategies combining organic brand building (reels, graphics, community engagement) with high-ROI Meta and LinkedIn ad campaigns to accelerate qualified lead generation."
  },
  {
    question: "How quickly can we expect to see results from social media marketing?",
    answer: "Paid ad campaigns can start driving targeted traffic and sales within 48 to 72 hours of launch. Organic audience growth and brand authority typically scale consistently over a 60 to 90-day horizon."
  },
  {
    question: "Will I get to approve the content before it goes live?",
    answer: "Absolutely. We provide a full monthly content calendar in advance with graphics, video reels, and ad copy for your review and approval before anything is published."
  }
];

export default function SocialMediaMarketingServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platformFocus: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your social media marketing proposal request has been submitted.");
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      
      {/* ---------------- 1. SEO-STYLE SPLIT HERO SECTION ---------------- */}
      <section className="bg-slate-950 text-white pt-28 pb-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a859]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[#00a859] text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Performance-Driven Social Media Growth</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Turn Followers Into Paying Customers with <span className="text-[#00a859]">Data-Driven SMM</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                We build high-converting organic content, viral short-form video reels, and laser-targeted ad campaigns designed to elevate your brand authority and maximize revenue.
              </p>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-[#00a859] shrink-0" />
                  <span>High-Converting Video Reels & Carousels</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-[#00a859] shrink-0" />
                  <span>Laser-Targeted Meta & LinkedIn Paid Ads</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-[#00a859] shrink-0" />
                  <span>Dedicated Monthly Content Calendars</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-[#00a859] shrink-0" />
                  <span>Transparent Lead & Sales ROI Reporting</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a 
                  href="tel:+919389958986" 
                  className="px-6 py-3.5 rounded-xl bg-[#00a859] hover:bg-emerald-600 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <Phone size={15} />
                  <span>Call +91-9389958986</span>
                </a>
                <Link 
                  href="/contact" 
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs transition-all flex items-center gap-2"
                >
                  <span>Request Social Media Audit</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Get Free Social Media Audit</h3>
                  <p className="text-xs text-slate-400">Receive a custom growth breakdown and content calendar outline.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alex Morgan" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00a859] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="alex@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00a859] transition-colors"
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
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00a859] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Growth Focus *</label>
                    <select 
                      required
                      value={formData.platformFocus}
                      onChange={(e) => setFormData({ ...formData, platformFocus: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-[#00a859] transition-colors"
                    >
                      <option value="" disabled>Select primary objective</option>
                      <option value="Instagram & Reels Organic Growth">Instagram & Reels Organic Growth</option>
                      <option value="LinkedIn Brand & B2B Lead Gen">LinkedIn Brand & B2B Lead Gen</option>
                      <option value="Meta Paid Ads (Facebook & IG)">Meta Paid Ads (Facebook & Instagram)</option>
                      <option value="Complete Multi-Platform Management">Full Multi-Platform Management</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#00a859] hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 mt-2"
                  >
                    <Send size={14} />
                    <span>Get Free Growth Strategy</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center mt-3">
                    🔒 We protect your data. No spam guaranteed.
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
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80" 
                alt="Social Media Marketing Strategy" 
                width={800} 
                height={600} 
                className="object-cover w-full h-[420px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-bold text-[#00a859] uppercase tracking-wider block mb-1">Authentic Engagement</span>
                  <p className="text-lg font-bold">Build a loyal digital community that converts into repeat clients.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase block mb-2">Why Our Strategy Works</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Social Campaigns Engineered for Authority & Revenue
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Vanity metrics don't pay the bills. We blend psychological copy, high-production visual assets, and algorithmic targeting to build true social presence that scales traffic and generates qualified business inquiries.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#00a859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Viral Short-Form Content</h4>
                  <p className="text-xs text-gray-500 mt-1">Reels and Shorts optimized for maximum algorithmic reach.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <Target className="w-5 h-5 text-[#00a859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">High-ROAS Ad Targeting</h4>
                  <p className="text-xs text-gray-500 mt-1">Direct response paid ads targeting high-intent buyer personas.</p>
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
            <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase block mb-2">How We Scale Brands</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our 4-Step Social Growth Engine</h2>
            <p className="text-gray-400 text-sm mt-3">From strategy creation and creative production to ad execution and analytics.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#00a859] transition-all group">
                <div>
                  <span className="text-4xl font-extrabold text-[#00a859] block mb-4 group-hover:scale-110 transition-transform origin-left">
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
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#00a859]/30 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase block mb-2">Complete Scope</span>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">What's Included in Your SMM Package</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                End-to-end creative direction, copywriting, design assets, direct ad management, and dedicated account support.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#00a859] hover:bg-emerald-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Get a SMM Proposal</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00a859] shrink-0" />
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
          <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase block mb-2">Got Questions?</span>
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
                    className={`w-5 h-5 text-[#00a859] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
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
            Ready to Dominate Your Market on Social Media?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our social media marketing strategist to discuss custom campaigns and content ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919389958986" 
              className="bg-[#00a859] hover:bg-emerald-600 text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
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