"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  function cycleTheme() {
    if (theme === "light") {
      setTheme("dark")
      return
    }

    if (theme === "dark") {
      setTheme("system")
      return
    }

    setTheme("light")
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="h-8 w-8 px-0"
      onClick={cycleTheme}
      title="Switch between light, dark, and system themes"
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Change color theme</span>
    </Button>
  )
}
