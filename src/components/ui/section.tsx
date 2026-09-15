import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pb-10 pt-16">
      <p className="text-[11px] uppercase tracking-[0.32em] text-primary">{eyebrow}</p>
      <h1 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-2xl text-foreground sm:text-3xl">{children}</h2>
  );
}
