// src/components/sections/CTASection.tsx
'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button, AnimateOnScroll } from '@/components/ui'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks'

interface CTASectionProps {
  className?: string
}

/**
 * Section CTA finale - invitation à visiter la boutique
 * Avec animations au scroll
 */
export function CTASection({ className }: CTASectionProps) {
  const t = useTranslations('home.cta')
  const { ref, hasBeenInView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={cn('py-20 lg:py-32', className)}>
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={700}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-foreground p-8 text-background lg:p-16">
            {/* Cercle Enso décoratif */}
            <div className="absolute -right-20 -top-20 opacity-10 transition-transform duration-1000 hover:rotate-12">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-64"
                aria-hidden="true"
              >
                <path
                  d="M 100 20 C 50 20, 20 60, 20 110 C 20 160, 50 180, 90 175"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 110 20 C 160 20, 180 60, 180 110 C 180 160, 150 180, 110 175"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Texte */}
              <div>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t('title')}
                </h2>
                <p className="mt-4 text-lg text-background/80">
                  {t('subtitle')}
                </p>

                {/* Boutons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 transition-transform hover:scale-105"
                  >
                    <a
                      href="https://maps.google.com/?q=Rue+Haute+Marcelle+22+5000+Namur+Belgique"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      {t('buttons.map')}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-background/30 text-background hover:bg-background/10 group"
                  >
                    <Link href="/contact">
                      {t('buttons.contact')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Infos contact avec animation staggerée */}
              <div 
                ref={ref as React.RefObject<HTMLDivElement>}
                className="space-y-6 rounded-lg bg-background/5 p-6 backdrop-blur-sm lg:p-8"
              >
                {/* Adresse */}
                <div 
                  className={cn(
                    'flex items-start gap-4 transition-all duration-500',
                    hasBeenInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  )}
                  style={{ transitionDelay: '0ms' }}
                >
                  <div className="rounded-full bg-background/10 p-2 transition-colors hover:bg-background/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('info.address.title')}</h3>
                    <p className="mt-1 text-sm text-background/70">
                      Rue Haute Marcelle 22<br />
                      5000 Namur, Belgique
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div 
                  className={cn(
                    'flex items-start gap-4 transition-all duration-500',
                    hasBeenInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  )}
                  style={{ transitionDelay: '100ms' }}
                >
                  <div className="rounded-full bg-background/10 p-2 transition-colors hover:bg-background/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('info.phone.title')}</h3>
                    <a
                      href="tel:+3281241294"
                      className="mt-1 block text-sm text-background/70 hover:text-background transition-colors"
                    >
                      +32 81 24 12 94
                    </a>
                  </div>
                </div>

                {/* Horaires */}
                <div 
                  className={cn(
                    'flex items-start gap-4 transition-all duration-500',
                    hasBeenInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  )}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="rounded-full bg-background/10 p-2 transition-colors hover:bg-background/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('info.hours.title')}</h3>
                    <p className="mt-1 text-sm text-background/70">
                      {t('info.hours.schedule')}<br />
                      <span className="text-background/50">{t('info.hours.note')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}