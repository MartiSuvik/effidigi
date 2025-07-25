"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceIconProps {
  icon: LucideIcon;
  title: string;
  gradientColors: [string, string]; // [from-color, to-color]
  className?: string;
}

interface ServiceIconsGridProps {
  services: ServiceIconProps[];
  className?: string;
}

function ServiceIcon({ icon: Icon, title, gradientColors, className }: ServiceIconProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center p-3 rounded-lg bg-card/50 border border-border/50 hover:border-border transition-all duration-200",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={cn(
        "p-2 rounded-full bg-gradient-to-br mb-2",
        gradientColors[0],
        gradientColors[1]
      )}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <span className="text-xs text-muted-foreground text-center leading-tight">
        {title}
      </span>
    </motion.div>
  );
}

export function ServiceIconsGrid({ services, className }: ServiceIconsGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 gap-3 max-w-6xl mx-auto",
      className
    )}>
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.02 }}
        >
          <ServiceIcon {...service} />
        </motion.div>
      ))}
    </div>
  );
}