import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { CalProvider } from '@/components/cal-provider';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://effidigi.com'),
  title: 'EFFI AI - Alusta praegu, maksa korra, kasva igavesti!',
  description: 'Automatiseeri klienditeenindus ja suurenda tulu läbi AI lahenduste. Ideaalne restoranidele, hambakliinikutele, automüügile ja mööbli poodidele kes soovivad kasvada.',
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
    title: 'EFFI AI - Alusta praegu, maksa korra, kasva igavesti!',
    description: 'Automatiseeri klienditeenindus ja suurenda tulu läbi AI lahenduste. Ideaalne restoranidele, hambakliinikutele, automüügile ja mööbli poodidele kes soovivad kasvada.',
    url: 'https://effidigi.com/et',
    siteName: 'EFFI',
    locale: 'et_EE',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/effichat/image/upload/v1753820086/fwz87rzlzorerk4kgf9s.png',
        width: 1200,
        height: 630,
        alt: 'EFFI AI - Alusta praegu, maksa korra, kasva igavesti!'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EFFI AI - Alusta praegu, maksa korra, kasva igavesti!',
    description: 'Automatiseeri klienditeenindus ja suurenda tulu läbi AI lahenduste. Ideaalne restoranidele, hambakliinikutele, automüügile ja mööbli poodidele kes soovivad kasvada.',
    images: ['https://res.cloudinary.com/effichat/image/upload/v1753820086/fwz87rzlzorerk4kgf9s.png']
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
    canonical: 'https://effidigi.com/',
  },
};

// Schema.org structured data for local business
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://effidigi.com/#organization",
  "name": "EFFI AI",
  "alternateName": "EFFI Digital",
  "url": "https://effidigi.com",
  "logo": "https://res.cloudinary.com/effichat/image/upload/v6pyn5rdcivb9xgd6kzq.ico",
  "image": "https://res.cloudinary.com/effichat/image/upload/v1753820086/fwz87rzlzorerk4kgf9s.png",
  "description": "EFFI AI on juhtiv AI-põhiste lahenduste pakkuja, mis automatiseerib klienditeenindust ja suurendab tulu. Alusta praegu, maksa korra, kasva igavesti! Ideaalne restoranidele, hambakliinikutele, automüügile ja mööblipoodidele kes soovivad kasvada läbi AI automatiseerimise.",
  "telephone": "+372 5340 0432",
  "email": "info@effidigi.com",
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
    "email": "info@effidigi.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automatiseerimise Teenused",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "AI Klienditeenindus Restoranidele",
        "description": "24/7 automatiseeritud broneeringud ja tellimuste vastuvõtt. Alusta praegu, maksa korra, kasva igavesti restoranisektoris.",
        "areaServed": "Eesti",
        "serviceType": "AI Automation"
      },
      {
        "@type": "Service", 
        "name": "AI Vastamisteenus Hambakliinikutele",
        "description": "Automatiseeritud patsiendi registreerimine ja konsultatsioonide broneerimine. Kasva oma kliiniku tulu AI abil.",
        "areaServed": "Eesti",
        "serviceType": "Healthcare AI"
      },
      {
        "@type": "Service",
        "name": "AI Müügitugi Automüügile", 
        "description": "Proovisõitude broneerimine ja klientide esmasel kontaktil info andmine. Suurenda autode müüki AI lahendusega.",
        "areaServed": "Eesti",
        "serviceType": "Automotive AI"
      },
      {
        "@type": "Service",
        "name": "AI Klienditeenindus Mööblipoodidele",
        "description": "Toodete info jagamine ja konsultatsioonide planeerimine. Kasva mööblimüüki läbi AI automatiseerimise.",
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
      "reviewBody": "AI-automatiseerimine teenis meie investeeringu tagasi vaid 11 nädalaga. Saavutasime 14% müügitõusu ja 25% rohkem broneeringuid. EFFI AI - alusta praegu, maksa korra, kasva igavesti!"
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
      "reviewBody": "Pärast AI-teenuse integreerimist kasvas kliinikus 20% rohkem uute patsientide konsultatsioone esimesel kuul. AI automatiseerimine muutis meie äri!"
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
        <meta name="DC.title" content="EFFI AI - Alusta praegu, maksa korra, kasva igavesti!" />
        <meta name="DC.creator" content="EFFI AI" />
        <meta name="DC.subject" content="AI automatiseerimine, klienditeenindus, tulu kasv, restoranid, hambakliinikud, automüük, mööblipoed" />
        <meta name="DC.description" content="Automatiseeri klienditeenindus ja suurenda tulu läbi AI lahenduste. Ideaalne restoranidele, hambakliinikutele, automüügile ja mööbli poodidele kes soovivad kasvada." />
        <meta name="DC.publisher" content="EFFI AI" />
        <meta name="DC.contributor" content="EFFI AI meeskond" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://effidigi.com" />
        <meta name="DC.language" content="et" />
        <meta name="DC.coverage" content="Eesti, Tallinn, Harjumaa" />
        <meta name="DC.rights" content="Copyright EFFI AI 2024" />
      </head>
      <body className={cn(
        "bg-background min-h-screen font-sans antialiased"
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
        
        {/* Voiceflow Chat Widget
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
        />*/}
      </body>
    </html>
  );
}