import Button from './Button'

export default function BottomNav() {
  return (
    <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2">
      <div className="liquid-glass-btn bg-zinc-950/75 border border-zinc-700/80 rounded-full px-5 md:px-8 py-2 shadow-[0_0_16px_rgba(255,255,255,0.12)] flex items-center gap-3">
        <span className="font-['PP_Mondwest'] text-2xl font-semibold text-zinc-100">B</span>
        <Button href="#contact" className="px-5 py-2 text-sm">Start a chat</Button>
      </div>
    </div>
  )
}
