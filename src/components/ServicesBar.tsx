import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function ServicesBar() {
  const services = [
    { label: "Performance Marketing", href: "#performance-marketing" },
    { label: "Social Media Marketing", href: "#social-media-marketing" },
    { label: "Website Development", href: "#website-development" },
    { label: "PPC & Meta Ads", href: "#paid-ads" },
    { label: "SEO & Analytics", href: "#seo-analytics" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 relative z-20 -mt-10">
      {/* Floating Glassmorphism Container */}
      <div className="relative group">
        {/* Soft Background Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-orange-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-white/90 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white/80 p-2 sm:p-3">
          <div className="flex flex-wrap justify-center md:justify-around items-center gap-1 sm:gap-2">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 active:scale-95 transition-all duration-200"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Modernized Client Section Divider */}
      <div className="flex items-center justify-center gap-3 mt-12">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-200" />
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-[0.25em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Trusted By Growth Brands</span>
        </div>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-200" />
      </div>
    </div>
  );
}