"use client";

import React, { useEffect, useRef } from 'react';

interface VoiceWaveformProps {
  className?: string;
  color?: string;
  height?: number;
  width?: number;
}

export const VoiceWaveform = ({ 
  className = "", 
  color = "59, 130, 246", // blue-500 in RGB
  height = 60,
  width = 200
}: VoiceWaveformProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    const draw = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barCount = 25;
      const barWidth = canvas.width / barCount;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < barCount; i++) {
        const x = i * barWidth + barWidth / 2;
        
        // Create different wave patterns for variety
        const wave1 = Math.sin(i * 0.3 + time) * 0.5;
        const wave2 = Math.sin(i * 0.15 + time * 0.7) * 0.3;
        const wave3 = Math.sin(i * 0.5 + time * 1.2) * 0.2;
        
        // Combine waves and normalize
        const amplitude = (wave1 + wave2 + wave3) * 0.8 + 0.2;
        const barHeight = Math.abs(amplitude) * (canvas.height * 0.7);
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, centerY - barHeight/2, 0, centerY + barHeight/2);
        gradient.addColorStop(0, `rgba(${color}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${color}, 1)`);
        gradient.addColorStop(1, `rgba(${color}, 0.8)`);
        
        ctx.fillStyle = gradient;
        
        // Draw rounded bar
        const radius = barWidth * 0.3;
        ctx.beginPath();
        ctx.roundRect(
          x - barWidth * 0.3, 
          centerY - barHeight / 2, 
          barWidth * 0.6, 
          barHeight, 
          radius
        );
        ctx.fill();
      }

      time += 0.08;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, height, width]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};
