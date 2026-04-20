import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: Variant
  className?: string
  target?: string
  rel?: string
}

const variantMap: Record<Variant, string> = {
  primary:
    'liquid-glass-btn bg-white/10 text-white border border-white/30',
  secondary:
    'liquid-glass-btn bg-zinc-900/55 text-zinc-100 border border-zinc-600/70',
  tertiary:
    'liquid-glass-btn bg-zinc-900/55 text-zinc-100 border border-zinc-600/70',
}

export default function Button({ children, href, variant = 'primary', className = '', target, rel }: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base font-medium transition-transform duration-300 hover:-translate-y-0.5 ${variantMap[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
