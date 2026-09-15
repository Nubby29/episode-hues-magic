import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { WatchPanel } from "@/components/WatchPanel";
import { EpisodeGuide } from "@/components/EpisodeGuide";
import { PageHeader, Panel, SectionTitle } from "@/components/ui/section";
import { animeEntries } from "@/lib/rezero-data";
import { episodesBySeason } from "@/lib/rezero-episodes";
import type { ThemeKey } from "@/lib/theme-data";

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
        { name: "description", content: description },
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
        <div className="mx-auto max-w-6xl px-5 pb-16">
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
  if (!entry) return <WatchNotFound />;

  const episodes = episodesBySeason[entry.key] ?? [];

  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow={`${entry.format} · ${entry.aired}`}
          title={entry.title}
          lead={entry.synopsis}
        />

        <div className="mx-auto max-w-6xl space-y-6 px-5 pb-16">
          <Link
            to="/watch"
            className="inline-block text-xs uppercase tracking-[0.22em] text-primary hover:underline"
          >
            ← All seasons and films
          </Link>

          <Panel>
            <SectionTitle>
              {entry.fullVideoId ? "Watch the film" : "Trailer and links"}
            </SectionTitle>
            <div className="mt-3 flex flex-wrap gap-2">
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
          </Panel>

          {episodes.length > 0 ? (
            <Panel>
              <SectionTitle>Episodes</SectionTitle>
              <EpisodeGuide
                episodes={episodes}
                seasonTitle={entry.title}
                defaultOpen
              />
            </Panel>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
