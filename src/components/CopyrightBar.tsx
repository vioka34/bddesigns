type VisibleClass = (visible: boolean, delay?: string) => string

export default function CopyrightBar({ visibleClass, isVisible }: { visibleClass: VisibleClass; isVisible: boolean }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pb-6">
      <div className={`${visibleClass(isVisible, '0.1s')} flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-zinc-400`}>
        <span>© {new Date().getFullYear()} BDdesigns Studio</span>
        <span>Georgia, USA • Hosting from $50/mo • Maintenance from $50/mo</span>
      </div>
    </div>
  )
}
