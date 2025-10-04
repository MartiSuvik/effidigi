import type { Metadata } from 'next';
import { VoiceHeroScrollDemo } from '@/components/ui/voice-hero-scroll-demo';
import dynamic from 'next/dynamic';

// Dynamically import the client-only hero component (default export)
const VoiceHeroClient = dynamic(() => import('./voice-hero-client'), { ssr: false });

export const metadata: Metadata = {
	title: 'AI Voice Assistant - EFFI',
	description: 'Automate phone support and increase sales with our intelligent AI voice assistant. Available 24/7 to serve customers in multiple languages.',
	keywords: 'AI voice assistant, phone automation, AI voice bot, Estonia voice AI, artificial intelligence, customer service',
	openGraph: {
		title: 'AI Voice Assistant That Converts Callers Into Customers - EFFI',
		description: 'Automate phone support, capture leads, and increase sales with our intelligent AI voice assistant. Available 24/7.',
		images: [
			{
				url: 'https://res.cloudinary.com/effichat/image/upload/voice-ai.png',
				width: 1200,
				height: 630,
				alt: 'EFFI AI Voice Assistant',
			},
		],
	},
};

export default function VoiceAiPage() {
	return <VoiceHeroClient />;
}

