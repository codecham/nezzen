// src/app/[locale]/creations/bons-cadeau/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { PageHero } from '@/components/shared'
import { GiftCardSelector } from '@/components/shared/GiftCardSelector'
import { GiftCardsGrid, StepsSection, ContactCtaSection } from './components'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('bonsCadeau')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// CONSTANTS
// =============================================================================

// Options de formats pour le bon parfum
const parfumFormats = [
  { label: '15ml', price: 29 },
  { label: '50ml', price: 78 },
  { label: '100ml', price: 128 },
]

// Montants suggérés pour le bon montant libre
const suggestedAmounts = [10, 20, 30, 50, 100]

// =============================================================================
// PAGE COMPONENT
// =============================================================================

/**
 * Page Bons Cadeau
 * Présente les options de bons cadeaux avec sélection interactive et animations
 */
export default function BonsCadeauPage() {
  const t = useTranslations('bonsCadeau')

  return (
    <>
      {/* Hero Section avec animations */}
      <PageHero
        badge={t('hero.badge')}
        badgeIcon="gift"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="lg"
      />

      {/* Options Section */}
      <OptionsSection />

      {/* How it works Section */}
      <HowItWorksSection />
    </>
  )
}

// =============================================================================
// OPTIONS SECTION (Server Component)
// =============================================================================

function OptionsSection() {
  const t = useTranslations('bonsCadeau')

  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* Grid avec animation staggerée */}
        <GiftCardsGrid>
          {/* Bon pour un parfum */}
          <GiftCardSelector
            type="parfum"
            image="/images/bons-cadeau/bon-cadeau.jpg"
            title={t('options.parfum.title')}
            description={t('options.parfum.description')}
            selectionLabel={t('options.parfum.selectionLabel')}
            shipping={t('options.parfum.shipping')}
            delivery={t('options.parfum.delivery')}
            cta={t('options.parfum.cta')}
            ctaDisabled={t('options.parfum.ctaDisabled')}
            toastTitle={t('options.parfum.toastTitle')}
            toastDescription={t('options.parfum.toastDescription')}
            formatOptions={parfumFormats}
          />

          {/* Bon d'un montant au choix */}
          <GiftCardSelector
            type="montant"
            image="/images/bons-cadeau/bon-cadeau.jpg"
            title={t('options.montant.title')}
            description={t('options.montant.description')}
            selectionLabel={t('options.montant.selectionLabel')}
            shipping={t('options.montant.shipping')}
            delivery={t('options.montant.delivery')}
            cta={t('options.montant.cta')}
            ctaDisabled={t('options.montant.ctaDisabled')}
            toastTitle={t('options.montant.toastTitle')}
            toastDescription={t('options.montant.toastDescription')}
            suggestedAmounts={suggestedAmounts}
            customAmountLabel={t('options.montant.customLabel')}
            customAmountPlaceholder={t('options.montant.customPlaceholder')}
          />
        </GiftCardsGrid>
      </Container>
    </section>
  )
}

// =============================================================================
// HOW IT WORKS SECTION (Server Component)
// =============================================================================

function HowItWorksSection() {
  const t = useTranslations('bonsCadeau')

  // Steps data
  const steps = [
    {
      number: 1,
      title: t('info.steps.order.title'),
      description: t('info.steps.order.description'),
    },
    {
      number: 2,
      title: t('info.steps.receive.title'),
      description: t('info.steps.receive.description'),
    },
    {
      number: 3,
      title: t('info.steps.enjoy.title'),
      description: t('info.steps.enjoy.description'),
    },
  ]

  return (
    <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
      <Container>
        <StepsSection
          title={t('info.title')}
          steps={steps}
          validityNote={t('info.validity')}
        />

        {/* Contact CTA */}
        <ContactCtaSection contactText={t('info.contact')} />
      </Container>
    </section>
  )
}