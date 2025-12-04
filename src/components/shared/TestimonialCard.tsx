// src/components/shared/TestimonialCard.tsx
import { cn } from '@/lib/utils'
import { Star, Quote } from 'lucide-react'
import type { Temoignage } from '@/types'

interface TestimonialCardProps {
  /** Données du témoignage */
  temoignage: Temoignage
  /** Variante d'affichage */
  variant?: 'default' | 'featured' | 'compact'
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Carte témoignage client
 */
export function TestimonialCard({
  temoignage,
  variant = 'default',
  className,
}: TestimonialCardProps) {
  const isFeatured = variant === 'featured'
  const isCompact = variant === 'compact'

  return (
    <article
      className={cn(
        'relative flex flex-col rounded-lg bg-surface p-6',
        'border border-border/50',
        'transition-all duration-300',
        'hover:border-border hover:shadow-sm',
        isFeatured && 'lg:p-8',
        className
      )}
    >
      {/* Icône citation */}
      <Quote
        className={cn(
          'absolute right-4 top-4 text-muted/30',
          isCompact ? 'h-6 w-6' : 'h-8 w-8',
          isFeatured && 'lg:h-10 lg:w-10'
        )}
        strokeWidth={1}
      />

      {/* Étoiles */}
      {temoignage.rating && (
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < temoignage.rating!
                  ? 'fill-accent text-accent'
                  : 'fill-muted/20 text-muted/20'
              )}
            />
          ))}
        </div>
      )}

      {/* Contenu du témoignage */}
      <blockquote className="flex-1">
        <p
          className={cn(
            'text-foreground leading-relaxed',
            isCompact ? 'text-sm line-clamp-3' : 'text-base',
            isFeatured && 'lg:text-lg'
          )}
        >
          "{isCompact ? temoignage.shortContent || temoignage.content : temoignage.content}"
        </p>
      </blockquote>

      {/* Auteur */}
      <footer className="mt-6 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div
          className={cn(
            'flex items-center justify-center rounded-full bg-muted/30',
            'font-heading font-medium text-muted-foreground',
            isCompact ? 'h-8 w-8 text-xs' : 'h-10 w-10 text-sm'
          )}
        >
          {temoignage.author.charAt(0)}
        </div>

        <div>
          <div className="font-medium text-foreground">
            {temoignage.author}
          </div>
          <div className="text-sm text-muted-foreground">
            {temoignage.company || temoignage.location}
            {temoignage.context && (
              <span className="ml-1 text-muted-foreground/60">
                — {temoignage.context}
              </span>
            )}
          </div>
        </div>
      </footer>
    </article>
  )
}
