"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import { motion } from "framer-motion";

interface GradientButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, gradientFrom, gradientTo, glowColor, ...props }, ref) => {
    const defaultFrom = "from-primary";
    const defaultTo = "to-secondary";
    const defaultGlow = "rgba(0, 255, 148, 0.5)";

    return (
      <div className="relative inline-block">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative group inline-block"
        >
          <div
            className={cn(
              "absolute inset-0 rounded-md bg-gradient-to-r blur-sm transition-opacity duration-300 group-hover:opacity-80 opacity-40 -z-10",
              gradientFrom || defaultFrom,
              gradientTo || defaultTo
            )}
            style={{ 
              boxShadow: `0 0 10px 1px ${glowColor || defaultGlow}`,
              transform: 'scale(0.95)'
            }}
          />
          <Button
            ref={ref}
            className={cn(
              "relative bg-gradient-to-r border-0 text-primary-foreground font-medium transition-all duration-200",
              gradientFrom || defaultFrom,
              gradientTo || defaultTo,
              className
            )}
            {...props}
          >
            {children}
          </Button>
        </motion.div>
      </div>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };