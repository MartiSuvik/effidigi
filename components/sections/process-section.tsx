"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ParticlesBackground } from "@/components/particles-background";

export function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Avastamine",
      description: "Alustame teie ärivajaduste, väljakutsete ja eesmärkide mõistmisest põhjaliku konsultatsiooni kaudu"
    },
    {
      number: "02", 
      title: "Strateegia",
      description: "Meie meeskond töötab välja kohandatud AI rakendusplaani, mis on kooskõlas teie konkreetsete eesmärkide ja nõuetega"
    },
    {
      number: "03",
      title: "Rakendamine", 
      description: "Viime lahenduse ellu täpsusega, tagades kvaliteedi pideva testimise ja täiustamise kaudu"
    },
    {
      number: "04",
      title: "Tugi",
      description: "Pidev hooldus, optimeerimine ja tugi, et tagada teie AI lahenduse parim jõudlus"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Muutke oma äri AI-ga"
          subtitle="Meie läbimõeldud nelja-astmeline protsess tagab teie AI-lahenduse edukat rakendamist ja pikaajalist edu"
          textAlignment="center"
        />
        
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection lines - hidden on mobile */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary opacity-30 z-0" 
                 style={{ top: '4rem', left: '12.5%', right: '12.5%', width: '75%' }} />
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4 h-full flex flex-col">
                  {/* Numbered circle */}
                  <div className="mx-auto w-16 h-16 rounded-full border-2 border-secondary flex items-center justify-center bg-background">
                    <span className="text-2xl font-bold text-secondary font-mono">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 border-l-4 border-primary">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Meie struktureeritud lähenemisviis tagab, et iga AI projekt viiakse läbi professionaalselt 
              ja saavutab oodatud tulemused. Alates esimesest konsultatsioonist kuni pikaajalise toeni."
            </blockquote>
            <cite className="text-sm font-medium text-foreground">
              - EFFI meeskond
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}