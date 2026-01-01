import type React from "react"
import type { Metadata, Viewport } from "next"
import { Vazirmatn } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
})

export const metadata: Metadata = {
  title: "Farsi UI - کتابخانه کامپوننت فارسی",
  description: "مجموعه کامپوننت‌های React با پشتیبانی کامل RTL برای توسعه‌دهندگان ایرانی",
  keywords: ["React", "Next.js", "RTL", "Persian", "Farsi", "UI Components", "کامپوننت", "فارسی"],
  authors: [{ name: "Farsi UI Team" }],
  creator: "Farsi UI",
  publisher: "Farsi UI",
  generator: "v0.app",
  openGraph: {
    title: "Farsi UI - کتابخانه کامپوننت فارسی",
    description: "مجموعه کامپوننت‌های React با پشتیبانی کامل RTL برای توسعه‌دهندگان ایرانی",
    type: "website",
    locale: "fa_IR",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a24" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
