import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

type Project = {
  title: string
  desc: string
  image: string
  accent: string
}

const projects: Project[] = [
  {
    title: 'CrossFit Pulse',
    desc: 'High-energy gym remake with stronger hierarchy, punchy CTAs, and conversion-first structure.',
    image: '/gifs/crossfit-pulse.gif',
    accent: 'from-white/25 to-transparent',
  },
  {
    title: 'Plumbing Rite',
    desc: 'Trust-centric service design built for urgent calls, clear offer blocks, and local credibility.',
    image: '/gifs/plumbing-rite.gif',
    accent: 'from-white/15 to-transparent',
  },
  {
    title: 'Luxury Skincare — Velvet Skin Studio',
    desc: 'Premium wellness aesthetic with polished interactions and clear booking-driven flow.',
    image: '/gifs/luxury-skincare.gif',
    accent: 'from-white/20 to-transparent',
  },
  {
    title: 'JJ Dominican Barbershop',
    desc: 'Photo-rich barbershop experience with direct booking cues and confidence-building visuals.',
    image: '/gifs/jj-dominican.gif',
    accent: 'from-white/18 to-transparent',
  },
]

function FancyCard({ project, idx, visibleClass }: { project: Project; idx: number; visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  const rotation = idx % 2 === 0 ? '-rotate-1 md:-rotate-2' : 'rotate-1 md:rotate-2'
  const shift = idx % 2 === 0 ? 'md:-translate-y-8' : 'md:translate-y-10'

  return (
    <article
      ref={ref}
      className={`${visibleClass(isVisible, `${0.1 + idx * 0.08}s`)} tilt-card relative rounded-[28px] border border-zinc-800 bg-zinc-950 p-4 md:p-5 shadow-[0_0_24px_rgba(255,255,255,0.08)] ${rotation} ${shift}`}
    >
      <div className={`absolute inset-0 rounded-[24px] bg-gradient-to-br ${project.accent} pointer-events-none`} />

      <div className="relative z-10">
        <div className="mb-4">
          <h3 className="font-['PP_Mondwest'] text-xl md:text-2xl text-zinc-100">{project.title}</h3>
          <p className="mt-2 text-sm md:text-base text-zinc-400 leading-relaxed">{project.desc}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[220px] md:h-[260px] object-cover grayscale-[12%] contrast-125"
            loading="lazy"
          />
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection({ visibleClass }: { visibleClass: VisibleClass }) {
  return (
    <section id="work" className="max-w-[1280px] px-6 py-16 mx-auto">
      <div className="mb-10 md:mb-14 text-center">
        <h2 className="font-['PP_Mondwest'] text-4xl md:text-6xl text-zinc-100">Featured builds</h2>
        <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
          Not a basic stack of screenshots — this is a layered showcase wall with motion, contrast, and premium framing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {projects.map((project, idx) => (
          <FancyCard key={project.title} project={project} idx={idx} visibleClass={visibleClass} />
        ))}
      </div>
    </section>
  )
}
