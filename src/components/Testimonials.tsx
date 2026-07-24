"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    company: "Bajaj Finserv",
    companyInitial: "B",
    companyColor: "#005cb9",
    text: "Techmagnate has delivered on its promise of significant growth. Recently, we reached an impressive milestone...",
    name: "Rohit Singh Chouhan",
    role: "Senior Unit Manager - Bajaj: Online Payment (BBPS)"
  },
  {
    id: 2,
    company: "Muthoot Finance",
    companyInitial: "M",
    companyColor: "#dc2626",
    text: "The digital marketing strategies implemented by Techmagnate have been game-changing for our brand visibility.",
    name: "Anita Sharma",
    role: "Marketing Director - Muthoot Finance"
  },
  {
    id: 3,
    company: "HDFC Bank",
    companyInitial: "H",
    companyColor: "#1e40af",
    text: "Outstanding results! Our organic traffic has increased by 200% in just 6 months of working together.",
    name: "Rajesh Kumar",
    role: "Digital Head - HDFC Bank"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {testimonialsData.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-1.5 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-[#6db33f]" 
                  : "bg-white border border-[#006080]"
              }`}
            ></div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Block: Client Testimonials */}
          <div className="flex-[1.8] bg-gradient-to-r from-[#005e82] to-[#71ba42] rounded-[2rem] p-10 relative text-white overflow-hidden shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 font-heading">
              Client Testimonials
            </h2>

            {/* Carousel Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-10 cursor-pointer"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-10 cursor-pointer"
            >
              <ChevronRight size={20} className="text-white" />
            </button>

            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-8 transition-opacity duration-500">
              
              {/* Logo Circle */}
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg leading-none"
                    style={{ backgroundColor: currentTestimonial.companyColor }}
                  >
                    {currentTestimonial.companyInitial}
                  </div>
                  <div className="flex flex-col text-left leading-none">
                    <span 
                      className="font-black text-sm uppercase"
                      style={{ color: currentTestimonial.companyColor }}
                    >
                      {currentTestimonial.company.split(' ')[0]}
                    </span>
                    <span 
                      className="font-black text-sm uppercase"
                      style={{ color: currentTestimonial.companyColor }}
                    >
                      {currentTestimonial.company.split(' ')[1]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center min-h-[160px]">
                <p className="text-lg leading-relaxed mb-6">
                  {currentTestimonial.text}{" "}
                  <a href="#" className="underline font-semibold hover:text-gray-200 transition-colors">
                    read more
                  </a>
                </p>
                <div>
                  <h4 className="font-bold text-lg font-heading">{currentTestimonial.name}</h4>
                  <p className="text-sm text-gray-100">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10">
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg flex items-center gap-2">
                View All <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Block: Digital Report Card Promo */}
          <div className="flex-1 bg-[#f0f9ff] rounded-[2rem] p-10 relative overflow-hidden border border-blue-50 flex flex-col justify-center">
            {/* Subtle background lines pattern */}
            <div 
              className="absolute inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/waves.png')`,
                backgroundSize: '200px'
              }}
            ></div>
            
            <div className="relative z-10">
              <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">
                NEW &middot; FY 2025-26 DIGITAL REPORT CARD
              </p>
              
              <div className="text-[5rem] font-black text-[#6db33f] tracking-tighter leading-none mb-4">
                266M
              </div>
              
              <p className="text-xl font-medium text-gray-800 mb-6 leading-snug">
                Search volume our clients own in AI Overviews
              </p>
              
              <p className="text-sm font-bold text-gray-900 mb-8">
                Real data from 103 brands.
              </p>
              
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20 inline-flex items-center gap-2">
                Download Reports <ArrowRight size={16} />
              </button>
              
              <p className="text-xs text-gray-400 mt-8 text-right font-medium">
                Google Premier Partner
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
