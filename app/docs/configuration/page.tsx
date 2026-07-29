import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir/";

export const metadata: Metadata = {
  title: "تنظیمات و پیکربندی",
  description:
    "راهنمای تنظیمات فارسی یو آی شامل پیکربندی Tailwind CSS، پشتیبانی RTL، تم تیره و روشن و فونت فارسی Vazirmatn.",
  keywords: [
    "تنظیمات فارسی یو آی",
    "پیکربندی",
    "Tailwind CSS config",
    "RTL setup",
    "theme dark light",
    "Vazirmatn font",
  ],
  alternates: {
    canonical: `${siteUrl}/docs/configuration`,
  },
  openGraph: {
    title: "تنظیمات و پیکربندی | فارسی یو آی",
    description:
      "راهنمای کامل پیکربندی فارسی یو آی برای پروژه React با پشتیبانی RTL",
    url: `${siteUrl}/docs/configuration`,
    siteName: "فارسی یو آی",
    locale: "fa_IR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "تنظیمات و پیکربندی | فارسی یو آی",
    description:
      "راهنمای کامل پیکربندی فارسی یو آی برای پروژه React با پشتیبانی RTL",
  },
};

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">تنظیمات</h1>
        <p className="text-lg text-muted-foreground">
          راهنمای پیکربندی فارسی یو آی در پروژه‌
        </p>
      </div>

      {/* Tailwind Config */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">پیکربندی Tailwind</h2>
        <Card>
          <CardHeader>
            <CardTitle>globals.css</CardTitle>
            <CardDescription>تنظیمات اصلی استایل و متغیرهای CSS</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" dir="ltr">
              <code>{`@import 'tailwindcss';

@theme inline {
  --font-sans: 'Vazirmatn', sans-serif;
  --radius: 0.5rem;

  /* رنگ‌های اصلی */
  --color-primary: #4e46e5;
  --color-secondary: #6b7280;
  --color-accent: #10b981;
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* RTL Config */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">پشتیبانی RTL</h2>
        <Card>
          <CardHeader>
            <CardTitle>layout.tsx</CardTitle>
            <CardDescription>تنظیم جهت راست به چپ در فایل layout</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" dir="ltr">
              <code>{`export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Theme Config */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">تم تیره و روشن</h2>
        <Card>
          <CardHeader>
            <CardTitle>ThemeProvider</CardTitle>
            <CardDescription>استفاده از next-themes برای مدیریت تم</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" dir="ltr">
              <code>{`import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Font Config */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">فونت فارسی</h2>
        <Card>
          <CardHeader>
            <CardTitle>Vazirmatn</CardTitle>
            <CardDescription>نصب و استفاده از فونت وزیرمتن</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" dir="ltr">
              <code>{`npm install @fontsource/vazirmatn`}</code>
            </pre>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm" dir="ltr">
              <code>{`// در فایل layout.tsx
import "@fontsource/vazirmatn/400.css"
import "@fontsource/vazirmatn/500.css"
import "@fontsource/vazirmatn/700.css"`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
