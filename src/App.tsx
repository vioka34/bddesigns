import { useInViewAnimation } from './hooks/useInViewAnimation'
import Button from './components/Button'
import TestimonialSection from './components/TestimonialSection'
import PricingSection from './components/PricingSection'
import TestimonialCarousel from './components/TestimonialCarousel'
import ProjectsSection from './components/ProjectsSection'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'
import CopyrightBar from './components/CopyrightBar'
import BottomNav from './components/BottomNav'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

function visibleClass(visible: boolean) {
  return visible ? 'animate-fade-in-up' : ''
}

function HeroSection() {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <section ref={ref} id="about" className="max-w-[440px] mx-auto px-6 pt-12 md:pt-16">
      <h1 className={`${visibleClass(isVisible)} font-['PP_Mondwest'] text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4`} style={{ animationDelay: '0.1s' }}>
        BDdesigns
      </h1>
      <p className={`${visibleClass(isVisible)} font-mono text-xs md:text-sm text-[#051A24] mb-2`} style={{ animationDelay: '0.2s' }}>
        Independent studio for local business websites
      </p>
      <h2 className={`${visibleClass(isVisible)} text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight whitespace-nowrap text-[#0D212C]`} style={{ animationDelay: '0.3s' }}>
        Build the <span className="font-['PP_Mondwest']">next level</span>,
        <br />
        the <span className="font-['PP_Mondwest']">bold way.</span>
      </h2>

      <div className={`${visibleClass(isVisible)} mt-5 md:mt-6 flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed`} style={{ animationDelay: '0.4s' }}>
        <p>
          We redesign and launch high-converting websites for serious local businesses —
          with clear messaging, polished visuals, and smart page structure.
        </p>
        <p>
          Our studio stays intentionally focused. You work directly with the lead designer,
          plus a small specialist team that moves fast and cares about details.
        </p>
        <p>Projects start at $5,000 per month.</p>
      </div>

      <div className={`${visibleClass(isVisible)} flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6`} style={{ animationDelay: '0.5s' }}>
        <Button href="#contact">Start a chat</Button>
        <Button href="#work" variant="secondary">View projects</Button>
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
    <div className="bg-white text-[#051A24] antialiased">
      <HeroSection />
      <MarqueeSection />
      <TestimonialSection visibleClass={visibleClass} />
      <PricingSection visibleClass={visibleClass} />
      <TestimonialCarousel visibleClass={visibleClass} />
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
