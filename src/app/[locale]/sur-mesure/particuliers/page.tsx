// src/app/[locale]/sur-mesure/particuliers/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container, Button } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { tarifsInclus, getAmbianceForfaits, getParfumForfaits } from '@/data/sur-mesure'
import type { Forfait } from '@/data/sur-mesure'
import {
  FileCheck,
  Beaker,
  FlaskConical,
  Users,
  Package,
  Phone,
  ArrowRight,
  Sparkles,
  Calendar,
  MessageCircle,
  RefreshCw,
  Info,
  Check,
} from 'lucide-react'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('surMesure.particuliers')

  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  }
}

// =============================================================================
// ICONS MAPPING
// =============================================================================

const iconMap = {
  FileCheck,
  Beaker,
  FlaskConical,
  Users,
  Package,
  Calendar,
  MessageCircle,
  RefreshCw,
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function SurMesureParticuliersPage() {
  const t = useTranslations('surMesure.particuliers')

  return (
    <>
      <HeroSection t={t} />
      <ProductSection t={t} />
      <ProcessSection t={t} />
      <IncludedSection t={t} />
      <ForfaitsSection t={t} />
      <NoteSection t={t} />
      <CTASection t={t} />
    </>
  )
}

// =============================================================================
// TYPES
// =============================================================================

interface SectionProps {
  t: ReturnType<typeof useTranslations<'surMesure.particuliers'>>
}

// =============================================================================
// HERO SECTION
// =============================================================================

function HeroSection({ t }: SectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-muted/30 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/80 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              {t('hero.badge')}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
            {t('hero.subtitle')}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">
                {t('cta.button')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// PRODUCT SECTION
// =============================================================================

function ProductSection({ t }: SectionProps) {
  return (
    <section className="border-y border-border bg-muted/20 py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-square">
            <Image
              src="/images/sur-mesure/particulier-creation.jpg"
              alt="Romain, notre parfumeur, en pleine création"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              {t('product.title')}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t('product.description')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// PROCESS SECTION
// =============================================================================

const processSteps = [
  { id: 'step1', icon: 'Calendar', number: 1 },
  { id: 'step2', icon: 'MessageCircle', number: 2 },
  { id: 'step3', icon: 'RefreshCw', number: 3 },
]

function ProcessSection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <SectionHeading title={t('process.title')} />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap]

            return (
              <article
                key={step.id}
                className="relative rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:shadow-md"
              >
                {/* Number badge */}
                <div className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 mt-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {t(`process.${step.id}.title`)}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`process.${step.id}.description`)}
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
// INCLUDED SECTION
// =============================================================================

function IncludedSection({ t }: SectionProps) {
  return (
    <section className="bg-muted/20 py-20 lg:py-32">
      <Container>
        <SectionHeading title={t('included.title')} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tarifsInclus.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]

            return (
              <div
                key={item.id}
                className="flex gap-4 rounded-lg border border-border bg-surface p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {t(`included.${item.id}.title`)}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`included.${item.id}.description`)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// FORFAITS SECTION
// =============================================================================

function ForfaitsSection({ t }: SectionProps) {
  const ambianceForfaits = getAmbianceForfaits()
  const parfumForfaits = getParfumForfaits()

  return (
    <section className="py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('forfaits.title')}
          subtitle={t('forfaits.subtitle')}
        />

        <div className="mt-12 space-y-16">
          {/* Parfums d'ambiance */}
          <div>
            <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
              {t('forfaits.ambiance.title')}
            </h3>
            <p className="mb-6 text-muted-foreground">
              {t('forfaits.ambiance.description')}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {ambianceForfaits.map((forfait) => (
                <ForfaitCard key={forfait.id} forfait={forfait} t={t} />
              ))}
            </div>
          </div>

          {/* Parfums */}
          <div>
            <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
              {t('forfaits.parfum.title')}
            </h3>
            <p className="mb-6 text-muted-foreground">
              {t('forfaits.parfum.description')}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {parfumForfaits.map((forfait) => (
                <ForfaitCard key={forfait.id} forfait={forfait} t={t} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// FORFAIT CARD
// =============================================================================

interface ForfaitCardProps {
  forfait: Forfait
  t: SectionProps['t']
}

function ForfaitCard({ forfait, t }: ForfaitCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-heading text-lg font-semibold text-foreground">
          Forfait {forfait.name}
        </h4>
        <div className="text-right">
          <span className="text-sm text-muted-foreground">{t('forfaits.card.from')}</span>
          <p className="font-heading text-2xl font-bold text-foreground">
            {forfait.price.toLocaleString('fr-BE')}€
          </p>
        </div>
      </div>

      {/* Includes */}
      <div className="space-y-2 border-t border-border pt-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {t('forfaits.card.includes')}
        </p>
        <ul className="space-y-1.5">
          <li className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-accent" />
            <span>{t('forfaits.card.flacons', { count: forfait.includes.flacons })}</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-accent" />
            <span>{t('forfaits.card.consultation', { hours: forfait.includes.consultationHours })}</span>
          </li>
          <li className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-accent" />
            <span>{t('forfaits.card.prototypes', { count: forfait.includes.prototypes })}</span>
          </li>
        </ul>
      </div>

      {/* Supplement */}
      <div className="mt-4 rounded-lg bg-muted/50 p-3 text-sm">
        <span className="text-muted-foreground">{t('forfaits.card.supplement')} : </span>
        <span className="font-medium text-foreground">
          {forfait.supplementPrice} {t('forfaits.card.per')} {forfait.supplementUnit}
        </span>
      </div>
    </article>
  )
}

// =============================================================================
// NOTE SECTION
// =============================================================================

function NoteSection({ t }: SectionProps) {
  return (
    <section className="bg-muted/20 py-12">
      <Container>
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-surface p-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Info className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t('note.title')}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t('note.text')}
              </p>
            </div>
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
        <div className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-16 text-center text-background sm:px-12 lg:px-20">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" viewBox="0 0 400 400">
              <path
                d="M 200 30 C 100 30, 30 110, 30 210 C 30 310, 100 370, 180 360"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M 210 30 C 310 30, 370 110, 370 210 C 370 310, 300 370, 220 360"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative">
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl lg:text-4xl">
              {t('cta.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/80">
              {t('cta.subtitle')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contact">
                  {t('cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <span className="text-sm text-background/60">{t('cta.phone')}</span>

              <a
                href="tel:+3281241294"
                className="inline-flex items-center gap-2 text-background hover:underline"
              >
                <Phone className="h-4 w-4" />
                +32 81 24 12 94
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}