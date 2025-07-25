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
      title: t('services.dataAI.name'),
      description: t('services.dataAI.description'),
      href: "/services/data-ai",
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621636/d2fzxkwdvndlenhlezxy.png",
    },
    {
      title: t('services.phoneAI.name'),
      description: t('services.phoneAI.description'),
      href: "/#services", 
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621636/sandra_headshot_lk8glf.png",
    },
    {
      title: t('services.chatAI.name'),
      description: t('services.chatAI.description'),
      href: "/#services",
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621635/g4v24ilp1cno7r9qyvct.png",
    },
    {
      title: t('services.crmAI.name'),
      description: t('services.crmAI.description'),
      href: "/#services",
      src: "https://res.cloudinary.com/effichat/image/upload/v1751621636/xr2xiyciubgjfwsk2qju.png",
    }
  ];

  const mobileNavItems = [
    { label: t('navigation.home'), href: "/" },
    { label: t('navigation.solutions'), href: "/#services" },
    { label: t('navigation.blog'), href: "/blog" }
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
                <span className="text-2xl font-bold terminal-text">{t('site.brand')}</span>
              </Link>
              
              {/* Navigation - Center */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center space-x-8">
                  {/* Simple Home Link */}
                  <Link 
                    href="/"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {t('navigation.home')}
                  </Link>
                  
                  {/* Menu with dropdowns for other items */}
                  <Menu setActive={setActive} className="flex items-center space-x-8">
                    <MenuItem setActive={setActive} active={active} item={t('navigation.solutions')}>
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
                    
                    <MenuItem setActive={setActive} active={active} item={t('navigation.blog')}>
                      <div className="flex flex-col space-y-2 min-w-[200px]">
                        <HoveredLink href="/blog">{t('blog.allArticles')}</HoveredLink>
                        <HoveredLink href="/blog/ai-lahendused-toitlustuses">{t('blog.aiRestaurants')}</HoveredLink>
                        <HoveredLink href="/blog/ai-autoteenused">{t('blog.aiAutomotive')}</HoveredLink>
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