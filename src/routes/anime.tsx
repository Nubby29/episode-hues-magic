import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { WatchPanel } from "@/components/WatchPanel";
import { EpisodeGuide } from "@/components/EpisodeGuide";
import { PageHeader, Panel, SectionTitle } from "@/components/ui/section";
import { animeEntries } from "@/lib/rezero-data";
import { episodesBySeason } from "@/lib/rezero-episodes";
import { useSeasonTheme } from "@/lib/theme-context";

export const Route = createFileRoute("/anime")({
  head: () => ({
    meta: [
      { title: "Re:Zero Anime & Films — Seasons, OVAs and Watch Order" },
      {
        name: "description",
        content:
          "Every Re:Zero season and film: Season 1, Season 2 Sanctuary, Season 3 Priestella, Memory Snow and The Frozen Bond, with arcs and recommended watch order.",
      },
      { property: "og:title", content: "Re:Zero Anime & Films — Seasons and Watch Order" },
      {
        property: "og:description",
        content:
          "Seasons, OVA films, covered arcs and the recommended order to watch Re:Zero in.",
      },
    ],
  }),
  component: AnimePage,
});

function AnimePage() {
  const { themeKey, setThemeKey } = useSeasonTheme();

  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow="Anime & films"
          title="Three seasons, two films, one loop"
          lead="Watch every episode and film right here, and select an entry to shift the archive into its atmosphere."
        />

        <div className="mx-auto max-w-6xl space-y-5 px-5">
          {animeEntries.map((entry) => {
            const active = themeKey === entry.key;
            return (
              <Panel
                key={entry.key}
                className={active ? "border-primary" : undefined}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-primary">
                      {entry.format} · {entry.aired}
                    </p>
                    <h2 className="font-display mt-2 text-2xl text-foreground">
                      {entry.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{entry.episodes}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setThemeKey(entry.key)}
                    className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active ? "Current atmosphere" : "Use this atmosphere"}
                  </button>
                </div>

                <p className="mt-5 max-w-3xl leading-relaxed text-foreground/85">
                  {entry.synopsis}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.arcs.map((arc) => (
                    <span
                      key={arc}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {arc}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm italic text-muted-foreground">
                  {entry.watchNote}
                </p>

                <WatchPanel
                  trailerId={entry.trailerId}
                  fullVideoId={entry.fullVideoId}
                  links={entry.links}
                  title={entry.title}
                />

                <EpisodeGuide
                  episodes={episodesBySeason[entry.key] ?? []}
                  seasonTitle={entry.title}
                />
              </Panel>
            );
          })}
        </div>

        <section className="mx-auto mt-16 max-w-6xl px-5">
          <SectionTitle>Recommended watch order</SectionTitle>
          <ol className="mt-6 space-y-3">
            {[
              "Season 1 (or the Director's Cut) — Arcs 1 to 3",
              "Memory Snow — a warm side story after Arc 3",
              "The Frozen Bond — Emilia's prequel, best right before Season 2",
              "Season 2, both cours — the Sanctuary arc",
              "Season 3 — Priestella, the water gate city",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-display text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
