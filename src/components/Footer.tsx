import { useI18n } from '../i18n'
import { waLink, PHONE_DISPLAY, PHONE_TEL } from '../lib/site'

export default function Footer() {
  const { t } = useI18n()

  const links = [
    { href: '#tours', label: t.nav.tours },
    { href: '#why', label: t.nav.why },
    { href: '#offers', label: t.nav.offers },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl tracking-tight">
              Cheaper Tours<sup className="text-sm">®</sup>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{t.footer.tagline}</p>
            <p className="mt-5 text-xs text-white/40">
              #DirectOwner · #CountrysideTour · #IslandHopping · #PanglaoTour
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              {t.footer.explore}
            </div>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              {t.footer.talk}
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={waLink(t.wa.generic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: +63 938 078 1501
                </a>
              </li>
              <li className="text-white/50">Bohol · Panglao · Tagbilaran, Philippines</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Cheaper Tours &amp; Travel Bohol. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
