"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";

// FAQ categories and data
const faqCategories = [
  { id: "seo", name: "SEO Services" },
  { id: "ppc", name: "PPC and Paid Advertising" },
  { id: "social", name: "Social Media Marketing" },
  { id: "content", name: "Content Marketing" },
  { id: "aso", name: "ASO (App Store Optimization)" },
  { id: "martech", name: "Martech Services" },
  { id: "process", name: "Process-Related" },
];

const faqData = {
  seo: [
    {
      id: 1,
      question: "Which SEO agency in India can help my brand rank in Google AI Mode?",
      answer: "Techmagnate is a specialist Google AI Mode SEO agency with a proven track record of helping brands get cited in AI-generated overviews and summaries. Our process covers everything from semantic content structuring and schema markup to E-E-A-T building and passage-level optimization – the exact signals Google AI Mode uses to decide which brands to feature and trust."
    },
    {
      id: 2,
      question: "What can Techmagnate SEO service do for my business in Kolkata?",
      answer: "Techmagnate's Kolkata SEO services can boost your local and national visibility, drive targeted organic traffic, improve rankings for key search terms, enhance user experience, and increase conversions through data-driven strategies tailored to your business goals and local market in Kolkata."
    },
    {
      id: 3,
      question: "How does Techmagnate's SEO strategy differ from other agencies in Delhi?",
      answer: "Techmagnate's Delhi SEO strategy focuses on holistic, sustainable growth combining technical SEO, content excellence, AI optimization, and data analytics, with transparent reporting and a dedicated team aligned to your business objectives."
    },
    {
      id: 4,
      question: "Does Techmagnate offer AI-driven or LLM-optimized SEO solutions?",
      answer: "Yes! We are at the forefront of AI and LLM optimization, helping brands maximize visibility in Google AI Overviews and other AI-powered search experiences through specialized content structuring, schema, and E-E-A-T strategies."
    }
  ],
  ppc: [
    { id: 1, question: "What PPC services do you offer?", answer: "We offer comprehensive PPC services including Google Ads, Facebook/Instagram Ads, LinkedIn Ads, programmatic advertising, and remarketing campaigns, all optimized for maximum ROI." },
    { id: 2, question: "How do you optimize ad campaigns?", answer: "Our optimization process includes A/B testing, keyword refinement, audience targeting adjustments, bid management, and continuous performance analysis to ensure your campaigns deliver the best possible results." }
  ],
  social: [
    { id: 1, question: "Which social platforms do you manage?", answer: "We manage all major social platforms including Facebook, Instagram, LinkedIn, Twitter/X, YouTube, and Pinterest with platform-specific strategies tailored to your audience." },
    { id: 2, question: "Do you handle social media advertising?", answer: "Yes, we provide end-to-end social media advertising services from creative development to campaign management and performance reporting." }
  ],
  content: [
    { id: 1, question: "What content services do you provide?", answer: "We offer blog writing, article creation, website copy, social media content, email marketing content, whitepapers, case studies, and more, all optimized for SEO and engagement." },
    { id: 2, question: "Do you have native English writers?", answer: "Yes, our team includes native English writers with expertise in various industries, ensuring high-quality, engaging, and grammatically correct content." }
  ],
  aso: [
    { id: 1, question: "What is ASO and why is it important?", answer: "App Store Optimization (ASO) is the process of optimizing mobile apps to rank higher in app store search results, increasing visibility and organic downloads." },
    { id: 2, question: "How do you improve app store rankings?", answer: "We optimize app titles, descriptions, keywords, screenshots, videos, ratings, and reviews to improve your app's visibility and conversion rate in app stores." }
  ],
  martech: [
    { id: 1, question: "What martech tools do you use?", answer: "We work with a wide range of martech tools including CRM systems, marketing automation platforms, analytics tools, and more, selecting the best stack for your business needs." },
    { id: 2, question: "Do you offer martech consulting?", answer: "Yes, we provide comprehensive martech consulting to help you select, implement, and optimize the right technology stack for your marketing goals." }
  ],
  process: [
    { id: 1, question: "What is your onboarding process?", answer: "Our onboarding process includes discovery calls, goal setting, strategy development, and implementation planning to ensure a smooth start to our partnership." },
    { id: 2, question: "How often do you report on performance?", answer: "We provide regular performance reports (weekly, bi-weekly, or monthly, depending on your preference) along with insights and recommendations for improvement." }
  ]
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("seo");
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(1);
  const [categoryScrollIndex, setCategoryScrollIndex] = useState(0);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const scrollCategories = (direction: "left" | "right") => {
    const newIndex = direction === "left" 
      ? Math.max(0, categoryScrollIndex - 1)
      : Math.min(faqCategories.length - 5, categoryScrollIndex + 1);
    setCategoryScrollIndex(newIndex);
  };

  const currentFAQs = faqData[activeCategory as keyof typeof faqData];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 font-heading">
          Frequently Asked Questions
        </h2>

        {/* Category Tabs with Scroll */}
        <div className="relative mb-10">
          <button
            onClick={() => scrollCategories("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#006080] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden px-12">
            <div 
              className="flex gap-3 transition-transform duration-300"
              style={{ transform: `translateX(-${categoryScrollIndex * 120}px)` }}
            >
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-[#006080] text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#006080] hover:text-[#006080]"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollCategories("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#006080] transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto">
          {currentFAQs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full bg-white rounded-xl p-5 text-left shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full border border-[#006080] text-[#006080] flex items-center justify-center">
                  {openQuestionId === faq.id ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </div>
              </button>

              {openQuestionId === faq.id && (
                <div className="bg-sky-50 rounded-b-xl px-5 pb-5 pt-2 -mt-1">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
