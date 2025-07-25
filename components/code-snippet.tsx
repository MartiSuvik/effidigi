"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  code: string;
  language?: string;
  className?: string;
  typing?: boolean;
  typingSpeed?: number;
}

export function CodeSnippet({
  code,
  language = "typescript",
  className,
  typing = true,
  typingSpeed = 20,
}: CodeSnippetProps) {
  // Always initialize with the full code to match server rendering
  const [displayedCode, setDisplayedCode] = useState(code);

  useEffect(() => {
    if (!typing) return;
    
    // Reset to empty string and start typing animation only on client side
    setDisplayedCode("");
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= code.length) {
        setDisplayedCode(code.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [code, typing, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "bg-black/30 rounded-md p-4 overflow-x-auto",
        className
      )}
    >
      <pre className="font-mono text-sm text-green-400">
        <code className={`language-${language}`}>
          {displayedCode}
          {typing && displayedCode.length < code.length && (
            <span className="animate-pulse">|</span>
          )}
        </code>
      </pre>
    </motion.div>
  );
}