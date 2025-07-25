"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Braces, Phone, Clock, BadgePercent, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

// Background components for bento cards
const PhoneStatsBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-500/10 dark:via-pink-500/10 dark:to-red-500/10 flex items-center justify-center overflow-hidden">
    {/* Animated gradient outline */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 opacity-20 " 
         style={{ 
           background: 'linear-gradient(45deg, rgba(244,63,94,0.3), rgba(236,72,153,0.3), rgba(239,68,68,0.3))',
           animation: 'gradient-shift 3s ease-in-out infinite',
           zIndex: 1
         }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <Phone className="h-20 w-20 text-neutral-700 dark:text-black-400 relative z-20 transition-opacity duration-300 group-hover:opacity-0 mt-32" />
  </div>
);

const ClockStatsBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-indigo-500/10 flex items-center justify-center overflow-hidden">
    {/* Animated gradient outline */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-20 "
         style={{ 
           background: 'linear-gradient(45deg, rgba(6,182,212,0.3), rgba(59,130,246,0.3), rgba(99,102,241,0.3))',
           animation: 'gradient-shift 3s ease-in-out infinite 0.5s',
           zIndex: 1
         }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <Clock className="h-20 w-20 text-neutral-700 dark:text-black-400 relative z-20 transition-opacity duration-300 group-hover:opacity-0 ml-auto mr-20" />
  </div>
);

const ResultsStatsBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-500/10 dark:via-green-500/10 dark:to-teal-500/10 flex items-center justify-center overflow-hidden">
    {/* Animated gradient outline */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-20 "
         style={{ 
           background: 'linear-gradient(45deg, rgba(16,185,129,0.3), rgba(34,197,94,0.3), rgba(20,184,166,0.3))',
           animation: 'gradient-shift 3s ease-in-out infinite 1s',
           zIndex: 1
         }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(16,185,129,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(20,184,166,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <BadgePercent className="h-20 w-20 text-neutral-700 dark:text-black-400 relative z-20 transition-opacity duration-300 group-hover:opacity-0" />
  </div>
);

const IntegrationStatsBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-500/10 dark:via-purple-500/10 dark:to-fuchsia-500/10 flex items-center justify-center overflow-hidden">
    {/* Animated gradient outline */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 opacity-20 "
         style={{ 
           background: 'linear-gradient(45deg, rgba(139,92,246,0.3), rgba(168,85,247,0.3), rgba(217,70,239,0.3))',
           animation: 'gradient-shift 3s ease-in-out infinite 1.5s',
           zIndex: 1
         }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(217,70,239,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <Braces className="h-20 w-20 text-neutral-700 dark:text-black-400 relative z-20 transition-opacity duration-300 group-hover:opacity-0" />
  </div>
);

const PerformanceBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-500/10 dark:via-orange-500/10 dark:to-yellow-500/10 flex items-center justify-center overflow-hidden">
    {/* Animated gradient outline */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 opacity-20 "
         style={{ 
           background: 'linear-gradient(45deg, rgba(245,158,11,0.3), rgba(249,115,22,0.3), rgba(234,179,8,0.3))',
           animation: 'gradient-shift 3s ease-in-out infinite 2s',
           zIndex: 1
         }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <TrendingUp className="h-20 w-20 text-neutral-700 dark:text-black-400 relative z-20 transition-opacity duration-300 group-hover:opacity-0" />
  </div>
);

const SecurityBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-500/10 dark:via-gray-500/10 dark:to-zinc-500/10 flex items-center justify-center overflow-hidden">
    {/* Animated gradient outline */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 opacity-20 "
         style={{ 
           background: 'linear-gradient(45deg, rgba(100,116,139,0.3), rgba(107,114,128,0.3), rgba(113,113,122,0.3))',
           animation: 'gradient-shift 3s ease-in-out infinite 2.5s',
           zIndex: 1
         }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(71,85,105,0.1),transparent_50%)]" style={{ zIndex: 2 }} />
    <Shield className="h-20 w-20 text-neutral-700 dark:text-neutral-200 relative z-20 transition-opacity duration-300 group-hover:opacity-0" />
  </div>
);

export function FeaturesSection() {
  const { t } = useTranslation();
  
  const features = [
    {
      name: t('features.missedCalls.title'),
      description: t('features.missedCalls.description'),
      background: <PhoneStatsBackground />,
      href: "#contact",
      cta: t('features.missedCalls.cta'),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      name: t('features.availability.title'),
      description: t('features.availability.description'),
      background: <ClockStatsBackground />,
      href: "#contact",
      cta: t('features.availability.cta'),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      name: t('features.results.title'),
      description: t('features.results.description'),
      background: <ResultsStatsBackground />,
      href: "#contact",
      cta: t('features.results.cta'),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
      name: t('features.integration.title'),
      description: t('features.integration.description'),
      background: <IntegrationStatsBackground />,
      href: "#contact",
      cta: t('features.integration.cta'),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    },
    {
      name: t('features.performance.title'),
      description: t('features.performance.description'),
      background: <PerformanceBackground />,
      href: "#contact",
      cta: t('features.performance.cta'),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t('features.sectionTitle')}
          subtitle={t('features.sectionSubtitle')}
          textAlignment="center"
        />
        
        <div className="mt-12">
          <BentoGrid className="lg:grid-rows-3 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}