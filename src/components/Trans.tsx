"use client";

import React from "react";
import { useI18n } from "./LanguageProvider";

export default function Trans({ id, className }: { id: string; className?: string }) {
  const { t } = useI18n();
  return <span className={className}>{t(id)}</span>;
}
