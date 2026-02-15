import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// Fuente para Títulos (Elegante, Artesanal)
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

// Fuente para Texto (Moderna, Geométrica)
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TH Creation | De tu imaginación a la realidad",
  description: "Diseño personalizado y corte láser premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-brand-cream dark:bg-brand-carbon text-brand-carbon dark:text-brand-cream selection:bg-brand-gold selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}