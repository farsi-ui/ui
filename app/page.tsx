"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Sparkles,
  Zap,
  Palette,
  Moon,
  Code2,
  Layers,
  Check,
  Component,
  Accessibility,
  Languages,
  Menu,
  X,
  Blocks,
  LayoutDashboard,
  KeyRound,
  Contact,
  ArrowRight,
  SunIcon,
  MoonIcon,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsRTL } from "@/hooks/use-rtl";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CodeBlock } from "@/components/ui/code-block";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FarsiUILogo } from "@/components/app-logo";
import GlassComponentsCTA from "@/components/glass/glass-cta";

const features = [
  {
    icon: Zap,
    title: "پشتیبانی کامل RTL",
    description: "تمام کامپوننت‌ها با چیدمان راست به چپ سازگار هستند",
  },
  {
    icon: Palette,
    title: "سیستم طراحی مدرن",
    description: "رنگ‌ها و توکن‌های طراحی منسجم و حرفه‌ای",
  },
  {
    icon: Moon,
    title: "تم روشن و تاریک",
    description: "پشتیبانی از هر دو تم با انتقال نرم",
  },
  {
    icon: Accessibility,
    title: "دسترسی‌پذیری کامل",
    description: "مطابق با استانداردهای WCAG 2.1",
  },
  {
    icon: Languages,
    title: "فونت Vazirmatn",
    description: "بهینه‌سازی شده برای نمایش متن فارسی",
  },
  {
    icon: Layers,
    title: "قابل سفارشی‌سازی",
    description: "استایل‌دهی آسان با Tailwind CSS",
  },
];

const featuredProject = {
  name: "مرجع تخصصی موبایل لجندز",
  nameEn: "MLBB Hub",
  description:
    "یک پلتفرم جامع برای بازیکنان و طرفداران بازی موبایل لجندز که اخبار، راهنماها، ویدیوها و تحلیل‌های تخصصی را ارائه می‌دهد. این پروژه با استفاده از فارسی یو آی ساختته شده تا تجربه کاربری بی‌نظیری را برای کاربران فارسی‌زبان فراهم کند.",
  descriptionShort:
    "پلتفرمی برای اخبار و راهنماهای موبایل لجندز با پشتیبانی کامل RTL",
  url: "https://mlbbhub.ir/?utm_source=farsi.eindev.ir&utm_medium=referral&utm_campaign=showcase",
  category: "بازی",
  categoryEn: "Gaming",
  logo: "🏪",
  image: "/mlbbhub.png", // Replace with actual image path
  highlights: [
    "پشتیبانی کامل از چیدمان راست به چپ (RTL) برای زبان فارسی",
    "رابط کاربری زیبا و مدرن با استفاده از کامپوننت‌های فارسی یو آی",
    "چیدمان کاملاً ریسپانسیو و بهینه‌شده برای همه دستگاه‌ها",
    "دریافت پیشنهادهای هوشمند هیرو برای مقابله با انتخاب‌های حریف",
  ],
};

export default function Home() {
  const [mounted, setMounted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = useIsRTL();
  const { setTheme, theme } = useTheme();

  const installCode = `npx shadcn@latest add @einui/react`;
  const usageCode = `import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="primary">
      شروع کنید
    </Button>
  )
}`;

  // JSON-LD structured data for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "فارسی یو آی",
    url: "https://farsi.eindev.ir/",
    logo: "https://farsi.eindev.ir/logo.png",
    description:
      "سیستم طراحی RTL-First برای React با پشتیبانی کامل از زبان فارسی",
    sameAs: ["https://github.com/ehsanghaffar/farsi-ui"],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "فارسی یو آی",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "کتابخانه کامپوننت‌های React با پشتیبانی RTL و زبان فارسی",
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <main className="min-h-screen bg-background pb-16 md:pb-0">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-beerus/50 bg-background/80 backdrop-blur-xl transition-all">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-bold tracking-tight transition-all hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1 sm:text-lg"
              aria-label="فارسی یو آی - صفحه اصلی"
            >
              <FarsiUILogo />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="منوی اصلی"
            >
              <Link
                href="/docs"
                className="rounded-lg px-3 py-2 text-sm font-medium text-trunks transition-colors hover:bg-hover-bg hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                مستندات
              </Link>
              <Link
                href="/docs/components"
                className="rounded-lg px-3 py-2 text-sm font-medium text-trunks transition-colors hover:bg-hover-bg hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                کامپوننت‌ها
              </Link>
              <Link
                href="/docs/blocks"
                className="rounded-lg px-3 py-2 text-sm font-medium text-trunks transition-colors hover:bg-hover-bg hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                بلاک‌ها
              </Link>
              <Link
                href="https://github.com/ehsanghaffar"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-trunks transition-colors hover:bg-hover-bg hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="GitHub - Ehsan Ghaffar"
              >
                <Github className="size-4" />
              </Link>
              <div className="me-1 ms-2 h-5 w-px bg-beerus" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="size-8"
                aria-label="تغییر تم"
              >
                <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="size-8"
                aria-label="تغییر تم"
              >
                <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                    aria-label="بازکردن منو"
                  >
                    {mobileMenuOpen ? (
                      <X className="size-4" />
                    ) : (
                      <Menu className="size-4" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side={"right"} className="w-72 p-6">
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/docs"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      مستندات
                    </Link>
                    <Link
                      href="/docs/components"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      کامپوننت‌ها
                    </Link>
                    <Link
                      href="/docs/blocks"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Blocks className="size-4" />
                      بلاک‌ها
                    </Link>
                    <Link
                      href="https://github.com/ehsanghaffar"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Github className="size-4" />
                      GitHub
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Hero Section - Improved responsive padding and text sizes */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-piccolo/5 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -top-40 start-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-piccolo/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-32 lg:pt-12">
            <div className="text-center">
              <div
                className={`opacity-0-init ${mounted ? "animate-fade-in-down" : ""}`}
              >
                <GlassComponentsCTA className="mb-4" />
              </div>

              <h1
                className={`opacity-0-init mx-auto max-w-4xl text-balance leading-tight sm:text-5xl lg:text-6xl xl:text-7xl ${
                  mounted ? "animate-fade-in-up delay-100" : ""
                }`}
              >
                کتابخانه کامپوننت
                <br />
                <span className="animate-linear bg-linear-to-l from-piccolo via-hit to-frieza bg-clip-text text-transparent">
                  React فارسی
                </span>
              </h1>

              <p
                className={`opacity-0-init mx-auto mt-6 max-w-4xl text-balance text-lg leading-relaxed text-trunks sm:mt-8 ${
                  mounted ? "animate-fade-in-up delay-200" : ""
                }`}
              >
                فارسی یو آی مجموعه‌ای از کامپوننت‌های آماده برای React است که
                مخصوص توسعه‌دهندگان فارسی‌زبان طراحی شده. با فارسی یو آی
                می‌توانید سریع، تمیز و بدون دردسر رابط‌های کاربری زیبا و کاربردی
                بسازید
                <br />
                فقط کپی، پیست و استفاده کن.
              </p>

              {/* CTAs - Stack on mobile, row on tablet+ */}
              <div
                className={`opacity-0-init mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5 ${
                  mounted ? "animate-fade-in-up delay-300" : ""
                }`}
              >
                <Button
                  asChild
                  size="lg"
                  className="group h-12 w-full bg-piccolo px-8 text-base font-semibold text-white shadow-lg shadow-piccolo/25 transition-all hover:bg-piccolo/90 hover:shadow-xl hover:shadow-piccolo/35 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <Link href="/docs">
                    مستندات
                    <ArrowRight
                      className={cn(
                        "ms-1 size-4 transition-transform group-hover:-translate-x-1",
                        isRTL ? "rotate-180 group-hover:translate-x-1" : "",
                      )}
                    />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="h-12 w-full border-beerus bg-background px-8 text-base font-semibold transition-all hover:bg-hover-bg hover:border-piccolo/30 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <Link href="/docs/components">
                    <Component className="ms-2 size-4" />
                    مشاهده کامپوننت‌ها
                  </Link>
                </Button>
              </div>

              {/* Install command with better styling */}
              {/* <div
              className={`opacity-0-init mt-8 inline-flex items-center gap-3 rounded-full border border-beerus bg-card px-5 py-2.5 transition-all hover:border-piccolo/20 hover:shadow-md sm:mt-10 ${
                mounted ? "animate-fade-in-up delay-400" : ""
              }`}
            >
              <Terminal className="size-4 shrink-0 text-piccolo" />
              <code className="font-mono text-sm text-trunks" dir="ltr">
                فقط کدها رو کپی کن
              </code>
              <Check className="size-4 shrink-0 text-roshi" />
            </div> */}
            </div>
          </div>
          <div className="flex justify-center">
            <ScrollIndicator targetId="showcase" />
          </div>
        </section>

        {/* Blocks Section - NEW */}
        <section className="border-t border-beerus bg-linear-to-b from-hales/30 to-transparent py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-hit/30 bg-hit/5 text-hit font-semibold inline-flex items-center gap-2"
              >
                <Blocks className="size-3.5" />
                بلاک‌ها
                <span className="bg-hit/20 text-hit text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  جدید
                </span>
              </Badge>
              <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
                بلاک‌های آماده برای پروژه‌های واقعی
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-trunks">
                بلاک‌ها ترکیب‌های آماده از چند کامپوننت هستند که می‌توانید
                مستقیماً در پروژه خود استفاده کنید. فرم‌های ورود، داشبوردها،
                صفحات ارتباط و موارد بیشتر - همه با پشتیبانی کامل RTL
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Authentication Block Card */}
              <Link
                href="/docs/blocks/login-01"
                className={`opacity-0-init group relative overflow-hidden rounded-xl border border-beerus bg-card p-6 transition-all duration-300 hover:border-hit/40 hover:shadow-lg hover:shadow-hit/10 ${
                  mounted ? "animate-fade-in-up delay-100" : ""
                }`}
              >
                <div className="absolute -end-8 -top-8 h-24 w-24 rounded-full bg-hit/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-hit/20 to-piccolo/20 text-hit transition-all group-hover:scale-110">
                    <KeyRound className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">احراز هویت</h3>
                  <p className="text-sm leading-relaxed text-trunks mb-4">
                    فرم‌های ورود و ثبت‌نام با طراحی مدرن و پشتیبانی از شبکه‌های
                    اجتماعی
                  </p>
                  <span className="text-xs text-hit font-medium">۳ بلاک</span>
                </div>
              </Link>

              {/* Dashboard Block Card */}
              <Link
                href="/docs/blocks/stats-cards-01"
                className={`opacity-0-init group relative overflow-hidden rounded-xl border border-beerus bg-card p-6 transition-all duration-300 hover:border-frieza/40 hover:shadow-lg hover:shadow-frieza/10 ${
                  mounted ? "animate-fade-in-up delay-200" : ""
                }`}
              >
                <div className="absolute -end-8 -top-8 h-24 w-24 rounded-full bg-frieza/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-frieza/20 to-hit/20 text-frieza transition-all group-hover:scale-110">
                    <LayoutDashboard className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">داشبورد</h3>
                  <p className="text-sm leading-relaxed text-trunks mb-4">
                    کارت‌های آماری و لیست فروش‌های اخیر برای پنل‌های مدیریت
                  </p>
                  <span className="text-xs text-frieza font-medium">
                    ۲ بلاک
                  </span>
                </div>
              </Link>

              {/* Forms Block Card */}
              <Link
                href="/docs/blocks/contact-form-01"
                className={`opacity-0-init group relative overflow-hidden rounded-xl border border-beerus bg-card p-6 transition-all duration-300 hover:border-roshi/40 hover:shadow-lg hover:shadow-roshi/10 ${
                  mounted ? "animate-fade-in-up delay-300" : ""
                }`}
              >
                <div className="absolute -end-8 -top-8 h-24 w-24 rounded-full bg-roshi/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-roshi/20 to-hit/20 text-roshi transition-all group-hover:scale-110">
                    <Contact className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">فرم‌ها</h3>
                  <p className="text-sm leading-relaxed text-trunks mb-4">
                    فرم‌های تماس و سایر فرم‌های کاربردی با اعتبارسنجی
                  </p>
                  <span className="text-xs text-roshi font-medium">۱ بلاک</span>
                </div>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-beerus bg-background px-8 text-base font-semibold transition-all hover:bg-hover-bg hover:border-hit/30"
              >
                <Link href="/docs/blocks">
                  <Blocks className="ms-2 size-4" />
                  مشاهده همه بلاک‌ها
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Code Preview Section - Improved mobile layout */}
        <section className="hidden md:flex lg:flex border-y border-beerus bg-linear-to-b from-hales/50 to-hales/20 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center">
                <Badge
                  variant="outline"
                  className="mb-4 w-fit border-hit/30 bg-hit/5 text-hit font-semibold transition-all hover:bg-hit/10"
                >
                  <Code2 className="me-2 size-3.5" />
                  نصب آسان
                </Badge>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
                  شروع سریع در چند ثانیه
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-trunks sm:mt-6">
                  با یک دستور ساده، کامپوننت‌های مورد نیاز خود را به پروژه اضافه
                  کنید. تمام کامپوننت‌ها کاملاً از TypeScript و Tailwind CSS
                  پشتیبانی می‌کنند.
                </p>
                <div id="showcase" className="mt-8 space-y-4 sm:mt-10">
                  {[
                    "پشتیبانی کامل از TypeScript",
                    "سازگار با Next.js و React",
                    "استایل‌دهی آسان با Tailwind CSS",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-roshi/15 text-roshi">
                        <Check className="size-4 font-bold" />
                      </div>
                      <span className="text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <CodeBlock
                  code={installCode}
                  filename="terminal"
                  language="bash"
                />
                <CodeBlock code={usageCode} filename="app.tsx" language="tsx" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Responsive grid */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-4 border-frieza/30 bg-frieza/5 text-frieza font-semibold inline-flex items-center gap-2"
              >
                <Layers className="size-3.5" />
                ویژگی‌ها
              </Badge>
              <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
                همه چیز برای ساخت رابط کاربری حرفه‌ای
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-trunks">
                کامپوننت‌هایی که با دقت طراحی شده‌اند تا بهترین تجربه کاربری و
                توسعه‌دهندگی را برای کاربران و توسعه‌دهندگان فارسی‌زبان فراهم
                کنند
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className={`opacity-0-init group relative overflow-hidden rounded-xl border border-beerus bg-card p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:border-piccolo/40 hover:shadow-lg hover:shadow-piccolo/10 ${
                      mounted
                        ? `animate-fade-in-up delay-${(index + 1) * 100}`
                        : ""
                    }`}
                  >
                    <div className="absolute -end-8 -top-8 h-24 w-24 rounded-full bg-piccolo/5 transition-transform duration-500 group-hover:scale-150 sm:h-32 sm:w-32" />
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-piccolo/20 to-hit/20 text-piccolo transition-all group-hover:scale-110 sm:h-14 sm:w-14">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-trunks">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Project Showcase - Premium Design */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <Badge
                variant="outline"
                className="mb-4 border-piccolo/30 bg-piccolo/5 text-piccolo font-semibold inline-flex items-center gap-2"
              >
                <Sparkles className="size-3.5" />
                پروژه‌های برتر
              </Badge>
              <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight mb-6">
                ساخته شده با فارسی یو آی
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-trunks">
                پروژه‌های واقعی که با قوت و استحکام فارسی ساخته شده‌اند
              </p>
            </div>

            {/* Featured Project Card - Premium Design */}
            <div className="relative group mb-20">
              {/* Gradient Background */}
              <div className="absolute -inset-1 bg-linear-to-r from-piccolo/20 via-hit/10 to-piccolo/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl border border-piccolo/30 bg-card backdrop-blur-xl">
                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-piccolo via-hit to-piccolo" />

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Side - Text Content */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    {/* Category & Badge */}
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-3">
                        <Badge
                          variant="secondary"
                          className="font-semibold text-piccolo/80"
                        >
                          {featuredProject.categoryEn}
                        </Badge>
                        <span className="text-xs text-trunks/60">
                          پروژه برتر
                        </span>
                      </div>

                      {/* Project Title */}
                      <div>
                        <h3 className="text-4xl font-bold mb-2">
                          {featuredProject.name}
                        </h3>
                        <p className="text-trunks text-base">
                          {featuredProject.nameEn}
                        </p>
                      </div>

                      {/* Short Description */}
                      <p className="text-sm text-trunks leading-relaxed bg-beerus/30 rounded-lg p-4 border border-beerus/20">
                        {featuredProject.descriptionShort}
                      </p>
                    </div>

                    {/* Full Description */}
                    <p className="text-base leading-relaxed text-trunks/90 lg:max-w-sm">
                      {featuredProject.description}
                    </p>
                    <Separator className="my-6 border-beerus/30" />

                    {/* Highlights */}
                    <div className="space-y-3">
                      {featuredProject.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-piccolo/20 flex items-center justify-center">
                            <Check className="size-3 text-piccolo" />
                          </div>
                          <p className="text-sm text-trunks">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className="w-full mt-8 h-11 text-base font-semibold group/btn"
                    >
                      <a
                        href={featuredProject.url}
                        target="_blank"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>بازدید از پروژه</span>
                        <ExternalLink
                          className="size-4 transition-transform group-hover/btn:translate-x-1"
                          style={{
                            transform: isRTL ? "scaleX(-1)" : "scaleX(1)",
                          }}
                        />
                      </a>
                    </Button>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative h-64 lg:h-auto min-h-96 overflow-hidden bg-linear-to-bl from-piccolo/10 to-hit/10">
                    {/* Decorative circles */}
                    <div className="absolute -top-20 -end-20 w-64 h-64 rounded-full bg-piccolo/5 blur-3xl" />
                    <div className="absolute -bottom-10 -start-10 w-80 h-80 rounded-full bg-hit/5 blur-3xl" />

                    {/* Image Placeholder with overlay */}
                    <div className="relative w-full h-full flex items-center justify-center group/img">
                      <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent z-10" />
                      <div className="text-6xl opacity-20 group-hover/img:opacity-30 transition-opacity">
                        {featuredProject.logo}
                      </div>
                      <Image
                        fill
                        src={featuredProject.image}
                        alt={featuredProject.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Call to Action */}
            <div className="text-center space-y-6">
              <p className="text-lg text-trunks font-medium">
                پروژه شما نیز می‌تواند اینجا نمایش داده شود
              </p>
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center gap-2"
              >
                <Link
                  href="https://github.com/orgs/einlab/discussions/new?category=general&title=%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D8%B3%D8%AA%20%D9%86%D9%85%D8%A7%DB%8C%D8%B4%20%D9%BE%D8%B1%D9%88%DA%98%D9%87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>درخواست نمایش پروژه</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-beerus bg-card py-8 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:gap-12 mb-8">
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-trunks">
                  <span>ساخته شده با</span>
                  <span className="text-lg text-chichi animate-pulse">♥</span>
                  <span>توسط</span>
                  <Link
                    href="https://eindev.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-piccolo hover:text-hit transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                  >
                    Ein
                  </Link>
                  <span>برای توسعه‌دهندگان ایرانی</span>
                </div>
              </div>
            </div>

            <div className="border-t border-beerus/50 pt-6">
              <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-between">
                <div className="text-xs text-trunks/70 sm:text-sm">
                  © 2026 فارسی یو آی. تمام حقوق محفوظ است.
                </div>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 text-xs text-trunks sm:text-sm">
                  <div className="flex items-center gap-6">
                    <Link
                      href="/docs"
                      className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                    >
                      مستندات
                    </Link>
                    <Link
                      href="/docs/components"
                      className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                    >
                      کامپوننت‌ها
                    </Link>
                    <Link
                      href="/docs/blocks"
                      className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                    >
                      بلاک‌ها
                    </Link>
                  </div>
                  <div className="flex items-center gap-6">
                    <Link
                      href="https://github.com/ehsanghaffar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                      aria-label="GitHub - Ehsan Ghaffar"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://linkedin.com/in/ehsanghaffar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                      aria-label="LinkedIn - Ehsan Ghaffar"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href="https://www.eindev.ir/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
                      aria-label="Ein Dev Portfolio"
                    >
                      Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
