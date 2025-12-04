import { type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

/* ================================
   Card Container
   ================================ */

interface CardProps extends ComponentProps<'article'> {
  /** Style de la carte */
  variant?: 'default' | 'elevated' | 'outlined'
  /** Effet au hover */
  hoverable?: boolean
  /** Padding interne */
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variantClasses = {
  default: 'bg-surface',
  elevated: 'bg-surface shadow-sm',
  outlined: 'bg-surface border border-border',
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  variant = 'default',
  hoverable = false,
  padding = 'none',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <article
      className={cn(
        'overflow-hidden transition-all duration-300',
        variantClasses[variant],
        paddingClasses[padding],
        hoverable && [
          'cursor-pointer',
          'hover:shadow-md hover:-translate-y-1',
        ],
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}

/* ================================
   Card Image
   ================================ */

interface CardImageProps extends ComponentProps<'div'> {
  /** Ratio d'aspect */
  aspectRatio?: 'square' | 'video' | 'portrait'
}

const aspectClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
}

export function CardImage({
  aspectRatio = 'square',
  className,
  children,
  ...props
}: CardImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-background-alt',
        aspectClasses[aspectRatio],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ================================
   Card Content
   ================================ */

interface CardContentProps extends ComponentProps<'div'> {
  /** Padding du contenu */
  padding?: 'sm' | 'md' | 'lg'
}

export function CardContent({
  padding = 'md',
  className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn(paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </div>
  )
}

/* ================================
   Card Header
   ================================ */

export function CardHeader({
  className,
  children,
  ...props
}: ComponentProps<'header'>) {
  return (
    <header className={cn('space-y-1', className)} {...props}>
      {children}
    </header>
  )
}

/* ================================
   Card Title
   ================================ */

export function CardTitle({
  className,
  children,
  ...props
}: ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'font-heading text-lg font-medium text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

/* ================================
   Card Description
   ================================ */

export function CardDescription({
  className,
  children,
  ...props
}: ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  )
}

/* ================================
   Card Footer
   ================================ */

export function CardFooter({
  className,
  children,
  ...props
}: ComponentProps<'footer'>) {
  return (
    <footer
      className={cn('flex items-center justify-between pt-4', className)}
      {...props}
    >
      {children}
    </footer>
  )
}
