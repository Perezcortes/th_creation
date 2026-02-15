'use client';

import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sparkles, Zap, PenTool, Heart, Clock, Palette } from 'lucide-react';
import { useRef } from "react";

// ============= ANIMACIONES AVANZADAS =============

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Cubic-bezier personalizado
    } 
  }
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);

  const products = [
    { id: 1, title: "Recuerdo de pareja", price: 100, description: "Edición limitada 14 de Febrero.", image: "/detalle.jpeg", tag: "Hot" },
    { id: 2, title: "Llavero personalizado", price: 50, description: "El regalo perfecto para compartir.", image: "/llavero.jpeg" },
    { id: 3, title: "Premio y reconocimiento", price: 150, description: "Premiación y recuerdos.", image: "/premio.jpeg" },
    { id: 4, title: "Casa mini personalizada", price: 2000, description: "Corte láser en madera.", image: "/casa.jpeg" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ========= HERO SECTION CON PARALLAX ========= */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Fondo Animado Premium */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-brand-cream via-brand-cream to-amber-50 dark:from-brand-carbon dark:via-brand-carbon dark:to-zinc-950"
        >
          {/* Blobs orgánicos animados */}
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-brand-gold/30 to-amber-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
          />
          
          <motion.div 
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-brand-wood/20 to-orange-300/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
          />
          
          <motion.div 
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-yellow-400/20 to-brand-gold/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
          />

          {/* Textura de ruido */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          
          {/* Patrón geométrico sutil */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, #8B5A2B05 1px, transparent 1px),
                   linear-gradient(to bottom, #8B5A2B05 1px, transparent 1px)
                 `,
                 backgroundSize: '80px 80px'
               }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge animado */}
            <motion.div 
              variants={fadeInScale}
              className="mb-8 flex justify-center"
            >
              <motion.span 
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(184, 134, 11, 0.3)" }}
                className="group relative px-6 py-2.5 rounded-full border-2 border-brand-gold/40 bg-gradient-to-r from-brand-gold/10 via-amber-500/5 to-brand-gold/10 text-brand-wood dark:text-brand-gold text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Palette size={14} className="animate-pulse" />
                  Diseño • Corte Láser • Sublimación
                </span>
                <motion.div 
                  className="absolute inset-0 rounded-full bg-brand-gold/10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
            </motion.div>

            {/* Título principal con efecto magnético */}
            <motion.h1 
              variants={fadeInUp} 
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-brand-carbon dark:text-white mb-8 leading-[0.85] tracking-tighter"
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Tu imaginación,
              </motion.span>
              <br />
              <motion.span 
                className="relative inline-block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-500 to-brand-wood animate-gradient bg-[length:200%_auto]">
                  hecha realidad.
                </span>
                {/* Decoración de línea */}
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </motion.span>
            </motion.h1>

            {/* Subtítulo con iconos */}
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                Transformamos ideas en objetos tangibles con acabados de{' '}
                <span className="font-semibold text-brand-wood dark:text-brand-gold">alta calidad</span>.
              </p>
              <motion.div 
                className="flex items-center justify-center gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-brand-gold/20">
                  <Clock size={18} className="text-brand-gold" />
                  <span className="text-sm font-bold text-brand-carbon dark:text-white">24 horas</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-brand-gold/20">
                  <Heart size={18} className="text-brand-gold" />
                  <span className="text-sm font-bold text-brand-carbon dark:text-white">Hecho con amor</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Botones mejorados con efectos */}
            <motion.div 
              variants={fadeInUp} 
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <motion.a 
                href="#catalogo" 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-brand-carbon dark:bg-brand-gold text-white dark:text-brand-carbon font-bold rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Efecto de brillo animado */}
                <motion.div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center justify-center gap-3 text-lg">
                  Explorar Catálogo 
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={22}/>
                  </motion.span>
                </span>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/xxx" 
                whileHover={{ scale: 1.05, borderColor: "rgba(184, 134, 11, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-brand-wood/30 dark:border-white/20 text-brand-carbon dark:text-white font-bold rounded-2xl hover:bg-brand-wood/5 dark:hover:bg-white/5 transition-all text-lg backdrop-blur-sm"
              >
                Cotizar Proyecto
              </motion.a>
            </motion.div>

            {/* Indicador de scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-brand-wood/50 dark:text-brand-gold/50"
              >
                <span className="text-xs font-bold tracking-widest uppercase">Descubre más</span>
                <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center">
                  <motion.div 
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-current rounded-full mt-2"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========= BENTO GRID MEJORADO ========= */}
      <section className="py-32 px-6 bg-gradient-to-b from-white/50 to-brand-cream/30 dark:from-black/20 dark:to-brand-carbon/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Título de sección */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-carbon dark:text-white mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Tres razones que nos hacen únicos
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]"
          >
            {/* Tarjeta 1: Velocidad (Grande) */}
            <motion.div 
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
              className="md:col-span-2 rounded-3xl p-10 bg-gradient-to-br from-brand-carbon via-zinc-900 to-zinc-800 text-white relative overflow-hidden group cursor-pointer"
            >
              {/* Efecto de luz */}
              <motion.div 
                className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full mix-blend-overlay filter blur-3xl opacity-10"
                whileHover={{ opacity: 0.3, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icono flotante */}
              <motion.div
                animate={floatingAnimation}
                className="mb-6"
              >
                <Zap className="text-brand-gold" size={56} strokeWidth={2} />
              </motion.div>
              
              <h3 className="text-5xl font-serif font-bold mb-4 leading-tight">
                Entrega Flash <span className="text-brand-gold"></span>
              </h3>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                ¿Lo olvidaste? No pasa nada. Nuestro sistema optimizado nos permite entregar pedidos urgentes en{' '}
                <span className="text-brand-gold font-bold">menos de 24 horas</span>.
              </p>
              
              {/* Badge */}
              <motion.div 
                className="absolute bottom-8 right-8 px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl text-sm font-mono border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-brand-gold font-bold">⏱</span> Tiempos récord
              </motion.div>
            </motion.div>

            {/* Tarjeta 2: Precio */}
            <motion.div 
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5, borderColor: "rgba(184, 134, 11, 0.4)" }}
              className="rounded-3xl p-8 bg-gradient-to-br from-brand-cream to-amber-50 dark:from-brand-graphite dark:to-zinc-800 border-2 border-brand-wood/10 flex flex-col justify-center relative group overflow-hidden cursor-pointer"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl"
              />
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <span className="text-7xl font-black text-brand-wood dark:text-brand-gold block mb-2">
                  $50
                </span>
                <div className="w-16 h-1 bg-brand-gold rounded-full mb-4" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-brand-carbon dark:text-white mb-2">
                Precio Estudiante
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Calidad premium sin precios inflados. Accesible para todos.
              </p>
            </motion.div>

            {/* Tarjeta 3: Personalización */}
            <motion.div 
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0 25px 50px -12px rgba(184, 134, 11, 0.25)" }}
              className="rounded-3xl p-8 bg-white dark:bg-gradient-to-br dark:from-brand-carbon dark:to-zinc-900 border border-gray-200 dark:border-brand-wood/20 flex flex-col justify-center shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <PenTool className="text-brand-wood dark:text-brand-gold mb-5" size={40} strokeWidth={2} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-brand-carbon dark:text-white mb-3">
                100% Personalizable
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Corte láser, vinil y sublimación a tu medida. Tu imaginación es el límite.
              </p>
            </motion.div>

            {/* Tarjeta 4: Colección 14 de Febrero (Grande) */}
            <motion.div 
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
              className="md:col-span-2 rounded-3xl p-10 bg-gradient-to-br from-brand-gold via-amber-500 to-yellow-600 relative overflow-hidden flex items-center justify-between group cursor-pointer"
            >
              <div className="z-10">
                <motion.h3 
                  className="text-5xl font-serif font-bold text-brand-carbon mb-3"
                  whileHover={{ x: 5 }}
                >
                  Colección 14 de Febrero
                </motion.h3>
                <p className="text-brand-carbon/90 font-semibold text-lg mb-6">
                  Diseños exclusivos para sorprender a quien más quieres.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-brand-carbon text-white rounded-full font-bold text-sm shadow-2xl"
                >
                  Ver Colección →
                </motion.button>
              </div>
              
              {/* Patrón decorativo */}
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 mix-blend-multiply"
                   style={{
                     backgroundImage: `
                       repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)
                     `
                   }}
              />
              
              {/* Icono animado */}
              <motion.div
                animate={{
                  rotate: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-4 right-4"
              >
                <Sparkles className="text-white/60" size={140} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========= PRODUCTOS CON REVEAL ========= */}
      <section id="catalogo" className="py-28 px-6 max-w-7xl mx-auto">
        {/* Título decorativo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent to-brand-gold flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <h2 className="text-5xl font-serif font-bold text-brand-carbon dark:text-brand-gold">
              Favoritos del Mes
            </h2>
            <motion.div 
              className="h-px bg-gradient-to-l from-transparent to-brand-gold flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Productos más pedidos en febrero
          </p>
        </motion.div>

        {/* Grid de productos */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInScale}
              custom={index}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ¿Necesitas algo único y personalizado?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-brand-wood to-brand-gold text-white font-bold rounded-full shadow-xl"
          >
            Cotizar mi proyecto →
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}