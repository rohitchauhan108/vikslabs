"use client";

import React from "react";
import Image from "next/image";

export default function ClientsGrid() {
  const clients = [
    {
      name: "Luxmi Vilas",
      workDone: "Google Business Profile",
      url: "https://luxmivilas.com/gallery/",
      // Replace with your actual logo path (e.g., "/logos/luxmivilas.png")
      logoSrc: "/client/1.png",
      fallbackText: "Luxmi Vilas",
    },
    {
      name: "Shastra Diya Batti",
      workDone: "Website Development + Ads",
      url: "https://shastagheediyabatti.com/",
      logoSrc: "/client/2.png",
      fallbackText: "Shastra",
    },
    {
      name: "The Coffee Bean Villa",
      workDone: "SEO & Meta Ads",
      url: "https://www.coffeebeanvilla.com/",
      logoSrc: "/client/3.png",
      fallbackText: "Coffee Bean Villa",
    },
    {
      name: "SS Creations Aasma",
      workDone: "Website Creation",
      url: "https://sscreationsaasma.com/",
      logoSrc: "/client/4.png",
      fallbackText: "SS Creations",
    },
    {
      name: "Siddhi Tours & Travels",
      workDone: "Social Media Marketing",
      url: "https://siddhitoursandtravels.com/",
      logoSrc: "/client/5.png",
      fallbackText: "Siddhi Tours",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold text-[#006080] tracking-[0.2em] uppercase mb-4">
            Clients & Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading leading-tight max-w-3xl mx-auto">
            Working with Leading Brands To Achieve Business Goals
          </h2>
        </div>

        {/* Logos & Work Done Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center cursor-pointer transition-all duration-300"
            >
              {/* Logo Container (Replace src with your logo image) */}
              <div className="h-20 w-36 flex items-center justify-center  group-hover:grayscale-0 group-hover:scale-105 transition-all mb-3">
                <img
                  src={client.logoSrc}
                  alt={`${client.name} Logo`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback visual if logo image isn't loaded yet
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerText = client.fallbackText;
                  }}
                />
              </div>

              {/* Client Name */}
              <span className="text-gray-900 font-bold text-sm mb-1 group-hover:text-[#006080] transition-colors">
                {client.name}
              </span>

              {/* Work Done Highlight */}
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                {client.workDone}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}