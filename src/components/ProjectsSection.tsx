import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

type Project = {
  title: string
  desc: string
  image: string
}

const projects: Project[] = [
  {
    title: 'CrossFit Pulse',
    desc: 'Remade a local gym website with stronger conversion flow, pricing clarity, and high-impact visual hierarchy.',
    image: '/gifs/crossfit-pulse.gif',
  },
  {
    title: 'JJ Dominican Barbershop',
    desc: 'Professional service layout with photo-driven trust and frictionless booking experience for mobile users.',
    image: '/gifs/jj-dominican.gif',
  },
  {
    title: 'Plumbing Rite',
    desc: 'Trade-service site optimized for urgent leads, clear service tiers, and regional trust positioning.',
    image: '/gifs/plumbing-rite.gif',
  },
]

function ProjectItem({ project, idx, visibleClass }: { project: Project; idx: number; visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <div ref={ref}>
      <div className={`ml-6 md:ml-28 ${visibleClass(isVisible, `${0.1 + idx * 0.1}s`)}`}>
        <h3 className="font-['PP_Mondwest'] text-2xl md:text-3xl font-semibold text-zinc-100">{project.title}</h3>
        <p className="mt-2 text-sm md:text-base text-zinc-400 max-w-xl">{project.desc}</p>
      </div>
      <img
        src={project.image}
        alt={project.title}
        className={`mt-6 w-full rounded-2xl shadow-[0_0_24px_rgba(255,255,255,0.1)] object-cover grayscale-[15%] contrast-125 ${visibleClass(isVisible, `${0.2 + idx * 0.1}s`)}`}
        loading="lazy"
      />
    </div>
  )
}

export default function ProjectsSection({ visibleClass }: { visibleClass: VisibleClass }) {
  return (
    <section id="work" className="max-w-[1200px] px-6 py-12 mx-auto">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project, idx) => (
          <ProjectItem key={project.title} project={project} idx={idx} visibleClass={visibleClass} />
        ))}
      </div>
    </section>
  )
}
