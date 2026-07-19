import { useI18n } from '../i18n'
import { asset, waLink } from '../lib/site'
import SectionHeading from './SectionHeading'

export default function Services() {
  const { t } = useI18n()

  const items = [
    { title: t.services.s1t, desc: t.services.s1d, image: 'images/firefly-watching.png' },
    { title: t.services.s2t, desc: t.services.s2d, image: 'images/mirror-of-the-world.png' },
    { title: t.services.s3t, desc: t.services.s3d, image: 'images/napaling-sardines.png' },
  ]

  return (
    <section className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading light label={t.services.label} title={t.services.title} />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <a
              key={s.title}
              href={waLink(t.wa.tour + s.title)}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={asset(s.image)}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            </a>
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
