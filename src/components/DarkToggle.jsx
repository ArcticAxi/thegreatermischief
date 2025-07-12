import { useEffect, useState } from 'react';

export default function DarkToggle({ compact = false }) {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // If no saved preference, check OS preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setDarkMode(newTheme === 'dark');
  };



  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer px-4 py-2 rounded bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white"
    >
      {compact ? (darkMode ? '☀️' : '🌙') : darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}