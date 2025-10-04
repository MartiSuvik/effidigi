"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, MessageCircle, BookOpen, FileText, Calendar, Phone, X, ChevronDown, ChevronRight, BarChart3, Users } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";
import { GradientButton } from "@/components/ui/gradient-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useCal } from "@/hooks/use-cal";
import { useRouter } from "next/navigation";

const AnimatedMenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="focus:outline-none z-[9999] p-2"
  >
    <motion.div>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="text-foreground"
      >
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 2.5 L 22 2.5"
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 12 L 22 12"
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 2 21.5 L 22 21.5"
        />
      </motion.svg>
    </motion.div>
  </button>
);

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileSidebar = ({ isOpen, setIsOpen }: MobileSidebarProps) => {
  const { t, locale } = useTranslation();
  const { openCalModal } = useCal();
  const router = useRouter();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const mobileSidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Helper function to create locale-aware paths
  const getLocalePath = (path: string) => {
    return path === '/' ? `/${locale}` : `/${locale}${path}`;
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleContactClick = () => {
    setIsOpen(false);
    openCalModal();
  };

  const handleDropdownItemClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const dropdownSections = [
    {
      key: 'solutions',
      label: t('navigation.solutions'),
      icon: MessageCircle,
      items: [
        {
          label: t('services.chatAI.name'),
          path: getLocalePath('/services/ai-chatbot'),
          icon: MessageCircle
        },
        {
          label: t('services.phoneAI.name'),
          path: getLocalePath('/services/voice-ai'),
          icon: Phone
        },
        {
          label: t('services.dataAI.name'),
          path: getLocalePath('/services/data-ai'),
          icon: BarChart3
        }
      ]
    },
    {
      key: 'blog',
      label: t('navigation.blog'),
      icon: BookOpen,
      items: [
        {
          label: t('blog.allArticles'),
          path: getLocalePath('/blog'),
          icon: BookOpen
        },
        {
          label: t('blog.aiRestaurants'),
          path: getLocalePath('/blog/ai-lahendused-toitlustuses'),
          icon: FileText
        },
        {
          label: t('blog.aiAutomotive'),
          path: getLocalePath('/blog/ai-autoteenused'),
          icon: FileText
        }
      ]
    },
    {
      key: 'caseStudies',
      label: t('navigation.caseStudies'),
      icon: FileText,
      items: [
        {
          label: t('caseStudies.allStories'),
          path: getLocalePath('/case-studies'),
          icon: FileText
        },
        {
          label: t('caseStudies.bodyTreatmentSalon.title'),
          path: getLocalePath(`/case-studies/body-treatment-salon-${locale}`),
          icon: FileText
        },
        {
          label: t('caseStudies.mapleStreetBistro.title'),
          path: getLocalePath(`/case-studies/maple-street-bistro-${locale}`),
          icon: FileText
        }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Menu Toggle - Only visible on mobile */}
      <div className="md:hidden">
        <AnimatedMenuToggle toggle={toggleSidebar} isOpen={isOpen} />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-[9998] bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileSidebarVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed left-0 top-0 h-full w-80 z-[9999] bg-slate-900 border-r border-slate-700 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header Section */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">E</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">EFFI</p>
                        <p className="text-sm text-muted-foreground">AI Solutions</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      aria-label="Close sidebar"
                    >
                      <X className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Navigation Section */}
                <nav className="flex-1 p-6 overflow-y-auto">
                  <ul className="space-y-2">
                    {/* Home Link */}
                    <li>
                      <Link
                        href={getLocalePath("/")}
                        onClick={handleNavClick}
                        className="flex items-center gap-3 w-full py-3 px-4 rounded-xl hover:bg-muted transition-colors text-sm font-medium text-foreground"
                      >
                        <Home className="h-5 w-5 text-muted-foreground" />
                        {t('navigation.home')}
                      </Link>
                    </li>

                    {/* Dropdown Sections */}
                    {dropdownSections.map((section) => (
                      <li key={section.key}>
                        <div>
                          {/* Dropdown Header */}
                          <button
                            onClick={() => toggleDropdown(section.key)}
                            className="flex items-center justify-between w-full py-3 px-4 rounded-xl hover:bg-muted transition-colors text-sm font-medium text-foreground"
                          >
                            <div className="flex items-center gap-3">
                              <section.icon className="h-5 w-5 text-muted-foreground" />
                              {section.label}
                            </div>
                            <motion.div
                              animate={{ rotate: openDropdowns[section.key] ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </motion.div>
                          </button>

                          {/* Dropdown Items */}
                          <AnimatePresence>
                            {openDropdowns[section.key] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <ul className="ml-8 mt-1 space-y-1">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <button
                                        onClick={() => handleDropdownItemClick(item.path)}
                                        className="flex items-center gap-3 w-full py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                                      >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Language Switcher */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="px-4 mb-3">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Language</p>
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            router.push('/et' + (window.location.pathname.startsWith('/en') ? window.location.pathname.slice(3) : window.location.pathname));
                          }}
                          className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                            locale === 'et' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                          }`}
                        >
                          EST 🇪🇪
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            router.push('/en' + (window.location.pathname.startsWith('/et') ? window.location.pathname.slice(3) : window.location.pathname));
                          }}
                          className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                            locale === 'en' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                          }`}
                        >
                          ENG 🇬🇧
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Footer / Contact Button */}
                <div className="p-6 border-t border-border">
                  <GradientButton 
                    onClick={handleContactClick}
                    className="w-full gap-2"
                    size="sm"
                  >
                    <Calendar className="h-4 w-4" />
                    {t('navigation.contact')}
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export { MobileSidebar, AnimatedMenuToggle };
