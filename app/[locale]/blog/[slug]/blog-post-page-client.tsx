"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, PhoneCall, Zap, TrendingUp } from "lucide-react";
import { ParticlesBackground } from "@/components/particles-background";
import { GradientButton } from "@/components/ui/gradient-button";
import { BackButton } from "@/components/ui/back-button";
import { BlogContent } from "@/components/blog/blog-content";
import { TerminalCard } from "@/components/ui/terminal-card";
import { useCal } from "@/hooks/use-cal";
import type { BlogPost } from "@/lib/types";

interface BlogPostPageClientProps {
  post: BlogPost;
}

export default function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  const { openCalModal } = useCal();
  
  // Split content into sections at paragraph boundaries
  const splitContentAtParagraphs = (content: string) => {
    // Split by --- if present (manual sections)
    if (content.includes('---')) {
      return content.split('---').filter(section => section.trim().length > 0);
    }
    
    // Otherwise, split by double line breaks (paragraph boundaries)
    const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);
    const totalParagraphs = paragraphs.length;
    
    if (totalParagraphs <= 3) {
      return [content]; // Too short to split
    }
    
    // Split into roughly 3 sections at paragraph boundaries
    const firstThird = Math.floor(totalParagraphs / 3);
    const secondThird = Math.floor((totalParagraphs * 2) / 3);
    
    return [
      paragraphs.slice(0, firstThird).join('\n\n'),
      paragraphs.slice(firstThird, secondThird).join('\n\n'),
      paragraphs.slice(secondThird).join('\n\n')
    ];
  };

  const contentSections = splitContentAtParagraphs(post.content);

  return (
    <>
        <section className="relative py-20 pt-24 overflow-hidden animated-gradient-bg">
          <ParticlesBackground />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-8">
                <BackButton fallbackHref="/blog">
                  Tagasi blogi
                </BackButton>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {post.title}
                </h1>
                
                {post.excerpt && (
                  <p className="text-xl text-muted-foreground">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  
                  {post.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('et-EE')}</span>
                    </div>
                  )}
                  
                  {post.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min lugemist</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              {/* Render content based on sections */}
              {contentSections.length === 1 ? (
                /* Single content block - no splitting needed */
                <div className="blog-content-wrapper">
                  <BlogContent content={contentSections[0]} />
                </div>
              ) : (
                /* Multiple sections with CTAs */
                <>
                  {/* First section of content */}
                  <div className="blog-content-wrapper">
                    <BlogContent content={contentSections[0]} />
                  </div>

                  {/* First Contact CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="my-12"
                  >
                    <TerminalCard variant="primary" title="/ai-investeeringu-vaartu">
                      <div className="text-center space-y-4 p-6">
                        <Zap className="w-12 h-12 terminal-text mx-auto" />
                        <blockquote className="text-lg italic text-muted-foreground">
                          "AI-telefonisüsteem teenis meie investeeringu tagasi vaid 11 nädalaga. 
                          Saavutasime 14% müügitõusu ja 25% rohkem broneeringuid."
                        </blockquote>
                        <cite className="text-sm text-muted-foreground">- Jet's Pizza, 380 asutust</cite>
                        <div className="pt-4">
                          <GradientButton 
                            size="lg" 
                            className="gap-2"
                            onClick={openCalModal}
                          >
                            <PhoneCall className="w-5 h-5" />
                            Küsi tasuta konsultatsiooni
                          </GradientButton>
                        </div>
                      </div>
                    </TerminalCard>
                  </motion.div>

                  {/* Second section of content */}
                  <div className="blog-content-wrapper">
                    <BlogContent content={contentSections[1]} />
                  </div>

                  {/* Second Contact CTA - only show if we have 3 sections */}
                  {contentSections.length > 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="my-12"
                    >
                      <TerminalCard variant="secondary" title="/24-7-klienditeenindus">
                        <div className="text-center space-y-4 p-6">
                          <Clock className="w-12 h-12 secondary-text mx-auto" />
                          <blockquote className="text-lg italic text-muted-foreground">
                            "62% broneeringu- ja kohtumispäringutest toimub väljaspool tööaega. 
                            Meie AI vastab kõnedele ööpäevaringselt, nii et me ei kaota ühtegi kliente."
                          </blockquote>
                          <cite className="text-sm text-muted-foreground">- Deloitte'i uuring restoraniärist</cite>
                          <div className="pt-4">
                            <GradientButton 
                              size="lg" 
                              variant="outline"
                              className="gap-2"
                              onClick={openCalModal}
                            >
                              <PhoneCall className="w-5 h-5" />
                              Helista: +372 5340 0432
                            </GradientButton>
                          </div>
                        </div>
                      </TerminalCard>
                    </motion.div>
                  )}

                  {/* Third section of content */}
                  {contentSections.length > 2 && (
                    <div className="blog-content-wrapper">
                      <BlogContent content={contentSections[2]} />
                    </div>
                  )}
                </>
              )}

              {/* Additional back button within content - only for longer articles */}
              {contentSections.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center py-8"
                >
                  <BackButton fallbackHref="/blog" size="default">
                    Tagasi blogi
                  </BackButton>
                </motion.div>
              )}

              {/* Third Contact CTA - only for longer articles */}
              {contentSections.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="my-12"
                >
                  <TerminalCard variant="primary" title="/konkurentsieelis">
                    <div className="text-center space-y-4 p-6">
                      <TrendingUp className="w-12 h-12 terminal-text mx-auto" />
                      <blockquote className="text-lg italic text-muted-foreground">
                        "Restoranid, kes täna investeerivad targalt tehisintellekti, 
                        loovad konkurentsieelise homse turu jaoks. Ära jää maha!"
                      </blockquote>
                      <cite className="text-sm text-muted-foreground">- Deloitte'i tarbijatööstuse ekspert</cite>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <GradientButton 
                          size="lg" 
                          className="gap-2"
                          onClick={openCalModal}
                        >
                          <PhoneCall className="w-5 h-5" />
                          Broneeri demo
                        </GradientButton>
                        <GradientButton 
                          size="lg" 
                          variant="outline"
                          className="gap-2"
                          onClick={openCalModal}
                        >
                          Küsi pakkumist
                        </GradientButton>
                      </div>
                      <p className="text-sm text-muted-foreground pt-2">
                        Tasuta 14-päevane prooviperiood • Nullriskiga tutvumine
                      </p>
                    </div>
                  </TerminalCard>
                </motion.div>
              )}

              {/* Final CTA at the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-t border-border pt-12 mt-16"
              >
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">
                    Valmis oma ettevõtet AI-ga tugevdama?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Liitu sadadega ettevõtetega, kes on juba avastanud AI-telefonisüsteemi võimu. 
                    Alusta tasuta konsultatsiooniga ja vaata, kuidas me saame aidata teie äri kasvatada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <GradientButton 
                      size="lg" 
                      className="gap-2"
                      onClick={openCalModal}
                    >
                      <PhoneCall className="w-5 h-5" />
                      Alusta tasuta
                    </GradientButton>
                    <Link href="/#contact">
                      <GradientButton 
                        size="lg" 
                        variant="outline"
                        className="gap-2 w-full"
                      >
                        Vaata rohkem infot
                      </GradientButton>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Back button at the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center pt-8"
              >
                <BackButton fallbackHref="/blog" size="default">
                  Tagasi blogi
                </BackButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
    </>
  );
}