"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/rosenberg-maintenance-svg-white.svg"
                alt={t("companyName")}
                width={160}
                height={32}
                className="block h-16 w-auto dark:hidden"
                priority={false}
              />
              <Image
                src="/rosenberg-maintenance-svg.svg"
                alt={t("companyName")}
                width={160}
                height={32}
                className="hidden h-16 w-auto dark:block"
                priority={false}
              />
              <span className="text-lg font-semibold">{t("companyName")}</span>
            </div>
            <p className="text-background/80">{t("footer.companyParagraph")}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 font-bold underline">
              <li>
                <a href="#process" className="text-background/80 hover:text-background transition-colors">
                  {t("footer.process")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-background transition-colors">
                  {t("footer.gallery")}
                </a>
              </li>
              <li>
                {locale !== "en" && (
                  <Link
                    href={{ pathname }}
                    locale="en"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    English
                  </Link>
                )}
              </li>
              <li>
                {locale !== "he" && (
                  <Link
                    href={{ pathname }}
                    locale="he"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    עברית
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.contactDetails")}</h3>
            <ul className="text-background/80 space-y-2 underline">
              <li>
                <a href="https://maps.app.goo.gl/3Vf9RD2xhw58uYhj9" target="_blank" className="font-bold">{t("footer.location")}</a>
                </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=972559206313&text&type=phone_number"
                  target="_blank"
                  className="hover:text-background transition-colors font-bold"
                >
                  <span>{t("footer.whatsapp")}:&nbsp;</span>
                  <span className="force-ltr inline">055-920-6313</span>
                </a>
              </li>
              <li>
                <a href="mailto:ben@rosenberg-maintenance.co.il" className="font-bold hover:text-background transition-colors">
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-foreground/20 text-background/60 mt-8 border-t pt-8 text-center">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
