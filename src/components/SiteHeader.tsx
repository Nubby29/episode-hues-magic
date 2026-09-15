import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useSeasonTheme } from "@/lib/theme-context";
import { themes } from "@/lib/theme-data";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/anime", label: "Anime & Films" },
  { to: "/watch", label: "Watch" },
  { to: "/novels", label: "Novels" },
  { to: "/manga", label: "Manga" },
  { to: "/wiki", label: "Wiki" },
] as const;

export function SiteHeader() {
  const { themeKey, setThemeKey, theme } = useSeasonTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg tracking-[0.3em] text-foreground">
            RE:ZERO
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Starting Life in Another World
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="ml-auto rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground md:hidden"
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-4 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-2.5">
          <span className="mr-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Atmosphere
          </span>
          {themes.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setThemeKey(t.key)}
              aria-pressed={themeKey === t.key}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-all duration-300",
                themeKey === t.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {t.name}
            </button>
          ))}
          <span className="hidden text-xs text-muted-foreground lg:inline">
            — {theme.subtitle}
          </span>
        </div>
      </div>
    </header>
  );
}
