import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Translation hook
export function useTranslation() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract locale from pathname (first segment)
  const locale = pathname.startsWith('/en') ? 'en' : 'et';
  const locales = ['et', 'en'];
  
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to Estonian if loading fails
        if (locale !== 'et') {
          try {
            const fallbackResponse = await fetch('/locales/et/common.json');
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
          } catch (fallbackError) {
            console.error('Failed to load fallback translations:', fallbackError);
          }
        }
      }
    };

    loadTranslations();
  }, [locale]);

  // Translation function with nested key support
  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

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
    isLoading: Object.keys(translations).length === 0,
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