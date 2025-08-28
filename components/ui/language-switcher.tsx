"use client";

import { useTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "default" | "lg";
}

// Flag emojis for Estonian and English
const flagEmojis = {
  et: "🇪🇪", // Estonian flag
  en: "🇬🇧", // British flag (commonly used for English)
};

const languageNames = {
  et: "Eesti",
  en: "English",
};

export function LanguageSwitcher({ 
  className, 
  variant = "ghost",
  size = "sm" 
}: LanguageSwitcherProps) {
  const { locale, changeLanguage } = useTranslation();

  const handleLanguageChange = () => {
    // Toggle between Estonian and English
    const newLocale = locale === 'et' ? 'en' : 'et';
    changeLanguage(newLocale);
  };

  const currentFlag = flagEmojis[locale as keyof typeof flagEmojis] || flagEmojis.et;
  const currentLanguage = languageNames[locale as keyof typeof languageNames] || languageNames.et;
  const nextLanguage = languageNames[locale === 'et' ? 'en' : 'et'];

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
      title={`Switch to ${nextLanguage}`}
    >
      <span className="text-lg" role="img" aria-label={`${currentLanguage} flag`}>
        {currentFlag}
      </span>
      <span className="hidden sm:inline">{currentLanguage}</span>
      <span className="sm:hidden">{locale.toUpperCase()}</span>
    </Button>
  );
}