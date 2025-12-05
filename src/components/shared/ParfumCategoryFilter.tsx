// src/components/shared/ParfumCategoryFilter.tsx
'use client'

import { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { ProductCard } from './ProductCard'
import type { Parfum } from '@/types'

interface Category {
  key: string
  count: number
}

interface ParfumCategoryFilterProps {
  categories: Category[]
  parfums: Parfum[]
}

/**
 * Composant de filtrage des parfums par catégorie
 * Client component pour l'interactivité
 */
export function ParfumCategoryFilter({ categories, parfums }: ParfumCategoryFilterProps) {
  const t = useTranslations('parfums')
  const [activeCategory, setActiveCategory] = useState('all')

  // Filtrer les parfums selon la catégorie active
  const filteredParfums = useMemo(() => {
    if (activeCategory === 'all') return parfums
    return parfums.filter((p) => p.category === activeCategory)
  }, [activeCategory, parfums])

  return (
    <>
      {/* Category Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2 lg:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              'rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
              activeCategory === cat.key
                ? 'bg-foreground text-background shadow-md'
                : 'bg-surface text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            )}
          >
            {t(`categories.${cat.key}`)}
            <span
              className={cn(
                'ml-2 rounded-full px-2 py-0.5 text-xs',
                activeCategory === cat.key
                  ? 'bg-background/20 text-background'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredParfums.map((parfum, index) => (
          <div
            key={parfum.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ProductCard
              parfum={parfum}
              variant="default"
              className="h-full bg-surface"
            />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredParfums.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">{t('empty')}</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">
          {t('resultsCount', { count: filteredParfums.length })}
        </p>
      </div>
    </>
  )
}
