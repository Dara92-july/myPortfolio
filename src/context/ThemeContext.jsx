import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContextValue';

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = window.localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggle = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
