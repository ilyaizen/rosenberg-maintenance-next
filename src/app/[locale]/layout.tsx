import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Noto_Sans, Noto_Sans_Hebrew } from "next/font/google";
import { notFound } from "next/navigation";
import type React from "react";

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
    <html lang={locale} dir={dir} className={`${notoSans.variable} ${notoSansHebrew.variable}`}>
      <head></head>
      <body>
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
