import { GlassComponentsComingSoon } from "@/components/glass/glass-coming";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir";

export const metadata: Metadata = {
  title: "Glass Components — به‌زودی",
  description:
    "کامپوننت‌های شیشه‌ای فارسی یو آی به‌زودی اضافه می‌شوند؛ یک Material System مدرن با پشتیبانی کامل از RTL، تم روشن و تاریک و تعامل.",
  alternates: {
    canonical: `${siteUrl}/glass-components`,
  },
  openGraph: {
    title: "Glass Components | فارسی یو آی",
    description:
      "پیش‌نمایش کامپوننت‌های Glass فارسی یو آی و Material System جدید آن.",
    url: `${siteUrl}/glass-components`,
    siteName: "فارسی یو آی",
    locale: "fa_IR",
    type: "website",
  },
};

export default function GlassComponentsPage() {
  return <GlassComponentsComingSoon />;
}
