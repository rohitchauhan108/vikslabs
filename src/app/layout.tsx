import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

// Import layout components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "The Viklabs - Digital Marketing Agency",
  description:
    "The Viklabs — Igniting Digital Domination. Transform your business with data-driven SEO, PPC, social media, and AI-powered marketing solutions.",
  icons: {
    icon: [
      { url: "/favicon.png" },
    ],
   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.className} ${dmSans.variable} ${montserrat.variable} bg-white text-slate-800 antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        {/* Global Navigation Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Fixed Floating Contact & Social Widget */}
        <FloatingContactWidget />
      </body>
    </html>
  );
}