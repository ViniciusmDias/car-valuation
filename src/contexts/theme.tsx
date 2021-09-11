import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface ThemeContextData {
  themeToggler(): void;
  theme: string;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  const setMode = useCallback((mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }, []);

  const themeToggler = useCallback(() => {
    return theme === 'dark' ? setMode('light') : setMode('dark');
  }, [setMode, theme]);

  return (
    <ThemeContext.Provider value={{ themeToggler, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
