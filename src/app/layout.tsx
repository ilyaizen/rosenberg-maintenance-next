import type React from "react";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The actual document is rendered in app/[locale]/layout.tsx
  return children;
}
