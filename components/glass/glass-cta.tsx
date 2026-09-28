import Link from "next/link"
import { ArrowLeft, Layers3, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface GlassComponentsCTAProps {
  className?: string
}

function GlassComponentsCTA({ className }: GlassComponentsCTAProps) {
  return (
    <section
      aria-label="کامپوننت‌های Glass فارسی یو آی"
      className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8", className)}
    >
      <Link
        href="/glass-components"
        className="group relative block overflow-hidden rounded-2xl border border-piccolo/45 bg-card/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-piccolo/30 hover:shadow-xl hover:shadow-piccolo/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-piccolo/50 sm:p-6"
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -end-16 size-44 rounded-full bg-piccolo/10 blur-3xl transition-transform duration-500 group-hover:scale-125"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 start-1/3 size-40 rounded-full bg-hit/8 blur-3xl"
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="gap-1.5 border-piccolo/20 bg-piccolo/5 text-piccolo"
              >
                <Sparkles className="size-3.5" />
                به‌زودی
              </Badge>

              <span className="text-xs text-muted-foreground">
                Glass Components
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 hidden size-9 shrink-0 items-center justify-center rounded-xl border border-piccolo/15 bg-piccolo/8 text-piccolo sm:flex">
                <Layers3 className="size-4.5" />
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                  کامپوننت‌های Glass در راه‌اند
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
                  یک سیستم متریال شیشه‌ای برای رابط‌های مدرن، با پشتیبانی کامل از
                  RTL و تم روشن و تاریک.
                </p>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 sm:ps-4">
            <span className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-piccolo px-4 text-sm font-medium text-white shadow-md shadow-piccolo/20 transition-all duration-300 group-hover:bg-piccolo/90 group-hover:shadow-lg group-hover:shadow-piccolo/25">
              دیدن پیش‌نمایش
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default GlassComponentsCTA
