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
    <section ref={ref} id="about" className="relative max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-8">
      <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse" />
      <div className="absolute top-24 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse" />

      <div className="relative z-10 rounded-[34px] border border-zinc-800 bg-zinc-950/80 p-6 md:p-10 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 lg:items-end">
          <div className="lg:flex-1">
            <h1 className={`${visibleClass(isVisible)} punk-flicker font-['PP_Mondwest'] text-[36px] md:text-[52px] lg:text-[64px] font-semibold text-zinc-100 tracking-tight mb-4`} style={{ animationDelay: '0.1s' }}>
              BDdesigns
            </h1>
            <p className={`${visibleClass(isVisible)} font-mono text-xs md:text-sm text-zinc-400 mb-3`} style={{ animationDelay: '0.2s' }}>
              Independent studio for local business websites
            </p>
            <h2 className={`${visibleClass(isVisible)} text-[34px] md:text-[52px] lg:text-[72px] leading-[0.98] tracking-tight text-zinc-100`} style={{ animationDelay: '0.3s' }}>
              <span className="font-['PP_Mondwest']">Magnetic websites</span>
              <br />
              that make people buy.
            </h2>

            <div className={`${visibleClass(isVisible)} mt-6 flex flex-col gap-5 text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl`} style={{ animationDelay: '0.4s' }}>
              <p>
                We craft black-belt branding experiences for local businesses —
                crisp motion, smart structure, and conversion-first storytelling.
              </p>
              <p>
                You get a site that feels premium, moves with confidence, and makes your offer impossible to ignore.
              </p>
            </div>

            <div className={`${visibleClass(isVisible)} flex flex-col sm:flex-row gap-3 md:gap-4 mt-7`} style={{ animationDelay: '0.5s' }}>
              <Button href="#contact">Start a chat</Button>
              <Button href="#work" variant="secondary">View projects</Button>
            </div>
          </div>

          <div className={`${visibleClass(isVisible)} lg:w-[360px] rounded-3xl border border-zinc-800 bg-black p-5`} style={{ animationDelay: '0.6s' }}>
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Sparkline impact</p>
            <div className="mt-4 h-24 relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
              <svg viewBox="0 0 300 80" className="w-full h-full">
                <polyline
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  points="0,68 30,62 60,58 90,50 120,48 150,36 180,32 210,22 240,20 270,12 300,8"
                >
                  <animate
                    attributeName="points"
                    dur="4s"
                    repeatCount="indefinite"
                    values="0,68 30,62 60,58 90,50 120,48 150,36 180,32 210,22 240,20 270,12 300,8;
                            0,66 30,61 60,53 90,49 120,41 150,35 180,30 210,24 240,18 270,13 300,9;
                            0,68 30,62 60,58 90,50 120,48 150,36 180,32 210,22 240,20 270,12 300,8"
                  />
                </polyline>
              </svg>
            </div>
            <div className="mt-4 flex items-center gap-2 text-zinc-200 text-sm">
              <span className="spark-dot" />
              <span>Sparkles + animated hero system enabled</span>
            </div>
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
