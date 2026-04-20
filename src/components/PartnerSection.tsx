import { useCallback, useMemo, useRef, useState, type MouseEvent } from 'react'
import Button from './Button'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

type Spark = {
  id: number
  x: number
  y: number
  rotate: number
  image: string
}

const images = [
  '/gifs/luxury-skincare-thumb.webp',
  '/gifs/jj-dominican-thumb.webp',
  '/gifs/serenity-touch-thumb.webp',
  '/gifs/crossfit-pulse-thumb.webp',
  '/gifs/plumbing-rite-thumb.webp',
]

export default function PartnerSection({ visibleClass }: { visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()
  const [sparks, setSparks] = useState<Spark[]>([])
  const seed = useRef(0)
  const lastSpawnRef = useRef(0)

  const pickImage = useCallback(() => {
    const idx = Math.floor(Math.random() * images.length)
    return images[idx]
  }, [])

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const now = performance.now()
      if (now - lastSpawnRef.current < 120) return
      lastSpawnRef.current = now

      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = seed.current++
      const rotate = -7 + Math.random() * 14
      const image = pickImage()

      setSparks((prev) => {
        const next = [...prev, { id, x, y, rotate, image }]
        return next.length > 14 ? next.slice(next.length - 14) : next
      })

      window.setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id))
      }, 700)
    },
    [pickImage]
  )

  const sparkEls = useMemo(
    () =>
      sparks.map((spark) => (
        <img
          key={spark.id}
          src={spark.image}
          alt=""
          className="pointer-events-none absolute w-28 h-16 object-cover rounded-md border border-zinc-700 animate-spark-fade-fast will-change-transform"
          style={{
            left: spark.x,
            top: spark.y,
            transform: `translate(-50%, -50%) rotate(${spark.rotate}deg)`,
          }}
          loading="lazy"
          decoding="async"
        />
      )),
    [sparks]
  )

  return (
    <section className="w-full py-12 px-6">
      <div
        ref={ref}
        onMouseMove={onMove}
        className="relative max-w-7xl mx-auto py-32 md:py-48 rounded-[40px] shadow-[0_0_50px_rgba(255,255,255,0.08)] bg-zinc-950 border border-zinc-800 overflow-hidden"
      >
        {sparkEls}
        <div className="relative z-10 text-center">
          <h2 className={`${visibleClass(isVisible, '0.1s')} punk-flicker font-['PP_Mondwest'] text-[48px] md:text-[64px] lg:text-[80px] text-zinc-100 mb-12`}>
            Partner with us
          </h2>
          <Button href="#contact" className={`${visibleClass(isVisible, '0.2s')} inline-flex items-center gap-3`}>
            <img
              src="/punk-avatar.png"
              alt="Punk avatar"
              className="w-10 h-10 rounded-full object-cover grayscale contrast-125"
            />
            Start chat with BDdesigns
          </Button>
        </div>
      </div>
    </section>
  )
}
