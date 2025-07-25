import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

// Import translations directly
import etTranslations from '@/public/locales/et/common.json';
import enTranslations from '@/public/locales/en/common.json';

// Translation hook
export function useTranslation() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract locale from pathname (first segment)
  const locale = pathname.startsWith('/en') ? 'en' : 'et';
  const locales = ['et', 'en'];
  
  // Get translations based on locale
  const translations = locale === 'en' ? enTranslations : etTranslations;
  const [isLoading, setIsLoading] = useState(false);

  // Translation function with nested key support
    const t = useCallback((key: string): string => {
    if (isLoading) {
      return key
    }
    
    const keys = key.split('.')
    let result: any = translations
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key
      }
    }
    
    return typeof result === 'string' ? result : key
  }, [translations, locale, isLoading])

  // Language switcher function
  const changeLanguage = (newLocale: string) => {
    let newPath = pathname;
    
    // Remove current locale prefix if it exists
    if (pathname.startsWith('/en')) {
      newPath = pathname.slice(3) || '/';
    }
    
    // Add new locale prefix if it's not Estonian (default)
    if (newLocale !== 'et') {
      newPath = newPath === '/' ? `/${newLocale}` : `/${newLocale}${newPath}`;
    }
    
    router.push(newPath);
  };

  return {
    t,
    locale,
    locales,
    changeLanguage,
    isLoading,
  };
}

// Language display names
export const languageNames = {
  et: 'Eesti',
  en: 'English',
};

// Utility to format locale for display
export function getLanguageDisplayName(locale: string): string {
  return languageNames[locale as keyof typeof languageNames] || locale;
}