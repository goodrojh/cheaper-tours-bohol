import { useI18n } from '../i18n'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  const { t } = useI18n()
  const reviews = [t.reviews.r1, t.reviews.r2, t.reviews.r3]

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
      <SectionHeading label={t.reviews.label} title={t.reviews.title} />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <figure
            key={r.name}
            className={`reveal reveal-delay-${i + 1} flex flex-col rounded-3xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5`}
          >
            <div className="text-lg tracking-[0.2em] text-sunset">★★★★★</div>
            <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">“{r.text}”</blockquote>
            <figcaption className="mt-6 border-t border-ink/5 pt-4">
              <span className="font-display text-xl text-ink">{r.name}</span>
              <span className="ms-2 text-sm text-smoke">— {r.origin}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
