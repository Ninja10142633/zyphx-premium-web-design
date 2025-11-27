"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-[0.015] pointer-events-none"></div>
      <div className="fixed inset-0 aurora-bg pointer-events-none"></div>
      
      {/* Content */}
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}