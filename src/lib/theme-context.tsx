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
const AUTO_THEME_STORAGE_KEY = "rezero-auto-theme";

interface ThemeContextValue {
  theme: SeasonTheme;
  themeKey: ThemeKey;
  setThemeKey: (key: ThemeKey) => void;
  autoTheme: boolean;
  setAutoTheme: (enabled: boolean) => void;
  syncThemeIfEnabled: (key: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function SeasonThemeProvider({ children }: { children: ReactNode }) {
  const [themeKey, setKey] = useState<ThemeKey>(defaultThemeKey);
  const [autoTheme, setAuto] = useState<boolean>(true);

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
      if (storedTheme && storedTheme in themeMap) {
        setKey(storedTheme);
      }
      const storedAuto = window.localStorage.getItem(AUTO_THEME_STORAGE_KEY);
      if (storedAuto !== null) {
        setAuto(storedAuto === "true");
      }
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setThemeKey = useCallback((key: ThemeKey) => {
    setKey(key);
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setAutoTheme = useCallback((enabled: boolean) => {
    setAuto(enabled);
    try {
      window.localStorage.setItem(AUTO_THEME_STORAGE_KEY, String(enabled));
    } catch {
      /* storage unavailable */
    }
  }, []);

  const syncThemeIfEnabled = useCallback(
    (key: ThemeKey) => {
      if (!autoTheme) return;
      if (key in themeMap && key !== themeKey) {
        setThemeKey(key);
      }
    },
    [autoTheme, themeKey, setThemeKey],
  );

  const theme = themeMap[themeKey];
  const value = useMemo(
    () => ({
      theme,
      themeKey,
      setThemeKey,
      autoTheme,
      setAutoTheme,
      syncThemeIfEnabled,
    }),
    [theme, themeKey, setThemeKey, autoTheme, setAutoTheme, syncThemeIfEnabled],
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

const defaultContextValue: ThemeContextValue = {
  theme: themeMap[defaultThemeKey],
  themeKey: defaultThemeKey,
  setThemeKey: () => {},
  autoTheme: true,
  setAutoTheme: () => {},
  syncThemeIfEnabled: () => {},
};

export function useSeasonTheme() {
  const ctx = useContext(ThemeContext);
  return ctx ?? defaultContextValue;
}
