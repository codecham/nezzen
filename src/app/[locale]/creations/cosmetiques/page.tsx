// src/app/[locale]/creations/cosmetiques/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container, Button, Badge } from '@/components/ui'
import { SectionHeading } from '@/components/shared'
import { cn } from '@/lib/utils'
import { 
  Sparkles, 
  Droplets,
  Heart,
  Leaf,
  Ban
} from 'lucide-react'
import { getGelsDouche, getLaitsHydratants } from '@/data/cosmetiques'
import type { Cosmetique } from '@/types'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('cosmetiques')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

/**
 * Page Cosmétiques
 * Présente les gels douche et laits hydratants
 */
export default function CosmetiquesPage() {
  const t = useTranslations('cosmetiques')
  
  const gelsDouche = getGelsDouche()
  const laitsHydratants = getLaitsHydratants()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 right-1/4 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl" />
          <div className="absolute -bottom-1/2 left-1/4 h-96 w-96 rounded-full bg-pink-100/30 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-rose-500" />
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

      {/* Gels Douche Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            title={t('gelsDouche.title')}
            subtitle={t('gelsDouche.subtitle')}
            align="left"
          />

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gelsDouche.map((product) => (
              <CosmetiqueCard key={product.id} product={product} t={t} type="gel" />
            ))}
          </div>
        </Container>
      </section>

      {/* Laits Hydratants Section */}
      <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
        <Container>
          <SectionHeading
            title={t('laitsHydratants.title')}
            subtitle={t('laitsHydratants.subtitle')}
            align="left"
          />

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {laitsHydratants.map((product) => (
              <CosmetiqueCard key={product.id} product={product} t={t} type="lait" />
            ))}
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                {t('info.title')}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t('info.description')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<Droplets className="h-6 w-6" />}
                title={t('info.features.coconut.title')}
                description={t('info.features.coconut.description')}
                color="bg-amber-50 text-amber-600"
              />
              <FeatureCard
                icon={<Heart className="h-6 w-6" />}
                title={t('info.features.hypoallergenic.title')}
                description={t('info.features.hypoallergenic.description')}
                color="bg-rose-50 text-rose-600"
              />
              <FeatureCard
                icon={<Ban className="h-6 w-6" />}
                title={t('info.features.clean.title')}
                description={t('info.features.clean.description')}
                color="bg-slate-100 text-slate-600"
              />
              <FeatureCard
                icon={<Leaf className="h-6 w-6" />}
                title={t('info.features.vegan.title')}
                description={t('info.features.vegan.description')}
                color="bg-emerald-50 text-emerald-600"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

/* ================================
   Cosmetique Card Component
   ================================ */

interface CosmetiqueCardProps {
  product: Cosmetique
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
  type: 'gel' | 'lait'
}

function CosmetiqueCard({ product, t, type }: CosmetiqueCardProps) {
  const iconColor = type === 'gel' ? 'text-sky-500' : 'text-rose-400'
  const bgGradient = type === 'gel' 
    ? 'from-sky-50 to-cyan-50' 
    : 'from-rose-50 to-pink-50'

  return (
    <article className="group overflow-hidden rounded-xl bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Image */}
      <div className={cn(
        'relative aspect-4/5 overflow-hidden',
        !product.image && `bg-linear-to-br ${bgGradient}`
      )}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              {type === 'gel' ? (
                <Droplets className={cn('mx-auto h-16 w-16', iconColor, 'opacity-30')} />
              ) : (
                <Heart className={cn('mx-auto h-16 w-16', iconColor, 'opacity-30')} />
              )}
              <span className="mt-2 block font-heading text-sm text-muted-foreground/50">
                {product.name}
              </span>
            </div>
          </div>
        )}

        {/* Badge Featured */}
        {product.isFeatured && (
          <div className="absolute left-3 top-3">
            <Badge variant="accent" size="sm">
              Coup de cœur
            </Badge>
          </div>
        )}

        {/* Volume Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {product.volume}
          </span>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-medium text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Ingredients tags */}
        {product.ingredients && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.ingredients.slice(0, 2).map((ingredient, index) => (
              <span 
                key={index}
                className="rounded-full bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {ingredient}
              </span>
            ))}
          </div>
        )}

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="font-heading text-xl font-semibold text-foreground">
            {product.price.toFixed(2).replace('.', ',')}€
          </span>
          <Button asChild size="sm" variant="outline">
            <Link href="/contact">
              {t('product.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

/* ================================
   Feature Card Component
   ================================ */

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className={cn(
        'mx-auto flex h-12 w-12 items-center justify-center rounded-full',
        color
      )}>
        {icon}
      </div>
      <h3 className="mt-4 font-heading text-base font-medium text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  )
}