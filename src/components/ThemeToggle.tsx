import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(currentTheme === 'light' ? 'dark' : 'light');

  // We must keep track of our own 'currentTheme' variable to fix conflicts with Next.JS' hydration
  const [currentTheme, setCurrentTheme] = useState<string | undefined>('dark');
  useEffect(() => setCurrentTheme(theme), [theme, currentTheme]);

  return (
    <>
      <button onClick={changeTheme} className="text-neutral-700 transition-all hover:opacity-70 dark:text-neutral-400">
        {currentTheme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </>
  );
}
