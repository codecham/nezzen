// src/components/sections/HeroSection.tsx
'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button } from '@/components/ui'
import { ArrowRight, Award, Leaf, MapPin, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  className?: string
}

/**
 * Section Hero minimaliste
 * Design épuré zen avec animations subtiles
 * Lien "Découvrir" scrolle vers #intro et met à jour l'URL
 */
export function HeroSection({ className }: HeroSectionProps) {
  const t = useTranslations('home.hero')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className={cn(
        'relative min-h-[90vh] flex items-center justify-center',
        'overflow-hidden',
        className
      )}
    >
      {/* Background simple */}
      <div className="absolute inset-0 bg-background" />

      {/* Cercle Enso décoratif - Style épais comme IntroSection */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 400 400"
          className="h-[500px] w-[500px] text-muted-foreground/5 lg:h-[700px] lg:w-[700px]"
          aria-hidden="true"
        >
          <path
            d="M 200 30 C 100 30, 30 110, 30 210 C 30 310, 100 370, 180 360"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            className="text-foreground/5"
          />
          <path
            d="M 210 30 C 310 30, 370 110, 370 210 C 370 310, 300 370, 220 360"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            className="text-muted-foreground/5"
          />
        </svg>
      </div>

      {/* Contenu */}
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Badge */}
          <div 
            className={cn(
              'mb-8 inline-flex items-center gap-2 rounded-full',
              'border border-border bg-surface/80 backdrop-blur-sm',
              'px-4 py-2',
              'transition-all duration-500 ease-out',
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
            <span className="text-sm text-muted-foreground">
              {t('badge')}
            </span>
          </div>

          {/* Titre */}
          <h1 
            className={cn(
              'font-heading text-4xl font-medium leading-[1.15] tracking-tight text-foreground',
              'sm:text-5xl md:text-6xl',
              'transition-all duration-700 ease-out',
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {t('title')}
          </h1>

          {/* Sous-titre */}
          <p 
            className={cn(
              'mx-auto mt-6 max-w-xl text-lg text-muted-foreground',
              'sm:text-xl',
              'transition-all duration-700 ease-out',
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '350ms' }}
          >
            {t('subtitle')}
          </p>

          {/* CTA */}
          <div 
            className={cn(
              'mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row',
              'transition-all duration-700 ease-out',
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '500ms' }}
          >
            <Button asChild size="lg">
              <Link href="/creations">
                {t('cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/ateliers">
                {t('cta.secondary')}
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div 
            className={cn(
              'mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground',
              'transition-all duration-700 ease-out',
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: '650ms' }}
          >
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>{t('trust.artisan')}</span>
            </div>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span>{t('trust.vegan')}</span>
            </div>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{t('trust.location')}</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator - VRAI LIEN ANCRE pour mettre à jour l'URL */}
      <a 
        href="#intro"
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2',
          'group cursor-pointer',
          'transition-all duration-700 ease-out',
          'hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded-lg',
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        )}
        style={{ transitionDelay: '800ms' }}
        aria-label={t('scroll')}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
            {t('scroll')}
          </span>
          <ChevronDown className="h-5 w-5 text-muted-foreground/40 animate-bounce" />
        </div>
      </a>
    </section>
  )
}