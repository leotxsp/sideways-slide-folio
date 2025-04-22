
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    // Initialize theme based on localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    updateTheme(savedTheme);
  }, []);
  
  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply theme classes to html and body
    document.documentElement.classList.toggle('light-mode', newTheme === 'light');
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.body.classList.toggle('light-mode', newTheme === 'light');
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    updateTheme(newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-8 left-8 z-50 w-10 h-10 rounded-full bg-dark border border-orange/50 flex items-center justify-center text-cream hover:bg-orange/10 transition-all light-mode:bg-cream light-mode:border-purple/50 light-mode:text-dark light-mode:hover:bg-purple/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
