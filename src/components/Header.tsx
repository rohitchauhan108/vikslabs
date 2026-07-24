import React from "react";
import Link from "next/link";
import { AlertTriangle, Phone, Mail, ChevronDown, Briefcase, FileText, MessageSquare, X } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full relative z-50">
      {/* Dark Blue Alert Bar */}
      <div className="bg-[#122b5e] text-white text-xs py-2 px-4 flex justify-center items-center gap-4">
        <div className="flex items-center gap-2 max-w-7xl mx-auto">
          <AlertTriangle size={14} className="text-yellow-500" />
          <span className="font-semibold">Important Alert:</span>
          <span className="hidden sm:inline">We only use official email IDs and never conduct interviews on messaging apps. Beware of fake job offers and payment requests.</span>
          <Link href="#" className="font-semibold underline ml-2">Know More</Link>
          <button className="ml-4 hover:opacity-80"><X size={14} /></button>
        </div>
      </div>

      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center text-xs text-gray-600">
          <div className="flex items-center gap-6">
            <a href="tel:+919910308266" className="flex items-center gap-2 hover:text-[#00a859] transition-colors py-2">
              <Phone size={14} /> +91-9910308266
            </a>
            <a href="mailto:enquiry@techmagnate.com" className="flex items-center gap-2 hover:text-[#00a859] transition-colors py-2">
              <Mail size={14} /> enquiry@techmagnate.com
            </a>
            <Link href="#" className="bg-[#006080] hover:bg-[#004e6e] text-white px-6 py-2.5 font-medium transition-colors">
              Request a Call &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <div className="flex items-center">
                <span className="text-3xl font-black text-[#00a859]">TECHMAGNATE</span>
                <span className="text-[10px] align-top ml-1 text-gray-500">&reg;</span>
              </div>
              <span className="text-[11px] tracking-[0.2em] text-gray-600 font-medium">Digital Excellence</span>
            </Link>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700 relative">
              <Link href="#" className="hover:text-[#00a859] flex items-center gap-1 transition-colors">Company <ChevronDown size={14} className="text-gray-400"/></Link>
              <Link href="#" className="hover:text-[#00a859] flex items-center gap-1 transition-colors">Our Services <ChevronDown size={14} className="text-gray-400"/></Link>
              
              {/* Mega Menu Trigger */}
              <div className="group py-6">
                <Link href="#" className="text-[#00a859] flex items-center gap-1 border-b-2 border-[#00a859] pb-1">
                  Our Work <ChevronDown size={14} />
                </Link>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 flex p-8 z-50 pointer-events-none group-hover:pointer-events-auto">
                  
                  {/* Left Column Links */}
                  <div className="flex-1 flex flex-col gap-6 pr-8 border-r border-gray-100">
                    <Link href="#" className="flex items-center gap-4 text-gray-700 hover:text-[#00a859] transition-colors group/link">
                      <Briefcase className="text-[#00a859] group-hover/link:scale-110 transition-transform" />
                      <span className="font-semibold">Portfolio</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-4 text-gray-700 hover:text-[#00a859] transition-colors group/link">
                      <MessageSquare className="text-[#00a859] group-hover/link:scale-110 transition-transform" />
                      <span className="font-semibold">Testimonials</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-4 text-gray-700 hover:text-[#00a859] transition-colors group/link">
                      <FileText className="text-[#00a859] group-hover/link:scale-110 transition-transform" />
                      <span className="font-semibold">Case Studies</span>
                    </Link>
                  </div>

                  {/* Right Column Promo Card */}
                  <div className="flex-[1.2] bg-[#f0f9ff] rounded-xl p-8 flex flex-col justify-center relative overflow-hidden ml-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider mb-2">NEW - FY 2025-26 DIGITAL REPORT CARD</span>
                    <div className="text-6xl font-black text-[#6db33f] tracking-tighter mb-2">1.29M</div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Paid conversions this year.</p>
                    <p className="text-xs text-gray-500 mb-6">Real data from 103 brands.</p>
                    <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-full font-bold text-sm w-full transition-colors shadow-lg shadow-orange-500/30">
                      Download Report Card &rarr;
                    </button>
                    <p className="text-[10px] text-right text-gray-400 mt-3">Google Premier Partner</p>
                  </div>

                </div>
              </div>

              <Link href="#" className="hover:text-[#00a859] flex items-center gap-1 transition-colors">Industry <ChevronDown size={14} className="text-gray-400"/></Link>
              <Link href="#" className="hover:text-[#00a859] flex items-center gap-1 transition-colors">Insights <ChevronDown size={14} className="text-gray-400"/></Link>
              <Link href="#" className="hover:text-[#00a859] transition-colors">Blog</Link>
              <Link href="#" className="hover:text-[#00a859] transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
