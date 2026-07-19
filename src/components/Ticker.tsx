const SPOTS = [
  'Chocolate Hills',
  'Tarsier Sanctuary',
  'Balicasag Reef',
  'Virgin Island',
  'Hinagdanan Cave',
  'Can-umantad Falls',
  'Dolphin Watching',
  'Loboc River',
  'Anda Beach',
  'Danao Adventure Park',
  'Napaling Sardine Run',
  'Firefly River',
]

export default function Ticker() {
  const row = SPOTS.map((s) => `${s}`).join('  ✦  ')
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-4">
      <div className="animate-marquee flex w-max whitespace-nowrap font-display text-lg tracking-wide text-white/80">
        <span className="px-4">{row}  ✦  </span>
        <span className="px-4">{row}  ✦  </span>
      </div>
    </div>
  )
}
