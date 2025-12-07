// src/components/ui/Badge.tsx
import { type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends ComponentProps<'span'> {
  /** Style du badge */
  variant?: 'default' | 'outline' | 'dark' | 'success'
  /** Taille du badge */
  size?: 'sm' | 'md'
}

const variantClasses = {
  default: 'bg-foreground/5 text-foreground',
  outline: 'border border-border text-muted-foreground',
  dark: 'bg-foreground text-background',
  success: 'bg-success/10 text-success',
}

const sizeClasses = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

/**
 * Badge minimaliste
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