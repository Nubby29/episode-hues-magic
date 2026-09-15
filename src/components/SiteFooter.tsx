import { Link } from "@tanstack/react-router";
import { useSeasonTheme } from "@/lib/theme-context";

export function SiteFooter() {
  const { theme } = useSeasonTheme();

  return (
    <footer className="relative z-10 mt-24 border-t border-border bg-background/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2">
        <div>
          <p className="font-display text-sm tracking-[0.3em] text-foreground">RE:ZERO</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A fan-made archive of the anime, novels, manga and lore of Re:Zero − Starting
            Life in Another World. Currently reading the world through{" "}
            <span className="text-foreground">{theme.name}</span>.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm sm:justify-end">
          <div className="flex flex-col gap-2">
            <Link to="/anime" className="text-muted-foreground hover:text-foreground">
              Anime &amp; Films
            </Link>
            <Link to="/novels" className="text-muted-foreground hover:text-foreground">
              Novels
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/manga" className="text-muted-foreground hover:text-foreground">
              Manga
            </Link>
            <Link to="/wiki" className="text-muted-foreground hover:text-foreground">
              Character &amp; lore wiki
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        Unofficial fan project. Re:Zero is created by Tappei Nagatsuki, illustrated by
        Shinichirou Otsuka.
      </div>
    </footer>
  );
}
