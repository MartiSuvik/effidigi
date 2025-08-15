"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { BackButton } from "@/components/ui/back-button";
import { ParticlesBackground } from "@/components/particles-background";
import { useCal } from "@/hooks/use-cal";
import { useTranslation } from "@/lib/i18n";
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Calculator,
  Rocket,
  Eye
} from "lucide-react";

export default function DataAIPageClient() {
  const { openCalModal } = useCal();
  const { t } = useTranslation();

  return (
    <>
        {/* Hero Section */}
        <section className="relative py-20 pt-32 overflow-hidden animated-gradient-bg">
          <ParticlesBackground />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <div className="mb-8">
                <BackButton fallbackHref="/#services">
                  {t('services.dataAI.page.backButton')}
                </BackButton>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="terminal-text"></span>
                {t('services.dataAI.page.title').replace('Data AI ', '')}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('services.dataAI.page.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <GradientButton 
                  size="lg" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Rocket className="w-5 h-5" />
                  {t('services.dataAI.page.cta.start')}
                </GradientButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Text Left - Image Right */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-8 w-8 terminal-text" />
                  <h2 className="text-3xl font-bold">{t('services.dataAI.page.sections.dashboards.title')}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {t('services.dataAI.page.sections.dashboards.description')}
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {t('services.dataAI.page.sections.dashboards.features.0')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {t('services.dataAI.page.sections.dashboards.features.1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {t('services.dataAI.page.sections.dashboards.features.2')}
                  </li>
                </ul>
                
                <GradientButton 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  {t('services.dataAI.page.sections.dashboards.cta')}
                </GradientButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[16/9] rounded-xl border border-border overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img 
                    src="https://res.cloudinary.com/effichat/image/upload/ofnin9amobi9piqjsuqc.gif" 
                    alt="Modern analytics dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Image Left - Text Right */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-[16/9] rounded-xl border border-border overflow-hidden bg-gradient-to-br from-secondary/5 to-primary/5">
                  <img 
                    src="https://res.cloudinary.com/effichat/image/upload/v1751598490/aq1alb54dakxq0wj68rh.gif" 
                    alt="Sales forecasting charts"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 secondary-text" />
                  <h2 className="text-3xl font-bold">{t('services.dataAI.page.sections.forecasting.title')}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {t('services.dataAI.page.sections.forecasting.description')}
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {t('services.dataAI.page.sections.forecasting.features.0')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {t('services.dataAI.page.sections.forecasting.features.1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {t('services.dataAI.page.sections.forecasting.features.2')}
                  </li>
                </ul>
                
                <GradientButton 
                  variant="outline"
                  className="gap-2"
                  onClick={openCalModal}
                >
                  {t('services.dataAI.page.sections.forecasting.cta')}
                </GradientButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Text Left - Image Right */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-8 w-8 terminal-text" />
                  <h2 className="text-3xl font-bold">{t('services.dataAI.page.sections.predictions.title')}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {t('services.dataAI.page.sections.predictions.description')}
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {t('services.dataAI.page.sections.predictions.features.0')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {t('services.dataAI.page.sections.predictions.features.1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {t('services.dataAI.page.sections.predictions.features.2')}
                  </li>
                </ul>
                
                <GradientButton 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  {t('services.dataAI.page.sections.predictions.cta')}
                </GradientButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[16/9] rounded-xl border border-border overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img 
src="https://res.cloudinary.com/effichat/image/upload/v1751599426/wuyaksdmdoniqdfjuta5.gif" 
                    alt="AI prediction models"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Image Left - Text Right */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-[16/9] rounded-xl border border-border overflow-hidden bg-gradient-to-br from-secondary/5 to-primary/5">
                  <img 
                    src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg" 
                    alt="ROI calculations dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-8 w-8 secondary-text" />
                  <h2 className="text-3xl font-bold">{t('services.dataAI.page.sections.calculations.title')}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {t('services.dataAI.page.sections.calculations.description')}
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {t('services.dataAI.page.sections.calculations.features.0')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {t('services.dataAI.page.sections.calculations.features.1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {t('services.dataAI.page.sections.calculations.features.2')}
                  </li>
                </ul>
                
                <GradientButton 
                  variant="outline"
                  className="gap-2"
                  onClick={openCalModal}
                >
                  {t('services.dataAI.page.sections.calculations.cta')}
                </GradientButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Simple CTA Section */}
        <section className="py-24 bg-gradient-to-t from-background to-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                {t('services.dataAI.page.finalCta.title')}
              </h2>
              
              <p className="text-xl text-muted-foreground">
                {t('services.dataAI.page.finalCta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton 
                  size="lg" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Rocket className="w-5 h-5" />
                  {t('services.dataAI.page.finalCta.startButton')}
                </GradientButton>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {t('services.dataAI.page.finalCta.bottomText')}
              </p>
            </motion.div>
          </div>
        </section>
    </>
  );
}
