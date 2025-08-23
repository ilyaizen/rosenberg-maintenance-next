"use client";

import React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): Theme {
  try {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  } catch {}
  return "light";
}

function applyThemeToDom(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("light");

  // Initialize from system preference and subscribe to changes
  React.useEffect(() => {
    const initial = getSystemTheme();
    setThemeState(initial);
    applyThemeToDom(initial);

    let mql: MediaQueryList | null = null;
    const handleChange = (e: MediaQueryListEvent) => {
      const next: Theme = e.matches ? "dark" : "light";
      setThemeState(next);
      applyThemeToDom(next);
    };

    try {
      if (window.matchMedia) {
        mql = window.matchMedia("(prefers-color-scheme: dark)");
        if (typeof mql.addEventListener === "function") mql.addEventListener("change", handleChange);
  else if (typeof mql.addListener === "function") mql.addListener(handleChange);
      }
    } catch {}

    return () => {
      if (!mql) return;
      try {
        if (typeof mql.removeEventListener === "function") mql.removeEventListener("change", handleChange);
  else if (typeof mql.removeListener === "function") mql.removeListener(handleChange);
      } catch {}
    };
  }, []);

  // Keep DOM in sync when theme changes
  React.useEffect(() => {
    applyThemeToDom(theme);
  }, [theme]);

  const value = React.useMemo<ThemeContextValue>(() => ({ theme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within Providers");
  return ctx;
}
