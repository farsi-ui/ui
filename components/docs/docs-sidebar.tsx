"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronLeftIcon,
  SearchIcon,
  GithubIcon,
  MoonIcon,
  SunIcon,
  HomeIcon,
  LayoutGridIcon,
  PaletteIcon,
  BoxIcon,
  TypeIcon,
  NavigationIcon,
  MessageSquareIcon,
  LayersIcon,
  SettingsIcon,
  PanelRightCloseIcon,
  PanelRightOpenIcon,
  AlignHorizontalSpaceBetween,
  FormIcon,
  SquareTerminalIcon,
  DatabaseZapIcon,
  QrCodeIcon,
  MousePointerClick,
} from "lucide-react"
import { useTheme } from "next-themes"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarInset,
  SidebarSeparator,
  SidebarInput,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { allComponents } from "@/lib/components-data"

// Navigation sections
const navSections = [
  {
    title: "شروع کار",
    titleEn: "Getting Started",
    icon: HomeIcon,
    items: [
      { title: "معرفی", titleEn: "Introduction", href: "/docs", icon: QrCodeIcon },
      { title: "نصب", titleEn: "Installation", href: "/docs/installation", icon: SquareTerminalIcon },
      { title: "تنظیمات", titleEn: "Configuration", href: "/docs/configuration", icon: SettingsIcon },
    ],
  },
  {
    title: "پایه‌ها",
    titleEn: "Foundations",
    icon: PaletteIcon,
    items: [
      { title: "رنگ‌ها", titleEn: "Colors", href: "/docs/foundations/colors", icon: PaletteIcon },
      { title: "تایپوگرافی", titleEn: "Typography", href: "/docs/foundations/typography", icon: TypeIcon },
      { title: "فاصله‌گذاری", titleEn: "Spacing", href: "/docs/foundations/spacing", icon: AlignHorizontalSpaceBetween },
    ],
  },
]

// Category icons mapping
const categoryIcons: Record<string, React.ElementType> = {
  "عناصر پایه": BoxIcon,
  ورودی‌ها: FormIcon,
  "نمایش داده": DatabaseZapIcon,
  ناوبری: NavigationIcon,
  بازخورد: MessageSquareIcon,
  پوشش‌ها: LayersIcon,
}

function SidebarToggleButton() {
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="size-8"
            aria-label={isCollapsed ? "باز کردن منو" : "بستن منو"}
          >
            {isCollapsed ? <PanelRightOpenIcon className="size-4" /> : <PanelRightCloseIcon className="size-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">{isCollapsed ? "باز کردن منو" : "بستن منو"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function SidebarContentArea() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { state } = useSidebar()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [mounted, setMounted] = React.useState(false)

  const isCollapsed = state === "collapsed"

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Filter components based on search
  const filteredComponents = React.useMemo(() => {
    if (!searchQuery) return allComponents
    const query = searchQuery.toLowerCase()
    return allComponents.filter(
      (comp) => comp.name.toLowerCase().includes(query) || comp.nameEn.toLowerCase().includes(query),
    )
  }, [searchQuery])

  // Group filtered components by category
  const groupedComponents = React.useMemo(() => {
    const groups: Record<string, typeof allComponents> = {}
    filteredComponents.forEach((comp) => {
      if (!groups[comp.category]) {
        groups[comp.category] = []
      }
      groups[comp.category].push(comp)
    })
    return groups
  }, [filteredComponents])

  // Keyboard shortcut for search
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        document.getElementById("sidebar-search")?.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <SidebarHeader className="">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center">
              <MousePointerClick className="size-3" />
            </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">فارسی یو آی</span>
              <span className="text-xs text-muted-foreground">سیستم طراحی فارسی</span>
            </div>
          )}
        </Link>

        {/* Search - Only show when expanded */}
        {!isCollapsed && (
          <div className="relative mt-4">
            <SearchIcon className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <SidebarInput
              id="sidebar-search"
              placeholder="جستجو..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ps-9 pe-14 h-9"
            />
            <kbd className="absolute end-2 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        )}

        {isCollapsed && (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 mt-2 mx-auto"
                  onClick={() => document.getElementById("sidebar-search")?.focus()}
                >
                  <SearchIcon className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">جستجو (⌘K)</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </SidebarHeader>

      <SidebarSeparator className="mx-auto" />

      <SidebarContent className="">
        {/* Navigation Sections */}
        {navSections.map((section) => (
          <SidebarGroup key={section.title}>
            {!isCollapsed ? (
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroupLabel
                  asChild
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  <CollapsibleTrigger className="flex w-full items-center gap-2 hover:text-foreground transition-colors px-2 py-1.5 rounded-md">
                    <section.icon className="size-4 shrink-0" />
                    <span className="flex-1 text-start">{section.title}</span>
                    <ChevronLeftIcon className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item.href}>
                          <SidebarMenuButton asChild isActive={pathname === item.href} className="h-auto py-2">
                            <Link href={item.href}>
                              <item.icon className="size-4 shrink-0" />
                              <span className="flex flex-col items-start gap-0.5">
                                <span className="font-medium text-sm">{item.title}</span>
                                <span className="text-xs text-muted-foreground">{item.titleEn}</span>
                              </span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton asChild isActive={pathname === item.href} className="justify-center">
                              <Link href={item.href}>
                                <item.icon className="size-4" />
                              </Link>
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="flex flex-col gap-0.5">
                            <span className="font-medium">{item.title}</span>
                            <span className="text-xs text-muted-foreground">{item.titleEn}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        ))}

        <SidebarSeparator className="my-2 mx-auto" />

        {/* Components Section */}
        <SidebarGroup>
          {!isCollapsed ? (
            <>
              <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 px-2 mb-2">
                <LayoutGridIcon className="size-4 shrink-0" />
                <span>
                  کامپوننت‌ها
                  <span className="text-[10px] text-muted-foreground/70 ms-1.5 font-normal normal-case">
                    ({filteredComponents.length})
                  </span>
                </span>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                {Object.entries(groupedComponents).map(([category, components]) => {
                  const CategoryIcon = categoryIcons[category] || BoxIcon
                  return (
                    <Collapsible key={category} defaultOpen className="group/collapsible">
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton className="w-full justify-between font-medium">
                              <span className="flex items-center gap-2">
                                <CategoryIcon className="size-4 text-muted-foreground shrink-0" />
                                <span>{category}</span>
                              </span>
                              <ChevronLeftIcon className="size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub className="border-s-2 border-border/50 ms-4 ps-3 mt-1">
                              {components.map((comp) => (
                                <SidebarMenuSubItem key={comp.slug}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === `/docs/components/${comp.slug}`}
                                    className="h-auto py-1.5"
                                  >
                                    <Link href={`/docs/components/${comp.slug}`}>
                                      <span className="flex flex-col items-start gap-0">
                                        <span className="flex items-center gap-2">
                                          <span className="font-medium text-sm">{comp.name}</span>
                                          {comp.isNew && (
                                            <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold text-primary">
                                              جدید
                                            </span>
                                          )}
                                        </span>
                                        <span className="text-xs text-muted-foreground">{comp.nameEn}</span>
                                      </span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </Collapsible>
                  )
                })}
              </SidebarGroupContent>
            </>
          ) : (
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname.startsWith("/docs/components")}
                          className="justify-center"
                        >
                          <Link href="/docs/components">
                            <LayoutGridIcon className="size-4" />
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <span className="font-medium">کامپوننت‌ها</span>
                        <span className="text-xs text-muted-foreground block">Components</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </SidebarMenuItem>
                {Object.entries(categoryIcons).map(([category, CategoryIcon]) => (
                  <SidebarMenuItem key={category}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton className="justify-center opacity-60 hover:opacity-100">
                            <CategoryIcon className="size-4" />
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="left">{category}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>

        <SidebarSeparator className="my-2 mx-auto" />
      <SidebarFooter className="mt-auto">
        <div className={`flex items-center ${isCollapsed ? "flex-col gap-2" : "justify-between"}`}>
          {/* GitHub Link */}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild className="size-8">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="گیت‌هاب">
                    <GithubIcon className="size-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">گیت‌هاب</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Theme Toggle */}
          {mounted && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="size-8"
                    aria-label="تغییر تم"
                  >
                    <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">{theme === "dark" ? "حالت روشن" : "حالت تاریک"}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {/* Sidebar Toggle */}
          <SidebarToggleButton />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </>
  )
}

export function DocsSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar side="left" collapsible="icon" className="border-s border-border">
        <SidebarContentArea />
      </Sidebar>
      <SidebarInset className="flex flex-col">{children}</SidebarInset>
    </SidebarProvider>
  )
}
