"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function CodeBlock({ code, filename }: { code: string; filename: string }) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightCode = (code: string) => {
    return code
      .replace(
        /(import|export|from|const|function|return|default|async|await)/g,
        '<span class="token-keyword">$1</span>',
      )
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="token-string">$1</span>')
      .replace(/(\w+)(?=\s*\()/g, '<span class="token-function">$1</span>')
      .replace(/(\d+)/g, '<span class="token-number">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="token-comment">$1</span>')
      .replace(/(&lt;\/?[\w-]+|\/&gt;|&gt;)/g, '<span class="token-tag">$1</span>')
  }

  return (
    <div className="code-block group">
      <div className="code-block-header">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-chichi/60 sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-krillin/60 sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-roshi/60 sm:h-3 sm:w-3" />
          </div>
          <span className="ms-2 font-mono text-[10px] text-trunks sm:text-xs">{filename}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 sm:h-7 sm:w-7"
          onClick={copyCode}
        >
          {copied ? (
            <Check className="h-3 w-3 text-roshi sm:h-3.5 sm:w-3.5" />
          ) : (
            <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          )}
        </Button>
      </div>
      <pre className="overflow-x-auto p-3 sm:p-4" dir="ltr">
        <code
          className="font-mono text-[11px] leading-relaxed sm:text-[13px]"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  )
}

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}+</span>
}

const features = [
  {
    icon: Zap,
    title: "پشتیبانی کامل RTL",
    description: "تمام کامپوننت‌ها با چیدمان راست به چپ سازگار هستند",
  },
  {
    icon: Palette,
    title: "سیستم طراحی Moon",
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
]

const stats = [
  { label: "کامپوننت", value: 31 },
  { label: "مثال کد", value: 60 },
  { label: "توسعه‌دهنده", value: 500 },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const installCode = `npx shadcn@latest add https://farsiui.dev/r/button.json`
  const usageCode = `import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="primary">
      شروع کنید
    </Button>
  )
}`

  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-beerus/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-bold tracking-tight transition-all hover:opacity-80 sm:text-lg"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-piccolo to-hit sm:h-8 sm:w-8">
              <Sparkles className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
            </div>
            <span>Farsi UI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="منوی اصلی">
            <Link
              href="/docs"
              className="rounded-lg px-3 py-2 text-sm font-medium text-trunks transition-colors hover:bg-hover-bg hover:text-foreground"
            >
              مستندات
            </Link>
            <Link
              href="/docs/components"
              className="rounded-lg px-3 py-2 text-sm font-medium text-trunks transition-colors hover:bg-hover-bg hover:text-foreground"
            >
              کامپوننت‌ها
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-trunks transition-colors hover:bg-hover-bg hover:text-foreground"
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
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-6">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/docs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg"
                  >
                    مستندات
                  </Link>
                  <Link
                    href="/docs/components"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg"
                  >
                    کامپوننت‌ها
                  </Link>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-hover-bg"
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
        <div className="pointer-events-none absolute -top-40 start-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-piccolo/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="text-center">
            <div className={`opacity-0-init ${mounted ? "animate-fade-in-down" : ""}`}>
              <Badge
                variant="secondary"
                className="mb-4 border border-piccolo/20 bg-piccolo/10 px-3 py-1 text-[10px] font-medium text-piccolo sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs"
              >
                <Sparkles className="me-1 h-2.5 w-2.5 sm:me-1.5 sm:h-3 sm:w-3" />
                نسخه ۲.۵ - سیستم طراحی Moon
              </Badge>
            </div>

            <h1
              className={`opacity-0-init mx-auto max-w-4xl text-balance text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl ${mounted ? "animate-fade-in-up delay-100" : ""}`}
            >
              کتابخانه کامپوننت{" "}
              <span className="animate-gradient bg-linear-to-l from-piccolo via-hit to-frieza bg-clip-text text-transparent">
                React فارسی
              </span>
            </h1>

            <p
              className={`opacity-0-init mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-trunks sm:mt-6 sm:text-base lg:text-lg ${mounted ? "animate-fade-in-up delay-200" : ""}`}
            >
              مجموعه‌ای جامع از کامپوننت‌های React با پشتیبانی کامل RTL، طراحی شده بر اساس سیستم طراحی فارسی برای
              توسعه‌دهندگان ایرانی
            </p>

            {/* CTAs - Stack on mobile, row on tablet+ */}
            <div
              className={`opacity-0-init mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row ${mounted ? "animate-fade-in-up delay-300" : ""}`}
            >
              <Button
                asChild
                size="lg"
                className="group h-11 w-full bg-piccolo px-6 text-sm font-medium text-white shadow-lg shadow-piccolo/25 transition-all hover:bg-piccolo/90 hover:shadow-xl hover:shadow-piccolo/30 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
              >
                <Link href="/docs">
                  شروع کنید
                  <ArrowLeft className="me-2 h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="h-11 w-full border-beerus bg-transparent px-6 text-sm font-medium transition-all hover:bg-hover-bg sm:h-12 sm:w-auto sm:px-8 sm:text-base"
              >
                <Link href="/docs/components">
                  <Component className="ms-2 h-4 w-4" />
                  مشاهده کامپوننت‌ها
                </Link>
              </Button>
            </div>

            {/* Install command */}
            <div
              className={`opacity-0-init mt-6 inline-flex items-center gap-2 rounded-full border border-beerus bg-card px-3 py-1.5 sm:mt-8 sm:px-4 sm:py-2 ${mounted ? "animate-fade-in-up delay-400" : ""}`}
            >
              <Terminal className="h-3.5 w-3.5 text-trunks sm:h-4 sm:w-4" />
              <code className="font-mono text-xs text-trunks sm:text-sm" dir="ltr">
                npm install @farsiui/react
              </code>
            </div>
          </div>

          {/* Stats - Improved mobile spacing */}
          <div
            className={`opacity-0-init mt-12 flex items-center justify-center gap-6 sm:mt-16 sm:gap-12 lg:gap-16 ${mounted ? "animate-fade-in-up delay-500" : ""}`}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {mounted ? <AnimatedCounter end={stat.value} duration={1500 + i * 200} /> : `${stat.value}+`}
                </div>
                <div className="mt-0.5 text-xs text-trunks sm:mt-1 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview Section - Improved mobile layout */}
      <section className="border-y border-beerus bg-hales/30 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <Badge variant="outline" className="mb-3 w-fit border-hit/30 text-hit sm:mb-4">
                <Code2 className="me-1.5 h-3 w-3" />
                نصب آسان
              </Badge>
              <h2 className="text-balance text-xl font-bold sm:text-2xl lg:text-3xl">شروع سریع در چند ثانیه</h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-trunks sm:mt-4 sm:text-base">
                با یک دستور ساده، کامپوننت‌های مورد نیاز خود را به پروژه اضافه کنید. تمام کامپوننت‌ها با TypeScript و
                Tailwind CSS سازگار هستند.
              </p>
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {["پشتیبانی کامل از TypeScript", "سازگار با Next.js و React", "استایل‌دهی با Tailwind CSS"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-roshi/10 text-roshi sm:h-6 sm:w-6">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <CodeBlock code={installCode} filename="terminal" />
              <CodeBlock code={usageCode} filename="app.tsx" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-3 border-frieza/30 text-frieza sm:mb-4">
              <Layers className="me-1.5 h-3 w-3" />
              ویژگی‌ها
            </Badge>
            <h2 className="text-balance text-xl font-bold sm:text-2xl lg:text-3xl">
              همه چیز برای ساخت رابط کاربری حرفه‌ای
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm text-trunks sm:mt-4 sm:text-base">
              کامپوننت‌هایی که با دقت طراحی شده‌اند تا بهترین تجربه را برای توسعه‌دهندگان و کاربران فارسی‌زبان فراهم کنند
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <article
                  key={feature.title}
                  className={`opacity-0-init group relative overflow-hidden rounded-xl border border-beerus bg-card p-5 transition-all duration-300 hover:border-piccolo/30 hover:shadow-lg sm:rounded-2xl sm:p-6 ${mounted ? `animate-fade-in-up delay-${(index + 1) * 100}` : ""}`}
                >
                  <div className="absolute -end-8 -top-8 h-24 w-24 rounded-full bg-piccolo/5 transition-transform duration-500 group-hover:scale-150 sm:h-32 sm:w-32" />
                  <div className="relative">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-piccolo/10 text-piccolo sm:mb-4 sm:h-11 sm:w-11 sm:rounded-xl">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold sm:mb-2 sm:text-base">{feature.title}</h3>
                    <p className="text-xs leading-relaxed text-trunks sm:text-sm">{feature.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-beerus bg-linear-to-b from-hales/30 to-transparent py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-xl font-bold sm:text-2xl lg:text-3xl">آماده شروع هستید؟</h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-trunks sm:mt-4 sm:text-base">
            همین حالا از کامپوننت‌های Farsi UI در پروژه خود استفاده کنید و تجربه‌ای یکپارچه برای کاربران فارسی‌زبان بسازید
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 w-full bg-piccolo px-6 text-sm font-medium text-white shadow-lg shadow-piccolo/25 transition-all hover:bg-piccolo/90 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
            >
              <Link href="/docs">
                مشاهده مستندات
                <ArrowLeft className="me-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="h-11 w-full border-beerus bg-transparent px-6 text-sm font-medium sm:h-12 sm:w-auto sm:px-8 sm:text-base"
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="ms-2 h-4 w-4" />
                مشاهده در GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-beerus py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
            <div className="flex items-center gap-2 text-xs text-trunks sm:text-sm">
              <span>ساخته شده با</span>
              <span className="text-chichi">♥</span>
              <span>برای توسعه‌دهندگان ایرانی</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-trunks sm:gap-6 sm:text-sm">
              <Link href="/docs" className="transition-colors hover:text-foreground">
                مستندات
              </Link>
              <Link href="/docs/components" className="transition-colors hover:text-foreground">
                کامپوننت‌ها
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
