// src/app/[locale]/creations/cosmetiques/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container, AnimateOnScroll } from '@/components/ui'
import { PageHero, SectionHeading } from '@/components/shared'
import { CosmetiquesGrid, FeaturesGrid, FooterInfo } from './components'
import { getGelsDouche, getLaitsHydratants } from '@/data/cosmetiques'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('cosmetiques')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

/**
 * Page Cosmétiques
 * Présente les gels douche et laits hydratants avec animations fluides
 */
export default function CosmetiquesPage() {
  const t = useTranslations('cosmetiques')

  return (
    <>
      {/* Hero Section avec animations */}
      <PageHero
        badge={t('hero.badge')}
        badgeIcon="sparkles"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="lg"
      />

      {/* Gels Douche Section */}
      <GelsDoucheSection />

      {/* Laits Hydratants Section */}
      <LaitsHydratantsSection />

      {/* Info Section */}
      <InfoSection />

      {/* Footer Info */}
      <CosmetiquesFooter />
    </>
  )
}

// =============================================================================
// GELS DOUCHE SECTION (Server Component)
// =============================================================================

function GelsDoucheSection() {
  const t = useTranslations('cosmetiques')
  const gelsDouche = getGelsDouche()

  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* Section Heading avec animation */}
        <AnimateOnScroll animation="fade-in-up" duration={500}>
          <SectionHeading
            title={t('gelsDouche.title')}
            subtitle={t('gelsDouche.subtitle')}
            align="center"
          />
        </AnimateOnScroll>

        {/* Products Grid animé */}
        <CosmetiquesGrid products={gelsDouche} type="gel" />
      </Container>
    </section>
  )
}

// =============================================================================
// LAITS HYDRATANTS SECTION (Server Component)
// =============================================================================

function LaitsHydratantsSection() {
  const t = useTranslations('cosmetiques')
  const laitsHydratants = getLaitsHydratants()

  return (
    <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
      <Container>
        {/* Section Heading avec animation */}
        <AnimateOnScroll animation="fade-in-up" duration={500}>
          <SectionHeading
            title={t('laitsHydratants.title')}
            subtitle={t('laitsHydratants.subtitle')}
            align="center"
          />
        </AnimateOnScroll>

        {/* Products Grid animé */}
        <CosmetiquesGrid products={laitsHydratants} type="lait" />
      </Container>
    </section>
  )
}

// =============================================================================
// INFO SECTION (Server Component)
// =============================================================================

function InfoSection() {
  const t = useTranslations('cosmetiques')

  // Features data avec les clés de traduction
  const features = [
    {
      icon: 'droplets' as const,
      title: t('info.features.coconut.title'),
      description: t('info.features.coconut.description'),
    },
    {
      icon: 'shield' as const,
      title: t('info.features.hypoallergenic.title'),
      description: t('info.features.hypoallergenic.description'),
    },
    {
      icon: 'ban' as const,
      title: t('info.features.clean.title'),
      description: t('info.features.clean.description'),
    },
    {
      icon: 'leaf' as const,
      title: t('info.features.vegan.title'),
      description: t('info.features.vegan.description'),
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Titre et description avec animation */}
          <AnimateOnScroll animation="fade-in-up" duration={500}>
            <div className="text-center">
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                {t('info.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {t('info.description')}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Features Grid animé */}
          <FeaturesGrid features={features} />
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// FOOTER INFO (Server Component)
// =============================================================================

function CosmetiquesFooter() {
  const t = useTranslations('cosmetiques')

  const badges = [
    { color: 'bg-rose-500', text: t('info.features.coconut.title') },
    { color: 'bg-emerald-500', text: t('info.features.vegan.title') },
    { color: 'bg-amber-500', text: t('info.features.hypoallergenic.title') },
    { color: 'bg-sky-500', text: t('info.features.clean.title') },
  ]

  return (
    <section className="border-t border-border bg-muted/20 py-12">
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={500}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-6 text-muted-foreground">
              {t('info.description')}
            </p>
            <FooterInfo badges={badges} />
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}