'use client';
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/lib/i18n';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.backToHome')}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">{t('terms.title')}</h1>
          <p className="text-muted-foreground text-lg">
            {t('terms.lastUpdated')}: {t('terms.date')}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="prose prose-neutral dark:prose-invert max-w-none"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.acceptance.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('terms.acceptance.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.services.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('terms.services.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.usage.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('terms.usage.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{t('terms.usage.items.lawful')}</li>
                <li>{t('terms.usage.items.authorized')}</li>
                <li>{t('terms.usage.items.interference')}</li>
                <li>{t('terms.usage.items.security')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.payment.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('terms.payment.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.liability.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('terms.liability.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.termination.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('terms.termination.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.changes.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('terms.changes.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('terms.contact.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('terms.contact.content')}
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">EFFI</p>
                <p>Email: marti@effidigi.com</p>
                <p>Telefon: +372 5340 0432</p>
                <p>Aadress: Õismäe tee 99, Tallinn, Eesti</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
