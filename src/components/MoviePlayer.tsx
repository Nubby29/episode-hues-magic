import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Film, Play, ExternalLink, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import type { AnimeEntry } from "@/lib/rezero-data";
import { animeEntries } from "@/lib/rezero-data";

interface MoviePlayerProps {
  entry: AnimeEntry;
}

export function MoviePlayer({ entry }: MoviePlayerProps) {
  // Available video sources: full film or trailer
  const [activeSource, setActiveSource] = useState<"full" | "trailer">(
    entry.fullVideoId ? "full" : "trailer"
  );

  const videoId = activeSource === "full" && entry.fullVideoId ? entry.fullVideoId : entry.trailerId;

  // Find all OVA/film entries for the film queue
  const films = animeEntries.filter(
    (e) => e.format.toLowerCase().includes("film") || e.format.toLowerCase().includes("ova")
  );
  const currentIndex = films.findIndex((f) => f.key === entry.key);
  const prevFilm = currentIndex > 0 ? films[currentIndex - 1] : null;
  const nextFilm = currentIndex < films.length - 1 ? films[currentIndex + 1] : null;

  return (
    <div className="space-y-6">
      {/* 2-Column Theater Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Video Theater & Movie Details */}
        <div className="lg:col-span-8 space-y-4">
          {/* Main Video Frame */}
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-black shadow-2xl ring-1 ring-white/10">
            <div className="aspect-video w-full bg-black">
              {videoId ? (
                <iframe
                  key={videoId}
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=0`}
                  title={`${entry.title} — ${activeSource === "full" ? "full film" : "official trailer"}`}
                  allow="accelerometer; autoplay; clipboard-write-edge; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
                  Video stream currently unavailable
                </div>
              )}
            </div>

            {/* Theater Playback Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 bg-card/90 backdrop-blur px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex h-7 shrink-0 items-center justify-center rounded-md bg-primary/20 px-2.5 text-xs font-bold text-primary ring-1 ring-primary/30">
                  {activeSource === "full" ? "Full Film" : "Official Trailer"}
                </span>
                <p className="truncate text-sm font-semibold text-foreground max-w-[220px] sm:max-w-md">
                  {entry.title}
                </p>
              </div>

              {/* Version & Navigation Controls */}
              <div className="flex items-center gap-2 shrink-0">
                {entry.fullVideoId && entry.trailerId && (
                  <div className="flex items-center rounded-lg border border-border/80 bg-secondary/50 p-0.5">
                    <button
                      type="button"
                      onClick={() => setActiveSource("full")}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        activeSource === "full"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Full Film
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSource("trailer")}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        activeSource === "trailer"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Trailer
                    </button>
                  </div>
                )}

                {prevFilm && (
                  <Link
                    to="/watch/$key"
                    params={{ key: prevFilm.key }}
                    className="inline-flex h-8 items-center gap-1 rounded-lg border border-border/80 bg-secondary/60 px-2.5 text-xs font-medium transition hover:border-primary/50 hover:bg-secondary"
                    title={`Previous: ${prevFilm.title}`}
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Prev Film</span>
                  </Link>
                )}

                {nextFilm && (
                  <Link
                    to="/watch/$key"
                    params={{ key: nextFilm.key }}
                    className="inline-flex h-8 items-center gap-1 rounded-lg border border-primary/50 bg-primary/15 px-2.5 text-xs font-semibold text-primary transition hover:bg-primary/25"
                    title={`Next: ${nextFilm.title}`}
                  >
                    <span className="hidden sm:inline">Next Film</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Film Info Card */}
          <div className="rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-mono font-bold text-primary">
                    {entry.format}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {entry.episodes}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {entry.title}
                </h3>
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                Premiered {entry.aired}
              </span>
            </div>

            {/* Synopsis */}
            <p className="text-sm leading-relaxed text-foreground/80 font-normal">
              {entry.synopsis}
            </p>

            {/* Timeline & Watch Note Callout */}
            {entry.watchNote && (
              <div className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-xs text-primary/90">
                <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <div>
                  <span className="font-semibold text-primary">Viewing Recommendation: </span>
                  <span>{entry.watchNote}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Films Queue & Streaming Sources Sidebar */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-20">
          {/* Films & OVAs Queue */}
          <div className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm p-4 space-y-3">
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-border/40">
              <div className="flex items-center gap-2">
                <Film className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Films & OVAs
                </h4>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                  {films.length}
                </span>
              </div>
            </div>

            {/* Film List */}
            <div className="space-y-2">
              {films.map((f) => {
                const isActive = f.key === entry.key;
                return (
                  <Link
                    key={f.key}
                    to="/watch/$key"
                    params={{ key: f.key }}
                    className={`group flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                      isActive
                        ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary/30"
                        : "border-border/60 bg-card/30 hover:border-primary/50 hover:bg-card/70"
                    }`}
                  >
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
                        <Film className="h-4 w-4" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-xs font-semibold ${
                          isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {f.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                        {f.synopsis}
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground/70 font-mono">
                        {f.episodes} · {f.aired}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Official Streaming Links Card */}
          <div className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm p-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground pb-2 border-b border-border/40">
              Official Streaming
            </h4>

            <div className="space-y-2">
              {entry.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-secondary/40 p-2.5 text-xs text-foreground transition-all hover:border-primary/60 hover:bg-secondary"
                >
                  <span className="font-medium">{link.label}</span>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    {link.free && (
                      <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                        Free tier
                      </span>
                    )}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </a>
              ))}

              {entry.fullVideoId && (
                <div className="rounded-xl border border-border/50 bg-card/30 p-2.5 text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Embedded player: </span>
                  Streamed legally via Muse Asia YouTube channel.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
