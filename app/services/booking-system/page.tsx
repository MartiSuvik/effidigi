import { redirect } from 'next/navigation';

export default function BookingSystemRootPage() {
  // Redirect to Estonian locale by default
  redirect('/et/services/booking-system');
}
