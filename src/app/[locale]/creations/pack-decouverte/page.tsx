// src/app/[locale]/creations/pack-decouverte/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { PageHero } from '@/components/shared'
import { PacksGrid, PackCard, InfoSectionClient, FooterNote } from './components'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('packDecouverte')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

/**
 * Page Pack Découverte
 * Présente les deux options de packs avec animations fluides
 */
export default function PackDecouvertePage() {
  const t = useTranslations('packDecouverte')

  return (
    <>
      {/* Hero Section avec animations */}
      <PageHero
        badge={t('hero.badge')}
        badgeIcon="package"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="lg"
      />

      {/* Packs Section */}
      <PacksSection />

      {/* Info Section */}
      <InfoSection />
    </>
  )
}

// =============================================================================
// PACKS SECTION (Server Component)
// =============================================================================

function PacksSection() {
  const t = useTranslations('packDecouverte')

  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* Grille des packs avec animation staggerée */}
        <PacksGrid>
          {/* Pack Découverte */}
          <PackCard
            packKey="decouverte"
            image="/images/packs/pack_decouverte.jpg"
          />

          {/* Pack Échantillons */}
          <PackCard
            packKey="echantillons"
            image="/images/packs/pack_echantillons.jpg"
          />
        </PacksGrid>

        {/* Note de commande animée */}
        <FooterNote orderNote={t('orderNote')} />
      </Container>
    </section>
  )
}

// =============================================================================
// INFO SECTION (Server Component)
// =============================================================================

function InfoSection() {
  const t = useTranslations('packDecouverte')

  return (
    <section className="border-t border-border py-16 lg:py-20">
      <Container>
        <InfoSectionClient
          title={t('info.title')}
          description={t('info.description')}
          quote={t('info.quote')}
          author={t('info.author')}
        />
      </Container>
    </section>
  )
}