// src/app/[locale]/creations/nezzen-home/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container, AnimateOnScroll } from '@/components/ui'
import { PageHero, SectionHeading } from '@/components/shared'
import { 
  DiffuseursGrid, 
  BougiesGrid, 
  InfoBadges, 
  FeaturesGrid,
  FooterInfo 
} from './components'
import { parfumsAmbiance, bougies } from '@/data/parfums-ambiance'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('nezzenHome')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

/**
 * Page NeZZen Home
 * Présente les parfums d'ambiance et les bougies avec animations fluides
 */
export default function NezzenHomePage() {
  const t = useTranslations('nezzenHome')

  return (
    <>
      {/* Hero Section avec animations */}
      <PageHero
        badge={t('hero.badge')}
        badgeIcon="home"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="lg"
      />

      {/* Diffuseurs Section */}
      <DiffuseursSection />

      {/* Bougies Section */}
      <BougiesSection />

      {/* Info Section */}
      <InfoSection />

      {/* Footer Info */}
      <NezzenHomeFooter />
    </>
  )
}

// =============================================================================
// DIFFUSEURS SECTION (Server Component)
// =============================================================================

function DiffuseursSection() {
  const t = useTranslations('nezzenHome')

  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* Section Heading avec animation */}
        <AnimateOnScroll animation="fade-in-up" duration={500}>
          <SectionHeading
            title={t('diffuseurs.title')}
            subtitle={t('diffuseurs.subtitle')}
            align="center"
          />
        </AnimateOnScroll>

        {/* Info badges animés */}
        <InfoBadges 
          durationText={t('diffuseurs.info.duration')}
          coverageText={t('diffuseurs.info.coverage')}
        />

        {/* Products Grid animé */}
        <DiffuseursGrid products={parfumsAmbiance} />
      </Container>
    </section>
  )
}

// =============================================================================
// BOUGIES SECTION (Server Component)
// =============================================================================

function BougiesSection() {
  const t = useTranslations('nezzenHome')

  return (
    <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
      <Container>
        {/* Section Heading avec animation */}
        <AnimateOnScroll animation="fade-in-up" duration={500}>
          <SectionHeading
            title={t('bougies.title')}
            subtitle={t('bougies.subtitle')}
            align="center"
          />
        </AnimateOnScroll>

        {/* Products Grid animé */}
        <BougiesGrid products={bougies} />
      </Container>
    </section>
  )
}

// =============================================================================
// INFO SECTION (Server Component)
// =============================================================================

function InfoSection() {
  const t = useTranslations('nezzenHome')

  // Features data avec les clés de traduction
  const features = [
    {
      icon: 'leaf' as const,
      title: t('info.features.natural.title'),
      description: t('info.features.natural.description'),
    },
    {
      icon: 'sparkles' as const,
      title: t('info.features.artisan.title'),
      description: t('info.features.artisan.description'),
    },
    {
      icon: 'timer' as const,
      title: t('info.features.lasting.title'),
      description: t('info.features.lasting.description'),
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
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

function NezzenHomeFooter() {
  const t = useTranslations('nezzenHome')

  const badges = [
    { color: 'bg-emerald-500', text: t('info.features.natural.title') },
    { color: 'bg-amber-500', text: t('info.features.artisan.title') },
    { color: 'bg-teal-500', text: t('info.features.lasting.title') },
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