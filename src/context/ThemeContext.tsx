import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'pink' | 'lavender' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('shravani-theme');
    if (saved === 'pink' || saved === 'lavender' || saved === 'dark') {
      return saved;
    }
    return 'pink';
  });

  useEffect(() => {
    localStorage.setItem('shravani-theme', theme);
    const root = document.documentElement;
    root.classList.remove('theme-pink', 'theme-lavender', 'theme-dark');
    root.classList.add(`theme-${theme}`);
    
    // Also toggle dark class for tailwind
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'pink') setTheme('lavender');
    else if (theme === 'lavender') setTheme('dark');
    else setTheme('pink');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
