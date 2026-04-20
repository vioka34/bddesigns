import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

type Item = {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Item[] = [
  {
    name: 'Marcus Anderson',
    role: 'CEO, Data.storage',
    quote:
      'With very little guidance, the team delivered designs that were consistently spot on and conversion-focused.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Alex Wu',
    role: 'Founder, Nexgate',
    quote:
      'BDdesigns led the creation of our best fundraising deck and launch pages to date. The quality was unreal.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'James Mitchell',
    role: 'VP Product, LaunchPad',
    quote:
      'Working with Brandon transformed our product vision into an experience users instantly understood and trusted.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    quote:
      'The design quality exceeded our expectations, and the speed made it feel like we had an in-house team.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'David Zhang',
    role: 'Head of Design, Paradigm Labs',
    quote:
      'Incredible work from start to finish. Strategic, sharp, and polished in every detail.',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
]

export default function TestimonialCarousel({ visibleClass }: { visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const items = useMemo(() => [...testimonials, ...testimonials, ...testimonials], [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => setIdx((v) => (v - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((v) => (v + 1) % testimonials.length)

  const translate = `translateX(calc(-${idx} * (427.5px + 24px)))`

  return (
    <section ref={ref} className="w-full py-20 overflow-hidden">
      <div className="px-6 md:max-w-4xl md:ml-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2 className={`${visibleClass(isVisible, '0.1s')} text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight text-[#0D212C]`}>
          What <span className="font-['PP_Mondwest']">builders</span> say
        </h2>
        <div className={`${visibleClass(isVisible, '0.2s')} flex items-center gap-2 text-[#0D212C]`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-black text-black" />
          ))}
          <span className="ml-2 text-sm">Clutch 5/5</span>
        </div>
      </div>

      <div className="px-6 mt-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="flex items-center justify-end gap-3 mb-6">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-[#0D212C]/20 inline-flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-[#0D212C]/20 inline-flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: translate }}
          >
            {items.map((item, i) => (
              <article
                key={`${item.name}-${i}`}
                className="w-[calc(100vw-48px)] md:w-[427.5px] shrink-0 bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8"
              >
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" className="mb-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7 0H0L6.3 24H13.5L11.7 0ZM28.8 0H17.1L23.4 24H30.6L28.8 0Z" fill="#0D212C" />
                </svg>
                <p className="text-base text-[#0D212C] leading-relaxed">{item.quote}</p>
                <div className="mt-8 flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-[#0D212C]">{item.name}</p>
                    <p className="text-sm text-[#273C46]">↗ {item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
