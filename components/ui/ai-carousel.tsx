"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const MAX_VISIBILITY = 3;

interface AIEmployeeCardProps {
  employee: {
    id: string;
    name: string;
    role: string;
    description: string;
    avatar: string;
    specialties: string[];
  };
  isActive: boolean;
  offset: number;
  direction: number;
  absOffset: number;
  onClick: () => void;
}

function AIEmployeeCard({ employee, isActive, offset, direction, absOffset, onClick }: AIEmployeeCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsFlipped(!isFlipped);
    } else {
      onClick();
    }
  };

  return (
    <div 
      className="card-container"
      style={{
        '--active': isActive ? 1 : 0,
        '--offset': offset,
        '--direction': direction,
        '--abs-offset': absOffset,
        'pointerEvents': isActive ? 'auto' : 'none',
        'opacity': isActive ? 1 : 0.3,
        'display': absOffset > MAX_VISIBILITY ? 'none' : 'block',
      } as React.CSSProperties}
      onClick={handleClick}
    >
      <div className={`ai-employee-card ${isFlipped ? 'flipped' : ''} bg-gradient-to-b from-background via-muted/20 to-background`}>
        <div className="ai-employee-card-inner">
          {/* Front of card */}
          <div className="ai-employee-card-face ai-employee-card-front">
            <div className="card-image-container">
              <img 
                src={employee.avatar}
                alt={employee.name}
                className="card-avatar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  filter: 'none',
                  zIndex: 20
                }}
              />
            </div>
            
            <div className="card-content">
              <h3 className="card-name">{employee.name}</h3>
              <p className="card-role">{employee.role}</p>
            </div>
          </div>

          {/* Back of card */}
          <div className="ai-employee-card-face ai-employee-card-back">
            <div className="card-description">
              <h3 className="card-name">{employee.name}</h3>
              <p className="description-text">{employee.description}</p>
              
              {employee.specialties && employee.specialties.length > 0 && (
                <div className="specialties">
                  {employee.specialties.map((specialty: string, index: number) => (
                    <span key={index} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AICarousel() {
  const { t } = useTranslation();
  
  // Get employee data from translations
  const employees = [
    {
      id: "karl",
      name: t('aiEmployees.karl.name'),
      role: t('aiEmployees.karl.role'),
      description: t('aiEmployees.karl.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621636/d2fzxkwdvndlenhlezxy.png",
      specialties: ["Andmeanalüüs", "Raportid", "Prognoosid"]
    },
    {
      id: "sandra",
      name: t('aiEmployees.sandra.name'),
      role: t('aiEmployees.sandra.role'),
      description: t('aiEmployees.sandra.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621636/ck7yx757bjfj6uihrdyj.png",
      specialties: ["Telefoniteenindus", "Broneerimine", "Küsimused"]
    },
    {
      id: "silver",
      name: t('aiEmployees.silver.name'),
      role: t('aiEmployees.silver.role'),
      description: t('aiEmployees.silver.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621635/g4v24ilp1cno7r9qyvct.png",
      specialties: ["Veebichat", "Küsimused", "Tugi"]
    },
    {
      id: "helen",
      name: t('aiEmployees.helen.name'),
      role: t('aiEmployees.helen.role'),
      description: t('aiEmployees.helen.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621636/xr2xiyciubgjfwsk2qju.png",
      specialties: ["CRM", "Automatiseerimine", "Müük"]
    },
      {
      id: "markus",
      name: t('aiEmployees.markus.name'),
      role: t('aiEmployees.markus.role'),
      description: t('aiEmployees.markus.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1755259889/nuvocsgegl3ujtkz4spr.png",
      specialties: ["Broneerimine", "Teatamine", "Reserveerimine"]
    }
  ];

  const count = employees.length;
  
  // Start with second card of the middle set (count + 1)
  const [active, setActive] = useState(count + 1);
  
  // Create infinite array by duplicating cards
  const infiniteEmployees = [
    ...employees.map(emp => ({ ...emp, id: `${emp.id}-prev` })), // Previous set
    ...employees, // Current set  
    ...employees.map(emp => ({ ...emp, id: `${emp.id}-next` })) // Next set
  ];

  const handleNext = () => {
    setActive(i => i + 1);
  };

  const handlePrev = () => {
    setActive(i => i - 1);
  };

  return (
    <motion.div 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('aiEmployees.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('aiEmployees.subtitle')}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="carousel">
          {/* Left Navigation */}
          <button 
            className="nav left"
            onClick={handlePrev}
            aria-label="Previous card"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Cards */}
          {infiniteEmployees.map((employee, i) => {
            const offset = (active - i) / 3;
            const direction = Math.sign(active - i);
            const absOffset = Math.abs(active - i) / 3;
            
            // Only render cards that are close to the active position
            if (absOffset > MAX_VISIBILITY) {
              return null;
            }
            
            return (
              <AIEmployeeCard
                key={`${employee.id}-${i}`}
                employee={employee}
                isActive={i === active}
                offset={offset}
                direction={direction}
                absOffset={absOffset}
                onClick={() => setActive(i)}
              />
            );
          })}

          {/* Generate additional cards dynamically for infinite scroll */}
          {Array.from({ length: MAX_VISIBILITY * 2 + 1 }, (_, index) => {
            const baseIndex = active - MAX_VISIBILITY + index;
            const employeeIndex = ((baseIndex % count) + count) % count;
            const employee = employees[employeeIndex];
            
            // Skip if this card is already rendered by the infiniteEmployees array
            if (baseIndex >= 0 && baseIndex < infiniteEmployees.length) {
              return null;
            }
            
            const offset = (active - baseIndex) / 3;
            const direction = Math.sign(active - baseIndex);
            const absOffset = Math.abs(active - baseIndex) / 3;
            
            return (
              <AIEmployeeCard
                key={`dynamic-${baseIndex}`}
                employee={{
                  ...employee,
                  id: `${employee.id}-dynamic-${baseIndex}`
                }}
                isActive={baseIndex === active}
                offset={offset}
                direction={direction}
                absOffset={absOffset}
                onClick={() => setActive(baseIndex)}
              />
            );
          })}

          {/* Right Navigation */}
          <button 
            className="nav right"
            onClick={handleNext}
            aria-label="Next card"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots Indicator - only show original count */}
        <div className="flex justify-center gap-3 mt-8">
          {employees.map((_, index) => {
            // Calculate which dot should be active based on current position
            const dotIndex = ((active % count) + count) % count;
            return (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === dotIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
                onClick={() => setActive(active - dotIndex + index)} // Navigate relative to current position
                aria-label={`Go to card ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
