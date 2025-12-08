// src/components/shared/ParfumCategoryFilter.tsx
'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { ProductCard } from './ProductCard'
import { useInView } from '@/hooks'
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
 * Client component avec animations fluides
 */
export function ParfumCategoryFilter({ categories, parfums }: ParfumCategoryFilterProps) {
  const t = useTranslations('parfums')
  const [activeCategory, setActiveCategory] = useState('all')
  const [isAnimating, setIsAnimating] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const { ref: filterRef, hasBeenInView: filtersVisible } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  // Filtrer les parfums selon la catégorie active
  const filteredParfums = useMemo(() => {
    if (activeCategory === 'all') return parfums
    return parfums.filter((p) => p.category === activeCategory)
  }, [activeCategory, parfums])

  // Animation lors du changement de filtre
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return
    
    setIsAnimating(true)
    
    // Délai pour permettre l'animation de sortie
    setTimeout(() => {
      setActiveCategory(category)
      // Reset animation state après le changement
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 200)
  }

  return (
    <>
      {/* Category Tabs avec animation d'entrée */}
      <div 
        ref={filterRef as React.RefObject<HTMLDivElement>}
        className={cn(
          'mb-10 flex flex-wrap justify-center gap-2 lg:mb-12',
          'transition-all duration-500',
          filtersVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        )}
      >
        {categories.map((cat, index) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={cn(
              'rounded-full px-5 py-2.5 text-sm font-medium',
              'transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
              activeCategory === cat.key
                ? 'bg-foreground text-background shadow-md scale-105'
                : 'bg-surface text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:scale-102'
            )}
            style={{
              transitionDelay: filtersVisible ? `${index * 50}ms` : '0ms',
            }}
          >
            {t(`categories.${cat.key}`)}
            <span
              className={cn(
                'ml-2 rounded-full px-2 py-0.5 text-xs transition-colors duration-300',
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

      {/* Products Grid avec animations */}
      <div 
        ref={gridRef}
        className={cn(
          'grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
          'transition-opacity duration-200',
          isAnimating ? 'opacity-0' : 'opacity-100'
        )}
      >
        {filteredParfums.map((parfum, index) => (
          <ProductCardAnimated
            key={parfum.id}
            parfum={parfum}
            index={index}
            isAnimating={isAnimating}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredParfums.length === 0 && !isAnimating && (
        <div className="py-20 text-center animate-fade-in">
          <p className="text-muted-foreground">{t('empty')}</p>
        </div>
      )}

      {/* Results count avec animation */}
      <div 
        className={cn(
          'mt-10 text-center transition-all duration-300',
          isAnimating ? 'opacity-0' : 'opacity-100'
        )}
      >
        <p className="text-sm text-muted-foreground">
          {t('resultsCount', { count: filteredParfums.length })}
        </p>
      </div>
    </>
  )
}

/**
 * ProductCard avec animation individuelle
 */
interface ProductCardAnimatedProps {
  parfum: Parfum
  index: number
  isAnimating: boolean
}

function ProductCardAnimated({ parfum, index, isAnimating }: ProductCardAnimatedProps) {
  const { ref, hasBeenInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '50px 0px',
  })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all duration-500',
        hasBeenInView && !isAnimating
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      )}
      style={{
        transitionDelay: hasBeenInView ? `${Math.min(index * 50, 300)}ms` : '0ms',
      }}
    >
      <ProductCard
        parfum={parfum}
        variant="default"
        className="h-full bg-surface"
      />
    </div>
  )
}