"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TerminalCardProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function TerminalCard({ 
  className, 
  title, 
  children, 
  variant = "primary" 
}: TerminalCardProps) {
  const isSecondary = variant === "secondary";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        isSecondary ? "glass-card-secondary" : "glass-card",
        "overflow-hidden",
        className
      )}
    >
      {title && (
        <div className="border-b border-white/10 bg-white/5 px-4 py-2 flex items-center">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className={cn(
            "text-sm font-mono",
            isSecondary ? "secondary-text" : "terminal-text"
          )}>
            {title}
          </p>
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </motion.div>
  );
}