// src/app/[locale]/ateliers/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container, Button, } from '@/components/ui'
import { SectionHeading } from '@/components/shared'
import { cn } from '@/lib/utils'
import { 
  Sparkles,
  Clock,
  Users,
  MapPin,
  Euro,
  Check,
  Gift,
  Calendar,
  Utensils,
  Wine,
  Flame,
  PartyPopper,
  ArrowRight,
  Star
} from 'lucide-react'
import { getAllAteliers } from '@/data/ateliers'
import type { Atelier, AtelierType } from '@/types'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ateliers')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// Icon mapping pour chaque type d'atelier
const typeIcons: Record<AtelierType, typeof Sparkles> = {
  'decouverte-parfumeur': Sparkles,
  'creation-bougie': Flame,
  'degustation-vin': Wine,
  'dinatoire': Utensils,
  'evenement-prive': PartyPopper,
}

// Couleurs pour chaque type
const typeColors: Record<AtelierType, { bg: string; text: string; badge: string }> = {
  'decouverte-parfumeur': { 
    bg: 'bg-amber-50', 
    text: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700'
  },
  'creation-bougie': { 
    bg: 'bg-orange-50', 
    text: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700'
  },
  'degustation-vin': { 
    bg: 'bg-rose-50', 
    text: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-700'
  },
  'dinatoire': { 
    bg: 'bg-violet-50', 
    text: 'text-violet-600',
    badge: 'bg-violet-100 text-violet-700'
  },
  'evenement-prive': { 
    bg: 'bg-sky-50', 
    text: 'text-sky-600',
    badge: 'bg-sky-100 text-sky-700'
  },
}

/**
 * Page Ateliers
 * Présente tous les ateliers disponibles
 */
export default function AteliersPage() {
  const t = useTranslations('ateliers')
  const ateliers = getAllAteliers()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-violet-100/30 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                {t('hero.badge')}
              </span>
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

      {/* Intro Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('intro.text')}
            </p>
          </div>
        </Container>
      </section>

      {/* Ateliers List */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <SectionHeading
            title={t('list.title')}
            subtitle={t('list.subtitle')}
          />

          {/* Ateliers Grid */}
          <div className="mt-12 space-y-8">
            {ateliers.map((atelier, index) => (
              <AtelierCard 
                key={atelier.id} 
                atelier={atelier} 
                t={t}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Practical Info Section */}
      <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
        <Container>
          <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {t('info.title')}
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Location */}
            <InfoCard
              icon={<MapPin className="h-6 w-6" />}
              title={t('info.location.title')}
            >
              <p className="font-medium text-foreground">{t('info.location.address')}</p>
              <p className="text-sm text-muted-foreground">{t('info.location.detail')}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t('info.location.partner')}</p>
            </InfoCard>

            {/* Booking */}
            <InfoCard
              icon={<Calendar className="h-6 w-6" />}
              title={t('info.booking.title')}
            >
              <p className="text-muted-foreground">{t('info.booking.text')}</p>
            </InfoCard>

            {/* Groups */}
            <InfoCard
              icon={<Users className="h-6 w-6" />}
              title={t('info.group.title')}
            >
              <p className="text-muted-foreground">{t('info.group.text')}</p>
            </InfoCard>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl bg-foreground p-8 text-center text-background lg:p-12">
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-background/80">
              {t('cta.subtitle')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <span className="text-sm text-background/60">{t('cta.phone')}</span>
              <a 
                href="tel:+32493542818" 
                className="font-medium text-background hover:underline"
              >
                +32 493 54 28 18
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

/* ================================
   Atelier Card Component
   ================================ */

interface AtelierCardProps {
  atelier: Atelier
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
  isReversed?: boolean
}

function AtelierCard({ atelier, t, isReversed }: AtelierCardProps) {
  const Icon = typeIcons[atelier.type]
  const colors = typeColors[atelier.type]
  const isPrivateEvent = atelier.type === 'evenement-prive'

  return (
    <article className={cn(
      'group overflow-hidden rounded-2xl bg-surface shadow-sm transition-all duration-300 hover:shadow-lg',
      'border border-border/50'
    )}>
      <div className={cn(
        'flex flex-col lg:flex-row',
        isReversed && 'lg:flex-row-reverse'
      )}>
        {/* Image */}
        <div className="relative lg:w-2/5">
          <div className="aspect-4/3 lg:aspect-auto lg:h-full">
            {atelier.image ? (
              <Image
                src={atelier.image}
                alt={atelier.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <div className={cn('flex h-full items-center justify-center', colors.bg)}>
                <Icon className={cn('h-20 w-20', colors.text, 'opacity-30')} />
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-foreground/30 via-transparent to-transparent lg:bg-linear-to-r" />

            {/* Highlight Badge */}
            <div className="absolute left-4 top-4">
              <span className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium',
                colors.badge
              )}>
                <Star className="h-3 w-3" />
                {t(`types.${atelier.type}.highlight`)}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-6 lg:w-3/5 lg:p-8">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
              colors.bg, colors.text
            )}>
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground lg:text-2xl">
                {atelier.name}
              </h3>
              {atelier.partner && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {t('card.partner')} {atelier.partner}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {atelier.shortDescription}
          </p>

          {/* Specs */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                <span className="text-muted-foreground">{t('card.duration')}: </span>
                <span className="font-medium text-foreground">{atelier.duration}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Euro className="h-4 w-4 text-muted-foreground" />
              <span>
                <span className="text-muted-foreground">{t('card.price')}: </span>
                <span className="font-medium text-foreground">
                  {isPrivateEvent ? t('card.onQuote') : `${atelier.price}€`}
                </span>
              </span>
              {atelier.priceDetails && !isPrivateEvent && (
                <span className="text-xs text-muted-foreground">
                  ({atelier.priceDetails})
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>
                <span className="text-muted-foreground">{t('card.capacity')}: </span>
                <span className="font-medium text-foreground">
                  {t('card.participants', { 
                    min: atelier.minParticipants || 1, 
                    max: atelier.maxParticipants 
                  })}
                </span>
              </span>
            </div>
          </div>

          {/* Includes & TakeAway */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* Includes */}
            {atelier.includes && atelier.includes.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {t('card.includes')}
                </h4>
                <ul className="mt-2 space-y-1">
                  {atelier.includes.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {atelier.includes.length > 3 && (
                    <li className="text-xs text-muted-foreground">
                      +{atelier.includes.length - 3} autres...
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Take Away */}
            {atelier.takeAway && atelier.takeAway.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {t('card.takeAway')}
                </h4>
                <ul className="mt-2 space-y-1">
                  {atelier.takeAway.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Gift className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Event types for private events */}
          {isPrivateEvent && (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-foreground">
                {t('eventTypes.title')}
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {['evjf', 'anniversaire', 'teamBuilding', 'entreAmis'].map((type) => (
                  <span 
                    key={type}
                    className="rounded-full bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t(`eventTypes.${type}`)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Location */}
          {atelier.location && (
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{atelier.location}</span>
            </div>
          )}

          {/* CTA */}
          <div className="mt-6">
            <Button asChild>
              <Link href="/contact">
                {t('card.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ================================
   Info Card Component
   ================================ */

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className="rounded-xl bg-surface p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
        {title}
      </h3>
      <div className="mt-2 text-sm">
        {children}
      </div>
    </div>
  )
}