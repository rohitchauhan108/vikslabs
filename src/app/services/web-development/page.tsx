"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Target,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  Layout,
  Globe,
  Send,
  Star
} from "lucide-react";

// Web Dev Process steps
const processSteps = [
  {
    step: "01",
    title: "Architecture & Wireframing",
    description: "We map out database schemas, user flows, and modern headless architectures for lightning-fast speeds."
  },
  {
    step: "02",
    title: "UI/UX High-Fidelity Design",
    description: "Designing conversion-optimized, responsive interfaces with clean, modern aesthetics in Figma."
  },
  {
    step: "03",
    title: "Next.js & Full-Stack Build",
    description: "Engineering clean, scalable React & Next.js applications integrated with robust APIs and Node.js backends."
  },
  {
    step: "04",
    title: "Testing, SEO & Launch",
    description: "Rigorous cross-browser testing, Core Web Vitals optimization, automated CI/CD deployment, and ongoing support."
  }
];

// Deliverables list
const deliverables = [
  "Sub-Second Next.js Page Performance",
  "Fully Responsive & Mobile-First UI/UX",
  "Headless CMS Integration (Sanity/Strapi)",
  "Clean, Production-Ready Codebase",
  "Built-in Technical SEO Architecture",
  "Continuous CI/CD Pipeline & Hosting Setup"
];

// FAQ list
const faqs = [
  {
    question: "Which framework or stack do you build web applications with?",
    answer: "We specialize in modern React and Next.js full-stack architectures paired with Tailwind CSS, Node.js, and TypeScript to ensure maximum performance, security, and effortless scalability."
  },
  {
    question: "How long does a web development project usually take?",
    answer: "Custom corporate websites and web apps typically take 3 to 6 weeks from initial wireframes to production launch, depending on complexity and custom API integrations."
  },
  {
    question: "Will my website be mobile-friendly and optimized for SEO?",
    answer: "Yes, 100%. All our applications are built mobile-first and strictly engineered to pass Google Core Web Vitals with 90+ PageSpeed scores out of the box."
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer: "Absolutely. We provide ongoing support plans covering security updates, server monitoring, feature upgrades, and continuous performance tuning."
  }
];

export default function WebDevServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your website review request has been submitted.");
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      
      {/* ---------------- 1. UPDATED COLOR HERO SECTION ---------------- */}
      <section className="bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white pt-28 pb-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-inner">
                <Sparkles size={14} />
                <span>Next.js & Full-Stack Development Services</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Engineered Web Apps Built for <span className="text-emerald-400">Speed &amp; Conversion</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                We design and build ultra-fast, modern React & Next.js web platforms engineered for seamless user experience, high search rankings, and predictable customer growth.
              </p>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>90+ Google PageSpeed Guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Custom UI/UX & Responsive Layouts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Clean, Scalable Next.js Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>Built-In Technical SEO Infrastructure</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a 
                  href="tel:+919389958986" 
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/60"
                >
                  <Phone size={15} />
                  <span>Call +91-9389958986</span>
                </a>
                <Link 
                  href="/contact" 
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-xs transition-all flex items-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

            {/* Right Audit/Proposal Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative backdrop-blur-sm">
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">Request Free Website Proposal</h3>
                  <p className="text-xs text-slate-400">Get a performance review and tech roadmap for your project.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
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
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Current Website URL (Optional)</label>
                    <input 
                      type="url" 
                      placeholder="https://yourwebsite.com" 
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 mt-2"
                  >
                    <Send size={14} />
                    <span>Get Free Tech Proposal</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center mt-3">
                    🔒 We respect your privacy. No spam guaranteed.
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
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
                alt="Web Development Code" 
                width={800} 
                height={600} 
                className="object-cover w-full h-[420px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs font-bold text-[#00a859] uppercase tracking-wider block mb-1">Modern Stack</span>
                  <p className="text-lg font-bold">Fast, responsive, and tailored software built using Next.js & React.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase block mb-2">Why Our Code Stands Out</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Web Sites Engineered to Perform, Scale, and Convert
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Slow websites kill conversion rates. We build bespoke digital web platforms that combine sub-second loading speeds, modern aesthetic design, and intuitive user experiences to maximize client acquisition.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <Layout className="w-5 h-5 text-[#00a859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Custom UI/UX Design</h4>
                  <p className="text-xs text-gray-500 mt-1">Unique designs tailored specifically to your brand identity.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#00a859] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sub-Second Load Time</h4>
                  <p className="text-xs text-gray-500 mt-1">Next-gen static rendering and optimized SSR architectures.</p>
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
            <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase block mb-2">Development Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our 4-Step Engineering Process</h2>
            <p className="text-gray-400 text-sm mt-3">From ideation to deployment, every step is built around performance.</p>
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
              <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase block mb-2">Project Scope</span>
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">What's Included in Your Project</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Clean source code, modern deployment architecture, full responsive design, and post-launch guarantees.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#00a859] hover:bg-emerald-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Get a Project Quote</span>
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
            Ready to Build Your Next High-Performance Website?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our engineering team to plan your architecture and discuss your vision today.
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
              <span>Book Discovery Call</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}