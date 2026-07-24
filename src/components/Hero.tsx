import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#004e6e] via-[#006b5b] to-[#008c4a] pt-24 pb-32 relative overflow-hidden">
      {/* Decorative dot grid background pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-white pr-8">
          <p className="text-[#a3e635] font-semibold mb-4 text-lg">We make sure you get found.</p>
          <h1 className="text-[3.5rem] leading-[1.1] font-bold mb-6 tracking-tight">
            Own Every Search Result – From Google Rankings to AI Answers
          </h1>
          <p className="text-lg text-gray-100 mb-10 leading-relaxed font-light">
            Your customers don't just search anymore. They ask ChatGPT, Gemini, Perplexity and Google AI. We make sure your brand gets found everywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20">
              Speak to an SEO Expert &rarr;
            </button>
            <button className="border border-white/40 hover:bg-white hover:text-[#004e6e] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
              Our Services &rarr;
            </button>
          </div>
        </div>

        {/* Right Content - Abstract Stats Graphic */}
        <div className="relative">
          {/* Glassmorphism Container */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex shadow-2xl relative">
            
            {/* Subtle glowing orb behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/20 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Left Column: Mock Search Results */}
            <div className="flex-1 space-y-4 pr-8 border-r border-white/20 relative z-10">
              
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-4 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">B</div>
                  <span className="font-bold text-sm text-gray-800">Bajaj Finserv</span>
                </div>
                <div className="text-blue-600 text-xs font-medium hover:underline cursor-pointer">
                  Gold loan interest rates and charges in Bangalore
                </div>
                <div className="text-[10px] text-gray-500 mt-1 line-clamp-1">
                  Apply for a gold loan in Bangalore with Bajaj Finance at low interest rates starting from 8.50% p.a.
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-4 shadow-lg transform transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">M</div>
                  <span className="font-bold text-sm text-gray-800">Muthoot Finance</span>
                </div>
                <div className="text-blue-600 text-xs font-medium hover:underline cursor-pointer">
                  Best Gold Loan Online - Apply Loan Against Gold in India
                </div>
                <div className="text-[10px] text-gray-500 mt-1 line-clamp-1">
                  Apply for a gold loan online at Muthoot Finance, offering gold loans from Rs. 1500 to Rs. 1 crore.
                </div>
              </div>

            </div>

            {/* Right Column: Circular Chart */}
            <div className="flex-1 flex flex-col items-center justify-center pl-8 relative z-10">
              <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                {/* SVG Donut Chart */}
                <svg className="w-full h-full transform -rotate-90 absolute inset-0" viewBox="0 0 100 100">
                  {/* Background track */}
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                  {/* Progress track (25%) */}
                  <circle cx="50" cy="50" r="40" stroke="#a3e635" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="188.4" className="drop-shadow-lg" />
                </svg>
                <div className="text-white text-4xl font-light tracking-tighter">25%</div>
              </div>
              <span className="text-white text-lg font-light tracking-wide">Drop in CTR</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
