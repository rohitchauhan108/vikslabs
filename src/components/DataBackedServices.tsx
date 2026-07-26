"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  Share2, 
  Code, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Sparkles,
  Zap 
} from "lucide-react";

// Mock data tailored to your agency's core offerings
const servicesData = {
  performance: {
    id: "performance",
    badge: "ROAS & Lead Gen",
    title: "Performance Marketing",
    description: "Data-driven Google, Meta & LinkedIn ad campaigns engineered to maximize lead quality and minimize acquisition costs.",
    buttonText: "Explore Performance Ads",
    stat: "4.2x",
    statText: "Average ROAS",
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    subServices: [
      { name: "Google Search & Shopping Ads", desc: "High-intent customer targeting" },
      { name: "Meta Ads (Instagram & Facebook)", desc: "Viral creative & funnel optimization" },
      { name: "Retargeting & CRO", desc: "Turn site visitors into active buyers" }
    ]
  },
  smm: {
    id: "smm",
    badge: "Brand Growth",
    title: "Social Media Marketing",
    description: "Strategic content creation, short-form reels, and community engagement built to turn followers into loyal customers.",
    buttonText: "Discover SMM Services",
    stat: "10M+",
    statText: "Organic Reach",
    icon: <Share2 className="w-6 h-6 text-sky-600" />,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    subServices: [
      { name: "Short-Form Video & Reels", desc: "Viral content strategy" },
      { name: "Community & Brand Management", desc: "Active social engagement" },
      { name: "Influencer Partnerships", desc: "Authentic brand advocacy" }
    ]
  },
  webdev: {
    id: "webdev",
    badge: "High Conversion",
    title: "Website Development",
    description: "Fast, custom-coded Next.js, React, or Webflow sites built to capture leads and deliver seamless user experiences.",
    buttonText: "Build Your Website",
    stat: "99+",
    statText: "Performance Score",
    icon: <Code className="w-6 h-6 text-indigo-600" />,
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    subServices: [
      { name: "Custom Web & Landing Pages", desc: "Conversion-first UX design" },
      { name: "E-Commerce Solutions", desc: "Seamless checkout experiences" },
      { name: "Core Web Vitals & Speed", desc: "Sub-second load times" }
    ]
  },
  seo: {
    id: "seo",
    badge: "Organic Search",
    title: "SEO & Growth Strategy",
    description: "Dominate search engine rankings and get featured in Google AI Overviews with full-funnel organic strategies.",
    buttonText: "Explore SEO Strategy",
    stat: "2.5M+",
    statText: "Organic Leads Driven",
    icon: <Search className="w-6 h-6 text-amber-600" />,
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    subServices: [
      { name: "Technical & On-Page SEO", desc: "Clean architecture & schema" },
      { name: "Google AI Overview Optimization", desc: "Future-proof rank strategy" },
      { name: "Content & Keyword Strategy", desc: "Target high-intent searchers" }
    ]
  }
};

type TabKey = keyof typeof servicesData;

export default function DataBackedServices() {
  const [activeTab, setActiveTab] = useState<TabKey>("performance");
  const activeData = servicesData[activeTab];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Pattern Images & Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.25]">
        {/* Subtle SVG Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0f766e 1px, transparent 0)`,
            backgroundSize: "28px 28px"
          }}
        />
      </div>

      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/60 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Integrated Growth Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Data-Backed Services Built for Measurable Revenue
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Scalable digital growth requires a connected ecosystem. We combine <b>Performance Marketing</b>, <b>Social Media Strategy</b>, and <b>High-Converting Web Development</b> into an integrated growth engine that powers predictable profit.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: "performance", label: "Performance Marketing" },
            { id: "smm", label: "Social Media Marketing" },
            { id: "webdev", label: "Website Development" },
            { id: "seo", label: "SEO & Growth" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabKey)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white shadow-lg shadow-gray-900/10 scale-105"
                  : "bg-white text-gray-600 border border-gray-200/80 hover:border-emerald-500 hover:text-emerald-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Display Area */}
        <div className={`relative bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-br ${activeData.gradient} transition-all duration-500`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-white/80 border border-emerald-100 px-3 py-1 rounded-full mb-3 shadow-xs">
                {activeData.badge}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                {activeData.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {activeData.description}
              </p>

              <button className="group bg-gray-900 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-md flex items-center gap-2">
                <span>{activeData.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Middle Column: Modern Metrics & Visual Display */}
            <div className="lg:col-span-3 flex justify-center items-center">
              <div className="relative w-full max-w-[240px] bg-white/90 backdrop-blur-md rounded-2xl border border-gray-100 shadow-lg p-5 text-center">
                
                {/* Floating Metric Badge */}
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  {activeData.icon}
                </div>

                <div className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                  {activeData.stat}
                </div>
                
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {activeData.statText}
                </div>

                {/* Decorative Chart Bars */}
                <div className="flex items-end justify-center gap-1.5 h-12 pt-2 border-t border-gray-100">
                  <div className="w-3 bg-emerald-200 rounded-t h-4" />
                  <div className="w-3 bg-emerald-300 rounded-t h-7" />
                  <div className="w-3 bg-emerald-400 rounded-t h-6" />
                  <div className="w-3 bg-emerald-500 rounded-t h-10 animate-pulse" />
                  <div className="w-3 bg-emerald-600 rounded-t h-8" />
                </div>
              </div>
            </div>

            {/* Right Column: Sub-Services Cards */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {activeData.subServices.map((sub, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200 flex items-start gap-3 group cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {sub.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500">
                      {sub.desc}
                    </p>x
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}