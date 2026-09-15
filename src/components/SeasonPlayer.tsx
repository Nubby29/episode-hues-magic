import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, List, Play, Search, Tv } from "lucide-react";
import type { Episode } from "@/lib/rezero-episodes";

interface SeasonPlayerProps {
  episodes: Episode[];
  seasonTitle: string;
}

interface EpisodeButton {
  key: string;
  label: string;
  partIndex: number;
  totalParts: number;
  episode: Episode;
  videoId: string;
}

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function SeasonPlayer({ episodes, seasonTitle }: SeasonPlayerProps) {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchQuery, setSearchQuery] = useState("");

  // One button per playable video part
  const buttons = useMemo<EpisodeButton[]>(() => {
    const list: EpisodeButton[] = [];
    for (const episode of episodes) {
      const ids = episode.videoIds ?? [];
      ids.forEach((videoId, i) => {
        const base = String(episode.number);
        const label = ids.length > 1 ? `${base}${String.fromCharCode(65 + i)}` : base;
        list.push({
          key: `${episode.number}-${i}`,
          label,
          partIndex: i + 1,
          totalParts: ids.length,
          episode,
          videoId,
        });
      });
    }
    return list;
  }, [episodes]);

  const [selectedKey, setSelectedKey] = useState<string | null>(buttons[0]?.key ?? null);
  const currentIndex = buttons.findIndex((b) => b.key === selectedKey);
  const selected = buttons[currentIndex] ?? buttons[0] ?? null;

  const filteredButtons = useMemo(() => {
    if (!searchQuery.trim()) return buttons;
    const q = searchQuery.toLowerCase();
    return buttons.filter(
      (b) =>
        b.label.toLowerCase().includes(q) ||
        b.episode.title.toLowerCase().includes(q) ||
        (b.episode.summary && b.episode.summary.toLowerCase().includes(q))
    );
  }, [buttons, searchQuery]);

  if (buttons.length === 0) return null;

  const episode = selected?.episode ?? null;
  const aired = episode ? formatDate(episode.airdate) : null;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < buttons.length - 1;

  const handlePrev = () => {
    if (hasPrev) setSelectedKey(buttons[currentIndex - 1].key);
  };

  const handleNext = () => {
    if (hasNext) setSelectedKey(buttons[currentIndex + 1].key);
  };

  return (
    <div className="space-y-6">
      {/* 2-Column Theater Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Video Theater & Now Playing Details */}
        <div className="lg:col-span-8 space-y-4">
          {/* Main Video Frame */}
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-black shadow-2xl ring-1 ring-white/10">
            <div className="aspect-video w-full bg-black">
              {selected ? (
                <iframe
                  key={selected.videoId}
                  src={`https://www.youtube-nocookie.com/embed/${selected.videoId}?rel=0&autoplay=0`}
                  title={`${seasonTitle} — episode ${selected.episode.number}`}
                  allow="accelerometer; autoplay; clipboard-write-edge; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : null}
            </div>

            {/* Theater Playback Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 bg-card/90 backdrop-blur px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex h-7 shrink-0 items-center justify-center rounded-md bg-primary/20 px-2.5 text-xs font-bold text-primary ring-1 ring-primary/30">
                  Ep {selected?.label}
                  {selected && selected.totalParts > 1 ? ` (Part ${selected.partIndex}/${selected.totalParts})` : ""}
                </span>
                <p className="truncate text-sm font-semibold text-foreground max-w-[220px] sm:max-w-md">
                  {episode?.title}
                </p>
              </div>

              {/* Prev / Next Navigation Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={!hasPrev}
                  aria-label="Previous episode"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border/80 bg-secondary/60 px-3 text-xs font-medium transition hover:border-primary/50 hover:bg-secondary disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!hasNext}
                  aria-label="Next episode"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-primary/50 bg-primary/15 px-3.5 text-xs font-semibold text-primary transition hover:bg-primary/25 disabled:pointer-events-none disabled:opacity-30"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Episode Info Card */}
          <div className="rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-mono font-bold text-primary">
                  Episode {selected?.label}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {episode?.title}
                </h3>
              </div>
              {aired ? (
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                  Aired {aired}
                </span>
              ) : null}
            </div>

            {episode?.summary ? (
              <p className="text-sm leading-relaxed text-foreground/80 font-normal">
                {episode.summary}
              </p>
            ) : (
              <p className="text-sm italic text-muted-foreground">
                No episode synopsis available.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Episode Queue / Playlist Sidebar */}
        <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-20">
          <div className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm p-4 space-y-3">
            {/* Queue Header with Count & View Toggle */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-border/40">
              <div className="flex items-center gap-2">
                <Tv className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Episodes
                </h4>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                  {buttons.length}
                </span>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center rounded-lg border border-border bg-secondary/50 p-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="List with details"
                >
                  <List className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Compact Grid"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Filter Search Input */}
            {buttons.length > 8 && (
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by title or #..."
                  className="w-full rounded-lg border border-border bg-background/50 pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            )}

            {/* Scrollable Playlist Area */}
            <div className="max-h-[560px] overflow-y-auto space-y-2 pr-1">
              {filteredButtons.length === 0 ? (
                <p className="py-6 text-center text-xs text-muted-foreground">
                  No matching episodes found.
                </p>
              ) : viewMode === "list" ? (
                // YouTube Playlist-Style Queue
                filteredButtons.map((b) => {
                  const isActive = b.key === selectedKey;
                  const epAired = formatDate(b.episode.airdate);
                  return (
                    <button
                      key={b.key}
                      type="button"
                      onClick={() => setSelectedKey(b.key)}
                      aria-pressed={isActive}
                      className={`group flex w-full items-start gap-3 rounded-xl border p-2.5 text-left transition-all ${
                        isActive
                          ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary/30"
                          : "border-border/60 bg-card/30 hover:border-primary/50 hover:bg-card/70"
                      }`}
                    >
                      {/* Episode Badge / Play Indicator */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                            : "bg-secondary text-foreground group-hover:bg-primary/20 group-hover:text-primary"
                        }`}
                      >
                        {isActive ? (
                          <Play className="h-4 w-4 fill-current" />
                        ) : (
                          <span>{b.label}</span>
                        )}
                      </div>

                      {/* Episode Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <p
                            className={`truncate text-xs font-semibold ${
                              isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                            }`}
                          >
                            Ep {b.label}: {b.episode.title}
                          </p>
                        </div>
                        {b.episode.summary ? (
                          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                            {b.episode.summary}
                          </p>
                        ) : null}
                        {epAired ? (
                          <p className="mt-1 text-[10px] text-muted-foreground/70 font-mono">
                            {epAired}
                          </p>
                        ) : null}
                      </div>
                    </button>
                  );
                })
              ) : (
                // Touch-Friendly Episode Grid
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2 pt-1">
                  {filteredButtons.map((b) => {
                    const isActive = b.key === selectedKey;
                    return (
                      <button
                        key={b.key}
                        type="button"
                        onClick={() => setSelectedKey(b.key)}
                        aria-pressed={isActive}
                        title={`Episode ${b.label}: ${b.episode.title}`}
                        className={`group relative flex h-12 flex-col items-center justify-center rounded-xl border text-sm font-bold transition-all hover:scale-105 ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25 ring-2 ring-primary/40"
                            : "border-border/70 bg-card/50 text-muted-foreground hover:border-primary/60 hover:bg-card hover:text-foreground"
                        }`}
                      >
                        <span>{b.label}</span>
                        {b.totalParts > 1 ? (
                          <span
                            className={`text-[9px] uppercase tracking-tighter ${
                              isActive ? "text-primary-foreground/80" : "text-muted-foreground/70"
                            }`}
                          >
                            P{b.partIndex}
                          </span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
