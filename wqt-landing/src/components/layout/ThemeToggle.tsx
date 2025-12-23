"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative flex h-8 w-14 items-center rounded-full border border-soft bg-subtle px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-soft shadow-sm transition hover:border-white/40 hover:bg-strong"
    >
      <span
        className={`absolute inset-y-1 w-6 rounded-full bg-white shadow-[0_0_18px_rgba(0,0,0,0.45)] transition-transform duration-200 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <span
        className={`relative flex-1 text-center transition-colors ${
          !isDark ? "text-strong" : "text-soft"
        }`}
      >
        LT
      </span>
      <span
        className={`relative flex-1 text-center transition-colors ${
          isDark ? "text-strong" : "text-soft"
        }`}
      >
        DK
      </span>
    </button>
  );
}
