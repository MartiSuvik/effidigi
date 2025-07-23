"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Loader2, CheckCircle, AlertCircle, PhoneCall } from "lucide-react";
import { GradientButton } from "./gradient-button";
import { TerminalCard } from "./terminal-card";

export function AIVoicecallerTest() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'calling' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      setStatus('error');
      setMessage('Palun sisestage oma telefoninumber');
      return;
    }

    setIsLoading(true);
    setStatus('calling');
    setMessage('Algatame kõnet...');

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
        setMessage('Kõne algatatud! Te saate 30 sekundi jooksul kõne meie AI-lt.');
        setPhoneNumber(''); // Clear the input
      } else {
        setStatus('error');
        setMessage(data.error || 'Kõne algatamine ebaõnnestus. Palun proovige uuesti.');
      }
    } catch (error) {
      console.error('Error initiating call:', error);
      setStatus('error');
      setMessage('Ühenduse viga. Palun kontrollige internetiühendust ja proovige uuesti.');
    } finally {
      setIsLoading(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        if (status !== 'idle') {
          setStatus('idle');
          setMessage('');
        }
      }, 5000);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Format for Estonian numbers (+372 XXXX XXXX)
    if (numbers.startsWith('372')) {
      const formatted = numbers.replace(/^372(\d{4})(\d{4})/, '+372 $1 $2');
      return formatted;
    } else if (numbers.startsWith('5') && numbers.length <= 8) {
      // Local Estonian mobile format
      const formatted = numbers.replace(/(\d{4})(\d{4})/, '$1 $2');
      return formatted;
    }
    
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    
    // Clear any previous error when user starts typing
    if (status === 'error') {
      setStatus('idle');
      setMessage('');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto h-full flex flex-col justify-center p-6 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-white">
            Testi meie AI telefonisüsteemi!
          </h3>
          <p className="text-sm text-gray-300">
            Sisesta oma number ja saa 30 sekundi jooksul kõne
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-white">
              Telefoninumber
            </label>
            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="+372 5XXX XXXX"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
              disabled={isLoading}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium gap-2 flex items-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !phoneNumber.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Helistame...
                </>
              ) : (
                <>
                  <PhoneCall className="w-4 h-4" />
                  Testi AI-ga
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
              status === 'success' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : status === 'error'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : status === 'calling'
                ? 'bg-primary/20 text-primary border border-primary/30'
                : 'bg-gray-800/50 text-gray-300 border border-gray-700'
            }`}
          >
            {status === 'success' && <CheckCircle className="w-4 h-4" />}
            {status === 'error' && <AlertCircle className="w-4 h-4" />}
            {status === 'calling' && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{message}</span>
          </motion.div>
        )}

        {/* Info */}
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-400">
            Testkõne on täiesti tasuta.
          </p>
        </div>
      </motion.div>
    </div>
  );
}