import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sliders,
  BookOpen,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface NovelReaderProps {
  title: string;
  subtitle?: string;
  sourceLabel?: string;
  originalUrl?: string;
  contentFile?: string;
  directText?: string;
  onBack: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  isEndOfArc?: boolean;
  arcTitle?: string;
  nextArcId?: string;
}

type ReaderTheme = "dark" | "sepia" | "oled" | "light";
type FontChoice = "serif" | "sans";

export function NovelReader({
  title,
  subtitle,
  sourceLabel = "Witch Cult Translations",
  originalUrl,
  contentFile,
  directText,
  onBack,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
  isEndOfArc,
  arcTitle,
  nextArcId = "arc-6",
}: NovelReaderProps) {
  const [content, setContent] = useState<string>(directText || "");
  const [loading, setLoading] = useState<boolean>(!directText && !!contentFile);
  const [error, setError] = useState<string | null>(null);

  // Reader typography & theme preferences
  const [fontSize, setFontSize] = useState<number>(18);
  const [fontChoice, setFontChoice] = useState<FontChoice>("serif");
  const [theme, setTheme] = useState<ReaderTheme>("dark");
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [readProgress, setReadProgress] = useState<number>(0);

  useEffect(() => {
    if (contentFile && !directText) {
      setLoading(true);
      setError(null);
      fetch(`/novels/${contentFile}`)
        .then((res) => {
          if (!res.ok) throw new Error("Could not load novel chapter");
          return res.json();
        })
        .then((data) => {
          setContent(data.content || "");
          setLoading(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to load chapter text. Please try again or open the external translation.");
          setLoading(false);
        });
    } else if (directText) {
      setContent(directText);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [contentFile, directText]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const pct = Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));
        setReadProgress(pct);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeClasses: Record<ReaderTheme, string> = {
    dark: "bg-[#0c0d12] text-[#d6d9e0] border-[#1e2230]",
    sepia: "bg-[#f5ede0] text-[#3d312a] border-[#e2d5c1]",
    oled: "bg-black text-[#eaeaea] border-neutral-900",
    light: "bg-[#ffffff] text-[#1c1c20] border-[#eaeaea]",
  };

  const textClasses = fontChoice === "serif" ? "font-serif" : "font-sans";

  return (
    <div className={`min-h-screen transition-colors duration-200 ${themeClasses[theme]}`}>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border/20">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Reader Navigation Header */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
          theme === "sepia"
            ? "border-[#decbb4] bg-[#f5ede0]/90 text-[#3d312a]"
            : theme === "light"
            ? "border-neutral-200 bg-white/90 text-neutral-900"
            : theme === "oled"
            ? "border-neutral-800 bg-black/90 text-white"
            : "border-border/60 bg-[#0c0d12]/90 text-foreground"
        }`}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium opacity-85 transition-opacity hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to directory</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-1.5 rounded-lg border border-border/40 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/80"
              title="Reader preferences"
            >
              <Sliders className="h-3.5 w-3.5" />
              <span>Reader Settings</span>
            </button>
            {originalUrl && (
              <a
                href={originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-lg border border-border/40 px-3 py-1.5 text-xs font-medium sm:inline-flex hover:text-primary"
                title="Open on Witch Cult Translations"
              >
                <span>WCT Source</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>

        {/* Reader Customization Flyout */}
        {showSettings && (
          <div className="border-t border-border/40 px-4 py-3 text-xs">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
              {/* Font Size */}
              <div className="flex items-center gap-2">
                <span className="opacity-70">Size:</span>
                <div className="flex items-center gap-1">
                  {[16, 18, 20, 24].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setFontSize(sz)}
                      className={`h-7 w-8 rounded text-xs font-bold transition-all ${
                        fontSize === sz
                          ? "bg-primary text-primary-foreground shadow"
                          : "border border-border/40 opacity-70 hover:opacity-100"
                      }`}
                    >
                      {sz === 16 ? "S" : sz === 18 ? "M" : sz === 20 ? "L" : "XL"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Family */}
              <div className="flex items-center gap-2">
                <span className="opacity-70">Typography:</span>
                <div className="flex rounded border border-border/40 p-0.5">
                  <button
                    onClick={() => setFontChoice("serif")}
                    className={`rounded px-2.5 py-1 text-xs font-serif ${
                      fontChoice === "serif" ? "bg-primary text-primary-foreground" : "opacity-75"
                    }`}
                  >
                    Serif
                  </button>
                  <button
                    onClick={() => setFontChoice("sans")}
                    className={`rounded px-2.5 py-1 text-xs font-sans ${
                      fontChoice === "sans" ? "bg-primary text-primary-foreground" : "opacity-75"
                    }`}
                  >
                    Sans
                  </button>
                </div>
              </div>

              {/* Palette */}
              <div className="flex items-center gap-2">
                <span className="opacity-70">Theme:</span>
                <div className="flex gap-1.5">
                  {[
                    { key: "dark", label: "Dark", bg: "#0c0d12", border: "#333" },
                    { key: "sepia", label: "Sepia", bg: "#f5ede0", border: "#decbb4" },
                    { key: "oled", label: "OLED", bg: "#000000", border: "#222" },
                    { key: "light", label: "Light", bg: "#ffffff", border: "#ddd" },
                  ].map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTheme(t.key as ReaderTheme)}
                      className={`flex h-6 items-center gap-1 rounded border px-2 text-[10px] uppercase tracking-wider ${
                        theme === t.key
                          ? "ring-2 ring-primary ring-offset-1"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: t.bg, borderColor: t.border }}
                    >
                      {theme === t.key && <Check className="h-2.5 w-2.5" />}
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reader Body Content */}
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {/* Chapter Title & Attribution */}
        <div className="mb-12 border-b border-border/30 pb-8 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {sourceLabel}
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-sm italic opacity-75">{subtitle}</p>}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-center opacity-70">
            <BookOpen className="h-8 w-8 animate-pulse text-primary" />
            <p className="mt-3 text-sm">Loading novel manuscript from Witch Cult...</p>
          </div>
        ) : error ? (
          <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-6 text-center">
            <p className="text-sm text-destructive">{error}</p>
            {originalUrl && (
              <a
                href={originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
              >
                <span>Read directly on Witch Cult Translations</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        ) : (
          <article
            className={`prose prose-invert max-w-none leading-relaxed transition-all ${textClasses}`}
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
          >
            {content.split("\n\n").map((para, idx) => {
              const trimmed = para.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("※") || trimmed.startsWith("Translated By") || trimmed.startsWith("ALL RIGHTS")) {
                return (
                  <div
                    key={idx}
                    className="my-6 rounded-lg border border-border/30 bg-muted/20 p-4 text-xs italic opacity-75"
                  >
                    {trimmed}
                  </div>
                );
              }
              return (
                <p key={idx} className="my-5 tracking-[0.01em]">
                  {trimmed}
                </p>
              );
            })}
          </article>
        )}

        {/* End of chapter / Arc Completion Hub */}
        {!loading && (
          <div className="mt-16 border-t border-border/40 pt-8">
            {isEndOfArc ? (
              <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-center md:p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {arcTitle || "Arc"} Completed!
                </h3>
                <p className="mt-2 text-sm opacity-80">
                  You've reached the end of this arc. To protect from spoilers and narrative leaps,
                  continue your journey with these curated options:
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      onBack();
                    }}
                    className="rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:border-primary"
                  >
                    Return to Chapter Directory
                  </button>
                  <Link
                    to="/watch/$key"
                    params={{ key: "season-1" }}
                    className="rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:border-primary"
                  >
                    Watch Anime Adaptation
                  </Link>
                  <button
                    onClick={() => {
                      onBack();
                    }}
                    className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
                  >
                    Explore Arc 6 (Post-Anime)
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <button
                  onClick={onPrev}
                  disabled={!hasPrev}
                  className={`flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-medium transition-all ${
                    hasPrev
                      ? "hover:border-primary hover:text-primary"
                      : "cursor-not-allowed opacity-30"
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous Chapter</span>
                </button>
                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  className={`flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-medium transition-all ${
                    hasNext
                      ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
                      : "cursor-not-allowed opacity-30"
                  }`}
                >
                  <span>Next Chapter</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
