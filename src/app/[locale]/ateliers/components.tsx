// src/app/[locale]/ateliers/components.tsx
'use client'

import { type ReactNode } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button, Badge, AnimateOnScroll } from '@/components/ui'
import { useInView } from '@/hooks'
import { 
  Sparkles, 
  Flame, 
  Wine, 
  UtensilsCrossed, 
  PartyPopper,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react'
import type { Atelier } from '@/types'
import type { LucideIcon } from 'lucide-react'

// Types d'icônes par type d'atelier
const typeIcons: Record<string, LucideIcon> = {
  'decouverte-parfumeur': Sparkles,
  'creation-bougie': Flame,
  'degustation-vin': Wine,
  'dinatoire': UtensilsCrossed,
  'evenement-prive': PartyPopper,
}

// Couleurs par type d'atelier
const typeColors: Record<string, { bg: string; text: string; badge: string }> = {
  'decouverte-parfumeur': { 
    bg: 'bg-amber-50', 
    text: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700'
  },
  'creation-bougie': { 
    bg: 'bg-orange-50', 
    text: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700'
  },
  'degustation-vin': { 
    bg: 'bg-purple-50', 
    text: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700'
  },
  'dinatoire': { 
    bg: 'bg-rose-50', 
    text: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-700'
  },
  'evenement-prive': { 
    bg: 'bg-sky-50', 
    text: 'text-sky-600',
    badge: 'bg-sky-100 text-sky-700'
  },
}

/* ================================
   Atelier Card Component with Animation
   ================================ */

interface AtelierCardAnimatedProps {
  atelier: Atelier
  isReversed?: boolean
  index: number
}

export function AtelierCardAnimated({ atelier, isReversed, index }: AtelierCardAnimatedProps) {
  const t = useTranslations('ateliers')
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const Icon = typeIcons[atelier.type] || Sparkles
  const colors = typeColors[atelier.type] || typeColors['decouverte-parfumeur']
  const isPrivateEvent = atelier.type === 'evenement-prive'

  // Formater la capacité
  const capacityText = atelier.minParticipants 
    ? `${atelier.minParticipants}-${atelier.maxParticipants} pers.`
    : `Max ${atelier.maxParticipants} pers.`

  return (
    <article 
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'group overflow-hidden rounded-2xl bg-surface shadow-sm',
        'border border-border/50',
        'transition-all duration-700',
        hasBeenInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12',
        'hover:shadow-lg hover:border-border'
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className={cn(
        'flex flex-col lg:flex-row',
        isReversed && 'lg:flex-row-reverse'
      )}>
        {/* Image avec effet hover */}
        <div className="relative lg:w-2/5 overflow-hidden">
          <div className="aspect-4/3 lg:aspect-auto lg:h-full">
            {atelier.image ? (
              <Image
                src={atelier.image}
                alt={atelier.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className={cn(
                'h-full w-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105',
                colors.bg
              )}>
                <Icon className={cn('h-16 w-16', colors.text)} strokeWidth={1} />
              </div>
            )}
          </div>

          {/* Badge type */}
          <div className="absolute left-4 top-4">
            <Badge className={cn(colors.badge, 'backdrop-blur-sm')}>
              <Icon className="mr-1.5 h-3.5 w-3.5" />
              {atelier.name}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <div className="flex-1">
            <h3 className="font-heading text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              {atelier.name}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {atelier.shortDescription}
            </p>

            {/* Info tags */}
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {atelier.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {capacityText}
              </span>
            </div>

            {/* Inclusions */}
            {atelier.includes && atelier.includes.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-foreground">
                  {t('card.includes')}
                </p>
                <ul className="mt-2 space-y-1">
                  {atelier.includes.slice(0, 4).map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className={cn('mt-1.5 h-1.5 w-1.5 rounded-full shrink-0', colors.bg.replace('-50', '-400'))} />
                      {item}
                    </li>
                  ))}
                  {atelier.includes.length > 4 && (
                    <li className="text-sm text-muted-foreground italic">
                      +{atelier.includes.length - 4} autres...
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            {/* Price */}
            <div>
              {isPrivateEvent ? (
                <p className="text-sm text-muted-foreground">{t('card.onQuote')}</p>
              ) : (
                <>
                  <span className="font-heading text-2xl font-semibold text-foreground">
                    {atelier.price}€
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    / pers.
                  </span>
                  {atelier.priceDetails && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({atelier.priceDetails})
                    </span>
                  )}
                </>
              )}
            </div>

            {/* CTA */}
            <Button asChild className="group/btn">
              <Link href="/contact">
                {t('card.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ================================
   Info Card Component with Animation
   ================================ */

interface InfoCardAnimatedProps {
  icon: ReactNode
  title: string
  children: ReactNode
  delay?: number
}

export function InfoCardAnimated({ icon, title, children, delay = 0 }: InfoCardAnimatedProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'rounded-xl bg-surface p-6 shadow-sm border border-border/50',
        'transition-all duration-500',
        hasBeenInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6',
        'hover:shadow-md hover:border-border'
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {title}
      </h3>
      <div className="mt-2 space-y-1">
        {children}
      </div>
    </div>
  )
}

/* ================================
   CTA Section Component with Animation
   ================================ */

export function CTASectionAnimated() {
  const t = useTranslations('ateliers')

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={600}>
          <div className="mx-auto max-w-2xl rounded-2xl bg-foreground p-8 text-center text-background lg:p-12 transition-transform duration-500 hover:scale-[1.01]">
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-background/80">
              {t('cta.subtitle')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-background/60">{t('cta.phone')}</span>
                <a 
                  href="tel:+32493542818" 
                  className="font-medium text-background hover:underline transition-colors"
                >
                  +32 493 54 28 18
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}