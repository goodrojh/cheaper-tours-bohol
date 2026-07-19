import { useI18n } from '../i18n'

export default function Stats() {
  const { t } = useI18n()

  const items = [
    { value: '5.0★', label: t.stats.rating },
    { value: '1,000+', label: t.stats.travelers },
    { value: '7+', label: t.stats.years },
    { value: '100%', label: t.stats.photos },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {items.map((s, i) => (
          <div key={s.label} className={`reveal reveal-delay-${i % 4 === 0 ? 0 : i % 4} text-center`}>
            <div className="font-display text-5xl text-ink sm:text-6xl">{s.value}</div>
            <div className="mt-2 text-sm leading-snug text-smoke">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
