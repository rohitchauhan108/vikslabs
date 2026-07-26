"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";

// Updated categories aligned with Performance Marketing, SMM, and Web Dev
const faqCategories = [
  { id: "performance", name: "Performance Marketing" },
  { id: "social", name: "Social Media Marketing" },
  { id: "webdev", name: "Website Development" },
  { id: "seo", name: "SEO & Growth" },
  { id: "process", name: "Pricing & Onboarding" },
];

const faqData = {
  performance: [
    {
      id: 1,
      question: "How do your performance marketing campaigns ensure a positive ROI?",
      answer: "We focus on data-driven targeting across Google Ads, Meta Ads (Instagram & Facebook), and LinkedIn. By constantly testing ad creative, refining audience segmentation, and optimizing landing pages, we focus purely on cost-per-acquisition (CPA) and return on ad spend (ROAS)."
    },
    {
      id: 2,
      question: "Which ad platforms do you specialize in?",
      answer: "We manage campaigns across Google Search/Shopping/Display, Meta Ads (Facebook & Instagram), LinkedIn, TikTok, and Retargeting networks depending on where your high-intent audience spends their time."
    },
    {
      id: 3,
      question: "What is the minimum budget required for performance ads?",
      answer: "While we tailor campaign structures to your scale, we recommend a minimum ad spend that allows for sufficient data collection and A/B testing to achieve reliable conversion optimization."
    }
  ],
  social: [
    {
      id: 1,
      question: "What is included in your Social Media Marketing (SMM) services?",
      answer: "Our SMM services cover complete social strategy, creative content production (reels, graphics, copy), community management, influencer partnerships, and organic audience growth across Instagram, LinkedIn, Facebook, and Twitter/X."
    },
    {
      id: 2,
      question: "Do you handle content creation and short-form video (Reels/Shorts)?",
      answer: "Yes! Our in-house team handles copy, visual design, and video editing for short-form video content designed specifically to build brand loyalty and maximize platform engagement."
    },
    {
      id: 3,
      question: "How do you measure social media marketing success?",
      answer: "We track key performance metrics including engagement rate, reach, brand sentiment, website referral traffic, and social-assisted conversions."
    }
  ],
  webdev: [
    {
      id: 1,
      question: "What technology stack do you use for website development?",
      answer: "We build fast, secure, modern websites using React, Next.js, Webflow, WordPress, or Shopify, depending on your business requirements, scalability needs, and content management preferences."
    },
    {
      id: 2,
      question: "Are your custom websites optimized for mobile and speed?",
      answer: "100%. Every website we build is fully responsive, optimized for fast loading speeds, built with Core Web Vitals in mind, and structured for high conversion rates."
    },
    {
      id: 3,
      question: "Will I be able to update content on the website myself?",
      answer: "Yes, we integrate easy-to-use CMS options and provide full documentation and video walkthroughs so your team can easily update text, images, and blog posts without coding."
    }
  ],
  seo: [
    {
      id: 1,
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a sustainable growth strategy. While initial technical and on-page improvements can show momentum in 60-90 days, significant rank and organic lead growth typically compound around 4-6 months."
    },
    {
      id: 2,
      question: "Do you offer Google AI Overview and LLM-optimized SEO?",
      answer: "Yes! We structure content with schema markup, semantic search hierarchy, and strong E-E-A-T signals to help your brand get cited in Google AI Overviews and modern search results."
    }
  ],
  process: [
    {
      id: 1,
      question: "How quickly can we launch our campaigns or web development project?",
      answer: "Onboarding takes less than a week. Once access and brand assets are transferred, performance campaigns typically go live within 5–7 days, while custom web builds take between 2–6 weeks based on scope."
    },
    {
      id: 2,
      question: "How often will we receive performance reports?",
      answer: "We provide live dashboard access alongside bi-weekly or monthly strategic reviews with your dedicated project manager to discuss metrics, learnings, and next steps."
    }
  ]
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("performance");
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(1);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const currentFAQs = faqData[activeCategory as keyof typeof faqData] || [];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-sky-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Everything you need to know about our Performance Marketing, Social Media, and Web Development services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full px-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestionId(1); // Auto open first question on tab switch
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white shadow-md shadow-gray-900/10 scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-500 hover:text-emerald-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {currentFAQs.map((faq) => {
            const isOpen = openQuestionId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "bg-emerald-100 text-emerald-800 rotate-180" : "bg-gray-100 text-gray-500"
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}