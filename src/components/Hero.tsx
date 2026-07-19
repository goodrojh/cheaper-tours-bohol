import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n'
import { asset, waLink } from '../lib/site'

const FADE = 0.5

export default function Hero() {
  const { t } = useI18n()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Seamless manual loop: fade in over 0.5s at the start, fade out over 0.5s
  // before the end, then reset and replay after a 100ms pause.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let raf = 0

    const tick = () => {
      if (video.duration) {
        const now = video.currentTime
        const remaining = video.duration - now
        let opacity = 1
        if (now < FADE) opacity = now / FADE
        else if (remaining < FADE) opacity = Math.max(remaining / FADE, 0)
        video.style.opacity = opacity.toFixed(3)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        void video.play().catch(() => {})
      }, 100)
    }
    video.addEventListener('ended', onEnded)
    void video.play().catch(() => {})

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background video layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute object-cover"
          style={{ inset: 'auto 0 0 0', top: '300px', width: '100%', height: 'calc(100% - 300px)' }}
          muted
          playsInline
          autoPlay
          preload="auto"
          poster={asset('images/chocolate-hills-view.jpg')}
          src={asset('video/hero.mp4')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/10" />
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: 'calc(8rem - 75px + 6rem)' }}
      >
        <span className="animate-fade-rise mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-smoke backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ocean opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ocean" />
          </span>
          {t.hero.badge}
        </span>

        <h1
          className="animate-fade-rise max-w-7xl font-display text-5xl font-normal text-ink sm:text-7xl md:text-8xl"
          style={{ lineHeight: 0.95, letterSpacing: '-0.025em' }}
        >
          {t.hero.h1a}
          <br />
          <em className="text-smoke">{t.hero.h1b}</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-smoke sm:text-lg">
          {t.hero.desc}
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#tours"
            className="btn-shine rounded-full bg-ink px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
          >
            {t.hero.cta}
          </a>
          <a
            href={waLink(t.wa.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-8 py-5 text-base text-ink backdrop-blur transition-all hover:border-ink/40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-1.5-.5c-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.1.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .2 0 .7-.3 1.3z" />
            </svg>
            {t.hero.cta2}
          </a>
        </div>

        <p className="animate-fade-rise-delay-3 mt-10 text-sm text-smoke">
          {t.hero.from} <span className="font-semibold text-ink">₱3,000</span> · {t.hero.perGroupShort}
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ink/20 p-1.5">
          <div className="animate-dive h-1.5 w-1.5 rounded-full bg-ink/50" />
        </div>
      </div>
    </section>
  )
}
