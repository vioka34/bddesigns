import { ArrowUpRight } from 'lucide-react'
import Button from './Button'

type VisibleClass = (visible: boolean, delay?: string) => string

export default function Footer({ visibleClass, isVisible }: { visibleClass: VisibleClass; isVisible: boolean }) {
  return (
    <footer id="contact" className="w-full pt-12 pb-8 px-6 max-w-[1200px] mx-auto">
      <div className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <h3 className={`${visibleClass(isVisible, '0.1s')} font-['PP_Mondwest'] text-3xl text-zinc-100`}>
              Let’s build your next site.
            </h3>
            <p className={`${visibleClass(isVisible, '0.12s')} text-zinc-400 mt-2 max-w-md`}>
              Quick turnaround, clear pricing, and a style your customers remember.
            </p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <Button href="mailto:brandondillon.webdesign@gmail.com">Email us</Button>
              <Button href="#services" variant="secondary">See pricing</Button>
            </div>
          </div>

          <div className={`${visibleClass(isVisible, '0.2s')} flex items-start gap-6`}>
            <ArrowUpRight className="w-5 h-5 text-zinc-300 mt-1" />
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3 text-base text-zinc-200">
                <a href="#services" className="footer-link block hover:opacity-70 transition">Services</a>
                <a href="#work" className="footer-link block hover:opacity-70 transition">Work</a>
                <a href="#about" className="footer-link block hover:opacity-70 transition">About</a>
              </div>
              <div className="space-y-3 text-base text-zinc-200">
                <a href="https://x.com" target="_blank" rel="noreferrer" className="footer-link block hover:opacity-70 transition">x.com</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link block hover:opacity-70 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
