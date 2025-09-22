import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // required for next-themes
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Product Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
