// Lightweight GTM event helper used by client components to push conversion events

declare global {
  interface Window {
    // Must match the existing GTM declaration in the project
    dataLayer: unknown[];
  }
}

function pushGtmEvent(event: string, data: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || ([] as unknown[]);
  window.dataLayer.push({ event, ...data });
}

// Track a click on a phone CTA (tel: links)
export function trackCtaCall(location: "header" | "hero" | "footer" | "other", phone: string): void {
  pushGtmEvent("cta_call_click", { location, phone });
}

// Track a click on a WhatsApp CTA
export function trackCtaWhatsApp(location: "header" | "hero" | "footer" | "other", phone?: string): void {
  pushGtmEvent("cta_whatsapp_click", { location, phone });
}
