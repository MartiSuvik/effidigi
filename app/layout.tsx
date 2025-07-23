import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { CalProvider } from '@/components/cal-provider';
import { cn } from '@/lib/utils';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'EFFI - AI-põhine 24/7 vastamisteenus Tallinn, Eestis',
  description: 'Parandage klienditeenindust ja suurendage tulu meie AI telefonisüsteemiga Tallinnas ja üle Eesti. Ideaalne restoranidele, hambakliinikutele, automüügile ja mööblipoodidele. Teenindame kogu Eestit.',
  keywords: [
    'AI',
    'telefonisüsteem',
    'klienditeenindus',
    'AI telefonisüsteem Tallinn',
    'AI vastamisteenus Eesti',
    'restoranide AI Tallinn',
    'hambakliinikute AI',
    'automüügi AI',
    'mööblipoodide AI',
    'AI kõnedevastaja Eesti',
    'tehisintellekt ettevõtetele',
    'AI broneeringud',
    '24/7 klienditeenindus Tallinn',
    'automatiseeritud vastamisteenus',
    'AI telefonibot Eesti',
    'restoranid Tallinn AI',
    'hambaarst AI Tallinn',
    'autokauplused AI Eesti',
    'mööblipoed AI Tallinn',
    'Harjumaa AI lahendused',
    'Põhja-Eesti AI teenused',
    'Eesti ettevõtete AI',
    'tehisintellekt Baltimaades'
  ],
  openGraph: {
    title: 'EFFI - AI-põhine 24/7 vastamisteenus Tallinn, Eestis',
    description: 'Parandage klienditeenindust ja suurendage tulu meie AI telefonisüsteemiga Tallinnas ja üle Eesti.',
    url: 'https://effidigi.com',
    siteName: 'EFFI',
    locale: 'et_EE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://effidigi.com',
  },
};

// Schema.org structured data for local business
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://effidigi.com/#organization",
  "name": "EFFI",
  "alternateName": "EFFI Digital",
  "url": "https://effidigi.com",
  "logo": "https://res.cloudinary.com/effichat/image/upload/v6pyn5rdcivb9xgd6kzq.ico",
  "image": "https://res.cloudinary.com/effichat/image/upload/v6pyn5rdcivb9xgd6kzq.ico",
  "description": "EFFI on juhtiv AI-põhise telefonisüsteemi pakkuja Tallinnas ja kogu Eestis. Pakume 24/7 automatiseeritud vastamisteenust restoranidele, hambakliinikutele, automüügile ja mööblipoodidele. Meie tehisintellekti lahendused suurendavad ettevõtete tulu keskmiselt 14% ja vähendavad vastamata kõnede arvu 43%. Teenindame kliente üle kogu Eesti, pakkudes eestikeelset AI-tuge ja kohalikku ekspertiisi.",
  "telephone": "+372 5340 0432",
  "email": "marti@effidigi.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Õismäe tee 99",
    "addressLocality": "Tallinn",
    "addressRegion": "Harjumaa",
    "postalCode": "13516",
    "addressCountry": "EE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 59.4370,
    "longitude": 24.7536
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Tallinn",
      "addressCountry": "EE"
    },
    {
      "@type": "State",
      "name": "Harjumaa",
      "addressCountry": "EE"
    },
    {
      "@type": "Country",
      "name": "Eesti"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 59.4370,
      "longitude": 24.7536
    },
    "geoRadius": "200000"
  },
  "priceRange": "€€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Pangaülekanne, Krediitkaart",
  "openingHours": "Mo-Fr 09:00-18:00",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Marti"
  },
  "employee": {
    "@type": "Person",
    "name": "Marti",
    "email": "marti@effidigi.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Telefonisüsteemi Teenused",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "AI Telefonisüsteem Restoranidele",
        "description": "24/7 automatiseeritud broneeringud ja tellimuste vastuvõtt restoranidele Tallinnas ja Eestis",
        "areaServed": "Eesti",
        "serviceType": "AI Automation"
      },
      {
        "@type": "Service", 
        "name": "AI Vastamisteenus Hambakliinikutele",
        "description": "Automatiseeritud patsiendi registreerimine ja konsultatsioonide broneerimine",
        "areaServed": "Eesti",
        "serviceType": "Healthcare AI"
      },
      {
        "@type": "Service",
        "name": "AI Kõnedevastaja Automüügile", 
        "description": "Proovisõitude broneerimine ja klientide esmasel kontaktil info andmine",
        "areaServed": "Eesti",
        "serviceType": "Automotive AI"
      },
      {
        "@type": "Service",
        "name": "AI Telefonisüsteem Mööblipoodidele",
        "description": "Toodete info jagamine ja konsultatsioonide planeerimine",
        "areaServed": "Eesti", 
        "serviceType": "Retail AI"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Jet's Pizza"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "AI-telefonisüsteem teenis meie investeeringu tagasi vaid 11 nädalaga. Saavutasime 14% müügitõusu ja 25% rohkem broneeringuid."
    },
    {
      "@type": "Review", 
      "author": {
        "@type": "Organization",
        "name": "Tallinna Hambaklinik"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Pärast AI-teenuse integreerimist kasvas kliinikus 20% rohkem uute patsientide konsultatsioone esimesel kuul."
    }
  ],
  "sameAs": [
    "https://effidigi.com"
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://effidigi.com/"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/effichat/image/upload/v6pyn5rdcivb9xgd6kzq.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <meta name="geo.region" content="EE-37" />
        <meta name="geo.placename" content="Tallinn" />
        <meta name="geo.position" content="59.4370;24.7536" />
        <meta name="ICBM" content="59.4370, 24.7536" />
        <meta name="DC.title" content="EFFI - AI Telefonisüsteem Tallinn, Eesti" />
        <meta name="DC.creator" content="EFFI" />
        <meta name="DC.subject" content="AI telefonisüsteem, automatiseeritud vastamisteenus, Tallinn, Eesti" />
        <meta name="DC.description" content="AI-põhine 24/7 vastamisteenus ettevõtetele Tallinnas ja kogu Eestis" />
        <meta name="DC.publisher" content="EFFI" />
        <meta name="DC.contributor" content="EFFI meeskond" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://effidigi.com" />
        <meta name="DC.language" content="et" />
        <meta name="DC.coverage" content="Eesti, Tallinn, Harjumaa" />
        <meta name="DC.rights" content="Copyright EFFI 2024" />
      </head>
      <body className={cn(
        "bg-background min-h-screen font-sans antialiased",
        spaceGrotesk.variable,
        jetbrainsMono.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <CalProvider>
            <SiteHeader />
            {children}
          </CalProvider>
        </ThemeProvider>
        
        {/* Voiceflow Chat Widget */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '686b7f408829770316d15385' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                  
                  // Force light theme for Voiceflow widget
                  function fixVoiceflowStyling() {
                    const textareas = document.querySelectorAll('textarea[role="textbox"], textarea[placeholder*="Message"], textarea[class*="chat-input"], textarea[class*="vfrc"]');
                    textareas.forEach(textarea => {
                      textarea.style.setProperty('background-color', '#ffffff', 'important');
                      textarea.style.setProperty('background', '#ffffff', 'important');
                      textarea.style.setProperty('color', '#1a1a1a', 'important');
                      textarea.style.setProperty('border', '1px solid #d1d5db', 'important');
                      textarea.style.setProperty('border-radius', '8px', 'important');
                      textarea.style.setProperty('font-family', '"Inter", "Segoe UI", sans-serif', 'important');
                      textarea.style.setProperty('font-size', '14px', 'important');
                      textarea.style.setProperty('padding', '8px 12px', 'important');
                    });
                    
                    // Also target any div containers that might have dark backgrounds
                    const chatContainers = document.querySelectorAll('div[class*="vfrc"], div[id*="vfrc"], div[class*="chat"]');
                    chatContainers.forEach(container => {
                      if (container.style.backgroundColor && container.style.backgroundColor.includes('rgb(59, 59, 59)')) {
                        container.style.setProperty('background-color', '#ffffff', 'important');
                      }
                    });
                  }
                  
                  // Apply styling immediately and on intervals
                  setTimeout(fixVoiceflowStyling, 500);
                  setTimeout(fixVoiceflowStyling, 1000);
                  setTimeout(fixVoiceflowStyling, 2000);
                  setInterval(fixVoiceflowStyling, 3000);
                  
                  // Also apply on DOM mutations
                  if (typeof MutationObserver !== 'undefined') {
                    const observer = new MutationObserver(fixVoiceflowStyling);
                    observer.observe(document.body, {
                      childList: true,
                      subtree: true,
                      attributes: true,
                      attributeFilter: ['style', 'class']
                    });
                  }
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
                v.type = "text/javascript"; 
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </body>
    </html>
  );
}