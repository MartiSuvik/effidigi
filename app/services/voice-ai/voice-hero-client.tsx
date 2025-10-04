"use client";

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { VoiceHeroScrollDemo } from '@/components/ui/voice-hero-scroll-demo';

export function VoiceHeroClient() {
  const { t } = useTranslation();
  const templateKey = 'voiceServiceTemplate';
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      setIsSubmitting(true);
      // TODO: integrate with backend signup endpoint
      await new Promise(r => setTimeout(r, 600));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex flex-col w-full items-center gap-[73px] px-4 md:px-[150px] py-0 relative bg-[#141519] min-h-screen">
      <main className="flex flex-col w-full max-w-[905px] gap-[30px] px-0 items-center relative mt-32">
        <div className="flex-col gap-[7px] inline-flex items-center relative">
          <div className="inline-flex items-center gap-2.5 p-2.5 relative">
            <h1 className="text-white text-4xl md:text-6xl font-black text-center leading-tight">
              {t(`${templateKey}.hero.title`)}
            </h1>
          </div>
          <div className="inline-flex items-center gap-2.5 p-2.5 relative max-w-2xl">
            <p className="text-gray-200 text-base md:text-lg text-center font-bold">
              {t(`${templateKey}.hero.description`)}
            </p>
          </div>
        </div>

        <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t(`${templateKey}.hero.emailPlaceholder`)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white"
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting || !email}
              className="bg-[#00ffb2] hover:bg-[#00b880] text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : t(`${templateKey}.hero.signUpButton`)}
            </Button>
          </div>
        </form>

        <div className="flex items-center gap-4 text-sm text-gray-200">
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4" />
            <span>{t(`${templateKey}.hero.trialText`)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-4 h-4" />
            <span>{t(`${templateKey}.hero.auditText`)}</span>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-2.5 px-2.5 pb-24 relative w-full">
          <VoiceHeroScrollDemo />
        </div>
      </main>
    </section>
  );
}

export default VoiceHeroClient;
