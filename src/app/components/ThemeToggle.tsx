'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar error de hidratación
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-brand-wood text-white hover:bg-brand-gold transition-colors duration-300"
    >
      {theme === 'dark' ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  )
}