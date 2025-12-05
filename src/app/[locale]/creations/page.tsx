// src/app/[locale]/creations/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/ui'
import { cn } from '@/lib/utils'
import { 
  Droplets, 
  Home, 
  Sparkles, 
  Gift, 
  Package,
  ArrowRight 
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('creations')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// Type pour les catégories
interface Category {
  key: string
  href: string
  icon: LucideIcon
  color: string
  iconColor: string
  featured?: boolean
  image?: string // Image optionnelle
}

// Catégories de produits avec images
const categories: Category[] = [
  {
    key: 'parfums',
    href: '/creations/parfums',
    icon: Droplets,
    color: 'from-amber-50 to-orange-50',
    iconColor: 'text-amber-600',
    featured: true,
    image: '/images/categories/parfums.jpg', // À récupérer sur nezzen.be
  },
  {
    key: 'nezzenHome',
    href: '/creations/nezzen-home',
    icon: Home,
    color: 'from-emerald-50 to-teal-50',
    iconColor: 'text-emerald-600',
    image: '/images/categories/nezzen-home.jpg', // À récupérer sur nezzen.be
  },
  {
    key: 'cosmetiques',
    href: '/creations/cosmetiques',
    icon: Sparkles,
    color: 'from-rose-50 to-pink-50',
    iconColor: 'text-rose-600',
    image: '/images/categories/cosmetiques.jpg', // À récupérer sur nezzen.be
  },
  {
    key: 'packDecouverte',
    href: '/creations/pack-decouverte',
    icon: Package,
    color: 'from-violet-50 to-purple-50',
    iconColor: 'text-violet-600',
    image: '/images/categories/pack-decouverte.jpg', // À récupérer sur nezzen.be
  },
  {
    key: 'bonsCadeau',
    href: '/creations/bons-cadeau',
    icon: Gift,
    color: 'from-sky-50 to-blue-50',
    iconColor: 'text-sky-600',
    image: '/images/categories/bon-cadeau.jpg', // À récupérer sur nezzen.be
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-muted/30 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Ornement zen */}
            <div className="mb-8 flex justify-center">
              <svg
                viewBox="0 0 80 80"
                className="h-16 w-16 text-muted-foreground/20"
                aria-hidden="true"
              >
                <path
                  d="M 40 8 C 20 8, 8 24, 8 42 C 8 60, 20 72, 36 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-foreground/20"
                />
                <path
                  d="M 44 8 C 64 8, 72 24, 72 42 C 72 60, 60 72, 44 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-muted-foreground/40"
                />
              </svg>
            </div>

            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.key}
                category={category}
                t={t}
                isLarge={category.featured}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              {t('info.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t('info.description')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <InfoBadge icon="🌿" label={t('info.badges.vegan')} />
              <InfoBadge icon="🔄" label={t('info.badges.refill')} />
              <InfoBadge icon="🇧🇪" label={t('info.badges.local')} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

/* ================================
   Category Card Component
   ================================ */

interface CategoryCardProps {
  category: Category
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
  isLarge?: boolean
  index: number
}

function CategoryCard({ category, t, isLarge, index }: CategoryCardProps) {
  const Icon = category.icon
  const hasImage = !!category.image

  return (
    <Link
      href={category.href}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'transition-all duration-500',
        'hover:shadow-lg hover:-translate-y-1',
        // Si pas d'image, garder le gradient de fond
        !hasImage && `bg-linear-to-br ${category.color}`,
        // Si image, fond sombre pour le texte
        hasImage && 'bg-foreground',
        isLarge && 'md:col-span-2'
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image de fond si disponible */}
      {hasImage && category.image && (
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={isLarge ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />
        </div>
      )}

      <div
        className={cn(
          'relative z-10 p-8 lg:p-10',
          isLarge && 'lg:p-12',
          // Hauteur minimum pour les cards avec image
          hasImage && (isLarge ? 'min-h-80 lg:min-h-[380px]' : 'min-h-[280px]'),
          // Aligner le contenu en bas pour les images
          hasImage && 'flex flex-col justify-end'
        )}
      >
        {/* Icon - seulement si pas d'image */}
        {!hasImage && (
          <div
            className={cn(
              'mb-6 inline-flex items-center justify-center',
              'rounded-xl bg-white/80 backdrop-blur-sm',
              'shadow-sm transition-transform duration-300',
              'group-hover:scale-110',
              isLarge ? 'h-16 w-16' : 'h-14 w-14'
            )}
          >
            <Icon className={cn('h-7 w-7', category.iconColor)} />
          </div>
        )}

        {/* Content */}
        <h2
          className={cn(
            'font-heading font-semibold',
            isLarge ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl',
            hasImage ? 'text-white' : 'text-foreground'
          )}
        >
          {t(`categories.${category.key}.title`)}
        </h2>
        <p
          className={cn(
            'mt-3',
            isLarge ? 'max-w-xl lg:text-lg' : 'line-clamp-2',
            hasImage ? 'text-white/80' : 'text-muted-foreground'
          )}
        >
          {t(`categories.${category.key}.description`)}
        </p>

        {/* CTA */}
        <div
          className={cn(
            'mt-6 inline-flex items-center gap-2',
            'text-sm font-medium',
            'transition-colors',
            hasImage 
              ? 'text-white group-hover:text-accent' 
              : 'text-foreground group-hover:text-accent'
          )}
        >
          {t('cta.discover')}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Product count badge - affiché pour toutes les cards */}
        <div className={cn(
          'absolute right-8 top-8 lg:right-10 lg:top-10',
          isLarge && 'lg:right-12 lg:top-12'
        )}>
          <span className={cn(
            'rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm',
            hasImage 
              ? 'bg-white/20 text-white' 
              : 'bg-white/80 text-foreground'
          )}>
            {t(`categories.${category.key}.count`)}
          </span>
        </div>
      </div>

      {/* Decorative gradient overlay - seulement pour les cards sans image */}
      {!hasImage && (
        <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </Link>
  )
}

/* ================================
   Info Badge Component
   ================================ */

interface InfoBadgeProps {
  icon: string
  label: string
}

function InfoBadge({ icon, label }: InfoBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 shadow-sm">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  )
}