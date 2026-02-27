import { cn } from '@/lib/utils'

interface Props {
  variant: 'distance' | 'muddy'
  children: React.ReactNode
  className?: string
}

const variants = {
  distance: 'bg-mist text-moss',
  muddy:    'bg-cream-dark text-earth',
}

export default function Badge({ variant, children, className }: Props) {
  return (
    <span className={cn(
      'inline-flex items-center font-mono text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-pill',
      variants[variant],
      className,
    )}>
      {children}
    </span>
  )
}
