import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div className={cn(
      'bg-cream border border-sage rounded-card shadow-card p-5 transition-shadow hover:shadow-hover',
      className,
    )}>
      {children}
    </div>
  )
}
