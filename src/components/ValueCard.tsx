'use client';
import { motion } from "framer-motion";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function ValueCard({ icon, title, desc }: ValueCardProps) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5, backgroundColor: "rgba(184, 134, 11, 0.05)" }}
      className="p-6 rounded-2xl border border-brand-wood/10 bg-white dark:bg-brand-graphite/30 backdrop-blur-sm text-center transition-colors group hover:border-brand-gold/30"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-cream/50 dark:bg-white/5 text-brand-wood dark:text-brand-gold mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-brand-gold/10">
        {icon}
      </div>
      <h4 className="font-serif font-bold text-xl text-brand-carbon dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
}