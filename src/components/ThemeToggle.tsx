"use client";

import { useTheme } from "@/components/Providers";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light" : "Dark"}
      className={className}
      onClick={toggleTheme}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
