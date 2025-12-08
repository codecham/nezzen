// src/app/[locale]/creations/nezzen-home/components.tsx
'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Button, Badge, AnimateOnScroll } from '@/components/ui'
import { useInView } from '@/hooks'
import { 
  Clock, 
  Maximize, 
  Flame, 
  Scale, 
  Leaf, 
  Sparkles, 
  Timer,
  ArrowRight
} from 'lucide-react'
import type { ParfumAmbiance, Bougie } from '@/types'

// =============================================================================
// DIFFUSEURS GRID ANIMÉ
// =============================================================================

interface DiffuseursGridProps {
  products: ParfumAmbiance[]
}

/**
 * Grille de diffuseurs avec animation staggerée
 */
export function DiffuseursGrid({ products }: DiffuseursGridProps) {
  const t = useTranslations('nezzenHome')
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
            transitionDelay: hasBeenInView ? `${index * 80}ms` : '0ms',
          }}
        >
          <DiffuseurCard product={product} ctaText={t('product.cta')} />
        </div>
      ))}
    </div>
  )
}

// =============================================================================
// BOUGIES GRID ANIMÉ
// =============================================================================

interface BougiesGridProps {
  products: Bougie[]
}

/**
 * Grille de bougies avec animation staggerée
 */
export function BougiesGrid({ products }: BougiesGridProps) {
  const t = useTranslations('nezzenHome')
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
          <BougieCard product={product} ctaText={t('product.cta')} />
        </div>
      ))}
    </div>
  )
}

// =============================================================================
// INFO BADGES ANIMÉS
// =============================================================================

interface InfoBadgesProps {
  durationText: string
  coverageText: string
}

/**
 * Badges d'information avec animation
 */
export function InfoBadges({ durationText, coverageText }: InfoBadgesProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mb-10 flex flex-wrap justify-center gap-4"
    >
      <div 
        className={cn(
          'flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 transition-all duration-500',
          hasBeenInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        )}
        style={{ transitionDelay: hasBeenInView ? '100ms' : '0ms' }}
      >
        <Clock className="h-4 w-4 text-emerald-600" />
        <span className="text-sm font-medium text-emerald-700">
          {durationText}
        </span>
      </div>
      <div 
        className={cn(
          'flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 transition-all duration-500',
          hasBeenInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        )}
        style={{ transitionDelay: hasBeenInView ? '200ms' : '0ms' }}
      >
        <Maximize className="h-4 w-4 text-teal-600" />
        <span className="text-sm font-medium text-teal-700">
          {coverageText}
        </span>
      </div>
    </div>
  )
}

// =============================================================================
// FEATURES GRID ANIMÉ
// =============================================================================

interface Feature {
  icon: 'leaf' | 'sparkles' | 'timer'
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
    leaf: Leaf,
    sparkles: Sparkles,
    timer: Timer,
  }

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mt-12 grid gap-8 sm:grid-cols-3"
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
              transitionDelay: hasBeenInView ? `${index * 150}ms` : '0ms',
            }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform duration-300 hover:scale-110">
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
// DIFFUSEUR CARD
// =============================================================================

interface DiffuseurCardProps {
  product: ParfumAmbiance
  ctaText: string
}

function DiffuseurCard({ product, ctaText }: DiffuseurCardProps) {
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
            <span className="text-4xl text-muted-foreground/40">
              {product.name.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="success">Nouveau</Badge>
          )}
          {product.isFeatured && (
            <Badge variant="outline">Populaire</Badge>
          )}
        </div>

        {/* Type badge */}
        <div className="absolute bottom-3 right-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {product.type === 'diffuseur' ? 'Bâtonnets' : 'Spray'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-emerald-700">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>

        {/* Info */}
        {product.duration && (
          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {product.duration}
            </span>
            {product.coverage && (
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5" />
                {product.coverage}
              </span>
            )}
          </div>
        )}

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-foreground">
            {product.price.toFixed(2)} €
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
// BOUGIE CARD
// =============================================================================

interface BougieCardProps {
  product: Bougie
  ctaText: string
}

function BougieCard({ product, ctaText }: BougieCardProps) {
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Flame className="h-12 w-12 text-muted-foreground/40" />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="success">Nouveau</Badge>
          )}
          {product.isFeatured && (
            <Badge variant="outline">Populaire</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-amber-700">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {product.shortDescription}
        </p>

        {/* Info */}
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {product.burnTime}
          </span>
          <span className="flex items-center gap-1">
            <Scale className="h-3.5 w-3.5" />
            {product.weight}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-foreground">
            {product.price.toFixed(2)} €
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