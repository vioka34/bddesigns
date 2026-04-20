import Button from './Button'

export default function BottomNav() {
  return (
    <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2">
      <div className="bg-white rounded-full px-5 md:px-8 py-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0)] flex items-center gap-3">
        <span className="font-['PP_Mondwest'] text-2xl font-semibold text-[#051A24]">B</span>
        <Button href="#contact" className="px-5 py-2 text-sm">Start a chat</Button>
      </div>
    </div>
  )
}
