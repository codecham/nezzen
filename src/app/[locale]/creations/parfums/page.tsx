// src/app/[locale]/creations/parfums/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container, AnimateOnScroll } from '@/components/ui'
import { PageHero, ParfumCategoryFilter } from '@/components/shared'
import { parfums } from '@/data/parfums'

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
      {/* Hero Section avec animations */}
      <PageHero
        badge={t('hero.badge', { count: parfums.length })}
        badgeIcon="droplets"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="md"
      />

      {/* Filters + Products Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          <ParfumCategoryFilter 
            categories={categories}
            parfums={parfums}
          />
        </Container>
      </section>

      {/* Bottom Info avec animation */}
      <ParfumsFooter />
    </>
  )
}

/**
 * Section footer avec informations sur les parfums
 */
function ParfumsFooter() {
  const t = useTranslations('parfums')

  return (
    <section className="border-t border-border bg-muted/20 py-12">
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={500}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-muted-foreground">
              {t('info.refill')}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {t('info.vegan')}
              </span>
              <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {t('info.artisan')}
              </span>
              <span className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                {t('info.formats')}
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}