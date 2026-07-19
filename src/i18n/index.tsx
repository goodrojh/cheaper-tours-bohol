import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from './translations/en'
import type { Dict } from './translations/en'
import { zh } from './translations/zh'
import { ja } from './translations/ja'
import { fr } from './translations/fr'
import { de } from './translations/de'
import { it } from './translations/it'
import { es } from './translations/es'
import { hi } from './translations/hi'
import { ar } from './translations/ar'

export const LANGS = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  es: 'Español',
  hi: 'हिन्दी',
  ar: 'العربية',
} as const

export type Lang = keyof typeof LANGS

const dicts: Record<Lang, Dict> = { en, zh, ja, fr, de, it, es, hi, ar }

interface I18nCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const Ctx = createContext<I18nCtx>({ lang: 'en', setLang: () => {}, t: en })

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return saved && saved in dicts ? (saved as Lang) : 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return <Ctx.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</Ctx.Provider>
}

export const useI18n = () => useContext(Ctx)
