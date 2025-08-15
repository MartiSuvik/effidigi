import BookingSystemPageClient from './booking-system-page-client';

interface BookingSystemPageProps {
  params: {
    locale: string;
  };
}

export default function BookingSystemPage({ params }: BookingSystemPageProps) {
  return <BookingSystemPageClient />;
}



