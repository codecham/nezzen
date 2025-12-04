// src/components/sections/TestimonialsSection.tsx
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { getHomepageTemoignages } from '@/data/temoignages'
import { Star } from 'lucide-react'

interface TestimonialsSectionProps {
  className?: string
}

/**
 * Section des témoignages clients
 */
export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  const t = useTranslations('home.temoignages')
  const temoignages = getHomepageTemoignages(3)

  return (
    <section className={cn('py-20 lg:py-32 bg-muted/20', className)}>
      <Container>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Note Google */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-accent text-accent"
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

        {/* Grille de témoignages */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {temoignages.map((temoignage) => (
            <TestimonialCard
              key={temoignage.id}
              temoignage={temoignage}
              variant="default"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
