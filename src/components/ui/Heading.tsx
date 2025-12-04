import { type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps extends Omit<ComponentProps<'h1'>, 'ref'> {
  /** Niveau sémantique du titre */
  as?: HeadingLevel
  /** Style visuel (peut différer du niveau sémantique) */
  size?: HeadingLevel
}

const sizeClasses: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight',
  h2: 'text-3xl sm:text-4xl font-semibold tracking-tight',
  h3: 'text-2xl sm:text-3xl font-medium',
  h4: 'text-xl sm:text-2xl font-medium',
}

/**
 * Titre avec font Cormorant Garamond
 * Le niveau sémantique (as) et visuel (size) peuvent être différents
 */
export function Heading({
  as: Tag = 'h2',
  size,
  className,
  children,
  ...props
}: HeadingProps) {
  const visualSize = size || Tag

  return (
    <Tag
      className={cn(
        'font-heading text-foreground',
        sizeClasses[visualSize],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
