import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useSeasonTheme } from "@/lib/theme-context";
import { themes } from "@/lib/theme-data";
import { cn } from "@/lib/utils";
import { Settings, Sparkles, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const nav = [
  { to: "/", label: "Home" },
  { to: "/anime", label: "Anime & Films" },
  { to: "/watch", label: "Watch" },
  { to: "/novels", label: "Novels" },
  { to: "/manga", label: "Manga" },
  { to: "/wiki", label: "Wiki" },
] as const;

export function SiteHeader() {
  const { themeKey, setThemeKey, autoTheme, setAutoTheme } = useSeasonTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

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

        {/* Desktop Navigation */}
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

        {/* Settings Dialog Button */}
        <div className="flex items-center gap-2 md:ml-2">
          <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label="Open site settings & atmosphere"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-foreground"
              >
                <Settings className="h-3.5 w-3.5 text-muted-foreground transition-transform hover:rotate-45" />
                <span className="hidden sm:inline">Settings</span>
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-md border-border bg-card/95 backdrop-blur-xl sm:rounded-2xl">
              <DialogHeader>
                <DialogTitle className="font-display text-lg tracking-wider text-foreground">
                  Settings & Atmosphere
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Customize site aesthetics, ambient glow, and auto-theming behavior.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 py-2">
                {/* Auto-Theme Toggle */}
                <div className="flex items-start justify-between gap-4 rounded-xl border border-border/80 bg-background/50 p-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-foreground text-sm">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Automatic Theme Sync</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Automatically changes the atmosphere when you browse or watch different seasons and films.
                    </p>
                  </div>
                  <Switch
                    checked={autoTheme}
                    onCheckedChange={(checked) => setAutoTheme(checked)}
                    aria-label="Toggle automatic theme sync"
                  />
                </div>

                {/* Atmosphere Selection */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    <span>Choose Atmosphere</span>
                    {autoTheme && (
                      <span className="text-[10px] text-primary lowercase tracking-normal font-normal">
                        (manual override)
                      </span>
                    )}
                  </div>

                  <div className="grid gap-2">
                    {themes.map((t) => {
                      const isActive = themeKey === t.key;
                      return (
                        <button
                          key={t.key}
                          type="button"
                          onClick={() => {
                            setThemeKey(t.key);
                          }}
                          className={cn(
                            "flex items-center justify-between rounded-xl border p-3 text-left transition-all duration-200",
                            isActive ? "border-primary bg-primary/10 shadow-sm"
                              : "border-border/60 bg-background/40 hover:border-border hover:bg-background/80"
                          )}
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span
                                className={cn(
                                  "text-sm font-medium",
                                  isActive ? "text-primary" : "text-foreground"
                                )}
                              >
                                {t.name}
                              </span>
                              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80">
                                • {t.subtitle}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {t.atmosphere}
                            </p>
                          </div>

                          {isActive && (
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                              <Check className="h-3.5 w-3.5" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            className="rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground md:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-4 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
