import { useState } from 'react'
import { useI18n, LANGS } from '../i18n'
import type { Lang } from '../i18n'
import { waLink } from '../lib/site'

function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 text-sm text-smoke transition-colors hover:text-ink"
        aria-label="Change language"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
        </svg>
        <span className="uppercase">{lang}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute end-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-ink/10 bg-white py-1 shadow-xl">
            {(Object.keys(LANGS) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l)
                  setOpen(false)
                }}
                className={`block w-full px-4 py-2 text-start text-sm transition-colors hover:bg-sand ${
                  l === lang ? 'font-semibold text-ink' : 'text-smoke'
                }`}
              >
                {LANGS[l]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Navbar() {
  const { t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#tours', label: t.nav.tours },
    { href: '#why', label: t.nav.why },
    { href: '#offers', label: t.nav.offers },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
          Cheaper Tours<sup className="text-sm">®</sup>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-smoke transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={waLink(t.wa.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine hidden rounded-full bg-ink px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03] sm:block"
          >
            {t.nav.book}
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink/5 bg-white/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-base text-smoke transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(t.wa.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-full bg-ink px-6 py-3 text-center text-sm text-white"
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </header>
  )
}
