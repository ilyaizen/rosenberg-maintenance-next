import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales
  locales: ["en", "he"],
  // Default locale
  defaultLocale: "en",
  // Disable negotiation via Accept-Language/cookie for unprefixed paths like "/"
  // When enabled, unprefixed paths like "/" will negotiate via Accept-Language and cookies.
  // With defaultLocale "en", any presence of Hebrew in the user's preferences will switch to "/he".
  localeDetection: true,
});

export type AppLocale = (typeof routing)["locales"][number];
