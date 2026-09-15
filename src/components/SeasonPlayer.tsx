import { useMemo, useState } from "react";
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
      {/* Video Player Container */}
      <div className="overflow-hidden rounded-2xl border border-border bg-black shadow-2xl">
        <div className="aspect-video w-full bg-black">
          {selected ? (
            <iframe
              key={selected.videoId}
              src={`https://www.youtube-nocookie.com/embed/${selected.videoId}?rel=0&autoplay=0`}
              title={`${seasonTitle} — episode ${selected.episode.number}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="h-full w-full"
            />
          ) : null}
        </div>

        {/* Quick Player Bar: Now Playing + Prev/Next Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 bg-card/70 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 items-center justify-center rounded-md bg-primary/15 px-2.5 text-xs font-semibold text-primary">
              Ep {selected?.label}
              {selected && selected.totalParts > 1 ? ` (Part ${selected.partIndex}/${selected.totalParts})` : ""}
            </span>
            <p className="max-w-[200px] truncate text-sm font-medium text-foreground sm:max-w-md">
              {episode?.title}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!hasPrev}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-medium transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!hasNext}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-primary bg-primary/10 px-3 text-xs font-medium text-primary transition-colors hover:bg-primary/20 disabled:pointer-events-none disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Selected Episode Synopsis */}
      {episode?.summary ? (
        <div className="rounded-xl border border-border/70 bg-card/40 p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">
              <span className="text-primary mr-1.5 font-mono">#{selected?.label}</span>
              {episode.title}
            </h3>
            {aired ? (
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Aired {aired}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">
            {episode.summary}
          </p>
        </div>
      ) : null}

      {/* Episode Selector Header & View Toggle */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Select Episode
            </h3>
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              {buttons.length} available
            </span>
          </div>

          <div className="flex rounded-lg border border-border bg-secondary/50 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`rounded-md px-3 py-1 font-medium transition-colors ${
                viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`rounded-md px-3 py-1 font-medium transition-colors ${
                viewMode === "list"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              List with details
            </button>
          </div>
        </div>

        {/* View 1: Larger, Accessible Episode Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {buttons.map((b) => {
              const isActive = b.key === selectedKey;
              return (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setSelectedKey(b.key)}
                  aria-pressed={isActive}
                  title={`Episode ${b.label}: ${b.episode.title}`}
                  className={`group relative flex h-12 flex-col items-center justify-center rounded-xl border text-sm font-semibold transition-all hover:scale-105 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20 ring-2 ring-primary/40"
                      : "border-border bg-card/60 text-muted-foreground hover:border-primary/60 hover:bg-card hover:text-foreground"
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
        ) : (
          /* View 2: Detailed List View */
          <div className="space-y-2">
            {buttons.map((b) => {
              const isActive = b.key === selectedKey;
              const epAired = formatDate(b.episode.airdate);
              return (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setSelectedKey(b.key)}
                  aria-pressed={isActive}
                  className={`flex w-full items-start justify-between rounded-xl border p-3.5 text-left transition-all ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-sm"
                      : "border-border bg-card/40 hover:border-primary/50 hover:bg-card"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {b.label}
                    </span>
                    <div>
                      <p className={`text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                        {b.episode.title}
                      </p>
                      {b.episode.summary ? (
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                          {b.episode.summary}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  {epAired ? (
                    <span className="hidden shrink-0 text-xs text-muted-foreground sm:inline-block">
                      {epAired}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
