export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">نصب</h1>
        <p className="text-base text-muted-foreground">راهنمای نصب و راه‌اندازی Ein UI در پروژه شما</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium tracking-tight">پیش‌نیازها</h2>
        <ul className="me-5 list-disc space-y-1.5 text-sm leading-7 text-muted-foreground">
          <li>Node.js نسخه 18 یا بالاتر</li>
          <li>پروژه Next.js با App Router</li>
          <li>Tailwind CSS v4</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium tracking-tight">۱. نصب وابستگی‌ها</h2>
        <div className="rounded-lg border bg-muted/30 p-4" dir="ltr">
          <pre className="text-[13px]">
            <code>npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge</code>
          </pre>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium tracking-tight">۲. پیکربندی فونت Vazirmatn</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          فایل <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">app/layout.tsx</code> را به شکل زیر
          ویرایش کنید:
        </p>
        <div className="rounded-lg border bg-muted/30 p-4" dir="ltr">
          <pre className="overflow-x-auto text-[13px] leading-relaxed">
            <code>{`import { Vazirmatn } from "next/font/google"

const vazirmatn = Vazirmatn({ subsets: ["arabic"] })

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        {children}
      </body>
    </html>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium tracking-tight">۳. افزودن تابع cn</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          فایل <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">lib/utils.ts</code> را ایجاد کنید:
        </p>
        <div className="rounded-lg border bg-muted/30 p-4" dir="ltr">
          <pre className="overflow-x-auto text-[13px] leading-relaxed">
            <code>{`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium tracking-tight">۴. کپی کامپوننت‌ها</h2>
        <p className="text-sm leading-7 text-muted-foreground">
          کامپوننت‌های مورد نیاز را از بخش مستندات کپی کرده و در پوشه{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">components/ui</code> قرار دهید.
        </p>
      </div>
    </div>
  )
}
