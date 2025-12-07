// src/components/sections/PhilosophieSection.tsx
'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, AnimateOnScroll } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Beaker, Sparkles, Eye, Lightbulb } from 'lucide-react'
import { useInView } from '@/hooks'

interface PhilosophieSectionProps {
  className?: string
}

const principles = [
  {
    key: 'jus',
    icon: Beaker,
  },
  {
    key: 'experience',
    icon: Sparkles,
  },
  {
    key: 'transparence',
    icon: Eye,
  },
  {
    key: 'innovation',
    icon: Lightbulb,
  },
] as const

/**
 * Section présentant les 4 principes de création de NeZ ZeN
 * Avec animations au scroll
 */
export function PhilosophieSection({ className }: PhilosophieSectionProps) {
  const t = useTranslations('home.philosophie')
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={cn('py-20 lg:py-32', className)}>
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={600}>
          <SectionHeading
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimateOnScroll>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.key}
                className={cn(
                  'group relative rounded-lg p-6 lg:p-8',
                  'bg-surface border border-transparent',
                  'transition-all duration-500',
                  'hover:border-border hover:shadow-sm',
                  // Animation initiale
                  hasBeenInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                )}
                style={{
                  transitionDelay: hasBeenInView ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Numéro */}
                <span className="absolute right-4 top-4 font-heading text-5xl font-bold text-muted/20 transition-colors duration-300 group-hover:text-accent/20">
                  {index + 1}
                </span>

                {/* Icône */}
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-muted/30 p-3 transition-all duration-300 group-hover:bg-accent/10 group-hover:scale-110">
                  <Icon
                    className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-accent"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Titre */}
                <h3 className="mb-2 font-heading text-xl font-medium text-foreground">
                  {t(`${principle.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`${principle.key}.description`)}
                </p>

                {/* Ligne décorative animée au hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 origin-left scale-x-0 bg-accent/30 transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}