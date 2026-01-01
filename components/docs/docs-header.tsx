"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Github, Sparkles, Menu, X, ChevronLeft, Search, Home, BookOpen, Component, Layers, MousePointerClick } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { allComponents, componentCategories } from "@/lib/components-data"

export function DocsHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredComponents = allComponents.filter(
    (comp) =>
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.nameEn.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const navItems = [
    { href: "/docs", label: "مستندات", icon: BookOpen },
    { href: "/docs/components", label: "کامپوننت‌ها", icon: Component },
  ]

  const categoryEntries = Object.entries(componentCategories) as [keyof typeof componentCategories, string][]

  return (
    <header className="sticky top-0 z-50 border-b border-beerus bg-goku/80 backdrop-blur-xl dark:bg-goku/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-bold tracking-tight transition-colors hover:text-piccolo sm:text-lg"
          aria-label="بازگشت به صفحه اصلی"
        >
          <div className="flex h-7 w-7">
            <MousePointerClick />
          </div>
          <span className="hidden xs:inline">Farsi UI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="me-auto ms-8 hidden items-center gap-1 md:flex" aria-label="منوی اصلی">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href || (item.href !== "/docs" && pathname.startsWith(item.href))
                  ? "bg-hales text-foreground"
                  : "text-trunks hover:bg-hover-bg hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" asChild className="h-9 w-9">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="مخزن گیت‌هاب">
              <Github className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label={mobileMenuOpen ? "بستن منو" : "باز کردن منو"}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm overflow-y-auto p-0">
              <SheetHeader className="border-b border-beerus p-4">
                <SheetTitle className="flex items-center gap-2 text-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-piccolo to-hit">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span>Farsi UI</span>
                </SheetTitle>
              </SheetHeader>

              <div className="p-4">
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-trunks" />
                  <Input
                    type="search"
                    placeholder="جستجوی کامپوننت..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 ps-10 text-sm"
                  />
                </div>

                {/* Main Navigation */}
                <nav className="mb-6 space-y-1" aria-label="منوی اصلی موبایل">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      pathname === "/"
                        ? "bg-piccolo/10 text-piccolo"
                        : "text-trunks hover:bg-hover-bg hover:text-foreground",
                    )}
                  >
                    <Home className="h-4 w-4" />
                    خانه
                  </Link>
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          pathname === item.href || (item.href !== "/docs" && pathname.startsWith(item.href))
                            ? "bg-piccolo/10 text-piccolo"
                            : "text-trunks hover:bg-hover-bg hover:text-foreground",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>

                {/* Components List */}
                <div className="border-t border-beerus pt-4">
                  <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-trunks">
                    <Layers className="h-3.5 w-3.5" />
                    کامپوننت‌ها
                    <span className="rounded-full bg-piccolo/10 px-1.5 py-0.5 text-[10px] text-piccolo">
                      {filteredComponents.length}
                    </span>
                  </h3>

                  {searchQuery ? (
                    // Show filtered results
                    <div className="max-h-[50vh] space-y-1 overflow-y-auto">
                      {filteredComponents.length > 0 ? (
                        filteredComponents.map((comp) => (
                          <Link
                            key={comp.slug}
                            href={`/docs/components/${comp.slug}`}
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setSearchQuery("")
                            }}
                            className={cn(
                              "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                              pathname === `/docs/components/${comp.slug}`
                                ? "bg-piccolo/10 text-piccolo"
                                : "text-trunks hover:bg-hover-bg hover:text-foreground",
                            )}
                          >
                            <span>{comp.name}</span>
                            <span className="text-xs text-trunks/60">{comp.nameEn}</span>
                          </Link>
                        ))
                      ) : (
                        <p className="px-3 py-4 text-center text-sm text-trunks">کامپوننتی یافت نشد</p>
                      )}
                    </div>
                  ) : (
                    <div className="max-h-[50vh] space-y-4 overflow-y-auto">
                      {categoryEntries.map(([categoryId, categoryName]) => {
                        const categoryComponents = allComponents.filter((c) => c.category === categoryId)
                        if (categoryComponents.length === 0) return null
                        return (
                          <div key={categoryId}>
                            <h4 className="mb-2 px-3 text-xs font-medium text-trunks/70">{categoryName}</h4>
                            <div className="space-y-0.5">
                              {categoryComponents.slice(0, 5).map((comp) => (
                                <Link
                                  key={comp.slug}
                                  href={`/docs/components/${comp.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={cn(
                                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                                    pathname === `/docs/components/${comp.slug}`
                                      ? "bg-piccolo/10 text-piccolo"
                                      : "text-trunks hover:bg-hover-bg hover:text-foreground",
                                  )}
                                >
                                  <span>{comp.name}</span>
                                  <ChevronLeft className="h-3.5 w-3.5 text-trunks/40 rtl:rotate-180" />
                                </Link>
                              ))}
                              {categoryComponents.length > 5 && (
                                <Link
                                  href="/docs/components"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-3 py-1.5 text-xs text-piccolo hover:underline"
                                >
                                  +{categoryComponents.length - 5} کامپوننت دیگر
                                </Link>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* GitHub Link */}
                <div className="mt-6 border-t border-beerus pt-4">
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-trunks transition-colors hover:bg-hover-bg hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    مشاهده در GitHub
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
