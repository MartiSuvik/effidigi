"use client";

import { motion } from "framer-motion";
import { TerminalCard } from "@/components/ui/terminal-card";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <TerminalCard title="/article-content">
        <div className="prose prose-invert max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: content }}
            className="blog-content"
          />
        </div>
      </TerminalCard>
    </motion.div>
  );
}