import { type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends ComponentProps<'span'> {
  /** Style du badge */
  variant?: 'default' | 'outline' | 'success' | 'accent'
  /** Taille du badge */
  size?: 'sm' | 'md'
}

const variantClasses = {
  default: 'bg-foreground/10 text-foreground',
  outline: 'border border-foreground/20 text-foreground bg-transparent',
  success: 'bg-success/10 text-success border border-success/20',
  accent: 'bg-accent/10 text-accent border border-accent/30',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

/**
 * Badge / Étiquette
 * Utilisé pour : Vegan, Artisan certifié, Nouveau, etc.
 */
export function Badge({
  variant = 'default',
  size = 'sm',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium tracking-wide',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
