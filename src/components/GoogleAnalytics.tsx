"use client";
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-SWR49KDTVF';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Create script for gtag
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    // Create script for configuration
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { send_page_view: false });
    `;

    // Append scripts to document head
    document.head.appendChild(gtagScript);
    document.head.appendChild(configScript);

    // Cleanup function
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(configScript);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null;
}
