interface Props {
  label: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({ label, title, subtitle, light }: Props) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${light ? 'text-white/60' : 'text-ocean'}`}>
        {label}
      </span>
      <h2
        className={`mt-4 font-display text-4xl sm:text-5xl md:text-6xl ${light ? 'text-white' : 'text-ink'}`}
        style={{ lineHeight: 1.02, letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-white/70' : 'text-smoke'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
