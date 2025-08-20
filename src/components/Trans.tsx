"use client";

import { useTranslations } from "next-intl";
import React from "react";

export default function Trans({ id, className }: { id: string; className?: string }) {
  const t = useTranslations();
  return <span className={className}>{t(id)}</span>;
}
