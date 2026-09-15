import { useState } from "react";
import type { Episode } from "@/lib/rezero-episodes";

interface EpisodeGuideProps {
  episodes: Episode[];
  seasonTitle: string;
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

export function EpisodeGuide({ episodes, seasonTitle }: EpisodeGuideProps) {
  const [open, setOpen] = useState(false);

  if (episodes.length === 0) return null;

  return (
    <div className="mt-6 border-t border-border pt-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left text-xs uppercase tracking-[0.24em] text-primary transition-colors hover:text-foreground"
      >
        <span>Episode previews · {episodes.length} episodes</span>
        <span aria-hidden className="text-base leading-none">
          {open ? "−" : "+"}
        </span>
      </button>

      {open ? (
        <ol className="mt-5 space-y-3">
          {episodes.map((episode) => {
            const aired = formatDate(episode.airdate);
            return (
              <li
                key={episode.number}
                className="rounded-lg border border-border bg-secondary/40 p-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-sm font-medium text-foreground">
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

                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                    episode.previewQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <span aria-hidden className="text-primary">
                    ▶
                  </span>
                  Official preview for {seasonTitle} episode {episode.number}
                </a>
              </li>
            );
          })}
        </ol>
      ) : null}
    </div>
  );
}
