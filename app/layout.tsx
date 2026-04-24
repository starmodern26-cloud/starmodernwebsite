import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk, Geist_Mono } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Star Modern Diagnostic Laboratory | Pioneering Healthcare Diagnostics",
  description:
    "Star Modern Diagnostic Laboratory offers comprehensive diagnostic services including clinical chemistry, hematology, microbiology, serology, hormonal tests, and more. Pioneering, Predictive, Preventive and Personalized diagnostics.",
  keywords: [
    "diagnostic lab",
    "medical tests",
    "blood tests",
    "clinical chemistry",
    "hematology",
    "microbiology",
    "Star Modern",
    "health diagnostics",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "Star Modern Diagnostic Laboratory",
    description: "Pioneering, Predictive, Preventive and Personalized diagnostics",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0c6b4d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
