"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypingEffect } from "@/components/ui/typing-effect";
import { GradientButton } from "@/components/ui/gradient-button";
import { PhoneCall } from "lucide-react";
import Vapi from "@vapi-ai/web";
import { useCal } from "@/hooks/use-cal";
import { useTranslation } from "@/lib/i18n";
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
  const { t, isLoading, locale } = useTranslation();
  const [isCallActive, setIsCallActive] = useState(false);
  const [isCallInitialized, setIsCallInitialized] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [vapiError, setVapiError] = useState<string | null>(null);

  // Helper function to get translation with proper fallback
  const getTranslation = (key: string, fallback: string) => {
    const translation = t(key);
    
    // Return the translation if it exists and is not the same as the key
    return (translation && translation !== key && translation.trim() !== '') ? translation : fallback;
  };

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
    if (isConnecting) return getTranslation('hero.connecting', 'Connecting...');
    if (isCallActive) return getTranslation('hero.endCall', 'End Call');
    return getTranslation('hero.ctaMain', 'Talk to AI');
  };

  const serviceFeatures: ServiceFeature[] = [
    { icon: Phone, title: getTranslation('hero.features.parallelCalls', 'Parallel Calls'), gradientColors: ["from-blue-400", "to-blue-600"] },
    { icon: Clock, title: getTranslation('hero.features.availability', '24/7 Availability'), gradientColors: ["from-green-400", "to-green-600"] },
    { icon: Languages, title: getTranslation('hero.features.languages', '30+ Languages'), gradientColors: ["from-purple-400", "to-purple-600"] },
    { icon: Brain, title: getTranslation('hero.features.agenticAI', 'Agentic AI'), gradientColors: ["from-pink-400", "to-pink-600"] },
    { icon: Users, title: getTranslation('hero.features.builtInCRM', 'Built-in CRM'), gradientColors: ["from-gray-400", "to-gray-600"] },
    { icon: Blocks, title: getTranslation('hero.features.integrations', '7000+ Integrations'), gradientColors: ["from-pink-300", "to-pink-500"] },
    { icon: Calendar, title: getTranslation('hero.features.googleCalendar', 'Google Calendar'), gradientColors: ["from-green-500", "to-green-700"] },
    { icon: Target, title: getTranslation('hero.features.autoLeadCapture', 'Auto Lead Capture'), gradientColors: ["from-orange-400", "to-orange-600"] },
    { icon: MessageSquare, title: getTranslation('hero.features.stageTracking', 'Stage Tracking'), gradientColors: ["from-green-300", "to-green-500"] },
    { icon: Shield, title: getTranslation('hero.features.customNumber', 'Custom Number'), gradientColors: ["from-blue-500", "to-blue-700"] },
    { icon: Mic, title: getTranslation('hero.features.liveTranscription', 'Live Transcription'), gradientColors: ["from-orange-300", "to-orange-500"] },
    { icon: FileText, title: getTranslation('hero.features.transcriptionForwarding', 'Transcription Forwarding'), gradientColors: ["from-purple-500", "to-purple-700"] },
    { icon: Globe, title: getTranslation('hero.features.websiteLearning', 'Website Learning'), gradientColors: ["from-blue-300", "to-blue-500"] },
    { icon: Upload, title: getTranslation('hero.features.documentTraining', 'Document Training'), gradientColors: ["from-blue-600", "to-blue-800"] },
    { icon: BarChart3, title: getTranslation('hero.features.knowledgeEngine', 'Knowledge Engine'), gradientColors: ["from-gray-500", "to-gray-700"] },
    { icon: Brain, title: getTranslation('hero.features.trainingSuggestions', 'Training Suggestions'), gradientColors: ["from-purple-400", "to-purple-600"] },
    { icon: MessageCircle, title: getTranslation('hero.features.websiteChat', 'Website Chat'), gradientColors: ["from-green-400", "to-green-600"] },
    { icon: MessageCircle, title: getTranslation('hero.features.discordBot', 'Discord Bot'), gradientColors: ["from-purple-300", "to-purple-500"] },
    { icon: Phone, title: getTranslation('hero.features.smartCallRouting', 'Smart Call Routing'), gradientColors: ["from-blue-400", "to-blue-600"] },
    { icon: Shield, title: getTranslation('hero.features.spamBlocking', 'Spam Blocking'), gradientColors: ["from-red-400", "to-red-600"] },
    { icon: Mic, title: getTranslation('hero.features.callRecording', 'Call Recording'), gradientColors: ["from-orange-400", "to-orange-600"] },
    { icon: Shield, title: getTranslation('hero.features.enterpriseSecurity', 'Enterprise Security'), gradientColors: ["from-gray-600", "to-gray-800"] },
    { icon: Smile, title: getTranslation('hero.features.sentimentAnalysis', 'Sentiment Analysis'), gradientColors: ["from-yellow-400", "to-yellow-600"] },
    { icon: FileText, title: getTranslation('hero.features.emailSummaries', 'Email Summaries'), gradientColors: ["from-blue-200", "to-blue-400"] },
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
                  <span className="terminal-text text-xl md:text-2xl block mb-2">{'>'} {getTranslation('hero.title', 'AI-powered')}</span>
                  <TypingEffect 
                    sequences={[
                      getTranslation('hero.subtitle1', '24/7 answering service'),
                      1000,
                      getTranslation('hero.subtitle2', 'call automation'),
                      1000,
                      getTranslation('hero.subtitle3', 'revenue growth'),
                      1000,
                      getTranslation('hero.subtitle4', 'for businesses'),
                      1000,
                    ]}
                    className="block"
                  />
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  {getTranslation('hero.description', 'We build AI systems so you can earn more, spend less, and grow faster.')}
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
                  {getTranslation('hero.ctaSecondary', 'Request Quote')}
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
                {t('hero.trustedClients')}
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
              title={t('hero.testTitle')}
              subtitle={t('hero.testSubtitle')}
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
                  {t('hero.testimonial.quote')}
                </blockquote>
                <cite className="text-sm font-medium">{t('hero.testimonial.author')}</cite>
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
                  {t('hero.platformTitle')}
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