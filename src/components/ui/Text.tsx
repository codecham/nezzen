import { type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface TextProps extends ComponentProps<'p'> {
  /** Taille du texte */
  size?: 'sm' | 'base' | 'lg' | 'xl'
  /** Couleur du texte */
  variant?: 'default' | 'muted' | 'accent'
  /** Espacement entre les lignes */
  leading?: 'tight' | 'normal' | 'relaxed'
  /** Rendu comme span au lieu de p */
  asSpan?: boolean
}

const sizeClasses = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

const variantClasses = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  accent: 'text-accent',
}

const leadingClasses = {
  tight: 'leading-tight',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
}

/**
 * Paragraphe avec variants de style
 * Utilise la font Inter pour une lecture optimale
 */
export function Text({
  size = 'base',
  variant = 'default',
  leading = 'relaxed',
  asSpan = false,
  className,
  children,
  ...props
}: TextProps) {
  const Tag = asSpan ? 'span' : 'p'

  return (
    <Tag
      className={cn(
        'font-body',
        sizeClasses[size],
        variantClasses[variant],
        leadingClasses[leading],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
