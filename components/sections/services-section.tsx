"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalCard } from "@/components/ui/terminal-card";
import { Utensils, Car, Stethoscope, Sofa } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function ServicesSection() {
  const { t } = useTranslation();
  
  const industries = [
    {
      name: t('services.restaurants.title'),
      icon: <Utensils className="h-8 w-8 terminal-text" />,
      description: t('services.restaurants.description'),
      benefits: [
        t('services.restaurants.benefits.0'),
        t('services.restaurants.benefits.1'),
        t('services.restaurants.benefits.2')
      ],
      code: t('services.restaurants.code')
    },
    {
      name: t('services.automotive.title'),
      icon: <Car className="h-8 w-8 secondary-text" />,
      description: t('services.automotive.description'),
      benefits: [
        t('services.automotive.benefits.0'),
        t('services.automotive.benefits.1'),
        t('services.automotive.benefits.2')
      ],
      code: t('services.automotive.code')
    },
    {
      name: t('services.dental.title'),
      icon: <Stethoscope className="h-8 w-8 terminal-text" />,
      description: t('services.dental.description'),
      benefits: [
        t('services.dental.benefits.0'),
        t('services.dental.benefits.1'),
        t('services.dental.benefits.2')
      ],
      code: t('services.dental.code')
    },
    {
      name: t('services.furniture.title'),
      icon: <Sofa className="h-8 w-8 secondary-text" />,
      description: t('services.furniture.description'),
      benefits: [
        t('services.furniture.benefits.0'),
        t('services.furniture.benefits.1'),
        t('services.furniture.benefits.2')
      ],
      code: t('services.furniture.code')
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={t('services.sectionTitle')}
          subtitle={t('services.sectionSubtitle')}
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
                    <h4 className="text-sm font-medium mb-2">{t('services.benefits.title')}</h4>
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