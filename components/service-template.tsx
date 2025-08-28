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
import { useCal } from '@/hooks/use-cal';

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

// Hero Section Component
const HeroSection = ({ 
  email, 
  setEmail, 
  handleEmailSubmit, 
  isSubmitting, 
  openCalModal 
}: {
  email: string;
  setEmail: (email: string) => void;
  handleEmailSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
  openCalModal: () => Promise<void>;
}) => {
  const { t } = useTranslation();
  
  return (
  <section className="flex flex-col w-full items-center gap-[73px] px-4 md:px-[150px] py-0 relative bg-[#141519]">

    {/* Hero Content */}
    <main className="flex flex-col w-full max-w-[905px] gap-[61px] px-0 items-center relative mt-32">
      <div className="flex-col gap-[7px] inline-flex items-center relative">
        <div className="inline-flex items-center gap-2.5 p-2.5 relative">
          <h1 className="text-white text-4xl md:text-6xl font-black text-center leading-tight">
            {t('serviceTemplate.hero.title')}
          </h1>
        </div>

        <div className="inline-flex items-center gap-2.5 p-2.5 relative max-w-2xl">
          <p className="text-gray-200 text-base md:text-lg text-center font-bold">
            {t('serviceTemplate.hero.description')}
          </p>
        </div>
      </div>

      {/* Email Signup Form */}
      <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('serviceTemplate.hero.emailPlaceholder')}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white"
            required
          />
          <Button 
            type="submit"
            disabled={isSubmitting || !email}
            className="bg-[#00ffb2] hover:bg-[#00b880] text-black px-6 py-3 rounded-lg font-medium whitespace-nowrap disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : t('serviceTemplate.hero.signUpButton')}
          </Button>
        </div>
      </form>

      {/* Free trial info */}
      <div className="flex items-center gap-4 text-sm text-gray-200">
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4" />
          <span>{t('serviceTemplate.hero.trialText')}</span>
        </div>
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4" />
          <span>{t('serviceTemplate.hero.auditText')}</span>
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
              src={t('serviceTemplate.images.chatbot')}
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
                src={t('serviceTemplate.images.customerAvatar')} 
                alt={t('serviceTemplate.chat.customerName')}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <span className="text-base font-medium text-gray-600">{t('serviceTemplate.chat.customerName')}</span>
                <p className="text-xs text-gray-400">{t('serviceTemplate.chat.messages.customerQuestionTime')}</p>
              </div>
            </div>
            <p className="text-base text-gray-800 whitespace-pre-line">{t('serviceTemplate.chat.messages.customerQuestion')}</p>
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
                src={t('serviceTemplate.images.agentAvatar')} 
                alt={t('serviceTemplate.chat.agentName')}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <span className="text-base font-medium text-white">{t('serviceTemplate.chat.agentName')}</span>
                <p className="text-xs text-blue-200">{t('serviceTemplate.chat.messages.agentResponseTime')}</p>
              </div>
            </div>
            <p className="text-base text-white whitespace-pre-line">{t('serviceTemplate.chat.messages.agentResponse')}</p>
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
                src={t('serviceTemplate.images.customerAvatar')} 
                alt={t('serviceTemplate.chat.customerName')}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <span className="text-base font-medium text-gray-600">{t('serviceTemplate.chat.customerName')}</span>
                <p className="text-xs text-gray-400">{t('serviceTemplate.chat.messages.customerThanksTime')}</p>
              </div>
            </div>
            <p className="text-base text-gray-800 whitespace-pre-line">{t('serviceTemplate.chat.messages.customerThanks')}</p>
          </motion.div>
        </div>
      </div>
    </main>
  </section>
  );
};

// Key Features Section
const KeyFeaturesSection = ({ openCalModal }: { openCalModal: () => Promise<void> }) => {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  
  return (
    <section ref={ref} className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-gray-50">
      <div className="text-center">
        <WordPullUp
          words={t('serviceTemplate.features.title')}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          as="h2"
          animate={isInView}
        />
        <p className="text-lg text-gray-600">
          {t('serviceTemplate.features.description')}
        </p>
      </div>

      <BentoGridThirdDemo />
    </section>
  );
};

// Features Overview Section
const FeaturesOverviewSection = ({ openCalModal }: { openCalModal: () => Promise<void> }) => {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  
  return (
    <section className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl items-center">
        <div ref={ref} className="text-left">
          <WordPullUp
            words={t('serviceTemplate.multichannel.title')}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left"
            as="h2"
            animate={isInView}
          />
          <p className="text-lg text-gray-600 mb-8 text-left">
            {t('serviceTemplate.multichannel.description')}
          </p>
        <div className="mb-8">
          <Button 
            onClick={openCalModal}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
          >
            {t('serviceTemplate.multichannel.buttonText')}
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-auto object-contain"
          alt={t('serviceTemplate.multichannel.imageAlt')}
          src={t('serviceTemplate.images.integration')}
        />
      </div>
    </div>
  </section>
  );
};

// Main Content Section
const MainContentSection = ({ openCalModal }: { openCalModal: () => Promise<void> }) => {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  
  return (
    <section className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl items-center">
              <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-auto object-contain"
            alt={t('serviceTemplate.sales.imageAlt')}
            src={t('serviceTemplate.images.recommendations')}
          />
        </div>
        <div ref={ref} className="text-left">
          <WordPullUp
            words={t('serviceTemplate.sales.title')}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left"
            as="h2"
            animate={isInView}
          />
          <p className="text-lg text-gray-600 mb-8">
              {t('serviceTemplate.sales.description')}
          </p>
          <Button 
            onClick={openCalModal}
            className="bg-black hover:bg-purple-700 text-white px-8 py-3 rounded-lg"
          >
            {t('serviceTemplate.sales.buttonText')}
          </Button>
        </div>
      </div>
    </section>
  );
};

// Pricing Plans Section
const PricingPlansSection = ({ openCalModal }: { openCalModal: () => Promise<void> }) => {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();
  
  const starterFeatures = [
    t('serviceTemplate.pricing.plans.starter.features.0'),
    t('serviceTemplate.pricing.plans.starter.features.1'),
    t('serviceTemplate.pricing.plans.starter.features.2'),
    t('serviceTemplate.pricing.plans.starter.features.3'),
    t('serviceTemplate.pricing.plans.starter.features.4'),
    t('serviceTemplate.pricing.plans.starter.features.5'),
    t('serviceTemplate.pricing.plans.starter.features.6'),
    t('serviceTemplate.pricing.plans.starter.features.7')
  ];

  const enterpriseFeatures = [
    t('serviceTemplate.pricing.plans.enterprise.features.0'),
    t('serviceTemplate.pricing.plans.enterprise.features.1'),
    t('serviceTemplate.pricing.plans.enterprise.features.2'),
    t('serviceTemplate.pricing.plans.enterprise.features.3'),
    t('serviceTemplate.pricing.plans.enterprise.features.4'),
    t('serviceTemplate.pricing.plans.enterprise.features.5'),
    t('serviceTemplate.pricing.plans.enterprise.features.6'),
    t('serviceTemplate.pricing.plans.enterprise.features.7')
  ];
  
  return (
    <section ref={ref} className="flex flex-col w-full items-center gap-16 px-4 md:px-[150px] py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t('serviceTemplate.pricing.title')}
        </h2>
        <p className="text-lg text-gray-600">
          {t('serviceTemplate.pricing.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <Card className="p-8 relative border-[#00ffb2] border-2">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-[#00ffb2] text-black px-4 py-2 rounded-full text-sm font-medium">
              {t('serviceTemplate.pricing.plans.starter.popular')}
            </span>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">{t('serviceTemplate.pricing.plans.starter.name')}</h3>
            <div className="flex items-baseline justify-center gap-1">
              <WordPullUp
                words={t('serviceTemplate.pricing.plans.starter.price')}
                className="text-4xl font-bold"
                as="span"
                animate={isInView}
              />
              <span className="text-white">{t('serviceTemplate.pricing.plans.starter.period')}</span>
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {starterFeatures.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#00ffb2]"/>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={openCalModal}
            className="w-full bg-[#00ffb2] hover:bg-[#00b880] text-black"
          >
            {t('serviceTemplate.pricing.buttonText')}
          </Button>
        </Card>

        <Card className="p-8 relative">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">{t('serviceTemplate.pricing.plans.enterprise.name')}</h3>
            <div className="flex items-baseline justify-center gap-1">
              <WordPullUp
                words={t('serviceTemplate.pricing.plans.enterprise.price')}
                className="text-4xl font-bold"
                as="span"
                animate={isInView}
              />
              <span className="text-white">{t('serviceTemplate.pricing.plans.enterprise.period')}</span>
            </div>
          </div>
          <ul className="space-y-3 mb-8">
            {enterpriseFeatures.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#00ffb2]"/>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            onClick={openCalModal}
            className="w-full bg-gray-400 hover:bg-gray-200 text-black"
          >
            {t('serviceTemplate.pricing.buttonText')}
          </Button>
        </Card>
      </div>
    </section>
  );
};

// Call to Action Section
const CallToActionSection = ({ openCalModal }: { openCalModal: () => Promise<void> }) => {
  const { ref, isInView } = useInView();
  const { t } = useTranslation();

  return (
    <section ref={ref} className="flex flex-col w-full items-center gap-8 px-4 md:px-[150px] py-20 bg-gradient-to-br from-[#00ffb2] to-[#00b880]">
      <div className="text-center max-w-3xl">
        <WordPullUp
          words={t('serviceTemplate.cta.title')}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          as="h2"
          animate={isInView}
        />
        <p className="text-lg text-gray-600 mb-8">
          {t('serviceTemplate.cta.description')}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={openCalModal}
            className="bg-white text-[#00b880] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
          >
            {t('serviceTemplate.cta.buttonText')}
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
  const { openCalModal } = useCal();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Send email to Make.com webhook
      const response = await fetch('https://hook.eu2.make.com/lb5hdhy7fsmv7gipopd9pb0cgpxgj2ht', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          source: 'service-template-signup',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        // Clear the email field
        setEmail('');
        // Open the cal booking modal
        openCalModal();
      } else {
        console.error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col w-full bg-white">
      <HeroSection 
        email={email}
        setEmail={setEmail}
        handleEmailSubmit={handleEmailSubmit}
        isSubmitting={isSubmitting}
        openCalModal={openCalModal}
      />
      <KeyFeaturesSection openCalModal={openCalModal} />
      <FeaturesOverviewSection openCalModal={openCalModal} />
      <MainContentSection openCalModal={openCalModal} />
      <CallToActionSection openCalModal={openCalModal} />
      <PricingPlansSection openCalModal={openCalModal} />
      <Footer />
    </main>
  );
};
