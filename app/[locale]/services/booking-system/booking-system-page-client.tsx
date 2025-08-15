"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { BackButton } from "@/components/ui/back-button";
import { ParticlesBackground } from "@/components/particles-background";
import { useCal } from "@/hooks/use-cal";
import { useTranslation } from "@/lib/i18n";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Smartphone,
  Users,
  MessageSquare,
  Bell,
  BarChart3,
  Rocket,
  Eye,
  XCircle,
  TrendingUp,
  Zap,
  Shield
} from "lucide-react";

export default function BookingSystemPageClient() {
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
                  {t('services.bookingSystem.page.backButton')}
                </BackButton>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="terminal-text">{'>'} </span>
                {t('services.bookingSystem.page.heroSection.title')}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('services.bookingSystem.page.heroSection.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <GradientButton 
                  size="lg" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Rocket className="w-5 h-5" />
                  {t('services.bookingSystem.page.heroSection.ctaStart')}
                </GradientButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section - Hidden Costs */}
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
                <h2 className="text-3xl font-bold mb-6">{t('services.bookingSystem.page.hiddenCosts.title')}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">{t('services.bookingSystem.page.hiddenCosts.problems.missedOpportunities.title')}</h3>
                      <p className="text-muted-foreground">{t('services.bookingSystem.page.hiddenCosts.problems.missedOpportunities.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">{t('services.bookingSystem.page.hiddenCosts.problems.staffOverwhelm.title')}</h3>
                      <p className="text-muted-foreground">{t('services.bookingSystem.page.hiddenCosts.problems.staffOverwhelm.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">{t('services.bookingSystem.page.hiddenCosts.problems.schedulingErrors.title')}</h3>
                      <p className="text-muted-foreground">{t('services.bookingSystem.page.hiddenCosts.problems.schedulingErrors.description')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">
                    {t('services.bookingSystem.page.hiddenCosts.didYouKnow')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <img 
                    src="https://res.cloudinary.com/effichat/image/upload/v1755198576/hun41yliboj7mr21yvil.png"
                    alt="Manual booking process chaos - stressed person managing multiple calendars and phone calls"
                    className="max-w-xs max-h-xs object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('services.bookingSystem.page.solutionOverview.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('services.bookingSystem.page.solutionOverview.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: t('services.bookingSystem.page.solutionOverview.features.instantBooking.title'),
                  description: t('services.bookingSystem.page.solutionOverview.features.instantBooking.description')
                },
                {
                  icon: Clock,
                  title: t('services.bookingSystem.page.solutionOverview.features.realTimeSync.title'),
                  description: t('services.bookingSystem.page.solutionOverview.features.realTimeSync.description')
                },
                {
                  icon: MessageSquare,
                  title: t('services.bookingSystem.page.solutionOverview.features.reducedInquiries.title'),
                  description: t('services.bookingSystem.page.solutionOverview.features.reducedInquiries.description')
                },
                {
                  icon: BarChart3,
                  title: t('services.bookingSystem.page.solutionOverview.features.centralizedManagement.title'),
                  description: t('services.bookingSystem.page.solutionOverview.features.centralizedManagement.description')
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-6 rounded-xl border border-border"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <GradientButton 
                size="lg" 
                className="gap-2"
                onClick={openCalModal}
              >
                <Rocket className="w-5 h-5" />
                {t('services.bookingSystem.page.solutionOverview.cta')}
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Feature Details - Instant Booking */}
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
                  <Zap className="h-8 w-8 terminal-text" />
                  <h2 className="text-3xl font-bold">{t('services.bookingSystem.page.instantBooking.title')}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {t('services.bookingSystem.page.instantBooking.description')}
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {t('services.bookingSystem.page.instantBooking.features.0')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {t('services.bookingSystem.page.instantBooking.features.1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {t('services.bookingSystem.page.instantBooking.features.2')}
                  </li>
                </ul>
                
                <GradientButton 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Calendar className="w-4 h-4" />
                  {t('services.bookingSystem.page.instantBooking.cta')}
                </GradientButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <img 
                    src="https://res.cloudinary.com/effichat/image/upload/v1755198573/asn6d78noe91j6rkkkrw.png"
                    alt="Your customers want convenience. They can book appointments anytime, from any device, without waiting for confirmation. The system automatically shows only available slots."
                    className="max-w-xs max-h-xs object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real-Time Calendar Sync */}
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
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <img 
                    src="https://res.cloudinary.com/effichat/image/upload/v1755253265/pincuohbnjxjiwn761sl.png"
                    alt="Your customers want convenience. They can book appointments anytime, from any device, without waiting for confirmation. The system automatically shows only available slots."
                    className="max-w-xs max-h-xs object-cover rounded-lg"
                  />
                </div>
              </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 terminal-text" />
                  <h2 className="text-3xl font-bold">{t('services.bookingSystem.page.realTimeSync.title')}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {t('services.bookingSystem.page.realTimeSync.description')}
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {t('services.bookingSystem.page.realTimeSync.features.0')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {t('services.bookingSystem.page.realTimeSync.features.1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {t('services.bookingSystem.page.realTimeSync.features.2')}
                  </li>
                </ul>
                
                <GradientButton 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Clock className="w-4 h-4" />
                  {t('services.bookingSystem.page.realTimeSync.cta')}
                </GradientButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('services.bookingSystem.page.beforeAfter.title')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-red-50 dark:bg-red-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800"
              >
                <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">{t('services.bookingSystem.page.beforeAfter.before.title')}</h3>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative mb-4"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img 
                      src="https://res.cloudinary.com/effichat/image/upload/v1755198573/s5odz65qidztkpsjzsds.png"
                      alt="Manual booking process chaos"
                      className="max-w-xs max-h-xs object-cover rounded-lg"
                    />
                  </div>
                </motion.div>
                <ul className="space-y-2">
                  {[
                    t('services.bookingSystem.page.beforeAfter.before.items.0'),
                    t('services.bookingSystem.page.beforeAfter.before.items.1'),
                    t('services.bookingSystem.page.beforeAfter.before.items.2'),
                    t('services.bookingSystem.page.beforeAfter.before.items.3'),
                    t('services.bookingSystem.page.beforeAfter.before.items.4'),
                    t('services.bookingSystem.page.beforeAfter.before.items.5')
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <XCircle className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800"
              >
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">{t('services.bookingSystem.page.beforeAfter.after.title')}</h3>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative mb-4"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img 
                      src="https://res.cloudinary.com/effichat/image/upload/v1755248879/q3rycdqki0x3lcf8o3zv.png"
                      alt="Automated booking system efficiency"
                      className="max-w-xs max-h-xs object-cover rounded-lg"
                    />
                  </div>
                </motion.div>
                <ul className="space-y-2">
                  {[
                    t('services.bookingSystem.page.beforeAfter.after.items.0'),
                    t('services.bookingSystem.page.beforeAfter.after.items.1'),
                    t('services.bookingSystem.page.beforeAfter.after.items.2'),
                    t('services.bookingSystem.page.beforeAfter.after.items.3'),
                    t('services.bookingSystem.page.beforeAfter.after.items.4'),
                    t('services.bookingSystem.page.beforeAfter.after.items.5')
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-muted/50 p-6 rounded-xl border"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg italic mb-2">
                    {t('services.bookingSystem.page.beforeAfter.testimonial.quote')}
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">{t('services.bookingSystem.page.beforeAfter.testimonial.author')}</cite>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-24 bg-muted/20">
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
                  <TrendingUp className="h-8 w-8 terminal-text" />
                  <h2 className="text-3xl font-bold">{t('services.bookingSystem.page.roiSection.title')}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {t('services.bookingSystem.page.roiSection.description')}
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    t('services.bookingSystem.page.roiSection.opportunities.0'),
                    t('services.bookingSystem.page.roiSection.opportunities.1'),
                    t('services.bookingSystem.page.roiSection.opportunities.2'),
                    t('services.bookingSystem.page.roiSection.opportunities.3'),
                    t('services.bookingSystem.page.roiSection.opportunities.4')
                  ].map((opportunity, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {opportunity}
                    </li>
                  ))}
                </ul>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t('services.bookingSystem.page.roiSection.roiCalculator.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('services.bookingSystem.page.roiSection.roiCalculator.description')}
                  </p>
                </div>
              </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <img 
                    src="https://res.cloudinary.com/effichat/image/upload/v1755248880/ko3tggsbdpplu79kvhg6.png"
                    alt="Your customers want convenience. They can book appointments anytime, from any device, without waiting for confirmation. The system automatically shows only available slots."
                    className="max-w-xs max-h-xs object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('services.bookingSystem.page.implementation.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('services.bookingSystem.page.implementation.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  day: t('services.bookingSystem.page.implementation.timeline.day1.day'),
                  title: t('services.bookingSystem.page.implementation.timeline.day1.title'),
                  description: t('services.bookingSystem.page.implementation.timeline.day1.description'),
                  icon: Rocket
                },
                {
                  day: t('services.bookingSystem.page.implementation.timeline.day2.day'),
                  title: t('services.bookingSystem.page.implementation.timeline.day2.title'),
                  description: t('services.bookingSystem.page.implementation.timeline.day2.description'),
                  icon: Zap
                },
                {
                  day: t('services.bookingSystem.page.implementation.timeline.day3.day'),
                  title: t('services.bookingSystem.page.implementation.timeline.day3.title'),
                  description: t('services.bookingSystem.page.implementation.timeline.day3.description'),
                  icon: TrendingUp
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center space-y-4"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium">{step.day}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                {t('services.bookingSystem.page.finalCta.title')}
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('services.bookingSystem.page.finalCta.description')}
              </p>

              <div className="bg-muted/50 p-6 rounded-lg border max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground mb-4">
                  {t('services.bookingSystem.page.finalCta.reminder')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <GradientButton 
                  size="lg" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Calendar className="w-5 h-5" />
                  {t('services.bookingSystem.page.finalCta.startButton')}
                </GradientButton>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
