"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/particles-background";
import { GradientButton } from "@/components/ui/gradient-button";
import { RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
            <h1 className="text-4xl md:text-6xl font-bold terminal-text">Viga</h1>
            <h2 className="text-xl md:text-2xl font-bold">Midagi läks valesti</h2>
            <p className="text-muted-foreground">
              Palun vabandust, kuid süsteemis on tekkinud viga. Proovige lehte värskendada või naasge avalehele.
            </p>
          </div>
          
          <div className="glass-card p-6 max-w-md mx-auto">
            <div className="terminal-text font-mono text-sm mb-4">
              <div>$ system.check()</div>
              <div className="text-red-500">Error: {error.message || "Unknown error occurred"}</div>
              <div>$ system.repair()</div>
              <div className="text-amber-500">Attempting to recover...</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton 
                onClick={reset}
                className="flex-1 gap-2"
              >
                <RefreshCcw className="h-4 w-4" />
                Proovi uuesti
              </GradientButton>
              
              <Link href="/" passHref>
                <GradientButton 
                  variant="outline"
                  className="flex-1 gap-2"
                >
                  <Home className="h-4 w-4" />
                  Avalehele
                </GradientButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}