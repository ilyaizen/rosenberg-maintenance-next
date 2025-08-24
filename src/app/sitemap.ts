import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const baseUrl = "https://www.rosenberg-maintenance.co.il" as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Create one entry per locale (don't include hash fragments; search engines ignore them in sitemaps)
  const entries: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  }));

  return entries;
}
