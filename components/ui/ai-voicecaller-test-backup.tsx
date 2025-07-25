"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Loader2, CheckCircle, AlertCircle, PhoneCall } from "lucide-react";
import { GradientButton } from "./gradient-button";
import { TerminalCard } from "./terminal-card";
import { useTranslation } from "@/lib/i18n";

export function AIVoicecallerTest() {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'calling' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      setStatus('error');
      setMessage(t('voiceTest.phoneRequired'));
      return;
    }

    setIsLoading(true);
    setStatus('calling');
    setMessage(t('voiceTest.initiating'));

    try {
      const response = await fetch('/api/initiate-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(t('voiceTest.success'));
        setPhoneNumber(''); // Clear the input
      } else {
        setStatus('error');
        setMessage(data.error || t('voiceTest.failed'));
      }
    } catch (error) {
      console.error('Error initiating call:', error);
      setStatus('error');
      setMessage(t('voiceTest.failed'));
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'calling':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Phone className="h-4 w-4" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'calling':
        return 'text-blue-500';
      case 'success':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-background rounded-3xl shadow-lg border border-border/20">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <PhoneCall className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{t('voiceTest.title')}</h3>
        <p className="text-muted-foreground text-sm">
          {t('voiceTest.description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={t('voiceTest.placeholder')}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            disabled={isLoading}
          />
        </div>

        <GradientButton
          type="submit"
          disabled={isLoading || !phoneNumber.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('voiceTest.calling')}
            </>
          ) : (
            <>
              <Phone className="mr-2 h-4 w-4" />
              {t('voiceTest.callButton')}
            </>
          )}
        </GradientButton>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center space-x-2 text-sm ${getStatusColor()}`}
          >
            {getStatusIcon()}
            <span>{message}</span>
          </motion.div>
        )}
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          {t('voiceTest.footer')}
        </p>
      </div>

      {/* Visual phone ring animation during call */}
      {status === 'calling' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 border-2 border-primary/30 rounded-full animate-ping" />
            <div className="absolute top-2 left-2 w-28 h-28 border-2 border-primary/20 rounded-full animate-ping delay-75" />
            <div className="absolute top-4 left-4 w-24 h-24 border-2 border-primary/10 rounded-full animate-ping delay-150" />
          </div>
        </div>
      )}

      {/* Success celebration animation */}
      {status === 'success' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4"
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
