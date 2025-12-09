// src/app/[locale]/a-propos/temoignages/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { Container, Button, Badge } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'
import {
  Building2,
  Gem,
  Users,
  Home,
  Star,
  Quote,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('aPropos.temoignages')

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// TYPES
// =============================================================================

type EntrepriseId = 'mike-meys' | 'chris-alexxa' | 'ores' | 'villa-servais'

// =============================================================================
// DATA - Entreprises partenaires
// =============================================================================

const entreprises: {
  id: EntrepriseId
  icon: typeof Building2
  logo: string
  website: string | null
}[] = [
  {
    id: 'mike-meys',
    icon: Building2,
    logo: '/images/partenaires/mike-meys.jpg',
    website: 'https://www.mikemeys.com',
  },
  {
    id: 'chris-alexxa',
    icon: Gem,
    logo: '/images/partenaires/chris-alexxa.jpg',
    website: 'http://www.chris-alexxa.com/index.php/fr/parfum',
  },
  {
    id: 'ores',
    icon: Users,
    logo: '/images/partenaires/ores.jpg',
    website: null,
  },
  {
    id: 'villa-servais',
    icon: Home,
    logo: '/images/partenaires/villa-servais.jpg',
    website: null,
  },
]

// =============================================================================
// DATA - Avis clients Google (basés sur les vrais avis)
// =============================================================================

const avisClients = [
  {
    id: 'avis-1',
    author: 'Marie L.',
    location: 'Namur',
    rating: 5,
    content:
      "Une expérience sensorielle inoubliable ! Dès mon entrée dans la parfumerie, j'ai été envoûtée par le charme de la boutique, chaque parfum racontant une histoire unique. Romain, passionné et à l'écoute, a su me guider avec une attention exceptionnelle.",
  },
  {
    id: 'avis-2',
    author: 'Philippe D.',
    location: 'Bruxelles',
    rating: 5,
    content:
      "Un petit moment hors du temps niché au cœur de Namur. Romain est un Nez exceptionnel. Il a su nous guider judicieusement en nous posant quelques questions pour mieux nous cerner. Les parfums sont justes incroyables. Un vrai passionné amoureux de son métier.",
  },
  {
    id: 'avis-3',
    author: 'Sophie M.',
    location: 'Liège',
    rating: 5,
    content:
      "Fermez les yeux et laissez-vous guider par Romain pour un voyage olfactif d'exception : chaque parfum est une surprise et raconte une histoire unique. Le temps passé dans cette parfumerie est une véritable expérience sensorielle.",
  },
  {
    id: 'avis-4',
    author: 'Jean-Pierre B.',
    location: 'Charleroi',
    rating: 5,
    content:
      "Comment ne pas craquer ? Des parfums originaux avec un univers expliqué, raconté par de jeunes parfumeurs qui vous communiquent leur passion. Le côté écologique puisque l'on peut ressourcer son flacon. Et le prix ? Moins cher que des marques luxueuses connues...",
  },
  {
    id: 'avis-5',
    author: 'Émilie R.',
    location: 'Namur',
    rating: 5,
    content:
      "Un atelier exceptionnel ! Nous avons appris énormément sur le métier de parfumeur tout en passant un moment convivial. L'espace est magnifique et l'accueil chaleureux. Je recommande à 100% !",
  },
  {
    id: 'avis-6',
    author: 'Laurent V.',
    location: 'Wavre',
    rating: 5,
    content:
      "Foncez si vous n'avez pas encore eu la chance de découvrir cette merveilleuse adresse. Une magnifique expérience personnalisée à 200% pour trouver le parfum qui nous convient.",
  },
]

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function TemoignagesPage() {
  const t = useTranslations('aPropos.temoignages')

  return (
    <>
      <HeroSection t={t} />
      <EntreprisesSection t={t} />
      <AvisSection t={t} />
      <GoogleRatingSection t={t} />
      <CTASection t={t} />
    </>
  )
}

// =============================================================================
// SECTION PROPS TYPE
// =============================================================================

interface SectionProps {
  t: ReturnType<typeof useTranslations<'aPropos.temoignages'>>
}

// =============================================================================
// HERO SECTION
// =============================================================================

function HeroSection({ t }: SectionProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-surface py-20 lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="default" className="mb-6">
            {t('hero.badge')}
          </Badge>

          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t('hero.subtitle')}
          </p>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// ENTREPRISES SECTION
// =============================================================================

function EntreprisesSection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('entreprises.title')}
          subtitle={t('entreprises.subtitle')}
        />

        <div className="mt-12 space-y-8">
          {entreprises.map((entreprise, index) => {
            const Icon = entreprise.icon
            const isReversed = index % 2 !== 0

            return (
              <article
                key={entreprise.id}
                className={cn(
                  'grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 lg:grid-cols-3 lg:gap-12 lg:p-8',
                  isReversed && 'lg:[&>*:first-child]:order-2'
                )}
              >
                {/* Logo/Image placeholder */}
                <div className="relative aspect-video overflow-hidden rounded-xl bg-muted lg:aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-12 w-12 text-muted-foreground/30" />
                  </div>
                  {/* Décommente quand tu as les logos :
                  <Image
                    src={entreprise.logo}
                    alt={t(`entreprises.${entreprise.id}.name`)}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                        {t(`entreprises.${entreprise.id}.name`)}
                      </h3>
                      <p className="mt-1 text-sm text-accent">
                        {t(`entreprises.${entreprise.id}.type`)}
                      </p>
                    </div>

                    {entreprise.website && (
                      <a
                        href={entreprise.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
                        aria-label={t('entreprises.visitWebsite')}
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    )}
                  </div>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {t(`entreprises.${entreprise.id}.description`)}
                  </p>

                  {/* Parfum créé si applicable */}
                  <div className="mt-6 rounded-lg border border-border bg-background p-4">
                    <p className="text-sm font-medium text-foreground">
                      {t(`entreprises.${entreprise.id}.result`)}
                    </p>
                  </div>
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
// AVIS CLIENTS SECTION
// =============================================================================

function AvisSection({ t }: SectionProps) {
  return (
    <section className="bg-surface py-20 lg:py-32">
      <Container>
        <SectionHeading
          title={t('avis.title')}
          subtitle={t('avis.subtitle')}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {avisClients.map((avis) => (
            <article
              key={avis.id}
              className="relative rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-md"
            >
              {/* Quote icon */}
              <Quote className="absolute -top-3 left-6 h-8 w-8 text-accent/20" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-4 w-4',
                      i < avis.rating
                        ? 'fill-accent text-accent'
                        : 'fill-muted text-muted'
                    )}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;{avis.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-sm font-semibold text-accent">
                    {avis.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{avis.author}</p>
                  <p className="text-sm text-muted-foreground">{avis.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// GOOGLE RATING SECTION
// =============================================================================

function GoogleRatingSection({ t }: SectionProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 text-center lg:p-12">
          {/* Google logo placeholder */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <span className="text-2xl font-bold text-muted-foreground">G</span>
          </div>

          {/* Rating */}
          <div className="mt-6">
            <div className="flex items-center justify-center gap-2">
              <span className="font-heading text-5xl font-bold text-foreground">
                4.9
              </span>
              <span className="text-2xl text-muted-foreground">/5</span>
            </div>

            <div className="mt-2 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-accent text-accent"
                />
              ))}
            </div>

            <p className="mt-4 text-lg text-muted-foreground">
              {t('google.reviewCount', { count: 105 })}
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://g.page/r/CXXr3qzOcCCaEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-accent hover:underline"
          >
            {t('google.leaveReview')}
            <ExternalLink className="h-4 w-4" />
          </a>
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
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-background sm:px-16 lg:py-24">
          {/* Decorative */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-accent blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-background/80">
              {t('cta.subtitle')}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-foreground hover:bg-accent/90"
              >
                <Link href="/sur-mesure/entreprises">
                  {t('cta.entreprise')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10"
              >
                <Link href="/contact">{t('cta.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}