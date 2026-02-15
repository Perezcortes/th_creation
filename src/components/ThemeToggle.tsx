'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Renderizamos un placeholder del mismo tamaño para evitar saltos (layout shift)
    return <div className="w-10 h-10" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative p-2 rounded-full bg-brand-wood/10 hover:bg-brand-wood/20 dark:bg-white/10 dark:hover:bg-white/20 text-brand-wood dark:text-brand-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="animate-in fade-in rotate-90 duration-300" />
      ) : (
        <Moon size={20} className="animate-in fade-in -rotate-90 duration-300" />
      )}
    </button>
  )
}