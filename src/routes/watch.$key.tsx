import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { SeasonPlayer } from "@/components/SeasonPlayer";
import { MoviePlayer } from "@/components/MoviePlayer";
import { PageHeader } from "@/components/ui/section";
import { animeEntries } from "@/lib/rezero-data";
import { episodesBySeason } from "@/lib/rezero-episodes";
import { useSeasonTheme } from "@/lib/theme-context";
import type { ThemeKey } from "@/lib/theme-data";
import { Film, Tv, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/watch/$key")({
  loader: ({ params }) => {
    const entry = animeEntries.find((e) => e.key === params.key);
    if (!entry) throw notFound();
    return { title: entry.title, synopsis: entry.synopsis };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Unavailable — Re:Zero Archive" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `Watch ${loaderData.title}`;
    const description = loaderData.synopsis.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "video.tv_show" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: WatchNotFound,
  component: WatchEntryPage,
});

function WatchNotFound() {
  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow="Watch"
          title="That entry does not exist"
          lead="Return to the list and pick a season or film."
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <Link to="/watch" className="text-sm text-primary hover:underline">
            ← All seasons and films
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function WatchEntryPage() {
  const { key } = Route.useParams();
  const entry = animeEntries.find((e) => e.key === (key as ThemeKey));
  const { syncThemeIfEnabled } = useSeasonTheme();

  useEffect(() => {
    if (entry?.key) {
      syncThemeIfEnabled(entry.key);
    }
  }, [entry?.key, syncThemeIfEnabled]);

  if (!entry) return <WatchNotFound />;

  const episodes = episodesBySeason[entry.key] ?? [];

  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        {/* Streaming-Inspired Hero & Quick Switcher */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-card/60 via-background to-background pt-8 pb-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/watch" className="hover:text-primary transition-colors">
                Watch
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">{entry.title}</span>
            </div>

            {/* Quick Season Carousel / Switcher Bar */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                Switch Season / Film
              </p>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {animeEntries.map((item) => {
                  const isCurrent = item.key === entry.key;
                  return (
                    <Link
                      key={item.key}
                      to="/watch/$key"
                      params={{ key: item.key }}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                        isCurrent
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 ring-1 ring-primary"
                          : "border border-border/80 bg-secondary/50 text-muted-foreground hover:border-primary/50 hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {item.format.includes("film") || item.format.includes("OVA") ? (
                        <Film className="h-3.5 w-3.5" />
                      ) : (
                        <Tv className="h-3.5 w-3.5" />
                      )}
                      <span>{item.title.replace("Re:Zero — Starting Life in Another World", "Season 1")}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Title & Metadata Pills */}
            <div className="pt-2 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/15 px-3 py-0.5 text-xs font-semibold text-primary">
                  {entry.format}
                </span>
                <span className="rounded-full bg-secondary px-3 py-0.5 text-xs text-secondary-foreground font-mono">
                  {entry.episodes}
                </span>
                <span className="rounded-full bg-secondary/80 px-3 py-0.5 text-xs text-muted-foreground font-mono">
                  {entry.aired}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground font-display">
                {entry.title}
              </h1>

              {/* Arc Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {entry.arcs.map((arc) => (
                  <span
                    key={arc}
                    className="rounded-md border border-border/60 bg-card/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {arc}
                  </span>
                ))}
              </div>

              {entry.watchNote && (
                <p className="text-xs italic text-primary/80 pt-1">
                  💡 {entry.watchNote}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Player Container */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {episodes.length > 0 ? (
            <SeasonPlayer episodes={episodes} seasonTitle={entry.title} />
          ) : (
            <MoviePlayer entry={entry} />
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
