import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading'

export default function WhyUs() {
  const { t } = useI18n()

  const items = [
    { title: t.why.i1t, desc: t.why.i1d },
    { title: t.why.i2t, desc: t.why.i2d },
    { title: t.why.i3t, desc: t.why.i3d },
    { title: t.why.i4t, desc: t.why.i4d },
    { title: t.why.i5t, desc: t.why.i5d },
    { title: t.why.i6t, desc: t.why.i6d },
  ]

  return (
    <section id="why" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading label={t.why.label} title={t.why.title} subtitle={t.why.subtitle} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5`}
            >
              <div className="font-display text-4xl text-ink/15 transition-colors group-hover:text-ocean">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
