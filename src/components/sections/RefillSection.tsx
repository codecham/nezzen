// src/components/sections/RefillSection.tsx
'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, AnimateOnScroll } from '@/components/ui'
import { Recycle, Leaf, Heart } from 'lucide-react'
import { useInView } from '@/hooks'

interface RefillSectionProps {
  className?: string
}

/**
 * Section mettant en avant l'engagement éco-responsable et les flacons rechargeables
 * Avec animations au scroll
 */
export function RefillSection({ className }: RefillSectionProps) {
  const t = useTranslations('home.refill')
  const { ref, hasBeenInView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      className={cn(
        'relative py-20 lg:py-32',
        'bg-foreground text-background',
        className
      )}
    >
      {/* Pattern de fond */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5c-8 0-15 8-15 17s7 13 14 12' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icône */}
          <AnimateOnScroll animation="scale-in" duration={500}>
            <div className="mb-8 inline-flex items-center justify-center rounded-full bg-background/10 p-4 transition-transform duration-300 hover:scale-110">
              <Recycle className="h-8 w-8" strokeWidth={1.5} />
            </div>
          </AnimateOnScroll>

          {/* Titre */}
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
          </AnimateOnScroll>

          {/* Sous-titre */}
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-background/80 lg:text-xl">
              {t('subtitle')}
            </p>
          </AnimateOnScroll>

          {/* Points clés avec animation staggerée */}
          <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className="mt-12 grid gap-8 sm:grid-cols-3"
          >
            {/* Refill */}
            <div 
              className={cn(
                'flex flex-col items-center transition-all duration-500',
                hasBeenInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="mb-3 rounded-full bg-background/10 p-3 transition-all duration-300 hover:bg-background/20 hover:scale-110">
                <Recycle className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium">{t('points.refill.title')}</h3>
              <p className="mt-1 text-sm text-background/70">
                {t('points.refill.description')}
              </p>
            </div>

            {/* Natural */}
            <div 
              className={cn(
                'flex flex-col items-center transition-all duration-500',
                hasBeenInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="mb-3 rounded-full bg-background/10 p-3 transition-all duration-300 hover:bg-background/20 hover:scale-110">
                <Leaf className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium">{t('points.natural.title')}</h3>
              <p className="mt-1 text-sm text-background/70">
                {t('points.natural.description')}
              </p>
            </div>

            {/* Local */}
            <div 
              className={cn(
                'flex flex-col items-center transition-all duration-500',
                hasBeenInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="mb-3 rounded-full bg-background/10 p-3 transition-all duration-300 hover:bg-background/20 hover:scale-110">
                <Heart className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium">{t('points.local.title')}</h3>
              <p className="mt-1 text-sm text-background/70">
                {t('points.local.description')}
              </p>
            </div>
          </div>

          {/* Citation */}
          <AnimateOnScroll animation="fade-in-up" delay={600}>
            <blockquote className="mt-12 border-t border-background/20 pt-8">
              <p className="font-heading text-xl italic text-background/90 lg:text-2xl">
                &ldquo;{t('quote')}&rdquo;
              </p>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}