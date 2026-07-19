import { useI18n } from '../i18n'
import { asset } from '../lib/site'
import SectionHeading from './SectionHeading'

const PHOTOS = [
  'images/virgin-island.jpg',
  'images/chocolate-hills-group.jpg',
  'images/zipline.jpg',
  'images/tarsier-closeup.png',
  'images/hinagdanan-cave.jpg',
  'images/atv-ride.jpg',
  'images/butterfly-python.jpg',
  'images/loboc-restaurant.jpg',
  'images/island-hopping-boat.jpg',
  'images/baclayon-church.jpg',
  'images/blood-compact-cheer.jpg',
  'images/i-love-bohol.jpg',
]

export default function Gallery() {
  const { t } = useI18n()

  return (
    <section id="gallery" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading label={t.gallery.label} title={t.gallery.title} subtitle={t.gallery.subtitle} />

        <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4">
          {PHOTOS.map((src, i) => (
            <div
              key={src}
              className={`reveal reveal-delay-${(i % 3) + 1} group mb-4 overflow-hidden rounded-2xl`}
            >
              <img
                src={asset(src)}
                alt="Bohol tour moment"
                loading="lazy"
                className="w-full transition-transform duration-[2500ms] ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
