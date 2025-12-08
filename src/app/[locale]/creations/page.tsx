// src/app/[locale]/creations/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { PageHero, CategoriesGrid } from '@/components/shared'
import type { Category } from '@/components/shared/CategoriesGrid'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('creations')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// Catégories de produits avec noms d'icônes (strings)
const categories: Category[] = [
  {
    key: 'parfums',
    href: '/creations/parfums',
    iconName: 'droplets',
    color: 'from-amber-50 to-orange-50',
    iconColor: 'text-amber-600',
    featured: true,
    image: '/images/categories/parfums.jpg',
  },
  {
    key: 'nezzenHome',
    href: '/creations/nezzen-home',
    iconName: 'home',
    color: 'from-emerald-50 to-teal-50',
    iconColor: 'text-emerald-600',
    image: '/images/categories/nezzen-home.jpg',
  },
  {
    key: 'cosmetiques',
    href: '/creations/cosmetiques',
    iconName: 'sparkles',
    color: 'from-rose-50 to-pink-50',
    iconColor: 'text-rose-600',
    image: '/images/categories/cosmetiques.jpg',
  },
  {
    key: 'packDecouverte',
    href: '/creations/pack-decouverte',
    iconName: 'package',
    color: 'from-violet-50 to-purple-50',
    iconColor: 'text-violet-600',
    image: '/images/categories/pack-decouverte.jpg',
  },
  {
    key: 'bonsCadeau',
    href: '/creations/bons-cadeau',
    iconName: 'gift',
    color: 'from-sky-50 to-blue-50',
    iconColor: 'text-sky-600',
    image: '/images/categories/bon-cadeau.jpg',
  },
]

/**
 * Page Hub Créations
 * Vue d'ensemble de toutes les catégories de produits
 */
export default function CreationsPage() {
  const t = useTranslations('creations')

  return (
    <>
      {/* Hero Section avec animations */}
      <PageHero
        badgeIcon="sparkles"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="lg"
      />

      {/* Grille des catégories avec animations */}
      <section className="py-12 lg:py-20">
        <Container>
          <CategoriesGrid categories={categories} />
        </Container>
      </section>

      {/* Section footer avec valeurs */}
      <CreationsFooter />
    </>
  )
}

/**
 * Section footer avec les valeurs de la marque
 */
function CreationsFooter() {
  const t = useTranslations('creations')

  return (
    <section className="border-t border-border bg-muted/20 py-12">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            {t('info.description')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {t('info.badges.vegan')}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {t('info.badges.local')}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              {t('info.badges.refill')}
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}