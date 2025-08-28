import { ServiceTemplate } from '@/components/service-template';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot - EFFI',
  description: 'Automate customer support and increase sales with our intelligent AI chatbot. Available 24/7 to serve customers in multiple languages.',
  keywords: 'AI chatbot, customer support automation, AI assistant, Estonia chatbot, artificial intelligence, customer service',
  openGraph: {
    title: 'AI Chatbot That Converts Visitors Into Customers - EFFI',
    description: 'Automate customer support, capture leads, and increase sales with our intelligent AI chatbot. Available 24/7.',
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
