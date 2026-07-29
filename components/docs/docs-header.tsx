"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, BookOpen, LayoutGrid, Palette, Type, Ruler, Blocks } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farsi.eindev.ir/";

interface BreadcrumbItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const segmentConfig: Record<string, { label: string; icon?: React.ReactNode; parentHref?: string }> = {
  docs: { label: "مستندات", icon: <BookOpen className="size-4" /> },
  installation: { label: "نصب", parentHref: "/docs" },
  configuration: { label: "تنظیمات", parentHref: "/docs" },
  components: { label: "کامپوننت‌ها", icon: <LayoutGrid className="size-4" />, parentHref: "/docs" },
  blocks: { label: "بلاک‌ها", icon: <Blocks className="size-4" />, parentHref: "/docs" },
  foundations: { label: "مبانی طراحی", parentHref: "/docs" },
  colors: { label: "رنگ‌ها", icon: <Palette className="size-4" />, parentHref: "/docs/foundations" },
  typography: { label: "تایپوگرافی", icon: <Type className="size-4" />, parentHref: "/docs/foundations" },
  spacing: { label: "فاصله‌گذاری", icon: <Ruler className="size-4" />, parentHref: "/docs/foundations" },
};

function formatSegmentLabel(segment: string): string {
  return segment
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export function DocsHeader() {
  const pathname = usePathname();

  const breadcrumbs: BreadcrumbItem[] = [{ href: "/", label: "خانه", icon: <Home className="size-4" /> }];

  const segments = pathname.split("/").filter(Boolean);

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const config = segmentConfig[segment];

    if (config) {
      const href = `/${segments.slice(0, i + 1).join("/")}`;
      breadcrumbs.push({
        href,
        label: config.label,
        icon: config.icon,
      });
    }
  }

  const dynComponentMatch = pathname.match(/^\/docs\/components\/(.+)$/);
  const dynBlockMatch = pathname.match(/^\/docs\/blocks\/(.+)$/);
  const dynSlug = dynComponentMatch?.[1] || dynBlockMatch?.[1];

  if (dynSlug) {
    breadcrumbs.push({
      href: pathname,
      label: formatSegmentLabel(dynSlug),
    });
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
        <div className="flex h-14 items-center px-6">
          <nav className="flex items-center gap-1 text-sm" aria-label="مسیر ناوبری">
            {breadcrumbs.map((item, index) => (
              <div key={`${item.href}-${index}`} className="flex items-center">
                {index > 0 && <span className="mx-2 text-muted-foreground select-none">/</span>}
                {index < breadcrumbs.length - 1 ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-accent",
                      "text-muted-foreground"
                    )}
                  >
                    {item.icon && <span className="hidden sm:inline">{item.icon}</span>}
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 rounded-md px-2 py-1 text-foreground font-medium">
                    {item.icon && <span className="hidden sm:inline">{item.icon}</span>}
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
