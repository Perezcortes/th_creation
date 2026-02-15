import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#B8860B',
          wood: '#8B5A2B',
          cream: '#E5D3B3',
          carbon: '#1A1A1A',
          graphite: '#333333',
        }
      },
    },
  },
  plugins: [],
};
export default config;