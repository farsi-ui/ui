import type React from "react";
import type { Metadata } from "next";
import { DocsHeader } from "@/components/docs/docs-header";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { MobileNav } from "@/components/docs/mobile-nav";

export const metadata: Metadata = {
  title: {
    default: "مستندات",
    template: "%s | مستندات فارسی یو آی",
  },
  description: "مستندات کامل فارسی یو آی - راهنمای نصب، تنظیمات و استفاده از کامپوننت‌ها و بلاک‌های React با پشتیبانی RTL",
  openGraph: {
    title: "مستندات فارسی یو آی",
    description: "راهنمای کامل استفاده از کامپوننت‌های فارسی یو آی",
    type: "website",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <DocsSidebar>
        <DocsHeader />
        <main className="flex-1 overflow-auto" role="main" aria-label="محتوای اصلی">
          <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="animate-fade-in">{children}</div>
          </div>
        </main>
      </DocsSidebar>

      {/* Mobile bottom navigation - shows on small screens */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
