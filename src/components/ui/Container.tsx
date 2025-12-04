import { type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends ComponentProps<'div'> {
  /** Taille maximale du container */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Centrer le contenu */
  centered?: boolean
  /** Padding horizontal */
  padding?: boolean
}

const sizeClasses = {
  sm: 'max-w-3xl',      // 768px
  md: 'max-w-5xl',      // 1024px
  lg: 'max-w-6xl',      // 1152px
  xl: 'max-w-7xl',      // 1280px
  full: 'max-w-full',
}

/**
 * Container responsive avec max-width et padding
 * Utilisé pour wrapper le contenu des sections
 */
export function Container({
  size = 'xl',
  centered = true,
  padding = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full',
        sizeClasses[size],
        centered && 'mx-auto',
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
