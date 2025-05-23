import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#088328',
        
        'secondary': '#8b5cf6',
        'accent': '#10b981',
        'neutral': '#737373',
      },
    },
  },
  plugins: [],
};

export default config; 