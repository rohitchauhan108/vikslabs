import React from "react";
import { Building2, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-heading">
            Let's Do Great Work Together
          </h2>
          <p className="text-gray-600 text-sm">
            Get in touch with our marketing & development experts today
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Location Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-6">
                  <Building2 className="text-[#006080]" size={32} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800">Delhi</span>
                      <span className="text-xs px-3 py-1 border border-[#006080] text-[#006080] rounded-full">Corporate Office</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">Location:</p>
                    <p className="leading-relaxed">
                      A-24/8, 1st Floor, Rathi Tower, NH-19, Mohan Cooperative Industrial Estate, New Delhi, 110044
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-[#006080]" />
                      <span className="font-semibold">Email:</span>
                    </div>
                    <p className="ml-6">enquiry@thevikslabs.com</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-[#006080]" />
                      <span className="font-semibold">Sales Enquiry:</span>
                    </div>
                    <p className="ml-6">+91-9389958986</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-[#006080]" />
                      <span className="font-semibold">HR:</span>
                    </div>
                    <p className="ml-6">jobs@thevikslabs.com</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button className="px-4 py-2 border border-[#006080] text-[#006080] rounded-full text-sm font-medium hover:bg-[#006080] hover:text-white transition-colors">
                    Get Direction →
                  </button>
                  <button className="text-[#006080] text-sm font-medium hover:underline">
                    View All →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading">
                Contact Info*
              </h3>

              <form className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-[#006080]/50 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Id *"
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-[#006080]/50 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile No*"
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-[#006080]/50 focus:border-transparent"
                  />
                </div>
                
                {/* Updated Services Select Menu */}
                <div>
                  <select 
                    defaultValue="" 
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-[#006080]/50 focus:border-transparent text-gray-700"
                  >
                    <option value="" disabled>Select a Service *</option>
                    <option value="digital-marketing">Digital Marketing Strategy</option>
                    <option value="performance-marketing">Performance Marketing (PPC & Meta Ads)</option>
                    <option value="social-media-marketing">Social Media Marketing (SMM)</option>
                    <option value="website-development">Website Development & UI/UX</option>
                    <option value="full-funnel-growth">All-in-One Growth Package</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <textarea
                    placeholder="Type Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50 focus:outline-none focus:ring-2 focus:ring-[#006080]/50 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex items-center gap-2 mb-4">
                  <input type="checkbox" id="agree" className="w-4 h-4 text-[#006080]" />
                  <label htmlFor="agree" className="text-sm text-gray-600">
                    By registering here, I agree to The Viklabs's Terms of Service and Privacy Policy
                  </label>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-500/20"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}