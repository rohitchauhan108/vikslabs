"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Phone,
  ExternalLink,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";

interface QuickLinkItem {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
  iconBg: string;
  isExternal?: boolean;
}

const contactLinks: QuickLinkItem[] = [
  {
    id: "whatsapp",
    label: "WhatsApp 24/7",
    href: "https://wa.me/919389958986",
    icon: MessageCircle,
    iconBg: "bg-[#25D366] text-white",
    isExternal: true,
  },
  {
    id: "call",
    label: "Call +91-9389958986",
    href: "tel:+919389958986",
    icon: Phone,
    iconBg: "bg-[#059669] text-white",
    isExternal: false,
  },
  {
    id: "google-reviews",
    label: "Google Reviews (GMB)",
    href: "https://google.com",
    icon: FaGoogle,
    iconBg: "bg-[#EA4335] text-white",
    isExternal: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn Profile",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    iconBg: "bg-[#0A66C2] text-white",
    isExternal: true,
  },
  {
    id: "facebook",
    label: "Facebook Page",
    href: "https://facebook.com",
    icon: FaFacebookF,
    iconBg: "bg-[#1877F2] text-white",
    isExternal: true,
  },
];

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close widget when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-50 font-sans text-slate-800"
    >
      {/* Floating Panel */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-84 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-2xl shadow-emerald-950/10 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100 bg-slate-50/80">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-emerald-100 text-[#00a859]">
                <ShieldCheck size={16} />
              </span>
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-700">
                CONNECT WITH VIKS LABS
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-lg hover:bg-slate-200/60"
              aria-label="Close widget"
            >
              <X size={16} />
            </button>
          </div>

          {/* Contact & Social Links */}
          <div className="p-3 space-y-1.5 bg-white">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50/70 hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200/80 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${item.iconBg}`}
                    >
                      <Icon size={15} />
                    </span>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-900 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  {item.isExternal && (
                    <ExternalLink
                      size={13}
                      className="text-slate-400 group-hover:text-emerald-600 transition-colors"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Bottom Action CTA Button */}
          <div className="p-3 bg-slate-50/80 border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#0f172a] hover:bg-[#00a859] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-emerald-500/20 active:scale-[0.98]"
            >
              <Calendar size={14} />
              Book Free Consultation
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Icon */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open contact option menu"
          className="relative w-14 h-14 rounded-full bg-[#00a859] hover:bg-[#008c4a] text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 border-2 border-white hover:scale-105 active:scale-95 transition-all duration-200 group"
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <>
              {/* Pulse Animation Ring */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
              </span>
              <MessageCircle
                size={26}
                className="text-white group-hover:rotate-12 transition-transform"
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
}