"use client";

import React from "react";
import {useTranslations} from "next-intl";

export default function Trans({ id, className }: { id: string; className?: string }) {
  const t = useTranslations();
  return <span className={className}>{t(id)}</span>;
}
