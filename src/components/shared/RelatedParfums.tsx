// src/components/shared/RelatedParfums.tsx
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { ProductCard } from './ProductCard'
import type { Parfum } from '@/types'
import { ArrowRight } from 'lucide-react'

interface RelatedParfumsProps {
  parfums: Parfum[]
  className?: string
}

/**
 * Section des parfums similaires/recommandés
 */
export function RelatedParfums({ parfums, className }: RelatedParfumsProps) {
  const t = useTranslations('parfumDetail.related')

  if (parfums.length === 0) return null

  return (
    <div className={cn(className)}>
      <SectionHeading
        title={t('title')}
        subtitle={t('subtitle')}
        showOrnament={false}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {parfums.map((parfum) => (
          <ProductCard
            key={parfum.id}
            parfum={parfum}
            variant="default"
            className="bg-surface"
          />
        ))}
      </div>

      {/* CTA vers tous les parfums */}
      <div className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href="/creations/parfums">
            {t('viewAll')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
