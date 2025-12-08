// src/app/[locale]/creations/pack-decouverte/components.tsx
'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Button, AnimateOnScroll } from '@/components/ui'
import { useInView } from '@/hooks'
import { 
  Sparkles, 
  Check,
  ArrowRight,
  Truck,
  Quote
} from 'lucide-react'

// =============================================================================
// PACKS GRID ANIMÉ
// =============================================================================

interface PacksGridProps {
  children: React.ReactNode
}

/**
 * Grille des packs avec animation staggerée
 */
export function PacksGrid({ children }: PacksGridProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid gap-8 lg:grid-cols-2"
    >
      {/* On wrap les children avec l'animation */}
      {Array.isArray(children) ? children.map((child, index) => (
        <div
          key={index}
          className={cn(
            'transition-all duration-600',
            hasBeenInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          )}
          style={{
            transitionDelay: hasBeenInView ? `${index * 150}ms` : '0ms',
          }}
        >
          {child}
        </div>
      )) : children}
    </div>
  )
}

// =============================================================================
// PACK CARD ANIMÉ
// =============================================================================

interface PackCardProps {
  packKey: 'decouverte' | 'echantillons'
  image: string
}

/**
 * Carte pack avec animations
 */
export function PackCard({ packKey, image }: PackCardProps) {
  const t = useTranslations('packDecouverte')

  // Features keys based on pack type
  const featureKeys = packKey === 'decouverte' 
    ? ['samples', 'bottle', 'shipping', 'test']
    : ['samples', 'price', 'home', 'rhythm']

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={t(`packs.${packKey}.title`)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        {/* Title */}
        <h3 className="font-heading text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
          {t(`packs.${packKey}.title`)}
        </h3>
        <p className="mt-3 text-muted-foreground">
          {t(`packs.${packKey}.description`)}
        </p>

        {/* Samples count */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">
            {t(`packs.${packKey}.samples`)}
          </span>
        </div>

        {/* Price */}
        <div className="mt-5">
          <span className="text-3xl font-semibold text-foreground">
            {t(`packs.${packKey}.price`)}
          </span>
        </div>

        {/* Shipping info */}
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Truck className="h-4 w-4" />
          <span>{t(`packs.${packKey}.shipping`)}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(`packs.${packKey}.delivery`)}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-2.5">
          {featureKeys.map((featureKey) => (
            <li key={featureKey} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm text-foreground">
                {t(`packs.${packKey}.features.${featureKey}`)}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <Button asChild size="lg" className="w-full group/btn">
            <Link href="/contact">
              {t(`packs.${packKey}.cta`)}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

// =============================================================================
// INFO SECTION ANIMÉE
// =============================================================================

interface InfoSectionClientProps {
  title: string
  description: string
  quote: string
  author: string
}

/**
 * Section info avec quote animée
 */
export function InfoSectionClient({ title, description, quote, author }: InfoSectionClientProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <AnimateOnScroll animation="fade-in-up" duration={500}>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </AnimateOnScroll>

      {/* Quote avec animation */}
      <AnimateOnScroll animation="fade-in-up" delay={200} duration={500}>
        <div className="mx-auto mt-8 max-w-xl border-l-2 border-accent/30 pl-6 text-left">
          <Quote className="mb-2 h-5 w-5 text-accent/50" />
          <p className="italic text-foreground">
            {quote}
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            — {author}
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  )
}

// =============================================================================
// FOOTER INFO ANIMÉ
// =============================================================================

interface FooterInfoProps {
  orderNote: string
}

/**
 * Note de commande avec animation
 */
export function FooterNote({ orderNote }: FooterInfoProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <p 
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={cn(
        'mt-8 text-center text-sm text-muted-foreground transition-all duration-500',
        hasBeenInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      )}
    >
      {orderNote}
    </p>
  )
}