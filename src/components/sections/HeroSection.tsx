// src/components/sections/HeroSection.tsx
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button } from '@/components/ui'
import { ArrowRight, Award, Leaf, MapPin } from 'lucide-react'

interface HeroSectionProps {
  className?: string
}

/**
 * Section Hero de la page d'accueil
 * Design immersif avec titre, baseline et CTA
 */
export function HeroSection({ className }: HeroSectionProps) {
  const t = useTranslations('home.hero')

  return (
    <section
      className={cn(
        'relative min-h-[90vh] flex items-center justify-center',
        'overflow-hidden',
        className
      )}
    >
      {/* Background avec texture subtile */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
        
        {/* Pattern subtil zen */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C15 5 5 18 5 32c0 14 10 23 23 21' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      {/* Cercle Enso décoratif en arrière-plan */}
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
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge artisan */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              {t('badge')}
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {t('title')}
          </h1>

          {/* Sous-titre */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:mt-8 lg:text-2xl">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-12">
            <Button asChild size="lg">
              <Link href="/creations/parfums">
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

          {/* Indicateurs de confiance */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:mt-20">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" strokeWidth={1.5} />
              <span>{t('trust.artisan')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4" strokeWidth={1.5} />
              <span>{t('trust.vegan')}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              <span>{t('trust.location')}</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {t('scroll')}
          </span>
          <div className="h-12 w-px bg-linear-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}