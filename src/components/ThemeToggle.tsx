import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>('dark');

  const changeTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const newTheme = theme === 'system' ? systemTheme : theme;
    setCurrentTheme(newTheme ?? 'light');
  }, [theme, systemTheme, currentTheme]);

  return (
    <>
      <button onClick={changeTheme} className="text-neutral-700 dark:text-neutral-400 hover:opacity-70 transition-all">
        {currentTheme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </>
  );
}
