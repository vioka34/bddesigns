import { useEffect } from 'react'
import Lenis from 'lenis'
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

      <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center rounded-[36px] border border-zinc-800 bg-zinc-950/90 p-6 md:p-10">
        <div>
          <div className={`${visibleClass(isVisible)} inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-[11px] tracking-[0.16em] uppercase text-zinc-300`} style={{ animationDelay: '0.08s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            studio availability this month
          </div>

          <h1 className={`${visibleClass(isVisible)} mt-4 font-['PP_Mondwest'] text-[40px] md:text-[58px] lg:text-[82px] leading-[0.92] text-zinc-100`} style={{ animationDelay: '0.18s' }}>
            BDdesigns
            <span className="block font-['PP_Neue_Montreal'] text-zinc-300 tracking-tight">Build the next wave,</span>
            <span className="block text-zinc-100">the bold way.</span>
          </h1>

          <p className={`${visibleClass(isVisible)} mt-5 max-w-2xl text-sm md:text-base text-zinc-300 leading-relaxed`} style={{ animationDelay: '0.3s' }}>
            We design high-conversion websites for local businesses with premium motion, strong hierarchy, and clear offers that turn views into booked calls.
          </p>

          <div className={`${visibleClass(isVisible)} mt-7 flex flex-col sm:flex-row gap-3 md:gap-4`} style={{ animationDelay: '0.4s' }}>
            <Button href="#contact">Start a chat</Button>
            <Button href="#work" variant="secondary">View projects</Button>
          </div>

          <div className={`${visibleClass(isVisible)} mt-6 flex flex-wrap gap-2`} style={{ animationDelay: '0.5s' }}>
            <span className="rounded-full border border-zinc-700 bg-zinc-900/55 px-3 py-1 text-xs text-zinc-300">Fast turnarounds</span>
            <span className="rounded-full border border-zinc-700 bg-zinc-900/55 px-3 py-1 text-xs text-zinc-300">Mobile-first</span>
            <span className="rounded-full border border-zinc-700 bg-zinc-900/55 px-3 py-1 text-xs text-zinc-300">Conversion-focused</span>
          </div>
        </div>

        <div className={`${visibleClass(isVisible)} relative h-[340px] md:h-[460px] split-wrap`} style={{ animationDelay: '0.42s' }}>
          <div className="split-shell hero-card-tilt hero-entry-shell">
            <div className="split-left">
              <img src="/gifs/jj-dominican.gif" alt="Barbershop preview" className="split-media" />
            </div>
            <div className="split-right">
              <img src="/gifs/luxury-skincare.gif" alt="Skincare preview" className="split-media" />
            </div>
          </div>
          <div className="split-orb" />
          <div className="split-card hero-card-tilt hero-entry-card">
            <img src="/gifs/serenity-touch.gif" alt="Serenity Touch preview" className="w-full h-full object-cover" />
          </div>
          <div className="hero-mini-card">
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">recent launch</p>
            <p className="text-sm text-zinc-100 mt-1">Velvet Skin Studio</p>
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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-black text-zinc-100 antialiased punk-noise">
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

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
