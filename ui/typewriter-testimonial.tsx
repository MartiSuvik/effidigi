"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TypewriterTestimonialProps {
  testimonials: Testimonial[];
  className?: string;
  autoPlay?: boolean;
  showNavigation?: boolean;
  typingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterTestimonial({
  testimonials,
  className,
  autoPlay = true,
  showNavigation = true,
  typingSpeed = 30,
  pauseDuration = 3000,
}: TypewriterTestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const currentTestimonial = testimonials[currentIndex];

  const typeText = useCallback(
    (text: string) => {
      setIsTyping(true);
      setDisplayedText('');
      let index = 0;

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    },
    [typingSpeed]
  );

  const nextTestimonial = useCallback(() => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setShowContent(true);
    }, 200);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setShowContent(true);
    }, 200);
  }, [testimonials.length]);

  const goToTestimonial = useCallback((index: number) => {
    if (index !== currentIndex) {
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setShowContent(true);
      }, 200);
    }
  }, [currentIndex]);

  // Initialize first testimonial
  useEffect(() => {
    setShowContent(true);
  }, []);

  // Type text when testimonial changes
  useEffect(() => {
    if (showContent && currentTestimonial) {
      const cleanup = typeText(currentTestimonial.quote);
      return cleanup;
    }
  }, [currentTestimonial, showContent, typeText]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isTyping && showContent) {
      const autoAdvance = setTimeout(() => {
        nextTestimonial();
      }, pauseDuration);

      return () => clearTimeout(autoAdvance);
    }
  }, [autoPlay, isTyping, showContent, pauseDuration, nextTestimonial]);

  if (!testimonials.length) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="text-center space-y-8">
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <Quote className="w-12 h-12 text-primary/30" />
        </motion.div>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          {showContent && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Quote Text with Typewriter Effect */}
              <blockquote className="text-lg md:text-xl text-muted-foreground italic min-h-[3em] flex items-center justify-center">
                <span>
                  "{displayedText}"
                  {isTyping && (
                    <span className="animate-pulse text-primary">|</span>
                  )}
                </span>
              </blockquote>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isTyping ? 0.3 : 1 }}
                className="space-y-1"
              >
                <p className="font-semibold text-foreground">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {showNavigation && testimonials.length > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots Navigation */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted/80"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Progress Bar (Auto-play indicator) */}
        {autoPlay && !isTyping && showContent && (
          <motion.div
            className="w-full bg-muted rounded-full h-1 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: pauseDuration / 1000, ease: "linear" }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}