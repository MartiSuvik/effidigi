"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  textAlignment?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  textAlignment = "left",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-10", alignmentClasses[textAlignment], className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="terminal-text">&gt; </span>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}