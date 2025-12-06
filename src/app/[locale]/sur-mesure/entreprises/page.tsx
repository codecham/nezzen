// src/app/[locale]/sur-mesure/entreprises/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container, Button } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { servicesB2B } from '@/data/sur-mesure'
import { cn } from '@/lib/utils'
import {
  Sparkles,
  Store,
  Users,
  Gift,
  ArrowRight,
  Phone,
  Check,
} from 'lucide-react'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('surMesure.entreprises')

  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  }
}

// =============================================================================
// ICONS MAPPING
// =============================================================================

const iconMap = {
  Sparkles,
  Store,
  Users,
  Gift,
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function SurMesureEntreprisesPage() {
  const t = useTranslations('surMesure.entreprises')

  return (
    <>
      <HeroSection t={t} />
      <ServicesSection t={t} />
      <CTASection t={t} />
    </>
  )
}

// =============================================================================
// TYPES
// =============================================================================

interface SectionProps {
  t: ReturnType<typeof useTranslations<'surMesure.entreprises'>>
}

// =============================================================================
// HERO SECTION
// =============================================================================

function HeroSection({ t }: SectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-muted/30 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/80 px-4 py-2 backdrop-blur-sm">
            <Store className="h-4 w-4 text-accent" />
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
// SERVICES SECTION
// =============================================================================

function ServicesSection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="mt-16 space-y-20 lg:space-y-32">
          {servicesB2B.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const isReversed = index % 2 !== 0

            return (
              <article
                key={service.id}
                className={cn(
                  'grid items-start gap-8 lg:grid-cols-2 lg:gap-16',
                  isReversed && 'lg:[direction:rtl]'
                )}
              >
                {/* Image */}
                <div
                  className={cn(
                    'relative aspect-[4/3] overflow-hidden rounded-2xl',
                    isReversed && 'lg:[direction:ltr]'
                  )}
                >
                  <Image
                    src={service.image!}
                    alt={t(`services.${service.id}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={cn(isReversed && 'lg:[direction:ltr]')}>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {t(`services.${service.id}.title`)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-lg text-muted-foreground">
                    {t(`services.${service.id}.description`)}
                  </p>

                  {/* Second description for marketing service */}
                  {service.id === 'marketing' && (
                    <p className="mt-3 text-lg text-muted-foreground">
                      {t('services.marketing.description2')}
                    </p>
                  )}

                  {/* Detailed pricing for fragrance service */}
                  {service.hasDetailedPricing && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {/* Parfum pricing */}
                      <div className="rounded-lg border border-border bg-surface p-4">
                        <h4 className="font-heading font-semibold text-foreground">
                          {t('services.fragrance.parfum.title')}
                        </h4>
                        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{t('services.fragrance.parfum.prototypes')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{t('services.fragrance.parfum.tests')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{t('services.fragrance.parfum.registration')}</span>
                          </li>
                        </ul>
                        <p className="mt-3 border-t border-border pt-3 font-heading text-lg font-bold text-foreground">
                          {t('services.fragrance.parfum.total')}
                        </p>
                      </div>

                      {/* Ambiance pricing */}
                      <div className="rounded-lg border border-border bg-surface p-4">
                        <h4 className="font-heading font-semibold text-foreground">
                          {t('services.fragrance.ambiance.title')}
                        </h4>
                        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{t('services.fragrance.ambiance.prototypes')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{t('services.fragrance.ambiance.tests')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{t('services.fragrance.ambiance.registration')}</span>
                          </li>
                        </ul>
                        <p className="mt-3 border-t border-border pt-3 font-heading text-lg font-bold text-foreground">
                          {t('services.fragrance.ambiance.total')}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Activity list for ateliers service */}
                  {service.hasActivityList && (
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{t('services.ateliers.list.history')}</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{t('services.ateliers.list.accords')}</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{t('services.ateliers.list.creative')}</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{t('services.ateliers.list.meals')}</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{t('services.ateliers.list.more')}</span>
                      </li>
                    </ul>
                  )}
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