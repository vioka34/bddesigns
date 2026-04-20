import Button from './Button'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

type VisibleClass = (visible: boolean, delay?: string) => string

export default function PricingSection({ visibleClass }: { visibleClass: VisibleClass }) {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end md:max-w-4xl md:ml-auto">
        <div className={`${visibleClass(isVisible, '0.1s')} rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 bg-black border border-zinc-700 shadow-[0_0_25px_rgba(255,255,255,0.07)]`}>
          <h3 className="text-[22px] font-medium text-[#F6FCFF]">Monthly Partnership</h3>
          <p className="mt-4 text-[#E0EBF0] text-base leading-relaxed">
            A dedicated creative design team.<br />
            You work directly with Brandon.
          </p>
          <p className="mt-8 text-2xl text-[#F6FCFF]">$5,000</p>
          <p className="text-[#E0EBF0] text-sm">Monthly</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Start a chat</Button>
            <Button href="#process" variant="secondary">How it works</Button>
          </div>
        </div>

        <div className={`${visibleClass(isVisible, '0.2s')} rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 bg-zinc-950 border border-zinc-800 shadow-[0_4px_16px_rgba(0,0,0,0.5)]`}>
          <h3 className="text-[22px] font-medium text-zinc-100">Custom Project</h3>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            Fixed scope, fixed timeline.<br />
            Same team, same standards.
          </p>
          <p className="mt-8 text-2xl text-zinc-100">$5,000</p>
          <p className="text-zinc-400 text-sm">Minimum</p>
          <div className="mt-8">
            <Button href="#contact" variant="tertiary">Start a chat</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
