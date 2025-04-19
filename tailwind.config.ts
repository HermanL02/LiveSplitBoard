import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        DEFAULT: '#000000',
        dark: {
          primary: '#1a1a1a',
          secondary: '#2d2d2d',
          tertiary: '#3d3d3d',
        },
      },
    },
  },
  plugins: [],
};

export default config;
