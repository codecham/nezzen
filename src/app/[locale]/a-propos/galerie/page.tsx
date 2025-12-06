// src/app/[locale]/a-propos/galerie/page.tsx
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Container, Badge } from '@/components/ui'
import { cn } from '@/lib/utils'
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Camera,
} from 'lucide-react'

// =============================================================================
// TYPES
// =============================================================================

// Clés de catégories typées
type CategoryId = 'all' | 'boutique' | 'creation' | 'produits' | 'ateliers' | 'evenements'

type GalleryImage = {
  id: string
  src: string
  alt: string
  category: Exclude<CategoryId, 'all'>
}

// =============================================================================
// GALLERY DATA
// =============================================================================

// Placeholder pour les images - tu ajouteras les vraies images
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/galerie/placeholder-1.jpg',
    alt: 'Atelier NeZ ZeN',
    category: 'boutique',
  },
  {
    id: '2',
    src: '/images/galerie/placeholder-2.jpg',
    alt: 'Création de parfum',
    category: 'creation',
  },
  {
    id: '3',
    src: '/images/galerie/placeholder-3.jpg',
    alt: 'Flacons de parfum',
    category: 'produits',
  },
  {
    id: '4',
    src: '/images/galerie/placeholder-4.jpg',
    alt: 'Atelier créatif',
    category: 'ateliers',
  },
  {
    id: '5',
    src: '/images/galerie/placeholder-5.jpg',
    alt: 'Matières premières',
    category: 'creation',
  },
  {
    id: '6',
    src: '/images/galerie/placeholder-6.jpg',
    alt: 'La boutique',
    category: 'boutique',
  },
  {
    id: '7',
    src: '/images/galerie/placeholder-7.jpg',
    alt: 'Événement',
    category: 'evenements',
  },
  {
    id: '8',
    src: '/images/galerie/placeholder-8.jpg',
    alt: 'Romain au travail',
    category: 'creation',
  },
  {
    id: '9',
    src: '/images/galerie/placeholder-9.jpg',
    alt: 'Collection parfums',
    category: 'produits',
  },
  {
    id: '10',
    src: '/images/galerie/placeholder-10.jpg',
    alt: 'Dégustation vin',
    category: 'ateliers',
  },
  {
    id: '11',
    src: '/images/galerie/placeholder-11.jpg',
    alt: 'Cosmétiques',
    category: 'produits',
  },
  {
    id: '12',
    src: '/images/galerie/placeholder-12.jpg',
    alt: 'Vitrine',
    category: 'boutique',
  },
]

const categories: { id: CategoryId; labelKey: `categories.${CategoryId}` }[] = [
  { id: 'all', labelKey: 'categories.all' },
  { id: 'boutique', labelKey: 'categories.boutique' },
  { id: 'creation', labelKey: 'categories.creation' },
  { id: 'produits', labelKey: 'categories.produits' },
  { id: 'ateliers', labelKey: 'categories.ateliers' },
  { id: 'evenements', labelKey: 'categories.evenements' },
]

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function GaleriePage() {
  const t = useTranslations('aPropos.galerie')
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex(
      selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1
    )
  }

  const goToNext = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex(
      selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1
    )
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-background to-surface py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="accent" className="mb-6">
              {t('hero.badge')}
            </Badge>

            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-32">
        <Container>
          {/* Category filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-foreground text-background'
                    : 'bg-surface text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>

          {/* Images grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {/* Placeholder - remplace par Image quand tu as les photos */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-muted to-muted/80">
                  <Camera className="h-8 w-8 text-muted-foreground/50" />
                  <span className="mt-2 text-xs text-muted-foreground/50">
                    {image.alt}
                  </span>
                </div>

                {/* Décommente quand tu as les images :
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                */}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/40">
                  <ZoomIn className="h-8 w-8 text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <Camera className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 text-muted-foreground">{t('empty')}</p>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
            aria-label={t('lightbox.close')}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
            aria-label={t('lightbox.previous')}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
            aria-label={t('lightbox.next')}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[80vh] max-w-[90vw] overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder */}
            <div className="flex h-[60vh] w-[80vw] max-w-4xl items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <Camera className="mx-auto h-16 w-16 text-background/30" />
                <p className="mt-4 text-background/50">
                  {filteredImages[selectedImageIndex].alt}
                </p>
              </div>
            </div>

            {/* Décommente quand tu as les images :
            <Image
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto object-contain"
            />
            */}
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/10 px-4 py-2 text-sm text-background">
            {selectedImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  )
}