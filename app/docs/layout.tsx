import type React from "react"
import { DocsHeader } from "@/components/docs/docs-header"
import { DocsSidebarNav } from "@/components/docs/sidebar-nav"
import { MobileNav } from "@/components/docs/mobile-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside
            className="hidden h-[calc(100vh-4rem)] shrink-0 overflow-y-auto border-s border-beerus py-8 ps-6 lg:sticky lg:top-16 lg:block"
            aria-label="منوی راهبری اصلی"
          >
            <DocsSidebarNav />
          </aside>

          <main className="min-w-0 pb-24 pt-6 md:pb-8 lg:py-10" role="main" aria-label="محتوای اصلی">
            <div className="animate-fade-in">{children}</div>
          </main>
        </div>
      </div>

      <MobileNav />
    </div>
  )
}
