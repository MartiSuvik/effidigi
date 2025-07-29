"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/ui/gradient-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { PhoneCall, Menu as MenuIcon, X, BarChart3, Phone, MessageCircle, Users, FileText, BookOpen } from "lucide-react";
import { useCal } from "@/hooks/use-cal";
import { useTranslation } from "@/lib/i18n";
import { AnimatedDropdownMenu, DropdownProvider } from "@/components/ui/animated-dropdown-menu";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const { openCalModal } = useCal();
  const { t, locale } = useTranslation();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Helper function to create locale-aware paths
  const getLocalePath = (path: string) => {
    // Estonian URLs should go through the locale route now (via middleware redirect)
    // but the navigation should use the original Estonian pattern
    if (locale === 'et') {
      return path;
    }
    return path === '/' ? `/${locale}` : `/${locale}${path}`;
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNavItems = [
    { label: t('navigation.home'), href: getLocalePath("/") },
    { label: t('navigation.solutions'), href: getLocalePath("/#services") },
    { label: t('navigation.blog'), href: getLocalePath("/blog") },
    { label: t('navigation.caseStudies'), href: getLocalePath("/case-studies") }
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
          isScrolled 
            ? "py-2" 
            : "py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between md:hidden">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold terminal-text">EFFI</span>
            </Link>
            
            <button 
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex justify-center">
            <div className={cn(
              "flex items-center justify-between w-full max-w-4xl px-8 py-4 rounded-full transition-all duration-300",
              "backdrop-blur-md shadow-xl border-2 border-[#00FFB2]",
              "bg-background/80",
              isScrolled 
                ? "shadow-lg bg-background/90" 
                : "shadow-2xl bg-background/60"
            )}>
              {/* Logo - Left */}
              <Link href={getLocalePath("/")} className="flex items-center gap-2">
                <span className="text-2xl font-bold terminal-text">{t('site.brand')}</span>
              </Link>
              
              {/* Navigation - Center */}
              <div className="flex-1 flex justify-center">
                <DropdownProvider>
                  <div className="flex items-center space-x-8">
                    {/* Simple Home Link */}
                    <Link 
                      href={getLocalePath("/")}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {t('navigation.home')}
                    </Link>
                    
                    {/* Solutions Dropdown */}
                    <AnimatedDropdownMenu
                      id="solutions"
                      options={[
                        {
                          label: t('services.dataAI.name'),
                          onClick: () => router.push(getLocalePath('/services/data-ai')),
                          Icon: <BarChart3 className="h-4 w-4" />
                        },
                        {
                          label: t('services.phoneAI.name'),
                          onClick: () => router.push(getLocalePath('/#services')),
                          Icon: <Phone className="h-4 w-4" />
                        },
                        {
                          label: t('services.chatAI.name'),
                          onClick: () => router.push(getLocalePath('/#services')),
                          Icon: <MessageCircle className="h-4 w-4" />
                        },
                        {
                          label: t('services.crmAI.name'),
                          onClick: () => router.push(getLocalePath('/#services')),
                          Icon: <Users className="h-4 w-4" />
                        }
                      ]}
                    >
                      {t('navigation.solutions')}
                    </AnimatedDropdownMenu>
                    
                    {/* Blog Dropdown */}
                    <AnimatedDropdownMenu
                      id="blog"
                      options={[
                        {
                          label: t('blog.allArticles'),
                          onClick: () => router.push(getLocalePath('/blog')),
                          Icon: <BookOpen className="h-4 w-4" />
                        },
                        {
                          label: t('blog.aiRestaurants'),
                          onClick: () => router.push(getLocalePath('/blog/ai-lahendused-toitlustuses')),
                          Icon: <FileText className="h-4 w-4" />
                        },
                        {
                          label: t('blog.aiAutomotive'),
                          onClick: () => router.push(getLocalePath('/blog/ai-autoteenused')),
                          Icon: <FileText className="h-4 w-4" />
                        }
                      ]}
                    >
                      {t('navigation.blog')}
                    </AnimatedDropdownMenu>
                    
                    {/* Case Studies Dropdown */}
                    <AnimatedDropdownMenu
                      id="caseStudies"
                      options={[
                        {
                          label: t('caseStudies.allStories'),
                          onClick: () => router.push(getLocalePath('/case-studies')),
                          Icon: <FileText className="h-4 w-4" />
                        },
                        {
                          label: t('caseStudies.bodyTreatmentSalon.title'),
                          onClick: () => router.push(getLocalePath(`/case-studies/body-treatment-salon-${locale}`)),
                          Icon: <FileText className="h-4 w-4" />
                        },
                        {
                          label: t('caseStudies.mapleStreetBistro.title'),
                          onClick: () => router.push(getLocalePath(`/case-studies/maple-street-bistro-${locale}`)),
                          Icon: <FileText className="h-4 w-4" />
                        }
                      ]}
                    >
                      {t('navigation.caseStudies')}
                    </AnimatedDropdownMenu>
                  </div>
                </DropdownProvider>
              </div>
              
              {/* Language Switcher and Contact Button - Right */}
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <GradientButton 
                  size="sm" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  {t('navigation.contact')}
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-t border-border mt-2"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {mobileNavItems.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href}
                    className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <GradientButton 
                  size="sm" 
                  className="gap-2 mt-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCalModal();
                  }}
                >
                  <PhoneCall className="w-4 h-4" />
                  {t('navigation.contact')}
                </GradientButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}