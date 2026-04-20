type VisibleClass = (visible: boolean, delay?: string) => string

export default function CopyrightBar({ visibleClass, isVisible }: { visibleClass: VisibleClass; isVisible: boolean }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-4">
      <div className={`${visibleClass(isVisible, '0.1s')} flex items-center justify-between text-sm text-[#051A24]`}>
        <span>BDdesigns Studio</span>
        <span>Georgia, USA</span>
      </div>
    </div>
  )
}
