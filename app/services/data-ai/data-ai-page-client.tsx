"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { BackButton } from "@/components/ui/back-button";
import { ParticlesBackground } from "@/components/particles-background";
import { useCal } from "@/hooks/use-cal";
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
                  Tagasi teenustele
                </BackButton>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="terminal-text"></span>
                AI Analytics
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Muuda oma andmed võimsaks äriintelligentsiks. Visualiseeri, ennusta ja kasva targemalt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <GradientButton 
                  size="lg" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Rocket className="w-5 h-5" />
                  Alusta kohe
                </GradientButton>
                <GradientButton 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Eye className="w-5 h-5" />
                  Küsi Demot
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
                  <h2 className="text-3xl font-bold">Visuaalsed Dashboardid</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Muuda keerulised andmed selgeteks ja mõistlikeks dashboardideks. 
                  Jälgi oma äri jõudlust reaalajas ja tee kiireid otsuseid.
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Reaalajas andmete visualiseerimine
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Kohandatud KPI jälgimine
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Mobiilioptimeeritud vaated
                  </li>
                </ul>
                
                <GradientButton 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  Vaata dashboard demo
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
                  <h2 className="text-3xl font-bold">Müügi Ennustamine</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Kasuta masinõpet oma müügitulemuste ennustamiseks kuni 12 kuud ette. 
                  Täpsed prognoosid aitavad planeerida ja optimeerida.
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    95% täpsusega prognoosid
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Hooajaline analüüs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Automaatsed uuendused
                  </li>
                </ul>
                
                <GradientButton 
                  variant="outline"
                  className="gap-2"
                  onClick={openCalModal}
                >
                  Alusta ennustamist
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
                  <h2 className="text-3xl font-bold">AI Ennustused</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Meie AI tuvastab varjatud mustreid ja ennustab trende, 
                  mida inimsilm ei märka. Saad konkurentsieelise.
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Automaatne mustrite leidmine
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Anomaaliate tuvastamine
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Täiustuvad mudelid
                  </li>
                </ul>
                
                <GradientButton 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  Avasta AI võimu
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
                  <h2 className="text-3xl font-bold">Müügiarvutused</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Automatiseeri kõik olulised müügiarvutused. ROI, konversioonid, 
                  jõudluse mõõdikud - kõik ühe vaatega.
                </p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Automaatsed KPI-d
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Võrdlusanalüüs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Reaalajas uuendused
                  </li>
                </ul>
                
                <GradientButton 
                  variant="outline"
                  className="gap-2"
                  onClick={openCalModal}
                >
                  Optimeeri müüki
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
                Alusta oma andmete revolutsiooni
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Liitu sadadega ettevõtetega, kes on juba muutnud oma andmed võimsaks äriintelligentsiks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton 
                  size="lg" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Rocket className="w-5 h-5" />
                  Alusta tasuta
                </GradientButton>
                <GradientButton 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={openCalModal}
                >
                  <Eye className="w-5 h-5" />
                  Küsi Demot
                </GradientButton>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Tasuta konsultatsioon • 30 minutit • Kohesed tulemused
              </p>
            </motion.div>
          </div>
        </section>
    </>
  );
}