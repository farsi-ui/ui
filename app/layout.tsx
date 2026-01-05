import type React from "react"
import type { Metadata, Viewport } from "next"
import { Vazirmatn } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir/"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "فارسی یو آی - کتابخانه کامپوننت فارسی | React RTL Components",
    template: "%s | فارسی یو آی",
  },
  description: "فارسی یو آی - مجموعه کامپوننت‌های آماده React با پشتیبانی کامل RTL برای توسعه‌دهندگان ایرانی. کامپوننت‌های مدرن، دسترس‌پذیر و قابل سفارشی‌سازی با Tailwind CSS.",
  keywords: [
    "React",
    "Next.js",
    "RTL",
    "Persian",
    "Farsi",
    "UI Components",
    "کامپوننت",
    "فارسی",
    "رابط کاربری",
    "Tailwind CSS",
    "TypeScript",
    "راست به چپ",
    "دسترسی‌پذیری",
    "WCAG",
    "Radix UI",
    "shadcn",
  ],
  authors: [{ name: "احسان غفار", url: siteUrl }],
  creator: "احسان غفار",
  publisher: "احسان غفار",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fa-IR": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  openGraph: {
    title: "فارسی یو آی - کتابخانه کامپوننت فارسی",
    description: "مجموعه کامپوننت‌های آماده React با پشتیبانی کامل RTL برای توسعه‌دهندگان ایرانی",
    url: siteUrl,
    siteName: "فارسی یو آی",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "فارسی یو آی - کتابخانه کامپوننت فارسی برای React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "فارسی یو آی - کتابخانه کامپوننت فارسی",
    description: "مجموعه کامپوننت‌های آماده React با پشتیبانی کامل RTL",
    images: ["/og-image.png"],
    creator: "@farsiui",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
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
        <Analytics />
      </body>
    </html>
  )
}
