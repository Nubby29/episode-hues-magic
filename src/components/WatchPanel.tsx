import { useState } from "react";
import type { SourceLink } from "@/lib/rezero-data";

interface WatchPanelProps {
  trailerId?: string | undefined;
  links: SourceLink[];
  title: string;
}

export function WatchPanel({ trailerId, links, title }: WatchPanelProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mt-6 space-y-4">
      {trailerId ? (
        playing ? (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1`}
              title={`${title} — official trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-secondary/60 px-4 py-8 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            <span aria-hidden className="text-primary">▶</span>
            Play the official trailer — streamed from YouTube
          </button>
        )
      ) : null}

      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          >
            {link.label}
            {link.free ? " · free tier available" : ""}
          </a>
        ))}
      </div>
    </div>
  );
}
