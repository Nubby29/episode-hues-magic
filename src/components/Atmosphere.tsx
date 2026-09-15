import { useSeasonTheme } from "@/lib/theme-context";

/** Ambient themed backdrop: sigil halo, drifting motes, vignette. */
export function Atmosphere() {
  const { themeKey } = useSeasonTheme();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="halo-glow absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full" />
      <div className="sigil-glow absolute bottom-[-18rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full" />
      <div className="rune-grid absolute inset-0 opacity-[0.5]" />
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={`${themeKey}-${i}`}
          className="mote"
          style={{
            left: `${(i * 7.3) % 100}%`,
            animationDelay: `${(i % 7) * 1.7}s`,
            animationDuration: `${16 + (i % 5) * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
