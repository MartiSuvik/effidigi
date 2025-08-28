"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Menu, Check, Star, Zap, Shield, Users, PhoneCall, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from 'motion/react';
import { useTranslation } from '@/lib/i18n';
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import BentoGridThirdDemo from '@/components/ui/bento-grid-demo-3';
import { Footer } from '@/components/ui/footer-section';
import { WordPullUp } from '@/components/ui/word-pull-up';

// Custom hook for intersection observer
const useInView = (threshold = 0.2) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Get results in seconds with our optimized algorithms"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Safe",
    description: "Your data is protected with enterprise-grade security"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with your team members"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "€250",
    period: "/month",
    features: ["Up to 2500 conversations per month", "Integration with a single website", "Personal consulting for chatbot optimization", "AI-based chatbot with basic features", "Dedicated personal consultant", "Multilingual support (over 20 languages)", "Chatbot appearance with logo, name and brand colors", "Contact form integration (name, email, service of interest)"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Upon Agreement",
    period: "/month",
    features: ["Unlimited number of chats per month", "Multiple website integration", "Personal consulting for chatbot optimization", "AI-based chatbot with basic features", "Dedicated personal consultant", "Multilingual support (over 100 languages)", "Chatbot appearance with logo, name and brand colors", "Contact form integration (name, email, service of interest)"],
    popular: false
  }
];

// Hero Section Component
const HeroSection = () => (
  <section className="flex flex-col w-full items-center gap-[73px] px-4 md:px-[150px] py-0 relative bg-[#141519]">

    {/* Hero Content */}
    <main className="flex flex-col w-full max-w-[905px] gap-[61px] px-0 items-center relative mt-32">
      <div className="flex-col gap-[7px] inline-flex items-center relative">
        <div className="inline-flex items-center gap-2.5 p-2.5 relative">
          <h1 className="text-white text-4xl md:text-6xl font-black text-center leading-tight">
            Help, convert, and sell <br />
            with a data-driven AI chatbot
          </h1>
        </div>

        <div className="inline-flex items-center gap-2.5 p-2.5 relative max-w-2xl">
          <p className="text-gray-200 text-base md:text-lg text-center font-bold">
            ChatBot instantly helps your customers using AI-generated responses. Get{" "}
            <span className="font-black">24/7 support</span> and{" "}
            <span className="font-black">ultra-high</span> satisfaction rates.
          </p>
        </div>
      </div>

      {/* Email Signup Form */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <Input
            type="email"
            placeholder="Enter your business email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white"
          />
          <Button className="bg-[#00ffb2] hover:bg-[#00b880] text-black px-6 py-3 rounded-lg font-medium whitespace-nowrap">
            Sign up free
          </Button>
        </div>
      </div>

      {/* Free trial info */}
      <div className="flex items-center gap-4 text-sm text-gray-200">
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4" />
          <span>Free 30-day trial</span>
        </div>
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4" />
          <span>Free 15 minute AI audit</span>
        </div>
      </div>

      {/* Hero Image with Chat Interface */}
      <div className="inline-flex flex-col items-center gap-2.5 px-2.5 py-10 pb-0 relative">
        <div className="relative w-full max-w-none">
          {/* Background chatbot image */}
          <div className="w-full flex items-center justify-center">
            <img
              className="w-full max-w-full h-auto object-contain"
              alt="AI Chatbot Interface"
              src="https://res.cloudinary.com/effichat/image/upload/chatbot.png"
            />
          </div>
          
          {/* Animated Chat bubbles overlay */}
          <motion.div 
            className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-md"
            initial={{ opacity: 0, scale: 0, x: 50, y: -50 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              x: [50, 0, 0, 50],
              y: [-50, 0, 0, -50]
            }}
            transition={{
              duration: 7,
              times: [0, 0.2, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="https://res.cloudinary.com/effichat/image/upload/brenda.png" 
                alt="Brenda"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-base font-medium text-gray-600">Brenda</span>
            </div>
            <p className="text-base text-gray-800">How much time do I have for my order return?</p>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-blue-500 rounded-lg shadow-lg p-4 max-w-md"
            initial={{ opacity: 0, scale: 0, x: -50, y: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              x: [-50, 0, 0, -50],
              y: [0, 0, 0, 0]
            }}
            transition={{
              duration: 7,
              times: [0, 0.2, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 2,
              delay: 1,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="https://res.cloudinary.com/effichat/image/upload/silver_ai_pfp.png" 
                alt="Chatbot"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-base font-medium text-white">Silver AI Agent</span>
            </div>
            <p className="text-base text-white">Hi Brenda! You can return your<br />purchase within 7 days.</p>
          </motion.div>
          
                    
          <motion.div 
            className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-md"
            initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              x: [50, 0, 0, 50],
              y: [50, 0, 0, 50]
            }}
            transition={{
              duration: 7,
              times: [0, 0.2, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 2,
              delay: 2,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="https://res.cloudinary.com/effichat/image/upload/brenda.png" 
                alt="Brenda"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="text-base font-medium text-gray-600">Brenda</span>
            </div>
            <p className="text-base text-gray-800">That's what I needed! Thx</p>
          </motion.div>
        </div>
      </div>
    </main>
  </section>
);

// Key Features Section
const KeyFeaturesSection = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-gray-50">
      <div className="text-center">
        <WordPullUp
          words="Powerful Features"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          as="h2"
          animate={isInView}
        />
        <p className="text-lg text-gray-600">
          Everything you need to succeed in digital markets
        </p>
      </div>

      <BentoGridThirdDemo />
    </section>
  );
};

// Features Overview Section
const FeaturesOverviewSection = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl items-center">
        <div ref={ref} className="text-left">
          <WordPullUp
            words="Support customers on multiple channels"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left"
            as="h2"
            animate={isInView}
          />
          <p className="text-lg text-gray-600 mb-8 text-left">
            Add an AI chatbot to your website, LiveChat, Messenger, or Slack to handle all support 
            cases automatically, 24/7.
          </p>
        <div className="mb-8">
          <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium">
            Sign up free
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-auto object-contain"
          alt="Multi-channel customer support interface showing various messaging platforms"
          src="https://res.cloudinary.com/effichat/image/upload/Integratsioon_eesti.png"
        />
      </div>
    </div>
  </section>
  );
};

// Main Content Section
const MainContentSection = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl items-center">
              <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-auto object-contain"
            alt="Customer support AI agent showing it's product recommendation capablities."
            src="https://res.cloudinary.com/effichat/image/upload/Integratsioon_eesti_2.png"
          />
        </div>
        <div ref={ref} className="text-left">
          <WordPullUp
            words="Show offers to boost sales"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left"
            as="h2"
            animate={isInView}
          />
          <p className="text-lg text-gray-600 mb-8">
              Proactively reach website visitors with product recommendations to increase engagement and conversions.
          </p>
          <Button className="bg-black hover:bg-purple-700 text-white px-8 py-3 rounded-lg">
            Sign Up Free
          </Button>
        </div>
      </div>
    </section>
  );
};

// Pricing Plans Section
const PricingPlansSection = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-600">
          Select the perfect plan for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className={`p-8 relative ${plan.popular ? 'border-[#00ffb2] border-2' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#00ffb2] text-black px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <WordPullUp
                  words={plan.price}
                  className="text-4xl font-bold"
                  as="span"
                  animate={isInView}
                />
                <span className="text-white">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00ffb2]"/>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className={`w-full ${plan.popular ? 'bg-[#00ffb2] hover:bg-[#00b880]' : 'bg-gray-400 hover:bg-gray-200'} text-black`}
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Call to Action Section
const CallToActionSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="flex flex-col w-full items-center gap-8 px-4 md:px-[150px] py-20 bg-gradient-to-br from-[#00ffb2] to-[#00b880]">
      <div className="text-center max-w-3xl">
        <WordPullUp
          words="Ready to Get Started?"
          className="text-3xl md:text-4xl font-bold text-black mb-4"
          as="h2"
          animate={isInView}
        />
        <p className="text-lg text-gray-700 mb-8">
          Join thousands of satisfied customers and transform your workflow today.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-white text-[#00b880] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium">
            Contact for Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

// Animated Container Helper Component
type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Main Service Template Component
export const ServiceTemplate = () => {
  return (
    <main className="flex flex-col w-full bg-white">
      <HeroSection />
      <KeyFeaturesSection />
      <FeaturesOverviewSection />
      <MainContentSection />
      <CallToActionSection />
      <PricingPlansSection />
      <Footer />
    </main>
  );
};
