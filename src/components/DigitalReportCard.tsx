import React from "react";

export default function DigitalReportCard() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#f0fcfc] to-[#e6f7fa] p-10 md:p-16 border border-teal-50 shadow-sm">
        
        {/* Background Wave Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/waves.png')`,
            backgroundSize: '300px'
          }}
        ></div>

        {/* Decorative sweeping lines (CSS based) */}
        <svg className="absolute bottom-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path d="M0,300 C200,200 400,300 600,200 C800,100 1000,250 1000,250 L1000,300 L0,300 Z" fill="none" stroke="#0ea5e9" strokeWidth="2"/>
          <path d="M0,300 C250,250 350,150 700,250 C900,300 1000,200 1000,200 L1000,300 L0,300 Z" fill="none" stroke="#38bdf8" strokeWidth="1"/>
        </svg>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-500 tracking-widest mb-3 uppercase">
              NEW &middot; FY 2025-26 DIGITAL REPORT CARD
            </p>
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-10 leading-tight font-heading">
              103 brands. One year. Real numbers.
            </h2>
            
            <div className="mb-8">
              <p className="text-gray-700 font-medium mb-1 text-lg">We publish the numbers most agencies keep quiet about.</p>
              <p className="text-gray-900 font-bold text-lg">Get the full Digital Report Card.</p>
            </div>

            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 group">
              Digital Report Card
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="flex-[1.2] w-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              
              {/* Stat 1 */}
              <div className="relative">
                <div className="text-5xl font-black text-[#6db33f] tracking-tighter mb-2">104%</div>
                <p className="text-sm text-gray-700 font-medium leading-snug">
                  average traffic growth across all clients
                </p>
                {/* Vertical Divider */}
                <div className="absolute right-[-1rem] top-2 bottom-2 w-px bg-gray-200 hidden md:block"></div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-5xl font-black text-[#6db33f] tracking-tighter mb-2">106%</div>
                <p className="text-sm text-gray-700 font-medium leading-snug">
                  average lead growth across all clients
                </p>
              </div>

              {/* Stat 3 */}
              <div className="relative">
                <div className="text-5xl font-black text-[#6db33f] tracking-tighter mb-2">266M</div>
                <p className="text-sm text-gray-700 font-medium leading-snug">
                  search volume now ours inside AI Overviews
                </p>
                {/* Vertical Divider */}
                <div className="absolute right-[-1rem] top-2 bottom-2 w-px bg-gray-200 hidden md:block"></div>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-5xl font-black text-[#6db33f] tracking-tighter mb-2">103%</div>
                <p className="text-sm text-gray-700 font-medium leading-snug">
                  growth in top-five search visibility
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
