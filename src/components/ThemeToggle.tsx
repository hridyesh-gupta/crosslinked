"use client";

import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/cn";

/** Toggles the `.dark` class on <html> and persists the choice. The icon is
    driven by the `dark:` variant, so there's no hydration mismatch. */
export function ThemeToggle({ label, className }: { label: string; className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/40 text-muted transition-colors hover:border-border-strong hover:text-fg",
        className,
      )}
    >
      <Sun className="hidden h-[18px] w-[18px] dark:block" aria-hidden="true" />
      <Moon className="h-[18px] w-[18px] dark:hidden" aria-hidden="true" />
    </button>
  );
}
