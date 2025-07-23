"use client";

import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/particles-background";

export function AITestSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* This section is now empty - content moved to hero section */}
      </div>
    </section>
  );
}