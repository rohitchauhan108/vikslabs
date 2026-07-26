"use client";

import React from "react";
import { 
  TrendingUp, 
  Share2, 
  Code, 
  Target, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  Zap,
  Layout,
  Layers
} from "lucide-react";

// Updated Capability Cards for Performance, SMM & Web Dev
const capabilities = [
  {
    id: 1,
    icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    title: "Performance Ads (PPC & Meta)",
    description: "Data-driven Google, Meta & LinkedIn campaigns focused on lowering acquisition costs and maximizing ROAS."
  },
  {
    id: 2,
    icon: <Share2 className="w-5 h-5 text-sky-600" />,
    title: "Social Media Strategy",
    description: "Engaging short-form reels, creative content, and active community management to build loyal audiences."
  },
  {
    id: 3,
    icon: <Code className="w-5 h-5 text-indigo-600" />,
    title: "Conversion Web Development",
    description: "Fast, custom-coded Next.js, React, or Webflow sites optimized for mobile speed and maximum lead conversion."
  },
  {
    id: 4,
    icon: <Layers className="w-5 h-5 text-purple-600" />,
    title: "Full-Funnel Growth Strategy",
    description: "End-to-end integration connecting paid traffic directly into your CRM, web funnel, and retargeting ads."
  }
];

// Clean Growth Pillars
const growthPillars = [
  {
    icon: <Target className="w-4 h-4 text-emerald-600" />,
    label: "Target",
    sub: "Paid Ads & Social",
  },
  {
    icon: <Layout className="w-4 h-4 text-sky-600" />,
    label: "Convert",
    sub: "Custom Web Builds",
  },
  {
    icon: <Zap className="w-4 h-4 text-amber-600" />,
    label: "Scale",
    sub: "Predictable ROAS",
  }
];

export default function TrafficIncrease() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4]/50 to-[#f0f9ff]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-sky-200/20 blur-3xl" />
        
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #0f766e 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Stat, Value Prop & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-800">
                Proven Growth Engine
              </span>
            </div>

            {/* Stat & Headline */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-6xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-700 to-sky-700 bg-clip-text text-transparent">
                  3.8x
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug tracking-tight">
                  Average Return on Ad Spend (ROAS)
                </h2>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                We combine performance marketing, engaging social media, and high-converting website design into an integrated growth engine that scales your business.
              </p>
            </div>

            {/* Growth Pillars Row */}
            <div className="w-full grid grid-cols-3 gap-2 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xs mb-8">
              {growthPillars.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-gray-50/80 transition-colors">
                  <div className="mb-1 p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                    {p.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-900">{p.label}</span>
                  <span className="text-[11px] text-gray-500 font-medium truncate w-full">{p.sub}</span>
                </div>
              ))}
            </div>

            {/* CTA & Trust */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <a 
                href="#contact" 
                className="group relative bg-gray-900 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Book a Growth Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-2 justify-center sm:justify-start text-xs text-gray-500">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Trusted by <b>150+</b> growing brands</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 2x2 Feature Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-emerald-50 flex items-center justify-center mb-4 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}