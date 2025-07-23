"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function CalProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "free-consultation" });
        cal("ui", { 
          hideEventTypeDetails: false, 
          layout: "month_view" 
        });
        console.log('Cal.com integration initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Cal.com:', error);
      }
    })();
  }, []);

  return (
    <>
      {children}
      {/* Hidden Cal.com trigger button */}
      <button 
        data-cal-namespace="free-consultation"
        data-cal-link="effidigi/free-consultation"
        data-cal-config='{"layout":"month_view"}'
        style={{ display: 'none' }}
        aria-hidden="true"
        tabIndex={-1}
      />
    </>
  );
}
