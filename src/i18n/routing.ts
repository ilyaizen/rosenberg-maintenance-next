import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales
  locales: ["en", "he"],
  // Default locale
  defaultLocale: "he",
  // Disable negotiation via Accept-Language/cookie for unprefixed paths like "/"
  // This makes the middleware always redirect "/" -> "/he"
  localeDetection: false,
});

export type AppLocale = (typeof routing)["locales"][number];
