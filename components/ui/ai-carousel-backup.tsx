"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const MAX_VISIBILITY = 3;

const MAX_VISIBILITY = 3;

export function AICarousel() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  // Get employee data from translations
  const employees = [
    {
      id: "karl",
      name: t('aiEmployees.karl.name'),
      role: t('aiEmployees.karl.role'),
      description: t('aiEmployees.karl.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621636/d2fzxkwdvndlenhlezxy.png",
      specialties: t('aiEmployees.karl.specialties') as string[] || ["Andmeanalüüs", "Raportid", "Prognoosid"]
    },
    {
      id: "sandra",
      name: t('aiEmployees.sandra.name'),
      role: t('aiEmployees.sandra.role'),
      description: t('aiEmployees.sandra.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621636/ck7yx757bjfj6uihrdyj.png",
      specialties: t('aiEmployees.sandra.specialties') as string[] || ["Telefoniteenindus", "Broneerimine", "Küsimused"]
    },
    {
      id: "silver",
      name: t('aiEmployees.silver.name'),
      role: t('aiEmployees.silver.role'),
      description: t('aiEmployees.silver.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621635/g4v24ilp1cno7r9qyvct.png",
      specialties: t('aiEmployees.silver.specialties') as string[] || ["Veebichat", "Küsimused", "Tugi"]
    },
    {
      id: "helen",
      name: t('aiEmployees.helen.name'),
      role: t('aiEmployees.helen.role'),
      description: t('aiEmployees.helen.description'),
      avatar: "https://res.cloudinary.com/effichat/image/upload/v1751621636/xr2xiyciubgjfwsk2qju.png",
      specialties: t('aiEmployees.helen.specialties') as string[] || ["CRM", "Automatiseerimine", "Müük"]
    }
  ];
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
        'opacity': absOffset >= MAX_VISIBILITY ? '0' : '1',
        'display': absOffset > MAX_VISIBILITY ? 'none' : 'block',
      } as React.CSSProperties}
      onClick={handleClick}
    >
      <div className={`ai-employee-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="ai-employee-card-inner">
          {/* Front of card */}
          <div className="ai-employee-card-face ai-employee-card-front">
            <div className="card-image-container">
              {/* Image sits above the fade effect */}
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
                  filter: isActive ? 'none' : 'brightness(0.3) contrast(1.2)',
                  zIndex: 20
                }}
              />
              {/* Dark overlay for inactive cards - below the image */}
              {!isActive && (
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 15
                  }}
                />
              )}
              {/* Overlay content */}
              <div className="card-content-overlay" style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 25,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), transparent)',
                padding: '24px',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                <h3 className="card-name" style={{ 
                  opacity: isActive ? 1 : 0.9,
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  {employee.name}
                </h3>
                <p className="card-role" style={{ 
                  opacity: isActive ? 1 : 0.8,
                  fontSize: '0.95rem',
                  color: 'hsl(var(--primary))',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  margin: 0
                }}>
                  {employee.role}
                </p>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="ai-employee-card-face ai-employee-card-back">
            <div className="card-description">
              <h3 className="card-name">{employee.name}</h3>
              <p className="description-text">{employee.description}</p>
              <div className="specialties">
                {employee.specialties.map((specialty, index) => (
                  <span key={index} className="specialty-tag">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AICarousel() {
  const [active, setActive] = useState(1); // Start with second card (Sandra) as active
  const count = employees.length;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Title and Subtitle */}
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Worlds Best AI Employees
        </h2>
        <p className="text-lg text-muted-foreground">
          Automates work. Even while you sleep.
        </p>
      </div>

      {/* 3D Carousel */}
      <div className="carousel">
        {/* Left Navigation */}
        {active > 0 && (
          <button 
            className="nav left"
            onClick={() => setActive(i => i - 1)}
            aria-label="Previous card"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* Cards */}
        {employees.map((employee, i) => {
          const offset = (active - i) / 3;
          const direction = Math.sign(active - i);
          const absOffset = Math.abs(active - i) / 3;
          
          return (
            <AIEmployeeCard
              key={employee.id}
              employee={employee}
              isActive={i === active}
              offset={offset}
              direction={direction}
              absOffset={absOffset}
              onClick={() => setActive(i)}
            />
          );
        })}

        {/* Right Navigation */}
        {active < count - 1 && (
          <button 
            className="nav right"
            onClick={() => setActive(i => i + 1)}
            aria-label="Next card"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {employees.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === active 
                ? 'bg-primary scale-125' 
                : 'bg-border hover:bg-primary/50'
            }`}
            onClick={() => setActive(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}