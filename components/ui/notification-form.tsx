"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/lib/i18n";
import { X, Mail, Building, CheckCircle } from "lucide-react";

interface NotificationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationForm({ isOpen, onClose }: NotificationFormProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Auto close after success
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      setCompany("");
      onClose();
    }, 2000);
  };

  const isFormValid = email.trim() !== "" && company.trim() !== "";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
          >
            <div className="bg-background border border-border rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{t('notificationForm.title')}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {!isSuccess ? (
                  <>
                    <p className="text-muted-foreground mb-6">
                      {t('notificationForm.description')}
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {t('notificationForm.fields.email.label')}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t('notificationForm.fields.email.placeholder')}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Company Field */}
                      <div className="space-y-2">
                        <Label htmlFor="company" className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          {t('notificationForm.fields.company.label')}
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder={t('notificationForm.fields.company.placeholder')}
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                          className="w-full"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {t('notificationForm.buttons.cancel')}
                        </button>
                        <GradientButton
                          type="submit"
                          disabled={!isFormValid || isSubmitting}
                          className="flex-1 gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              {t('notificationForm.buttons.submitting')}
                            </>
                          ) : (
                            <>
                              <Mail className="w-4 h-4" />
                              {t('notificationForm.buttons.submit')}
                            </>
                          )}
                        </GradientButton>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{t('notificationForm.success.title')}</h3>
                    <p className="text-muted-foreground">{t('notificationForm.success.description')}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
