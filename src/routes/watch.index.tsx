import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { PageHeader } from "@/components/ui/section";
import { animeEntries } from "@/lib/rezero-data";
import { episodesBySeason } from "@/lib/rezero-episodes";
import { themes } from "@/lib/theme-data";
import { Play } from "lucide-react";

export const Route = createFileRoute("/watch/")({
  head: () => ({
    meta: [
      { title: "Watch Re:Zero — Seasons and Films, English Subtitled" },
      {
        name: "description",
        content:
          "Pick a Re:Zero season or film and watch it on its own page: Season 1, Season 2, Season 3, Season 4, Memory Snow and The Frozen Bond.",
      },
      { property: "og:title", content: "Watch Re:Zero — Seasons and Films" },
      {
        property: "og:description",
        content: "Dedicated watch pages for every Re:Zero season and film.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WatchIndexPage,
});

function WatchIndexPage() {
  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow="Watch"
          title="Choose a season or film"
          lead="Each entry has its own dedicated player with complete episodes and official links."
        />

        <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {animeEntries.map((entry) => {
            const count = episodesBySeason[entry.key]?.length ?? 0;
            const theme = themes.find((t) => t.key === entry.key);
            const posterSrc = theme?.poster ?? "/posters/season1.jpg";

            return (
              <Link
                key={entry.key}
                to="/watch/$key"
                params={{ key: entry.key }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/80 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* 2:3 Poster image container with hover overlay */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-muted/40">
                  <img
                    src={posterSrc}
                    alt={`${entry.title} poster`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent opacity-85" />

                  {/* Floating badges */}
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-full border border-border/80 bg-background/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                      {entry.format}
                    </span>
                    <span className="rounded-full border border-border/80 bg-background/80 px-2.5 py-0.5 text-[10px] text-muted-foreground backdrop-blur-md">
                      {entry.aired}
                    </span>
                  </div>

                  {/* Play icon overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom title inside poster scrim */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="font-display text-xl text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {entry.title}
                    </h2>
                    <p className="mt-0.5 text-xs text-muted-foreground font-medium">
                      {count > 0 ? `${count} episodes` : entry.episodes}
                    </p>
                  </div>
                </div>

                {/* Synopsis footer */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {entry.synopsis}
                  </p>
                  <span className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Watch now →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
