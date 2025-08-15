"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { BackButton } from "@/components/ui/back-button";
import { ParticlesBackground } from "@/components/particles-background";
import { NotificationForm } from "@/components/ui/notification-form";
import { useCal } from "@/hooks/use-cal";
import { useTranslation } from "@/lib/i18n";
import { 
  Clock, 
  Bell, 
  Rocket,
  ArrowRight
} from "lucide-react";

export default function ComingSoonPageClient() {
  const { openCalModal } = useCal();
  const { t } = useTranslation();
  const [isNotificationFormOpen, setIsNotificationFormOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 pt-32 overflow-hidden animated-gradient-bg min-h-screen flex items-center">
        <ParticlesBackground />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="mb-8">
              <BackButton fallbackHref="/#services">
                {t('comingSoon.backButton')}
              </BackButton>
            </div>

            {/* Clock Icon with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8"
            >
              <Clock className="w-12 h-12 text-primary" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="terminal-text">{'>'} </span>
              {t('comingSoon.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('comingSoon.subtitle')}
            </p>

            {/* Features Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
            >
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('comingSoon.features.notifications.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('comingSoon.features.notifications.description')}</p>
              </div>

              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('comingSoon.features.priority.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('comingSoon.features.priority.description')}</p>
              </div>

              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('comingSoon.features.earlyAccess.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('comingSoon.features.earlyAccess.description')}</p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-muted/30 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto mt-12"
            >
              <h2 className="text-2xl font-bold mb-4">{t('comingSoon.cta.title')}</h2>
              <p className="text-muted-foreground mb-6">{t('comingSoon.cta.description')}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton 
                  size="lg" 
                  className="gap-2"
                  onClick={() => setIsNotificationFormOpen(true)}
                >
                  <Bell className="w-5 h-5" />
                  {t('comingSoon.cta.notifyButton')}
                </GradientButton>
                <GradientButton 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Rocket className="w-5 h-5" />
                  {t('comingSoon.cta.consultButton')}
                </GradientButton>
              </div>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-8">
              {t('comingSoon.bottomText')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notification Form Modal */}
      <NotificationForm 
        isOpen={isNotificationFormOpen}
        onClose={() => setIsNotificationFormOpen(false)}
      />
    </>
  );
}
