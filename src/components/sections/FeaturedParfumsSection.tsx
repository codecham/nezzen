// src/components/sections/FeaturedParfumsSection.tsx
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ProductCard } from '@/components/shared/ProductCard'
import { getFeaturedParfums } from '@/data/parfums'
import { ArrowRight } from 'lucide-react'

interface FeaturedParfumsSectionProps {
  className?: string
}

/**
 * Section présentant les parfums mis en avant
 */
export function FeaturedParfumsSection({ className }: FeaturedParfumsSectionProps) {
  const t = useTranslations('home.parfums')
  const featuredParfums = getFeaturedParfums(4)

  // Séparer le premier (featured large) du reste
  const [mainParfum, ...otherParfums] = featuredParfums

  return (
    <section className={cn('py-20 lg:py-32 bg-muted/20', className)}>
      <Container>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid gap-6 lg:gap-8">
          {/* Parfum principal (large) */}
          {mainParfum && (
            <ProductCard
              parfum={mainParfum}
              variant="featured"
              className="bg-surface"
            />
          )}

          {/* Autres parfums (grille) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {otherParfums.map((parfum) => (
              <ProductCard
                key={parfum.id}
                parfum={parfum}
                variant="default"
                className="bg-surface"
              />
            ))}
          </div>
        </div>

        {/* CTA voir tous les parfums */}
        <div className="mt-12 text-center lg:mt-16">
          <Button asChild variant="outline" size="lg">
            <Link href="/creations/parfums">
              {t('cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
