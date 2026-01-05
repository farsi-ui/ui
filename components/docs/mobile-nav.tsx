"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BookOpen, Component, Search, ChevronUp, MoonIcon, SunIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { allComponents, componentCategories } from "@/lib/components-data";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function MobileNav() {
  const pathname = usePathname();
  const [componentsOpen, setComponentsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();

  const filteredComponents = allComponents.filter(
    (comp) =>
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) || comp.name.includes(searchQuery)
  );

  const navItems = [
    { href: "/", label: "خانه", icon: Home },
    { href: "/docs", label: "مستندات", icon: BookOpen },
  ];

  const categoriesArray = Object.entries(componentCategories).map(([id, name]) => ({
    id,
    name,
  }));

  return (
    <nav
      className="fixed bottom-0 end-0 w-full z-50 transform border-t border-beerus bg-goku/95 backdrop-blur-xl md:hidden safe-area-pb"
      aria-label="منوی پیمایش موبایل"
    >
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
        {/* Home & Docs links */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-full flex-1 flex-col items-center justify-center gap-1 transition-colors",
                isActive ? "text-piccolo" : "text-trunks"
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* Components Sheet */}
        <Sheet open={componentsOpen} onOpenChange={setComponentsOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "flex h-full flex-1 flex-col items-center justify-center gap-1 transition-colors",
                pathname.startsWith("/docs/components") ? "text-piccolo" : "text-trunks"
              )}
              aria-label="باز کردن لیست کامپوننت‌ها"
            >
              <Component className="size-5" aria-hidden="true" />
              <span className="text-[10px] font-medium">کامپوننت‌ها</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl p-0">
            {/* Handle bar */}
            <div className="flex justify-center py-3">
              <div className="h-1.5 w-12 rounded-full bg-beerus" />
            </div>

            <SheetHeader className="border-b border-beerus px-4 pb-4">
              <SheetTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Component className="size-5 text-piccolo" />
                  کامپوننت‌ها
                  <span className="rounded-full bg-piccolo/10 px-2 py-0.5 text-xs text-piccolo">
                    {allComponents.length}
                  </span>
                </span>
                <button
                  onClick={() => setComponentsOpen(false)}
                  className="rounded-full p-2 text-trunks transition-colors hover:bg-hover-bg"
                  aria-label="بستن"
                >
                  <ChevronUp className="size-5 rotate-180" />
                </button>
              </SheetTitle>
            </SheetHeader>

            <div className="flex h-[calc(100%-5rem)] flex-col">
              {/* Search */}
              <div className="border-b border-beerus p-4">
                <div className="relative">
                  <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-trunks" />
                  <Input
                    type="search"
                    placeholder="جستجوی کامپوننت..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-11 ps-10 text-sm"
                  />
                </div>
              </div>

              {/* Components List */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {searchQuery ? (
                  // Filtered results
                  <div className="space-y-1">
                    {filteredComponents.length > 0 ? (
                      filteredComponents.map((comp) => (
                        <Link
                          key={comp.slug}
                          href={`/docs/components/${comp.slug}`}
                          onClick={() => {
                            setComponentsOpen(false);
                            setSearchQuery("");
                          }}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3 transition-colors",
                            pathname === `/docs/components/${comp.slug}`
                              ? "bg-piccolo/10 text-piccolo"
                              : "text-foreground hover:bg-hover-bg"
                          )}
                        >
                          <div>
                            <span className="font-medium">{comp.name}</span>
                            <span className="ms-2 text-xs text-trunks">
                              {comp.nameEn || comp.name}
                            </span>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="py-12 text-center">
                        <Search className="mx-auto mb-3 h-10 w-10 text-trunks/30" />
                        <p className="text-sm text-trunks">کامپوننتی یافت نشد</p>
                      </div>
                    )}
                  </div>
                ) : (
                  // Categorized list - Use categoriesArray instead of componentCategories.map
                  <div className="space-y-6">
                    {categoriesArray.map((category) => {
                      const categoryComponents = allComponents.filter(
                        (c) => c.category === category.id
                      );
                      if (categoryComponents.length === 0) return null;
                      return (
                        <div key={category.id}>
                          <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-trunks">
                            {category.name}
                            <span className="rounded bg-hales px-1.5 py-0.5 text-[10px]">
                              {categoryComponents.length}
                            </span>
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {categoryComponents.map((comp) => (
                              <Link
                                key={comp.slug}
                                href={`/docs/components/${comp.slug}`}
                                onClick={() => setComponentsOpen(false)}
                                className={cn(
                                  "rounded-xl border border-beerus px-3 py-3 text-center text-sm transition-all",
                                  pathname === `/docs/components/${comp.slug}`
                                    ? "border-piccolo/30 bg-piccolo/5 text-piccolo"
                                    : "bg-card hover:border-piccolo/20 hover:bg-piccolo/5"
                                )}
                              >
                                <span className="block font-medium">{comp.name}</span>
                                <span className="mt-0.5 block text-[10px] text-trunks">
                                  {comp.nameEn || comp.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Theme Toggle */}
        <div className="flex flex-1 flex-col items-center justify-center gap-1 text-trunks transition-colors">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-trunks transition-colors"
            aria-label="تغییر تم"
          >
            <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <p className="text-[10px] font-medium">تم</p>
        </div>
      </div>
    </nav>
  );
}
