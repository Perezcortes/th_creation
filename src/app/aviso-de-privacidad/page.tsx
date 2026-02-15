'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function AvisoPrivacidad() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-cream dark:from-brand-carbon dark:via-zinc-900 dark:to-brand-carbon">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-brand-gold/10 border border-brand-gold/30"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="text-brand-gold" size={24} />
              <span className="text-brand-wood dark:text-brand-gold font-bold tracking-wider uppercase text-sm">
                Protección de Datos
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-black text-brand-carbon dark:text-white mb-6">
              Aviso de Privacidad
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              En TH Creation valoramos tu confianza y nos comprometemos a proteger tu información personal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido */}
      <section className="pb-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Fecha de última actualización */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-2 mb-8 text-sm text-gray-600 dark:text-gray-400"
          >
            <Calendar size={16} className="text-brand-gold" />
            <span>Última actualización: 15 de febrero de 2026</span>
          </motion.div>

          {/* Sección 1 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                1. Identidad y Domicilio del Responsable
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-brand-carbon dark:text-white">TH Creation</strong>, con domicilio en Huajuapan de León, Oaxaca, México, es responsable del uso y protección de sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
              </p>
            </div>
          </motion.section>

          {/* Sección 2 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                2. Datos Personales que Recabamos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span><strong>Datos de identificación:</strong> Nombre completo, edad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span><strong>Datos de contacto:</strong> Teléfono, correo electrónico, dirección de entrega</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span><strong>Datos de redes sociales:</strong> Perfil de Instagram, Facebook, WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span><strong>Datos comerciales:</strong> Historial de pedidos, preferencias de productos</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Sección 3 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                3. Finalidades del Tratamiento de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong className="text-brand-carbon dark:text-white">Finalidades Primarias (necesarias):</strong>
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Procesar y entregar sus pedidos personalizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Comunicarnos con usted sobre el estado de su pedido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Coordinar la entrega de productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Emitir comprobantes de pago</span>
                </li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong className="text-brand-carbon dark:text-white">Finalidades Secundarias (opcionales):</strong>
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Enviarle promociones y ofertas especiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Informarle sobre nuevos productos y colecciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">•</span>
                  <span>Realizar estudios de mercado y mejora de servicios</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Sección 4 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                4. Derechos ARCO
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al uso de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de los medios indicados al final de este documento.
              </p>
            </div>
          </motion.section>

          {/* Contacto */}
          <motion.section variants={fadeInUp}>
            <div className="bg-gradient-to-br from-brand-gold/10 to-amber-500/5 dark:from-brand-gold/20 dark:to-amber-900/10 rounded-2xl p-8 border-2 border-brand-gold/30">
              <h3 className="text-xl font-bold text-brand-carbon dark:text-white mb-6">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="text-brand-gold mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-brand-carbon dark:text-white mb-1">
                      Correo Electrónico
                    </p>
                    <a 
                      href="mailto:contacto@thcreation.com"
                      className="text-sm text-brand-wood dark:text-brand-gold hover:underline"
                    >
                      contacto@thcreation.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-brand-gold mt-1" size={20} />
                  <div>
                    <p className="text-sm font-semibold text-brand-carbon dark:text-white mb-1">
                      Teléfono
                    </p>
                    <a 
                      href="tel:+52123456789"
                      className="text-sm text-brand-wood dark:text-brand-gold hover:underline"
                    >
                      +52 123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </section>

      <Footer />
    </main>
  );
}