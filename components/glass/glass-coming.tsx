"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  CircleDot,
  Code2,
  Eye,
  Layers3,
  LockKeyhole,
  Palette,
  Sparkles,
  Sun,
  Moon,
  WandSparkles,
  Undo2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { GlassBadge } from "@/components/glass/glass-badge";
import { GlassButton } from "@/components/glass/glass-button";
import { GlassCard } from "@/components/glass/glass-card";
import { GlassInput } from "@/components/glass/glass-input";
import { GlassSwitch } from "@/components/glass/glass-switch";
import { Button } from "../ui/button";

type Props = {
  className?: string;
};

export function GlassComponentsComingSoon({ className }: Props) {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <main
      dir="rtl"
      className={cn(
        "relative isolate min-h-screen overflow-hidden bg-background",
        className,
      )}
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-36 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-piccolo/15 blur-3xl" />
        <div className="absolute top-112 -start-24 h-80 w-80 rounded-full bg-hit/10 blur-3xl" />
        <div className="absolute top-208 -end-24 h-96 w-96 rounded-full bg-frieza/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--piccolo)/0.08),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.025)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.025)_1px,transparent_1px)] bg-size-[36px_36px] mask-[linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>
      <div className="fixed top-8 start-8 z-10">
        <Button variant="secondary" className="" asChild>
          <Link href="/" className="flex items-center gap-1">
            <Undo2 className="size-4" />
            <span className="text-sm font-semibold text-piccolo">بازگشت به سایت اصلی</span>
          </Link>
        </Button>
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-piccolo/20 bg-piccolo/8 px-3 py-1.5 text-xs font-semibold text-piccolo backdrop-blur-xl">
              <Sparkles className="size-3.5" />
              <span>ویژگی جدید در راه است</span>
              <span className="size-1 rounded-full bg-current opacity-60" />
              <span>Coming Soon</span>
            </div>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            کامپوننت‌های
            <span className="mx-2 bg-linear-to-l from-piccolo via-hit to-frieza bg-clip-text text-transparent">
              Glass
            </span>
            فارسی یو آی
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-trunks sm:text-lg">
            یک سیستم متریال شیشه‌ای برای رابط‌های مدرن؛ با پشتیبانی کامل از RTL،
            تم روشن و تاریک، tint، تعامل، شفافیت و رفتار سازگار با دسترسی‌پذیری.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GlassBadge variant="primary">
              <Sparkles className="size-3.5" />
              در حال توسعه
            </GlassBadge>
            <GlassBadge variant="success">
              <Layers3 className="size-3.5" />
              Material System
            </GlassBadge>
            <GlassBadge variant="success">
              <Check className="size-3.5" />
              RTL First
            </GlassBadge>
          </div>
        </div>

        {/* Hero specimen */}
        <div className="mx-auto mt-14 max-w-6xl">
          <GlassCard className="overflow-hidden p-0">
            <div className="relative min-h-96 overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 sm:p-8">
              <div className="pointer-events-none absolute -top-12 start-1/4 size-56 rounded-full bg-cyan-400/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 end-1/4 size-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white/0.16,transparent_30%),radial-gradient(circle_at_75%_70%,white/0.10,transparent_28%)]" />

              <div className="relative grid min-h-80 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="max-w-xl">
                  <div className="mb-4 flex items-center gap-2 text-white/60">
                    <Eye className="size-4" />
                    <span className="text-xs font-medium">
                      پیش‌نمایش Material System
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white sm:text-4xl">
                    شیشه‌ای که بخشی از طراحی است، نه یک افکت تصادفی.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                    سطوح، tint، border، highlight و interaction از یک سیستم
                    مشترک می‌آیند؛ بنابراین همه‌ی کامپوننت‌ها زبان بصری یکسانی
                    دارند.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <GlassButton
                      variant="primary"
                      className="shadow-[0_12px_36px_hsl(var(--piccolo)/0.28)]"
                    >
                      <WandSparkles className="size-4" />
                      شروع تجربه
                    </GlassButton>
                    <GlassButton variant="outline">
                      <Code2 className="size-4" />
                      کد کامپوننت
                    </GlassButton>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-sm">
                  <div className="absolute -inset-5 rounded-4xl bg-white/8 blur-2xl" />
                  <div className="relative rounded-[1.75rem] border border-white/20 bg-white/10 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/50">متریال</p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          Glass Regular
                        </p>
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 p-2 text-white/70">
                        <CircleDot className="size-4" />
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-2xl border border-white/15 bg-white/6 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white">
                            Interactive
                          </span>
                          <GlassSwitch
                            checked={enabled}
                            onCheckedChange={setEnabled}
                          />
                        </div>
                        <p className="mt-2 text-xs leading-6 text-white/45">
                          {enabled ? "تعامل روشن است" : "تعامل خاموش است"}
                        </p>
                      </div>

                      <GlassInput
                        className="border-white/15 bg-white/7 text-white placeholder:text-white/35"
                        placeholder="یک ورودی شیشه‌ای..."
                      />

                      <div className="flex flex-wrap gap-2">
                        <GlassBadge variant="success">فعال</GlassBadge>
                        <GlassBadge variant="info">شفاف</GlassBadge>
                        <GlassBadge variant="warning">پویا</GlassBadge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Components wall */}
        <section className="mx-auto mt-24 max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-semibold text-hit">Preview</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              این فقط شروع ماجراست
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-trunks">
              کارت، ورودی، Badge و کنترل‌های تعاملی در یک زبان بصری مشترک.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <GlassCard className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-trunks">Glass Card</p>
                  <h3 className="mt-1 text-lg font-semibold">پنل شیشه‌ای</h3>
                </div>
                <GlassBadge variant="primary">جدید</GlassBadge>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/5 p-4 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-trunks">وضعیت</p>
                    <p className="mt-1 font-semibold">فعال</p>
                  </div>
                  <div className="size-10 rounded-full bg-hit/15 p-2.5 text-hit">
                    <CircleDot className="size-full" />
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Palette className="size-4 text-piccolo" />
                <span className="text-sm font-semibold">Glass Input</span>
              </div>
              <div className="space-y-3">
                <GlassInput placeholder="جستجو..." />
                <GlassInput placeholder="ایمیل شما" type="email" />
                <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background/30 px-4 py-3">
                  <span className="text-sm">اعلان‌ها</span>
                  <GlassSwitch checked={enabled} onCheckedChange={setEnabled} />
                </div>
              </div>
            </GlassCard>

            <GlassCard className="relative overflow-hidden p-6">
              <div className="absolute -top-16 -end-16 size-40 rounded-full bg-frieza/15 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <LockKeyhole className="size-4 text-frieza" />
                  <span className="text-sm font-semibold">
                    امن و دسترسی‌پذیر
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-trunks">
                  Focus، reduced motion، کنتراست و رفتار تعاملی از ابتدا بخشی از
                  طراحی هستند.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <GlassBadge variant="success">WCAG</GlassBadge>
                  <GlassBadge variant="info">RTL</GlassBadge>
                  <GlassBadge variant="neutral">Dark</GlassBadge>
                  <GlassBadge variant="destructive">Light</GlassBadge>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Light / dark visual comparison */}
        <section className="mx-auto mt-24 max-w-6xl">
          <GlassCard className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-80 overflow-hidden bg-slate-100 p-6 sm:p-10">
                <div className="absolute -top-16 start-1/4 size-48 rounded-full bg-sky-300/40 blur-3xl" />
                <div className="absolute bottom-0 -end-8 size-56 rounded-full bg-violet-300/40 blur-3xl" />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-2 text-slate-700">
                    <Sun className="size-4" />
                    <span className="text-sm font-semibold">حالت روشن</span>
                  </div>
                  <div className="rounded-3xl border border-slate-900/10 bg-white/35 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Glass Material</p>
                        <p className="mt-1 font-semibold text-slate-900">
                          شفاف، روشن، زنده
                        </p>
                      </div>
                      <GlassBadge variant="info">روشن</GlassBadge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative min-h-80 overflow-hidden bg-slate-950 p-6 sm:p-10">
                <div className="absolute -top-16 start-1/4 size-48 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute bottom-0 -end-8 size-56 rounded-full bg-fuchsia-400/15 blur-3xl" />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-2 text-white/70">
                    <Moon className="size-4" />
                    <span className="text-sm font-semibold">حالت تاریک</span>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/7 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.30)] backdrop-blur-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/40">Glass Material</p>
                        <p className="mt-1 font-semibold text-white">
                          عمیق، نرم، لایه‌لایه
                        </p>
                      </div>
                      <GlassBadge variant="primary">تاریک</GlassBadge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto mt-24 max-w-4xl pb-8 text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-trunks backdrop-blur-xl">
            <WandSparkles className="size-3.5 text-piccolo" />
            فصل بعدی فارسی یو آی
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Glass Components
            <span className="block bg-linear-to-l from-piccolo via-hit to-frieza bg-clip-text text-transparent">
              به‌زودی در فارسی یو آی
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-trunks sm:text-base">
            داریم روی یک مجموعه‌ی کامل از کامپوننت‌های شیشه‌ای و یک Material
            System مشترک کار می‌کنیم؛ برای رابط‌هایی که هم زیبا باشند، هم قابل
            استفاده، هم فارسی.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GlassButton variant="primary" asChild>
              <Link href="/docs">
                بازگشت به مستندات
                <ArrowLeft className="size-4" />
              </Link>
            </GlassButton>
            <GlassButton variant="outline" asChild>
              <a
                href="https://github.com/farsi-ui/ui"
                target="_blank"
                rel="noreferrer"
              >
                دنبال کردن پروژه
                <ArrowUpLeft className="size-4" />
              </a>
            </GlassButton>
          </div>
        </section>
      </section>
    </main>
  );
}
