"use client";

import React, { useState } from "react";

// Mock data for the different service tabs
const servicesData = {
  seo: {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Dominate search results and drive organic growth. Build authority and visibility where it matters most.",
    buttonText: "Discover SEO Services",
    stat: "2.5M+",
    statText: "Organic Traffic Generated",
    subServices: ["Enterprise SEO", "Hyperlocal SEO", "E-commerce SEO"],
    imageColor: "bg-blue-100"
  },
  paid: {
    id: "paid",
    title: "Paid Marketing",
    description: "Maximize your ROI with targeted, data-driven paid campaigns across search and social platforms.",
    buttonText: "Discover Paid Marketing",
    stat: "4.8x",
    statText: "Average ROAS Achieved",
    subServices: ["Google Ads", "Social Media Ads", "Programmatic Ads"],
    imageColor: "bg-purple-100"
  },
  content: {
    id: "content",
    title: "Content Marketing",
    description: "Develop strong and helpful content assets. Reach the right audience. Establish industry expertise.",
    buttonText: "Discover Content Marketing Services \u2192",
    stat: "41M",
    statText: "Article Views Delivered",
    subServices: ["Content Writing Services", "Guest Posting"],
    imageColor: "bg-[#e6f4f8]"
  },
  mobile: {
    id: "mobile",
    title: "Mobile App Marketing",
    description: "Boost app downloads, improve store rankings, and increase user retention and engagement.",
    buttonText: "Discover App Marketing",
    stat: "10M+",
    statText: "App Installs Driven",
    subServices: ["App Store Optimization", "User Acquisition", "App Retention"],
    imageColor: "bg-green-100"
  },
  martech: {
    id: "martech",
    title: "Marketing Technology & Automation",
    description: "Streamline your marketing operations with cutting-edge automation and technology stacks.",
    buttonText: "Discover Martech Services",
    stat: "35%",
    statText: "Efficiency Increased",
    subServices: ["Marketing Automation", "CRM Integration", "Analytics Setup"],
    imageColor: "bg-orange-100"
  }
};

type TabKey = keyof typeof servicesData;

export default function DataBackedServices() {
  const [activeTab, setActiveTab] = useState<TabKey>("content");

  const activeData = servicesData[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-heading">
            Data Backed Services to Grow Your Revenue
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            To experience 360-degree growth for your business, you need a 360-degree approach.
            <br />
            Do you want to rank higher on search engines, optimize ad campaigns, or enhance visibility? Leveraging the right data and marketing channels is key to sustained business growth. Techmagnate can help. Our core expertise lies in SEO-from Enterprise SEO to Hyperlocal SEO, Martech, and search marketing-powering comprehensive digital growth. Since 2006, we have driven transformational growth for our clients. Our vision is to empower 300+ clients by 2030.
            <br />
            Partner with the best in digital marketing. Let's drive measurable growth together.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12 border-b border-gray-100 pb-4">
          {[
            { id: "seo", label: "Search Engine Optimization" },
            { id: "paid", label: "Paid Marketing" },
            { id: "content", label: "Content Marketing" },
            { id: "mobile", label: "Mobile App Marketing" },
            { id: "martech", label: "Marketing Technology & Automation" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabKey)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#008c4a] text-white shadow-md"
                  : "bg-transparent text-gray-600 hover:text-[#008c4a] hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-[#f0f9ff] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 min-h-[400px]">
          
          {/* Left: Text Content */}
          <div className="flex-1 z-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-heading">{activeData.title}</h3>
            <p className="text-gray-700 mb-8 max-w-md">
              {activeData.description}
            </p>
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20">
              {activeData.buttonText}
            </button>
          </div>

          {/* Middle: Floating Stat & Image Placeholder */}
          <div className="flex-1 relative flex justify-center items-end h-full min-h-[300px] z-10">
            
            {/* Stat Bubble */}
            <div className="absolute top-10 left-0 bg-white rounded-2xl p-4 shadow-xl z-20 transform -translate-x-1/4">
              <div className="text-2xl font-black text-[#6db33f] leading-none mb-1">{activeData.stat}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase leading-tight max-w-[80px]">
                {activeData.statText}
              </div>
            </div>

            {/* Placeholder for the person holding laptop */}
            <div className="relative w-64 h-80 flex items-end justify-center">
              {/* Abstract shape replacing image for now */}
              <div className={`w-full h-[80%] rounded-t-[4rem] rounded-b-xl ${activeData.imageColor} border-4 border-white shadow-lg relative flex items-center justify-center overflow-hidden transition-colors duration-500`}>
                  <div className="text-center p-4">
                     <div className="w-16 h-16 bg-white/50 rounded-full mx-auto mb-2 backdrop-blur-sm"></div>
                     <div className="w-24 h-3 bg-white/50 rounded-full mx-auto mb-2"></div>
                     <div className="w-16 h-3 bg-white/50 rounded-full mx-auto"></div>
                  </div>
              </div>
            </div>
          </div>

          {/* Right: Sub Services List */}
          <div className="flex-1 flex flex-col gap-4 z-10 w-full">
            {activeData.subServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white px-6 py-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-gray-800 font-semibold flex items-center justify-between group cursor-pointer"
              >
                <span>{service}</span>
                <span className="text-gray-300 group-hover:text-[#008c4a] transition-colors">&rarr;</span>
              </div>
            ))}
          </div>

          {/* Background Decorative Element */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
}
