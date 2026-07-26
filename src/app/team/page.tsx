"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Code, 
  Palette, 
  TrendingUp, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Calendar,
  Sparkles,
  ArrowRight,
  Award
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  experienceBadge: string;
  image: string;
  bio: string[];
  skills: string[];
  highlights: string[];
  education: string;
  keyProjects: string;
  email: string;
  phone: string;
  calendarLink: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "lead-developer",
    name: "ALEXANDER REED",
    role: "HEAD OF WEB ENGINEERING",
    badge: "LEAD DEVELOPER",
    experienceBadge: "10+ YRS DEV",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    bio: [
      "Alexander leads our core web architecture, building sub-second Next.js applications engineered for high-volume conversion.",
      "With over a decade in full-stack architecture, he has scaled e-commerce platforms and enterprise SaaS solutions handling millions in daily transactional volume. He specializes in React, Server-Side Rendering (SSR), and seamless API integrations.",
      "At our agency, Alexander ensures every client site achieves 95+ PageSpeed scores, zero performance lag, and impenetrable web security."
    ],
    skills: ["NEXT.JS / REACT", "FULL-STACK ARCHITECTURE", "CRO SPEED OPTIMIZATION", "API & CRM INTEGRATIONS"],
    highlights: [
      "Built systems processing $50M+ annual revenue",
      "Pioneered sub-500ms landing page architectures",
      "Certified AWS Solutions Architect",
      "Mentored 40+ engineering teams"
    ],
    education: "B.S. Computer Science — MIT",
    keyProjects: "120+ High-Converting Web Platforms Built",
    email: "alex@your agency.com",
    phone: "(555) 019-2834",
    calendarLink: "#book-alex"
  },
  {
    id: "lead-designer",
    name: "SOPHIA MARTINEZ",
    role: "DIRECTOR OF BRAND & UX DESIGN",
    badge: "LEAD DESIGNER",
    experienceBadge: "8+ YRS DESIGN",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    bio: [
      "Sophia blends high-end aesthetic design with direct-response psychological triggers to turn web visitors into buyers.",
      "She has directed visual design strategies for international D2C brands, creating custom UI/UX design systems, viral social ad visual frameworks, and high-converting landing page layouts.",
      "She leads our design team in creating visual brand systems that don't just look stunning, but directly increase sales conversions."
    ],
    skills: ["UI/UX SYSTEM DESIGN", "CONVERSION DESIGN (CRO)", "HIGH-HOOK AD CREATIVES", "BRAND IDENTITY"],
    highlights: [
      "Award-Winning UI/UX Designer",
      "Designed funnels yielding +85% conversion lifts",
      "Featured in top design publications",
      "Created 200+ brand visual frameworks"
    ],
    education: "B.F.A. Interactive Design — RISD",
    keyProjects: "150+ Direct-Response Funnels Designed",
    email: "sophia@your agency.com",
    phone: "(555) 019-2835",
    calendarLink: "#book-sophia"
  },
  {
    id: "growth-marketer",
    name: "MARCUS CHEN",
    role: "HEAD OF PERFORMANCE MARKETING",
    badge: "DIGITAL MARKETER",
    experienceBadge: "$25M+ AD SPEND",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    bio: [
      "Marcus oversees paid acquisition across Meta, Google Ads, TikTok, and LinkedIn, engineering predictable, profit-first growth funnels.",
      "He began his marketing career managing high-budget performance campaigns for fast-scaling startups, consistently delivering 3.5x+ ROAS across highly competitive verticals.",
      "Marcus specializes in audience hyper-targeting, creative testing methodologies, and real-time ROI optimization to maximize campaign returns."
    ],
    skills: ["PAID SOCIAL & PPC (META/GOOGLE)", "PROFIT-FIRST ROAS SCALE", "HIGH-CONVERTING COPY", "DATA ATTRIBUTION"],
    highlights: [
      "Managed $25M+ in profitable ad spend",
      "Achieved average 3.8x client ROAS",
      "Certified Meta & Google Premier Partner Lead",
      "Scaled 10+ brands to 8-figure valuations"
    ],
    education: "M.S. Marketing Analytics — NYU",
    keyProjects: "300+ Performance Ad Campaigns Scaled",
    email: "marcus@your agency.com",
    phone: "(555) 019-2836",
    calendarLink: "#book-marcus"
  }
];

export default function TeamPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* ---------------- 1. PAGE HERO HEADER ---------------- */}
      <section className="bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] pt-28 pb-20 relative overflow-hidden text-white">
        {/* Background Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        
        {/* Glow Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#a3e635] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#a3e635]" />
            <span>Meet The Experts</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            The Minds Behind Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-[#a3e635]">Growth Engine</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
            We don’t outsource. You work directly with senior specialists in Web Engineering, UI/UX Design, and Performance Digital Marketing.
          </p>
        </div>
      </section>

      {/* ---------------- 2. TEAM MEMBERS SHOWCASE ---------------- */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-28">
        {teamMembers.map((member, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={member.id} 
              id={member.id}
              className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden p-6 sm:p-10 transition-all hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-12 gap-10 items-stretch">
                
                {/* ---------------- IMAGE CONTAINER (Alternates Left / Right like reference layout) ---------------- */}
                <div className={`lg:col-span-5 flex flex-col ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group flex-1 min-h-[380px] border border-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* TOP RIGHT BADGE (e.g. 10+ YRS DEV) */}
                    <div className="absolute top-4 right-4 bg-slate-900/90 text-white border border-slate-700 px-4 py-2 rounded-xl text-center backdrop-blur-md shadow-xl">
                      <span className="block text-base font-extrabold text-[#a3e635]">{member.experienceBadge}</span>
                    </div>

                    {/* OVERLAY TITLE AT BOTTOM OF PHOTO */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                      <span className="text-[11px] font-bold text-[#a3e635] tracking-widest uppercase block mb-1">
                        {member.badge}
                      </span>
                      <h3 className="text-2xl font-extrabold tracking-tight">{member.name}</h3>
                    </div>
                  </div>

                  {/* BOTTOM SUB-INFO BOXES (Education & Key Projects) */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">BACKGROUND</span>
                      <p className="text-xs font-semibold text-gray-200">{member.education}</p>
                    </div>
                    <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">TRACK RECORD</span>
                      <p className="text-xs font-semibold text-[#a3e635]">{member.keyProjects}</p>
                    </div>
                  </div>
                </div>

                {/* ---------------- DETAILS & CONTENT CONTAINER ---------------- */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div>
                    {/* Header Role Title */}
                    <div className="border-b border-gray-200 pb-4 mb-6">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {member.name}
                      </h2>
                      <p className="text-xs font-bold text-[#006b5b] tracking-wider uppercase mt-1">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio Paragraphs */}
                    <div className="space-y-3 text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {member.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Skill / Practice Areas Tags (Pill Style from Screenshot) */}
                    <div className="mb-6">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2.5">
                        SPECIALIZED EXPERTISE
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="bg-slate-900 text-white border border-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights Grid */}
                    <div className="mb-8">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2.5">
                        CAREER HIGHLIGHTS & IMPACT
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {member.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="bg-[#f0fcfc] border border-teal-100 p-3 rounded-xl flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#006b5b] shrink-0 mt-0.5" />
                            <span className="text-xs font-medium text-slate-800">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Contact Bar (Bottom Buttons matching reference screenshot) */}
                  <div className="pt-4 border-t border-gray-200 grid sm:grid-cols-3 gap-3">
                    <a 
                      href={`tel:${member.phone}`}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-800"
                    >
                      <Phone size={14} className="text-[#a3e635]" />
                      <span>{member.phone}</span>
                    </a>

                    <a 
                      href={`mailto:${member.email}`}
                      className="bg-[#006b5b] hover:bg-[#004e6e] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Mail size={14} />
                      <span>Email Member</span>
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
          );
        })}
      </section>

    </div>
  );
}