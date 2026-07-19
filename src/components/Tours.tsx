import { useI18n } from '../i18n'
import { tours } from '../data/tours'
import { asset, waLink, peso } from '../lib/site'
import SectionHeading from './SectionHeading'

export default function Tours() {
  const { t } = useI18n()

  return (
    <section id="tours" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <SectionHeading label={t.tours.label} title={t.tours.title} subtitle={t.tours.subtitle} />

      <div className="mt-20 space-y-24">
        {tours.map((tour, idx) => {
          const tt = t.tours[tour.id]
          const entranceNote = 'entranceNote' in tt ? tt.entranceNote : null
          const flip = idx % 2 === 1

          return (
            <article
              key={tour.id}
              className="reveal grid items-center gap-10 md:grid-cols-2 md:gap-14"
            >
              {/* Photo */}
              <div className={`group relative overflow-hidden rounded-3xl ${flip ? 'md:order-2' : ''}`}>
                <img
                  src={asset(tour.image)}
                  alt={tt.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <span className="absolute start-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink backdrop-blur">
                  {t.tours.day} {tour.day}
                </span>
                <span className="absolute end-5 top-5 rounded-full bg-ink/80 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
                  {tt.tag}
                </span>
                <div className="absolute bottom-5 start-5 font-display text-3xl text-white drop-shadow">
                  {peso(tour.price)}
                  <span className="ms-2 font-body text-sm text-white/80">{t.tours.perGroup}</span>
                </div>
              </div>

              {/* Details */}
              <div className={flip ? 'md:order-1' : ''}>
                <h3 className="font-display text-3xl text-ink sm:text-4xl" style={{ letterSpacing: '-0.02em' }}>
                  {tt.name}
                </h3>
                <p className="mt-4 leading-relaxed text-smoke">{tt.desc}</p>
                {entranceNote && <p className="mt-2 text-sm font-medium text-sunset">{entranceNote}</p>}

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                    {t.tours.itinerary}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tour.stops.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-ink/10 bg-sand px-3.5 py-1.5 text-sm text-ink/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {tour.includes && (
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                      {t.tours.includes}
                    </div>
                    <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-smoke sm:grid-cols-3">
                      {tour.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E7C86" strokeWidth="2.5">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tour.optional && (
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                      {t.tours.optional}
                    </div>
                    <ul className="mt-3 space-y-1.5 text-sm text-smoke">
                      {tour.optional.map((o) => (
                        <li key={o.name} className="flex items-center justify-between gap-4 border-b border-ink/5 pb-1.5">
                          <span>{o.name}</span>
                          <span className="shrink-0 font-medium text-ink">{peso(o.price)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="mt-4 text-xs text-smoke/80">{t.tours.entrance}</p>

                <a
                  href={waLink(t.wa.tour + tt.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine mt-7 inline-block rounded-full bg-ink px-10 py-4 text-sm text-white transition-transform hover:scale-[1.03]"
                >
                  {t.tours.book} — {peso(tour.price)}
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
