import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GoogleTagManagerNoScript, GoogleTagManagerScript } from "@/components/GoogleTagManager";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import RouteAnalytics from "@/components/RouteAnalytics";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Noto_Sans, Noto_Sans_Hebrew } from "next/font/google";
import { notFound } from "next/navigation";
import type React from "react";
import { Suspense } from "react";

import "../globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  // Use the variable font with the full weight range so utilities like font-black (900) map precisely
  weight: "variable",
  style: ["normal"],
  display: "swap",
  preload: true,
});

const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-hebrew",
  subsets: ["hebrew"],
  // Load all standard static weights to guarantee 900 is available for Hebrew glyphs
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for all pages in this layout
  setRequestLocale(locale);

  const dir: "ltr" | "rtl" = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`scroll-smooth ${notoSans.variable} ${notoSansHebrew.variable}`}>
      <head></head>
      <body className="overflow-x-hidden">
        {/* GTM noscript for users without JS */}
        <GoogleTagManagerNoScript />
        {/* Initialize GTM and GA, then track route changes */}
        <GoogleTagManagerScript />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <RouteAnalytics />
        </Suspense>
        <div className="min-h-screen">
          <NextIntlClientProvider>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Localized metadata for each locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale });

  // Helper to safely read optional translation keys
  const tr = (key: string): string | null => {
    try {
      const value = t(key) as unknown as string;
      if (!value || value === key) return null;
      return value;
    } catch {
      return null;
    }
  };

  const siteName = tr("companyName") ?? "Rosenberg Maintenance";
  const title = tr("seo.title") ?? tr("hero.title") ?? siteName;
  const description = tr("seo.description") ?? tr("hero.p1") ?? tr("footer.companyParagraph") ?? siteName;
  const keywordsRaw = tr("seo.keywords");
  const keywords = keywordsRaw
    ? keywordsRaw
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : undefined;

  // Easy-to-update placeholders (replace later)
  const twitterHandle = "@rosenberg_maintenance"; // TODO: update
  const ogImage = locale === "he" ? "/og/he.jpg" : "/og/en.jpg"; // TODO: upload real images

  // Map to standard OG locale tags
  const ogLocale = locale === "he" ? "he_IL" : "en_US";

  return {
    metadataBase: new URL("https://www.rosenberg-maintenance.co.il/"),
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        "/favicon.ico",
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        he: "/he",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      siteName,
      title,
      description,
      url: `/${locale}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      site: twitterHandle,
      title,
      description,
      images: [ogImage],
    },
  } satisfies Metadata;
}
