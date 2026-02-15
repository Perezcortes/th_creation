import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Importante para next-themes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta TH Creation
        brand: {
          gold: '#B8860B',      // Oro Envejecido (Títulos, CTA)
          wood: '#8B5A2B',      // Madera Cálida (Acentos)
          cream: '#E5D3B3',     // Crema Arena (Fondo claro)
          carbon: '#1A1A1A',    // Negro Carbono (Fondo oscuro)
          graphite: '#333333',  // Gris Grafito (Subtítulos)
        }
      },
    },
  },
  plugins: [],
};
export default config;