import { ArrowUpRight } from 'lucide-react'
import Button from './Button'

type VisibleClass = (visible: boolean, delay?: string) => string

export default function Footer({ visibleClass, isVisible }: { visibleClass: VisibleClass; isVisible: boolean }) {
  return (
    <footer id="contact" className="w-full py-12 px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <Button href="mailto:brandondillon.webdesign@gmail.com" className={visibleClass(isVisible, '0.1s')}>
          Start a chat
        </Button>

        <div className={`${visibleClass(isVisible, '0.2s')} flex items-start gap-8`}>
          <ArrowUpRight className="w-5 h-5 text-zinc-200 mt-1" />
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3 text-base text-zinc-200">
              <a href="#services" className="block hover:opacity-70 transition">Services</a>
              <a href="#work" className="block hover:opacity-70 transition">Work</a>
              <a href="#about" className="block hover:opacity-70 transition">About</a>
            </div>
            <div className="space-y-3 text-base text-zinc-200">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="block hover:opacity-70 transition">x.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block hover:opacity-70 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
