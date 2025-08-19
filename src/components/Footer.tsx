"use client";

import React from "react";
import {useTranslations} from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-md">
                <span className="text-sm font-bold">RM</span>
              </div>
              <span className="text-lg font-semibold">{t("companyName")}</span>
            </div>
            <p className="text-background/80">{t("footer.companyParagraph")}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.quickLinks")}</h3>
      <ul className="space-y-2">
              <li>
        <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-background/80 hover:text-background transition-colors">
                  {t("footer.whyChoose")}
                </a>
              </li>
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
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.contactDetails")}</h3>
            <ul className="text-background/80 space-y-2">
              <li>{t("footer.location")}</li>
              <li>
                <a href="tel:+972559206313" className="hover:text-background transition-colors">
                  <span>{t("footer.whatsapp")}</span>
                  <span className="force-ltr inline-block ms-1">+972 55-920-6313</span>
                </a>
              </li>
              <li>
                <a href="mailto:ben@rosenberg-maintenance.co.il" className="hover:text-background transition-colors">
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
