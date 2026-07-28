import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function DocsPage() {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <div className="not-prose mb-8 space-y-3">
        <Badge variant="outline" className="mb-2 border-beerus">
          نسخه 1.0
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">معرفی فارسی یو آی</h1>
        <p className="text-lg leading-relaxed text-trunks">
          ساخت رابط کاربری فارسی، ساده‌تر از همیشه
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          <strong className="font-semibold text-foreground">فارسی یو آی</strong>
          یک کتابخانه کامپوننت متن‌باز برای React است که با{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-piccolo underline decoration-piccolo/30 underline-offset-4 transition-colors hover:decoration-piccolo"
          >
            Tailwindcss
          </a>{" "}
          استایل دهی شده و از ابتدا برای زبان فارسی و چیدمان راست‌به‌چپ (RTL) طراحی شده است.
        </p>

        <p className="text-base leading-relaxed">
          با مجموعه‌ای از کامپوننت‌های زیبا، مدرن و کاملاً قابل سفارشی‌سازی، می‌توانید خیلی سریع در
          پروژه‌های React و Next.js رابط کاربری حرفه‌ای، خوانا و هماهنگ با نیاز کاربران فارسی‌زبان
          بسازید — بدون دردسرهای همیشگی RTL.
        </p>
      </div>

      <div className="not-prose my-10">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">ویژگی‌های کلیدی</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "پشتیبانی کامل از راست به چپ (RTL)",
            "فونت Vazirmatn برای نمایش بهینه متن فارسی",
            "تم روشن و تاریک با تغییر هوشمند",
            "کامپوننت‌های قابل دسترس (WCAG 2.1)",
            "سازگار با Next.js App Router و React 19",
            "استایل‌دهی با Tailwind CSS v4",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-lg border border-beerus bg-card p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-piccolo" aria-hidden="true" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="not-prose mt-12 rounded-xl border border-beerus bg-hales/50 p-8">
        <h2 className="mb-3 text-xl font-semibold">آماده برای شروع؟</h2>
        <p className="mb-6 text-sm leading-relaxed text-trunks">
          همین الان کدنویسی رو شروع کن و از کامپوننت‌های فارسی یو آی در پروژه‌هات استفاده کن!
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="default"
            className="bg-piccolo font-medium text-goku hover:bg-piccolo/90"
          >
            <Link href="/docs/installation">راهنمای نصب</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="default"
            className="border-beerus bg-transparent font-medium hover:bg-hover-bg"
          >
            <Link href="/docs/components/button">مشاهده کامپوننت‌ها</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
