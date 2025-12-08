// src/app/[locale]/creations/cosmetiques/components.tsx
'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Button, Badge, AnimateOnScroll } from '@/components/ui'
import { useInView } from '@/hooks'
import { 
  Droplets,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Ban,
  ArrowRight
} from 'lucide-react'
import type { Cosmetique } from '@/types'

// =============================================================================
// COSMETIQUES GRID ANIMÉ
// =============================================================================

interface CosmetiquesGridProps {
  products: Cosmetique[]
  type: 'gel' | 'lait'
}

/**
 * Grille de cosmétiques avec animation staggerée
 */
export function CosmetiquesGrid({ products, type }: CosmetiquesGridProps) {
  const t = useTranslations('cosmetiques')
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          className={cn(
            'transition-all duration-500',
            hasBeenInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          )}
          style={{
            transitionDelay: hasBeenInView ? `${index * 100}ms` : '0ms',
          }}
        >
          <CosmetiqueCard 
            product={product} 
            type={type}
            ctaText={t('product.cta')} 
          />
        </div>
      ))}
    </div>
  )
}

// =============================================================================
// FEATURES GRID ANIMÉ
// =============================================================================

interface Feature {
  icon: 'droplets' | 'shield' | 'ban' | 'leaf'
  title: string
  description: string
}

interface FeaturesGridProps {
  features: Feature[]
}

/**
 * Grille de fonctionnalités avec animation staggerée
 */
export function FeaturesGrid({ features }: FeaturesGridProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const iconMap = {
    droplets: Droplets,
    shield: ShieldCheck,
    ban: Ban,
    leaf: Leaf,
  }

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon]
        return (
          <div
            key={feature.title}
            className={cn(
              'text-center transition-all duration-500',
              hasBeenInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            )}
            style={{
              transitionDelay: hasBeenInView ? `${index * 100}ms` : '0ms',
            }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-rose-600 transition-transform duration-300 hover:scale-110">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg font-medium text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

// =============================================================================
// COSMETIQUE CARD
// =============================================================================

interface CosmetiqueCardProps {
  product: Cosmetique
  type: 'gel' | 'lait'
  ctaText: string
}

function CosmetiqueCard({ product, type, ctaText }: CosmetiqueCardProps) {
  // Couleurs selon le type
  const colors = {
    gel: {
      icon: 'text-rose-400',
      hover: 'group-hover:text-rose-600',
      badge: 'bg-rose-50 text-rose-700',
    },
    lait: {
      icon: 'text-pink-400',
      hover: 'group-hover:text-pink-600',
      badge: 'bg-pink-50 text-pink-700',
    },
  }

  const colorSet = colors[type]

  return (
    <article className="group h-full overflow-hidden rounded-xl bg-surface shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              {type === 'gel' ? (
                <Droplets className={cn('mx-auto h-16 w-16 opacity-30', colorSet.icon)} />
              ) : (
                <Heart className={cn('mx-auto h-16 w-16 opacity-30', colorSet.icon)} />
              )}
              <span className="mt-2 block font-heading text-sm text-muted-foreground/50">
                {product.name}
              </span>
            </div>
          </div>
        )}

        {/* Badge Featured */}
        {product.isFeatured && (
          <div className="absolute left-3 top-3">
            <Badge variant="success">Coup de cœur</Badge>
          </div>
        )}

        {/* Volume Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {product.volume}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className={cn(
          'font-heading text-lg font-semibold text-foreground transition-colors duration-300',
          colorSet.hover
        )}>
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>

        {/* Ingredients tags */}
        {product.ingredients && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.ingredients.slice(0, 2).map((ingredient, index) => (
              <span 
                key={index}
                className="rounded-full bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {ingredient}
              </span>
            ))}
          </div>
        )}

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-foreground">
            {product.price.toFixed(2).replace('.', ',')} €
          </span>
          <Button asChild size="sm" variant="outline" className="group/btn">
            <Link href="/contact">
              {ctaText}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

// =============================================================================
// FOOTER INFO ANIMÉ
// =============================================================================

interface FooterInfoProps {
  badges: Array<{
    color: string
    text: string
  }>
}

/**
 * Section footer avec badges animés
 */
export function FooterInfo({ badges }: FooterInfoProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-wrap justify-center gap-4"
    >
      {badges.map((badge, index) => (
        <span
          key={badge.text}
          className={cn(
            'flex items-center gap-2 transition-all duration-500',
            hasBeenInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          )}
          style={{
            transitionDelay: hasBeenInView ? `${index * 100}ms` : '0ms',
          }}
        >
          <span className={cn('h-2 w-2 rounded-full', badge.color)} />
          <span className="text-sm text-muted-foreground">{badge.text}</span>
        </span>
      ))}
    </div>
  )
}