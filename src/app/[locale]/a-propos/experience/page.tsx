// src/app/[locale]/a-propos/experience/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { Container, Button, Badge } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'
import {
  ChefHat,
  Wine,
  Leaf,
  Heart,
  Users,
  GraduationCap,
  ArrowRight,
  Play,
} from 'lucide-react'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('aPropos.experience')

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// TYPES
// =============================================================================

type CollaborationId = 'chef' | 'vin' | 'the'
type PartageItemId = 'osmotheque' | 'artisan' | 'ecoles'

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function ExperiencePage() {
  const t = useTranslations('aPropos.experience')

  return (
    <>
      <HeroSection t={t} />
      <CollaborationsSection t={t} />
      <PartageSection t={t} />
      <CTASection t={t} />
    </>
  )
}

// =============================================================================
// SECTION PROPS TYPE
// =============================================================================

interface SectionProps {
  t: ReturnType<typeof useTranslations<'aPropos.experience'>>
}

// =============================================================================
// HERO SECTION
// =============================================================================

function HeroSection({ t }: SectionProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-surface py-20 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="default" className="mb-6">
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
  )
}

// =============================================================================
// COLLABORATIONS SECTION
// =============================================================================

const collaborations: {
  id: CollaborationId
  icon: typeof ChefHat
  color: string
  bgColor: string
  hasVideo: boolean
}[] = [
  {
    id: 'chef',
    icon: ChefHat,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    hasVideo: true,
  },
  {
    id: 'vin',
    icon: Wine,
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    hasVideo: false,
  },
  {
    id: 'the',
    icon: Leaf,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    hasVideo: true,
  },
]

function CollaborationsSection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('collaborations.title')}
          subtitle={t('collaborations.subtitle')}
        />

        <div className="mt-12 space-y-16 lg:space-y-24">
          {collaborations.map((collab, index) => {
            const Icon = collab.icon
            const isReversed = index % 2 !== 0

            return (
              <article
                key={collab.id}
                className={cn(
                  'grid items-center gap-8 lg:grid-cols-2 lg:gap-16',
                  isReversed && 'lg:[&>*:first-child]:order-2'
                )}
              >
                {/* Image/Video placeholder */}
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className={cn(
                          'mx-auto flex h-16 w-16 items-center justify-center rounded-full',
                          collab.bgColor
                        )}
                      >
                        <Icon className={cn('h-8 w-8', collab.color)} />
                      </div>
                      <span className="mt-4 block text-sm text-muted-foreground">
                        {collab.hasVideo ? 'Vidéo à venir' : 'Photo à venir'}
                      </span>
                    </div>
                  </div>

                  {/* Play button overlay for videos */}
                  {collab.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <button
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/90 text-background transition-transform duration-300 hover:scale-110"
                        aria-label="Lire la vidéo"
                      >
                        <Play className="ml-1 h-6 w-6" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div
                    className={cn(
                      'inline-flex h-12 w-12 items-center justify-center rounded-xl',
                      collab.bgColor
                    )}
                  >
                    <Icon className={cn('h-6 w-6', collab.color)} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                    {t(`collaborations.${collab.id}.title`)}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {t(`collaborations.${collab.id}.description`)}
                  </p>

                  {/* Partner info if available */}
                  <div className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t(`collaborations.${collab.id}.partner`)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t(`collaborations.${collab.id}.partnerDesc`)}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// PARTAGE SECTION
// =============================================================================

const partageItems: {
  id: PartageItemId
  icon: typeof GraduationCap
}[] = [
  {
    id: 'osmotheque',
    icon: GraduationCap,
  },
  {
    id: 'artisan',
    icon: Heart,
  },
  {
    id: 'ecoles',
    icon: Users,
  },
]

function PartageSection({ t }: SectionProps) {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              {t('partage.badge')}
            </Badge>

            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              {t('partage.title')}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t('partage.description')}
            </p>

            {/* Events list */}
            <div className="mt-8 space-y-4">
              {partageItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 rounded-lg border border-border bg-background p-4 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {t(`partage.items.${item.id}.title`)}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(`partage.items.${item.id}.description`)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-square">
            {/* Placeholder */}
            <div className="absolute inset-0 bg-linear-to-br from-muted/50 to-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                Photo événements
              </span>
            </div>
            {/* Décommente quand tu as l'image :
            <Image
              src="/images/a-propos/partage.jpg"
              alt="NeZ ZeN lors d'événements"
              fill
              className="object-cover"
            />
            */}
          </div>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// CTA SECTION
// =============================================================================

function CTASection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Visit CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-foreground p-8 text-background lg:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative">
              <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                {t('cta.visit.title')}
              </h3>
              <p className="mt-4 text-background/80">
                {t('cta.visit.description')}
              </p>
              <Button
                asChild
                className="mt-6 bg-accent text-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  {t('cta.visit.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Ateliers CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 lg:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                {t('cta.ateliers.title')}
              </h3>
              <p className="mt-4 text-muted-foreground">
                {t('cta.ateliers.description')}
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/ateliers">
                  {t('cta.ateliers.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}