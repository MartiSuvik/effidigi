"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";

// Dynamically import CustomCursor with ssr: false to prevent hydration errors
const CustomCursor = dynamic(() => import("@/components/cursor").then(mod => mod.CustomCursor), {
  ssr: false
});

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const targetId = link.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
          
          // Update URL without reloading the page
          window.history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      
      <div className="pt-24">
        <HeroSection />
      </div>
      
      <div id="features">
        <FeaturesSection />
      </div>
      
      <ProcessSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <SiteFooter />
    </main>
  );
}