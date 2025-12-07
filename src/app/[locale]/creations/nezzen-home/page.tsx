// src/app/[locale]/creations/nezzen-home/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Container, Button, Badge } from '@/components/ui'
import { SectionHeading } from '@/components/shared'
import { 
  Home, 
  Clock, 
  Maximize,
  Flame,
  Scale,
  Leaf,
  Sparkles,
  Timer
} from 'lucide-react'
import { parfumsAmbiance, bougies } from '@/data/parfums-ambiance'
import type { ParfumAmbiance, Bougie } from '@/types'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('nezzenHome')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

/**
 * Page NeZZen Home
 * Présente les parfums d'ambiance et les bougies
 */
export default function NezzenHomePage() {
  const t = useTranslations('nezzenHome')

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 backdrop-blur-sm">
              <Home className="h-4 w-4 text-emerald-600" />
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

      {/* Diffuseurs Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            title={t('diffuseurs.title')}
            subtitle={t('diffuseurs.subtitle')}
            align="center"
          />

          {/* Info badges */}
          <div className="mb-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                {t('diffuseurs.info.duration')}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2">
              <Maximize className="h-4 w-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-700">
                {t('diffuseurs.info.coverage')}
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parfumsAmbiance.map((product) => (
              <DiffuseurCard key={product.id} product={product} t={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bougies Section */}
      <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
        <Container>
          <SectionHeading
            title={t('bougies.title')}
            subtitle={t('bougies.subtitle')}
            align="center"
          />

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {bougies.map((product) => (
              <BougieCard key={product.id} product={product} t={t} />
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

            {/* Features */}
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <FeatureCard
                icon={<Leaf className="h-6 w-6" />}
                title={t('info.features.natural.title')}
                description={t('info.features.natural.description')}
              />
              <FeatureCard
                icon={<Sparkles className="h-6 w-6" />}
                title={t('info.features.artisan.title')}
                description={t('info.features.artisan.description')}
              />
              <FeatureCard
                icon={<Timer className="h-6 w-6" />}
                title={t('info.features.lasting.title')}
                description={t('info.features.lasting.description')}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

/* ================================
   Diffuseur Card Component
   ================================ */

interface DiffuseurCardProps {
  product: ParfumAmbiance
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
}

function DiffuseurCard({ product, t }: DiffuseurCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
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
            <Home className="h-16 w-16 text-muted-foreground/20" />
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

        {/* Specs */}
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
          {product.duration && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {product.duration}
            </span>
          )}
          {product.coverage && (
            <span className="flex items-center gap-1">
              <Maximize className="h-3.5 w-3.5" />
              {product.coverage}
            </span>
          )}
        </div>

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
   Bougie Card Component
   ================================ */

interface BougieCardProps {
  product: Bougie
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
}

function BougieCard({ product, t }: BougieCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-surface shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative aspect-square sm:w-1/2 overflow-hidden bg-muted/30">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Flame className="h-16 w-16 text-muted-foreground/20" />
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
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-6 sm:w-1/2">
          <h3 className="font-heading text-xl font-medium text-foreground">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {product.shortDescription}
          </p>

          {/* Specs */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-amber-500" />
              {product.burnTime}
            </span>
            <span className="flex items-center gap-2">
              <Scale className="h-4 w-4" />
              {product.weight}
            </span>
          </div>

          {/* Price & CTA */}
          <div className="mt-6 flex items-center justify-between">
            <span className="font-heading text-2xl font-semibold text-foreground">
              {product.price.toFixed(2).replace('.', ',')}€
            </span>
            <Button asChild size="sm" variant="outline">
              <Link href="/contact">
                {t('product.cta')}
              </Link>
            </Button>
          </div>
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
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        {icon}
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