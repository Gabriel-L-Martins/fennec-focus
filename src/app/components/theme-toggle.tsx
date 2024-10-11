'use client'

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={switchTheme} className="btn btn-sm btn-ghost">
      {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
