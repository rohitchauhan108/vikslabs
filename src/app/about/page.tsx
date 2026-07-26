"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  Award,
  Layers,
  Compass,
  Zap,
  Sliders,
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  // Interactive Pillar Tab State
  const [activeTab, setActiveTab] = useState<"performance" | "creative" | "engineering">("performance");

  // ROI Calculator State
  const [budget, setBudget] = useState(5000);
  const estimatedLeads = Math.floor((budget / 45) * 1.8);
  const estimatedRevenue = Math.floor(budget * 3.8);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* ---------------- 1. CONCEPTUAL HERO (Same Brand Colors, Fresh Layout) ---------------- */}
      <section className="bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] pt-28 pb-32 relative overflow-hidden text-white">
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        
        {/* Soft Glow Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#a3e635] text-xs font-bold uppercase tracking-wider mb-6">
            <Compass className="w-4 h-4 text-[#a3e635]" />
            <span>Behind The Growth Engine</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            We Don’t Just Run Ads. <br />
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-[#a3e635]">Revenue Engines.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Most agencies sell clicks and impressions. We partner with ambitious brands to optimize the entire growth ecosystem—from high-converting Next.js web applications to performance paid media.
          </p>

          <div className="flex justify-center gap-4">
            <a 
              href="#pillars" 
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- 2. OVERLAPPING METRICS STRIP ---------------- */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
          <div className="px-2">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#006b5b]">150+</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-500 mt-1 block">Brands Scaled</span>
          </div>
          <div className="px-2">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#006b5b]">3.8x</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-500 mt-1 block">Average ROAS</span>
          </div>
          <div className="px-2">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#006b5b]">85%</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-500 mt-1 block">Client Revenue Lift</span>
          </div>
          <div className="px-2">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#006b5b]">99/100</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-500 mt-1 block">PageSpeed Score</span>
          </div>
        </div>
      </div>

      {/* ---------------- 3. INTERACTIVE METHODOLOGY PILLARS ---------------- */}
      <section id="pillars" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#006b5b]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#006b5b]">
              Our Core DNA
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">How We Approach Growth</h2>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab("performance")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all border ${
              activeTab === "performance"
                ? "bg-[#006b5b] text-white border-[#006b5b] shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
          >
            01. ROI-Driven Marketing
          </button>
          <button
            onClick={() => setActiveTab("creative")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all border ${
              activeTab === "creative"
                ? "bg-[#006b5b] text-white border-[#006b5b] shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
          >
            02. High-Hook Content
          </button>
          <button
            onClick={() => setActiveTab("engineering")}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all border ${
              activeTab === "engineering"
                ? "bg-[#006b5b] text-white border-[#006b5b] shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
          >
            03. High-Speed Next.js Web
          </button>
        </div>

        {/* Tab Display Card */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
          {activeTab === "performance" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-[#006b5b] uppercase tracking-wider block mb-2">PRECISION PAID MEDIA</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Targeting High-Intent Buyers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We don't waste budget on low-quality traffic. We continuously test audiences, placements, and bid strategies across Meta, Google, and TikTok to ensure every ad dollar drives profit.
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#006b5b]" /> Real-time attribution tracking</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#006b5b]" /> Automated ROAS optimization rules</div>
                </div>
              </div>
              <div className="bg-[#f0fcfc] p-6 rounded-2xl border border-teal-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-slate-700">Campaign ROAS Goal</span>
                  <span className="text-xs font-bold bg-[#006b5b] text-white px-2.5 py-1 rounded-full">3.8x Achieved</span>
                </div>
                <div className="w-full bg-teal-200 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#006b5b] h-full w-[85%]" />
                </div>
                <p className="text-[11px] text-gray-500 mt-4">Focused entirely on Cost-Per-Acquisition (CPA) and Net Profit.</p>
              </div>
            </div>
          )}

          {activeTab === "creative" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-[#006b5b] uppercase tracking-wider block mb-2">CREATIVE ROI</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Content Built for Engagement</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Creative is the new targeting. We write scripts, produce short-form viral reels, and design visuals specifically designed to hook attention in the first 3 seconds.
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#006b5b]" /> High-hook social video ads</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#006b5b]" /> Direct-response visual ad creatives</div>
                </div>
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden border border-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          )}

          {activeTab === "engineering" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold text-[#006b5b] uppercase tracking-wider block mb-2">WEB ARCHITECTURE</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Fast Web Apps That Convert</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  A slow website destroys ad performance. We build custom Next.js landing pages and websites with sub-second page loads to turn visitors into paying customers.
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#006b5b]" /> Next.js 15 & React framework</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#006b5b]" /> Sub-second load times worldwide</div>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 font-mono text-xs">
                <p className="text-emerald-400">// Website Performance Score</p>
                <p className="text-slate-300 mt-2">Lighthouse Speed: <span className="text-[#a3e635]">99/100</span></p>
                <p className="text-slate-300">Conversion Rate: <span className="text-[#a3e635]">+42% Lift</span></p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- 4. INTERACTIVE ROI CALCULATOR WIDGET ---------------- */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#f0fcfc] to-[#e6f7fa] border border-teal-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#006b5b] uppercase tracking-widest block mb-2">GROWTH SIMULATOR</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Estimate Your Potential ROI
            </h2>
            <p className="text-gray-600 text-sm">
              Use the slider below to see estimated results based on our historical client benchmarks.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Slider */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                  <Sliders size={16} className="text-[#006b5b]" />
                  Monthly Marketing Budget:
                </label>
                <span className="text-2xl font-extrabold text-[#006b5b]">${budget.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="1000" 
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-[#006b5b]"
              />
              <div className="flex justify-between text-[11px] font-semibold text-gray-500">
                <span>$1,000/mo</span>
                <span>$25,000/mo</span>
                <span>$50,000/mo</span>
              </div>
            </div>

            {/* Results */}
            <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-teal-100 shadow-sm text-center space-y-4">
              <div>
                <span className="text-xs font-semibold text-gray-500 block mb-1">Estimated Lead Volume</span>
                <span className="text-2xl font-extrabold text-slate-900">~{estimatedLeads.toLocaleString()} <span className="text-xs font-normal text-gray-500">leads/mo</span></span>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <span className="text-xs font-bold text-[#006b5b] block mb-1">Projected Revenue Impact</span>
                <span className="text-3xl font-extrabold text-[#006b5b]">${estimatedRevenue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 5. CTA SECTION (Brand Gradient Theme) ---------------- */}
      <section className="py-20 bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-gray-100 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            Book a complimentary 20-minute strategy session. We will evaluate your current ad spend, web speed, and funnels.
          </p>
          <a 
            href="#contact" 
            className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl inline-flex items-center gap-2 group"
          >
            <span>Get Your Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
}