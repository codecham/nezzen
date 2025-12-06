// src/app/[locale]/creations/bons-cadeau/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { Container, Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { 
  Gift, 
  Heart,
  Wallet,
  Mail,
  Check,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('bonsCadeau')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// Montants suggérés
const suggestedAmounts = [10, 20, 30, 50, 100]

/**
 * Page Bons Cadeau
 * Présente les options de bons cadeaux
 */
export default function BonsCadeauPage() {
  const t = useTranslations('bonsCadeau')

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/3 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/3 h-96 w-96 rounded-full bg-violet-100/30 blur-3xl" />
          
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
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Bon pour un parfum */}
            <GiftCardOption
              icon={<Heart className="h-8 w-8" />}
              iconBg="bg-rose-50 text-rose-500"
              borderColor="border-rose-100 hover:border-rose-200"
              title={t('options.parfum.title')}
              description={t('options.parfum.description')}
              includes={t('options.parfum.includes')}
              cta={t('options.parfum.cta')}
            />

            {/* Bon d'un montant au choix */}
            <div className="overflow-hidden rounded-2xl border-2 border-sky-100 bg-surface p-8 transition-all duration-300 hover:border-sky-200 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <Wallet className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {t('options.montant.title')}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {t('options.montant.description')}
                  </p>
                </div>
              </div>

              {/* Includes */}
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-sky-500" />
                <span>{t('options.montant.includes')}</span>
              </div>

              {/* Suggested Amounts */}
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">
                  {t('options.montant.amounts')}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {suggestedAmounts.map((amount) => (
                    <span
                      key={amount}
                      className="rounded-full border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {amount}€
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t('options.montant.custom')}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact">
                    {t('options.montant.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
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

            {/* Steps */}
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <StepCard
                number="1"
                icon={<Phone className="h-5 w-5" />}
                title={t('info.steps.order.title')}
                description={t('info.steps.order.description')}
              />
              <StepCard
                number="2"
                icon={<Mail className="h-5 w-5" />}
                title={t('info.steps.receive.title')}
                description={t('info.steps.receive.description')}
              />
              <StepCard
                number="3"
                icon={<Gift className="h-5 w-5" />}
                title={t('info.steps.enjoy.title')}
                description={t('info.steps.enjoy.description')}
              />
            </div>

            {/* Validity note */}
            <p className="mt-10 text-center text-sm text-muted-foreground">
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
   Gift Card Option Component
   ================================ */

interface GiftCardOptionProps {
  icon: React.ReactNode
  iconBg: string
  borderColor: string
  title: string
  description: string
  includes: string
  cta: string
}

function GiftCardOption({ 
  icon, 
  iconBg, 
  borderColor, 
  title, 
  description, 
  includes, 
  cta 
}: GiftCardOptionProps) {
  return (
    <div className={cn(
      'overflow-hidden rounded-2xl border-2 bg-surface p-8 transition-all duration-300 hover:shadow-lg',
      borderColor
    )}>
      <div className="flex items-start gap-4">
        <div className={cn(
          'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl',
          iconBg
        )}>
          {icon}
        </div>
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      {/* Includes */}
      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Check className="h-4 w-4 text-rose-500" />
        <span>{includes}</span>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Button asChild className="w-full sm:w-auto">
          <Link href="/contact">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

/* ================================
   Step Card Component
   ================================ */

interface StepCardProps {
  number: string
  icon: React.ReactNode
  title: string
  description: string
}

function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <div className="text-center">
      <div className="relative mx-auto">
        {/* Number circle */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 font-heading text-2xl font-semibold text-accent">
          {number}
        </div>
        {/* Icon badge */}
        <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-surface shadow-sm">
          {icon}
        </div>
      </div>
      <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  )
}