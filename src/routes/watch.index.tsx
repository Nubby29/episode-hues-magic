import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { PageHeader, Panel } from "@/components/ui/section";
import { animeEntries } from "@/lib/rezero-data";
import { episodesBySeason } from "@/lib/rezero-episodes";

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
          lead="Each entry has its own page with its episodes and player."
        />

        <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:grid-cols-2">
          {animeEntries.map((entry) => {
            const count = episodesBySeason[entry.key]?.length ?? 0;
            return (
              <Link
                key={entry.key}
                to="/watch/$key"
                params={{ key: entry.key }}
                className="block"
              >
                <Panel className="h-full hover:border-primary">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-primary">
                    {entry.format} · {entry.aired}
                  </p>
                  <h2 className="font-display mt-2 text-2xl text-foreground">
                    {entry.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {count > 0 ? `${count} episodes` : entry.episodes}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {entry.synopsis}
                  </p>
                  <span className="mt-5 inline-block text-xs uppercase tracking-[0.22em] text-primary">
                    Open watch page →
                  </span>
                </Panel>
              </Link>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
