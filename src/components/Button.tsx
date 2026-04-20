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
    'bg-black text-white border border-white/60 shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_18px_rgba(255,255,255,0.18),inset_0_0_12px_rgba(255,255,255,0.09)] punk-flicker',
  secondary:
    'bg-zinc-900 text-zinc-100 border border-zinc-700 shadow-[0_0_0_0.5px_rgba(255,255,255,0.12),0_4px_30px_rgba(0,0,0,0.55)]',
  tertiary:
    'bg-zinc-900 text-zinc-100 border border-zinc-700 shadow-[0_0_0_0.5px_rgba(255,255,255,0.12),0_4px_30px_rgba(0,0,0,0.55)]',
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
