// src/components/sections/NewsSection.tsx
'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button, Badge } from '@/components/ui'
import {
  Carousel,
  CarouselContent,
  CarouselSlide,
  CarouselDots,
  CarouselNavigation,
} from '@/components/ui/Carousel'
import { SectionHeading } from '@/components/shared'
import { 
  Sparkles, 
  Calendar, 
  PartyPopper,
  Info, 
  Tag,
  Newspaper,
  ArrowRight,
  Clock,
  MapPin,
} from 'lucide-react'
import { 
  getActiveHighlights, 
  typeDefaultColors,
  type HighlightItem, 
  type HighlightType 
} from '@/data/news'

// ============================================================================
// ICON MAP
// ============================================================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  calendar: Calendar,
  'party-popper': PartyPopper,
  info: Info,
  tag: Tag,
  newspaper: Newspaper,
}

// ============================================================================
// NEWS SECTION
// ============================================================================

interface NewsSectionProps {
  className?: string
  /** Nombre max de slides */
  limit?: number
  /** Défilement auto (ms), 0 = désactivé */
  autoPlay?: number
  /** Afficher le titre de section */
  showTitle?: boolean
}

/**
 * Section Nouveautés avec Carousel
 * Affiche les highlights/actualités de manière dynamique
 */
export function NewsSection({ 
  className, 
  limit = 10,
  autoPlay = 6000,
  showTitle = true,
}: NewsSectionProps) {
  const t = useTranslations('home.news')
  const items = getActiveHighlights().slice(0, limit)

  // Ne pas afficher si pas de highlights
  if (items.length === 0) return null

  return (
    <section className={cn('py-16 lg:py-24', className)}>
      <Container>
        {/* Header optionnel */}
        {showTitle && (
          <div className="mb-10 text-center">
            <SectionHeading
              title={t('title')}
              subtitle={t('subtitle')}
              align="center"
            />
          </div>
        )}

        {/* Carousel */}
        <div className="relative">
          <Carousel
            autoPlay={autoPlay}
            loop={true}
            pauseOnHover={true}
            className="group"
          >
            <CarouselContent className="rounded-2xl">
              {items.map((item) => (
                <CarouselSlide key={item.id}>
                  <HighlightSlide item={item} />
                </CarouselSlide>
              ))}
            </CarouselContent>

            {/* Navigation et Dots */}
            <div className="mt-6 flex items-center justify-between">
              <CarouselDots variant="line" />
              <CarouselNavigation variant="default" />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  )
}

// ============================================================================
// HIGHLIGHT SLIDE COMPONENT
// ============================================================================

interface HighlightSlideProps {
  item: HighlightItem
}

function HighlightSlide({ item }: HighlightSlideProps) {
  const hasImage = !!item.image
  const isCoverImage = item.imagePosition === 'cover'
  const isLeftImage = item.imagePosition === 'left'
  const isRightImage = item.imagePosition === 'right'
  const isTopImage = item.imagePosition === 'top'
  
  // Déterminer les couleurs
  const bgColor = item.backgroundColor || typeDefaultColors[item.type] || 'bg-muted/30'
  const textColorClass = item.textColor === 'light' ? 'text-white' : 'text-foreground'
  const mutedTextClass = item.textColor === 'light' ? 'text-white/80' : 'text-muted-foreground'

  // Mapper les variantes de badge
  const getBadgeVariant = (): 'default' | 'success' | 'outline' | 'dark' => {
    switch (item.badgeStyle) {
      case 'accent':
      case 'success':
        return 'success'
      case 'warning':
        return 'outline'
      case 'dark':
        return 'dark'
      default:
        return 'default'
    }
  }

  // Icône
  const IconComponent = item.icon ? iconMap[item.icon] : null

  // Layout avec image en cover (fond)
  if (hasImage && isCoverImage) {
    return (
      <div className="relative min-h-[400px] overflow-hidden rounded-2xl lg:min-h-[450px]">
        {/* Image de fond */}
        <Image
          src={item.image!}
          alt={item.title || ''}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
        
        {/* Contenu */}
        <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-center p-8 lg:min-h-[450px] lg:p-12">
          <div className="max-w-xl">
            {/* Badge */}
            {item.badge && (
              <Badge variant={getBadgeVariant()} className="mb-4">
                {item.badge}
              </Badge>
            )}

            {/* Titre */}
            {item.title && (
              <p className="text-sm font-medium uppercase tracking-wider text-white/70">
                {item.title}
              </p>
            )}

            {/* Sous-titre */}
            {item.subtitle && (
              <h3 className="mt-2 font-heading text-3xl font-semibold text-white lg:text-4xl">
                {item.subtitle}
              </h3>
            )}

            {/* Description */}
            {item.description && (
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                {item.description}
              </p>
            )}

            {/* Meta infos */}
            <MetaInfo item={item} light />

            {/* CTA */}
            {item.ctaLabel && item.ctaHref && (
              <div className="mt-6">
                <Button asChild variant="secondary" size="lg">
                  <Link href={item.ctaHref}>
                    {item.ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Layout avec image à gauche ou droite
  if (hasImage && (isLeftImage || isRightImage)) {
    return (
      <div className={cn(
        'grid min-h-[400px] overflow-hidden rounded-2xl lg:min-h-[450px] lg:grid-cols-2',
        bgColor
      )}>
        {/* Image */}
        <div className={cn(
          'relative min-h-[200px] lg:min-h-full',
          isRightImage && 'lg:order-2'
        )}>
          <Image
            src={item.image!}
            alt={item.title || ''}
            fill
            className="object-cover"
          />
        </div>

        {/* Contenu */}
        <div className={cn(
          'flex flex-col justify-center p-8 lg:p-12',
          textColorClass
        )}>
          {/* Badge */}
          {item.badge && (
            <Badge variant={getBadgeVariant()} className="mb-4 w-fit">
              {item.badge}
            </Badge>
          )}

          {/* Icône + Titre */}
          <div className="flex items-center gap-3">
            {IconComponent && (
              <div className={cn('rounded-full p-2', 'bg-foreground/10')}>
                <IconComponent className="h-5 w-5" />
              </div>
            )}
            {item.title && (
              <p className={cn('text-sm font-medium uppercase tracking-wider', mutedTextClass)}>
                {item.title}
              </p>
            )}
          </div>

          {/* Sous-titre */}
          {item.subtitle && (
            <h3 className="mt-3 font-heading text-2xl font-semibold lg:text-3xl">
              {item.subtitle}
            </h3>
          )}

          {/* Description */}
          {item.description && (
            <p className={cn('mt-4 leading-relaxed', mutedTextClass)}>
              {item.description}
            </p>
          )}

          {/* Meta infos */}
          <MetaInfo item={item} />

          {/* CTA */}
          {item.ctaLabel && item.ctaHref && (
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href={item.ctaHref}>
                  {item.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Layout sans image ou image en haut (default)
  return (
    <div className={cn(
      'flex min-h-[400px] flex-col overflow-hidden rounded-2xl lg:min-h-[450px]',
      bgColor
    )}>
      {/* Image en haut */}
      {hasImage && isTopImage && (
        <div className="relative h-48 w-full lg:h-56">
          <Image
            src={item.image!}
            alt={item.title || ''}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Contenu */}
      <div className={cn(
        'flex flex-1 flex-col justify-center p-8 text-center lg:p-12',
        textColorClass
      )}>
        {/* Badge */}
        {item.badge && (
          <Badge variant={getBadgeVariant()} className="mx-auto mb-4">
            {item.badge}
          </Badge>
        )}

        {/* Icône */}
        {IconComponent && (
          <div className={cn('mx-auto mb-4 rounded-full p-3', 'bg-foreground/10')}>
            <IconComponent className="h-6 w-6" />
          </div>
        )}

        {/* Titre */}
        {item.title && (
          <p className={cn('text-sm font-medium uppercase tracking-wider', mutedTextClass)}>
            {item.title}
          </p>
        )}

        {/* Sous-titre */}
        {item.subtitle && (
          <h3 className="mt-2 font-heading text-2xl font-semibold lg:text-3xl">
            {item.subtitle}
          </h3>
        )}

        {/* Description */}
        {item.description && (
          <p className={cn('mx-auto mt-4 max-w-2xl leading-relaxed', mutedTextClass)}>
            {item.description}
          </p>
        )}

        {/* Meta infos */}
        <MetaInfo item={item} centered />

        {/* CTA */}
        {item.ctaLabel && item.ctaHref && (
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href={item.ctaHref}>
                {item.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================================
// META INFO COMPONENT
// ============================================================================

interface MetaInfoProps {
  item: HighlightItem
  light?: boolean
  centered?: boolean
}

function MetaInfo({ item, light = false, centered = false }: MetaInfoProps) {
  if (!item.meta) return null

  const { dates, price, location } = item.meta
  const hasInfo = dates?.length || price || location

  if (!hasInfo) return null

  const textClass = light ? 'text-white/70' : 'text-muted-foreground'
  const bgClass = light ? 'bg-white/10' : 'bg-foreground/5'

  return (
    <div className={cn(
      'mt-4 flex flex-wrap gap-3',
      centered && 'justify-center'
    )}>
      {/* Dates */}
      {dates && dates.length > 0 && dates.map((date, index) => (
        <span
          key={index}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm',
            bgClass, textClass
          )}
        >
          <Clock className="h-3.5 w-3.5" />
          {date}
        </span>
      ))}

      {/* Prix */}
      {price && (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium',
            bgClass, textClass
          )}
        >
          {price}
        </span>
      )}

      {/* Location */}
      {location && (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm',
            bgClass, textClass
          )}
        >
          <MapPin className="h-3.5 w-3.5" />
          {location}
        </span>
      )}
    </div>
  )
}