import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Language } from '../../types'

interface Props {
  language: Language
  onSetLang: (lang: Language) => void
}

const FLAGS: Record<Language, string> = { en: '🇬🇧', nb: '🇳🇴', nn: '🇳🇴', pl: '🇵🇱' }
const LABELS: Record<Language, string> = { en: 'EN', nb: 'NB', nn: 'NN', pl: 'PL' }
const OPTIONS: { lang: Language; label: string }[] = [
  { lang: 'en', label: 'English' },
  { lang: 'nb', label: 'Norsk (Bokmål)' },
  { lang: 'nn', label: 'Norsk (Nynorsk)' },
  { lang: 'pl', label: 'Polski' },
]

export function LanguageToggle({ language, onSetLang }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span>{FLAGS[language]}</span>
        <span>{LABELS[language]}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-20 w-44 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden"
            >
              {OPTIONS.map(opt => (
                <button
                  key={opt.lang}
                  onClick={() => { onSetLang(opt.lang); setOpen(false) }}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                    language === opt.lang
                      ? 'bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {language === opt.lang && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {language !== opt.lang && <span className="w-3" />}
                  <span>{FLAGS[opt.lang]}</span>
                  {opt.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
