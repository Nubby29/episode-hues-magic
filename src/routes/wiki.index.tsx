import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { PageHeader, Panel } from "@/components/ui/section";
import { wikiEntries, type WikiKind } from "@/lib/rezero-data";

export const Route = createFileRoute("/wiki/")({
  head: () => ({
    meta: [
      { title: "Re:Zero Wiki — Characters, Witches and World Lore" },
      {
        name: "description",
        content:
          "Character profiles and world lore for Re:Zero: Subaru, Emilia, Rem, Beatrice, Echidna, Return by Death, the Royal Selection, the Witch Cult and more.",
      },
      { property: "og:title", content: "Re:Zero Character & Lore Wiki" },
      {
        property: "og:description",
        content:
          "Profiles and lore entries covering the people, powers and politics of Lugunica.",
      },
    ],
  }),
  component: WikiIndex,
});

const filters: { key: "all" | WikiKind; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "character", label: "Characters" },
  { key: "lore", label: "World & lore" },
];

function WikiIndex() {
  const [kind, setKind] = useState<"all" | WikiKind>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return wikiEntries.filter((e) => {
      const kindOk = kind === "all" || e.kind === kind;
      const qOk =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.short.toLowerCase().includes(q) ||
        e.tag.toLowerCase().includes(q);
      return kindOk && qOk;
    });
  }, [kind, query]);

  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10">
        <PageHeader
          eyebrow="Wiki"
          title="Characters, witches and world lore"
          lead="Spoiler-light profiles for the people of Lugunica and the systems that rule them."
        />

        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setKind(f.key)}
                  className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                    kind === f.key
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search names, powers, places…"
              aria-label="Search the wiki"
              className="ml-auto w-full max-w-xs rounded-full border border-input bg-card/60 px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((e) => (
              <Link key={e.slug} to="/wiki/$slug" params={{ slug: e.slug }}>
                <Panel className="h-full transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                      {e.tag}
                    </p>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {e.kind === "character" ? "Character" : "Lore"}
                    </span>
                  </div>
                  <h2 className="font-display mt-3 text-xl text-foreground">{e.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.short}
                  </p>
                </Panel>
              </Link>
            ))}
          </div>

          {results.length === 0 ? (
            <p className="mt-10 text-muted-foreground">
              Nothing found. Try a different name.
            </p>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
