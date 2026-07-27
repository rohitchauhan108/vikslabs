"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Zap,
  ShieldCheck,
  Target,
  ArrowRight,
  Phone,
  Mail,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Layers,
  Award,
  Clock,
  FileSpreadsheet
} from "lucide-react";

// Service specific process steps
const processSteps = [
  {
    step: "01",
    title: "Technical & On-Page SEO Audit",
    description: "We perform a 120-point diagnostic check crawling your site for indexability, site speed, crawl errors, and schema markup flaws."
  },
  {
    step: "02",
    title: "Keyword & Intent Mapping",
    description: "Discover high-intent commercial keywords that your highest-paying prospects search for right before making a buying decision."
  },
  {
    step: "03",
    title: "On-Page Optimization & Content",
    description: "Optimizing headings, meta tags, interlinking, and publishing content engineered to outperform top-ranking competitors."
  },
  {
    step: "04",
    title: "Authority Link Building (PR SEO)",
    description: "Earning high-DR white-hat backlinks from real niche-relevant sites to boost domain authority and organic rankings."
  }
];

// Deliverables list
const deliverables = [
  "Comprehensive Technical SEO Health Report",
  "Competitor Keyword Gap Analysis",
  "Custom Content Strategy & Briefs",
  "Schema Markup Implementation",
  "Monthly Backlink Acquisition Reports",
  "Real-Time Analytics & Revenue Attribution Dashboard"
];

// FAQ list
const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "Most clients begin seeing measurable keyword movement and organic impressions within 60 to 90 days. Significant revenue-generating organic traffic and top 3 rankings typically occur within 4 to 6 months of consistent execution."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No reputable agency guarantees #1 rankings because search engine algorithms continuously evolve. However, our data-backed methodology consistently secures top-tier placement for over 85% of target client keywords within 6 months."
  },
  {
    question: "How is your SEO process different from other agencies?",
    answer: "We don't focus solely on vanity traffic metrics. We align SEO with revenue—targeting high-intent keywords that convert visitors into paying clients, combined with sub-second Next.js page speed optimization."
  },
  {
    question: "What access or permissions do you need to get started?",
    answer: "We need viewer/editor access to Google Search Console, Google Analytics 4, and temporary access to your Content Management System (CMS) or codebase for technical implementations."
  }
];

export default function ServiceDetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      
      {/* ---------------- 1. SERVICE HERO SECTION ---------------- */}
      <section className="bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] pt-28 pb-20 relative overflow-hidden text-white">
        {/* Dot Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#a3e635] text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4 text-[#a3e635]" />
                <span>Enterprise SEO Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Dominate Search Results &amp; Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-[#a3e635]">Predictable Organic Revenue</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
                Turn search engines into your most profitable acquisition channel. We combine deep technical SEO, conversion-focused content, and high-authority link building to rank your brand above competitors.
              </p>

              {/* Stat Highlights */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#a3e635]">340%+</span>
                  <span className="text-xs text-emerald-100 uppercase font-medium">Avg Organic Growth</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#a3e635]">95+</span>
                  <span className="text-xs text-emerald-100 uppercase font-medium">PageSpeed Score</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#a3e635]">1.2M+</span>
                  <span className="text-xs text-emerald-100 uppercase font-medium">Keywords Ranked</span>
                </div>
              </div>
            </div>

            {/* Right Audit Hero Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-gray-100 relative">
                <div className="absolute -top-3 right-6 bg-[#f97316] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider shadow-md">
                  Free Strategy
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Claim Your Free SEO Audit</h3>
                <p className="text-xs text-gray-500 mb-6">Get a comprehensive analysis of your site's technical errors, ranking gaps, and traffic potential.</p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Website URL</label>
                    <input 
                      type="url" 
                      placeholder="https://yourwebsite.com" 
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#006b5b]" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com" 
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#006b5b]" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#006b5b]" 
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                  >
                    <span>Get Free Audit Report</span>
                    <ArrowRight size={16} />
                  </button>
                </form>

                <p className="text-[11px] text-gray-400 text-center mt-4">
                  🔒 Confidential &amp; Zero obligation. Delivered within 24 hours.
                </p>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                alt="SEO Strategy & Analytics" 
                width={800} 
                height={600} 
                className="object-cover w-full h-[420px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-bold text-[#a3e635] uppercase tracking-wider block mb-1">Data-Driven Methodology</span>
                  <p className="text-lg font-bold">We treat search engine optimization as an engineered revenue science, not guesswork.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#006b5b] tracking-wider uppercase block mb-2">Why Our SEO Works</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Stop Paying for Traffic That Leaves Without Buying
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Traditional SEO agencies waste months focusing on vanity search terms with high search volume but zero commercial intent. We map customer search journeys to target ready-to-buy prospects, ensuring every visitor brought to your platform impacts your bottom line.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <Target className="w-5 h-5 text-[#006b5b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Commercial Intent First</h4>
                  <p className="text-xs text-gray-500 mt-1">Focusing on high-converting transactional buyer keywords.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#006b5b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Core Web Vitals Optimized</h4>
                  <p className="text-xs text-gray-500 mt-1">Sub-second loading speeds for higher Google rankings.</p>
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
            <span className="text-xs font-bold text-[#a3e635] tracking-wider uppercase block mb-2">Systematic Execution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our 4-Step SEO Growth Framework</h2>
            <p className="text-gray-400 text-sm mt-3">A repeatable, transparent process designed for maximum SERP dominance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#a3e635] transition-all group">
                <div>
                  <span className="text-4xl font-extrabold text-[#a3e635] block mb-4 group-hover:scale-110 transition-transform origin-left">
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
        <div className="bg-gradient-to-br from-[#004e6e] to-[#006b5b] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-[#a3e635] tracking-wider uppercase block mb-2">Tangible Execution</span>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">What's Included in Your SEO Campaign</h2>
              <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                No black-box secrecy. Complete transparency with clear monthly deliverables and real-time rank tracking dashboards.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Request Detailed Proposal</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#a3e635] shrink-0" />
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
          <span className="text-xs font-bold text-[#006b5b] tracking-wider uppercase block mb-2">Got Questions?</span>
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
                    className={`w-5 h-5 text-[#006b5b] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
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
            Ready to Outrank Your Competition?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our Lead SEO Specialists and get a customized growth roadmap for your business today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919389958986" 
              className="bg-[#006b5b] hover:bg-[#004e6e] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone size={14} className="text-[#a3e635]" />
              <span>Call +91-9389958986</span>
            </a>

            <Link 
              href="/contact" 
              className="bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-orange-500/10"
            >
              <Mail size={14} />
              <span>Book Strategy Call</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}