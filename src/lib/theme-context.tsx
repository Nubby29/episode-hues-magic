import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  defaultThemeKey,
  themeMap,
  type SeasonTheme,
  type ThemeKey,
} from "./theme-data";

const STORAGE_KEY = "rezero-theme";

interface ThemeContextValue {
  theme: SeasonTheme;
  themeKey: ThemeKey;
  setThemeKey: (key: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function SeasonThemeProvider({ children }: { children: ReactNode }) {
  const [themeKey, setKey] = useState<ThemeKey>(defaultThemeKey);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
    if (stored && stored in themeMap) setKey(stored);
  }, []);

  const setThemeKey = useCallback((key: ThemeKey) => {
    setKey(key);
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const theme = themeMap[themeKey];
  const value = useMemo(
    () => ({ theme, themeKey, setThemeKey }),
    [theme, themeKey, setThemeKey],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        data-theme={themeKey}
        style={theme.vars as CSSProperties}
        className="min-h-screen bg-background text-foreground transition-colors duration-700"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useSeasonTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useSeasonTheme must be used inside SeasonThemeProvider");
  return ctx;
}
