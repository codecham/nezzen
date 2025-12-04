// src/components/sections/RefillSection.tsx
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui'
import { Recycle, Leaf, Heart } from 'lucide-react'

interface RefillSectionProps {
  className?: string
}

/**
 * Section mettant en avant l'engagement éco-responsable et les flacons rechargeables
 */
export function RefillSection({ className }: RefillSectionProps) {
  const t = useTranslations('home.refill')

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
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-background/10 p-4">
            <Recycle className="h-8 w-8" strokeWidth={1.5} />
          </div>

          {/* Titre */}
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>

          {/* Sous-titre */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-background/80 lg:text-xl">
            {t('subtitle')}
          </p>

          {/* Points clés */}
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-background/10 p-3">
                <Recycle className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium">{t('points.refill.title')}</h3>
              <p className="mt-1 text-sm text-background/70">
                {t('points.refill.description')}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-background/10 p-3">
                <Leaf className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium">{t('points.natural.title')}</h3>
              <p className="mt-1 text-sm text-background/70">
                {t('points.natural.description')}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-background/10 p-3">
                <Heart className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-medium">{t('points.local.title')}</h3>
              <p className="mt-1 text-sm text-background/70">
                {t('points.local.description')}
              </p>
            </div>
          </div>

          {/* Citation */}
          <blockquote className="mt-12 border-t border-background/20 pt-8">
            <p className="font-heading text-xl italic text-background/90 lg:text-2xl">
              "{t('quote')}"
            </p>
          </blockquote>
        </div>
      </Container>
    </section>
  )
}
