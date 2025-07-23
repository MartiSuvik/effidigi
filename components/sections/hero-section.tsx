"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypingEffect } from "@/components/ui/typing-effect";
import { GradientButton } from "@/components/ui/gradient-button";
import { PhoneCall } from "lucide-react";
import Vapi from "@vapi-ai/web";
import { useCal } from "@/hooks/use-cal";
import { MarqueeDemo } from "@/components/ui/marquee-demo";
import { AICarousel } from "@/components/ui/ai-carousel";
import { AIVoicecallerTest } from "@/components/ui/ai-voicecaller-test";
import { IPhone15Pro } from "@/components/ui/iphone-15-pro";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIconsGrid } from "@/components/ui/service-icons-grid";
import { ParticlesBackground } from "../particles-background";
import { 
  Phone, 
  Clock, 
  Languages, 
  Brain, 
  Users, 
  Plug, 
  Calendar, 
  Target, 
  MessageSquare, 
  Shield, 
  Mic,
  Globe,
  FileText,
  Smile,
  Upload,
  BarChart3,
  MessageCircle,
  Blocks
} from "lucide-react";

interface ServiceFeature {
  icon: typeof Phone;
  title: string;
  gradientColors: [string, string];
}

export function HeroSection() {
  const { openCalModal } = useCal();
  const [isCallActive, setIsCallActive] = useState(false);
  const [isCallInitialized, setIsCallInitialized] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [vapiError, setVapiError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Initialize Vapi instance with public key
      const vapiInstance = new Vapi("29c30a3c-26ec-484c-8cb3-6898108bf017");
      
      // Set up event listeners
      vapiInstance.on('call-start', () => {
        console.log('Call has started');
        setIsCallActive(true);
        setIsConnecting(false);
        setVapiError(null);
      });
      
      vapiInstance.on('call-end', () => {
        console.log('Call has ended');
        setIsCallActive(false);
        setIsConnecting(false);
      });
      
      vapiInstance.on('error', (error) => {
        console.error('Vapi error:', error);
        setVapiError(error.message || 'An error occurred with the AI call system');
        setIsCallActive(false);
        setIsConnecting(false);
      });
      
      vapiInstance.on('message', (message) => {
        console.log('Assistant said:', message.content);
      });
      
      // Store Vapi instance globally
      (window as any).vapiInstance = vapiInstance;
      setIsCallInitialized(true);
      
      return () => {
        // Cleanup when component unmounts
        if ((window as any).vapiInstance) {
          try {
            (window as any).vapiInstance.stop();
          } catch (error) {
            console.warn('Error during Vapi cleanup:', error);
          }
        }
      };
    } catch (error) {
      console.error('Failed to initialize Vapi:', error);
      setVapiError('Failed to initialize AI call system');
    }
  }, []);

  const startVapiCall = async () => {
    if (!(window as any).vapiInstance) {
      setVapiError('AI call system not initialized');
      return;
    }
    
    try {
      if (isCallActive) {
        (window as any).vapiInstance.stop();
      } else {
        setIsConnecting(true);
        setVapiError(null);
        // Start call with assistant ID
        await (window as any).vapiInstance.start("6f39e43d-6d40-4745-995b-2134ad64a2f9");
      }
    } catch (error) {
      console.error('Error starting/stopping call:', error);
      setVapiError('Failed to start AI call. Please check your internet connection and try again.');
      setIsCallActive(false);
      setIsConnecting(false);
    }
  };

  const getButtonText = () => {
    if (isConnecting) return "Connecting...";
    if (isCallActive) return "Lõpeta kõne";
    return "Räägi AI-ga";
  };

  const serviceFeatures: ServiceFeature[] = [
    { icon: Phone, title: "Paralleelsed Kõned", gradientColors: ["from-blue-400", "to-blue-600"] },
    { icon: Clock, title: "24/7 Kättesaadavus", gradientColors: ["from-green-400", "to-green-600"] },
    { icon: Languages, title: "30+ Keelt", gradientColors: ["from-purple-400", "to-purple-600"] },
    { icon: Brain, title: "Agentic AI", gradientColors: ["from-pink-400", "to-pink-600"] },
    { icon: Users, title: "Sisseehitatud CRM", gradientColors: ["from-gray-400", "to-gray-600"] },
    { icon: Blocks, title: "7000+ Integratsiooni", gradientColors: ["from-pink-300", "to-pink-500"] },
    { icon: Calendar, title: "Google Kalender", gradientColors: ["from-green-500", "to-green-700"] },
    { icon: Target, title: "Auto Lead Capture", gradientColors: ["from-orange-400", "to-orange-600"] },
    { icon: MessageSquare, title: "Etapi Jälgimine", gradientColors: ["from-green-300", "to-green-500"] },
    { icon: Shield, title: "Kohandatud Number", gradientColors: ["from-blue-500", "to-blue-700"] },
    { icon: Mic, title: "Live Transkriptsioon", gradientColors: ["from-orange-300", "to-orange-500"] },
    { icon: FileText, title: "Transkriptsiooni Edastus", gradientColors: ["from-purple-500", "to-purple-700"] },
    { icon: Globe, title: "Veebilehtede Õppimine", gradientColors: ["from-blue-300", "to-blue-500"] },
    { icon: Upload, title: "Dokumentide Treening", gradientColors: ["from-blue-600", "to-blue-800"] },
    { icon: BarChart3, title: "Teadmiste Mootor", gradientColors: ["from-gray-500", "to-gray-700"] },
    { icon: Brain, title: "Treening Soovitused", gradientColors: ["from-purple-400", "to-purple-600"] },
    { icon: MessageCircle, title: "Veebilehtede Vestlus", gradientColors: ["from-green-400", "to-green-600"] },
    { icon: MessageCircle, title: "Discord Bot", gradientColors: ["from-purple-300", "to-purple-500"] },
    { icon: Phone, title: "Tark Kõnede Suunamine", gradientColors: ["from-blue-400", "to-blue-600"] },
    { icon: Shield, title: "Rämpspostituse Blokeering", gradientColors: ["from-red-400", "to-red-600"] },
    { icon: Mic, title: "Kõnede Salvestamine", gradientColors: ["from-orange-400", "to-orange-600"] },
    { icon: Shield, title: "Ettevõtte Turvalisus", gradientColors: ["from-gray-600", "to-gray-800"] },
    { icon: Smile, title: "Sentiment- Analüüs", gradientColors: ["from-yellow-400", "to-yellow-600"] },
    { icon: FileText, title: "E-posti Kokkuvõtted", gradientColors: ["from-blue-200", "to-blue-400"] },
  ];

  return (
    <>
      <section className="relative py-20 pt-32 overflow-hidden animated-gradient-bg">
        <ParticlesBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="flex-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  <span className="terminal-text text-xl md:text-2xl block mb-2">{'>'} AI-põhine</span>
                  <TypingEffect 
                    sequences={[
                      "24/7 vastamisteenus",
                      1000,
                      "kõnede automatsioon",
                      1000,
                      "tulu suurendamine",
                      1000,
                      "Tallinna ettevõtetele",
                      1000,
                    ]}
                    className="block"
                  />
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  Me ehitame AI-süsteeme selleks, et te teeniksite rohkem, kulutaksite vähem ja kasvaksite kiiremini. Nüüd ka Tallinnas!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <GradientButton 
                  size="lg" 
                  className="gap-2 py-6 px-8 text-lg"
                  onClick={startVapiCall}
                  disabled={!isCallInitialized || isConnecting}
                >
                  <PhoneCall className="w-6 h-6" />
                  {getButtonText()}
                </GradientButton>
                <GradientButton 
                  size="lg" 
                  variant="outline"
                  className="gap-2 py-6 px-8 text-lg"
                  onClick={openCalModal}
                >
                  Küsi pakkumist
                </GradientButton>
              </motion.div>

              {vapiError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-4 border-red-500/20 bg-red-500/5"
                >
                  <p className="text-red-400 text-sm">
                    {vapiError}
                  </p>
                </motion.div>
              )}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 w-full max-w-2xl lg:max-w-none flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-2xl">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=effichat&public_id=pfen3byeo0x5o0kcwvtu&profile=cld-default"
                  width="640"
                  height="360" 
                  style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360', borderRadius: '12px' }}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  className="rounded-xl shadow-2xl"
                />
                
                {/* Enhanced 3D floating elements */}
                <div 
                  className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/15 rounded-full blur-3xl -z-10 animate-pulse"
                  style={{
                    transform: "translateZ(-50px) rotateX(45deg)",
                    filter: "blur(40px)"
                  }}
                />
                <div 
                  className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/15 rounded-full blur-3xl -z-10 animate-pulse"
                  style={{
                    transform: "translateZ(-50px) rotateY(45deg)",
                    filter: "blur(40px)",
                    animationDelay: "1s"
                  }}
                />
                <div 
                  className="absolute top-1/2 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10"
                  style={{
                    transform: "translateZ(-30px) rotateZ(45deg)",
                    filter: "blur(30px)"
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Marquee Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20 space-y-8"
          >
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-6">
                Meie usaldusväärsed kliendid ja partnerid
              </p>
            </div>
            <div className="relative overflow-hidden">
              <MarqueeDemo />
            </div>
          </motion.div>

          {/* AI Employees Section */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <AICarousel />
            </motion.div>
            
            {/* AI Test Section */}
            <SectionHeading 
              title="Proovi kohe meie AI-telefonisüsteemi"
              subtitle="Sisesta oma telefoninumber ja saad 30 sekundi jooksul kõne meie AI-agendilt."
              textAlignment="center"
            />
            
            {/* AI Test Form with iPhone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-[450px] h-[600px] overflow-hidden rounded-3xl">
                {/* Larger iPhone positioned to show middle section */}
                <IPhone15Pro className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[960px] scale-90">
                  <AIVoicecallerTest />
                </IPhone15Pro>
                
                {/* Subtle gradient overlays to enhance the crop effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card p-6 border-l-4 border-primary max-w-2xl mx-auto">
                <blockquote className="text-muted-foreground italic mb-2">
                  "Testkõne aitas meil mõista, kui võimas see tehnoloogia on. 
                  Kohe teadsime, et vajame seda."
                </blockquote>
                <cite className="text-sm font-medium">- Kohvik Katherinenthal, Tallinn</cite>
              </div>
            </motion.div>

                        {/* Service Icons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 mb-16"
            >
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Kõik vajalik ühe platvormi sees
                </h3>
              </div>
              <ServiceIconsGrid services={serviceFeatures} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}