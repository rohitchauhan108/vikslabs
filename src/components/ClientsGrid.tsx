import React from "react";

export default function ClientsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <div className="mb-16">
          <p className="text-xs font-bold text-[#006080] tracking-[0.2em] uppercase mb-4">
            Clients
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading leading-tight max-w-3xl mx-auto">
            Working with the Largest Enterprises To Achieve Business Goals
          </h2>
        </div>

        {/* Logos Grid using CSS grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          
          {/* Mock Logo 1 - Bajaj Finserv */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-8 h-8 bg-[#005cb9] rounded-full flex items-center justify-center text-white font-bold text-lg">B</div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[#005cb9] font-black text-sm uppercase">Bajaj</span>
              <span className="text-[#005cb9] font-black text-sm uppercase">Finserv</span>
            </div>
          </div>

          {/* Mock Logo 2 - GIIS */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-8 h-8 rounded-full border-[4px] border-t-orange-500 border-r-green-500 border-b-blue-500 border-l-yellow-500"></div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-gray-800 font-bold text-[8px] uppercase">Global Indian</span>
              <span className="text-gray-800 font-bold text-[8px] uppercase">International</span>
              <span className="text-gray-800 font-bold text-[8px] uppercase">School</span>
            </div>
          </div>

          {/* Mock Logo 3 - Hero Fincorp */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-4 h-8 bg-[#00b050]"></div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[#00b050] font-black text-sm uppercase tracking-tight">Hero</span>
              <span className="text-gray-600 font-bold text-[10px] uppercase tracking-widest">Fincorp</span>
            </div>
          </div>

          {/* Mock Logo 4 - Hyundai */}
          <div className="flex flex-col items-center gap-1 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-10 h-6 border-2 border-[#002c5f] rounded-[50%] flex items-center justify-center italic text-[#002c5f] font-bold text-xs">H</div>
            <span className="text-[#002c5f] font-black text-[10px] uppercase tracking-widest">Hyundai</span>
          </div>

          {/* Mock Logo 5 - IIFL */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-8 h-8 bg-[#f58220] rounded flex flex-wrap gap-1 p-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[#002e6e] font-black text-xl tracking-tighter">IIFL</span>
              <span className="text-gray-500 font-bold text-[8px] uppercase tracking-widest">Finance</span>
            </div>
          </div>

          {/* Mock Logo 6 - BLK MAX */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-6 h-6 bg-[#004b87] rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rotate-45"></div>
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[#004b87] font-black text-sm">BLK-MAX</span>
              <span className="text-gray-500 font-medium text-[6px] uppercase tracking-wider">Super Speciality Hospital</span>
            </div>
          </div>

          {/* Mock Logo 7 - Indira IVF */}
          <div className="flex flex-col items-start gap-1 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="text-[#e3004f] font-black text-lg tracking-tight">INDIRA IVF</div>
            <span className="text-gray-500 font-bold text-[6px] uppercase tracking-[0.2em]">Fertility & IVF Centre</span>
          </div>

          {/* Mock Logo 8 - One Card */}
          <div className="flex flex-col items-center gap-0 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="text-black font-black text-2xl lowercase tracking-tighter leading-none">one</div>
            <div className="text-black font-black text-sm lowercase tracking-tight">card</div>
          </div>

          {/* Mock Logo 9 - Pigeon */}
          <div className="flex items-center grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="bg-[#e31837] text-white px-3 py-1 rounded-full font-bold italic text-xl pr-6 relative">
              Pigeon
              <div className="absolute right-2 top-2 w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Mock Logo 10 - Axis Max */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-6 h-6 bg-[#97144d] rotate-45 skew-x-12"></div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[#97144d] font-black text-xs uppercase tracking-tight">Axis Max</span>
              <span className="text-[#97144d] font-medium text-[8px] uppercase tracking-wider">Life Insurance</span>
            </div>
          </div>

          {/* Mock Logo 11 - L&T Finance */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-serif font-bold text-xs">L&T</div>
            <span className="text-black font-bold text-sm">Finance</span>
          </div>

          {/* Mock Logo 12 - Simpolo */}
          <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white italic font-bold text-xs">S</div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-gray-700 font-bold text-sm lowercase">Simpolo</span>
              <span className="text-gray-400 font-medium text-[8px] uppercase tracking-widest">Ceramics</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
