import { useState } from 'react'
import type { Language } from '../types'
import { translations } from '../i18n/translations'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null
    return stored ?? 'en'
  })

  const setLang = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = translations[language]

  return { language, setLang, t }
}
