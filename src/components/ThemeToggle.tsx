"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return <div className="flex items-center space-x-2 h-10 w-[76px]" />;
  }

  const isDarkMode = (resolvedTheme || theme) === "dark";

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 transition-all duration-200 ${!isDarkMode ? 'text-primary scale-110' : 'text-muted-foreground scale-95 opacity-60'}`} />
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleThemeChange}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      <Moon className={`h-5 w-5 transition-all duration-200 ${isDarkMode ? 'text-primary scale-110' : 'text-muted-foreground scale-95 opacity-60'}`} />
      <Label htmlFor="theme-toggle" className="sr-only">
        Toggle theme
      </Label>
    </div>
  );
}
