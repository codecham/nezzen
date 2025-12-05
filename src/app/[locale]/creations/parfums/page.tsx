// src/app/[locale]/creations/parfums/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { parfums } from '@/data/parfums'
import { ParfumCategoryFilter } from '@/components/shared/ParfumCategoryFilter'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('parfums')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// Catégories disponibles
const categories = [
  { key: 'all', count: parfums.length },
  { key: 'classiques', count: parfums.filter(p => p.category === 'classiques').length },
  { key: 'floraux', count: parfums.filter(p => p.category === 'floraux').length },
  { key: 'voyages', count: parfums.filter(p => p.category === 'voyages').length },
  { key: 'gourmands', count: parfums.filter(p => p.category === 'gourmands').length },
]

/**
 * Page liste des parfums
 * Affiche tous les parfums avec filtrage par catégorie
 */
export default function ParfumsPage() {
  const t = useTranslations('parfums')

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-16 lg:py-24">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-muted/30 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-muted-foreground">
                {t('hero.badge', { count: parfums.length })}
              </span>
            </div>

            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Filters + Products Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          {/* Category Filter - Client Component */}
          <ParfumCategoryFilter 
            categories={categories}
            parfums={parfums}
          />
        </Container>
      </section>

      {/* Bottom Info */}
      <section className="border-t border-border bg-muted/20 py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-muted-foreground">
              {t('info.refill')}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {t('info.vegan')}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {t('info.artisan')}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                {t('info.formats')}
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}