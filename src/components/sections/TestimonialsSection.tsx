// src/components/sections/TestimonialsSection.tsx
'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, AnimateOnScroll } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { getHomepageTemoignages } from '@/data/temoignages'
import { Star } from 'lucide-react'
import { useInView } from '@/hooks'

interface TestimonialsSectionProps {
  className?: string
}

/**
 * Section des témoignages clients
 * Avec animations au scroll
 * 
 * Note: Le fond est géré par le parent (page.tsx), pas par ce composant
 */
export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  const t = useTranslations('home.temoignages')
  const temoignages = getHomepageTemoignages(3)
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={cn('py-20 lg:py-32', className)}>
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={600}>
          <SectionHeading
            title={t('title')}
            subtitle={t('subtitle')}
            showOrnament ={false}
          />
        </AnimateOnScroll>

        {/* Note Google animée */}
        <AnimateOnScroll animation="scale-in" delay={150}>
          <div className="mb-12 flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-5 w-5 fill-amber-400 text-amber-400',
                    'transition-transform duration-300',
                    'hover:scale-125'
                  )}
                  style={{
                    transitionDelay: `${i * 50}ms`,
                  }}
                />
              ))}
            </div>
            <span className="font-heading text-lg font-semibold text-foreground">
              4.9/5
            </span>
            <span className="text-muted-foreground">
              {t('googleReviews')}
            </span>
          </div>
        </AnimateOnScroll>

        {/* Grille de témoignages avec animation staggerée */}
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {temoignages.map((temoignage, index) => (
            <div
              key={temoignage.id}
              className={cn(
                'transition-all duration-500',
                hasBeenInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              )}
              style={{
                transitionDelay: hasBeenInView ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              <TestimonialCard
                temoignage={temoignage}
                variant="default"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}