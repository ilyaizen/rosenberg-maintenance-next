import {NextIntlClientProvider, hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import type React from "react";
import {Noto_Sans, Noto_Sans_Hebrew} from "next/font/google";
import "../globals.css";
import {setRequestLocale} from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for all pages in this layout
  setRequestLocale(locale);

  const dir: "ltr" | "rtl" = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${notoSans.variable} ${notoSansHebrew.variable}`}>
      <body>
        <div className="min-h-screen">
          <NextIntlClientProvider>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
