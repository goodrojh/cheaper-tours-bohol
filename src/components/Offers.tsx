import { useI18n } from '../i18n'
import { offers } from '../data/tours'
import { waLink, peso } from '../lib/site'
import SectionHeading from './SectionHeading'

export default function Offers() {
  const { t } = useI18n()

  return (
    <section id="offers" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <SectionHeading label={t.offers.label} title={t.offers.title} subtitle={t.offers.subtitle} />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {offers.map((offer, i) => {
          const to = t.offers[offer.id]
          const popular = offer.id === 'o2'
          const bonus = 'bonus' in to ? to.bonus : null

          return (
            <div
              key={offer.id}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                popular
                  ? 'bg-ink text-white shadow-2xl shadow-ink/20'
                  : 'border border-ink/10 bg-white hover:shadow-xl hover:shadow-ink/5'
              }`}
            >
              {popular && (
                <span className="absolute -top-3.5 start-8 animate-float rounded-full bg-sunset px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                  {t.offers.popular}
                </span>
              )}

              <div className={`font-display text-6xl ${popular ? 'text-white/20' : 'text-ink/10'}`}>
                {offer.days}
              </div>
              <div className={`-mt-3 text-xs uppercase tracking-[0.25em] ${popular ? 'text-white/50' : 'text-smoke'}`}>
                {t.offers.days}
              </div>

              <h3 className="mt-5 font-display text-2xl sm:text-3xl">{to.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${popular ? 'text-white/70' : 'text-smoke'}`}>
                {to.desc}
              </p>
              {bonus && <p className="mt-2 text-sm font-medium text-sunset">{bonus}</p>}

              <div className="mt-auto pt-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl sm:text-5xl">{peso(offer.price)}</span>
                  <span className={`text-sm line-through ${popular ? 'text-white/40' : 'text-smoke/60'}`}>
                    {peso(offer.oldPrice)}
                  </span>
                </div>
                <div className={`mt-1 text-sm font-medium ${popular ? 'text-white/80' : 'text-ocean'}`}>
                  {t.offers.save} {peso(offer.oldPrice - offer.price)} · {t.tours.perGroup}
                </div>

                <a
                  href={waLink(t.wa.offer + to.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-shine mt-6 block rounded-full px-8 py-4 text-center text-sm transition-transform hover:scale-[1.03] ${
                    popular ? 'bg-white text-ink' : 'bg-ink text-white'
                  }`}
                >
                  {t.offers.claim}
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <p className="reveal mx-auto mt-10 max-w-2xl text-center text-xs text-smoke/80">{t.offers.note}</p>
    </section>
  )
}
