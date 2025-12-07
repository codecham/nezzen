// src/app/[locale]/creations/bons-cadeau/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container, Button } from '@/components/ui'
import { GiftCardSelector } from '@/components/shared/GiftCardSelector'
import { Link } from '@/i18n/routing'
import { 
  Gift, 
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('bonsCadeau')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// Options de formats pour le bon parfum
const parfumFormats = [
  { label: '15ml', price: 29 },
  { label: '50ml', price: 78 },
  { label: '100ml', price: 128 },
]

// Montants suggérés pour le bon montant libre
const suggestedAmounts = [10, 20, 30, 50, 100]

/**
 * Page Bons Cadeau
 * Présente les options de bons cadeaux avec sélection interactive
 */
export default function BonsCadeauPage() {
  const t = useTranslations('bonsCadeau')

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/3 h-96 w-96 rounded-full bg-muted/50 blur-3xl" />
          
          {/* Decorative gifts */}
          <div className="absolute left-10 top-1/4 opacity-5">
            <Gift className="h-32 w-32 rotate-12" />
          </div>
          <div className="absolute right-10 bottom-1/4 opacity-5">
            <Gift className="h-24 w-24 -rotate-12" />
          </div>
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
              <Gift className="h-4 w-4 text-accent" />
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

      {/* Options Section */}
      <section className="py-16 lg:py-24">
        <Container>
          {/* Grid avec hauteur égale pour les deux cartes */}
          <div className="grid gap-8 md:grid-cols-2">
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
          </div>
        </Container>
      </section>

      {/* How it works Section */}
      <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              {t('info.title')}
            </h2>

            {/* Steps - Design moderne avec ligne de connexion */}
            <div className="relative mt-16">
              {/* Ligne de connexion (desktop) */}
              <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-border sm:block" />
              
              <div className="grid gap-8 sm:grid-cols-3">
                <StepCard
                  number={1}
                  title={t('info.steps.order.title')}
                  description={t('info.steps.order.description')}
                />
                <StepCard
                  number={2}
                  title={t('info.steps.receive.title')}
                  description={t('info.steps.receive.description')}
                />
                <StepCard
                  number={3}
                  title={t('info.steps.enjoy.title')}
                  description={t('info.steps.enjoy.description')}
                />
              </div>
            </div>

            {/* Validity note */}
            <p className="mt-12 text-center text-sm text-muted-foreground">
              {t('info.validity')}
            </p>

            {/* Contact CTA */}
            <div className="mt-10 rounded-xl bg-surface p-8 text-center shadow-sm">
              <h3 className="font-heading text-xl font-medium text-foreground">
                {t('info.contact')}
              </h3>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild variant="outline">
                  <a href="tel:+32493542818">
                    <Phone className="mr-2 h-4 w-4" />
                    +32 493 54 28 18
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:info@nezzen.be">
                    <Mail className="mr-2 h-4 w-4" />
                    info@nezzen.be
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/contact">
                    <MapPin className="mr-2 h-4 w-4" />
                    Nous rendre visite
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

/* ================================
   Step Card Component - Design moderne
   ================================ */

interface StepCardProps {
  number: number
  title: string
  description: string
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Cercle numéroté */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-surface shadow-sm">
        <span className="font-heading text-2xl font-semibold text-accent">
          {number}
        </span>
      </div>
      
      {/* Contenu */}
      <div className="mt-6">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}