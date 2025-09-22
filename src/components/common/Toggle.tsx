'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function ToggleButton() {
  const [mount, setMount] = useState(false);
  const { theme, setTheme } = useTheme();

  const currentTheme = theme;

  useEffect(() => {
    setMount(true);
  }, []);

  console.log(currentTheme);

  return mount ? (
    <button
      onClick={() => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      }}
      className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none  focus:ring-offset-1 ${
        currentTheme === 'dark' ? 'bg-gray-400' : 'bg-gray-400'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  ) : null;
}
