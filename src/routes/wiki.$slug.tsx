import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Atmosphere } from "@/components/Atmosphere";
import { Panel } from "@/components/ui/section";
import { wikiEntries, wikiMap } from "@/lib/rezero-data";

export const Route = createFileRoute("/wiki/$slug")({
  loader: ({ params }) => {
    const entry = wikiMap[params.slug];
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Entry unavailable — Re:Zero Wiki" }, { name: "robots", content: "noindex" }],
      };
    }
    const { entry } = loaderData;
    const title = `${entry.name} — Re:Zero Wiki`;
    return {
      meta: [
        { title },
        { name: "description", content: entry.short },
        { property: "og:title", content: title },
        { property: "og:description", content: entry.short },
      ],
    };
  },
  notFoundComponent: EntryNotFound,
  component: WikiEntryPage,
});

function WikiEntryPage() {
  const { entry } = Route.useLoaderData();
  const related = entry.related
    .map((slug) => wikiMap[slug])
    .filter((e): e is (typeof wikiEntries)[number] => Boolean(e));

  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10 mx-auto max-w-4xl px-5 pb-10 pt-16">
        <Link to="/wiki" className="text-sm text-primary hover:underline">
          ← Back to the wiki
        </Link>

        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-primary">
          {entry.tag} · {entry.kind === "character" ? "Character" : "Lore"}
        </p>
        <h1 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">
          {entry.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{entry.short}</p>

        <Panel className="mt-8">
          <dl className="grid gap-4 sm:grid-cols-3">
            {entry.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        <div className="mt-10 space-y-5">
          {entry.body.map((p) => (
            <p key={p.slice(0, 24)} className="leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
        </div>

        {related.length ? (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-foreground">See also</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} to="/wiki/$slug" params={{ slug: r.slug }}>
                  <Panel className="h-full">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                      {r.tag}
                    </p>
                    <h3 className="font-display mt-2 text-lg text-foreground">{r.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.short}</p>
                  </Panel>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}

function EntryNotFound() {
  return (
    <>
      <Atmosphere />
      <SiteHeader />
      <main className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl text-foreground">No such entry</h1>
        <p className="mt-3 text-muted-foreground">
          That page has been eaten by Gluttony. Try the index instead.
        </p>
        <Link
          to="/wiki"
          className="mt-7 inline-block rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground"
        >
          Browse the wiki
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
