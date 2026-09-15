import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { Panel, SectionTitle } from "@/components/ui/section";
import { useSeasonTheme } from "@/lib/theme-context";
import { themes } from "@/lib/theme-data";
import { animeEntries, wikiEntries } from "@/lib/rezero-data";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Re:Zero Archive — Anime, Novels, Manga & Lore" },
      {
        name: "description",
        content:
          "A fan archive of Re:Zero: every season and film, light and web novel guides, manga adaptations, and a character and lore wiki with themed atmosphere per arc.",
      },
      { property: "og:title", content: "Re:Zero Archive — Anime, Novels, Manga & Lore" },
      {
        property: "og:description",
        content:
          "Seasons, films, novels, manga and a full character and lore wiki for Re:Zero − Starting Life in Another World.",
      },
    ],
  }),
  component: Home,
});

const ROTATION_INTERVAL_MS = 7000;

function Home() {
  const { theme, themeKey, setThemeKey, heroAutoCycle } = useSeasonTheme();
  const [isHovered, setIsHovered] = useState(false);
  const current = animeEntries.find((a) => a.key === theme.key) ?? animeEntries[0];
  const featured = wikiEntries.filter((e) =>
    ["subaru-natsuki", "emilia", "return-by-death", "witch-of-envy"].includes(e.slug),
  );

  // Automatic rotation on landing page only, enabled by default, configurable in Settings
  useEffect(() => {
    if (!heroAutoCycle || isHovered) return;

    const timer = setInterval(() => {
      const currentIndex = themes.findIndex((t) => t.key === themeKey);
      const nextIndex = (currentIndex + 1) % themes.length;
      setThemeKey(themes[nextIndex].key);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [themeKey, heroAutoCycle, isHovered, setThemeKey]);

  const handlePrev = () => {
    const currentIndex = themes.findIndex((t) => t.key === themeKey);
    const prevIndex = (currentIndex - 1 + themes.length) % themes.length;
    setThemeKey(themes[prevIndex].key);
  };

  const handleNext = () => {
    const currentIndex = themes.findIndex((t) => t.key === themeKey);
    const nextIndex = (currentIndex + 1) % themes.length;
    setThemeKey(themes[nextIndex].key);
  };

  return (
    <>
      <Atmosphere />
      <SiteHeader />

      <main className="relative z-10">
        {/* Cinematic Hero with Atmosphere Sync */}
        <section
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pt-24 transition-all duration-700"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* Hero Text Column */}
            <div className="flex-1 min-w-0">
              {/* Status badge */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-primary transition-colors duration-500">
                  {theme.kind === "film" ? "Now viewing film" : "Now viewing"} · {theme.years}
                </span>
              </div>

              {/* Hero Titles with smooth key transition */}
              <div key={theme.key} className="animate-in fade-in duration-700">
                <h1 className="font-display mt-5 max-w-3xl text-4xl leading-[1.1] text-foreground sm:text-6xl">
                  {theme.name}
                  <span className="block text-primary transition-colors duration-700">{theme.subtitle}</span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground transition-colors duration-500">
                  {theme.atmosphere}
                </p>

                <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80 line-clamp-3 sm:line-clamp-none">
                  {current.synopsis}
                </p>
              </div>

              {/* Actions & Navigation Controls */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/watch/$key"
                  params={{ key: theme.key }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-90 active:scale-95"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>Watch {theme.name}</span>
                </Link>

                <Link
                  to="/anime"
                  className="rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-secondary"
                >
                  Watch order &amp; arcs
                </Link>

                <Link
                  to="/wiki"
                  className="rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-foreground"
                >
                  Enter the wiki
                </Link>

                {/* Quick Prev / Next switcher arrows */}
                <div className="ml-auto flex items-center gap-1.5 pt-2 sm:pt-0 lg:ml-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous theme"
                    className="rounded-full border border-border bg-card/60 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next theme"
                    className="rounded-full border border-border bg-card/60 p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Carousel Dot Indicators */}
              <div className="mt-8 flex items-center gap-2">
                {themes.map((t) => {
                  const active = t.key === themeKey;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setThemeKey(t.key)}
                      className={`group relative h-2 rounded-full transition-all duration-300 ${
                        active ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/60"
                      }`}
                      aria-label={`Switch to ${t.name}`}
                      title={`${t.name} (${t.subtitle})`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Hero Poster Card — crossfades with the auto-cycling theme */}
            <div className="relative mx-auto w-52 shrink-0 sm:w-60 lg:w-72" aria-hidden="false">
              {/* Ambient glow behind the poster */}
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-40 blur-3xl transition-all duration-1000"
                style={{ background: "var(--halo)" }}
              />
              {/* Double-buffered poster layers for a smooth crossfade */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border/70 shadow-2xl shadow-background/60">
                {themes.map((t) => (
                  <img
                    key={t.key}
                    src={t.poster}
                    alt={`${t.name} — ${t.subtitle} poster`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out"
                    style={{ opacity: t.key === themeKey ? 1 : 0 }}
                    aria-hidden={t.key !== themeKey}
                  />
                ))}
                {/* Soft bottom scrim so the poster blends into the page */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Manual Atmosphere Selection Grid */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <SectionTitle>Shift the atmosphere</SectionTitle>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each season and film has its own palette and light. Choose one and the whole
            archive changes with it.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t) => (
              <ThemeCard key={t.key} themeKey={t.key} />
            ))}
          </div>
        </section>

        {/* Four Ways In */}
        <section className="mx-auto max-w-6xl px-5 py-14">
          <SectionTitle>Four ways in</SectionTitle>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              {
                to: "/anime" as const,
                title: "Anime & films",
                text: "Four seasons, two OVA films, and where each one sits in the story.",
              },
              {
                to: "/novels" as const,
                title: "Novels",
                text: "Light novel volumes mapped against the free web novel, arc by arc.",
              },
              {
                to: "/manga" as const,
                title: "Manga",
                text: "Every serialised adaptation, its artist, and which arc it covers.",
              },
              {
                to: "/wiki" as const,
                title: "Characters & lore",
                text: "Return by Death, the Royal Selection, the Witch Cult, and the people caught between them.",
              },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="group">
                <Panel className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-display text-xl text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                  <span className="mt-4 inline-block text-sm text-primary">Open →</span>
                </Panel>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Wiki Entries */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <SectionTitle>Start with these</SectionTitle>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((e) => (
              <Link key={e.slug} to="/wiki/$slug" params={{ slug: e.slug }}>
                <Panel className="h-full">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                    {e.tag}
                  </p>
                  <h3 className="font-display mt-2 text-lg text-foreground">{e.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.short}
                  </p>
                </Panel>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function ThemeCard({ themeKey }: { themeKey: (typeof themes)[number]["key"] }) {
  const { themeKey: active, setThemeKey } = useSeasonTheme();
  const t = themes.find((x) => x.key === themeKey)!;
  const isActive = active === themeKey;

  return (
    <button
      type="button"
      onClick={() => setThemeKey(t.key)}
      className={`group flex gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
        isActive
          ? "border-primary bg-card shadow-sm ring-1 ring-primary/40"
          : "border-border bg-card/50 hover:-translate-y-1 hover:bg-card"
      }`}
    >
      {/* Poster thumbnail */}
      <div className="relative aspect-[2/3] w-20 shrink-0 overflow-hidden rounded-lg border border-border/60">
        <img
          src={t.poster}
          alt={`${t.name} poster`}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {Object.values(t.vars)
            .slice(0, 1)
            .concat([t.vars["--primary"]!, t.vars["--accent"]!])
            .map((c, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-full border border-border"
                style={{ background: c }}
              />
            ))}
        </div>
        <h3 className="font-display mt-2 text-lg text-foreground">{t.name}</h3>
        <p className="text-sm text-primary">{t.subtitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {t.atmosphere}
        </p>
      </div>
    </button>
  );
}
