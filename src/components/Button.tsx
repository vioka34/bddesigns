import type { CSSProperties, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: Variant
  className?: string
  style?: CSSProperties
  target?: string
  rel?: string
}

const variantMap: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-zinc-100',
  tertiary: 'text-zinc-100',
}

const glassBgMap: Record<Variant, string> = {
  primary: 'rgba(255,255,255,0.22)',
  secondary: 'rgba(255,255,255,0.16)',
  tertiary: 'rgba(255,255,255,0.16)',
}

export default function Button({ children, href, variant = 'primary', className = '', style, target, rel }: ButtonProps) {
  const glassStyle: CSSProperties = {
    boxShadow: '0 6px 6px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)',
    transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 2.2)',
    ...style,
  }

  return (
    <a href={href} target={target} rel={rel} className="inline-block">
      <div
        className={`group relative flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm md:text-base font-semibold transition-all duration-700 hover:-translate-y-0.5 ${variantMap[variant]} ${className}`}
        style={glassStyle}
      >
        <div
          className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
          style={{
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            filter: 'url(#glass-distortion)',
            isolation: 'isolate',
          }}
        />

        <div className="absolute inset-0 z-10 rounded-[inherit]" style={{ background: glassBgMap[variant] }} />

        <div
          className="absolute inset-0 z-20 rounded-[inherit]"
          style={{
            boxShadow:
              'inset 2px 2px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 1px 1px rgba(255,255,255,0.35)',
          }}
        />

        <div
          className="absolute inset-0 z-20 rounded-[inherit] opacity-70"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.22), rgba(255,255,255,0.02) 55%, rgba(255,255,255,0.06))',
          }}
        />

        <div className="relative z-30 transition-all duration-700 group-hover:scale-95">{children}</div>
      </div>
    </a>
  )
}
