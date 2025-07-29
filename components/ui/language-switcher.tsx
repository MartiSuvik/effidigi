"use client";

import { useTranslation, getLanguageDisplayName } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "default" | "lg";
}

export function LanguageSwitcher({ 
  className, 
  variant = "ghost",
  size = "sm" 
}: LanguageSwitcherProps) {
  const { locale, locales, changeLanguage } = useTranslation();

  const handleLanguageChange = () => {
    // Toggle between Estonian and English
    const newLocale = locale === 'et' ? 'en' : 'et';
    changeLanguage(newLocale);
  };

  const currentLanguageDisplay = getLanguageDisplayName(locale);
  const nextLanguageDisplay = getLanguageDisplayName(locale === 'et' ? 'en' : 'et');

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleLanguageChange}
      className={cn(
        "flex items-center gap-2 font-medium transition-colors",
        "hover:bg-accent/80 hover:text-accent-foreground",
        className
      )}
      title={`Switch to ${nextLanguageDisplay}`}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{currentLanguageDisplay}</span>
      <span className="sm:hidden">{locale.toUpperCase()}</span>
    </Button>
  );
}