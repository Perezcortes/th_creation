import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 bg-brand-cream dark:bg-brand-carbon text-brand-carbon dark:text-brand-cream">
      
      {/* Navegación temporal */}
      <nav className="w-full max-w-5xl flex justify-between items-center mb-16">
        <h1 className="text-2xl font-bold text-brand-wood dark:text-brand-gold">
          TH Creation
        </h1>
        <ThemeToggle />
      </nav>

      {/* Sección Hero */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col text-center">
        
        <div className="mb-8">
          {/* Logo Simulado */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-brand-gold bg-brand-carbon flex items-center justify-center shadow-lg shadow-brand-gold/20">
            <span className="text-4xl font-serif text-brand-gold font-bold">TH</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-brand-wood dark:text-brand-gold tracking-tight">
            DE TU IMAGINACIÓN <br />
            A LA REALIDAD
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4 opacity-90">
            Personalización y creación de productos únicos mediante sublimación y corte láser.
          </p>
        </div>

        {/* Botones de Acción (CTA) */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-lg font-bold bg-brand-gold text-brand-carbon hover:brightness-110 transition-all shadow-md">
            Ver Catálogo
          </button>
          <button className="px-6 py-3 rounded-lg font-bold border-2 border-brand-wood text-brand-wood dark:text-brand-gold dark:border-brand-gold hover:bg-brand-wood/10 transition-all">
            Contactar
          </button>
        </div>
      </div>

      {/* Sección de Precios (Ejemplo de contraste) */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Tarjeta 1 */}
        <div className="p-6 rounded-xl bg-white dark:bg-brand-graphite shadow-lg border-l-4 border-brand-gold">
          <h3 className="text-xl font-bold mb-2">Tazas Personalizadas</h3>
          <p className="text-3xl font-bold text-brand-wood dark:text-brand-gold">$50 MXN</p>
          <p className="text-sm mt-2 opacity-75">Entrega en 24 horas</p>
        </div>
        {/* Tarjeta 2 */}
        <div className="p-6 rounded-xl bg-white dark:bg-brand-graphite shadow-lg border-l-4 border-brand-wood">
          <h3 className="text-xl font-bold mb-2">Corte Láser</h3>
          <p className="text-3xl font-bold text-brand-wood dark:text-brand-gold">Cotizar</p>
          <p className="text-sm mt-2 opacity-75">Diseños únicos</p>
        </div>
      </div>
    </main>
  );
}