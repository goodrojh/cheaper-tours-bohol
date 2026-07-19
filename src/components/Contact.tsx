import { useI18n } from '../i18n'
import { asset, waLink, PHONE_DISPLAY, PHONE_TEL } from '../lib/site'

export default function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ocean">
            {t.contact.label}
          </span>
          <h2
            className="mt-4 font-display text-4xl text-ink sm:text-5xl md:text-6xl"
            style={{ lineHeight: 1.02, letterSpacing: '-0.02em' }}
          >
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-smoke">{t.contact.subtitle}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={waLink(t.wa.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-10 py-5 text-base font-medium text-white transition-transform hover:scale-[1.03]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-1.5-.5c-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.1.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .2 0 .7-.3 1.3z" />
              </svg>
              {t.contact.wa}
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-10 py-5 text-base text-ink transition-all hover:border-ink/40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9z" />
              </svg>
              {t.contact.call}
            </a>
          </div>

          <p className="mt-6 text-sm text-smoke">
            {t.contact.hint} · <span className="font-medium text-ink">{PHONE_DISPLAY}</span>
          </p>
          <p className="mt-2 text-sm font-medium text-ocean">{t.contact.direct}</p>
        </div>

        <div className="reveal reveal-delay-2 group relative overflow-hidden rounded-3xl">
          <img
            src={asset('images/island-hopping-selfie.jpg')}
            alt="Guests on a private Bohol boat tour"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
