import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesBar from "@/components/ServicesBar";
import TrafficIncrease from "@/components/TrafficIncrease";
import DigitalReportCard from "@/components/DigitalReportCard";
import ClientsGrid from "@/components/ClientsGrid";
import DataBackedServices from "@/components/DataBackedServices";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-900 font-sans">
      <Hero />
      <ServicesBar />
      <TrafficIncrease />
      <DigitalReportCard />
      <ClientsGrid />
      <DataBackedServices />
      <Testimonials />
      <FAQ />
      <Contact />
      
    </main>
  );
}
