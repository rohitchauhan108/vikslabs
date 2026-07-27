"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Building2,
  Users,
  Search,
  Share2,
  TrendingUp,
  Code,
  ArrowRight,
  Download,
  Sparkles,
  Zap,
  BarChart3,
  Newspaper,
  MessageCircle,
  UserCheck,
  Layers,
} from "lucide-react";

const serviceCategories = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    href: "/services/seo",
    icon: Search,
    links: [
      { name: "SEO Services" },
      { name: "Enterprise SEO" },
      { name: "Ecommerce SEO" },
      { name: "Local SEO" },
      { name: "Technical SEO" },
      { name: "SEO Audit" },
    ],
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
    icon: Share2,
    links: [
      { name: "Social Media Strategy" },
      { name: "Instagram & Meta Marketing" },
      { name: "Content & Reel Creation" },
      { name: "Community Management" },
      { name: "Influencer Marketing" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    href: "/services/web-development",
    icon: Code,
    links: [
      { name: "Custom Website Development" },
      { name: "Next.js / React Apps" },
      { name: "WordPress Development" },
      { name: "E-commerce Stores" },
      { name: "UI/UX & Web Design" },
    ],
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    icon: TrendingUp,
    links: [
      { name: "Google Ads (PPC)" },
      { name: "Meta Ads (Facebook & IG)" },
      { name: "LinkedIn Marketing" },
      { name: "Conversion Rate Optimization" },
      { name: "App Install Campaigns" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveGroup, setMobileActiveGroup] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("seo");

  const toggleMobileGroup = (key: string) => {
    setMobileActiveGroup(mobileActiveGroup === key ? null : key);
  };

  const currentTabContent =
    serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  return (
    <header className="w-full relative z-50 font-sans text-slate-800">
      {/* Top Alert Marquee Bar */}
      <div className="bg-[#102a5c] text-white text-xs py-2 px-4 relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-10">
          <div className="flex items-center gap-2 shrink-0">
            <AlertTriangle size={14} className="text-amber-400 shrink-0" />
            <span className="font-semibold text-amber-400">Important Alert:</span>
            <span>We only use official email IDs and never conduct interviews on messaging apps.</span>
            <Link
              href="/alert-notice"
              className="font-semibold underline hover:text-amber-300 ml-1"
            >
              Know More
            </Link>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-emerald-400 font-bold">★</span>
            <span className="font-semibold">#1 Digital Marketing Agency</span>
            <span>— 15+ Years of Digital Domination</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Zap size={14} className="text-yellow-400" />
            <span>1.29M+ Paid Conversions Delivered This Year</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <BarChart3 size={14} className="text-sky-400" />
            <span>Google Premier Partner &amp; Meta Business Partner</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Sparkles size={14} className="text-orange-400" />
            <span>103+ Brands Trust Us With Their Marketing Budget</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Download size={14} className="text-pink-400" />
            <span>Free Digital Audit — Get Your Custom Strategy Today!</span>
          </div>

          {/* Duplicate content for seamless marquee loop */}
          <div className="flex items-center gap-2 shrink-0" aria-hidden="true">
            <AlertTriangle size={14} className="text-amber-400 shrink-0" />
            <span className="font-semibold text-amber-400">Important Alert:</span>
            <span>We only use official email IDs and never conduct interviews on messaging apps.</span>
            <Link href="/alert-notice" className="font-semibold underline hover:text-amber-300 ml-1">
              Know More
            </Link>
          </div>
          <div className="flex items-center gap-2 shrink-0" aria-hidden="true">
            <span className="text-emerald-400 font-bold">★</span>
            <span className="font-semibold">#1 Digital Marketing Agency</span>
            <span>— 15+ Years of Digital Domination</span>
          </div>
          <div className="flex items-center gap-2 shrink-0" aria-hidden="true">
            <Zap size={14} className="text-yellow-400" />
            <span>1.29M+ Paid Conversions Delivered This Year</span>
          </div>
          <div className="flex items-center gap-2 shrink-0" aria-hidden="true">
            <BarChart3 size={14} className="text-sky-400" />
            <span>Google Premier Partner &amp; Meta Business Partner</span>
          </div>
          <div className="flex items-center gap-2 shrink-0" aria-hidden="true">
            <Sparkles size={14} className="text-orange-400" />
            <span>103+ Brands Trust Us With Their Marketing Budget</span>
          </div>
          <div className="flex items-center gap-2 shrink-0" aria-hidden="true">
            <Download size={14} className="text-pink-400" />
            <span>Free Digital Audit — Get Your Custom Strategy Today!</span>
          </div>
        </div>
      </div>

      {/* Secondary Contact Bar */}
      <div className="hidden md:block bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Download size={14} className="text-[#00a859]" />
            <span className="font-semibold">Download Digital Growth Report &amp; Case Studies</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+919389958986"
              className="flex items-center gap-1.5 hover:text-[#00a859] transition-colors py-2.5"
            >
              <Phone size={14} /> +91-9389958986
            </a>
            <a
              href="mailto:enquiry@thevikslabs.com"
              className="flex items-center gap-1.5 hover:text-[#00a859] transition-colors py-2.5"
            >
              <Mail size={14} /> enquiry@thevikslabs.com
            </a>
            <Link
              href="/contact"
              className="bg-[#006080] hover:bg-[#004e6e] text-white px-6 py-2.5 font-semibold transition-colors rounded-sm"
            >
              Request a Call <ArrowRight size={14} className="inline-block align-[-2px] ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-slate-100 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[80px]">
            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo-dark.png"
                alt="The Viks Labs Logo"
                width={180}
                height={50}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav - visible at md+ */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <Link href="/" className="hover:text-[#00a859] transition-colors py-6">
                Home
              </Link>

              {/* Company Dropdown */}
              <div className="group relative py-6">
                <button className="hover:text-[#00a859] flex items-center gap-1 transition-colors">
                  Company{" "}
                  <ChevronDown
                    size={14}
                    className="text-slate-400 group-hover:rotate-180 transition-transform duration-200"
                  />
                </button>
                <div className="absolute top-full right-0 w-64 bg-white border border-slate-200 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] py-2 overflow-hidden origin-top-right">
                  <Link
                    href="/about"
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-[#00a859] text-sm"
                  >
                    <Building2 size={16} className="text-[#00a859]" />
                    <span>About Us</span>
                  </Link>
                  <Link
                    href="/team"
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-[#00a859] text-sm"
                  >
                    <Users size={16} className="text-[#00a859]" />
                    <span>Our Team</span>
                  </Link>
                  <Link
                    href="/founder"
                    className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-[#00a859] text-sm"
                  >
                    <UserCheck size={16} className="text-[#00a859]" />
                    <span>About Founder</span>
                  </Link>
                </div>
              </div>

{/* Our Services Mega Dropdown */}
<div className="group relative py-6">
  <Link
    href="/services"
    className="hover:text-[#00a859] flex items-center gap-1 transition-colors"
  >
    Our Services{" "}
    <ChevronDown
      size={14}
      className="text-slate-400 group-hover:rotate-180 transition-transform duration-200"
    />
  </Link>

  <div
    className="absolute top-full right-0 w-[820px] max-w-[calc(100vw-2rem)]
               bg-white border border-slate-200 shadow-2xl rounded-2xl
               opacity-0 invisible
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200
               z-[60] p-5 overflow-hidden origin-top-right"
  >
    <div className="flex gap-5">
      {/* Left Side: Service Category Links (ACTIVE NAVIGABLE LINKS) */}
      <div className="w-2/5 border-r border-slate-100 pr-4 flex flex-col gap-1.5">
        {serviceCategories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeTab === cat.id;
          return (
            <Link
              key={cat.id}
              href={cat.href}
              onMouseEnter={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "bg-emerald-50/80 text-[#00a859] shadow-sm border border-emerald-100"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon
                size={16}
                className={`shrink-0 ${
                  isActive ? "text-[#00a859]" : "text-slate-400"
                }`}
              />
              <span className="flex-1 leading-tight">{cat.title}</span>
            </Link>
          );
        })}
      </div>

      {/* Right Side: Display List Items (NON-CLICKABLE VISUAL DISPLAY) */}
      <div className="w-3/5 bg-slate-50/60 p-5 rounded-xl border border-slate-100 flex flex-col justify-between min-h-[260px]">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 mb-3 pb-2 border-b border-slate-200 flex items-center gap-2">
            {(() => {
              const Icon = currentTabContent.icon;
              return (
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00a859] to-emerald-700 flex items-center justify-center text-white shrink-0">
                  <Icon size={15} />
                </span>
              );
            })()}
            {currentTabContent.title}
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {currentTabContent.links.map((link, idx) => (
              <div
                key={idx}
                className="text-xs text-slate-600 py-1.5 flex items-center gap-1.5 cursor-default select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a859] shrink-0" />
                {link.name}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium text-slate-500 leading-snug">
            Need custom digital strategies?
          </span>
          <Link
            href="/contact"
            className="shrink-0 text-[11px] font-extrabold text-white bg-gradient-to-r from-[#00a859] to-emerald-700 hover:from-emerald-700 hover:to-[#00a859] px-4 py-2 rounded-full flex items-center gap-1 shadow-sm transition-all"
          >
            Talk to Experts <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

              <Link
                href="/blog"
                className="hover:text-[#00a859] transition-colors py-6 flex items-center gap-1"
              >
                <Newspaper size={14} className="text-slate-400" /> Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#00a859] transition-colors py-6 flex items-center gap-1"
              >
                <MessageCircle size={14} className="text-slate-400" /> Contact
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="tel:+919389958986"
                className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#00a859] hover:bg-emerald-100 transition-colors"
                aria-label="Call +91-9389958986"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:enquiry@thevikslabs.com"
                className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 hover:bg-sky-100 transition-colors hidden sm:flex"
                aria-label="Email enquiry@thevikslabs.com"
              >
                <Mail size={18} />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  setMobileActiveGroup(null);
                }}
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#004e6e] to-[#008c4a] flex items-center justify-center text-white shadow-lg shadow-emerald-500/20"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-2 p-4 bg-gradient-to-br from-emerald-50 via-white to-sky-50 rounded-2xl mb-3 border border-slate-100">
                <a
                  href="tel:+919389958986"
                  className="flex items-center gap-3 text-[#004e6e] font-bold text-sm"
                >
                  <span className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#00a859]">
                    <Phone size={16} />
                  </span>{" "}
                  +91-9389958986
                </a>
                <a
                  href="mailto:enquiry@thevikslabs.com"
                  className="flex items-center gap-3 text-[#004e6e] font-bold text-sm"
                >
                  <span className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-sky-600">
                    <Mail size={16} />
                  </span>{" "}
                  enquiry@thevikslabs.com
                </a>
                <Link
                  href="/contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileActiveGroup(null);
                  }}
                  className="mt-2 text-center bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-6 py-3 rounded-full font-extrabold text-sm shadow-md hover:shadow-lg transition-shadow"
                >
                  Request a Call <ArrowRight size={14} className="inline align-[-3px] ml-1" />
                </Link>
              </div>

              <Link
                href="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileActiveGroup(null);
                }}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-slate-800 hover:bg-emerald-50 hover:text-[#00a859] transition-colors"
              >
                Home
              </Link>

              {/* Mobile Company Accordion */}
              <div className="rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleMobileGroup("company")}
                  className="w-full flex justify-between items-center px-4 py-3.5 rounded-xl font-bold text-slate-800 hover:bg-emerald-50 hover:text-[#00a859] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Building2 size={16} className="text-[#00a859]" />
                    Company
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 text-slate-400 ${
                      mobileActiveGroup === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveGroup === "company" && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 mt-1">
                    <Link
                      href="/about"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileActiveGroup(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-700 bg-slate-50 hover:bg-emerald-50 hover:text-[#00a859] font-semibold text-sm"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/team"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileActiveGroup(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-700 bg-slate-50 hover:bg-emerald-50 hover:text-[#00a859] font-semibold text-sm"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/founder"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileActiveGroup(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-700 bg-slate-50 hover:bg-emerald-50 hover:text-[#00a859] font-semibold text-sm"
                    >
                      About Founder
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div className="rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleMobileGroup("services")}
                  className="w-full flex justify-between items-center px-4 py-3.5 rounded-xl font-bold text-slate-800 hover:bg-emerald-50 hover:text-[#00a859] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers size={16} className="text-[#00a859]" />
                    Our Services
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 text-slate-400 ${
                      mobileActiveGroup === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileActiveGroup === "services" && (
                  <div className="pl-3 pr-2 pb-2 space-y-3 mt-1">
                    {serviceCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                      >
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200">
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00a859] to-emerald-700 flex items-center justify-center text-white">
                            <cat.icon size={15} />
                          </span>
                          <span className="text-xs font-extrabold text-slate-900">
                            {cat.title}
                          </span>
                        </div>
                        <div className="space-y-1 pl-10">
                          {cat.links.map((link, idx) => (
                            <Link
                              key={idx}
                              href={link.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileActiveGroup(null);
                              }}
                              className="block text-xs text-slate-600 hover:text-[#00a859] hover:font-bold py-1.5 pl-2 border-l-2 border-slate-200 hover:border-[#00a859] transition-all"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileActiveGroup(null);
                }}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-slate-800 hover:bg-emerald-50 hover:text-[#00a859] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Newspaper size={16} className="text-[#00a859]" /> Blog
                </span>
              </Link>
              <Link
                href="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileActiveGroup(null);
                }}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl font-bold text-slate-800 hover:bg-emerald-50 hover:text-[#00a859] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-[#00a859]" /> Contact
                </span>
              </Link>

              <Link
                href="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileActiveGroup(null);
                }}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-gradient-to-r from-[#004e6e] to-[#008c4a] text-white font-extrabold shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-shadow"
              >
                Get Free Growth Audit <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}