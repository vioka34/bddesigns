import { Zap, Gauge, Layers, Sparkles } from 'lucide-react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

export default function ImpactShowcase({ visibleClass }: { visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <section ref={ref} className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-[36px] border border-zinc-800 bg-zinc-950 p-6 md:p-10 shadow-[0_0_50px_rgba(255,255,255,0.06)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className={`${visibleClass(isVisible, '0.1s')} text-[34px] md:text-[48px] leading-[1.05] text-zinc-100`}>
            Built to <span className="font-['Times_New_Roman']">impress</span>,
            <br /> engineered to convert.
          </h2>
          <p className={`${visibleClass(isVisible, '0.2s')} text-zinc-400 max-w-md`}>
            Instead of placeholder reviews, this section showcases what clients actually care about:
            speed, polish, and visual impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className={`${visibleClass(isVisible, '0.25s')} rounded-3xl border border-zinc-800 bg-black p-5 relative overflow-hidden`}>
            <div className="spark-grid absolute inset-0 opacity-20" />
            <Gauge className="w-5 h-5 text-zinc-200 mb-3" />
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Load + Feel</p>
            <p className="text-zinc-100 text-3xl mt-2">0.9s</p>
            <p className="text-zinc-400 text-sm mt-1">Hero paint target</p>
          </div>

          <div className={`${visibleClass(isVisible, '0.35s')} rounded-3xl border border-zinc-800 bg-black p-5 relative overflow-hidden`}>
            <div className="spark-grid absolute inset-0 opacity-20" />
            <Layers className="w-5 h-5 text-zinc-200 mb-3" />
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Section flow</p>
            <p className="text-zinc-100 text-3xl mt-2">7+</p>
            <p className="text-zinc-400 text-sm mt-1">Conversion-focused blocks</p>
          </div>

          <div className={`${visibleClass(isVisible, '0.45s')} rounded-3xl border border-zinc-800 bg-black p-5 relative overflow-hidden`}>
            <div className="spark-grid absolute inset-0 opacity-20" />
            <Zap className="w-5 h-5 text-zinc-200 mb-3" />
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Turnaround</p>
            <p className="text-zinc-100 text-3xl mt-2">48h</p>
            <p className="text-zinc-400 text-sm mt-1">First impressive draft</p>
          </div>
        </div>

        <div className={`${visibleClass(isVisible, '0.55s')} rounded-3xl border border-zinc-800 bg-black p-5 md:p-8 relative overflow-hidden`}>
          <div className="absolute -top-12 -right-10 w-52 h-52 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -left-10 w-52 h-52 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-zinc-400 text-sm uppercase tracking-[0.2em]">Signature effect</p>
              <p className="text-zinc-100 text-2xl md:text-3xl mt-2 flex items-center gap-2">
                Spark-driven motion system <Sparkles className="w-5 h-5" />
              </p>
            </div>
            <div className="flex gap-2">
              <span className="spark-dot" />
              <span className="spark-dot" />
              <span className="spark-dot" />
              <span className="spark-dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
