import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { PageHeader, Panel, SectionTitle } from "@/components/ui/section";
import {
  novelArcs,
  WEB_NOVEL_URL,
  WEB_NOVEL_EN_URL,
  LIGHT_NOVEL_URL,
} from "@/lib/rezero-data";

export const Route = createFileRoute("/novels")({
  head: () => ({
    meta: [
      { title: "Re:Zero Novels — Light Novel & Web Novel Reading Guide" },
      {
        name: "description",
        content:
          "Arc-by-arc guide to the Re:Zero light novels and the original web novel, including volume ranges, chapter ranges and where the anime stops.",
      },
      { property: "og:title", content: "Re:Zero Light Novel & Web Novel Guide" },
      {
        property: "og:description",
        content:
          "Which volumes cover which arcs, how the web novel differs, and where to start reading after the anime.",
      },
    ],
  }),
  component: NovelsPage,
});

function NovelsPage() {
  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow="Novels"
          title="The light novel and the web novel"
          lead="Tappei Nagatsuki began Re:Zero as a free web serial in 2012. The light novel edition rewrites and expands it with Shinichirou Otsuka's illustrations. Both are still going."
        />

        <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2">
          <Panel>
            <SectionTitle>Light novel</SectionTitle>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The published edition: tighter prose, extra scenes, new perspectives and
              illustrations. This is the version the anime adapts, and the one to buy if
              you want the definitive text.
            </p>
            <a
              href={LIGHT_NOVEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              Official English edition · Yen Press
            </a>
          </Panel>
          <Panel>
            <SectionTitle>Web novel</SectionTitle>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The original serial, free and far ahead of the books. Rougher, faster, and
              the only place to read the later arcs — at the cost of spoilers and less
              polished drafts.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={WEB_NOVEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary px-4 py-1.5 text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Read free · original Japanese
              </a>
              <a
                href={WEB_NOVEL_EN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                Free English translation · community project
              </a>
            </div>
          </Panel>
        </div>

        <section className="mx-auto mt-14 max-w-6xl px-5">
          <SectionTitle>Arc by arc</SectionTitle>
          <div className="mt-7 space-y-4">
            {novelArcs.map((arc) => (
              <Panel key={arc.arc}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-primary">{arc.arc}</span>
                  <h3 className="font-display text-xl text-foreground">{arc.title}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {arc.volumes}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-foreground/85">{arc.summary}</p>
                <p className="mt-2 text-sm text-muted-foreground">{arc.webNote}</p>
                <a
                  href={WEB_NOVEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-primary underline-offset-4 hover:underline"
                >
                  Read this arc free in the web novel →
                </a>
              </Panel>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-6xl px-5">
          <Panel>
            <SectionTitle>Where to start after the anime</SectionTitle>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              Season 3 ends with Arc 5. Pick up the light novels at volume 21 (Arc 6, the
              Pleiades Watchtower) for the reading experience closest to the anime, or jump
              into the web novel from chapter 593 if you would rather not wait for
              translations to catch up.
            </p>
          </Panel>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
