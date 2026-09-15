import { useMemo, useState } from "react";
import type { Episode } from "@/lib/rezero-episodes";

interface SeasonPlayerProps {
  episodes: Episode[];
  seasonTitle: string;
}

interface EpisodeButton {
  key: string;
  label: string;
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
  // One button per playable video part. Multi-part episodes become 1A, 1B, ...
  const buttons = useMemo<EpisodeButton[]>(() => {
    const list: EpisodeButton[] = [];
    for (const episode of episodes) {
      const ids = episode.videoIds ?? [];
      ids.forEach((videoId, i) => {
        const base = String(episode.number);
        const label =
          ids.length > 1 ? `${base}${String.fromCharCode(65 + i)}` : base;
        list.push({
          key: `${episode.number}-${i}`,
          label,
          episode,
          videoId,
        });
      });
    }
    return list;
  }, [episodes]);

  const [selectedKey, setSelectedKey] = useState<string | null>(
    buttons[0]?.key ?? null,
  );
  const selected = buttons.find((b) => b.key === selectedKey) ?? null;

  if (buttons.length === 0) return null;

  const episode = selected?.episode ?? null;
  const aired = episode ? formatDate(episode.airdate) : null;

  return (
    <div>
      {/* Player */}
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-black">
        {selected ? (
          <iframe
            key={selected.videoId}
            src={`https://www.youtube-nocookie.com/embed/${selected.videoId}?rel=0`}
            title={`${seasonTitle} — episode ${selected.episode.number}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="h-full w-full"
          />
        ) : null}
      </div>

      {/* Episode buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {buttons.map((b) => (
          <button
            key={b.key}
            type="button"
            onClick={() => setSelectedKey(b.key)}
            aria-pressed={b.key === selectedKey}
            className={`min-w-9 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors ${
              b.key === selectedKey
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Selected episode details */}
      {episode ? (
        <div className="mt-5 border-t border-border pt-4">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-base font-medium text-foreground">
              <span className="font-display mr-2 text-primary">
                {String(episode.number).padStart(2, "0")}
              </span>
              {episode.title}
            </h3>
            {aired ? (
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {aired}
              </span>
            ) : null}
          </div>
          {episode.summary ? (
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              {episode.summary}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
