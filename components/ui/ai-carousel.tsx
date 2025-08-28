"use client";

import React, {
  useRef,
  useEffect,
  useState,
  TouchEvent,
  ReactNode,
} from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { useTranslation } from "@/lib/i18n";

export interface Carousel3DItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

interface Carousel3DProps {
  items?: Carousel3DItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
  title?: string;
  subtitle?: string;
  tagline?: string;
  isMobileSwipe?: boolean;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

const Carousel3D = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 780,
  title,
  subtitle,
  tagline = "",
  isMobileSwipe = true,
}: Carousel3DProps) => {
  const { t } = useTranslation();
  
  // Get employee data from translations if no items provided
  const defaultEmployees = [
    {
      id: 1,
      title: t('aiEmployees.karl.name'),
      brand: t('aiEmployees.karl.role'),
      description: t('aiEmployees.karl.description'),
      imageUrl: "https://res.cloudinary.com/effichat/image/upload/karl_AI.png",
      link: "#"
    },
    {
      id: 2,
      title: t('aiEmployees.sandra.name'),
      brand: t('aiEmployees.sandra.role'),
      description: t('aiEmployees.sandra.description'),
      imageUrl: "https://res.cloudinary.com/effichat/image/upload/sandra_AI.png",
      tags: ["Telefoniteenindus", "Broneerimine", "Küsimused"],
      link: "#"
    },
    {
      id: 3,
      title: t('aiEmployees.silver.name'),
      brand: t('aiEmployees.silver.role'),
      description: t('aiEmployees.silver.description'),
      imageUrl: "https://res.cloudinary.com/effichat/image/upload/v1756362589/silver_ai.png",
      tags: ["Veebichat", "Küsimused", "Tugi"],
      link: "#"
    },
    {
      id: 4,
      title: t('aiEmployees.helen.name'),
      brand: t('aiEmployees.helen.role'),
      description: t('aiEmployees.helen.description'),
      imageUrl: "https://res.cloudinary.com/effichat/image/upload/helen_AI.png",
      tags: ["CRM", "Automatiseerimine", "Müük"],
      link: "#"
    },
    {
      id: 5,
      title: t('aiEmployees.markus.name'),
      brand: t('aiEmployees.markus.role'),
      description: t('aiEmployees.markus.description'),
      imageUrl: "https://res.cloudinary.com/effichat/image/upload/markus_AI.png",
      tags: ["Broneerimine", "Teatamine", "Reserveerimine"],
      link: "#"
    }
  ];

  const employees = items || defaultEmployees;
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % employees.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, employees.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % employees.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + employees.length) % employees.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % employees.length)
      return "translate-x-[100%] scale-95 opacity-30 z-10";
    if (index === (active - 1 + employees.length) % employees.length)
      return "translate-x-[-100%] scale-95 opacity-30 z-10";
    return "scale-90 opacity-0";
  };

  return (
    <section
      id="carousel3d"
      className="bg-transparent min-w-full mx-auto flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Title and Subtitle */}
        <div className="text-center space-y-2">
          <WordPullUp
            words={title || t('aiEmployees.title')}
            className="text-6xl md:text-7xl font-bold leading-tight"
            animate={isInView}
            wrapperFramerProps={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3,
                },
              },
            }}
            framerProps={{
              hidden: { y: 30, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
          />
          <p className="text-lg text-muted-foreground">
            {subtitle || t('aiEmployees.subtitle')}
          </p>
        </div>

        <div
          className="relative overflow-hidden h-[600px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {employees.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-sm transform transition-all duration-500 ${getCardAnimationClass(
                  index
                )}`}
              >
                <Card
                  className="overflow-hidden h-[780px] flex flex-col bg-transparent border-0 shadow-none relative"
                >
                  {/* Image section - 2/3 of card height with tech overlay */}
                  <div className="flex-[2] flex items-center justify-center overflow-hidden relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Tech-style HUD overlay positioned at the very bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                      <div className="p-10 space-y-1">
                        {/* Bold gradient name */}
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <WordPullUp
                            key={`title-${item.id}-${index === active ? 'active' : 'inactive'}`}
                            words={item.title}
                            as="h3"
                            animate={index === active}
                            className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent leading-tight"
                            wrapperFramerProps={{
                              hidden: { opacity: 0 },
                              show: {
                                opacity: 1,
                                transition: {
                                  staggerChildren: 0.1,
                                  delayChildren: 0.2,
                                },
                              },
                            }}
                            framerProps={{
                              hidden: { y: 10, opacity: 0 },
                              show: { y: 0, opacity: 1 },
                            }}
                          />
                        </div>
                        
                        {/* Brand underneath aligned left */}
                        <div className="text-left">
                          <WordPullUp
                            key={`brand-${item.id}-${index === active ? 'active' : 'inactive'}`}
                            words={item.brand}
                            as="p"
                            animate={index === active}
                            className="text-primary text-base font-semibold tracking-wide text-left"
                            wrapperFramerProps={{
                              hidden: { opacity: 0 },
                              show: {
                                opacity: 1,
                                transition: {
                                  staggerChildren: 0.1,
                                  delayChildren: 0.4,
                                },
                              },
                            }}
                            framerProps={{
                              hidden: { y: 10, opacity: 0 },
                              show: { y: 0, opacity: 1 },
                            }}
                          />
                        </div>
                        
                        {/* Description in tiny font */}
                        <p className="text-gray-300 text-[20px] leading-tight max-w-full line-clamp-2 pt-1 text-left">
                          {item.description}
                        </p>
                        
                        {/* Tech-style tags in one row */}
                      </div>
                    </div>
                  </div>

                  {/* Hidden text section to maintain card structure */}
                  <div className="flex-[1] opacity-0 pointer-events-none">
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110"
                onClick={() =>
                  setActive((prev) => (prev - 1 + employees.length) % employees.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110"
                onClick={() => setActive((prev) => (prev + 1) % employees.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {employees.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "bg-gray-500 w-5"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export function AICarousel() {
  return <Carousel3D />;
}
