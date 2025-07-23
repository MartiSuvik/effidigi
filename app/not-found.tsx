"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/particles-background";
import { GradientButton } from "@/components/ui/gradient-button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient-bg">
      <ParticlesBackground />
      
      <div className="container px-4 md:px-6 py-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center"
        >
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold terminal-text">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold">Lehte ei leitud</h2>
            <p className="text-muted-foreground">
              Otsitavat lehte ei ole võimalik leida. See võib olla aegunud või valesti kirjutatud URL.
            </p>
          </div>
          
          <div className="glass-card p-6 max-w-md mx-auto">
            <div className="terminal-text font-mono text-sm mb-4">
              <div>$ page.find("/leht")</div>
              <div className="text-red-500">Error: Page not found in system</div>
              <div>$ system.redirect("/")</div>
              <div className="text-green-500">Redirecting to homepage...</div>
            </div>
            
            <Link href="/" passHref>
              <GradientButton className="w-full gap-2">
                <Home className="h-4 w-4" />
                Tagasi avalehele
              </GradientButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}