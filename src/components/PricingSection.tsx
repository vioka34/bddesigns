import Button from './Button'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

export default function PricingSection({ visibleClass }: { visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <section ref={ref} id="services" className="w-full py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${visibleClass(isVisible, '0.1s')} font-['Times_New_Roman'] text-4xl md:text-5xl text-zinc-100 mb-3`}>
          Pricing that actually makes sense
        </h2>
        <p className={`${visibleClass(isVisible, '0.2s')} text-zinc-400 mb-8`}>
          Straightforward options for small businesses. No bloated retainers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className={`${visibleClass(isVisible, '0.25s')} price-card rounded-[28px] border border-zinc-800 bg-zinc-950 p-6`}>
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Starter</p>
            <h3 className="text-zinc-100 text-2xl mt-2">$199</h3>
            <p className="text-zinc-400 text-sm mt-1">one-time build</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              <li>• 1-page conversion site</li>
              <li>• mobile optimized</li>
              <li>• contact form setup</li>
            </ul>
            <div className="mt-6">
              <Button href="#contact">Get Starter</Button>
            </div>
          </article>

          <article className={`${visibleClass(isVisible, '0.35s')} price-card rounded-[28px] border border-white/30 bg-black p-6 shadow-[0_0_28px_rgba(255,255,255,0.08)]`}>
            <p className="text-zinc-300 text-xs uppercase tracking-[0.2em]">Most Popular</p>
            <h3 className="text-zinc-100 text-3xl mt-2">$399</h3>
            <p className="text-zinc-400 text-sm mt-1">one-time build</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              <li>• up to 5 sections/pages</li>
              <li>• custom animations + polish</li>
              <li>• basic SEO + speed tuning</li>
            </ul>
            <div className="mt-6">
              <Button href="#contact">Get Popular</Button>
            </div>
          </article>

          <article className={`${visibleClass(isVisible, '0.45s')} price-card rounded-[28px] border border-zinc-800 bg-zinc-950 p-6`}>
            <p className="text-zinc-400 text-xs uppercase tracking-[0.2em]">Premium</p>
            <h3 className="text-zinc-100 text-2xl mt-2">$500</h3>
            <p className="text-zinc-400 text-sm mt-1">max one-time build</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              <li>• multi-section premium layout</li>
              <li>• custom visual identity styling</li>
              <li>• launch + handoff support</li>
            </ul>
            <div className="mt-6">
              <Button href="#contact">Get Premium</Button>
            </div>
          </article>
        </div>

        <div className={`${visibleClass(isVisible, '0.55s')} mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-300`}>
          Hosting + maintenance options: <strong className="text-zinc-100">$50/month hosting</strong> •
          <strong className="text-zinc-100"> $50/month maintenance</strong> (updates, edits, uptime checks)
        </div>
      </div>
    </section>
  )
}
