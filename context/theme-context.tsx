'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

import { DEFAULT_THEME } from '@/lib/data';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = DEFAULT_THEME || (window.localStorage.getItem('theme') as Theme | null);

    // if (localTheme) {
    //   setTheme(localTheme);

    //   if (localTheme === "dark") {
    //     document.documentElement.classList.add("dark");
    //   }
    // } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme(localTheme);
    document.documentElement.classList.add(localTheme);
    // }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}
