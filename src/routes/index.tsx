import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { Panel, SectionTitle } from "@/components/ui/section";
import { useSeasonTheme } from "@/lib/theme-context";
import { themes } from "@/lib/theme-data";
import { animeEntries, wikiEntries } from "@/lib/rezero-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Re:Zero Archive — Anime, Novels, Manga & Lore" },
      {
        name: "description",
        content:
          "A fan archive of Re:Zero: every season and film, light and web novel guides, manga adaptations, and a character and lore wiki with themed atmosphere per arc.",
      },
      { property: "og:title", content: "Re:Zero Archive — Anime, Novels, Manga & Lore" },
      {
        property: "og:description",
        content:
          "Seasons, films, novels, manga and a full character and lore wiki for Re:Zero − Starting Life in Another World.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { theme } = useSeasonTheme();
  const current = animeEntries.find((a) => a.key === theme.key)!;
  const featured = wikiEntries.filter((e) =>
    ["subaru-natsuki", "emilia", "return-by-death", "witch-of-envy"].includes(e.slug),
  );

  return (
    <>
      <Atmosphere />
      <SiteHeader />

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:pt-28">
          <p className="text-[11px] uppercase tracking-[0.34em] text-primary">
            {theme.kind === "film" ? "Now viewing film" : "Now viewing"} · {theme.years}
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-4xl leading-[1.1] text-foreground sm:text-6xl">
            {theme.name}
            <span className="block text-primary">{theme.subtitle}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {theme.atmosphere}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
            {current.synopsis}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/anime"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Watch order &amp; arcs
            </Link>
            <Link
              to="/wiki"
              className="rounded-full border border-border px-6 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              Enter the wiki
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <SectionTitle>Shift the atmosphere</SectionTitle>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each season and film has its own palette and light. Choose one and the whole
            archive changes with it.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t) => (
              <ThemeCard key={t.key} themeKey={t.key} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14">
          <SectionTitle>Four ways in</SectionTitle>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              {
                to: "/anime" as const,
                title: "Anime & films",
                text: "Three seasons, two OVA films, and where each one sits in the story.",
              },
              {
                to: "/novels" as const,
                title: "Novels",
                text: "Light novel volumes mapped against the free web novel, arc by arc.",
              },
              {
                to: "/manga" as const,
                title: "Manga",
                text: "Every serialised adaptation, its artist, and which arc it covers.",
              },
              {
                to: "/wiki" as const,
                title: "Characters & lore",
                text: "Return by Death, the Royal Selection, the Witch Cult, and the people caught between them.",
              },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="group">
                <Panel className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-display text-xl text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                  <span className="mt-4 inline-block text-sm text-primary">Open →</span>
                </Panel>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <SectionTitle>Start with these</SectionTitle>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((e) => (
              <Link key={e.slug} to="/wiki/$slug" params={{ slug: e.slug }}>
                <Panel className="h-full">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                    {e.tag}
                  </p>
                  <h3 className="font-display mt-2 text-lg text-foreground">{e.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.short}
                  </p>
                </Panel>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function ThemeCard({ themeKey }: { themeKey: (typeof themes)[number]["key"] }) {
  const { themeKey: active, setThemeKey } = useSeasonTheme();
  const t = themes.find((x) => x.key === themeKey)!;
  const isActive = active === themeKey;

  return (
    <button
      type="button"
      onClick={() => setThemeKey(t.key)}
      className={`rounded-xl border p-5 text-left transition-all duration-300 ${
        isActive
          ? "border-primary bg-card"
          : "border-border bg-card/50 hover:-translate-y-1 hover:bg-card"
      }`}
    >
      <div className="flex items-center gap-2">
        {Object.values(t.vars)
          .slice(0, 1)
          .concat([t.vars["--primary"]!, t.vars["--accent"]!])
          .map((c, i) => (
            <span
              key={i}
              className="h-4 w-4 rounded-full border border-border"
              style={{ background: c }}
            />
          ))}
      </div>
      <h3 className="font-display mt-4 text-lg text-foreground">{t.name}</h3>
      <p className="text-sm text-primary">{t.subtitle}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.atmosphere}</p>
    </button>
  );
}
