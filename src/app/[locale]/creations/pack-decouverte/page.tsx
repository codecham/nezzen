// src/app/[locale]/creations/pack-decouverte/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container, Button } from '@/components/ui'
import { 
  Package, 
  Sparkles, 
  Check,
  ArrowRight,
  Truck,
  Quote
} from 'lucide-react'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('packDecouverte')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

/**
 * Page Pack Découverte
 * Présente les deux options en ligne
 */
export default function PackDecouvertePage() {
  const t = useTranslations('packDecouverte')

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-amber-100/30 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
              <Package className="h-4 w-4 text-accent" />
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

      {/* Packs Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Pack Découverte */}
            <PackCard
              packKey="decouverte"
              image="/images/packs/pack_decouverte.jpg"
              t={t}
            />

            {/* Pack Échantillons */}
            <PackCard
              packKey="echantillons"
              image="/images/packs/pack_echantillons.jpg"
              t={t}
            />
          </div>

          {/* Note de commande */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t('orderNote')}
          </p>
        </Container>
      </section>

      {/* Info Section */}
      <section className="border-t border-border py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                {t('info.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                {t('info.description')}
              </p>

              {/* Quote */}
              <div className="mx-auto mt-8 max-w-xl border-l-2 border-accent/30 pl-6 text-left">
                <Quote className="mb-2 h-5 w-5 text-accent/50" />
                <p className="italic text-foreground">
                  {t('info.quote')}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  — {t('info.author')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

/* ================================
   Pack Card Component
   ================================ */

interface PackCardProps {
  packKey: 'decouverte' | 'echantillons'
  image: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
}

function PackCard({ packKey, image, t }: PackCardProps) {
  // Features keys based on pack type
  const featureKeys = packKey === 'decouverte' 
    ? ['samples', 'bottle', 'shipping', 'test']
    : ['samples', 'price', 'home', 'rhythm']

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={t(`packs.${packKey}.title`)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        {/* Title */}
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          {t(`packs.${packKey}.title`)}
        </h3>
        <p className="mt-3 text-muted-foreground">
          {t(`packs.${packKey}.description`)}
        </p>

        {/* Samples count */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">
            {t(`packs.${packKey}.samples`)}
          </span>
        </div>

        {/* Price */}
        <div className="mt-5">
          <span className="text-3xl font-semibold text-foreground">
            {t(`packs.${packKey}.price`)}
          </span>
        </div>

        {/* Shipping info */}
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Truck className="h-4 w-4" />
          <span>{t(`packs.${packKey}.shipping`)}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {t(`packs.${packKey}.delivery`)}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-2.5">
          {featureKeys.map((featureKey) => (
            <li key={featureKey} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <span className="text-sm text-foreground">
                {t(`packs.${packKey}.features.${featureKey}`)}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <Button asChild size="lg" className="w-full">
            <Link href="/contact">
              {t(`packs.${packKey}.cta`)}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}