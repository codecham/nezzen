// src/components/shared/ProductCard.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui'
import type { Parfum } from '@/types'

interface ProductCardProps {
  /** Données du parfum */
  parfum: Parfum
  /** Variante d'affichage */
  variant?: 'default' | 'featured' | 'compact'
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Carte produit pour afficher un parfum
 * Avec image, notes olfactives et prix
 */
export function ProductCard({
  parfum,
  variant = 'default',
  className,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const minPrice = Math.min(...parfum.formats.map((f) => f.price))

  const isFeatured = variant === 'featured'
  const isCompact = variant === 'compact'

  return (
    <Link
      href={`/creations/parfums/${parfum.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-lg bg-surface',
        'transition-all duration-500',
        'hover:shadow-lg',
        isFeatured && 'lg:flex lg:items-stretch',
        className
      )}
    >
      {/* Image */}
      <div
        className={cn(
          'relative overflow-hidden bg-muted/30',
          isCompact ? 'aspect-square' : 'aspect-4/5',
          isFeatured && 'lg:w-1/2 lg:aspect-auto lg:min-h-[400px]'
        )}
      >
        {parfum.image && !imageError ? (
          <Image
            src={parfum.image}
            alt={parfum.name}
            fill
            className={cn(
              'object-cover transition-transform duration-700',
              'group-hover:scale-105'
            )}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Placeholder élégant si pas d'image
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-muted/20 to-muted/40">
            <div className="text-center">
              <svg
                viewBox="0 0 60 60"
                className="mx-auto mb-2 h-12 w-12 text-muted-foreground/20"
                aria-hidden="true"
              >
                <path
                  d="M 30 5 C 15 5, 5 18, 5 32 C 5 46, 15 55, 28 53"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 32 5 C 47 5, 55 18, 55 32 C 55 46, 45 55, 32 53"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
              <span className="font-heading text-lg text-muted-foreground/50">
                {parfum.name}
              </span>
            </div>
          </div>
        )}

        {/* Overlay au hover */}
        <div
          className={cn(
            'absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent',
            'opacity-0 transition-opacity duration-500',
            'group-hover:opacity-100'
          )}
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {parfum.isNew && (
            <Badge variant="accent" size="sm">
              Nouveau
            </Badge>
          )}
          {parfum.awards && parfum.awards.length > 0 && (
            <Badge variant="outline" size="sm">
              Primé
            </Badge>
          )}
        </div>

        {/* Notes olfactives au hover (pour variante featured) */}
        {isFeatured && (
          <div
            className={cn(
              'absolute bottom-4 left-4 right-4',
              'translate-y-4 opacity-0 transition-all duration-500',
              'group-hover:translate-y-0 group-hover:opacity-100'
            )}
          >
            <NotesDisplay notes={parfum.notes} variant="overlay" />
          </div>
        )}
      </div>

      {/* Contenu */}
      <div
        className={cn(
          'p-4',
          isFeatured && 'lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:p-8'
        )}
      >
        {/* Catégorie */}
        {!isCompact && (
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {parfum.category}
          </span>
        )}

        {/* Nom */}
        <h3
          className={cn(
            'font-heading font-medium text-foreground',
            'mt-1 transition-colors group-hover:text-accent',
            isCompact ? 'text-lg' : 'text-xl lg:text-2xl'
          )}
        >
          {parfum.name}
        </h3>

        {/* Description courte */}
        {!isCompact && (
          <p
            className={cn(
              'mt-2 text-sm text-muted-foreground',
              'line-clamp-2',
              isFeatured && 'lg:line-clamp-3 lg:text-base'
            )}
          >
            {parfum.shortDescription}
          </p>
        )}

        {/* Notes olfactives (pour variante default) */}
        {variant === 'default' && (
          <div className="mt-4">
            <NotesDisplay notes={parfum.notes} variant="compact" />
          </div>
        )}

        {/* Notes olfactives détaillées (pour variante featured sur desktop) */}
        {isFeatured && (
          <div className="mt-6 hidden lg:block">
            <NotesDisplay notes={parfum.notes} variant="detailed" />
          </div>
        )}

        {/* Prix */}
        <div className={cn('mt-4', isFeatured && 'lg:mt-6')}>
          <span className="text-sm text-muted-foreground">À partir de </span>
          <span className="font-heading text-lg font-semibold text-foreground">
            {minPrice.toFixed(2).replace('.', ',')}€
          </span>
        </div>

        {/* CTA pour featured */}
        {isFeatured && (
          <div className="mt-6 hidden lg:block">
            <span
              className={cn(
                'inline-flex items-center gap-2',
                'text-sm font-medium text-foreground',
                'border-b border-transparent',
                'transition-colors group-hover:border-accent group-hover:text-accent'
              )}
            >
              Découvrir ce parfum
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}

/* ================================
   Notes Display Component
   ================================ */

interface NotesDisplayProps {
  notes: Parfum['notes']
  variant: 'compact' | 'detailed' | 'overlay'
}

function NotesDisplay({ notes, variant }: NotesDisplayProps) {
  if (variant === 'overlay') {
    // Version overlay sur l'image (texte blanc)
    return (
      <div className="space-y-1 text-sm text-white/90">
        <div>
          <span className="font-medium">Tête:</span>{' '}
          <span className="opacity-80">{notes.tete.join(', ')}</span>
        </div>
        <div>
          <span className="font-medium">Cœur:</span>{' '}
          <span className="opacity-80">{notes.coeur.join(', ')}</span>
        </div>
        <div>
          <span className="font-medium">Fond:</span>{' '}
          <span className="opacity-80">{notes.fond.join(', ')}</span>
        </div>
      </div>
    )
  }

  if (variant === 'detailed') {
    // Version détaillée pour featured card
    return (
      <div className="space-y-3">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Notes de tête
          </span>
          <p className="mt-1 text-sm text-foreground">{notes.tete.join(', ')}</p>
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Notes de cœur
          </span>
          <p className="mt-1 text-sm text-foreground">{notes.coeur.join(', ')}</p>
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Notes de fond
          </span>
          <p className="mt-1 text-sm text-foreground">{notes.fond.join(', ')}</p>
        </div>
      </div>
    )
  }

  // Version compacte par défaut
  return (
    <div className="flex flex-wrap gap-1.5">
      {[...notes.tete, ...notes.coeur.slice(0, 1)].slice(0, 3).map((note) => (
        <span
          key={note}
          className="rounded-full bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
        >
          {note}
        </span>
      ))}
      {notes.tete.length + notes.coeur.length + notes.fond.length > 3 && (
        <span className="px-1 text-xs text-muted-foreground">+</span>
      )}
    </div>
  )
}