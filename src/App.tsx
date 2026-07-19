import { useEffect } from 'react'
import { I18nProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Stats from './components/Stats'
import Tours from './components/Tours'
import WhyUs from './components/WhyUs'
import Offers from './components/Offers'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}

export default function App() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen w-full overflow-x-clip bg-white">
        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <Stats />
          <Tours />
          <WhyUs />
          <Offers />
          <Gallery />
          <Reviews />
          <Services />
          <Contact />
        </main>
        <Footer />
        <FloatingWA />
        <RevealObserver />
      </div>
    </I18nProvider>
  )
}
