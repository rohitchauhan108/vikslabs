"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  TrendingUp,
  Target,
  Compass,
  Quote,
  Briefcase,
  GraduationCap,
  Linkedin,
  Twitter
} from "lucide-react";

export default function FounderPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* ---------------- 1. PAGE HERO HEADER ---------------- */}
      <section className="bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] pt-28 pb-20 relative overflow-hidden text-white">
        {/* Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#a3e635] text-xs font-bold uppercase tracking-wider mb-6">
            <Compass className="w-4 h-4 text-[#a3e635]" />
            <span>Leadership & Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-[#a3e635]">Founder</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
            Building predictable revenue engines by fusing high-speed web engineering with performance digital marketing.
          </p>
        </div>
      </section>

      {/* ---------------- 2. MAIN FOUNDER SHOWCASE SECTION (Reference Layout Style) ---------------- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            
            {/* ---------------- LEFT: FOUNDER IMAGE & QUICK STATS ---------------- */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group min-h-[420px] border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                  alt="Founder Profile"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* EXPERIENCE / METRIC BADGE OVERLAY */}
                <div className="absolute top-4 right-4 bg-slate-900/90 text-white border border-slate-700 px-4 py-2 rounded-xl text-center backdrop-blur-md shadow-xl">
                  <span className="block text-lg font-extrabold text-[#a3e635]">12+ YRS</span>
                  <span className="text-[10px] text-gray-300 font-bold uppercase">FOUNDING EXP</span>
                </div>

                {/* IMAGE BOTTOM OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                  <span className="text-[11px] font-bold text-[#a3e635] tracking-widest uppercase block mb-1">
                    FOUNDER & CHIEF EXECUTIVE
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-tight">DAVID V. STERLING</h3>
                </div>
              </div>

              {/* QUICK INFO CARDS */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    EDUCATION
                  </span>
                  <p className="text-xs font-semibold text-gray-200">M.S. Computer Science — Stanford</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    CLIENT REVENUE
                  </span>
                  <p className="text-xs font-semibold text-[#a3e635]">$100M+ Scaled</p>
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT: FOUNDER BIO & MILESTONES ---------------- */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Header Title */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    DAVID V. STERLING
                  </h2>
                  <p className="text-xs font-bold text-[#006b5b] tracking-wider uppercase mt-1">
                    FOUNDER & CHIEF EXECUTIVE OFFICER
                  </p>
                </div>

                {/* Bio & Vision */}
                <div className="space-y-4 text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  <p>
                    David founded the agency with a singular vision: to bridge the gap between high-speed custom software engineering and direct-response performance marketing.
                  </p>
                  <p>
                    Having previously scaled two tech ventures and managed tens of millions in performance ad spend, David recognized that traditional agencies fail because they treat web design and media buying as separate silos.
                  </p>
                  <p>
                    Under his leadership, our team has grown into a high-performance growth engine that helps ambitious brands systematically double their return on ad spend and conversion rates.
                  </p>
                </div>

                {/* Founder Quote Banner */}
                <div className="bg-[#f0fcfc] border-l-4 border-[#006b5b] p-4 rounded-r-2xl mb-6 flex items-start gap-3">
                  <Quote className="w-6 h-6 text-[#006b5b] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm font-medium italic text-slate-800">
                    "Growth isn't luck or clever guessing. It’s a repeatable engineering system driven by clean code, high-converting creative, and obsessive data tracking."
                  </p>
                </div>

                {/* Practice Areas / Core Expertise */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2.5">
                    CORE LEADERSHIP AREAS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["GROWTH STRATEGY", "FULL-STACK ENGINEERING", "PERFORMANCE MEDIA", "CONVERSION OPTIMIZATION"].map((area, idx) => (
                      <span 
                        key={idx} 
                        className="bg-slate-900 text-white border border-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Highlights */}
                <div className="mb-8">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2.5">
                    KEY CAREER HIGHLIGHTS
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    <div className="bg-slate-50 border border-gray-200 p-3 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#006b5b] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800">Scaled 150+ international D2C & SaaS brands</span>
                    </div>
                    <div className="bg-slate-50 border border-gray-200 p-3 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#006b5b] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800">Managed over $100M+ in revenue growth</span>
                    </div>
                    <div className="bg-slate-50 border border-gray-200 p-3 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#006b5b] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800">Keynote Speaker at Global Tech Summits</span>
                    </div>
                    <div className="bg-slate-50 border border-gray-200 p-3 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#006b5b] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800">Pioneered profit-first attribution models</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 grid sm:grid-cols-3 gap-3">
                <a 
                  href="tel:(555)019-2831"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-800"
                >
                  <Phone size={14} className="text-[#a3e635]" />
                  <span>(555) 019-2831</span>
                </a>

                <a 
                  href="mailto:david@your agency.com"
                  className="bg-[#006b5b] hover:bg-[#004e6e] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Mail size={14} />
                  <span>Direct Email</span>
                </a>

                <a 
                  href="#contact"
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/10"
                >
                  <Calendar size={14} />
                  <span>Book Consultation</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 3. FOUNDER PHILOSOPHY / PILLARS ---------------- */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#006b5b] uppercase tracking-widest block mb-2">OPERATING PRINCIPLES</span>
          <h2 className="text-3xl font-extrabold text-slate-900">The Founder’s Code</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#006b5b] flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">01. Profit Over Vanity</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Impressions and clicks mean nothing if they don't generate profit. Every campaign we build is measured against true return on ad spend and bottom-line revenue.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#006b5b] flex items-center justify-center mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">02. Speed as a Feature</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              A 1-second delay in page load drops conversions by 7%. We engineer hyper-fast Next.js web applications to turn every click into an active opportunity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#006b5b] flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">03. Radical Transparency</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              No hidden fees or confusing jargon. You get full access to live custom growth dashboards, ad accounts, and direct communication channels with our senior team.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- 4. CALL TO ACTION BANNER ---------------- */}
      <section className="py-20 bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Schedule a Direct Founder Strategy Call
          </h2>
          <p className="text-gray-100 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            Book a 1-on-1 growth session with David to audit your current web performance, marketing funnels, and revenue roadmap.
          </p>
          <Link 
            href="/contact" 
            className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl inline-flex items-center gap-2 group"
          >
            <span>Book Founder Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}