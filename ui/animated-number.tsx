"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className,
}: AnimatedNumberProps) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();
    const endValue = value;
    const startValue = 0;
    const totalChange = endValue - startValue;
    
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      
      countRef.current = Math.floor(startValue + totalChange * easedProgress);
      setCount(countRef.current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateCount);
      }
    };

    rafRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={cn("font-space-grotesk font-bold", className)}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}