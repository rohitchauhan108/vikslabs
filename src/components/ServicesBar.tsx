import React from "react";
import Link from "next/link";

export default function ServicesBar() {
  return (
    <div className="max-w-6xl mx-auto px-4 relative z-20 -mt-10">
      <div className="bg-[#eef2fa] rounded-full shadow-lg flex flex-wrap justify-center md:justify-between items-center px-8 py-5 text-[13px] font-semibold text-[#334155] border border-white">
        <Link href="#" className="hover:text-[#00a859] transition-colors px-3 py-1">SEO Services</Link>
        <Link href="#" className="hover:text-[#00a859] transition-colors px-3 py-1">Digital Marketing Services</Link>
        <Link href="#" className="hover:text-[#00a859] transition-colors px-3 py-1">Mobile App Marketing Services</Link>
        <Link href="#" className="hover:text-[#00a859] transition-colors px-3 py-1">Content Writing Services</Link>
        <Link href="#" className="hover:text-[#00a859] transition-colors px-3 py-1">PPC Services</Link>
        <Link href="#" className="hover:text-[#00a859] transition-colors px-3 py-1">Martech Consulting Services</Link>
      </div>
      
      {/* Decorative text below */}
      <div className="text-center mt-12 text-blue-500 font-semibold text-xs tracking-[0.2em] uppercase">
        Clients
      </div>
    </div>
  );
}
