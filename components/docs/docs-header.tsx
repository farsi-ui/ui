"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BookOpen, LayoutGrid } from "lucide-react";

export function DocsHeader() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "خانه", labelEn: "Home", icon: Home },
    { href: "/docs", label: "مستندات", labelEn: "Docs", icon: BookOpen },
    { href: "/docs/components", label: "کامپوننت‌ها", labelEn: "Components", icon: LayoutGrid },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 items-center px-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1 text-sm" aria-label="مسیر ناوبری">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <div key={item.href} className="flex items-center">
                {index > 0 && <span className="mx-2 text-muted-foreground">/</span>}
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-accent",
                    isActive ? "text-foreground font-medium" : "text-muted-foreground"
                  )}
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
