// src/components/shared/CategoriesGrid.tsx
'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { AnimateOnScroll } from '@/components/ui'
import { useInView } from '@/hooks'
import { 
  ArrowRight,
  Droplets,
  Home,
  Sparkles,
  Gift,
  Package,
  Heart,
  Star,
  Flame
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Map des icônes disponibles
const iconMap: Record<string, LucideIcon> = {
  droplets: Droplets,
  home: Home,
  sparkles: Sparkles,
  gift: Gift,
  package: Package,
  heart: Heart,
  star: Star,
  flame: Flame,
}

/**
 * Interface pour une catégorie
 * Utilise iconName (string) au lieu de icon (component)
 */
export interface Category {
  key: string
  href: string
  /** Nom de l'icône (ex: 'droplets', 'home', 'sparkles') */
  iconName: string
  color: string
  iconColor: string
  featured?: boolean
  image?: string
}

interface CategoriesGridProps {
  categories: Category[]
  className?: string
}

/**
 * Grille de catégories avec animations au scroll
 * Utilisé sur la page Hub Créations
 */
export function CategoriesGrid({ categories, className }: CategoriesGridProps) {
  const t = useTranslations('creations')
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  // Séparer les catégories featured des autres
  const featuredCategory = categories.find(c => c.featured)
  const otherCategories = categories.filter(c => !c.featured)

  return (
    <div className={cn('grid gap-6 lg:gap-8', className)}>
      {/* Catégorie featured (Parfums) - Grande carte */}
      {featuredCategory && (
        <FeaturedCategoryCard category={featuredCategory} t={t} />
      )}

      {/* Autres catégories - Grille avec animation staggerée */}
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="grid gap-6 sm:grid-cols-2 lg:gap-8"
      >
        {otherCategories.map((category, index) => (
          <CategoryCard 
            key={category.key}
            category={category}
            index={index}
            hasBeenInView={hasBeenInView}
            t={t}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * Carte de catégorie featured (grande)
 */
interface FeaturedCategoryCardProps {
  category: Category
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
}

function FeaturedCategoryCard({ category, t }: FeaturedCategoryCardProps) {
  const Icon = iconMap[category.iconName] || Sparkles

  return (
    <AnimateOnScroll animation="fade-in-up" duration={600}>
      <Link
        href={category.href}
        className={cn(
          'group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-2xl',
          'bg-linear-to-br shadow-sm',
          category.color,
          'border border-transparent transition-all duration-500',
          'hover:border-border hover:shadow-lg hover:-translate-y-1'
        )}
      >
        {/* Image de fond */}
        {category.image && (
          <div className="absolute inset-0">
            <Image
              src={category.image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
          </div>
        )}

        {/* Contenu */}
        <div className="relative z-10 p-8">
          <div className={cn(
            'mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl',
            'bg-surface/90 backdrop-blur-sm',
            'transition-transform duration-300 group-hover:scale-110'
          )}>
            <Icon className={cn('h-7 w-7', category.iconColor)} />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-background">
            {t(`categories.${category.key}.title`)}
          </h2>
          <p className="mt-2 max-w-md text-background/80">
            {t(`categories.${category.key}.description`)}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-background">
            {t('cta.discover')}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </AnimateOnScroll>
  )
}

/**
 * Carte de catégorie standard
 */
interface CategoryCardProps {
  category: Category
  index: number
  hasBeenInView: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
}

function CategoryCard({ category, index, hasBeenInView, t }: CategoryCardProps) {
  const Icon = iconMap[category.iconName] || Sparkles

  return (
    <Link
      href={category.href}
      className={cn(
        'group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-xl',
        'bg-linear-to-br shadow-sm',
        category.color,
        'border border-transparent transition-all duration-500',
        'hover:border-border hover:shadow-md hover:-translate-y-1',
        // Animation staggerée
        hasBeenInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      )}
      style={{
        transitionDelay: hasBeenInView ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Image de fond */}
      {category.image && (
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/10 to-transparent" />
        </div>
      )}

      {/* Contenu */}
      <div className="relative z-10 p-6">
        <div className={cn(
          'mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg',
          'bg-surface/90 backdrop-blur-sm',
          'transition-transform duration-300 group-hover:scale-110'
        )}>
          <Icon className={cn('h-6 w-6', category.iconColor)} />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-background">
          {t(`categories.${category.key}.title`)}
        </h3>
        <p className="mt-1 text-sm text-background/80 line-clamp-2">
          {t(`categories.${category.key}.description`)}
        </p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-background">
          {t('cta.discover')}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}