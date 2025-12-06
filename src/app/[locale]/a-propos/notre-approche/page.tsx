// src/app/[locale]/a-propos/notre-approche/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { Container, Button, Badge } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'
import {
  Sparkles,
  Eye,
  Shield,
  Lightbulb,
  Award,
  Trophy,
  Medal,
  ArrowRight,
  Quote,
} from 'lucide-react'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('aPropos.notreApproche')

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// TYPES
// =============================================================================

type PrincipleId = 'jus' | 'experience' | 'transparence' | 'innovation'
type DistinctionId = 'artisan' | 'artOlfaction' | 'vitrine' | 'trophee'

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function NotreApprochePage() {
  const t = useTranslations('aPropos.notreApproche')

  return (
    <>
      <HeroSection t={t} />
      <IntroSection t={t} />
      <PrinciplesSection t={t} />
      <DistinctionsSection t={t} />
      <PressSection t={t} />
      <CTASection t={t} />
    </>
  )
}

// =============================================================================
// SECTION PROPS TYPE
// =============================================================================

interface SectionProps {
  t: ReturnType<typeof useTranslations<'aPropos.notreApproche'>>
}

// =============================================================================
// HERO SECTION
// =============================================================================

function HeroSection({ t }: SectionProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-surface py-20 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
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
  )
}

// =============================================================================
// INTRO SECTION - L'histoire du duo
// =============================================================================

function IntroSection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-square">
            {/* Placeholder - tu remplaceras par la vraie image */}
            <div className="absolute inset-0 bg-linear-to-br from-muted/50 to-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                Photo Romain &amp; Aurélie
              </span>
            </div>
            {/* Décommente quand tu as l'image :
            <Image
              src="/images/a-propos/romain-aurelie.jpg"
              alt="Romain et Aurélie, fondateurs de NeZ ZeN"
              fill
              className="object-cover"
              priority
            />
            */}
            <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              {t('intro.title')}
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t('intro.paragraph1')}
              </p>
              <p className="leading-relaxed">
                {t('intro.paragraph2')}
              </p>
              <p className="leading-relaxed">
                {t('intro.paragraph3')}
              </p>
            </div>

            {/* Founders */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-4">
                {/* Placeholder avatars */}
                <div className="h-14 w-14 rounded-full border-2 border-surface bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">R</span>
                </div>
                <div className="h-14 w-14 rounded-full border-2 border-surface bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">A</span>
                </div>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">
                  Romain &amp; Aurélie
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('intro.roles')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// PRINCIPLES SECTION - Les 4 principes
// =============================================================================

const principles: {
  id: PrincipleId
  icon: typeof Sparkles
  color: string
  bgColor: string
}[] = [
  {
    id: 'jus',
    icon: Sparkles,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'experience',
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'transparence',
    icon: Shield,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'innovation',
    icon: Lightbulb,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
]

function PrinciplesSection({ t }: SectionProps) {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('principles.title')}
          subtitle={t('principles.subtitle')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={cn(
                    'inline-flex h-14 w-14 items-center justify-center rounded-xl',
                    principle.bgColor
                  )}
                >
                  <Icon className={cn('h-7 w-7', principle.color)} />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                  {t(`principles.${principle.id}.title`)}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {t(`principles.${principle.id}.description`)}
                </p>

                {/* Decorative corner */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-linear-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            )
          })}
        </div>

        {/* Note about collections */}
        <div className="mt-12 rounded-xl border border-border bg-background p-6 text-center">
          <Quote className="mx-auto h-8 w-8 text-accent/50" />
          <p className="mt-4 text-muted-foreground italic">
            {t('principles.note')}
          </p>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// DISTINCTIONS SECTION
// =============================================================================

const distinctions: {
  id: DistinctionId
  icon: typeof Award
  year: string
}[] = [
  {
    id: 'artisan',
    icon: Award,
    year: '2014',
  },
  {
    id: 'artOlfaction',
    icon: Trophy,
    year: '2019',
  },
  {
    id: 'vitrine',
    icon: Medal,
    year: '2019',
  },
  {
    id: 'trophee',
    icon: Trophy,
    year: '2023',
  },
]

function DistinctionsSection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('distinctions.title')}
          subtitle={t('distinctions.subtitle')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {distinctions.map((distinction) => {
            const Icon = distinction.icon

            return (
              <article
                key={distinction.id}
                className="group relative rounded-xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-md"
              >
                {/* Year badge */}
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  {distinction.year}
                </Badge>

                {/* Icon */}
                <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                  <Icon className="h-8 w-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {t(`distinctions.${distinction.id}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`distinctions.${distinction.id}.description`)}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// PRESS SECTION
// =============================================================================

function PressSection({ t }: SectionProps) {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('press.title')}
          subtitle={t('press.subtitle')}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* L'Avenir */}
          <article className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                <span className="text-xs font-semibold text-muted-foreground">
                  L&apos;A
                </span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('press.avenir.date')}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                  {t('press.avenir.title')}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('press.avenir.description')}
                </p>
              </div>
            </div>
          </article>

          {/* Proximag */}
          <article className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                <span className="text-xs font-semibold text-muted-foreground">
                  PM
                </span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('press.proximag.date')}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                  {t('press.proximag.title')}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('press.proximag.description')}
                </p>
              </div>
            </div>
          </article>
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
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-background sm:px-16 lg:py-24">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-accent blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-background/80">
              {t('cta.subtitle')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-foreground hover:bg-accent/90"
              >
                <Link href="/creations/parfums">
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10"
              >
                <Link href="/contact">{t('cta.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}