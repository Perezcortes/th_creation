'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Mail, Phone, Calendar, CheckCircle } from 'lucide-react';

export default function TerminosCondiciones() {
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
              <FileText className="text-brand-gold" size={24} />
              <span className="text-brand-wood dark:text-brand-gold font-bold tracking-wider uppercase text-sm">
                Acuerdo Legal
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-black text-brand-carbon dark:text-white mb-6">
              Términos y Condiciones
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Conoce las condiciones de uso de nuestros servicios y productos personalizados.
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
          {/* Fecha */}
          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-2 mb-8 text-sm text-gray-600 dark:text-gray-400"
          >
            <Calendar size={16} className="text-brand-gold" />
            <span>Última actualización: 15 de febrero de 2026</span>
          </motion.div>

          {/* Introducción */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                Introducción
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bienvenido a <strong className="text-brand-carbon dark:text-white">TH Creation</strong>. Al realizar un pedido o utilizar nuestros servicios, usted acepta los siguientes términos y condiciones. Le recomendamos leerlos cuidadosamente antes de proceder con su compra.
              </p>
            </div>
          </motion.section>

          {/* Sección 1: Servicios */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                1. Servicios Ofrecidos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                TH Creation ofrece servicios de personalización que incluyen:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={20} />
                  <span><strong>Sublimación en tazas:</strong> Impresión de diseños personalizados en tazas de cerámica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={20} />
                  <span><strong>Corte láser:</strong> Diseños en madera, acrílico y otros materiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={20} />
                  <span><strong>Creación de pines:</strong> Diseños personalizados en formato pin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-gold mt-1 flex-shrink-0" size={20} />
                  <span><strong>Productos personalizados:</strong> Cualquier artículo que pueda ser personalizado bajo nuestras capacidades técnicas</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Sección 2: Proceso de Pedido */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                2. Proceso de Pedido y Cotización
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-carbon dark:text-white">2.1 Solicitud:</strong> Los pedidos se realizan a través de WhatsApp, redes sociales o correo electrónico. El cliente debe proporcionar detalles claros del diseño deseado.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">2.2 Cotización:</strong> Una vez recibida la solicitud, se proporcionará una cotización que incluye el precio del producto, el tiempo estimado de entrega y cualquier cargo adicional.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">2.3 Confirmación:</strong> El pedido se considera confirmado una vez que el cliente acepta la cotización y realiza el pago acordado (anticipo o pago completo, según lo establecido).
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">2.4 Aprobación de Diseño:</strong> Para productos personalizados, se enviará una vista previa del diseño para aprobación antes de la producción final.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sección 3: Precios y Pagos */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                3. Precios y Formas de Pago
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-carbon dark:text-white">3.1 Precios:</strong> Los precios están sujetos a cambios sin previo aviso. El precio final será el cotizado y aceptado al momento de confirmar el pedido.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">3.2 Formas de Pago:</strong> Aceptamos pagos mediante transferencia bancaria, depósito en efectivo y pago contra entrega (cuando aplique).
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">3.3 Anticipos:</strong> Para pedidos grandes o especiales, se puede solicitar un anticipo del 50% antes de iniciar la producción.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sección 4: Tiempos de Entrega */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                4. Tiempos de Entrega
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-carbon dark:text-white">4.1 Entrega Estándar:</strong> El tiempo de entrega estándar es de 24 a 48 horas a partir de la confirmación del diseño.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">4.2 Pedidos Urgentes:</strong> Ofrecemos servicio exprés (mismo día) con un cargo adicional, sujeto a disponibilidad.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">4.3 Retrasos:</strong> En caso de retrasos por causas de fuerza mayor, se notificará al cliente a la brevedad posible.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sección 5: Devoluciones */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                5. Política de Devoluciones y Cambios
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-carbon dark:text-white">5.1 Productos Personalizados:</strong> Debido a la naturaleza personalizada de nuestros productos, no se aceptan devoluciones ni cambios una vez finalizado el producto, a menos que exista un defecto de fabricación.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">5.2 Defectos de Fabricación:</strong> Si el producto presenta defectos atribuibles a nuestro proceso de producción, se realizará un reemplazo sin costo adicional.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">5.3 Errores del Cliente:</strong> No se aceptan devoluciones por errores en la información proporcionada por el cliente (diseño, texto, imágenes).
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">5.4 Plazo para Reclamos:</strong> Cualquier reclamo por defectos debe hacerse dentro de las 24 horas posteriores a la recepción del producto.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sección 6: Propiedad Intelectual */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                6. Propiedad Intelectual
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-brand-carbon dark:text-white">6.1 Responsabilidad del Cliente:</strong> El cliente es responsable de garantizar que los diseños, imágenes o textos proporcionados no infrinjan derechos de autor o marcas registradas de terceros.
                </p>
                <p>
                  <strong className="text-brand-carbon dark:text-white">6.2 Uso de Imágenes:</strong> TH Creation se reserva el derecho de fotografiar los productos finalizados para uso en redes sociales y publicidad, a menos que el cliente solicite expresamente lo contrario.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sección 7: Limitación de Responsabilidad */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                7. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                TH Creation no se hace responsable por el mal uso que el cliente dé a los productos adquiridos. Nuestra responsabilidad se limita a la correcta fabricación y entrega del producto según las especificaciones acordadas.
              </p>
            </div>
          </motion.section>

          {/* Sección 8: Modificaciones */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white dark:bg-brand-graphite/40 rounded-2xl p-8 border border-brand-wood/10 dark:border-white/5 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brand-wood dark:text-brand-gold mb-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-brand-gold rounded-full"></div>
                8. Modificaciones a los Términos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                TH Creation se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación. Es responsabilidad del cliente revisar periódicamente estas condiciones.
              </p>
            </div>
          </motion.section>

          {/* Sección 9: Contacto */}
          <motion.section variants={fadeInUp}>
            <div className="bg-gradient-to-br from-brand-gold/10 to-amber-500/5 dark:from-brand-gold/20 dark:to-amber-900/10 rounded-2xl p-8 border-2 border-brand-gold/30">
              <h3 className="text-xl font-bold text-brand-carbon dark:text-white mb-6">
                ¿Tienes dudas sobre nuestros términos?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Si tienes alguna pregunta sobre estos Términos y Condiciones, no dudes en contactarnos:
              </p>
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
                      WhatsApp
                    </p>
                    <a 
                      href="https://wa.me/52123456789"
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