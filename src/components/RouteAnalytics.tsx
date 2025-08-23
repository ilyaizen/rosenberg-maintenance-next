"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RouteAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  type WindowAnalytics = {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  } & Window;

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    // GA4 page view
    if (typeof window !== "undefined") {
      const w = window as unknown as WindowAnalytics;
      if (typeof w.gtag === "function" && GA_ID) {
        w.gtag("event", "page_view", {
        page_path: pathname,
        page_location: typeof window !== "undefined" ? window.location.href : url,
        page_title: document.title,
        });
      }
    }

    // GTM virtual pageview
    if (typeof window !== "undefined") {
      const w = window as unknown as WindowAnalytics;
      if (Array.isArray(w.dataLayer)) {
        w.dataLayer.push({
        event: "pageview",
        page_path: pathname,
        page_location: typeof window !== "undefined" ? window.location.href : url,
        page_title: document.title,
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}
