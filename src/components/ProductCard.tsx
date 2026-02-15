'use client';

import { motion } from "framer-motion";
import Image from "next/image"; // Importante: Usamos el componente Image
import { ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";

interface ProductProps {
  title: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
}

export default function ProductCard({ title, price, description, image, tag }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative rounded-3xl bg-white dark:bg-brand-graphite/40 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-500 border border-brand-wood/10 dark:border-white/5 overflow-hidden flex flex-col h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Efecto de brillo sutil en hover (fondo del card) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={isHovered ? { 
          backgroundPosition: ["0% 0%", "100% 100%"] 
        } : {}}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Etiqueta Opcional con animación */}
      {tag && (
        <motion.div 
          className="absolute top-4 right-4 z-20 bg-gradient-to-r from-brand-gold to-amber-500 text-brand-carbon text-[10px] uppercase font-black tracking-wider px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <span className="flex items-center gap-1">
            <Sparkles size={12} />
            {tag}
          </span>
        </motion.div>
      )}

      {/* --- ZONA DE IMAGEN (ACTUALIZADA) --- */}
      <div className="relative h-64 w-full bg-gradient-to-br from-brand-cream/30 to-amber-50/20 dark:from-black/60 dark:to-zinc-900/40 overflow-hidden flex items-center justify-center p-6">
        
        {/* Efecto de fondo en hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-wood/20 opacity-0"
          animate={isHovered ? { opacity: [0, 0.4, 0] } : { opacity: 0 }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Imagen Real con animación */}
        <motion.div
          className="relative w-full h-full" 
          animate={isHovered ? { scale: 1.1, rotate: 2 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain drop-shadow-xl z-10" // object-contain evita recortes, drop-shadow añade profundidad
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{
               backgroundImage: `
                 repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(184, 134, 11, 0.1) 20px, rgba(184, 134, 11, 0.1) 40px)
               `
             }}
        />
      </div>

      {/* --- INFO DEL PRODUCTO --- */}
      <div className="p-7 flex flex-col flex-grow relative z-10">
        {/* Título con animación de color */}
        <motion.h3 
          className="text-lg font-serif font-bold text-brand-carbon dark:text-white mb-3 leading-tight"
          animate={isHovered ? { color: "#8B5A2B" } : {}}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        {/* Descripción */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* Footer del card */}
        <div className="mt-auto flex items-center justify-between pt-5 border-t border-brand-wood/10 dark:border-white/5">
          {/* Precio con efecto */}
          <motion.div 
            className="flex flex-col"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
              Precio
            </span>
            <motion.span 
              className="text-2xl font-black text-brand-wood dark:text-brand-gold"
              animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              ${price}
            </motion.span>
          </motion.div>
          
          {/* Botón mejorado */}
          <motion.button 
            className="relative flex items-center gap-2 px-6 py-3 bg-brand-carbon dark:bg-brand-gold text-white dark:text-brand-carbon text-xs font-black uppercase tracking-wide rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efecto de brillo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              initial={{ x: "-200%" }}
              animate={isHovered ? { x: "200%" } : {}}
              transition={{ duration: 0.6 }}
            />
            
            <span className="relative">Pedir</span>
            <motion.span
              animate={isHovered ? { x: [0, 3, 0] } : {}}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
            >
              <ShoppingBag size={15} />
            </motion.span>
          </motion.button>
        </div>

        {/* Indicador de personalización */}
        <motion.div
          className="mt-4 text-center text-[10px] uppercase tracking-wider text-brand-gold/70 font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          Personalizable
        </motion.div>
      </div>

      {/* Borde brillante en hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(184, 134, 11, 0.3), transparent)",
          padding: "2px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}