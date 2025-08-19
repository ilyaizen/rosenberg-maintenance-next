import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans, Noto_Sans_Hebrew } from "next/font/google"
import "./globals.css"

// Load Noto fonts via next/font to avoid custom <link> usage warnings
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-hebrew",
  subsets: ["hebrew"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rosenberg Maintenance - Professional Roof & Balcony Waterproofing",
  description:
    "Advanced polyurea waterproofing solutions for maximum protection. Expert roof coating services in Kfar Hanasi, North.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSansHebrew.variable}`}>
      <head>
  {/* Fonts are provided via next/font variables on <html>, and globals.css uses them. */}
      </head>
      <body>{children}</body>
    </html>
  )
}
