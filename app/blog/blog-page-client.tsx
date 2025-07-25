"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalCard } from "@/components/ui/terminal-card";
import { BlogCard } from "@/components/blog/blog-card";
import { ParticlesBackground } from "@/components/particles-background";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Marquee } from "@/components/ui/marquee";
import type { BlogPost } from "@/lib/types";

interface BlogPageClientProps {
  posts: BlogPost[];
}

const faqs = [
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

export default function BlogPageClient({ posts }: BlogPageClientProps) {
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
              Blogi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI uudised, kasutusjuhendid ja tööstuse teadmised
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infinite Sliding Text Marquee */}
      <section className="py-4 bg-muted/10 border-y border-border overflow-hidden">
        <Marquee className="[--duration:30s]" pauseOnHover={false}>
          <div className="flex items-center space-x-8 text-sm font-mono uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            <span>AI NEWS AROUND THE WORLD</span>
            <span className="text-primary">•</span>
            <span>CASE STUDIES</span>
            <span className="text-primary">•</span>
            <span>ARTICLES</span>
            <span className="text-primary">•</span>
            <span>AI NEWS AROUND THE WORLD</span>
            <span className="text-primary">•</span>
            <span>CASE STUDIES</span>
            <span className="text-primary">•</span>
            <span>ARTICLES</span>
            <span className="text-primary">•</span>
          </div>
        </Marquee>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Viimased artiklid"
            subtitle="Jälgi meie blogi, et olla kursis AI-telefonisüsteemide uusimate arenguteega"
            textAlignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full"
              >
                <TerminalCard title="/coming-soon">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Blogi artiklid lisatakse peagi...
                    </p>
                    <div className="terminal-text font-mono text-sm">
                      <div>$ blog.initialize()</div>
                      <div className="text-amber-500">Loading articles...</div>
                      <div>$ echo "Coming soon!"</div>
                    </div>
                  </div>
                </TerminalCard>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Korduma kippuvad küsimused"
            subtitle="Leidke vastused kõige sagedamini esitatavatele küsimustele AI-telefonisüsteemide kohta"
            textAlignment="center"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <TerminalCard title="/korduma-kippuvad-kysimused">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-md px-4">
                    <AccordionTrigger className="text-left font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TerminalCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}