"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { TerminalCard } from "@/components/ui/terminal-card";
import { GradientButton } from "@/components/ui/gradient-button";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <TerminalCard title={`/${post.slug}`} variant="primary">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold line-clamp-2">
                {post.title}
              </h3>
              
              {post.excerpt && (
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {post.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString('et-EE')}</span>
                </div>
              )}
              
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime} min</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <GradientButton size="sm" variant="outline" className="gap-2 group">
                Loe edasi
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </GradientButton>
            </div>
          </div>
        </TerminalCard>
      </motion.div>
    </Link>
  );
}