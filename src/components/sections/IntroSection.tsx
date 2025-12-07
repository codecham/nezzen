// src/components/sections/IntroSection.tsx
'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button, AnimateOnScroll } from '@/components/ui'
import { useInView } from '@/hooks'

interface IntroSectionProps {
  className?: string
}

/**
 * Section d'introduction présentant NeZ ZeN et le duo fondateur
 * Avec animations au scroll
 */
export function IntroSection({ className }: IntroSectionProps) {
  const t = useTranslations('home.intro')
  const { ref, hasBeenInView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={cn('py-20 lg:py-32', className)}>
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Texte */}
            <div className="order-2 lg:order-1">
              <AnimateOnScroll animation="fade-in-up" duration={600}>
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {t('title')}
                </h2>
              </AnimateOnScroll>
              
              <div 
                ref={ref as React.RefObject<HTMLDivElement>}
                className="mt-6 space-y-4 text-muted-foreground"
              >
                <p 
                  className={cn(
                    'text-lg leading-relaxed transition-all duration-500',
                    hasBeenInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  )}
                  style={{ transitionDelay: '100ms' }}
                >
                  {t('paragraph1')}
                </p>
                <p 
                  className={cn(
                    'leading-relaxed transition-all duration-500',
                    hasBeenInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  )}
                  style={{ transitionDelay: '200ms' }}
                >
                  {t('paragraph2')}
                </p>
              </div>

              <AnimateOnScroll animation="fade-in-up" delay={300}>
                <div className="mt-8">
                  <Button asChild variant="outline" className="group">
                    <Link href="/a-propos/notre-approche">
                      {t('cta')}
                    </Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Visuel - Les fondateurs */}
            <div className="order-1 lg:order-2">
              <AnimateOnScroll animation="fade-in-left" delay={150}>
                <div className="relative">
                  {/* Placeholder pour photo des fondateurs */}
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted/30 transition-transform duration-500 hover:scale-[1.02]">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        {/* Cercle Enso stylisé */}
                        <svg
                          viewBox="0 0 100 100"
                          className="mx-auto mb-4 h-20 w-20 text-muted-foreground/20"
                        >
                          <path
                            d="M 50 10 C 25 10, 10 28, 10 52 C 10 76, 25 90, 45 88"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 55 10 C 80 10, 90 28, 90 52 C 90 76, 75 90, 55 88"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            opacity="0.5"
                          />
                        </svg>
                        <p className="font-heading text-lg text-muted-foreground/50">
                          {t('photoPlaceholder')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badge décoratif */}
                  <div className="absolute -bottom-4 -right-4 rounded-lg bg-surface p-4 shadow-lg transition-transform duration-300 hover:scale-105 lg:-bottom-6 lg:-right-6">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                          R
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                          A
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-foreground">
                          {t('founders.names')}
                        </div>
                        <div className="text-muted-foreground">
                          {t('founders.roles')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}