'use client';

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValueCard from "@/components/ValueCard";
import { Sparkles, Zap, Palette, Heart, ShieldCheck, Target, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  
  // Animaciones base
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="min-h-screen bg-brand-cream/20 dark:bg-brand-carbon selection:bg-brand-gold selection:text-white">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto z-10 relative">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Nuestra Historia
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-brand-carbon dark:text-white mb-6">
            De tu imaginación <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-wood to-brand-gold">
              a la realidad.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Somos un emprendimiento de la Mixteca dedicado a materializar ideas a través de la personalización, la sublimación y el diseño.
          </p>
        </motion.div>
      </section>

      {/* --- MISIÓN & VISIÓN (Grid Bicolor) --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta Misión */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white dark:bg-brand-graphite/40 border-l-4 border-brand-gold shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-brand-carbon dark:text-white">Nuestra Misión</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Materializar las ideas de nuestros clientes a través de productos personalizados de alta calidad, entregados con rapidez y a precios accesibles. Creamos el regalo perfecto cuidando cada detalle para superar expectativas.
            </p>
          </motion.div>

          {/* Tarjeta Visión (Futuro) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-brand-carbon text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-white/10 rounded-xl text-brand-gold">
                <TrendingUp size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold">Nuestra Visión</h2>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-1">A corto plazo (2027)</h3>
                <p className="text-gray-300 text-sm">Consolidarnos como la opción preferida en la región y establecer nuestro primer espacio físico dedicado.</p>
              </div>
              <div>
                <h3 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-1">A largo plazo (2031)</h3>
                <p className="text-gray-300 text-sm">Ser una empresa multidisciplinaria (Láser, CNC, Destilados) con productos de marca propia y distribución a gran escala.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- VALORES --- */}
      <section className="py-20 px-6 bg-white dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-carbon dark:text-white mb-4">Lo que nos define</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            <ValueCard 
              icon={<ShieldCheck size={28} />} 
              title="Calidad" 
              desc="Ofrecer lo mejor sin precios excesivos. Calidad accesible para todos." 
            />
            <ValueCard 
              icon={<Zap size={28} />} 
              title="Rapidez" 
              desc="Entregas en tiempo récord. Tu tiempo es valioso para nosotros." 
            />
            <ValueCard 
              icon={<Palette size={28} />} 
              title="Creatividad" 
              desc="Convertimos tu imaginación en productos tangibles y únicos." 
            />
            <ValueCard 
              icon={<Heart size={28} />} 
              title="Cercanía" 
              desc="Trato personalizado. Entendemos lo que necesitas." 
            />
            <ValueCard 
              icon={<Sparkles size={28} />} 
              title="Honestidad" 
              desc="Precios transparentes y servicio confiable en todo momento." 
            />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}