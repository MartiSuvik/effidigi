"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Utensils } from "lucide-react";

export default function CaseStudiesPage() {
  const { t, locale } = useTranslation();

const caseStudies = [
  {
    id: "body-treatment-salon",
    title: t('caseStudies.articles.bodyTreatment.title'),
    excerpt: t('caseStudies.articles.bodyTreatment.excerpt'),
    category: t('caseStudies.articles.bodyTreatment.category'),
    icon: Building2,
    href: `/${locale}/case-studies/body-treatment-salon-${locale}`,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: "maple-street-bistro",
    title: t('caseStudies.articles.mapleStreet.title'),
    excerpt: t('caseStudies.articles.mapleStreet.excerpt'),
    category: t('caseStudies.articles.mapleStreet.category'),
    icon: Utensils,
    href: `/${locale}/case-studies/maple-street-bistro-${locale}`,
    gradient: "from-blue-500 to-indigo-500"
  }
];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-0 md:pt-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <SectionHeading
              title={t('caseStudies.title')}
              subtitle={t('caseStudies.subtitle')}
              textAlignment="center"
            />
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 h-full border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${study.gradient} text-white`}>
                        <study.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {study.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {study.excerpt}
                    </CardDescription>
                    <Link href={study.href}>
                      <GradientButton className="w-full group">
                        {t('caseStudies.readMore')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </GradientButton>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
