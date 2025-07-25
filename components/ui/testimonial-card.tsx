"use client";

import { memo } from "react";
import Image from "next/image";
import { TerminalCard } from "./terminal-card";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = memo(function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      style={{
        // Force hardware acceleration and optimize rendering
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        width: '320px', // Fixed width to prevent layout shifts
      }}
    >
      <TerminalCard title={`/${testimonial.type.toLowerCase().replace(/\s+/g, '-')}-testimonial`} variant="secondary">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Quote className="w-6 h-6 text-secondary flex-shrink-0" />
            <h3 className="text-lg font-bold truncate">{testimonial.type}</h3>
          </div>
          
          <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed">
            {testimonial.content}
          </p>
          
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEAgEF/8QAJRAAAgEDAwMFAQAAAAAAAAAAAQIAAwQRBSExQVFhEhMicYGRof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAWwA="
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-foreground truncate">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </TerminalCard>
    </div>
  );
});