import DataAIPageClient from './data-ai-page-client';

interface DataAIPageProps {
  params: {
    locale: string;
  };
}

export default function DataAIPage({ params }: DataAIPageProps) {
  return <DataAIPageClient />;
}
