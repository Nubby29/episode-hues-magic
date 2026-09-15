import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface PosterCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  aspect?: "2/3" | "16/9";
  showPlayOnHover?: boolean;
  priority?: boolean;
}

export function PosterCard({
  src,
  alt,
  title,
  subtitle,
  badge,
  className,
  aspect = "2/3",
  showPlayOnHover = false,
}: PosterCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 transition-all duration-500",
        "hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/20",
        aspect === "2/3" ? "aspect-[2/3]" : "aspect-video",
        className,
      )}
    >
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-muted/60 flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
            Re:Zero
          </span>
        </div>
      )}

      {/* Poster Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "h-full w-full object-cover object-center transition-all duration-700 will-change-transform group-hover:scale-105",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Ambient Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

      {/* Floating Badge */}
      {badge && (
        <div className="absolute left-3 top-3 z-10">
          <span className="rounded-full border border-border/80 bg-background/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-md shadow-sm">
            {badge}
          </span>
        </div>
      )}

      {/* Hover Play Icon Overlay */}
      {showPlayOnHover && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </div>
        </div>
      )}

      {/* Text Info Overlay (Optional) */}
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
          {title && (
            <h4 className="font-display text-base font-semibold text-foreground line-clamp-1 drop-shadow-sm">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className="mt-0.5 text-xs text-primary/90 font-medium line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
