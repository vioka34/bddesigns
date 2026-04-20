import { useInViewAnimation } from './hooks/useInViewAnimation'
import Button from './components/Button'
import TestimonialSection from './components/TestimonialSection'
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
    <section ref={ref} id="about" className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-14 pb-10">
      <div className="hero-sparkles absolute inset-0 pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.9fr] gap-8 lg:gap-10 items-center rounded-[36px] border border-zinc-800 bg-zinc-950/85 p-6 md:p-10">
        <div>
          <p className={`${visibleClass(isVisible)} font-mono text-xs md:text-sm text-zinc-400 mb-3`} style={{ animationDelay: '0.1s' }}>
            punk web studio • high-conversion local sites
          </p>

          <h1 className={`${visibleClass(isVisible)} font-['PP_Mondwest'] text-[38px] md:text-[56px] lg:text-[76px] leading-[0.95] text-zinc-100`} style={{ animationDelay: '0.2s' }}>
            BDdesigns
            <span className="block text-zinc-300"> loud look.</span>
            <span className="block text-zinc-100"> serious results.</span>
          </h1>

          <p className={`${visibleClass(isVisible)} mt-6 max-w-2xl text-sm md:text-base text-zinc-300 leading-relaxed`} style={{ animationDelay: '0.3s' }}>
            We make premium, bold websites for local businesses that want attention and bookings.
            Distinct brand vibe, clean structure, and motion that actually feels expensive.
          </p>

          <div className={`${visibleClass(isVisible)} mt-7 flex flex-col sm:flex-row gap-3 md:gap-4`} style={{ animationDelay: '0.4s' }}>
            <Button href="#contact">Start a chat</Button>
            <Button href="#work" variant="secondary">View projects</Button>
          </div>
        </div>

        <div className={`${visibleClass(isVisible)} relative h-[330px] md:h-[420px]`} style={{ animationDelay: '0.45s' }}>
          <div className="hero-card hero-card-a">
            <img src="/gifs/luxury-skincare.gif" alt="Luxury skincare preview" className="hero-card-img" />
          </div>
          <div className="hero-card hero-card-b">
            <img src="/gifs/jj-dominican.gif" alt="Barbershop preview" className="hero-card-img" />
          </div>
          <div className="hero-card hero-card-c">
            <img src="/gifs/serenity-touch.gif" alt="Massage preview" className="hero-card-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

function MarqueeSection() {
  const doubled = [...marqueeImages, ...marqueeImages]
  return (
    <section className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((img, idx) => (
          <img
            key={`${img}-${idx}`}
            src={img}
            alt="project preview"
            className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg"
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
      <TestimonialSection visibleClass={visibleClass} />
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
