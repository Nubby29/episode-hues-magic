import { useState } from "react";

/** Official Muse Asia full-series playlist (licensed English-subtitled uploads). */
export const MUSE_ASIA_PLAYLIST_ID = "PLwLSw1_eDZl3RN7t6wesJqlUkSUN6FHKF";

export const musePlaylistUrl = `https://www.youtube.com/playlist?list=${MUSE_ASIA_PLAYLIST_ID}`;

export function SeriesPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="space-y-3">
      {playing ? (
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/videoseries?list=${MUSE_ASIA_PLAYLIST_ID}&autoplay=1&rel=0`}
            title="Re:Zero full series — Muse Asia official playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border border-border bg-secondary/50 px-4 text-center transition-colors hover:border-primary"
        >
          <span aria-hidden className="text-3xl text-primary">
            ▶
          </span>
          <span className="text-sm text-foreground">
            Play the full series — Seasons 1 to 4, English subtitled
          </span>
          <span className="text-xs text-muted-foreground">
            Streamed from Muse Asia's official YouTube channel. Use the player's list
            button to jump between episodes.
          </span>
        </button>
      )}

      <p className="text-xs text-muted-foreground">
        Episode availability is set by Muse Asia and can differ by country.{" "}
        <a
          href={musePlaylistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          Open the playlist on YouTube
        </a>
        .
      </p>
    </div>
  );
}
