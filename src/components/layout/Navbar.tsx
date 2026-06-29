import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LanguageToggle } from '../ui/LanguageToggle'
import type { Theme, Language } from '../../types'
import type { TranslationDict } from '../../i18n/translations'

interface Props {
  theme: Theme
  onToggleTheme: () => void
  language: Language
  onSetLang: (lang: Language) => void
  t: TranslationDict
}

const NAV_ITEMS = [
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'hobbies', href: '#hobbies' },
  { key: 'contact', href: '#contact' },
] as const

export function Navbar({ theme, onToggleTheme, language, onSetLang, t }: Props) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-gray-200/60 dark:border-gray-800/60 shadow-sm'
            : 'bg-transparent border-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="text-base font-bold tracking-tight text-gray-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            KM
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <LanguageToggle language={language} onSetLang={onSetLang} />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-1 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1.5 w-5">
                <motion.span
                  animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                  className="block h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full origin-center"
                />
                <motion.span
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  className="block h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                />
                <motion.span
                  animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                  className="block h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-xl md:hidden"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
