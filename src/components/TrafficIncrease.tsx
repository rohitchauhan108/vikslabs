"use client";

import React, { useState } from "react";
import { Globe, MousePointerClick, Target, Users, BarChart3, Award, ChevronLeft, ChevronRight } from "lucide-react";

// Cards data
const cardsData = [
  {
    id: 1,
    icon: <Users size={24} />,
    title: "Dedicated Teams for AI, Automation, and Data Analytics",
    description: "Our specialized teams use AI, automation, and analytics to augment campaign performance, improve customer engagement, and unlock new growth opportunities."
  },
  {
    id: 2,
    icon: <BarChart3 size={24} />,
    title: "In-House Martech Capabilities",
    description: "Our in-house expertise in CRM, AI, analytics, and marketing automation empowers businesses with data-driven, personalized marketing solutions that drive efficiency and ROI."
  },
  {
    id: 3,
    icon: <Award size={24} />,
    title: "Google Premier Agency",
    description: "As a Google Premier Partner, we have exclusive access to insights, tools, and support to help us deliver superior campaign performance."
  }
];

export default function TrafficIncrease() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f0fdf4] to-[#ecfeff]">
      {/* Background Pattern using an online texture + CSS gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{ 
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cream-paper.png')`,
          backgroundSize: 'auto'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight font-heading">
            Achieve a 2x Increase in Average Monthly Traffic
          </h2>

          <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Globe className="text-[#006080]" size={28} />
                Get
              </div>
              <p className="text-gray-600 text-sm">SERP Visibility</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <MousePointerClick className="text-[#006080]" size={28} />
                Drive
              </div>
              <p className="text-gray-600 text-sm">Qualified Leads</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Target className="text-[#006080]" size={28} />
                Grow
              </div>
              <p className="text-gray-600 text-sm">Your Bottomline</p>
            </div>
          </div>

          <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group">
            Speak to an Expert 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>

        {/* Right Column - Cards Carousel */}
        <div className="flex-[1.5] relative w-full">
          
          {/* Custom Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-[#006080] z-20 transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-[#006080] z-20 transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex gap-6 overflow-hidden px-4 py-8 -mx-4">
            {/* Display current card and next card for sliding effect */}
            {[currentIndex, (currentIndex + 1) % cardsData.length, (currentIndex + 2) % cardsData.length].map((index, idx) => (
              <div 
                key={cardsData[index].id}
                className={`min-w-[280px] bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex-shrink-0 transform transition-all duration-500 hover:-translate-y-2 ${
                  idx === 0 ? 'opacity-100' : idx === 1 ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-700">
                  {cardsData[index].icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading leading-snug">
                  {cardsData[index].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cardsData[index].description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
