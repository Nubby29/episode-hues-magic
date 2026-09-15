import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { PageHeader, Panel, SectionTitle } from "@/components/ui/section";
import { CANON_ARCS, IF_ROUTES, type ArcMeta, type IfRouteMeta, type NovelChapterMeta } from "@/lib/rezero-novels";
import { NovelReader } from "@/components/NovelReader";
import {
  BookOpen,
  Compass,
  ArrowRight,
  Flame,
  ExternalLink,
  ChevronRight,
  Bookmark,
  Layers,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/novels")({
  head: () => ({
    meta: [
      { title: "Re:Zero Novels & IF Routes — In-Site Web Novel Reader" },
      {
        name: "description",
        content:
          "Read Re:Zero light novels, web novel arcs, and alternate IF route timelines directly in-site, powered by Witch Cult Translations.",
      },
      { property: "og:title", content: "Re:Zero Web Novel & IF Timeline Reader" },
      {
        property: "og:description",
        content: "Arc-by-arc canon reading rooms and dedicated IF route timelines.",
      },
    ],
  }),
  component: NovelsPage,
});

function NovelsPage() {
  const [activeTab, setActiveTab] = useState<"arcs" | "if">("arcs");
  const [selectedArc, setSelectedArc] = useState<ArcMeta | null>(null);
  const [selectedIfRoute, setSelectedIfRoute] = useState<IfRouteMeta | null>(null);

  // Active reading state
  const [readingChapter, setReadingChapter] = useState<{
    chapter: NovelChapterMeta;
    arc: ArcMeta;
  } | null>(null);

  const [readingIfRoute, setReadingIfRoute] = useState<IfRouteMeta | null>(null);

  // If reading an active chapter, show NovelReader
  if (readingChapter) {
    const { chapter, arc } = readingChapter;
    const currentIndex = arc.chapters.findIndex((c) => c.id === chapter.id);
    const hasNext = currentIndex !== -1 && currentIndex < arc.chapters.length - 1;
    const hasPrev = currentIndex > 0;
    const isEndOfArc = currentIndex === arc.chapters.length - 1;

    return (
      <NovelReader
        title={`${arc.title} · ${chapter.title}`}
        subtitle={chapter.subtitle}
        sourceLabel="Witch Cult Translations"
        originalUrl={chapter.externalUrl}
        contentFile={chapter.hasLocalContent ? `${chapter.id}.json` : undefined}
        onBack={() => setReadingChapter(null)}
        hasNext={hasNext}
        hasPrev={hasPrev}
        isEndOfArc={isEndOfArc}
        arcTitle={arc.title}
        onNext={() => {
          if (hasNext) {
            setReadingChapter({
              chapter: arc.chapters[currentIndex + 1],
              arc,
            });
          }
        }}
        onPrev={() => {
          if (hasPrev) {
            setReadingChapter({
              chapter: arc.chapters[currentIndex - 1],
              arc,
            });
          }
        }}
      />
    );
  }

  // If reading an IF route
  if (readingIfRoute) {
    return (
      <NovelReader
        title={readingIfRoute.name}
        subtitle={`${readingIfRoute.sin} Route · ${readingIfRoute.tagline}`}
        sourceLabel="Witch Cult Translations"
        originalUrl={readingIfRoute.originalUrl}
        contentFile={readingIfRoute.contentFile}
        onBack={() => setReadingIfRoute(null)}
        isEndOfArc={true}
        arcTitle={`${readingIfRoute.name} (${readingIfRoute.sin} IF)`}
      />
    );
  }

  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow="Web Novel & IF Archives"
          title="The Chronicles & Alternate Fates"
          lead="Explore the complete Re:Zero canon arc-by-arc or branch into the seven deadly alternate timelines, translated by Witch Cult Translations."
        />

        {/* Global Nav Tabs */}
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex border-b border-border/60">
            <button
              onClick={() => {
                setActiveTab("arcs");
                setSelectedArc(null);
                setSelectedIfRoute(null);
              }}
              className={`flex items-center gap-2 border-b-2 px-6 py-3.5 text-sm font-semibold transition-all ${
                activeTab === "arcs"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Canon Arcs (1–10)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("if");
                setSelectedArc(null);
                setSelectedIfRoute(null);
              }}
              className={`flex items-center gap-2 border-b-2 px-6 py-3.5 text-sm font-semibold transition-all ${
                activeTab === "if"
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Flame className="h-4 w-4" />
              <span>IF Routes (Alternate Timelines)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CANON ARCS */}
        {activeTab === "arcs" && (
          <div className="mx-auto max-w-6xl px-5 py-8">
            {/* If a specific Arc is selected, show its dedicated details & chapter directory */}
            {selectedArc ? (
              <div className="space-y-6">
                <button
                  onClick={() => setSelectedArc(null)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  ← Back to All Arcs
                </button>

                <Panel className="border-primary/40 bg-card/60">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-xs font-semibold text-primary">
                      Arc {selectedArc.arcNumber}
                    </span>
                    <span className="rounded-md border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground">
                      {selectedArc.animeTag}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {selectedArc.title}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {selectedArc.volumes} · {selectedArc.webRange}
                  </p>

                  <p className="mt-4 leading-relaxed text-foreground/90">{selectedArc.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedArc.keyThemes.map((theme, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-secondary/80 px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        #{theme}
                      </span>
                    ))}
                  </div>
                </Panel>

                <div className="mt-8">
                  <SectionTitle>Chapter Directory</SectionTitle>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Read online or launch directly into the reading viewer.
                  </p>

                  {selectedArc.chapters.length > 0 ? (
                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {selectedArc.chapters.map((ch) => (
                        <div
                          key={ch.id}
                          className="flex items-center justify-between rounded-xl border border-border/50 bg-card/40 p-3.5 transition-all hover:border-primary/60 hover:bg-card"
                        >
                          <div className="min-w-0 pr-3">
                            <h4 className="truncate text-sm font-medium text-foreground">
                              {ch.title}
                            </h4>
                            {ch.subtitle && (
                              <p className="truncate text-xs text-muted-foreground">
                                {ch.subtitle}
                              </p>
                            )}
                          </div>

                          {ch.hasLocalContent ? (
                            <button
                              onClick={() =>
                                setReadingChapter({
                                  chapter: ch,
                                  arc: selectedArc,
                                })
                              }
                              className="shrink-0 rounded-lg bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              Read In-Site
                            </button>
                          ) : (
                            <a
                              href={ch.externalUrl || "https://witchculttranslation.com/"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex shrink-0 items-center gap-1 rounded-lg border border-border/60 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground"
                            >
                              <span>WCT</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 rounded-xl border border-border/40 p-6 text-center text-xs text-muted-foreground">
                      <p>Full web chapters for Arc {selectedArc.arcNumber} available on Witch Cult Translations.</p>
                      <a
                        href="https://witchculttranslation.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-primary px-3 py-1.5 text-xs text-primary"
                      >
                        <span>Open Witch Cult Catalog</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* All Arcs Grid */
              <div className="grid gap-6 md:grid-cols-2">
                {CANON_ARCS.map((arc) => (
                  <Panel
                    key={arc.id}
                    className="flex flex-col justify-between border-border/60 hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-semibold text-primary">
                          Arc {arc.arcNumber}
                        </span>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                          {arc.animeTag}
                        </span>
                      </div>

                      <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                        {arc.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">{arc.volumes}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {arc.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                      <span className="text-xs text-muted-foreground">{arc.webRange}</span>
                      <button
                        onClick={() => setSelectedArc(arc)}
                        className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        <span>Explore Arc</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </Panel>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: IF ROUTES */}
        {activeTab === "if" && (
          <div className="mx-auto max-w-6xl px-5 py-8">
            <div className="mb-8 rounded-2xl border border-red-500/20 bg-red-950/10 p-5 text-sm text-foreground/90">
              <div className="flex items-center gap-2 font-semibold text-red-400">
                <Flame className="h-4 w-4" />
                <span>What are the IF Routes?</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Written by Tappei Nagatsuki as annual April Fools' side stories, each IF story explores
                what happens when Subaru succumbs to one of the Seven Deadly Sins at a pivotal crossroads,
                diverging from the canon timeline.
              </p>
            </div>

            {selectedIfRoute ? (
              <div className="space-y-6">
                <button
                  onClick={() => setSelectedIfRoute(null)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  ← Back to All IF Routes
                </button>

                <Panel className="border-red-500/30 bg-card">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-red-500/10 px-3 py-1 font-display text-xs font-bold text-red-400">
                      Sin of {selectedIfRoute.sin}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {selectedIfRoute.divergence}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {selectedIfRoute.name}
                  </h2>
                  <p className="mt-1 italic text-xs text-red-300">{selectedIfRoute.tagline}</p>

                  <div className="mt-4 rounded-xl border border-border/40 bg-background/50 p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Divergence Point
                    </span>
                    <p className="mt-1 text-xs text-foreground/85">
                      {selectedIfRoute.divergencePoint}
                    </p>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground/90">
                    {selectedIfRoute.synopsis}
                  </p>

                  {selectedIfRoute.warningNote && (
                    <p className="mt-3 text-xs text-yellow-400/80">
                      ⚠️ {selectedIfRoute.warningNote}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {selectedIfRoute.hasLocalContent ? (
                      <button
                        onClick={() => setReadingIfRoute(selectedIfRoute)}
                        className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow hover:bg-primary/90"
                      >
                        Read Route In-Site
                      </button>
                    ) : (
                      <a
                        href={selectedIfRoute.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground"
                      >
                        <span>Read on Witch Cult</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </Panel>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {IF_ROUTES.map((route) => (
                  <Panel
                    key={route.id}
                    className="flex flex-col justify-between border-border/60 hover:border-red-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-bold text-red-400">
                          {route.sin}
                        </span>
                        <span className="text-[11px] text-muted-foreground">{route.divergence}</span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                        {route.name}
                      </h3>
                      <p className="mt-1 text-xs italic text-red-300">{route.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {route.synopsis}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                      {route.hasLocalContent ? (
                        <button
                          onClick={() => setReadingIfRoute(route)}
                          className="rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                        >
                          Read Story
                        </button>
                      ) : (
                        <span className="text-xs text-muted-foreground">Reference translation</span>
                      )}
                      <button
                        onClick={() => setSelectedIfRoute(route)}
                        className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-primary"
                      >
                        <span>Details</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </Panel>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
