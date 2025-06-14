
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder to avoid hydration mismatch and layout shift
    return <div className="flex items-center space-x-2 h-10 w-[76px]"></div>;
  }

  const isDarkMode = theme === "dark";

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 transition-colors ${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleThemeChange}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      <Moon className={`h-5 w-5 transition-colors ${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
      <Label htmlFor="theme-toggle" className="sr-only">
        Toggle theme
      </Label>
    </div>
  )
}
