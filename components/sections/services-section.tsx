"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalCard } from "@/components/ui/terminal-card";
import { Utensils, Car, Stethoscope, Sofa } from "lucide-react";

export function ServicesSection() {
  const industries = [
    {
      name: "Restoranid Eestis",
      icon: <Utensils className="h-8 w-8 terminal-text" />,
      description: "Optimeerige broneeringuid ja tellimusi Tallinna restoranides, vähendage personali koormust ja tõstke kliendirahulolu Eesti gastronoomia sektoris.",
      benefits: ["14% müügitõus Eesti turul", "25% rohkem broneeringuid Tallinnas", "73% vähem telefoni haldamise aega"],
      code: `// Tallinna restorani AI konfigureerimine
const restoranAI = new EFFI.Agent({
  tüüp: "restoran",
  asukoht: "Tallinn, Eesti",
  keel: "eesti",
  võimalused: ["broneerimine", "tellimused", "menüüInfo"],
  integratsioonid: ["OpenTable", "Wolt", "Bolt Food"]
});`
    },
    {
      name: "Automüük Eestis",
      icon: <Car className="h-8 w-8 secondary-text" />,
      description: "Haarake proovisõidu päringud üle Eesti, vastake hinnaküsimustele ja suunage kvalifitseeritud ostjad Tallinna ja teiste linnade müügimeeskonnale.",
      benefits: ["60% vähem katkestatud kõnesid", "20% tõus hooldusaegade kasutuses", "12% tõus proovisõitude kohalviimises"],
      code: `// Eesti automüügi AI konfigureerimine
const autoAI = new EFFI.Agent({
  tüüp: "automüük",
  asukoht: "Eesti",
  keel: "eesti",
  võimalused: ["proovisõidud", "hinnapäringud", "tehnilineInfo"],
  integratsioonid: ["DMS", "CRM", "Calendly"]
});`
    },
    {
      name: "Hambakliinikud Eestis",
      icon: <Stethoscope className="h-8 w-8 terminal-text" />,
      description: "Käsitlege erakorralisi kõnesid Tallinna hambakliinikutes, planeerige kohtumisi ja vastake Eesti kindlustusküsimustele.",
      benefits: ["22% kasv uute patsientide vastuvõttudes", "35% vähem tühistamisi", "+€15k lisatulu kuus"],
      code: `// Tallinna hambakliiniku AI konfigureerimine
const kliinikAI = new EFFI.Agent({
  tüüp: "hambaarst",
  asukoht: "Tallinn, Eesti",
  keel: "eesti",
  võimalused: ["kohtumised", "erakorralised", "kindlustusInfo"],
  integratsioonid: ["PMS", "Eesti Haigekassa"]
});`
    },
    {
      name: "Mööblipoed Eestis",
      icon: <Sofa className="h-8 w-8 secondary-text" />,
      description: "Jagage tooteinformatsiooni Eesti mööblipoodides, kontrollige laoseisu ja planeerige konsultatsioone kogu Eesti ulatuses.",
      benefits: ["18% kasv poekülastustes", "27% tõus järelhelistamistes", "30% rohkem lõpuleviidud müüke"],
      code: `// Eesti mööblipoe AI konfigureerimine
const poeAI = new EFFI.Agent({
  tüüp: "mööblipood",
  asukoht: "Eesti",
  keel: "eesti",
  võimalused: ["tootePäringud", "laoseis", "koduKonsultatsioonid"],
  integratsioonid: ["POS", "laoSüsteem", "CRM"]
});`
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Tööstusharu põhised lahendused Eestis"
          subtitle="Meie AI-lahendus on kohandatud Eesti ärivaldkondade vajadustele, pakkudes spetsiifiilist funktsionaalsust ja integratsioonivõimalusi Tallinna ja teiste Eesti linnade ettevõtetele."
          textAlignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TerminalCard 
                variant={index % 2 === 0 ? "primary" : "secondary"}
                title={`/${industry.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {industry.icon}
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground">{industry.description}</p>
                  
                  <div className="bg-background/30 rounded-md p-3">
                    <h4 className="text-sm font-medium mb-2">Peamised eelised Eesti turul:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TerminalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}