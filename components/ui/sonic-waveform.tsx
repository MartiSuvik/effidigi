"use client";

import React, { useEffect, useRef } from 'react';
import { motion, type Variants, useReducedMotion } from 'motion/react';
import { ArrowRight, BarChart2 } from 'lucide-react';

// A utility function for class names
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

// Sonic Waveform Canvas Component
const SonicWaveformCanvas = ({ reducedMotion }: { reducedMotion: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let running = true;
        const mouse = { x: 0, y: 0 };
        let time = 0;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            mouse.x = window.innerWidth / 2;
            mouse.y = window.innerHeight / 2;
        };

        const draw = () => {
            if (!running) return;
            ctx.fillStyle = 'rgba(0,0,0,0.12)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const width = window.innerWidth;
            const height = window.innerHeight / 2;
            const lineCount = reducedMotion ? 20 : 60;
            const segmentCount = reducedMotion ? 40 : 80;
            const timeIncrement = reducedMotion ? 0.008 : 0.02;

            for (let i = 0; i < lineCount; i++) {
                ctx.beginPath();
                const progress = i / lineCount;
                const colorIntensity = Math.sin(progress * Math.PI);
                ctx.strokeStyle = `rgba(0,255,192,${(colorIntensity * 0.5).toFixed(3)})`;
                ctx.lineWidth = 1.25;

                for (let j = 0; j <= segmentCount; j++) {
                    const x = (j / segmentCount) * width;
                    const distToMouse = Math.hypot(x - mouse.x, height - mouse.y);
                    const mouseEffect = Math.max(0, 1 - distToMouse / 400);

                    const noise = Math.sin(j * 0.1 + time + i * 0.18) * 18;
                    const spike = Math.cos(j * 0.2 + time + i * 0.1) * Math.sin(j * 0.05 + time) * 45;
                    const y = height + noise + spike * (1 + mouseEffect * 2);

                    if (j === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            time += timeIncrement;
            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();
        draw();

        return () => {
            running = false;
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [reducedMotion]);

    return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 z-0 w-full h-full bg-black" />;
};


// The main hero component
const SonicWaveformHero = () => {
    const shouldReduceMotion = !!useReducedMotion();
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.18 + 0.4,
                duration: shouldReduceMotion ? 0.001 : 0.7,
                ease: [0.42, 0, 0.58, 1]
            }
        })
    };

    return (
        <div 
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
            <SonicWaveformCanvas reducedMotion={shouldReduceMotion} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

            {/* Overlay HTML Content */}
            <div className="relative z-20 text-center p-6">
                <motion.div
                    custom={0} variants={fadeUpVariants} initial="hidden" animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6 backdrop-blur-sm"
                    aria-label="Feature label: Real-Time Data Sonification"
                >
                    <BarChart2 className="h-4 w-4 text-teal-300" />
                    <span className="text-sm font-medium text-gray-200">
                        Real-Time Data Sonification
                    </span>
                </motion.div>

                <motion.h1
                    custom={1} variants={fadeUpVariants} initial="hidden" animate="visible"
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                >
                    Sonic Waveform
                </motion.h1>

                <motion.p
                    custom={2} variants={fadeUpVariants} initial="hidden" animate="visible"
                    className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
                >
                    Translate complex data streams into intuitive, interactive soundscapes. Hear the patterns, feel the insights.
                </motion.p>

                <motion.div
                    custom={3} variants={fadeUpVariants} initial="hidden" animate="visible"
                >
                    <button
                        className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 mx-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        aria-label="Analyze the Stream"
                    >
                        Analyze the Stream
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default SonicWaveformHero;
