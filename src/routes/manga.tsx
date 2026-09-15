import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { PageHeader, Panel } from "@/components/ui/section";
import { mangaEntries, MANGA_URL } from "@/lib/rezero-data";

export const Route = createFileRoute("/manga")({
  head: () => ({
    meta: [
      { title: "Re:Zero Manga — Every Adaptation by Arc" },
      {
        name: "description",
        content:
          "Guide to the Re:Zero manga adaptations: Chapter 1 through Chapter 4, their artists, volume counts and which story arc each one covers.",
      },
      { property: "og:title", content: "Re:Zero Manga Adaptations" },
      {
        property: "og:description",
        content:
          "Every serialised Re:Zero manga, its artist, length and the arc it adapts.",
      },
    ],
  }),
  component: MangaPage,
});

function MangaPage() {
  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow="Manga"
          title="Adaptations, arc by arc"
          lead="The manga runs as separate serialisations rather than one continuous series — each 'Chapter' adapts a single story arc, often with a different artist."
        />

        <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2">
          {mangaEntries.map((m) => (
            <Panel key={m.title} className="h-full">
              <p className="text-[10px] uppercase tracking-[0.24em] text-primary">
                {m.covers}
              </p>
              <h2 className="font-display mt-2 text-xl text-foreground">{m.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {m.artist} · {m.chapters}
              </p>
              <p className="mt-4 leading-relaxed text-foreground/85">{m.note}</p>
              <a
                href={MANGA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs text-primary underline-offset-4 hover:underline"
              >
                Official English edition · Yen Press →
              </a>
            </Panel>
          ))}
        </div>

        <section className="mx-auto mt-14 max-w-6xl px-5">
          <Panel>
            <h2 className="font-display text-2xl text-foreground">Reading advice</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              The manga is the fastest way to revisit the early arcs and the best format
              for the horror beats of Arc 2, but it condenses interior monologue heavily.
              For Arc 3 onward the light novels carry far more of Subaru's inner voice.
            </p>
          </Panel>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
