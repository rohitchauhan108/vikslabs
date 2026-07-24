import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 relative -mb-16 z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="flex-1 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Are You Ready for Transformational Growth for Your Business?
            </h2>
            <div>
              <button className="bg-[#6db33f] hover:bg-[#5a9a33] text-white px-8 py-3 rounded-full font-bold text-sm transition-colors shadow-lg shadow-green-500/30">
                Request a Call Back
              </button>
            </div>
          </div>
          <div className="flex-1 bg-[#122b5e] relative overflow-hidden p-12 flex flex-col justify-center transform -skew-x-12 translate-x-8 -mr-16">
            <div className="transform skew-x-12 pl-8">
              <span className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 block">
                FY 2025-26 DIGITAL REPORT CARD
              </span>
              <div className="text-7xl font-black text-[#6db33f] tracking-tighter mb-2">
                266M
              </div>
              <p className="text-sm font-medium text-gray-300 mb-1">
                Search volume our clients own in AI Overviews
              </p>
              <p className="text-xs text-gray-500">
                Real data from 103 brands.
              </p>
            </div>
            {/* Green accent shape */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#6db33f] transform rotate-45 translate-x-16 translate-y-16"></div>
          </div>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#242424] pt-32 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Top Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            
            {/* Logo and About */}
            <div className="lg:col-span-2 pr-8">
              <div className="mb-6 flex flex-col">
                <div className="flex items-center">
                  <span className="text-3xl font-black text-white">TECHMAGNATE</span>
                  <span className="text-[10px] align-top ml-1 text-gray-400">&reg;</span>
                </div>
                <span className="text-[11px] tracking-[0.2em] text-gray-400 font-medium">Digital Excellence</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Techmagnate is an award-winning performance marketing agency. We deliver transformational growth for our clients through digital & AI excellence.
              </p>
              {/* Partner Badges Mock */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white p-2 rounded w-20 flex flex-col items-center justify-center h-16">
                   <div className="text-xs font-bold text-gray-800">Google</div>
                   <div className="text-[8px] text-gray-500 text-center leading-none mt-1">Premier Partner</div>
                </div>
                <div className="bg-[#6124B8] p-2 rounded w-20 flex flex-col items-center justify-center h-16 text-white">
                   <div className="text-[8px] uppercase tracking-wider mb-1">Semrush</div>
                   <div className="text-[10px] font-bold leading-tight text-center">Agency<br/>Partner</div>
                </div>
                <div className="text-white flex items-center gap-1">
                   <div className="font-bold text-xl tracking-tight">Clutch</div>
                   <div className="flex text-yellow-500 text-xs">★★★★½</div>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-gray-100">Our Services</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Search Engine Optimization</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Digital Marketing</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">App Marketing</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Content Marketing</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">PPC/Paid Marketing</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Marketing Technology</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Web Designing & Development</Link></li>
              </ul>
            </div>

            {/* Company & Tools */}
            <div>
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-6 text-gray-100">Company</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">About us</Link></li>
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Press Releases</Link></li>
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Careers</Link></li>
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Best Place to Work in India</Link></li>
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Awards and Recognition</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6 text-gray-100">Tools</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">SEO ROI Calculator</Link></li>
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">PPC ROI Calculator</Link></li>
                  <li><Link href="#" className="hover:text-[#6db33f] transition-colors">CRO ROI Calculator</Link></li>
                </ul>
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-gray-100">Industries</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">BFSI</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">B2B</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Education</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Healthcare</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-gray-100">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">FAQs</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Web Stories</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Testimonial</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Portfolio</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Search Trends Report</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Digital Report Card</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">BlogX</Link></li>
                <li><Link href="#" className="hover:text-[#6db33f] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Social and Ratings */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="w-8 h-8 bg-[#1877F2] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaFacebookF size={16} className="text-white" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-black rounded border border-gray-600 flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaXTwitter size={16} className="text-white" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#FF0000] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaYoutube size={16} className="text-white" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaLinkedinIn size={16} className="text-white" />
              </Link>
            </div>

            {/* Ratings */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-[10px]">G</span>
                </div>
                <span>4.1/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-[10px]">C</span>
                </div>
                <span>4.5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <FaFacebook size={12} />
                </div>
                <span>4.2/5 rating</span>
              </div>
              <div className="bg-white px-3 py-1 rounded flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-500" />
                <div className="flex flex-col leading-none">
                   <span className="text-black font-bold text-[10px]">DMCA</span>
                   <span className="text-gray-400 text-[8px]">PROTECTED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>Copyright &copy; 2026 Techmagnate&reg;. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-white transition-colors">CSR Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
