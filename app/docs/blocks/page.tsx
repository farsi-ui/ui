import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { allBlocks, blockCategories } from "@/lib/blocks-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir/";

export const metadata: Metadata = {
  title: "بلاک‌ها",
  description: "بلاک‌های آماده و حرفه‌ای برای React با پشتیبانی کامل از RTL و زبان فارسی. فرم‌های ورود، داشبورد، کارت محصول و بیشتر.",
  keywords: [
    "بلاک React",
    "کامپوننت آماده",
    "فرم ورود فارسی",
    "داشبورد RTL",
    "UI Kit فارسی",
    "فارسی یو آی Blocks",
    "React Blocks",
    "Pre-built Components",
  ],
  alternates: {
    canonical: `${siteUrl}/docs/blocks`,
  },
  openGraph: {
    title: "بلاک‌ها | فارسی یو آی",
    description: "بلاک‌های آماده و حرفه‌ای برای React با پشتیبانی کامل از RTL و زبان فارسی.",
    url: `${siteUrl}/docs/blocks`,
    siteName: "فارسی یو آی",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "بلاک‌ها | فارسی یو آی",
    description: "بلاک‌های آماده و حرفه‌ای برای React با پشتیبانی کامل از RTL و زبان فارسی.",
  },
};

const newBlocks = ["login-01", "signup-01", "dashboard-01"];

export default function BlocksOverviewPage() {
  // Group blocks by category
  const groupedBlocks = allBlocks.reduce(
    (acc, block) => {
      if (!acc[block.category]) {
        acc[block.category] = [];
      }
      acc[block.category].push(block);
      return acc;
    },
    {} as Record<string, typeof allBlocks>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight">بلاک‌ها</h1>
          <Badge className="bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] px-1.5 py-0 h-5">
            جدید
          </Badge>
        </div>
        <p className="text-muted-foreground">
          بلاک‌های آماده برای ساخت رابط‌های کاربری حرفه‌ای. این بلاک‌ها به صورت کامل برای RTL و زبان فارسی
          بهینه‌سازی شده‌اند.
        </p>
      </div>

      {/* Info Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">بلاک‌ها چیستند؟</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            بلاک‌ها کامپوننت‌های از پیش ساخته شده هستند که می‌توانید مستقیماً در پروژه خود کپی کنید.
            هر بلاک شامل چندین کامپوننت ترکیبی است که به صورت هماهنگ با هم کار می‌کنند.
          </p>
          <p>
            برخلاف کامپوننت‌های پایه، بلاک‌ها بخش‌های کامل‌تری از رابط کاربری مانند فرم‌های ورود،
            صفحات داشبورد و کارت‌های محصول را پوشش می‌دهند.
          </p>
        </CardContent>
      </Card>

      {/* Empty State or Blocks Grid */}
      {allBlocks.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-4 mb-4">
              <svg
                className="h-8 w-8 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <CardTitle className="text-lg mb-2">بلاک‌ها به زودی اضافه می‌شوند</CardTitle>
            <CardDescription className="max-w-sm">
              ما در حال آماده‌سازی بلاک‌های احراز هویت، داشبورد و فرم‌های مختلف هستیم. به زودی در
              دسترس خواهند بود.
            </CardDescription>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedBlocks).map(([category, blocks]) => (
            <section key={category} className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">
                  {blockCategories[category as keyof typeof blockCategories]}
                </h2>
                <Badge variant="outline" className="text-xs">
                  {blocks.length}
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blocks.map((block) => {
                  const isNew = newBlocks.includes(block.slug);

                  return (
                    <Link
                      key={block.slug}
                      href={`/docs/blocks/${block.slug}`}
                      className="group block"
                    >
                      <Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base group-hover:text-primary transition-colors">
                              {block.name}
                            </CardTitle>
                            {isNew && (
                              <Badge className="bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] px-1.5 py-0 h-5">
                                جدید
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-xs">
                            {block.nameEn}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {block.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Categories Preview */}
      <section className="space-y-4 border-t pt-8">
        <h2 className="text-lg font-semibold">دسته‌بندی‌ها</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(blockCategories).map(([key, label]) => {
            const categoryBlocks = allBlocks.filter((b) => b.category === key);
            return (
              <div
                key={key}
                className="flex items-center justify-between rounded-lg border bg-card px-4 py-3"
              >
                <span className="text-sm font-medium">{label}</span>
                <Badge variant="secondary" className="text-xs">
                  {categoryBlocks.length} بلاک
                </Badge>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
