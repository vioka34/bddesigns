import { Quote } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

export default function TestimonialSection({ visibleClass }: { visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()
  const imageWrapRef = useRef<HTMLDivElement | null>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (!imageWrapRef.current) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = imageWrapRef.current!.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
        const clamped = Math.max(0, Math.min(1, progress))
        setOffsetY((clamped - 0.5) * 200)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const logos = useMemo(
    () => [
      { name: 'Apple', width: 'w-[80px]' },
      { name: 'IDEO', width: 'w-[83px]' },
      { name: 'Polygon', width: 'w-[110px]' },
    ],
    []
  )

  return (
    <section ref={ref} className="py-12 px-6 max-w-2xl mx-auto">
      <Quote className={`${visibleClass(isVisible, '0.1s')} w-6 h-6 text-slate-900`} style={{ animationDelay: '0.1s' }} />
      <h2 className={`${visibleClass(isVisible, '0.2s')} mt-6 text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-[#0D212C]`} style={{ animationDelay: '0.2s' }}>
        I left <span className="font-['PP_Mondwest']">Apple</span> to build the studio I always wanted to work with.
      </h2>
      <p className={`${visibleClass(isVisible, '0.3s')} mt-4 text-sm italic text-[#273C46]`} style={{ animationDelay: '0.3s' }}>Brandon Dillon</p>

      <div className={`${visibleClass(isVisible, '0.4s')} mt-10 flex items-center gap-6 flex-wrap`} style={{ animationDelay: '0.4s' }}>
        {logos.map((logo) => (
          <span key={logo.name} className={`${logo.width} text-[24px] font-medium text-slate-900`}>
            {logo.name}
          </span>
        ))}
      </div>

      <div ref={imageWrapRef} className={`${visibleClass(isVisible, '0.5s')} mt-12 flex justify-center overflow-hidden rounded-2xl`} style={{ animationDelay: '0.5s' }}>
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
          alt="Founder portrait"
          className="w-full max-w-xs rounded-2xl shadow-lg will-change-transform"
          style={{ transform: `translateY(${offsetY}px)` }}
          loading="lazy"
        />
      </div>
    </section>
  )
}
