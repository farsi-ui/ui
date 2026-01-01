"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" disabled aria-label="تغییر تم">
        <Sun className="h-4 w-4" aria-hidden="true" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 transition-colors hover:bg-hover-bg"
      aria-label={theme === "light" ? "تغییر به تم تاریک" : "تغییر به تم روشن"}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 text-krillin transition-all duration-200 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 text-piccolo transition-all duration-200 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">تغییر تم</span>
    </Button>
  )
}
