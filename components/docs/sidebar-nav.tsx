"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronDown, Search } from "lucide-react"
import { allComponents, componentCategories } from "@/lib/components-data"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"

interface NavItem {
  title: string
  href: string
  items?: NavItem[]
}

const docsNav: NavItem[] = [
  {
    title: "شروع کار",
    href: "/docs",
    items: [
      { title: "معرفی", href: "/docs" },
      { title: "نصب", href: "/docs/installation" },
    ],
  },
]

const componentNavByCategory = Object.entries(componentCategories).map(([key, label]) => ({
  category: key,
  label,
  items: allComponents
    .filter((c) => c.category === key)
    .map((c) => ({
      title: c.name,
      titleEn: c.nameEn,
      href: `/docs/components/${c.slug}`,
    })),
}))

export function DocsSidebarNav() {
  const pathname = usePathname()
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "inputs",
    "display",
    "feedback",
    "navigation",
    "layout",
    "overlay",
  ])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return componentNavByCategory

    return componentNavByCategory
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) => item.title.includes(searchQuery) || item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      }))
      .filter((cat) => cat.items.length > 0)
  }, [searchQuery])

  return (
    <nav className="w-full space-y-6" aria-label="منوی راهبری کناری">
      {/* Getting Started Section */}
      {docsNav.map((section) => (
        <div key={section.href} className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">{section.title}</h4>
          {section.items?.length && (
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.title}</span>
                    {isActive && <ChevronLeft className="h-4 w-4" aria-hidden="true" />}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      ))}

      {/* Components Section */}
      <div className="space-y-3">
        <Link
          href="/docs/components"
          className={cn(
            "block text-sm font-semibold transition-colors",
            pathname === "/docs/components" ? "text-primary" : "text-foreground hover:text-primary",
          )}
        >
          کامپوننت‌ها ({allComponents.length})
        </Link>

        <div className="relative">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="جستجوی کامپوننت..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ps-9 h-9 text-sm"
          />
        </div>

        <div className="space-y-3">
          {filteredCategories.map((cat) => (
            <div key={cat.category}>
              <button
                onClick={() => toggleCategory(cat.category)}
                className="flex w-full items-center justify-between py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>
                  {cat.label} ({cat.items.length})
                </span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    expandedCategories.includes(cat.category) ? "rotate-180" : "",
                  )}
                />
              </button>

              {expandedCategories.includes(cat.category) && (
                <div className="mt-1 space-y-0.5 border-e border-border pe-3 me-1">
                  {cat.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground/60">{item.titleEn}</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
