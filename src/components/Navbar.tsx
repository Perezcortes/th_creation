'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ShoppingBag, Home, User, Phone, MessageCircle, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{ 
        opacity: navOpacity,
        backdropFilter: `blur(${navBlur}px)`,
      }}
      className={`
        fixed w-full z-50 top-0 start-0 
        transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-white/90 dark:bg-brand-carbon/95 shadow-xl border-b border-brand-wood/20 dark:border-white/10' 
          : 'bg-white/70 dark:bg-brand-carbon/80 border-b border-brand-wood/10 dark:border-white/5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        
        {/* LOGO con animación */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            className="relative w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center bg-gradient-to-br from-brand-carbon to-zinc-800 text-brand-gold font-serif font-bold text-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative z-10">TH</span>
            
            {/* Efecto de brillo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Partículas decorativas */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="absolute top-1 right-1 text-brand-gold/30" size={8} />
              <Sparkles className="absolute bottom-1 left-1 text-brand-gold/30" size={6} />
            </motion.div>
          </motion.div>
          
          <motion.span 
            className="self-center text-xl font-serif font-bold tracking-tight text-brand-carbon dark:text-brand-cream"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            TH Creation
          </motion.span>
        </Link>

        {/* BOTONES ESCRITORIO */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/" 
              className="relative text-brand-carbon/80 dark:text-brand-cream/80 hover:text-brand-gold dark:hover:text-brand-gold transition-colors group"
            >
              Inicio
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"
              />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#catalogo" 
              className="relative text-brand-carbon/80 dark:text-brand-cream/80 hover:text-brand-gold dark:hover:text-brand-gold transition-colors group"
            >
              Catálogo
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"
              />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/nosotros" 
              className="relative text-brand-carbon/80 dark:text-brand-cream/80 hover:text-brand-gold dark:hover:text-brand-gold transition-colors group"
            >
              Nosotros
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"
              />
            </Link>
          </motion.div>
          
          <div className="h-5 w-px bg-brand-wood/20 dark:bg-white/20 mx-2"></div>
          
          <ThemeToggle />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="https://wa.me/521234567890" 
              className="relative flex items-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider text-brand-carbon bg-brand-gold rounded-full overflow-hidden shadow-lg group"
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: "-200%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              
              <MessageCircle size={16} className="relative z-10" />
              <span className="relative z-10">Contactar</span>
            </Link>
          </motion.div>
        </div>

        {/* MENÚ MÓVIL (HAMBURGUESA) */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 justify-center text-brand-wood dark:text-brand-gold hover:bg-brand-wood/10 rounded-lg focus:outline-none transition-colors"
            aria-label="Abrir menú"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* DROPDOWN MÓVIL con animación */}
        <motion.div
          initial={false}
          animate={isOpen ? { 
            height: "auto", 
            opacity: 1,
            y: 0
          } : { 
            height: 0, 
            opacity: 0,
            y: -20
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full md:hidden overflow-hidden"
        >
          <motion.ul 
            className="flex flex-col space-y-2 pt-4 border-t border-brand-wood/10 mt-4"
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.1 }
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            {[
              { href: "/", icon: Home, label: "Inicio" },
              { href: "#catalogo", icon: ShoppingBag, label: "Catálogo" },
              { href: "/nosotros", icon: User, label: "Nosotros" },
              { href: "#contacto", icon: Phone, label: "Contacto" }
            ].map((item) => (
              <motion.li
                key={item.href}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 }
                }}
              >
                <Link 
                  href={item.href} 
                  className="flex items-center gap-3 py-3 px-4 text-brand-carbon dark:text-white rounded-xl hover:bg-brand-gold/10 hover:text-brand-wood dark:hover:text-brand-gold transition-all font-medium group"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon 
                    size={18} 
                    className="text-brand-gold group-hover:scale-110 transition-transform" 
                  />
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}