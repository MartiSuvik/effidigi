"use client";

import { getCalApi } from "@calcom/embed-react";

export function useCal() {
  const openCalModal = async () => {
    try {
      // Try to click the hidden Cal.com button first (most reliable method)
      const calButton = document.querySelector('[data-cal-link="effidigi/free-consultation"]') as HTMLElement;
      if (calButton) {
        calButton.click();
        return;
      }

      // Fallback: Use Cal.com API directly
      const cal = await getCalApi({ namespace: "free-consultation" });
      cal("modal", {
        calLink: "effidigi/free-consultation",
        config: {
          layout: "month_view"
        }
      });
    } catch (error) {
      console.error('Error opening Cal.com modal:', error);
      // Final fallback: Open Cal.com directly in new tab
      window.open('https://cal.com/effidigi/free-consultation', '_blank');
    }
  };

  return { openCalModal };
}