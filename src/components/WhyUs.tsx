import { useI18n } from '../i18n'
import { asset } from '../lib/site'
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
    <section id="why" className="overflow-hidden bg-sand py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading label={t.why.label} title={t.why.title} subtitle={t.why.subtitle} />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Photo collage */}
          <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="group overflow-hidden rounded-3xl">
              <img
                src={asset('images/chocolate-hills-sign.jpg')}
                alt="Guests at the Chocolate Hills viewpoint"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -end-4 w-[55%] overflow-hidden rounded-2xl border-4 border-sand shadow-2xl shadow-ink/20 sm:-end-8">
              <img
                src={asset('images/boat-guests.jpg')}
                alt="Guests on a private island-hopping boat"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="animate-float absolute -top-5 start-4 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-xl">
              ₱0 commission · #DirectOwner
            </div>

            <div className="animate-float absolute bottom-16 -start-2 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-ink/10 sm:-start-6" style={{ animationDelay: '1.2s' }}>
              <div className="font-display text-2xl text-ink">5.0★</div>
              <div className="text-xs text-smoke">1,000+ {t.stats.travelers}</div>
            </div>
          </div>

          {/* Six reasons */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-0">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 2) + 1} group rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl text-ink/15 transition-colors group-hover:text-ocean">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl leading-tight text-ink">{item.title}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-smoke">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
