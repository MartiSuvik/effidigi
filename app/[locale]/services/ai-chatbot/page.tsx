import { ServiceTemplate } from '@/components/service-template';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot - EFFI',
  description: 'Automatiseeri klienditugi ja suurenda müüki meie intelligentse AI chatbotiga. Saadaval 24/7, et teenindada kliente mitmes keeles.',
  keywords: 'AI chatbot, klienditugi automatiseerimine, AI assistant, Eesti chatbot, tehisintellekt, klienditeenindus',
  openGraph: {
    title: 'AI Chatbot, Mis Muudab Külastajad Klientideks - EFFI',
    description: 'Automatiseeri klienditugi, püüa liide ja suurenda müüki meie intelligentse AI chatbotiga. Saadaval 24/7.',
    images: [
      {
        url: 'https://res.cloudinary.com/effichat/image/upload/chatbot.png',
        width: 1200,
        height: 630,
        alt: 'EFFI AI Chatbot',
      },
    ],
  },
};

export default function AiChatbotPage() {
  return <ServiceTemplate />;
}
