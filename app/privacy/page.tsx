'use client';
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/lib/i18n';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4">{t('privacy.title')}</h1>
          <p className="text-muted-foreground text-lg">
            {t('privacy.lastUpdated')}: {t('privacy.date')}
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
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.overview.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('privacy.overview.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataCollection.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacy.dataCollection.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{t('privacy.dataCollection.items.contact')}</li>
                <li>{t('privacy.dataCollection.items.usage')}</li>
                <li>{t('privacy.dataCollection.items.technical')}</li>
                <li>{t('privacy.dataCollection.items.communication')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataUse.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacy.dataUse.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{t('privacy.dataUse.items.service')}</li>
                <li>{t('privacy.dataUse.items.communication')}</li>
                <li>{t('privacy.dataUse.items.improvement')}</li>
                <li>{t('privacy.dataUse.items.legal')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.dataSharing.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('privacy.dataSharing.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.security.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('privacy.security.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.rights.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacy.rights.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>{t('privacy.rights.items.access')}</li>
                <li>{t('privacy.rights.items.correction')}</li>
                <li>{t('privacy.rights.items.deletion')}</li>
                <li>{t('privacy.rights.items.portability')}</li>
                <li>{t('privacy.rights.items.objection')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.cookies.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('privacy.cookies.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacy.contact.content')}
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">EFFI</p>
                <p>Email: info@effidigi.com</p>
                <p>Telefon: +372 5340 0432</p>
                <p>Aadress: Õismäe tee 99, Tallinn, Eesti</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.changes.title')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('privacy.changes.content')}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
