import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useSeasonTheme } from "@/lib/theme-context";
import { themes } from "@/lib/theme-data";
import { cn } from "@/lib/utils";
import { Settings, Sparkles, Check, Palette, SlidersHorizontal, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const nav = [
  { to: "/", label: "Home" },
  { to: "/anime", label: "Anime & Films" },
  { to: "/watch", label: "Watch" },
  { to: "/novels", label: "Novels" },
  { to: "/manga", label: "Manga" },
  { to: "/wiki", label: "Wiki" },
] as const;

export function SiteHeader() {
  const {
    theme,
    themeKey,
    setThemeKey,
    autoTheme,
    setAutoTheme,
    heroAutoCycle,
    setHeroAutoCycle,
  } = useSeasonTheme();
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
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-foreground active:scale-95"
              >
                <Settings className="h-3.5 w-3.5 text-muted-foreground transition-transform hover:rotate-45" />
                <span className="hidden sm:inline">Settings</span>
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-lg border-border bg-card/95 backdrop-blur-xl sm:rounded-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-display text-xl tracking-wider text-foreground flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Site Settings</span>
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Configure atmosphere aesthetics, hero cycling, and route syncing.
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="atmosphere" className="mt-2 w-full">
                <TabsList className="grid w-full grid-cols-2 bg-secondary/60">
                  <TabsTrigger value="atmosphere" className="flex items-center gap-1.5 text-xs">
                    <Palette className="h-3.5 w-3.5 text-primary" />
                    <span>Atmosphere</span>
                  </TabsTrigger>
                  <TabsTrigger value="behavior" className="flex items-center gap-1.5 text-xs">
                    <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
                    <span>Automation &amp; Sync</span>
                  </TabsTrigger>
                </TabsList>

                {/* TAB 1: Atmosphere Selection */}
                <TabsContent value="atmosphere" className="space-y-4 pt-3">
                  {/* Current Active Atmosphere Banner */}
                  <div className="flex items-center justify-between rounded-xl border border-primary/40 bg-primary/10 p-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                          Active Theme
                        </span>
                        <Badge variant="outline" className="border-primary/50 text-[10px] text-foreground">
                          {theme.years}
                        </Badge>
                      </div>
                      <p className="font-display text-sm text-foreground">
                        {theme.name} <span className="text-primary font-normal">• {theme.subtitle}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {Object.values(theme.vars)
                        .slice(0, 1)
                        .concat([theme.vars["--primary"]!, theme.vars["--accent"]!])
                        .map((c, i) => (
                          <span
                            key={i}
                            className="h-3.5 w-3.5 rounded-full border border-border/80 shadow-sm"
                            style={{ background: c }}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Atmosphere Grid List */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      <span>Select Preset</span>
                      {autoTheme && (
                        <span className="text-[10px] text-primary lowercase tracking-normal font-normal">
                          (manual override enabled)
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
                              isActive
                                ? "border-primary bg-primary/15 shadow-sm ring-1 ring-primary/40"
                                : "border-border/60 bg-background/40 hover:border-border hover:bg-background/80",
                            )}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 shrink-0">
                                  {Object.values(t.vars)
                                    .slice(0, 1)
                                    .concat([t.vars["--primary"]!, t.vars["--accent"]!])
                                    .map((c, i) => (
                                      <span
                                        key={i}
                                        className="h-2.5 w-2.5 rounded-full border border-border"
                                        style={{ background: c }}
                                      />
                                    ))}
                                </div>
                                <span
                                  className={cn(
                                    "text-sm font-medium",
                                    isActive ? "text-primary" : "text-foreground",
                                  )}
                                >
                                  {t.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                  • {t.subtitle}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {t.atmosphere}
                              </p>
                            </div>

                            {isActive && (
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                                <Check className="h-3.5 w-3.5" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                {/* TAB 2: Automation & Behavior Preferences */}
                <TabsContent value="behavior" className="space-y-3.5 pt-3">
                  {/* Hero Auto-Cycle Preference */}
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-border/80 bg-background/50 p-3.5 transition-colors hover:border-border">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                        <RefreshCw className="h-4 w-4 text-primary" />
                        <span>Landing Hero Auto-Cycle</span>
                        <Badge variant="secondary" className="text-[10px] py-0 px-1.5 font-normal">
                          Default On
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Automatically rotates through all seasons and films every 7 seconds on the home page.
                      </p>
                    </div>
                    <Switch
                      checked={heroAutoCycle}
                      onCheckedChange={(checked) => setHeroAutoCycle(checked)}
                      aria-label="Toggle landing hero auto-cycling"
                    />
                  </div>

                  {/* Route Auto-Theme Sync */}
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-border/80 bg-background/50 p-3.5 transition-colors hover:border-border">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-medium text-foreground text-sm">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Route Atmosphere Sync</span>
                        <Badge variant="secondary" className="text-[10px] py-0 px-1.5 font-normal">
                          Default On
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Dynamically matches the site theme and ambient light to whichever season or movie you navigate to.
                      </p>
                    </div>
                    <Switch
                      checked={autoTheme}
                      onCheckedChange={(checked) => setAutoTheme(checked)}
                      aria-label="Toggle automatic route theme sync"
                    />
                  </div>

                  {/* Info notice */}
                  <div className="rounded-xl border border-border/40 bg-secondary/30 p-3 text-[11px] text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Note:</span> Your choices are saved in your browser and persist across visits. You can manually override the atmosphere at any time in the Atmosphere tab.
                  </div>
                </TabsContent>
              </Tabs>
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
