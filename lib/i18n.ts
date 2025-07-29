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
  const locale = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/et') ? 'et' : 'et';
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
    } else if (pathname.startsWith('/et')) {
      newPath = pathname.slice(3) || '/';
    }
    
    // Handle case study URLs specifically
    if (newPath.includes('/case-studies/')) {
      // Extract the base slug (without locale suffix)
      const parts = newPath.split('/');
      const lastPart = parts[parts.length - 1];
      
      // Remove locale suffix if present
      const baseSlug = lastPart.replace(/-[a-z]{2}$/, '');
      
      // Rebuild the path with the correct locale suffix
      parts[parts.length - 1] = `${baseSlug}-${newLocale}`;
      newPath = parts.join('/');
    }
    
    // Add new locale prefix - now both locales get prefixes for consistency
    newPath = newPath === '/' ? `/${newLocale}` : `/${newLocale}${newPath}`;
    
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