"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/ui/gradient-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { PhoneCall, Menu as MenuIcon, X, BarChart3, Phone, MessageCircle, Users } from "lucide-react";
import { useCal } from "@/hooks/use-cal";
import { useTranslation } from "@/lib/i18n";
import { MenuItem, Menu, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";

export function SiteHeader() {
  const { openCalModal } = useCal();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const services = [
    {
      title: t('services.dataAI.name', 'Karl - Data AI'),
      description: t('services.dataAI.description', 'Analüüsib kliendiandmeid ja loob detailseid raporteid teie äri optimeerimiseks.'),
      href: "/services/data-ai",
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621636/d2fzxkwdvndlenhlezxy.png",
    },
    {
      title: t('services.phoneAI.name', 'Sandra - Phone AI'),
      description: t('services.phoneAI.description', '24/7 telefonivastamisteenus, mis käsitleb kõiki kõnesid professionaalselt.'),
      href: "/#services", 
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621636/ck7yx757bjfj6uihrdyj.png",
    },
    {
      title: t('services.chatAI.name', 'Silver - Chat AI'),
      description: t('services.chatAI.description', 'Nutika vestlusrobot, mis vastab küsimustele ja aitab kliente reaalajas.'),
      href: "/#services",
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621635/g4v24ilp1cno7r9qyvct.png",
    },
    {
      title: t('services.crmAI.name', 'Helen - CRM AI'),
      description: t('services.crmAI.description', 'Haldab kliendisuhteid ja automatiseerib müügiprotsesse tõhusalt.'),
      href: "/#services",
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621636/xr2xiyciubgjfwsk2qju.png",
    }
  ];

  const mobileNavItems = [
    { label: t('navigation.home', 'Avaleht'), href: "/" },
    { label: t('navigation.solutions', 'Lahendused'), href: "/#services" },
    { label: t('navigation.blog', 'Blogi'), href: "/blog" }
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
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold terminal-text">{t('site.brand', 'EFFI')}</span>
              </Link>
              
              {/* Navigation - Center */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center space-x-8">
                  {/* Simple Home Link */}
                  <Link 
                    href="/"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {t('navigation.home', 'Avaleht')}
                  </Link>
                  
                  {/* Menu with dropdowns for other items */}
                  <Menu setActive={setActive} className="flex items-center space-x-8">
                    <MenuItem setActive={setActive} active={active} item={t('navigation.solutions', 'Lahendused')}>
                      <div className="grid grid-cols-2 gap-3 p-3">
                        {services.map((service, index) => (
                          <ProductItem
                            key={index}
                            title={service.title}
                            href={service.href}
                            src={service.src}
                            description={service.description}
                          />
                        ))}
                      </div>
                    </MenuItem>
                    
                    <MenuItem setActive={setActive} active={active} item={t('navigation.blog', 'Blogi')}>
                      <div className="flex flex-col space-y-2 min-w-[200px]">
                        <HoveredLink href="/blog">{t('blog.allArticles', 'Kõik artiklid')}</HoveredLink>
                        <HoveredLink href="/blog/ai-lahendused-toitlustuses">{t('blog.aiRestaurants', 'AI restoranides')}</HoveredLink>
                        <HoveredLink href="/blog/ai-autoteenused">{t('blog.aiAutomotive', 'AI autoteenused')}</HoveredLink>
                      </div>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              
              {/* Language Switcher and Contact Button - Right */}
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <GradientButton 
                  size="sm" 
                  className="gap-2"
                  onClick={openCalModal}
                >
                  {t('navigation.contact', 'Võta Ühendust')}
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
                  {t('navigation.contact', 'Võta Ühendust')}
                </GradientButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}