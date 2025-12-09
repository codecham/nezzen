// src/components/shared/ParfumDetail.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Button, Badge } from '@/components/ui'
import { OlfactoryPyramid } from './OlfactoryPyramid'
import type { Parfum } from '@/types'
import {
  ArrowLeft, 
  Leaf, 
  Award, 
  RefreshCw,
  Check 
} from 'lucide-react'

interface ParfumDetailProps {
  parfum: Parfum
}

/**
 * Composant de détail d'un parfum
 * Affiche l'image, les informations et la pyramide olfactive
 */
export function ParfumDetail({ parfum }: ParfumDetailProps) {
  const t = useTranslations('parfumDetail')
  const [selectedFormat, setSelectedFormat] = useState(parfum.formats[1]) // 30ml par défaut
  const [imageError, setImageError] = useState(false)

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left Column - Image */}
      <div className="relative">
        {/* Back button */}
        <Link
          href="/creations/parfums"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('back')}
        </Link>

        {/* Main Image */}
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted/30">
          {parfum.image && !imageError ? (
            <Image
              src={parfum.image}
              alt={parfum.name}
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            // Placeholder élégant
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-muted/20 to-muted/40">
              <svg
                viewBox="0 0 80 80"
                className="mb-4 h-20 w-20 text-muted-foreground/20"
                aria-hidden="true"
              >
                <path
                  d="M 40 8 C 20 8, 8 24, 8 42 C 8 60, 20 72, 36 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 44 8 C 64 8, 72 24, 72 42 C 72 60, 60 72, 44 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-heading text-2xl text-muted-foreground/40">
                {parfum.name}
              </span>
            </div>
          )}

          {/* Badges overlay */}
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            {parfum.isNew && (
              <Badge variant="default">{t('badges.new')}</Badge>
            )}
            {parfum.awards && parfum.awards.length > 0 && (
              <Badge variant="default" className="gap-1">
                <Award className="h-3 w-3" />
                {t('badges.awarded')}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Right Column - Info */}
      <div className="flex flex-col">
        {/* Category */}
        <span className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {t(`categories.${parfum.category}`)}
        </span>

        {/* Name */}
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          {parfum.name}
        </h1>

        {/* Awards */}
        {parfum.awards && parfum.awards.length > 0 && (
          <div className="mt-3 flex items-center gap-2 text-sm text-accent">
            <Award className="h-4 w-4" />
            <span>{parfum.awards[0]}</span>
          </div>
        )}

        {/* Short description */}
        <p className="mt-4 text-lg text-muted-foreground">
          {parfum.shortDescription}
        </p>

        {/* Full description */}
        <p className="mt-4 leading-relaxed text-foreground/80">
          {parfum.fullDescription}
        </p>

        {/* Olfactory Pyramid */}
        <div className="mt-8">
          <h2 className="mb-4 font-heading text-lg font-medium text-foreground">
            {t('pyramid.title')}
          </h2>
          <OlfactoryPyramid notes={parfum.notes} />
        </div>

        {/* Format Selection */}
        <div className="mt-8">
          <h2 className="mb-4 font-heading text-lg font-medium text-foreground">
            {t('format.title')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {parfum.formats.map((format) => (
              <button
                key={format.size}
                onClick={() => setSelectedFormat(format)}
                className={cn(
                  'relative flex flex-col items-center rounded-xl border-2 px-5 py-4 transition-all duration-300',
                  selectedFormat.size === format.size
                    ? 'border-foreground bg-foreground/5'
                    : 'border-border hover:border-muted-foreground'
                )}
              >
                {selectedFormat.size === format.size && (
                  <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-background">
                    <Check className="h-3 w-3" />
                  </div>
                )}
                <span className="text-lg font-semibold text-foreground">
                  {format.size}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {format.price.toFixed(2).replace('.', ',')}€
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-8 rounded-2xl bg-muted/30 p-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm text-muted-foreground">{t('price.label')}</span>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-3xl font-semibold text-foreground">
                  {selectedFormat.price.toFixed(2).replace('.', ',')}€
                </span>
                <span className="text-muted-foreground">/ {selectedFormat.size}</span>
              </div>
            </div>
          </div>

          {/* CTA - Contact for now (Phase 1) */}
          <Button asChild size="lg" className="mt-6 w-full">
            <Link href="/contact">
              {t('cta.contact')}
            </Link>
          </Button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            {t('cta.info')}
          </p>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <FeatureItem
            icon={<Leaf className="h-5 w-5" />}
            label={t('features.vegan')}
          />
          <FeatureItem
            icon={<RefreshCw className="h-5 w-5" />}
            label={t('features.refill')}
          />
          <FeatureItem
            icon={<span className="text-lg">🇧🇪</span>}
            label={t('features.local')}
          />
        </div>
      </div>
    </div>
  )
}

/* ================================
   Feature Item Component
   ================================ */

interface FeatureItemProps {
  icon: React.ReactNode
  label: string
}

function FeatureItem({ icon, label }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-surface p-4 text-center">
      <span className="text-muted-foreground">{icon}</span>
      <span className="text-xs font-medium text-foreground">{label}</span>
    </div>
  )
}
