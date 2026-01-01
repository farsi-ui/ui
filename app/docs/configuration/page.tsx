import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">تنظیمات</h1>
        <p className="text-lg text-muted-foreground">
          نحوه پیکربندی و سفارشی‌سازی Moon UI برای پروژه شما
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
