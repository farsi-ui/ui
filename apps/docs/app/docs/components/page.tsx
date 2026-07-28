import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { allComponents } from "@/lib/components-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir/";

export const metadata: Metadata = {
  title: "کامپوننت‌ها",
  description: "کتابخانه کامل کامپوننت‌های React با پشتیبانی RTL و زبان فارسی. دکمه، فرم، منو، جدول و بیشتر.",
  keywords: [
    "کامپوننت React",
    "React Components",
    "RTL Components",
    "فارسی یو آی",
    "دکمه فارسی",
    "فرم RTL",
    "UI Kit",
    "shadcn فارسی",
  ],
  alternates: {
    canonical: `${siteUrl}/docs/components`,
  },
  openGraph: {
    title: "کامپوننت‌ها | فارسی یو آی",
    description: "کتابخانه کامل کامپوننت‌های React با پشتیبانی RTL و زبان فارسی.",
    url: `${siteUrl}/docs/components`,
    siteName: "فارسی یو آی",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "کامپوننت‌ها | فارسی یو آی",
    description: "کتابخانه کامل کامپوننت‌های React با پشتیبانی RTL و زبان فارسی.",
  },
};

const newComponents = ["button-group", "carousel", "charts"];

export default function ComponentsOverviewPage() {
  // Sort components alphabetically by English name
  const sortedComponents = [...allComponents].sort((a, b) => a.nameEn.localeCompare(b.nameEn));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">کامپوننت‌ها</h1>
        <p className="text-muted-foreground">
          یک کامپوننت از لیست زیر انتخاب کنید تا نمونه‌ها و کد آن را مشاهده کنید.
        </p>
      </div>

      {/* Components Grid */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {sortedComponents.map((component) => {
          const isNew = newComponents.includes(component.slug);

          return (
            <Link
              key={component.slug}
              href={`/docs/components/${component.slug}`}
              className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-primary/30 hover:bg-accent"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {component.nameEn}
              </span>
              {isNew && (
                <Badge className="bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] px-1.5 py-0 h-5">
                  جدید
                </Badge>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
