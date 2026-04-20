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
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
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
      if (now - lastSpawnRef.current < 80) return
      lastSpawnRef.current = now

      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = seed.current++
      const rotate = -10 + Math.random() * 20
      const image = pickImage()

      setSparks((prev) => [...prev, { id, x, y, rotate, image }])

      window.setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id))
      }, 1000)
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
          className="pointer-events-none absolute w-20 h-14 object-cover rounded-lg animate-spark-fade"
          style={{
            left: spark.x,
            top: spark.y,
            transform: `translate(-50%, -50%) rotate(${spark.rotate}deg)`,
          }}
        />
      )),
    [sparks]
  )

  return (
    <section className="w-full py-12 px-6">
      <div
        ref={ref}
        onMouseMove={onMove}
        className="relative max-w-7xl mx-auto py-32 md:py-48 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white overflow-hidden"
      >
        {sparkEls}
        <div className="relative z-10 text-center">
          <h2 className={`${visibleClass(isVisible, '0.1s')} font-['PP_Mondwest'] text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12`}>
            Partner with us
          </h2>
          <Button href="#contact" className={`${visibleClass(isVisible, '0.2s')} inline-flex items-center gap-3`}>
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120"
              alt="Founder"
              className="w-10 h-10 rounded-full object-cover"
            />
            Start chat with Brandon
          </Button>
        </div>
      </div>
    </section>
  )
}
