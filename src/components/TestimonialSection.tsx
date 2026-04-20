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
      <Quote className={`${visibleClass(isVisible, '0.1s')} w-6 h-6 text-zinc-100`} style={{ animationDelay: '0.1s' }} />
      <h2 className={`${visibleClass(isVisible, '0.2s')} mt-6 text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-zinc-100`} style={{ animationDelay: '0.2s' }}>
        I left <span className="font-['PP_Mondwest']">Apple</span> to build the studio I always wanted to work with.
      </h2>
      <p className={`${visibleClass(isVisible, '0.3s')} mt-4 text-sm italic text-zinc-400`} style={{ animationDelay: '0.3s' }}>Brandon Dillon</p>

      <div className={`${visibleClass(isVisible, '0.4s')} mt-10 flex items-center gap-6 flex-wrap`} style={{ animationDelay: '0.4s' }}>
        {logos.map((logo) => (
          <span key={logo.name} className={`${logo.width} text-[24px] font-medium text-zinc-300`}>
            {logo.name}
          </span>
        ))}
      </div>

      <div ref={imageWrapRef} className={`${visibleClass(isVisible, '0.5s')} mt-12 flex justify-center overflow-hidden rounded-2xl`} style={{ animationDelay: '0.5s' }}>
        <img
          src="/punk-avatar.png"
          alt="Punk avatar"
          className="w-full max-w-xs rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.18)] will-change-transform grayscale contrast-125"
          style={{ transform: `translateY(${offsetY}px)` }}
          loading="lazy"
        />
      </div>
    </section>
  )
}
