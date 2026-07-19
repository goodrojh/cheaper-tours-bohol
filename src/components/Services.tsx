import { useI18n } from '../i18n'
import { waLink } from '../lib/site'
import SectionHeading from './SectionHeading'

export default function Services() {
  const { t } = useI18n()

  const items = [
    { title: t.services.s1t, desc: t.services.s1d, glyph: '✦' },
    { title: t.services.s2t, desc: t.services.s2d, glyph: '❖' },
    { title: t.services.s3t, desc: t.services.s3d, glyph: '≋' },
  ]

  return (
    <section className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading light label={t.services.label} title={t.services.title} />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10`}
            >
              <div className="animate-drift font-display text-4xl text-ocean">{s.glyph}</div>
              <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={waLink(t.wa.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-block rounded-full bg-white px-10 py-4 text-sm text-ink transition-transform hover:scale-[1.03]"
          >
            {t.services.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
