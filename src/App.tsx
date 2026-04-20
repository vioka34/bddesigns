import { useInViewAnimation } from './hooks/useInViewAnimation'
import Button from './components/Button'
import PricingSection from './components/PricingSection'
import ProjectsSection from './components/ProjectsSection'
import ImpactShowcase from './components/ImpactShowcase'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'
import CopyrightBar from './components/CopyrightBar'
import BottomNav from './components/BottomNav'

const marqueeImages = [
  '/gifs/luxury-skincare.gif',
  '/gifs/jj-dominican.gif',
  '/gifs/serenity-touch.gif',
]

function visibleClass(visible: boolean) {
  return visible ? 'animate-fade-in-up' : ''
}

function HeroSection() {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <section ref={ref} id="about" className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-12">
      <div className="hero-sparkles absolute inset-0 pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-center rounded-[36px] border border-zinc-800 bg-zinc-950/90 p-6 md:p-10">
        <div>
          <p className={`${visibleClass(isVisible)} font-mono text-xs md:text-sm text-zinc-400 mb-4`} style={{ animationDelay: '0.08s' }}>
            punk web studio • smooth motion • local conversion
          </p>

          <h1 className={`${visibleClass(isVisible)} font-['PP_Mondwest'] text-[40px] md:text-[58px] lg:text-[84px] leading-[0.92] text-zinc-100`} style={{ animationDelay: '0.18s' }}>
            BDdesigns
            <span className="block text-zinc-300">bold visuals.</span>
            <span className="block text-zinc-100">real customers.</span>
          </h1>

          <p className={`${visibleClass(isVisible)} mt-6 max-w-2xl text-sm md:text-base text-zinc-300 leading-relaxed`} style={{ animationDelay: '0.3s' }}>
            We build websites that feel premium and sell hard — modern animation, clean structure, and messaging that moves people to book.
          </p>

          <div className={`${visibleClass(isVisible)} mt-8 flex flex-col sm:flex-row gap-3 md:gap-4`} style={{ animationDelay: '0.4s' }}>
            <Button href="#contact">Start a chat</Button>
            <Button href="#work" variant="secondary">See the work</Button>
          </div>
        </div>

        <div className={`${visibleClass(isVisible)} relative h-[340px] md:h-[460px] split-wrap`} style={{ animationDelay: '0.42s' }}>
          <div className="split-shell">
            <div className="split-left">
              <img src="/gifs/jj-dominican.gif" alt="Barbershop preview" className="split-media" />
            </div>
            <div className="split-right">
              <img src="/gifs/luxury-skincare.gif" alt="Skincare preview" className="split-media" />
            </div>
          </div>
          <div className="split-orb" />
          <div className="split-card">
            <img src="/gifs/serenity-touch.gif" alt="Serenity Touch preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function MarqueeSection() {
  const doubled = [...marqueeImages, ...marqueeImages]
  return (
    <section className="w-full mt-12 md:mt-16 mb-14 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((img, idx) => (
          <img
            key={`${img}-${idx}`}
            src={img}
            alt="project preview"
            className="h-[260px] md:h-[440px] object-cover mx-3 rounded-2xl shadow-lg"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const { ref: footerRef, isVisible: footerVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <div className="bg-black text-zinc-100 antialiased punk-noise">
      <HeroSection />
      <MarqueeSection />
      <PricingSection visibleClass={visibleClass} />
      <ImpactShowcase visibleClass={visibleClass} />
      <ProjectsSection visibleClass={visibleClass} />
      <PartnerSection visibleClass={visibleClass} />
      <div ref={footerRef}>
        <Footer visibleClass={visibleClass} isVisible={footerVisible} />
        <CopyrightBar visibleClass={visibleClass} isVisible={footerVisible} />
      </div>
      <BottomNav />
    </div>
  )
}
