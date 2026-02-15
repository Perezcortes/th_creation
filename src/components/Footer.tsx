'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, MapPin, Heart, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-brand-cream via-amber-50 to-brand-cream dark:from-black dark:via-brand-carbon dark:to-zinc-950 text-brand-carbon dark:text-gray-400 py-16 border-t border-brand-wood/20 dark:border-brand-gold/20 overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
           style={{
             backgroundImage: `
               repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(184, 134, 11, 0.1) 40px, rgba(184, 134, 11, 0.1) 80px)
             `
           }}
      />

      {/* Blobs decorativos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-wood/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          
          {/* ========= COLUMNA 1: MARCA ========= */}
          <motion.div variants={fadeInUp}>
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-carbon to-zinc-800 dark:from-brand-gold dark:to-amber-600 flex items-center justify-center border-2 border-brand-gold shadow-lg">
                <span className="text-brand-gold dark:text-brand-carbon font-serif font-black text-xl">
                  TH
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold">
                TH Creation
              </h3>
            </motion.div>

            {/* Descripción */}
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-gray-700 dark:text-gray-400">
              <span className="font-semibold text-brand-wood dark:text-brand-gold">
                "De tu imaginación a la realidad"
              </span>
              <br /><br />
              Especialistas en personalización artesanal, corte láser y sublimación de alta calidad.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 rounded-full bg-brand-wood/10 dark:bg-brand-gold/10 flex items-center justify-center text-brand-wood dark:text-brand-gold hover:bg-brand-gold hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-carbon transition-all shadow-md"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ========= COLUMNA 2: ENLACES RÁPIDOS ========= */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-brand-carbon dark:text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-brand-gold"></span>
              Explorar
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#catalogo", label: "Catálogo" },
                { href: "#servicios", label: "Corte Láser" },
                { href: "#faq", label: "Preguntas Frecuentes" },
                { href: "#contacto", label: "Contacto" }
              ].map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-brand-wood dark:hover:text-brand-gold transition-colors"
                  >
                    <span className="w-0 h-px bg-brand-gold group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ========= COLUMNA 3: CONTACTO ========= */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-brand-carbon dark:text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-brand-gold"></span>
              Contacto
            </h4>
            
            <ul className="space-y-4 text-sm">
              {/* Ubicación */}
              <motion.li 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="text-brand-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700 dark:text-gray-400">
                  Huajuapan de León,<br />
                  Oaxaca, México
                </span>
              </motion.li>

              {/* Teléfono (opcional) */}
              <motion.li 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="text-brand-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a 
                  href="tel:+52123456789"
                  className="text-gray-700 dark:text-gray-400 hover:text-brand-gold transition-colors"
                >
                  +52 953 109 3465
                </a>
              </motion.li>

              {/* Email */}
              <motion.li 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="text-brand-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a 
                  href="mailto:thcreationoficial@gmail.com"
                  className="text-gray-700 dark:text-gray-400 hover:text-brand-gold transition-colors"
                >
                  thcreationoficial@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ========= SEPARADOR ========= */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-brand-wood/30 dark:via-brand-gold/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* ========= FOOTER INFERIOR ========= */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Copyright y links legales */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-600 dark:text-gray-500">
            <p className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} TH Creation.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Hecho con <Heart className="text-brand-gold inline" size={14} fill="currentColor" /> en México
              </span>
            </p>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-gray-400">|</span>
              <a 
                href="/aviso-de-privacidad" 
                className="hover:text-brand-gold transition-colors underline-offset-2 hover:underline"
              >
                Aviso de Privacidad
              </a>
              <span className="text-gray-400">•</span>
              <a 
                href="/terminos-y-condiciones" 
                className="hover:text-brand-gold transition-colors underline-offset-2 hover:underline"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>

          {/* Botón scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-brand-wood/10 dark:bg-brand-gold/10 hover:bg-brand-gold hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-carbon text-brand-wood dark:text-brand-gold text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Volver arriba</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp size={16} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}