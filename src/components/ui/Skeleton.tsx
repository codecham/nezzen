// src/components/ui/Skeleton.tsx
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

/**
 * Composant Skeleton de base avec animation shimmer
 * Utilisé pour les loading states
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted/40',
        className
      )}
    />
  )
}

/**
 * Skeleton pour le texte (ligne simple)
 */
interface SkeletonTextProps {
  lines?: number
  className?: string
}

export function SkeletonText({ lines = 1, className }: SkeletonTextProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4',
            // Dernière ligne plus courte pour un effet naturel
            i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  )
}

/**
 * Skeleton pour les ProductCard
 */
interface ProductCardSkeletonProps {
  variant?: 'default' | 'featured'
  className?: string
}

export function ProductCardSkeleton({ 
  variant = 'default',
  className 
}: ProductCardSkeletonProps) {
  if (variant === 'featured') {
    return (
      <div className={cn('overflow-hidden rounded-2xl bg-surface', className)}>
        <div className="grid lg:grid-cols-2">
          {/* Image skeleton */}
          <Skeleton className="aspect-4/3 rounded-none lg:aspect-auto lg:min-h-[400px]" />
          
          {/* Content skeleton */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <Skeleton className="mb-4 h-5 w-24" /> {/* Badge */}
            <Skeleton className="mb-2 h-10 w-3/4" /> {/* Title */}
            <SkeletonText lines={3} className="mb-6" /> {/* Description */}
            <Skeleton className="h-6 w-32" /> {/* Price */}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('overflow-hidden rounded-2xl bg-surface', className)}>
      {/* Image skeleton */}
      <Skeleton className="aspect-4/3 rounded-none" />
      
      {/* Content skeleton */}
      <div className="p-6">
        <Skeleton className="mb-2 h-6 w-2/3" /> {/* Title */}
        <SkeletonText lines={2} className="mb-4" /> {/* Description */}
        <Skeleton className="h-5 w-24" /> {/* Price */}
      </div>
    </div>
  )
}

/**
 * Skeleton pour les AtelierCard
 */
export function AtelierCardSkeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('overflow-hidden rounded-2xl bg-surface border border-border', className)}>
      {/* Image skeleton */}
      <Skeleton className="aspect-video rounded-none" />
      
      {/* Content skeleton */}
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" /> {/* Icon */}
          <Skeleton className="h-5 w-20" /> {/* Badge */}
        </div>
        <Skeleton className="mb-2 h-7 w-3/4" /> {/* Title */}
        <SkeletonText lines={2} className="mb-4" /> {/* Description */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24" /> {/* Duration */}
          <Skeleton className="h-5 w-20" /> {/* Price */}
        </div>
      </div>
    </div>
  )
}

/**
 * Skeleton pour les TestimonialCard
 */
export function TestimonialCardSkeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('rounded-2xl bg-surface p-6 lg:p-8', className)}>
      {/* Quote skeleton */}
      <Skeleton className="mb-4 h-8 w-8" /> {/* Quote icon */}
      <SkeletonText lines={4} className="mb-6" />
      
      {/* Author skeleton */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" /> {/* Avatar */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" /> {/* Name */}
          <Skeleton className="h-4 w-24" /> {/* Role */}
        </div>
      </div>
    </div>
  )
}

/**
 * Skeleton pour les images
 */
interface ImageSkeletonProps {
  aspectRatio?: 'square' | 'video' | 'portrait' | '4/3'
  className?: string
}

export function ImageSkeleton({ 
  aspectRatio = 'square',
  className 
}: ImageSkeletonProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
  }

  return (
    <Skeleton 
      className={cn(
        'w-full',
        aspectClasses[aspectRatio],
        className
      )} 
    />
  )
}

/**
 * Skeleton pour une grille de produits
 */
interface ProductGridSkeletonProps {
  count?: number
  columns?: 2 | 3 | 4
  className?: string
}

export function ProductGridSkeleton({ 
  count = 6,
  columns = 3,
  className 
}: ProductGridSkeletonProps) {
  const gridClasses = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={cn('grid gap-6', gridClasses[columns], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

/**
 * Skeleton pour une section de page
 */
export function SectionSkeleton({ className }: SkeletonProps) {
  return (
    <section className={cn('py-16 lg:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading skeleton */}
        <div className="mb-12 text-center">
          <Skeleton className="mx-auto mb-4 h-10 w-64" /> {/* Title */}
          <Skeleton className="mx-auto h-6 w-96 max-w-full" /> {/* Subtitle */}
        </div>
        
        {/* Content grid skeleton */}
        <ProductGridSkeleton count={3} columns={3} />
      </div>
    </section>
  )
}