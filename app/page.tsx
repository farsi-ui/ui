"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Github,
  Sparkles,
  Zap,
  Palette,
  Moon,
  Code2,
  Layers,
  Copy,
  Check,
  Terminal,
  Component,
  Accessibility,
  Languages,
  Menu,
  X,
  MousePointerClick,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FarsiUILogo } from "@/components/app-logo";

function CodeBlock({ code, filename }: { code: string; filename: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (code: string) => {
    return code
      .replace(
        /(import|export|from|const|function|return|default|async|await)/g,
        '<span class="token-keyword">$1</span>'
      )
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="token-string">$1</span>')
      .replace(/(\w+)(?=\s*\()/g, '<span class="token-function">$1</span>')
      .replace(/(\d+)/g, '<span class="token-number">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="token-comment">$1</span>')
      .replace(/(&lt;\/?[\w-]+|\/&gt;|&gt;)/g, '<span class="token-tag">$1</span>');
  };

  return (
    <div className="code-block group rounded-lg border border-beerus overflow-hidden transition-all hover:border-piccolo/20 hover:shadow-lg">
      <div className="code-block-header bg-muted/50 border-b border-beerus/50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-chichi/60 sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-krillin/60 sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-roshi/60 sm:h-3 sm:w-3" />
          </div>
          <span className="ms-2 font-mono text-xs text-trunks font-medium">{filename}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          onClick={copyCode}
          aria-label={copied ? "کپی شد" : "کپی کن"}
        >
          {copied ? <Check className="h-4 w-4 text-roshi" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 bg-background" dir="ltr">
        <code
          className="font-mono text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  );
}

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}+</span>;
}

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

const stats = [
  { label: "کامپوننت", value: 31 },
  { label: "مثال کد", value: 60 },
  { label: "توسعه‌دهنده", value: 500 },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const installCode = `npx shadcn@latest add https://farsiui.dev/r/button.json`;
  const usageCode = `import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="primary">
      شروع کنید
    </Button>
  )
}`;

  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-beerus/50 bg-background/80 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-bold tracking-tight transition-all hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1 sm:text-lg"
            aria-label="Farsi UI - صفحه اصلی"
          >
            <div className="flex items-center justify-center">
              <MousePointerClick />
            </div>
            <span className="hidden sm:inline">Farsi UI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="منوی اصلی">
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
              href="https://github.com/ehsanghaffar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-trunks transition-colors hover:bg-hover-bg hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="GitHub - Ehsan Ghaffar"
            >
              <Github className="h-5 w-5" />
            </Link>
            <div className="me-1 ms-2 h-5 w-px bg-beerus" />
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10" aria-label="بازکردن منو">
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-6">
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
                    href="https://github.com/ehsanghaffar"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Github className="h-4 w-4" />
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

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-32">
          <div className="text-center">
            <div className={`opacity-0-init ${mounted ? "animate-fade-in-down" : ""}`}>
              <Badge
                variant="secondary"
                className="mb-6 border border-piccolo/20 bg-piccolo/10 px-4 py-2 text-xs font-semibold text-piccolo transition-all hover:border-piccolo/40 hover:bg-piccolo/15"
              >
                <Sparkles className="me-1.5 inline h-3.5 w-3.5" />
                نسخه 0.0.1 منتشر شد!
              </Badge>
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
              className={`opacity-0-init mx-auto mt-6 max-w-3xl text-balance text-lg leading-relaxed text-trunks sm:mt-8 ${
                mounted ? "animate-fade-in-up delay-200" : ""
              }`}
            >
              مجموعه‌ای جامع و حرفه‌ای از کامپوننت‌های React با پشتیبانی کامل RTL، مخصوص
              توسعه‌دهندگان ایرانی که می‌خواهند رابط کاربری زیبا و قابل دسترس بسازند
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
                  شروع کنید
                  <ArrowLeft className="ms-2 h-5 w-5 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="h-12 w-full border-beerus bg-background px-8 text-base font-semibold transition-all hover:bg-hover-bg hover:border-piccolo/30 focus-visible:ring-offset-2 sm:w-auto"
              >
                <Link href="/docs/components">
                  <Component className="ms-2 h-5 w-5" />
                  مشاهده کامپوننت‌ها
                </Link>
              </Button>
            </div>

            {/* Install command with better styling */}
            <div
              className={`opacity-0-init mt-8 inline-flex items-center gap-3 rounded-full border border-beerus bg-card px-5 py-2.5 transition-all hover:border-piccolo/20 hover:shadow-md sm:mt-10 ${
                mounted ? "animate-fade-in-up delay-400" : ""
              }`}
            >
              <Terminal className="h-4 w-4 shrink-0 text-piccolo" />
              <code className="font-mono text-sm text-trunks" dir="ltr">
                npm install @farsiui/react
              </code>
              <Check className="h-4 w-4 shrink-0 text-roshi" />
            </div>
          </div>

          {/* Stats - Improved mobile spacing */}
          <div
            className={`opacity-0-init mt-16 flex items-center justify-center gap-8 sm:mt-20 sm:gap-16 lg:gap-20 ${
              mounted ? "animate-fade-in-up delay-500" : ""
            }`}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                  {mounted ? (
                    <AnimatedCounter end={stat.value} duration={1500 + i * 200} />
                  ) : (
                    `${stat.value}+`
                  )}
                </div>
                <div className="mt-2 text-sm font-medium text-trunks sm:mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview Section - Improved mobile layout */}
      <section className="border-y border-beerus bg-linear-to-b from-hales/50 to-hales/20 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <Badge
                variant="outline"
                className="mb-4 w-fit border-hit/30 bg-hit/5 text-hit font-semibold transition-all hover:bg-hit/10"
              >
                <Code2 className="me-2 h-3.5 w-3.5" />
                نصب آسان
              </Badge>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
                شروع سریع در چند ثانیه
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-trunks sm:mt-6">
                با یک دستور ساده، کامپوننت‌های مورد نیاز خود را به پروژه اضافه کنید. تمام
                کامپوننت‌ها کاملاً از TypeScript و Tailwind CSS پشتیبانی می‌کنند.
              </p>
              <div className="mt-8 space-y-4 sm:mt-10">
                {[
                  "پشتیبانی کامل از TypeScript",
                  "سازگار با Next.js و React",
                  "استایل‌دهی آسان با Tailwind CSS",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-roshi/15 text-roshi">
                      <Check className="h-4 w-4 font-bold" />
                    </div>
                    <span className="text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <CodeBlock code={installCode} filename="terminal" />
              <CodeBlock code={usageCode} filename="app.tsx" />
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
              <Layers className="h-3.5 w-3.5" />
              ویژگی‌ها
            </Badge>
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
              همه چیز برای ساخت رابط کاربری حرفه‌ای
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-trunks">
              کامپوننت‌هایی که با دقت طراحی شده‌اند تا بهترین تجربه کاربری و توسعه‌دهندگی را برای
              کاربران و توسعه‌دهندگان فارسی‌زبان فراهم کنند
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className={`opacity-0-init group relative overflow-hidden rounded-xl border border-beerus bg-card p-6 sm:p-7 lg:p-8 transition-all duration-300 hover:border-piccolo/40 hover:shadow-lg hover:shadow-piccolo/10 ${
                    mounted ? `animate-fade-in-up delay-${(index + 1) * 100}` : ""
                  }`}
                >
                  <div className="absolute -end-8 -top-8 h-24 w-24 rounded-full bg-piccolo/5 transition-transform duration-500 group-hover:scale-150 sm:h-32 sm:w-32" />
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-piccolo/20 to-hit/20 text-piccolo transition-all group-hover:scale-110 sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold sm:text-xl">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-trunks">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-beerus bg-linear-to-b from-hales/40 via-hales/20 to-background py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
            آماده شروع هستید؟
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-trunks">
            همین حالا از کامپوننت‌های Farsi UI در پروژه خود استفاده کنید و تجربه‌ای بی‌نظیر برای
            کاربران فارسی‌زبان بسازید
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-piccolo px-8 text-base font-semibold text-white shadow-lg shadow-piccolo/25 transition-all hover:bg-piccolo/90 hover:shadow-xl hover:shadow-piccolo/35 focus-visible:ring-offset-2 sm:w-auto"
            >
              <Link href="/docs">
                مشاهده مستندات
                <ArrowLeft className="ms-2 h-5 w-5 rtl:rotate-180" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="h-12 w-full border-beerus bg-background px-8 text-base font-semibold transition-all hover:bg-hover-bg hover:border-piccolo/30 focus-visible:ring-offset-2 sm:w-auto"
            >
              <Link
                href="https://github.com/ehsanghaffar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="ms-2 h-5 w-5" />
                مشاهده در GitHub
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
                  href="https://ehsanghaffarii.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-piccolo hover:text-hit transition-colors focus-visible:ring-2 focus-visible:ring-ring rounded px-1"
                >
                  Ein Ghaffar
                </Link>
                <span>برای توسعه‌دهندگان ایرانی</span>
              </div>
            </div>
          </div>

          <div className="border-t border-beerus/50 pt-6">
            <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-between">
              <div className="text-xs text-trunks/70 sm:text-sm">
                © 2026 Farsi UI. تمام حقوق محفوظ است.
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
  );
}
