"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-20 font-sans">
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 relative -mb-16 z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left CTA Text */}
          <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Are You Ready for Transformational Growth for Your Business?
            </h2>
            <div>
              <a
                href="#contact"
                className="bg-[#00a859] hover:bg-[#008c4a] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20 inline-block"
              >
                Request a Call Back
              </a>
            </div>
          </div>

          {/* Right Metrics Display */}
          <div className="flex-1 bg-[#102a5c] relative overflow-hidden p-8 sm:p-12 flex flex-col justify-center md:transform md:-skew-x-12 md:translate-x-8 md:-mr-16">
            <div className="md:transform md:skew-x-12 md:pl-8">
              <span className="text-[10px] font-bold text-gray-300 tracking-wider mb-2 block uppercase">
                FY 2025-26 Digital Report Card
              </span>
              <div className="text-5xl sm:text-7xl font-black text-[#00a859] tracking-tighter mb-2">
                266M
              </div>
              <p className="text-sm font-medium text-gray-200 mb-1">
                Search volume our clients own in AI Overviews
              </p>
              <p className="text-xs text-gray-400">
                Real data from 103+ brands.
              </p>
            </div>
            
            {/* Emerald Accent Decor */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00a859] transform rotate-45 translate-x-16 translate-y-16 pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#1e1e1e] pt-32 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Links & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            
            {/* Logo & About */}
            <div className="lg:col-span-2 pr-0 lg:pr-8">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo.png"
                    alt="The Viks Labs Logo"
                    width={180}
                    height={50}
                    className="h-20 w-auto object-contain brightness-0 invert"
                  />
                </Link>
                <span className="text-[11px] tracking-[0.2em] text-gray-400 font-semibold block mt-2 uppercase">
                  Igniting Digital Domination
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                The Viks Labs is an award-winning performance marketing agency. We deliver transformational growth for our clients through digital &amp; AI domination.
              </p>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-bold text-base mb-5 text-gray-100">Our Services</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#seo" className="hover:text-[#00a859] transition-colors">Search Engine Optimization</Link></li>
                <li><Link href="#smm" className="hover:text-[#00a859] transition-colors">Social Media Marketing</Link></li>
                <li><Link href="#web-dev" className="hover:text-[#00a859] transition-colors">Web Development</Link></li>
                <li><Link href="#performance-marketing" className="hover:text-[#00a859] transition-colors">Performance Marketing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-base mb-5 text-gray-100">Company</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#about" className="hover:text-[#00a859] transition-colors">About us</Link></li>
                <li><Link href="#team" className="hover:text-[#00a859] transition-colors text-[#00a859] font-semibold">Our Team</Link></li>
                <li><Link href="#founder" className="hover:text-[#00a859] transition-colors">About Founder</Link></li>
                <li><Link href="#press" className="hover:text-[#00a859] transition-colors">Press Releases</Link></li>
                <li><Link href="#careers" className="hover:text-[#00a859] transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-bold text-base mb-5 text-gray-100">Industries</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#00a859] transition-colors">BFSI</Link></li>
                <li><Link href="#" className="hover:text-[#00a859] transition-colors">B2B</Link></li>
                <li><Link href="#" className="hover:text-[#00a859] transition-colors">Education</Link></li>
                <li><Link href="#" className="hover:text-[#00a859] transition-colors">Healthcare</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base mb-5 text-gray-100">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#blog" className="hover:text-[#00a859] transition-colors">Blog</Link></li>
                <li><Link href="#faqs" className="hover:text-[#00a859] transition-colors">FAQs</Link></li>
                <li><Link href="#case-studies" className="hover:text-[#00a859] transition-colors">Case Studies</Link></li>
                <li><Link href="#portfolio" className="hover:text-[#00a859] transition-colors">Portfolio</Link></li>
                <li><Link href="#contact" className="hover:text-[#00a859] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Social Links Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-[#1877F2] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FaFacebookF size={16} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 bg-black rounded-lg border border-gray-700 flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FaXTwitter size={16} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 bg-[#FF0000] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FaYoutube size={16} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FaLinkedinIn size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Bottom Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <p>Copyright &copy; 2026 The Viks Labs&reg;. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="#" className="hover:text-white transition-colors">
                CSR Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}