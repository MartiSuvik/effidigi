"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalCard } from "@/components/ui/terminal-card";
import { BlogCard } from "@/components/blog/blog-card";
import { ParticlesBackground } from "@/components/particles-background";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Marquee } from "@/components/ui/marquee";
import type { BlogPost } from "@/lib/types";

interface LocaleBlogPageProps {
  params: {
    locale: string;
  };
}

const faqsEstonian = [
  {
    question: "Kuidas AI-telefonisüsteem aitab mul rohkem kliente teenindada?",
    answer: "AI-telefonisüsteem vastab kõnedele 24/7, sealhulgas väljaspool tööaega. See tähendab, et te ei kaota ühtegi potentsiaalset kliente või broneeringut. Keskmine ettevõte kaotab 43% päringutest, kuid AI-ga saate need kõik kinni püüda."
  },
  {
    question: "Kui kiiresti ma näen tulemusi AI-telefonisüsteemist?",
    answer: "Enamik meie kliente näeb tulemusi juba esimestel nädalatel. Broneeringud suurenevad keskmiselt 25% ja müügitulu kasvab 14%. Täielik investeeringu tagasiteenimine toimub tavaliselt 8-12 nädalaga."
  },
  {
    question: "Kas AI-süsteem saab aru eesti keelest ja meie ärispetsiifikast?",
    answer: "Jah, meie AI on koolitatud eesti keeles ja kohandatud teie ärivaldkonna vajadustele. Olgu tegemist restorani, hambakliiniku või automüügiga - AI õpib teie menüüd, teenuseid ja hinnakirju tundes."
  },
  {
    question: "Kui palju maksab AI-telefonisüsteem?",
    answer: "Meie lahendused algavad 299€/kuus ja on täielikult kohandatavad teie vajadustele. Kuna süsteem teenib ennast kiiresti tagasi suurenenud müügiga, on see investeering mitte kulu."
  },
  {
    question: "Kas ma saan AI-süsteemi enne ostmist proovida?",
    answer: "Kindlasti! Pakume 14-päevast tasuta prooviperioodi. Kui te ei näe tulemusi, ei maksa te midagi. Samuti pakume tasuta konsultatsiooni ja audiiti teie praegustest kõnetöötluse kitsaskohtadest."
  },
  {
    question: "Kuidas AI integreeritakse minu olemasolevate süsteemidega?",
    answer: "Meie AI-süsteem integreeritakse sujuvalt teie olemasolevate süsteemidega - broneerimissüsteemid, kassasüsteemid, CRM ja muud. Seadistamine võtab tavaliselt 24-48 tundi."
  },
  {
    question: "Kas kliendid märkavad, et räägivad AI-ga?",
    answer: "Meie AI on nii arenenud, et paljud kliendid ei märka erinevust. AI suudab pidada loomulikke vestlusi, küsida täpsustavaid küsimusi ja isegi näidata empaatiat. Samas oleme alati ausad klientidega AI kasutamise osas."
  },
  {
    question: "Mida juhtub, kui AI ei oska küsimusele vastata?",
    answer: "AI-süsteem suunab keerulisemad päringud automaatselt inimtöötajale või võtab ühendust hiljem. See tagab, et ükski klient ei jää teenindamata. Samuti õpib AI pidevalt uutest situatsioonidest."
  },
  {
    question: "Kas AI-telefonisüsteem töötab ka COVID-19 piirangute ajal?",
    answer: "Jah, AI töötab täielikult veebipõhiselt ja ei sõltu füüsilisest asukohast. See oli paljudele ettevõtetele elupäästev lahendus pandeemia ajal, kui töötajad pidid kodust tööle jääma."
  },
  {
    question: "Kuidas ma tean, et AI töötab hästi minu ettevõttes?",
    answer: "Pakume detailset analüütikat ja raporteid - mitu kõnet vastati, kui palju broneeringuid tehti, klientide rahulolu skoor jne. Samuti saate kuulata kõnesalvestusi ja jälgida AI jõudlust reaalajas."
  }
];

const faqsEnglish = [
  {
    question: "How does an AI phone system help me serve more customers?",
    answer: "The AI phone system answers calls 24/7, including outside business hours. This means you won't lose any potential customers or bookings. The average business loses 43% of inquiries, but with AI you can capture them all."
  },
  {
    question: "How quickly will I see results from the AI phone system?",
    answer: "Most of our clients see results within the first few weeks. Bookings increase by an average of 25% and sales revenue grows by 14%. Full return on investment typically occurs within 8-12 weeks."
  },
  {
    question: "Does the AI system understand English and our business specifics?",
    answer: "Yes, our AI is trained in English and customized for your industry needs. Whether it's a restaurant, dental clinic, or car sales - the AI learns your menus, services, and pricing."
  },
  {
    question: "How much does an AI phone system cost?",
    answer: "Our solutions start at €299/month and are fully customizable to your needs. Since the system quickly pays for itself through increased sales, it's an investment, not a cost."
  },
  {
    question: "Can I try the AI system before purchasing?",
    answer: "Absolutely! We offer a 14-day free trial period. If you don't see results, you pay nothing. We also provide free consultation and audit of your current call handling bottlenecks."
  },
  {
    question: "How does AI integrate with my existing systems?",
    answer: "Our AI system integrates seamlessly with your existing systems - booking systems, POS systems, CRM, and others. Setup typically takes 24-48 hours."
  },
  {
    question: "Do customers notice they're talking to AI?",
    answer: "Our AI is so advanced that many customers don't notice the difference. AI can hold natural conversations, ask clarifying questions, and even show empathy. However, we're always honest with customers about AI usage."
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: "The AI system automatically routes more complex inquiries to human staff or contacts them later. This ensures no customer goes unserved. The AI also continuously learns from new situations."
  },
  {
    question: "Does the AI phone system work during COVID-19 restrictions?",
    answer: "Yes, AI works completely web-based and doesn't depend on physical location. This was a lifesaving solution for many businesses during the pandemic when employees had to work from home."
  },
  {
    question: "How do I know the AI is working well in my business?",
    answer: "We provide detailed analytics and reports - how many calls were answered, how many bookings were made, customer satisfaction score, etc. You can also listen to call recordings and monitor AI performance in real-time."
  }
];

export default function LocaleBlogPage({ params }: LocaleBlogPageProps) {
  const { t, locale } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Get FAQs based on locale
  const faqs = locale === 'en' ? faqsEnglish : faqsEstonian;

  useEffect(() => {
    // Fetch blog posts from the API with locale
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/blog-posts?locale=${locale}`);
        if (response.ok) {
          const postsData = await response.json();
          setPosts(postsData);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [locale]);

  return (
    <main className="min-h-screen bg-background blog-page-context">
      <section className="relative py-20 pt-24 overflow-hidden animated-gradient-bg">
        <ParticlesBackground />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold pt-10">
              <span className="terminal-text">{'>'} </span>
              {t('blog.title') || 'Blogi'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('blog.subtitle') || 'AI uudised, kasutusjuhendid ja tööstuse teadmised'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infinite Sliding Text Marquee */}
      <section className="py-4 bg-muted/10 border-y border-border overflow-hidden">
        <Marquee className="[--duration:30s]" pauseOnHover={false}>
          <div className="flex items-center space-x-8 text-sm font-mono uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            <span>{locale === 'en' ? 'AI NEWS AROUND THE WORLD' : 'AI UUDISED ÜLEÜLDSE MAAILMAS'}</span>
            <span className="text-primary">•</span>
            <span>{locale === 'en' ? 'CASE STUDIES' : 'JUHTUMIUURINGUD'}</span>
            <span className="text-primary">•</span>
            <span>{locale === 'en' ? 'ARTICLES' : 'ARTIKLID'}</span>
            <span className="text-primary">•</span>
            <span>{locale === 'en' ? 'AI NEWS AROUND THE WORLD' : 'AI UUDISED ÜLEÜLDSE MAAILMAS'}</span>
            <span className="text-primary">•</span>
            <span>{locale === 'en' ? 'CASE STUDIES' : 'JUHTUMIUURINGUD'}</span>
            <span className="text-primary">•</span>
            <span>{locale === 'en' ? 'ARTICLES' : 'ARTIKLID'}</span>
            <span className="text-primary">•</span>
          </div>
        </Marquee>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title={t('blog.latestPosts') || 'Viimased postitused'}
            subtitle={t('blog.postsSubtitle') || 'Tutvu meie uusimate artiklite ja juhtumiuuringutega'}
            textAlignment="center"
            className="mb-12"
          />
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted rounded-lg h-48 mb-4"></div>
                  <div className="space-y-2">
                    <div className="bg-muted rounded h-4 w-3/4"></div>
                    <div className="bg-muted rounded h-4 w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <BlogCard post={post} locale={locale} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {t('blog.noPosts') || 'Blogi postitused tulevad varsti...'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title={t('blog.faq.title') || 'Korduma kippuvad küsimused'}
            subtitle={t('blog.faq.subtitle') || 'Vastused kõige sagedamini esitatavele küsimustele AI-telefonisüsteemide kohta'}
            textAlignment="center"
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
