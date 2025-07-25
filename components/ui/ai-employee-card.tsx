"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { AIEmployee } from "@/lib/types";

interface AIEmployeeCardProps {
  employee: AIEmployee;
  isActive?: boolean;
}

export function AIEmployeeCard({ employee, isActive = false }: AIEmployeeCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="ai-employee-card-container">
      <motion.div
        className={cn(
          "ai-employee-card",
          isFlipped && "flipped",
          isActive && "is-current"
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${employee.name} - ${employee.role}. Click to learn more.`}
        whileHover={{ scale: isActive ? 1.08 : 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="ai-employee-card-inner">
          {/* Front Face */}
          <div className="ai-employee-card-face ai-employee-card-front">
            {/* Image Container - Takes 80% of card height */}
            <div className="card-image-container">
              <img
                src={employee.avatar}
                alt={employee.name}
                className="card-avatar"
                loading="lazy"
              />
            </div>
            
            {/* Content Container - Takes 20% of card height */}
            <div className="card-content">
              <h3 className="card-name">{employee.name}</h3>
              <p className="card-role">{employee.role}</p>
            </div>
          </div>

          {/* Back Face */}
          <div className="ai-employee-card-face ai-employee-card-back">
            <div className="card-description">
              <h3 className="card-name">{employee.name}</h3>
              <p className="description-text">{employee.description}</p>
              
              {employee.specialties && employee.specialties.length > 0 && (
                <div className="specialties">
                  {employee.specialties.map((specialty, index) => (
                    <span key={index} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}