// src/components/ui/Card.tsx
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
        'overflow-hidden rounded-sm',
        'transition-all duration-300 ease-out',
        variantClasses[variant],
        paddingClasses[padding],
        hoverable && [
          'cursor-pointer',
          'hover:-translate-y-1',
          'hover:shadow-md',
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
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide'
  /** Effet de zoom au hover */
  zoomOnHover?: boolean
}

const aspectClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
}

export function CardImage({
  aspectRatio = 'square',
  zoomOnHover = true,
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
      <div
        className={cn(
          'absolute inset-0',
          zoomOnHover && [
            'transition-transform duration-500 ease-out',
            'group-hover:scale-[1.03]',
          ]
        )}
      >
        {children}
      </div>
    </div>
  )
}

/* ================================
   Card Content
   ================================ */

interface CardContentProps extends ComponentProps<'div'> {
  padding?: 'sm' | 'md' | 'lg'
}

const contentPaddingClasses = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
}

export function CardContent({
  padding = 'md',
  className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn(contentPaddingClasses[padding], className)}
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

interface CardTitleProps extends ComponentProps<'h3'> {
  /** Transition au hover parent */
  hoverEffect?: boolean
}

export function CardTitle({
  hoverEffect = false,
  className,
  children,
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        'font-heading text-lg font-medium text-foreground',
        hoverEffect && 'transition-opacity duration-200 group-hover:opacity-70',
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
      className={cn('text-sm text-muted-foreground leading-relaxed', className)}
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

/* ================================
   Card Badges Container
   ================================ */

export function CardBadges({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('absolute left-3 top-3 z-10 flex flex-col gap-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}