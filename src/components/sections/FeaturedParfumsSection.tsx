// src/components/sections/FeaturedParfumsSection.tsx
'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button, AnimateOnScroll } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ProductCard } from '@/components/shared/ProductCard'
import { getFeaturedParfums } from '@/data/parfums'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks'

interface FeaturedParfumsSectionProps {
  className?: string
}

/**
 * Section présentant les parfums mis en avant
 * Avec animations au scroll staggerées
 * 
 * Note: Le fond est géré par le parent (page.tsx), pas par ce composant
 */
export function FeaturedParfumsSection({ className }: FeaturedParfumsSectionProps) {
  const t = useTranslations('home.parfums')
  const featuredParfums = getFeaturedParfums(4)
  const { ref: gridRef, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  // Séparer le premier (featured large) du reste
  const [mainParfum, ...otherParfums] = featuredParfums

  return (
    <section className={cn('py-20 lg:py-32', className)}>
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={600}>
          <SectionHeading
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </AnimateOnScroll>

        <div className="grid gap-6 lg:gap-8">
          {/* Parfum principal (large) */}
          {mainParfum && (
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <ProductCard
                parfum={mainParfum}
                variant="featured"
                className="bg-neutral-50"
              />
            </AnimateOnScroll>
          )}

          {/* Autres parfums (grille) avec animation staggerée */}
          <div 
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {otherParfums.map((parfum, index) => (
              <div
                key={parfum.id}
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
                <ProductCard
                  parfum={parfum}
                  variant="default"
                  className="bg-neutral-50"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-in-up" delay={400}>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/creations/parfums">
                {t('cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}