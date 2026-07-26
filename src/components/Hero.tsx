"use client";

import React from "react";
import { ArrowRight, TrendingUp, Sparkles, Zap, Users, Code, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] pt-24 pb-32 relative overflow-hidden">
      {/* Decorative dot grid background pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-white pr-0 lg:pr-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#a3e635] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#a3e635]" />
            <span>Full-Funnel Digital Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-extrabold mb-6 tracking-tight">
            Scale Your Revenue with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-[#a3e635]">Ads, Social & High-Speed Web</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed font-light">
            We engineer high-ROI performance marketing campaigns, create viral social media content, and build high-converting custom websites designed to double your leads.
          </p>

          {/* Quick Service Checklist */}
          <div className="grid grid-cols-2 gap-3 mb-10 text-xs sm:text-sm text-emerald-100 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#a3e635] shrink-0" />
              <span>Paid Ads (Google, Meta, LinkedIn)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#a3e635] shrink-0" />
              <span>Social Media & Short-Form Video</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#a3e635] shrink-0" />
              <span>High-Converting Custom Websites</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#a3e635] shrink-0" />
              <span>Full-Funnel SEO & Analytics</span>
            </div>
          </div>

          {/* Call-To-Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group"
            >
              <span>Get Free Growth Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="border border-white/40 hover:bg-white hover:text-[#004e6e] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Content - Modern Live Performance Dashboard Card */}
        <div className="relative">
          {/* Glassmorphism Container */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-2xl relative">
            
            {/* Subtle glowing orb behind container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/30 blur-[80px] rounded-full pointer-events-none" />

            {/* Left Column: 3 Core Metric Cards */}
            <div className="flex-1 space-y-3.5 relative z-10">
              
              {/* Card 1: Performance Ads Metric */}
              <div className="bg-white/95 rounded-xl p-3.5 shadow-md transform transition-all hover:-translate-y-0.5 border border-white">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                      <TrendingUp size={14} />
                    </div>
                    <span className="font-bold text-xs text-gray-800">Performance Marketing</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">+4.2x ROAS</span>
                </div>
                <p className="text-[11px] text-gray-500">Google & Meta Ads lead generation</p>
              </div>

              {/* Card 2: SMM Metric */}
              <div className="bg-white/95 rounded-xl p-3.5 shadow-md transform transition-all hover:-translate-y-0.5 border border-white">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-sky-100 rounded-lg flex items-center justify-center text-sky-700">
                      <Users size={14} />
                    </div>
                    <span className="font-bold text-xs text-gray-800">Social Media Growth</span>
                  </div>
                  <span className="text-[10px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full">+128% Reach</span>
                </div>
                <p className="text-[11px] text-gray-500">Short-form Reels & Brand Engagement</p>
              </div>

              {/* Card 3: Web Dev Metric */}
              <div className="bg-white/95 rounded-xl p-3.5 shadow-md transform transition-all hover:-translate-y-0.5 border border-white">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700">
                      <Code size={14} />
                    </div>
                    <span className="font-bold text-xs text-gray-800">Website Development</span>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-full">99/100 Speed</span>
                </div>
                <p className="text-[11px] text-gray-500">High-converting modern tech stack</p>
              </div>

            </div>

            {/* Right Column: Circular Metric Visual */}
            <div className="flex sm:flex-col items-center justify-center pt-4 sm:pt-0 sm:pl-6 border-t sm:border-t-0 sm:border-l border-white/20 relative z-10 shrink-0">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-2 sm:mb-4">
                {/* SVG Donut Chart */}
                <svg className="w-full h-full transform -rotate-90 absolute inset-0" viewBox="0 0 100 100">
                  {/* Background Track */}
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                  {/* Progress Track (85% Conversion Boost) */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    stroke="#a3e635" 
                    strokeWidth="8" 
                    fill="none" 
                    strokeDasharray="251.2" 
                    strokeDashoffset="37.6" 
                    strokeLinecap="round"
                    className="drop-shadow-lg" 
                  />
                </svg>
                <div className="text-center">
                  <div className="text-white text-3xl font-extrabold tracking-tight">85%</div>
                  <div className="text-[10px] text-emerald-200 font-semibold uppercase">Growth</div>
                </div>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide text-center">
                Average Client Revenue Lift
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}